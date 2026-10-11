import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ClipboardCheck, Building2, ChartNoAxesCombined, Wallet } from 'lucide-react';

export interface ParentTabConfig {
  key: string;
  label: string;
  path: string;
  dashboardPath: string;
  icon: React.ReactNode;
}

export const PARENT_TABS: ParentTabConfig[] = [
  {
    key: 'nhiem-vu',
    label: 'NHIỆM VỤ GIAO',
    path: '/nhiem-vu',
    dashboardPath: '/nhiem-vu/dashboard',
    icon: <ClipboardCheck size={18} />
  },
  {
    key: 'du-an',
    label: 'DỰ ÁN TRỌNG ĐIỂM',
    path: '/du-an',
    dashboardPath: '/du-an/dashboard',
    icon: <Building2 size={18} />
  },
  {
    key: 'giai-ngan',
    label: 'GIẢI NGÂN VỐN ĐẦU TƯ CÔNG',
    path: '/giai-ngan',
    dashboardPath: '/giai-ngan/dashboard',
    icon: <ChartNoAxesCombined size={18} />
  },
  {
    key: 'ngan-sach',
    label: 'THU CHI NGÂN SÁCH',
    path: '/ngan-sach',
    dashboardPath: '/ngan-sach/dashboard',
    icon: <Wallet size={18} />
  }
];

export const MainTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Find active parent
  const activeParent = PARENT_TABS.find(tab => location.pathname.startsWith(tab.path)) || PARENT_TABS[0];

  const handleTabClick = (tab: ParentTabConfig) => {
    // When clicking parent tab, navigate directly to its Dashboard subroute!
    navigate(tab.dashboardPath);
  };

  return (
    <div className="parent-tabs-bar" role="tablist">
      {PARENT_TABS.map(tab => {
        const isActive = activeParent.key === tab.key;
        return (
          <div
            key={tab.key}
            role="tab"
            aria-selected={isActive}
            className={`parent-tab-item ${isActive ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
};
