import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { MainTabs } from './MainTabs';
import { SubTabs } from './SubTabs';
import { ReportModal } from '../reports/ReportModal';
import { AdminModal } from '../admin/AdminModal';
import { UserGuideModal } from '../admin/UserGuideModal';

export const AppLayout: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F3F6FA' }}>
      {/* TẦNG 1: HEADER */}
      <AppHeader />

      {/* TẦNG 2 & 3: MAIN TABS & SUB TABS (SÁT NHAU 0-2px) */}
      <div className="nav-tiers-container">
        <MainTabs />
        <SubTabs />
      </div>

      {/* TẦNG 4: DASHBOARD / NỘI DUNG NGHIỆP VỤ */}
      <main style={{ flex: 1, padding: '16px 20px 32px 20px', maxWidth: '100%', width: '100%' }}>
        <Outlet />
      </main>

      {/* Utility Modals */}
      <ReportModal />
      <AdminModal />
      <UserGuideModal />
    </div>
  );
};
