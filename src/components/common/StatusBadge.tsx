import React from 'react';
import { Tag } from 'antd';
import { TaskPriority, TaskStatus, ProjectStatus } from '../../types';

interface StatusBadgeProps {
  status: TaskStatus | ProjectStatus | string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    // Task statuses
    case 'DA_HOAN_THANH':
      return <Tag color="success" style={{ fontWeight: 500, borderRadius: 4 }}>Đã hoàn thành</Tag>;
    case 'HOAN_THANH_QUA_HAN':
      return <Tag color="warning" style={{ fontWeight: 500, borderRadius: 4 }}>Hoàn thành quá hạn</Tag>;
    case 'QUA_HAN_CHUA_HOAN_THANH':
      return <Tag color="error" style={{ fontWeight: 600, borderRadius: 4 }}>Quá hạn chưa hoàn thành</Tag>;
    case 'SAP_DEN_HAN':
      return <Tag color="orange" style={{ fontWeight: 500, borderRadius: 4 }}>Sắp đến hạn</Tag>;
    case 'DANG_XU_LY':
      return <Tag color="processing" style={{ fontWeight: 500, borderRadius: 4 }}>Đang giải quyết</Tag>;
    case 'CHO_PHE_DUYET':
      return <Tag color="purple" style={{ fontWeight: 500, borderRadius: 4 }}>Chờ phê duyệt</Tag>;
    case 'CHUA_GIAO':
      return <Tag color="default" style={{ fontWeight: 500, borderRadius: 4 }}>Chưa giao xử lý</Tag>;

    // Project statuses
    case 'DANG_TRIEN_KHAI':
      return <Tag color="blue" style={{ fontWeight: 500, borderRadius: 4 }}>Đang triển khai</Tag>;
    case 'HOAN_THANH':
      return <Tag color="success" style={{ fontWeight: 500, borderRadius: 4 }}>Đã hoàn thành</Tag>;
    case 'CHAM_TIEN_DO':
      return <Tag color="error" style={{ fontWeight: 600, borderRadius: 4 }}>Chậm tiến độ</Tag>;
    case 'CHUAN_BI_DAU_TU':
      return <Tag color="cyan" style={{ fontWeight: 500, borderRadius: 4 }}>Chuẩn bị đầu tư</Tag>;

    // Disbursement statuses
    case 'DAT_MUC_TIEU':
      return <Tag color="success" style={{ fontWeight: 500, borderRadius: 4 }}>Đạt mục tiêu</Tag>;
    case 'TRUNG_BINH':
      return <Tag color="warning" style={{ fontWeight: 500, borderRadius: 4 }}>Trung bình</Tag>;
    case 'THAP':
      return <Tag color="error" style={{ fontWeight: 600, borderRadius: 4 }}>Giải ngân thấp</Tag>;

    default:
      return <Tag>{status}</Tag>;
  }
};

export const PriorityBadge: React.FC<{ priority: TaskPriority }> = ({ priority }) => {
  switch (priority) {
    case 'HOA_TOC':
      return <Tag color="#dc2626" style={{ fontWeight: 700, borderRadius: 4 }}>HỎA TỐC</Tag>;
    case 'KHAN':
      return <Tag color="#ea580c" style={{ fontWeight: 600, borderRadius: 4 }}>Khẩn</Tag>;
    case 'TRUNG_BINH':
      return <Tag color="#2563eb" style={{ fontWeight: 500, borderRadius: 4 }}>Trung bình</Tag>;
    case 'BINH_THUONG':
      return <Tag color="#64748b" style={{ fontWeight: 400, borderRadius: 4 }}>Bình thường</Tag>;
    default:
      return <Tag>{priority}</Tag>;
  }
};
