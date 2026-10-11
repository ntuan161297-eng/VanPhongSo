import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';

export interface SubTabConfig {
  key: string;
  label: string;
  path: string;
  isDashboard?: boolean;
}

export const SUB_TABS_CONFIG: Record<string, SubTabConfig[]> = {
  'nhiem-vu': [
    { key: 'dashboard', label: 'Dashboard', path: '/nhiem-vu/dashboard', isDashboard: true },
    { key: 'can-xu-ly', label: 'Nhiệm vụ cần xử lý', path: '/nhiem-vu/can-xu-ly' },
    { key: 'da-hoan-thanh', label: 'Nhiệm vụ đã hoàn thành', path: '/nhiem-vu/da-hoan-thanh' },
    { key: 'hoan-thanh-qua-han', label: 'Nhiệm vụ hoàn thành quá hạn', path: '/nhiem-vu/hoan-thanh-qua-han' },
    { key: 'dang-giai-quyet', label: 'Nhiệm vụ đang giải quyết', path: '/nhiem-vu/dang-giai-quyet' },
    { key: 'dang-giai-quyet-qua-han', label: 'Nhiệm vụ đang giải quyết quá hạn', path: '/nhiem-vu/dang-giai-quyet-qua-han' }
  ],
  'du-an': [
    { key: 'dashboard', label: 'Dashboard', path: '/du-an/dashboard', isDashboard: true },
    { key: 'giao-thong', label: 'Giao thông', path: '/du-an/giao-thong' },
    { key: 'xay-dung-dan-dung', label: 'Xây dựng dân dụng', path: '/du-an/xay-dung-dan-dung' },
    { key: 'nong-nghiep', label: 'Nông nghiệp', path: '/du-an/nong-nghiep' }
  ],
  'giai-ngan': [
    { key: 'dashboard', label: 'Dashboard', path: '/giai-ngan/dashboard', isDashboard: true },
    { key: 'von-dau-tu', label: 'Vốn đầu tư', path: '/giai-ngan/von-dau-tu' },
    { key: 'von-su-nghiep', label: 'Vốn sự nghiệp', path: '/giai-ngan/von-su-nghiep' },
    { key: 'giai-ngan-cntt', label: 'Giải ngân CNTT', path: '/giai-ngan/giai-ngan-cntt' }
  ],
  'ngan-sach': [
    { key: 'dashboard', label: 'Dashboard', path: '/ngan-sach/dashboard', isDashboard: true },
    { key: 'thu', label: 'Thu', path: '/ngan-sach/thu' },
    { key: 'chi', label: 'Chi', path: '/ngan-sach/chi' }
  ]
};

export const SubTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine which parent tab is active based on location path
  let activeParentKey = 'nhiem-vu';
  if (location.pathname.startsWith('/du-an')) {
    activeParentKey = 'du-an';
  } else if (location.pathname.startsWith('/giai-ngan')) {
    activeParentKey = 'giai-ngan';
  } else if (location.pathname.startsWith('/ngan-sach')) {
    activeParentKey = 'ngan-sach';
  }

  const subTabs = SUB_TABS_CONFIG[activeParentKey] || SUB_TABS_CONFIG['nhiem-vu'];

  return (
    <div className="sub-tabs-bar" role="tablist">
      {subTabs.map(subTab => {
        const isActive = location.pathname === subTab.path;
        return (
          <div
            key={subTab.key}
            role="tab"
            aria-selected={isActive}
            className={`sub-tab-item ${isActive ? 'active' : ''}`}
            onClick={() => navigate(subTab.path)}
          >
            <span>{subTab.label}</span>
          </div>
        );
      })}
    </div>
  );
};
