import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GlobalFilterState, UserRole, UserProfile } from '../types';

interface NotificationItem {
  id: string;
  title: string;
  time: string;
  type: 'danger' | 'warning' | 'info';
  read: boolean;
}

interface AppContextType {
  role: UserRole;
  user: UserProfile;
  setRole: (role: UserRole) => void;
  filters: GlobalFilterState;
  setFilters: React.Dispatch<React.SetStateAction<GlobalFilterState>>;
  resetFilters: () => void;
  refreshKey: number;
  triggerRefresh: () => void;
  notifications: NotificationItem[];
  markNotificationAsRead: (id: string) => void;
  reportModalOpen: boolean;
  setReportModalOpen: (open: boolean) => void;
  adminModalOpen: boolean;
  setAdminModalOpen: (open: boolean) => void;
  guideModalOpen: boolean;
  setGuideModalOpen: (open: boolean) => void;
}

const DEFAULT_FILTERS: GlobalFilterState = {
  year: 2026,
  period: 'ALL',
  department: 'ALL',
  district: 'ALL',
  searchQuery: ''
};

const USER_PROFILES: Record<UserRole, UserProfile> = {
  LEADER_PROVINCE: {
    id: 'user-01',
    name: 'Đinh Gia Dũng',
    title: 'Chánh Văn phòng UBND tỉnh',
    department: 'Văn phòng UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'DGD'
  },
  LEADER_DEPT: {
    id: 'user-02',
    name: 'Nguyễn Văn Nam',
    title: 'Giám đốc Sở Xây dựng',
    department: 'Sở Xây dựng tỉnh Hưng Yên',
    role: 'LEADER_DEPT',
    avatarText: 'NVN'
  },
  LEADER_COMMUNE: {
    id: 'user-04',
    name: 'Phạm Minh Đức',
    title: 'Chủ tịch UBND Xã Văn Giang',
    department: 'UBND Xã Văn Giang',
    role: 'LEADER_COMMUNE',
    avatarText: 'PMD'
  },
  SPECIALIST: {
    id: 'user-03',
    name: 'Lê Hoàng Anh',
    title: 'Chuyên viên Tổng hợp',
    department: 'Văn phòng UBND tỉnh Hưng Yên',
    role: 'SPECIALIST',
    avatarText: 'LHA'
  }
};

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Nhiệm vụ GPMB Vành đai 4 tại Xã Văn Giang đã quá hạn 12 ngày!',
    time: '10 phút trước',
    type: 'danger',
    read: false
  },
  {
    id: 'notif-2',
    title: 'Dự án Bệnh viện Sản Nhi đã hoàn thành cất nóc khối nhà chính 9 tầng',
    time: '1 giờ trước',
    type: 'info',
    read: false
  },
  {
    id: 'notif-3',
    title: 'Cảnh báo: Tỷ lệ giải ngân Ban QLDA KCN hiện chỉ đạt 47.69%',
    time: '2 giờ trước',
    type: 'warning',
    read: false
  },
  {
    id: 'notif-4',
    title: 'Thu tiền sử dụng đất tháng 10 vượt dự toán 8.2%',
    time: 'Hôm qua',
    type: 'info',
    read: true
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>('LEADER_PROVINCE');
  const [filters, setFilters] = useState<GlobalFilterState>(DEFAULT_FILTERS);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    // Adjust default scope and department filter based on 2-tier role
    if (newRole === 'LEADER_DEPT') {
      setFilters(prev => ({ ...prev, scope: 'PROVINCIAL_DEPT', department: 'Sở Xây dựng' }));
    } else if (newRole === 'LEADER_COMMUNE') {
      setFilters(prev => ({ ...prev, scope: 'COMMUNE', department: 'UBND Xã Văn Giang' }));
    } else {
      setFilters(prev => ({ ...prev, scope: 'ALL', department: 'ALL' }));
    }
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const triggerRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        user: USER_PROFILES[role],
        setRole,
        filters,
        setFilters,
        resetFilters,
        refreshKey,
        triggerRefresh,
        notifications,
        markNotificationAsRead,
        reportModalOpen,
        setReportModalOpen,
        adminModalOpen,
        setAdminModalOpen,
        guideModalOpen,
        setGuideModalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
