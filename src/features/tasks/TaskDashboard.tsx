import React, { useState } from 'react';
import { Segmented, message } from 'antd';
import { 
  BarChart3, 
  Search, 
  AlertTriangle 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TaskService } from '../../services/dataService';
import { TaskItem } from '../../types';
import { FilterBar } from '../../components/common/FilterBar';
import { TaskOverviewMode } from './TaskOverviewMode';
import { TaskDeepAnalysisMode } from './TaskDeepAnalysisMode';
import { TaskUrgentActionMode } from './TaskUrgentActionMode';
import { TaskDetailDrawer } from './TaskDetailDrawer';
import { UrgencyModal } from '../../components/common/UrgencyModal';

export const TaskDashboard: React.FC = () => {
  const { filters, setFilters, refreshKey, triggerRefresh } = useApp();
  const [activeMode, setActiveMode] = useState<string>('OVERVIEW');
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expediteModalOpen, setExpediteModalOpen] = useState(false);
  const [taskToExpedite, setTaskToExpedite] = useState<TaskItem | null>(null);

  // Filter tasks based on global filters
  const tasks = TaskService.getAll(filters);
  const stats = TaskService.getStats(tasks);

  const handleOpenDetail = (task: TaskItem) => {
    setSelectedTask(task);
    setDrawerOpen(true);
  };

  const handleOpenExpedite = (task: TaskItem) => {
    setTaskToExpedite(task);
    setExpediteModalOpen(true);
  };

  const handleSelectDeptFilter = (deptName: string) => {
    setFilters(prev => ({ ...prev, department: deptName }));
  };

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "MÃ NHIỆM VỤ,TÊN NHIỆM VỤ,ĐƠN VỊ CHỦ TRÌ,LÃNH ĐẠO GIAO,HẠN XỬ LÝ,TIẾN ĐỘ (%),TRẠNG THÁI,MỨC ĐỘ KHẨN,SỐ LẦN ĐÔN ĐỐC\n";
    tasks.forEach(t => {
      const titleEscaped = `"${t.title.replace(/"/g, '""')}"`;
      csv += `${t.code},${titleEscaped},"${t.leadingDept}","${t.assignedLeader}",${t.deadline},${t.progress},${t.status},${t.priority},${t.expediteCount}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Nhiem_Vu_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất ${tasks.length} nhiệm vụ ra tệp CSV thành công!`);
  };

  return (
    <div>
      {/* Dashboard Header Bar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap', 
        gap: 12, 
        marginBottom: 12 
      }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Tổng quan nhiệm vụ giao
          </h1>
          <p style={{ fontSize: 13, color: '#64748b', margin: '3px 0 0 0' }}>
            Giám sát tiến độ thực hiện nhiệm vụ UBND tỉnh Hưng Yên giao các Sở, Ban, Ngành và đơn vị trên địa bàn
          </p>
        </div>

        {/* 3 Modes Segmented Switch (Exact style from reference image) */}
        <div>
          <Segmented
            value={activeMode}
            onChange={(val) => setActiveMode(val as string)}
            size="middle"
            className="mode-segmented-bar"
            style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: 2, borderRadius: 8 }}
            options={[
              {
                value: 'OVERVIEW',
                label: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 8px', fontWeight: 600 }}>
                    <BarChart3 size={15} />
                    <span>Tổng quan & Cảnh báo</span>
                  </div>
                )
              },
              {
                value: 'ANALYSIS',
                label: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 8px', fontWeight: 500, color: '#475569' }}>
                    <Search size={15} />
                    <span>Phân tích chuyên sâu</span>
                  </div>
                )
              },
              {
                value: 'URGENT',
                label: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 8px', fontWeight: 600, color: '#ef4444' }}>
                    <AlertTriangle size={15} color="#ef4444" />
                    <span>Đôn đốc & Xử lý gấp</span>
                  </div>
                )
              }
            ]}
          />
        </div>
      </div>

      {/* Global Filter Bar */}
      <FilterBar onExportCSV={handleExportCSV} />

      {/* Active Mode View */}
      {activeMode === 'OVERVIEW' && (
        <TaskOverviewMode
          tasks={tasks}
          stats={stats}
          onSelectTask={handleOpenDetail}
          onGoToUrgentMode={() => setActiveMode('URGENT')}
          onSelectDepartmentFilter={handleSelectDeptFilter}
        />
      )}

      {activeMode === 'ANALYSIS' && (
        <TaskDeepAnalysisMode
          tasks={tasks}
          onSelectDepartment={handleSelectDeptFilter}
        />
      )}

      {activeMode === 'URGENT' && (
        <TaskUrgentActionMode
          tasks={tasks}
          onOpenDetail={handleOpenDetail}
          onOpenExpedite={handleOpenExpedite}
        />
      )}

      {/* Detail Drawer */}
      <TaskDetailDrawer
        task={selectedTask}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenExpedite={handleOpenExpedite}
      />

      {/* Expedite Modal */}
      <UrgencyModal
        task={taskToExpedite}
        open={expediteModalOpen}
        onClose={() => setExpediteModalOpen(false)}
        onSuccess={triggerRefresh}
      />
    </div>
  );
};
