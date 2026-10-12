import React from 'react';
import { Row, Col, Table, Progress, Tag, Button, Select, Space } from 'antd';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip as RechartsTooltip, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from 'recharts';
import { 
  Layers, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Calendar, 
  Hourglass, 
  FolderCheck,
  ChevronRight,
  Eye,
  MoreHorizontal
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TaskItem } from '../../types';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';
import { FEATURED_TASKS_MOCK } from '../../mocks/tasks.mock';

interface TaskOverviewModeProps {
  tasks: TaskItem[];
  stats: ReturnType<typeof import('../../services/dataService').TaskService.getStats>;
  onSelectTask: (task: TaskItem) => void;
  onGoToUrgentMode: () => void;
  onSelectDepartmentFilter: (deptName: string) => void;
}

export const TaskOverviewMode: React.FC<TaskOverviewModeProps> = ({
  tasks,
  stats,
  onSelectTask,
  onGoToUrgentMode,
  onSelectDepartmentFilter
}) => {
  const navigate = useNavigate();
  // Donut data matching exact numbers from reference image:
  // 37 Đã hoàn thành (29.8%), 38 Đang thực hiện (30.6%), 28 Sắp đến hạn (22.6%), 21 Quá hạn (17.0%)
  const donutData = [
    { name: 'Đã hoàn thành', value: 37, percentage: '29,8%', color: '#10B981' },
    { name: 'Đang thực hiện', value: 38, percentage: '30,6%', color: '#06B6D4' },
    { name: 'Sắp đến hạn', value: 28, percentage: '22,6%', color: '#F59E0B' },
    { name: 'Quá hạn', value: 21, percentage: '17,0%', color: '#EF4444' }
  ];

  // 6 months trend data matching reference image
  const trendData = [
    { month: 'T5/2026', assigned: 20, completed: 17, nearDeadline: 2, overdue: 5 },
    { month: 'T6/2026', assigned: 27, completed: 18, nearDeadline: 3, overdue: 5 },
    { month: 'T7/2026', assigned: 25, completed: 17, nearDeadline: 2, overdue: 5 },
    { month: 'T8/2026', assigned: 28, completed: 21, nearDeadline: 3, overdue: 5 },
    { month: 'T9/2026', assigned: 30, completed: 19, nearDeadline: 4, overdue: 6 },
    { month: 'T10/2026', assigned: 34, completed: 22, nearDeadline: 5, overdue: 7 }
  ];

  // Top 5 units under focus matching 10 provincial departments & 104 communes/wards:
  const focusUnits = [
    {
      stt: 1,
      name: 'Sở Nông nghiệp và Môi trường',
      total: 6,
      inProgress: 0,
      overdue: 3,
      pillColor: '#fef2f2',
      textColor: '#ef4444'
    },
    {
      stt: 2,
      name: 'UBND Xã Văn Giang',
      total: 5,
      inProgress: 1,
      overdue: 2,
      pillColor: '#fef2f2',
      textColor: '#ef4444'
    },
    {
      stt: 3,
      name: 'Sở Tài chính',
      total: 6,
      inProgress: 3,
      overdue: 2,
      pillColor: '#fffbeb',
      textColor: '#f59e0b'
    },
    {
      stt: 4,
      name: 'Sở Xây dựng',
      total: 4,
      inProgress: 2,
      overdue: 1,
      pillColor: '#fffbeb',
      textColor: '#f59e0b'
    },
    {
      stt: 5,
      name: 'Ban Quản lý các KCN tỉnh',
      total: 3,
      inProgress: 1,
      overdue: 1,
      pillColor: '#fffbeb',
      textColor: '#f59e0b'
    }
  ];

  // Featured tasks matching bottom table in reference image
  const featuredTasks = FEATURED_TASKS_MOCK;

  const tableColumns = [
    {
      title: 'STT',
      key: 'stt',
      width: 50,
      align: 'center' as const,
      render: (_: any, __: any, index: number) => index + 1
    },
    {
      title: 'Tên nhiệm vụ',
      dataIndex: 'title',
      key: 'title',
      render: (t: string, r: TaskItem) => (
        <a 
          onClick={() => onSelectTask(r)}
          style={{ fontWeight: 600, color: '#1e293b', fontSize: 13 }}
        >
          {t}
        </a>
      )
    },
    {
      title: 'Đơn vị chủ trì',
      dataIndex: 'leadingDept',
      key: 'leadingDept',
      width: 220,
      render: (t: string) => <span style={{ color: '#334155', fontWeight: 500 }}>{t}</span>
    },
    {
      title: 'Lãnh đạo giao',
      dataIndex: 'assignedLeader',
      key: 'assignedLeader',
      width: 170,
      render: (t: string) => <span style={{ color: '#475569' }}>{t}</span>
    },
    {
      title: 'Ngày giao',
      dataIndex: 'assignDate',
      key: 'assignDate',
      width: 110,
      render: (t: string) => <span style={{ color: '#64748b', fontSize: 12.5 }}>{t}</span>
    },
    {
      title: 'Hạn xử lý',
      dataIndex: 'deadline',
      key: 'deadline',
      width: 110,
      render: (t: string, r: TaskItem) => (
        <span style={{ 
          color: r.status === 'QUA_HAN_CHUA_HOAN_THANH' || r.status === 'SAP_DEN_HAN' ? '#ef4444' : '#1e293b',
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
      width: 130,
      render: (v: number, r: TaskItem) => {
        let strokeColor = '#10b981';
        if (r.status === 'QUA_HAN_CHUA_HOAN_THANH') strokeColor = '#ef4444';
        else if (r.status === 'SAP_DEN_HAN') strokeColor = '#f59e0b';
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Progress percent={v} size="small" showInfo={false} strokeColor={strokeColor} style={{ flex: 1 }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#64748b', width: 30 }}>{v}%</span>
          </div>
        );
      }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      render: (s: string) => {
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
      key: 'actions',
      width: 110,
      render: (_: any, r: TaskItem) => (
        <Space size={4}>
          <Button 
            size="small" 
            icon={<Eye size={12} />} 
            onClick={() => onSelectTask(r)}
            style={{ fontSize: 12 }}
          >
            Chi tiết
          </Button>
          <Button size="small" icon={<MoreHorizontal size={12} />} />
        </Space>
      )
    }
  ];

  return (
    <div>
      {/* Executive Summary Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner onActionClick={onGoToUrgentMode} />
      </div>

      {/* 4 KPI Chính (Hàng 1 - Nổi bật, rộng rãi, click mở danh sách) */}
      <div className="kpi-grid-4" style={{ marginBottom: 10 }}>
        <KPICard
          title="Tổng nhiệm vụ"
          value={stats.total}
          icon={<Layers size={18} />}
          iconBg="#E8F2FB"
          iconColor="#1769AA"
          subText="Nhiệm vụ UBND tỉnh giao"
          onClick={() => navigate('/nhiem-vu/can-xu-ly')}
        />
        <KPICard
          title="Đã hoàn thành"
          value={stats.completedTotal}
          icon={<CheckCircle2 size={18} />}
          iconBg="#ecfdf5"
          iconColor="#159A75"
          subText={`Đạt ${stats.completionRate}%`}
          trendText="↑ +4,2%"
          trendColor="#159A75"
          onClick={() => navigate('/nhiem-vu/da-hoan-thanh')}
        />
        <KPICard
          title="Đang thực hiện"
          value={stats.inProgress}
          icon={<Clock size={18} />}
          iconBg="#f0f9ff"
          iconColor="#0284c7"
          subText="Trong hạn quy định"
          onClick={() => navigate('/nhiem-vu/dang-giai-quyet')}
        />
        <KPICard
          title="Quá hạn chưa hoàn thành"
          value={stats.overduePending}
          valueColor="#D64545"
          icon={<AlertTriangle size={18} />}
          iconBg="#fef2f2"
          iconColor="#D64545"
          subText="Cần chỉ đạo đôn đốc gấp"
          trendText="↑ Cần xử lý"
          trendColor="#D64545"
          highlight
          onClick={() => navigate('/nhiem-vu/dang-giai-quyet-qua-han')}
        />
      </div>

      {/* 3 KPI Hỗ trợ (Hàng 2 - Gọn gàng, bổ trợ thông tin) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10, marginBottom: 16 }}>
        <KPICard
          title="Sắp đến hạn"
          value={stats.nearDeadline}
          valueColor="#D99A25"
          icon={<Calendar size={16} />}
          iconBg="#fffbeb"
          iconColor="#D99A25"
          subText="Trong 3-5 ngày tới"
          onClick={() => navigate('/nhiem-vu/can-xu-ly')}
        />
        <KPICard
          title="Chờ phê duyệt"
          value={stats.awaitingApproval}
          icon={<Hourglass size={16} />}
          iconBg="#faf5ff"
          iconColor="#8b5cf6"
          subText="Đã nộp báo cáo kết quả"
          onClick={() => navigate('/nhiem-vu/can-xu-ly')}
        />
        <KPICard
          title="Chưa giao xử lý"
          value={stats.unassigned}
          icon={<FolderCheck size={16} />}
          iconBg="#f1f5f9"
          iconColor="#64748b"
          subText="Chờ phân công cán bộ"
        />
      </div>

      {/* Middle Row of 3 Blocks: Cơ cấu tiến độ | Xu hướng thực hiện | Đơn vị cần tập trung */}
      <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
        {/* Block 1: Cơ cấu tiến độ nhiệm vụ */}
        <Col xs={24} lg={8}>
          <div className="gov-card" style={{ height: '100%', minHeight: 330 }}>
            <div className="gov-card-header">
              <span className="gov-card-title">Cơ cấu tiến độ nhiệm vụ</span>
              <Select
                defaultValue="status"
                size="small"
                style={{ width: 130 }}
                options={[{ value: 'status', label: 'Theo trạng thái' }]}
              />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', height: 240 }}>
              {/* Donut Chart with Center Text */}
              <div style={{ position: 'relative', width: '55%', height: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={donutData}
                      cx="50%"
                      cy="50%"
                      innerRadius={46}
                      outerRadius={72}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ percentage }: any) => percentage}
                      labelLine={false}
                    >
                      {donutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center Label */}
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  textAlign: 'center',
                  pointerEvents: 'none'
                }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>124</div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>nhiệm vụ</div>
                </div>
              </div>

              {/* Legend with exact numbers & percentages matching image */}
              <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 6 }}>
                {donutData.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 2, background: item.color }} />
                      <span style={{ color: '#475569' }}>{item.name}</span>
                    </div>
                    <span style={{ fontWeight: 700, color: '#0f172a' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>

        {/* Block 2: Xu hướng thực hiện nhiệm vụ */}
        <Col xs={24} lg={8}>
          <div className="gov-card" style={{ height: '100%', minHeight: 330 }}>
            <div className="gov-card-header">
              <span className="gov-card-title">Xu hướng thực hiện nhiệm vụ</span>
              <Select
                defaultValue="6m"
                size="small"
                style={{ width: 130 }}
                options={[{ value: '6m', label: '6 tháng gần nhất' }]}
              />
            </div>
            <div style={{ height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trendData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <RechartsTooltip />
                  <Bar dataKey="assigned" name="Được giao" fill="#0284c7" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="completed" name="Hoàn thành" fill="#10b981" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="nearDeadline" name="Sắp đến hạn" fill="#f59e0b" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="overdue" name="Quá hạn" fill="#ef4444" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              {/* Custom bottom legend matching image */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 4, fontSize: 11 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 8, height: 8, background: '#0284c7', borderRadius: 2 }} /> Được giao
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: 2 }} /> Hoàn thành
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 8, height: 8, background: '#f59e0b', borderRadius: 2 }} /> Sắp đến hạn
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 8, height: 8, background: '#ef4444', borderRadius: 2 }} /> Quá hạn
                </span>
              </div>
            </div>
          </div>
        </Col>

        {/* Block 3: Đơn vị cần tập trung chỉ đạo */}
        <Col xs={24} lg={8}>
          <div className="gov-card" style={{ height: '100%', minHeight: 330 }}>
            <div className="gov-card-header">
              <span className="gov-card-title">Đơn vị cần tập trung chỉ đạo</span>
              <Tag color="red" style={{ borderRadius: 10, fontSize: 11, fontWeight: 600 }}>Cảnh báo chậm</Tag>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {focusUnits.map((u) => (
                <div 
                  key={u.stt}
                  onClick={() => onSelectDepartmentFilter(u.name)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: 6,
                    background: '#f8fafc',
                    border: '1px solid #eef2f6',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ 
                      width: 22, 
                      height: 22, 
                      borderRadius: '50%', 
                      background: u.stt <= 2 ? '#ef4444' : '#f59e0b', 
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      fontWeight: 700
                    }}>
                      {u.stt}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>{u.name}</div>
                      <div style={{ fontSize: 11.5, color: '#64748b' }}>
                        Tổng số: {u.total} | Đang làm: {u.inProgress}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ 
                      padding: '2px 8px', 
                      borderRadius: 12, 
                      background: u.pillColor, 
                      color: u.textColor,
                      fontWeight: 700,
                      fontSize: 11
                    }}>
                      {u.overdue} quá hạn
                    </span>
                    <ChevronRight size={14} color="#94a3b8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Bottom Section: Danh sách nhiệm vụ nổi bật cần quan tâm */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">Danh sách nhiệm vụ nổi bật cần quan tâm</span>
          <a onClick={onGoToUrgentMode} style={{ fontSize: 12.5, fontWeight: 600, color: '#0b74e5', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            Xem tất cả <ChevronRight size={13} />
          </a>
        </div>

        <Table
          dataSource={featuredTasks}
          columns={tableColumns}
          rowKey="id"
          pagination={false}
          size="middle"
          bordered
          scroll={{ x: 950 }}
        />
      </div>
    </div>
  );
};
