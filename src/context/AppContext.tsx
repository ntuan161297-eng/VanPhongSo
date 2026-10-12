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
  isAuthenticated: boolean;
  login: (userProfile?: UserProfile) => void;
  logout: () => void;
  role: UserRole;
  user: UserProfile;
  setRole: (role: UserRole) => void;
  setUser: (user: UserProfile) => void;
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

export const HUNG_YEN_OFFICE_LEADERS: UserProfile[] = [
  {
    id: 'leader-dgd',
    name: 'Đinh Gia Dũng',
    title: 'Chánh Văn phòng UBND tỉnh',
    department: 'Văn phòng UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'DGD'
  },
  {
    id: 'leader-nqt',
    name: 'Nguyễn Quang Trung',
    title: 'Phó Chánh Văn phòng UBND tỉnh',
    department: 'Văn phòng UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'NQT'
  },
  {
    id: 'leader-ndh',
    name: 'Nguyễn Đức Huỳnh',
    title: 'Phó Chánh Văn phòng UBND tỉnh',
    department: 'Văn phòng UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'NDH'
  },
  {
    id: 'leader-nvd',
    name: 'Nguyễn Văn Dực',
    title: 'Phó Chánh Văn phòng UBND tỉnh',
    department: 'Văn phòng UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'NVD'
  },
  {
    id: 'leader-nxp',
    name: 'Nguyễn Xuân Phương',
    title: 'Phó Chánh Văn phòng UBND tỉnh',
    department: 'Văn phòng UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'NXP'
  },
  {
    id: 'leader-lat',
    name: 'Lê Anh Tuấn',
    title: 'Phó Chánh Văn phòng UBND tỉnh',
    department: 'Văn phòng UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'LAT'
  }
];

const DEFAULT_FILTERS: GlobalFilterState = {
  year: 2026,
  period: 'ALL',
  department: 'ALL',
  district: 'ALL',
  searchQuery: ''
};

const USER_PROFILES: Record<UserRole, UserProfile> = {
  LEADER_PROVINCE: HUNG_YEN_OFFICE_LEADERS[0],
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('van_phong_so_auth') === 'true';
  });

  const [role, setRoleState] = useState<UserRole>('LEADER_PROVINCE');
  const [user, setUserState] = useState<UserProfile>(() => {
    const savedUser = sessionStorage.getItem('van_phong_so_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        // ignore
      }
    }
    return HUNG_YEN_OFFICE_LEADERS[0];
  });

  const [filters, setFilters] = useState<GlobalFilterState>(DEFAULT_FILTERS);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  const login = (userProfile?: UserProfile) => {
    const selectedUser = userProfile || HUNG_YEN_OFFICE_LEADERS[0];
    setUserState(selectedUser);
    setRoleState(selectedUser.role);
    setIsAuthenticated(true);
    sessionStorage.setItem('van_phong_so_auth', 'true');
    sessionStorage.setItem('van_phong_so_user', JSON.stringify(selectedUser));
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('van_phong_so_auth');
    sessionStorage.removeItem('van_phong_so_user');
  };

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    // Adjust default scope and department filter based on 2-tier role
    if (newRole === 'LEADER_PROVINCE') {
      setUserState(HUNG_YEN_OFFICE_LEADERS[0]);
      setFilters(prev => ({ ...prev, scope: 'ALL', department: 'ALL' }));
    } else {
      setUserState(USER_PROFILES[newRole]);
      if (newRole === 'LEADER_DEPT') {
        setFilters(prev => ({ ...prev, scope: 'PROVINCIAL_DEPT', department: 'Sở Xây dựng' }));
      } else if (newRole === 'LEADER_COMMUNE') {
        setFilters(prev => ({ ...prev, scope: 'COMMUNE', department: 'UBND Xã Văn Giang' }));
      } else {
        setFilters(prev => ({ ...prev, scope: 'ALL', department: 'ALL' }));
      }
    }
  };

  const setUser = (newUser: UserProfile) => {
    setUserState(newUser);
    setRoleState(newUser.role);
    setFilters(prev => ({ ...prev, scope: 'ALL', department: 'ALL' }));
    sessionStorage.setItem('van_phong_so_user', JSON.stringify(newUser));
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
        isAuthenticated,
        login,
        logout,
        role,
        user,
        setRole,
        setUser,
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
