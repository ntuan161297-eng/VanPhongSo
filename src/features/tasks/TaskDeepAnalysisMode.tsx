import React from 'react';
import { Row, Col, Table, Progress, Tag, Tabs } from 'antd';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { TaskItem } from '../../types';
import { DEPARTMENTS_MOCK } from '../../mocks/departments.mock';

interface TaskDeepAnalysisModeProps {
  tasks: TaskItem[];
  onSelectDepartment: (deptName: string) => void;
}

export const TaskDeepAnalysisMode: React.FC<TaskDeepAnalysisModeProps> = ({
  tasks,
  onSelectDepartment
}) => {
  // Aggregate stats by department
  const deptStats: Record<string, {
    dept: string;
    total: number;
    completed: number;
    completedOnTime: number;
    completedLate: number;
    inProgress: number;
    overdue: number;
  }> = {};

  DEPARTMENTS_MOCK.forEach(d => {
    deptStats[d.name] = {
      dept: d.name,
      total: 0,
      completed: 0,
      completedOnTime: 0,
      completedLate: 0,
      inProgress: 0,
      overdue: 0
    };
  });

  tasks.forEach(t => {
    const key = t.leadingDept;
    if (!deptStats[key]) {
      deptStats[key] = {
        dept: key,
        total: 0,
        completed: 0,
        completedOnTime: 0,
        completedLate: 0,
        inProgress: 0,
        overdue: 0
      };
    }
    deptStats[key].total += 1;
    if (t.status === 'DA_HOAN_THANH') {
      deptStats[key].completed += 1;
      deptStats[key].completedOnTime += 1;
    } else if (t.status === 'HOAN_THANH_QUA_HAN') {
      deptStats[key].completed += 1;
      deptStats[key].completedLate += 1;
    } else if (t.status === 'DANG_XU_LY' || t.status === 'SAP_DEN_HAN') {
      deptStats[key].inProgress += 1;
    } else if (t.status === 'QUA_HAN_CHUA_HOAN_THANH') {
      deptStats[key].overdue += 1;
    }
  });

  const deptTableData = Object.values(deptStats)
    .filter(d => d.total > 0)
    .sort((a, b) => b.total - a.total);

  const columns = [
    {
      title: 'Đơn vị thực hiện',
      dataIndex: 'dept',
      key: 'dept',
      render: (t: string) => (
        <a onClick={() => onSelectDepartment(t)} style={{ fontWeight: 600, color: '#0369a1' }}>
          {t}
        </a>
      )
    },
    {
      title: 'Tổng nhiệm vụ',
      dataIndex: 'total',
      key: 'total',
      align: 'center' as const,
      sorter: (a: any, b: any) => a.total - b.total,
      render: (v: number) => <strong>{v}</strong>
    },
    {
      title: 'Đã hoàn thành',
      dataIndex: 'completed',
      key: 'completed',
      align: 'center' as const,
      sorter: (a: any, b: any) => a.completed - b.completed,
      render: (v: number, r: any) => {
        const pct = r.total > 0 ? Math.round((v / r.total) * 100) : 0;
        return (
          <div>
            <span>{v} ({pct}%)</span>
            <Progress percent={pct} size="small" showInfo={false} strokeColor="#10b981" />
          </div>
        );
      }
    },
    {
      title: 'Đúng hạn',
      dataIndex: 'completedOnTime',
      key: 'completedOnTime',
      align: 'center' as const,
      render: (v: number) => <span style={{ color: '#10b981', fontWeight: 600 }}>{v}</span>
    },
    {
      title: 'Hoàn thành quá hạn',
      dataIndex: 'completedLate',
      key: 'completedLate',
      align: 'center' as const,
      render: (v: number) => <span style={{ color: '#f59e0b', fontWeight: 600 }}>{v}</span>
    },
    {
      title: 'Đang giải quyết',
      dataIndex: 'inProgress',
      key: 'inProgress',
      align: 'center' as const,
      render: (v: number) => <span style={{ color: '#0284c7', fontWeight: 600 }}>{v}</span>
    },
    {
      title: 'Đang giải quyết quá hạn',
      dataIndex: 'overdue',
      key: 'overdue',
      align: 'center' as const,
      sorter: (a: any, b: any) => a.overdue - b.overdue,
      render: (v: number) => (
        v > 0 ? <Tag color="error" style={{ fontWeight: 600 }}>{v} vụ</Tag> : <Tag color="success">0</Tag>
      )
    }
  ];

  // Stats by field
  const fieldMap: Record<string, number> = {};
  tasks.forEach(t => {
    fieldMap[t.field] = (fieldMap[t.field] || 0) + 1;
  });
  const fieldChartData = Object.entries(fieldMap).map(([name, count]) => ({ name, count }));

  // Stats by leader
  const leaderMap: Record<string, { total: number; completed: number; overdue: number }> = {};
  tasks.forEach(t => {
    if (!leaderMap[t.assignedLeader]) {
      leaderMap[t.assignedLeader] = { total: 0, completed: 0, overdue: 0 };
    }
    leaderMap[t.assignedLeader].total += 1;
    if (t.status === 'DA_HOAN_THANH' || t.status === 'HOAN_THANH_QUA_HAN') {
      leaderMap[t.assignedLeader].completed += 1;
    }
    if (t.status === 'QUA_HAN_CHUA_HOAN_THANH') {
      leaderMap[t.assignedLeader].overdue += 1;
    }
  });

  const leaderChartData = Object.entries(leaderMap).map(([leader, d]) => ({
    name: leader.split(' - ')[0].replace('Đ/c ', ''),
    assigned: d.total,
    completed: d.completed,
    overdue: d.overdue
  }));

  const COLORS = ['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#EC4899'];

  return (
    <div>
      {/* Overview Charts by Leader & Sector */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={14}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Thống kê theo Lãnh đạo UBND tỉnh giao việc</span>
              <span style={{ fontSize: 12, color: '#64748b' }}>Tiến độ các khối công tác</span>
            </div>
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leaderChartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <RechartsTooltip />
                  <Legend wrapperStyle={{ fontSize: 11.5 }} />
                  <Bar dataKey="assigned" name="Tổng giao" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completed" name="Đã hoàn thành" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="overdue" name="Quá hạn" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={10}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Cơ cấu nhiệm vụ theo lĩnh vực</span>
              <Tag color="cyan">7 Lĩnh vực</Tag>
            </div>
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fieldChartData}
                    cx="50%"
                    cy="45%"
                    innerRadius={45}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="count"
                  >
                    {fieldChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    iconSize={8}
                    wrapperStyle={{ fontSize: 11, paddingTop: 4 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Detailed Department Performance Table */}
      <div className="gov-card">
        <div className="gov-card-header">
          <div>
            <span className="gov-card-title">Bảng tình hình thực hiện nhiệm vụ theo đơn vị</span>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
              Thống kê chi tiết theo 2 nhóm: Sở/Ban/Ngành cấp tỉnh và UBND các Xã/Phường (Click vào tên đơn vị để lọc chi tiết)
            </div>
          </div>
          <Tag color="blue">{deptTableData.length} Đơn vị</Tag>
        </div>

        <Table
          dataSource={deptTableData}
          columns={columns}
          rowKey="dept"
          pagination={{ pageSize: 8, showSizeChanger: false }}
          size="middle"
          bordered
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
};
