import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GlobalFilterState, UserRole, UserProfile } from '../types';

export type NotificationCategory = 'TASK_OVERDUE' | 'TASK_NEAR' | 'TASK_PENDING' | 'TASK_DONE' | 'GENERAL';

export interface NotificationItem {
  id: string;
  category: NotificationCategory;
  taskCode?: string;
  title: string;
  deptName?: string;
  deadline?: string;
  time: string;
  type: 'danger' | 'warning' | 'info' | 'success';
  read: boolean;
  actionUrl?: string;
  expediteCount?: number;
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
  markAllNotificationsAsRead: () => void;
  expediteNotificationTask: (id: string) => void;
  reportModalOpen: boolean;
  setReportModalOpen: (open: boolean) => void;
  adminModalOpen: boolean;
  setAdminModalOpen: (open: boolean) => void;
  guideModalOpen: boolean;
  setGuideModalOpen: (open: boolean) => void;
}

export const HUNG_YEN_PROVINCE_LEADERS: UserProfile[] = [
  {
    id: 'leader-nmq',
    name: 'Nguyễn Mạnh Quyền',
    title: 'Chủ tịch UBND tỉnh',
    department: 'UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'NMQ'
  },
  {
    id: 'leader-nlh',
    name: 'Nguyễn Lê Huy',
    title: 'Phó Chủ tịch UBND tỉnh',
    department: 'UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'NLH'
  },
  {
    id: 'leader-lqh',
    name: 'Lê Quang Hòa',
    title: 'Phó Chủ tịch UBND tỉnh',
    department: 'UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'LQH'
  },
  {
    id: 'leader-pvn',
    name: 'Phạm Văn Nghiêm',
    title: 'Phó Chủ tịch UBND tỉnh',
    department: 'UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'PVN'
  },
  {
    id: 'leader-nhn',
    name: 'Nguyễn Hùng Nam',
    title: 'Phó Chủ tịch UBND tỉnh',
    department: 'UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'NHN'
  },
  {
    id: 'leader-lvh',
    name: 'Lại Văn Hoàn',
    title: 'Phó Chủ tịch UBND tỉnh',
    department: 'UBND tỉnh Hưng Yên',
    role: 'LEADER_PROVINCE',
    avatarText: 'LVH'
  }
];

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
  LEADER_PROVINCE: HUNG_YEN_PROVINCE_LEADERS[0],
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
    category: 'TASK_OVERDUE',
    taskCode: 'NV-HY-26-003',
    title: 'Nhiệm vụ rà soát, quy hoạch phân khu các KCN mới đã quá hạn 12 ngày!',
    deptName: 'Ban Quản lý các KCN tỉnh',
    deadline: 'Hạn: 20/10/2026',
    time: '10 phút trước',
    type: 'danger',
    read: false,
    actionUrl: '/nhiem-vu/dang-giai-quyet-qua-han',
    expediteCount: 3
  },
  {
    id: 'notif-2',
    category: 'TASK_OVERDUE',
    taskCode: 'NV-HY-26-001',
    title: 'Nhiệm vụ GPMB Vành đai 4 vùng Thủ đô tại Xã Văn Giang đã trễ hạn 7 ngày!',
    deptName: 'UBND Xã Văn Giang',
    deadline: 'Hạn: 15/10/2026',
    time: '25 phút trước',
    type: 'danger',
    read: false,
    actionUrl: '/nhiem-vu/dang-giai-quyet-qua-han',
    expediteCount: 2
  },
  {
    id: 'notif-3',
    category: 'TASK_OVERDUE',
    taskCode: 'NV-HY-26-015',
    title: 'Phương án xử lý cơ sở nhà đất dôi dư sau sắp xếp 104 xã, phường đã quá hạn',
    deptName: 'Sở Tài chính',
    deadline: 'Hạn: 18/10/2026',
    time: '45 phút trước',
    type: 'danger',
    read: false,
    actionUrl: '/nhiem-vu/dang-giai-quyet-qua-han',
    expediteCount: 1
  },
  {
    id: 'notif-4',
    category: 'TASK_NEAR',
    taskCode: 'NV-HY-26-002',
    title: 'Báo cáo giải ngân vốn đầu tư công Quý IV/2026 sắp đến hạn (còn 2 ngày)',
    deptName: 'Sở Tài chính',
    deadline: 'Hạn chót: 25/10/2026',
    time: '1 giờ trước',
    type: 'warning',
    read: false,
    actionUrl: '/nhiem-vu/can-xu-ly',
    expediteCount: 1
  },
  {
    id: 'notif-5',
    category: 'TASK_NEAR',
    taskCode: 'NV-HY-26-008',
    title: 'Nghiệm thu một cửa điện tử liên thông chính quyền 2 cấp Tỉnh - Xã',
    deptName: 'Sở Khoa học và Công nghệ',
    deadline: 'Hạn chót: 28/10/2026 (còn 5 ngày)',
    time: '2 giờ trước',
    type: 'warning',
    read: false,
    actionUrl: '/nhiem-vu/can-xu-ly',
    expediteCount: 0
  },
  {
    id: 'notif-6',
    category: 'TASK_NEAR',
    taskCode: 'NV-HY-26-012',
    title: 'Bàn giao mặt bằng thi công đường trục Tân Phúc - Võng Phan (GĐ 2)',
    deptName: 'Ban QLDA Giao thông tỉnh',
    deadline: 'Hạn chót: 30/10/2026 (còn 7 ngày)',
    time: '3 giờ trước',
    type: 'warning',
    read: false,
    actionUrl: '/nhiem-vu/can-xu-ly',
    expediteCount: 0
  },
  {
    id: 'notif-7',
    category: 'TASK_PENDING',
    taskCode: 'NV-HY-26-004',
    title: 'Tờ trình Đề án phát triển nông nghiệp CNC chờ Lãnh đạo Văn phòng ký duyệt',
    deptName: 'Sở Nông nghiệp và Môi trường',
    deadline: 'Trình duyệt: 22/10/2026',
    time: '4 giờ trước',
    type: 'info',
    read: false,
    actionUrl: '/nhiem-vu/dang-giai-quyet',
    expediteCount: 0
  },
  {
    id: 'notif-8',
    category: 'TASK_PENDING',
    taskCode: 'NV-HY-26-018',
    title: 'Phiếu trình xin ý kiến cấp phép KCN Thăng Long II mở rộng',
    deptName: 'Ban Quản lý các KCN tỉnh',
    deadline: 'Trình duyệt: 21/10/2026',
    time: '5 giờ trước',
    type: 'info',
    read: true,
    actionUrl: '/nhiem-vu/dang-giai-quyet',
    expediteCount: 0
  },
  {
    id: 'notif-9',
    category: 'TASK_DONE',
    taskCode: 'NV-HY-26-005',
    title: 'UBND Xã Văn Giang đã nộp báo cáo số hóa hồ sơ cán bộ cấp xã',
    deptName: 'UBND Xã Văn Giang',
    deadline: 'Hoàn thành đúng hạn',
    time: 'Hôm qua',
    type: 'success',
    read: true,
    actionUrl: '/nhiem-vu/da-hoan-thanh',
    expediteCount: 1
  },
  {
    id: 'notif-10',
    category: 'GENERAL',
    taskCode: 'DA-HY-26-002',
    title: 'Dự án Bệnh viện Sản Nhi đã hoàn thành cất nóc khối nhà chính 9 tầng',
    deptName: 'Ban QLDA ĐTXD Dân dụng & Công nghiệp',
    deadline: 'Đạt mốc tiến độ',
    time: 'Hôm qua',
    type: 'info',
    read: true,
    actionUrl: '/du-an/xay-dung-dan-dung',
    expediteCount: 0
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
    return HUNG_YEN_PROVINCE_LEADERS[0];
  });

  const [filters, setFilters] = useState<GlobalFilterState>(DEFAULT_FILTERS);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  const login = (userProfile?: UserProfile) => {
    const selectedUser = userProfile || HUNG_YEN_PROVINCE_LEADERS[0];
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
      setUserState(HUNG_YEN_PROVINCE_LEADERS[0]);
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

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const expediteNotificationTask = (id: string) => {
    setNotifications(prev =>
      prev.map(n => {
        if (n.id === id) {
          return {
            ...n,
            expediteCount: (n.expediteCount || 0) + 1,
            time: 'Vừa xong'
          };
        }
        return n;
      })
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
        markAllNotificationsAsRead,
        expediteNotificationTask,
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
