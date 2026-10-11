import React, { useState } from 'react';
import { Table, Button, Progress, Tag, Space, message } from 'antd';
import { Eye, Send, CheckCircle2, AlertOctagon, Clock, Layers, FileText } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TaskService } from '../../services/dataService';
import { TaskItem, TaskStatus } from '../../types';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';
import { PriorityBadge } from '../../components/common/StatusBadge';
import { TaskDetailDrawer } from './TaskDetailDrawer';
import { UrgencyModal } from '../../components/common/UrgencyModal';

interface TaskListPageProps {
  pageTitle: string;
  pageSubtitle: string;
  filterStatus?: TaskStatus | TaskStatus[];
}

export const TaskListPage: React.FC<TaskListPageProps> = ({
  pageTitle,
  pageSubtitle,
  filterStatus
}) => {
  const { filters, refreshKey, triggerRefresh } = useApp();
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expediteModalOpen, setExpediteModalOpen] = useState(false);
  const [taskToExpedite, setTaskToExpedite] = useState<TaskItem | null>(null);

  // Get filtered tasks
  let tasks = TaskService.getAll(filters);

  if (filterStatus) {
    if (Array.isArray(filterStatus)) {
      tasks = tasks.filter(t => filterStatus.includes(t.status));
    } else {
      tasks = tasks.filter(t => t.status === filterStatus);
    }
  }

  const stats = TaskService.getStats(tasks);

  const handleOpenDetail = (task: TaskItem) => {
    setSelectedTask(task);
    setDrawerOpen(true);
  };

  const handleOpenExpedite = (task: TaskItem) => {
    setTaskToExpedite(task);
    setExpediteModalOpen(true);
  };

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "MÃ NHIỆM VỤ,TÊN NHIỆM VỤ,ĐƠN VỊ CHỦ TRÌ,LÃNH ĐẠO GIAO,HẠN XỬ LÝ,TIẾN ĐỘ (%),TRẠNG THÁI\n";
    tasks.forEach(t => {
      const titleEscaped = `"${t.title.replace(/"/g, '""')}"`;
      csv += `${t.code},${titleEscaped},"${t.leadingDept}","${t.assignedLeader}",${t.deadline},${t.progress},${t.status}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `${pageTitle.replace(/\s+/g, '_')}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất ${tasks.length} bản ghi ra file CSV thành công!`);
  };

  const columns = [
    {
      title: 'STT',
      key: 'stt',
      width: 50,
      align: 'center' as const,
      render: (_: any, __: any, index: number) => index + 1
    },
    {
      title: 'Mã nhiệm vụ',
      dataIndex: 'code',
      key: 'code',
      width: 125,
      render: (t: string, r: TaskItem) => (
        <div>
          <span style={{ fontWeight: 700, color: '#0b74e5', fontSize: 12 }}>{t}</span>
          <div style={{ marginTop: 2 }}><PriorityBadge priority={r.priority} /></div>
        </div>
      )
    },
    {
      title: 'Tên nhiệm vụ',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, r: TaskItem) => (
        <div>
          <a 
            onClick={() => handleOpenDetail(r)}
            style={{ fontWeight: 600, color: '#1e293b', fontSize: 13, lineHeight: 1.4 }}
          >
            {text}
          </a>
          {r.expediteCount > 0 && (
            <Tag color="red" style={{ marginLeft: 6, fontSize: 11, borderRadius: 10 }}>Đã đôn đốc {r.expediteCount} lần</Tag>
          )}
        </div>
      )
    },
    {
      title: 'Đơn vị chủ trì',
      dataIndex: 'leadingDept',
      key: 'leadingDept',
      width: 190,
      render: (t: string) => <span style={{ color: '#0f172a', fontWeight: 600 }}>{t}</span>
    },
    {
      title: 'Lãnh đạo giao',
      dataIndex: 'assignedLeader',
      key: 'assignedLeader',
      width: 160,
      render: (t: string) => <span style={{ color: '#475569' }}>{t}</span>
    },
    {
      title: 'Hạn xử lý',
      dataIndex: 'deadline',
      key: 'deadline',
      width: 110,
      render: (t: string, r: TaskItem) => (
        <span style={{ 
          color: r.status === 'QUA_HAN_CHUA_HOAN_THANH' || r.status === 'SAP_DEN_HAN' ? '#dc2626' : '#1e293b',
          fontWeight: 600,
          fontSize: 12.5
        }}>
          {t}
        </span>
      )
    },
    {
      title: 'Tiến độ',
      dataIndex: 'progress',
      key: 'progress',
      width: 125,
      render: (v: number, r: TaskItem) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress 
            percent={v} 
            size="small" 
            showInfo={false}
            strokeColor={r.status === 'QUA_HAN_CHUA_HOAN_THANH' ? '#ef4444' : r.status === 'SAP_DEN_HAN' ? '#f59e0b' : '#10b981'}
            style={{ flex: 1 }}
          />
          <span style={{ fontSize: 12, fontWeight: 600, color: '#64748b', width: 30 }}>{v}%</span>
        </div>
      )
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      render: (s: TaskStatus) => {
        if (s === 'DANG_XU_LY') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#0284c7', fontSize: 12.5, fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0284c7' }} /> Đang thực hiện
            </span>
          );
        }
        if (s === 'SAP_DEN_HAN') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#ea580c', fontSize: 12.5, fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ea580c' }} /> Sắp đến hạn
            </span>
          );
        }
        if (s === 'QUA_HAN_CHUA_HOAN_THANH') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#dc2626', fontSize: 12.5, fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#dc2626' }} /> Quá hạn
            </span>
          );
        }
        if (s === 'CHO_PHE_DUYET') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#7c3aed', fontSize: 12.5, fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7c3aed' }} /> Chờ phê duyệt
            </span>
          );
        }
        if (s === 'CHUA_GIAO') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 12.5, fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#94a3b8' }} /> Chưa giao xử lý
            </span>
          );
        }
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#16a34a', fontSize: 12.5, fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }} /> Đã hoàn thành
          </span>
        );
      }
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 130,
      render: (_: any, record: TaskItem) => (
        <Space size={4}>
          <Button 
            size="small" 
            icon={<Eye size={12} />}
            onClick={() => handleOpenDetail(record)}
            style={{ fontSize: 12 }}
          >
            Chi tiết
          </Button>
          {(record.status === 'QUA_HAN_CHUA_HOAN_THANH' || record.status === 'SAP_DEN_HAN') && (
            <Button 
              size="small" 
              danger
              icon={<Send size={12} />}
              onClick={() => handleOpenExpedite(record)}
              style={{ fontSize: 12 }}
            >
              Đôn đốc
            </Button>
          )}
        </Space>
      )
    }
  ];

  return (
    <div>
      {/* Title */}
      <div style={{ marginBottom: 12 }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
          {pageTitle}
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
          {pageSubtitle}
        </p>
      </div>

      {/* Filter Bar */}
      <FilterBar onExportCSV={handleExportCSV} />

      {/* Executive Phố Hiến Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner
          title={`Danh mục: ${pageTitle}`}
          summary={`Danh sách hiển thị ${tasks.length} nhiệm vụ phù hợp với tiêu chí lọc. Hệ thống kết nối chỉ đạo điều hành trực tiếp giữa UBND Tỉnh, các Sở/Ban/Ngành và 104 Xã, Phường trên toàn tỉnh Hưng Yên.`}
          actionText="Xuất danh sách"
          onActionClick={handleExportCSV}
          metrics={[
            { label: 'Tổng số mục', value: tasks.length, color: '#0f172a' },
            { label: 'Tiến độ TB', value: `${tasks.length > 0 ? Math.round(tasks.reduce((s, t) => s + t.progress, 0) / tasks.length) : 0}%`, color: '#0b74e5' },
            { label: 'Quá hạn', value: tasks.filter(t => t.status === 'QUA_HAN_CHUA_HOAN_THANH').length, color: '#ef4444' },
            { label: 'Sắp đến hạn', value: tasks.filter(t => t.status === 'SAP_DEN_HAN').length, color: '#f59e0b' }
          ]}
        />
      </div>

      {/* 4 KPIs Row */}
      <div className="kpi-grid-4">
        <KPICard
          title="Tổng số trong danh mục"
          value={tasks.length}
          icon={<Layers size={16} />}
          iconBg="#eff6ff"
          iconColor="#2563eb"
          subText="Theo điều kiện lọc hiện tại"
        />
        <KPICard
          title="Tiến độ trung bình"
          value={tasks.length > 0 ? `${Math.round(tasks.reduce((s, t) => s + t.progress, 0) / tasks.length)}%` : '0%'}
          icon={<Clock size={16} />}
          iconBg="#f0fdf4"
          iconColor="#10b981"
          subText="Khối lượng hoàn thành"
        />
        <KPICard
          title="Nhiệm vụ cần đôn đốc"
          value={tasks.filter(t => t.status === 'QUA_HAN_CHUA_HOAN_THANH' || t.expediteCount > 0).length}
          valueColor="#ef4444"
          icon={<AlertOctagon size={16} />}
          iconBg="#fef2f2"
          iconColor="#ef4444"
          subText="Có cảnh báo tiến độ"
          highlight={tasks.filter(t => t.status === 'QUA_HAN_CHUA_HOAN_THANH').length > 0}
        />
        <KPICard
          title="Đơn vị chủ trì liên quan"
          value={Array.from(new Set(tasks.map(t => t.leadingDept))).length}
          icon={<FileText size={16} />}
          iconBg="#faf5ff"
          iconColor="#7c3aed"
          subText="Sở ngành & Xã/Phường"
        />
      </div>

      {/* Main Table */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">Danh sách chi tiết ({tasks.length} nhiệm vụ)</span>
          <span style={{ fontSize: 12, color: '#0b74e5', fontWeight: 600 }}>Dữ liệu chỉ đạo điều hành UBND tỉnh Hưng Yên</span>
        </div>

        <Table
          dataSource={tasks}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10, showSizeChanger: true }}
          size="middle"
          bordered
          scroll={{ x: 950 }}
        />
      </div>

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
