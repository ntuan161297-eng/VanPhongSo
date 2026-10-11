import React from 'react';
import { Drawer, Descriptions, Tag, Progress, Timeline, Button, Space, Divider, Alert } from 'antd';
import { 
  FileTextOutlined, 
  SendOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined, 
  ExclamationCircleOutlined,
  LinkOutlined
} from '@ant-design/icons';
import { TaskItem } from '../../types';
import { StatusBadge, PriorityBadge } from '../../components/common/StatusBadge';

interface TaskDetailDrawerProps {
  task: TaskItem | null;
  open: boolean;
  onClose: () => void;
  onOpenExpedite: (task: TaskItem) => void;
}

export const TaskDetailDrawer: React.FC<TaskDetailDrawerProps> = ({
  task,
  open,
  onClose,
  onOpenExpedite
}) => {
  if (!task) return null;

  return (
    <Drawer
      title={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#0369a1', fontWeight: 700 }}>{task.code}</span>
            <StatusBadge status={task.status} />
            <PriorityBadge priority={task.priority} />
          </div>
        </div>
      }
      placement="right"
      width={720}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          {task.status === 'QUA_HAN_CHUA_HOAN_THANH' || task.status === 'SAP_DEN_HAN' ? (
            <Button 
              danger 
              type="primary" 
              icon={<SendOutlined />}
              onClick={() => onOpenExpedite(task)}
            >
              Đôn đốc khẩn
            </Button>
          ) : null}
        </Space>
      }
    >
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', lineHeight: 1.4, margin: '0 0 12px 0' }}>
          {task.title}
        </h3>
        
        {task.notes && (
          <Alert 
            message="Chỉ đạo & Lưu ý điều hành" 
            description={task.notes} 
            type={task.status === 'QUA_HAN_CHUA_HOAN_THANH' ? 'error' : 'info'} 
            showIcon 
            style={{ marginBottom: 16 }}
          />
        )}
      </div>

      <Descriptions title="Thông tin chung" bordered size="small" column={2} style={{ marginBottom: 20 }}>
        <Descriptions.Item label="Đơn vị chủ trì" span={2}>
          <strong style={{ color: '#0369a1' }}>{task.leadingDept}</strong>
        </Descriptions.Item>
        <Descriptions.Item label="Đơn vị phối hợp" span={2}>
          {task.coDepts.length > 0 ? (
            <Space wrap>
              {task.coDepts.map((d, i) => <Tag key={i}>{d}</Tag>)}
            </Space>
          ) : 'Không có'}
        </Descriptions.Item>
        <Descriptions.Item label="Lãnh đạo giao việc">
          {task.assignedLeader}
        </Descriptions.Item>
        <Descriptions.Item label="Lĩnh vực">
          <Tag color="cyan">{task.field}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Ngày giao việc">
          {task.assignDate}
        </Descriptions.Item>
        <Descriptions.Item label="Hạn xử lý">
          <span style={{ color: task.status === 'QUA_HAN_CHUA_HOAN_THANH' ? '#dc2626' : '#1e293b', fontWeight: 600 }}>
            {task.deadline}
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="Số lần đôn đốc" span={2}>
          {task.expediteCount > 0 ? (
            <Tag color="red" style={{ fontWeight: 600 }}>Đã đôn đốc {task.expediteCount} lần</Tag>
          ) : (
            <span style={{ color: '#64748b' }}>Chưa có văn bản đôn đốc</span>
          )}
        </Descriptions.Item>
      </Descriptions>

      {/* Progress */}
      <div style={{ background: '#f8fafc', padding: 16, borderRadius: 8, marginBottom: 20, border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontWeight: 600, color: '#334155' }}>Tiến độ thực hiện báo cáo</span>
          <span style={{ fontWeight: 700, color: task.progress === 100 ? '#10b981' : '#2563eb' }}>{task.progress}%</span>
        </div>
        <Progress 
          percent={task.progress} 
          status={task.progress === 100 ? 'success' : task.status === 'QUA_HAN_CHUA_HOAN_THANH' ? 'exception' : 'active'}
          strokeColor={task.status === 'QUA_HAN_CHUA_HOAN_THANH' ? '#ef4444' : '#2563eb'}
        />
      </div>

      {/* Related Legal Documents */}
      <div style={{ marginBottom: 20 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, color: '#334155', marginBottom: 10 }}>
          Văn bản & Hồ sơ liên quan
        </h4>
        <Space direction="vertical" style={{ width: '100%' }}>
          {task.relatedDocs.map((doc, idx) => (
            <div 
              key={idx} 
              style={{ 
                padding: '8px 12px', 
                background: '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 13
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FileTextOutlined style={{ color: '#0798EB' }} />
                <span>{doc}</span>
              </div>
              <Button type="link" size="small">Xem tệp đính kèm</Button>
            </div>
          ))}
        </Space>
      </div>

      <Divider style={{ margin: '16px 0' }} />

      {/* History Timeline */}
      <div style={{ marginBottom: 20 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, color: '#334155', marginBottom: 12 }}>
          Lịch sử tiến độ & Quá trình xử lý
        </h4>
        <Timeline
          items={task.history.map(item => ({
            color: item.action.includes('đôn đốc') ? 'red' : 'blue',
            dot: item.action.includes('đôn đốc') ? <ExclamationCircleOutlined /> : undefined,
            children: (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <strong>{item.action}</strong>
                  <span style={{ fontSize: 12, color: '#64748b' }}>{item.date}</span>
                </div>
                <div style={{ fontSize: 12, color: '#0284c7', marginTop: 2 }}>{item.performer}</div>
                <div style={{ fontSize: 13, color: '#475569', marginTop: 4 }}>{item.comment}</div>
              </div>
            )
          }))}
        />
      </div>

      {/* Source system placeholder */}
      <div style={{ 
        background: '#f1f5f9', 
        padding: 12, 
        borderRadius: 6, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        fontSize: 12,
        color: '#64748b'
      }}>
        <span>Hệ thống nguồn: <strong>Phần mềm Quản lý nhiệm vụ Văn phòng UBND tỉnh</strong></span>
        <Button size="small" icon={<LinkOutlined />} disabled>
          Mở phần mềm gốc
        </Button>
      </div>
    </Drawer>
  );
};
