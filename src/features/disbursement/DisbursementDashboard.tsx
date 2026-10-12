import React from 'react';
import { IOCDisbursementFrame } from '../../components/ioc/IOCDisbursementFrame';

export const DisbursementDashboard: React.FC = () => {
  return (
    <div>
      {/* Page Title Header */}
      <div style={{ marginBottom: 14 }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
          Kế hoạch giải ngân vốn đầu tư công
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
          Nguồn dữ liệu: Sở Tài chính & Trung tâm Giám sát Điều hành Thông minh (IOC) tỉnh Hưng Yên
        </p>
      </div>

      {/* KHUNG GIAO DIỆN IOC TỈNH HƯNG YÊN (CHUẨN ẢNH & NHÚNG IFRAME) */}
      <IOCDisbursementFrame />
    </div>
  );
};
