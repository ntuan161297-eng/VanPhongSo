import React from 'react';
import { Table, Button, Tag, Space, Progress, Alert } from 'antd';
import { 
  AlertCircle, 
  Send, 
  Eye, 
  Clock, 
  Flame, 
  CheckCircle, 
  FileWarning 
} from 'lucide-react';
import { TaskItem } from '../../types';
import { PriorityBadge, StatusBadge } from '../../components/common/StatusBadge';

interface TaskUrgentActionModeProps {
  tasks: TaskItem[];
  onOpenDetail: (task: TaskItem) => void;
  onOpenExpedite: (task: TaskItem) => void;
}

export const TaskUrgentActionMode: React.FC<TaskUrgentActionModeProps> = ({
  tasks,
  onOpenDetail,
  onOpenExpedite
}) => {
  // Urgent filter: tasks that are overdue or near deadline or priority HOA_TOC
  const urgentTasks = tasks.filter(t => 
    t.status === 'QUA_HAN_CHUA_HOAN_THANH' || 
    t.status === 'SAP_DEN_HAN' ||
    t.priority === 'HOA_TOC'
  ).sort((a, b) => {
    // Sort overdue first, then by expedite count
    if (a.status === 'QUA_HAN_CHUA_HOAN_THANH' && b.status !== 'QUA_HAN_CHUA_HOAN_THANH') return -1;
    if (b.status === 'QUA_HAN_CHUA_HOAN_THANH' && a.status !== 'QUA_HAN_CHUA_HOAN_THANH') return 1;
    return b.expediteCount - a.expediteCount;
  });

  const overdueCount = tasks.filter(t => t.status === 'QUA_HAN_CHUA_HOAN_THANH').length;
  const nearDeadlineCount = tasks.filter(t => t.status === 'SAP_DEN_HAN').length;
  const criticalCount = tasks.filter(t => t.priority === 'HOA_TOC').length;
  const expeditedMany = tasks.filter(t => t.expediteCount >= 2).length;

  const columns = [
    {
      title: 'STT',
      key: 'stt',
      width: 50,
      render: (_: any, __: any, index: number) => index + 1
    },
    {
      title: 'Mã & Nhiệm vụ cần xử lý',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: TaskItem) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#0369a1' }}>{record.code}</span>
            <PriorityBadge priority={record.priority} />
            <StatusBadge status={record.status} />
          </div>
          <a 
            onClick={() => onOpenDetail(record)}
            style={{ fontWeight: 600, color: '#1e293b', fontSize: 13.5, lineHeight: 1.4 }}
          >
            {text}
          </a>
        </div>
      )
    },
    {
      title: 'Đơn vị chủ trì',
      dataIndex: 'leadingDept',
      key: 'leadingDept',
      width: 170,
      render: (t: string) => <strong style={{ color: '#0284c7' }}>{t}</strong>
    },
    {
      title: 'Lãnh đạo giao',
      dataIndex: 'assignedLeader',
      key: 'assignedLeader',
      width: 160,
      render: (t: string) => <span style={{ fontSize: 12, color: '#475569' }}>{t.replace('Đ/c ', '')}</span>
    },
    {
      title: 'Tiến độ',
      dataIndex: 'progress',
      key: 'progress',
      width: 110,
      render: (v: number, r: TaskItem) => (
        <Progress 
          percent={v} 
          size="small" 
          status={r.status === 'QUA_HAN_CHUA_HOAN_THANH' ? 'exception' : 'active'}
          strokeColor={r.status === 'QUA_HAN_CHUA_HOAN_THANH' ? '#ef4444' : '#0284c7'}
        />
      )
    },
    {
      title: 'Hạn xử lý',
      dataIndex: 'deadline',
      key: 'deadline',
      width: 110,
      render: (t: string, r: TaskItem) => (
        <span style={{ 
          color: r.status === 'QUA_HAN_CHUA_HOAN_THANH' ? '#dc2626' : '#ea580c',
          fontWeight: 600
        }}>
          {t}
        </span>
      )
    },
    {
      title: 'Đôn đốc',
      dataIndex: 'expediteCount',
      key: 'expediteCount',
      width: 90,
      align: 'center' as const,
      render: (count: number) => (
        count > 0 ? (
          <Tag color="red" style={{ fontWeight: 600 }}>{count} lần</Tag>
        ) : (
          <span style={{ color: '#94a3b8' }}>0</span>
        )
      )
    },
    {
      title: 'Thao tác điều hành',
      key: 'actions',
      width: 170,
      render: (_: any, record: TaskItem) => (
        <Space size={6}>
          <Button 
            size="small" 
            icon={<Eye size={13} />}
            onClick={() => onOpenDetail(record)}
          >
            Chi tiết
          </Button>
          <Button 
            size="small" 
            type="primary" 
            danger
            icon={<Send size={13} />}
            onClick={() => onOpenExpedite(record)}
          >
            Đôn đốc (demo)
          </Button>
        </Space>
      )
    }
  ];

  return (
    <div>
      {/* Leadership Action Banner */}
      <div 
        style={{ 
          background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
          borderRadius: 10,
          padding: '16px 20px',
          color: '#ffffff',
          marginBottom: 16,
          boxShadow: '0 4px 14px rgba(185, 28, 28, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <Tag color="#dc2626" style={{ border: 'none', fontWeight: 700 }}>
              <Flame size={12} style={{ marginRight: 4 }} /> TRỌNG TÂM ĐIỀU HÀNH
            </Tag>
            <span style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.8)' }}>
              Cập nhật trực tiếp từ Nhật ký chỉ đạo UBND tỉnh
            </span>
          </div>
          <h2 style={{ fontSize: 18, fontWeight: 800, margin: '4px 0', color: '#ffffff' }}>
            CÁC NHIỆM VỤ CẦN LÃNH ĐẠO QUAN TÂM & CHỈ ĐẠO GẤP
          </h2>
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(255, 255, 255, 0.9)' }}>
            Danh sách ưu tiên xử lý các nhiệm vụ quá hạn, vướng mắc liên ngành và các nhiệm vụ hỏa tốc cần xử lý ngay trong ngày.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 14 }}>
          <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.2)', padding: '8px 14px', borderRadius: 8 }}>
            <div style={{ fontSize: 11, color: '#fca5a5' }}>QUÁ HẠN CHƯA XONG</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#ffffff' }}>{overdueCount}</div>
          </div>
          <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.2)', padding: '8px 14px', borderRadius: 8 }}>
            <div style={{ fontSize: 11, color: '#fde047' }}>SẮP ĐẾN HẠN (3 NGÀY)</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#ffffff' }}>{nearDeadlineCount}</div>
          </div>
          <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.2)', padding: '8px 14px', borderRadius: 8 }}>
            <div style={{ fontSize: 11, color: '#fca5a5' }}>HỎA TỐC</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#ffffff' }}>{criticalCount}</div>
          </div>
        </div>
      </div>

      {/* Alert Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
        gap: 12, 
        marginBottom: 16 
      }}>
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#b91c1c', fontWeight: 600, fontSize: 13 }}>
            <FileWarning size={16} /> Cảnh báo quá hạn
          </div>
          <div style={{ fontSize: 12, color: '#475569', marginTop: 4 }}>
            Có <strong>{overdueCount}</strong> nhiệm vụ trễ hạn, tập trung tại GPMB Vành đai 4 và Bắc Hưng Hải.
          </div>
        </div>

        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 8, padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#b45309', fontWeight: 600, fontSize: 13 }}>
            <Clock size={16} /> Hạn chót sắp tới
          </div>
          <div style={{ fontSize: 12, color: '#475569', marginTop: 4 }}>
            Có <strong>{nearDeadlineCount}</strong> nhiệm vụ đến hạn trong 72 giờ tới cần rà soát nộp báo cáo.
          </div>
        </div>

        <div style={{ background: '#fdf2f8', border: '1px solid #fbcfe8', borderRadius: 8, padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#be185d', fontWeight: 600, fontSize: 13 }}>
            <Flame size={16} /> Kỷ luật thực hiện
          </div>
          <div style={{ fontSize: 12, color: '#475569', marginTop: 4 }}>
            Có <strong>{expeditedMany}</strong> nhiệm vụ đã đôn đốc từ 2 lần trở lên chưa hoàn thành dứt điểm.
          </div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#15803d', fontWeight: 600, fontSize: 13 }}>
            <CheckCircle size={16} /> Hàng đợi phê duyệt
          </div>
          <div style={{ fontSize: 12, color: '#475569', marginTop: 4 }}>
            Có <strong>{tasks.filter(t => t.status === 'CHO_PHE_DUYET').length}</strong> nhiệm vụ đơn vị đã gửi báo cáo chờ Chủ tịch duyệt.
          </div>
        </div>
      </div>

      {/* Prioritized Task List Table */}
      <div className="gov-card">
        <div className="gov-card-header">
          <div>
            <span className="gov-card-title">Danh sách nhiệm vụ ưu tiên chỉ đạo & đôn đốc</span>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
              Hiển thị {urgentTasks.length} nhiệm vụ quan trọng (Bấm nút "Đôn đốc" để ban hành văn bản mô phỏng)
            </div>
          </div>
          <Tag color="red" style={{ fontWeight: 600 }}>{urgentTasks.length} Nhiệm vụ ưu tiên</Tag>
        </div>

        <Table
          dataSource={urgentTasks}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 8, showSizeChanger: false }}
          size="middle"
          bordered
        />
      </div>
    </div>
  );
};
