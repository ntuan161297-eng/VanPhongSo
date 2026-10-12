import React from 'react';
import { IOCRevenueFrame } from '../../components/ioc/IOCRevenueFrame';

export const BudgetRevenuePage: React.FC = () => {
  return (
    <div>
      {/* Page Title Header */}
      <div style={{ marginBottom: 14 }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
          Thống kê tình hình thu ngân sách nhà nước
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
          Nguồn dữ liệu: Hệ thống báo cáo Tabmis & Trung tâm Giám sát Điều hành Thông minh (IOC) tỉnh Hưng Yên
        </p>
      </div>

      {/* KHUNG GIAO DIỆN IOC TỈNH HƯNG YÊN (CHUẨN ẢNH & NHÚNG IFRAME) */}
      <IOCRevenueFrame />
    </div>
  );
};
