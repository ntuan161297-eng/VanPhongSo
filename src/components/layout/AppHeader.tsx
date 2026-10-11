import React, { useState } from 'react';
import { Badge, Popover, Dropdown, MenuProps, Input, Tag } from 'antd';
import { 
  BellOutlined, 
  SearchOutlined, 
  UserOutlined, 
  FileTextOutlined, 
  QuestionCircleOutlined, 
  SettingOutlined, 
  SafetyCertificateOutlined, 
  LogoutOutlined,
  SwapOutlined
} from '@ant-design/icons';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';

export const AppHeader: React.FC = () => {
  const { 
    user, 
    role, 
    setRole, 
    notifications, 
    markNotificationAsRead,
    setReportModalOpen,
    setAdminModalOpen,
    setGuideModalOpen
  } = useApp();

  const [searchValue, setSearchValue] = useState('');
  const unreadCount = 3; // Exactly matching reference image badge "3"

  const notificationContent = (
    <div style={{ width: 340, maxHeight: 380, overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
        <span style={{ fontWeight: 600, color: '#1e293b' }}>Thông báo chỉ đạo điều hành</span>
        <Tag color="red">{unreadCount} khẩn cấp</Tag>
      </div>
      <div>
        {notifications.map(item => (
          <div 
            key={item.id} 
            onClick={() => markNotificationAsRead(item.id)}
            style={{ 
              padding: '10px 12px', 
              borderBottom: '1px solid #f8fafc',
              cursor: 'pointer',
              background: item.read ? '#ffffff' : '#f0f9ff',
              transition: 'background 0.2s'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: item.read ? 400 : 600, color: '#1e293b', lineHeight: 1.4 }}>
                {item.title}
              </span>
              {!item.read && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0284c7', marginTop: 5, flexShrink: 0 }} />}
            </div>
            <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 4 }}>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'user-info',
      icon: <UserOutlined />,
      label: (
        <div>
          <div style={{ fontWeight: 700, color: '#0f172a' }}>{user.name}</div>
          <div style={{ fontSize: 12, color: '#64748b' }}>{user.title}</div>
        </div>
      )
    },
    { type: 'divider' },
    {
      key: 'switch-role',
      icon: <SwapOutlined />,
      label: 'Chuyển vai trò điều hành',
      children: [
        {
          key: 'role-1',
          label: '👑 Lãnh đạo UBND Tỉnh',
          onClick: () => setRole('LEADER_PROVINCE')
        },
        {
          key: 'role-2',
          label: '🏛️ Lãnh đạo Sở/Ngành',
          onClick: () => setRole('LEADER_DEPT')
        },
        {
          key: 'role-3',
          label: '🏘️ Lãnh đạo UBND Xã/Phường',
          onClick: () => setRole('LEADER_COMMUNE')
        },
        {
          key: 'role-4',
          label: '📋 Chuyên viên Tổng hợp',
          onClick: () => setRole('SPECIALIST')
        }
      ]
    },
    {
      key: 'report',
      icon: <FileTextOutlined />,
      label: 'Tổng hợp – Báo cáo',
      onClick: () => setReportModalOpen(true)
    },
    {
      key: 'guide',
      icon: <QuestionCircleOutlined />,
      label: 'Tài liệu hướng dẫn sử dụng',
      onClick: () => setGuideModalOpen(true)
    },
    {
      key: 'admin',
      icon: <SettingOutlined />,
      label: 'Quản trị hệ thống & Nguồn dữ liệu',
      onClick: () => setAdminModalOpen(true)
    },
    {
      key: 'permissions',
      icon: <SafetyCertificateOutlined />,
      label: 'Phân quyền người dùng',
      onClick: () => setAdminModalOpen(true)
    },
    { type: 'divider' },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      danger: true,
      label: 'Đăng xuất demo',
      onClick: () => alert('Đã đăng xuất phiên demo Văn phòng số tỉnh Hưng Yên!')
    }
  ];

  return (
    <header 
      className="app-header"
      style={{
        height: 60,
        background: 'linear-gradient(90deg, #073872 0%, #0b4991 42%, #0e54a4 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'relative',
        boxShadow: '0 2px 10px rgba(7, 40, 80, 0.3)',
        zIndex: 100,
        overflow: 'hidden'
      }}
    >
      {/* Background Historic Watermark Graphic: Cầu Hưng Hà / Yên Lệnh, Chùa Chuông Phố Hiến, Sóng sông Hồng & Mây cổ ("Phần họa tiết phía trên cùng") */}
      <div 
        style={{
          position: 'absolute',
          left: '320px',
          right: '370px',
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          opacity: 0.28,
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <svg 
          viewBox="0 0 650 60" 
          width="100%" 
          height="100%" 
          preserveAspectRatio="xMidYMid meet"
          fill="none" 
          stroke="#ffffff"
        >
          {/* Bridge with Arches and Stay Cables (Cầu vượt sông Hồng tỉnh Hưng Yên) */}
          <path d="M 20,48 Q 130,14 240,48" strokeWidth="1.6" stroke="#ffffff" opacity="0.85" />
          <path d="M 30,50 L 230,50" strokeWidth="2.2" stroke="#ffffff" opacity="0.9" />
          <path d="M 50,48 L 130,22 L 210,48" strokeWidth="1" stroke="#ffffff" opacity="0.6" strokeDasharray="3,2" />
          <line x1="70" y1="48" x2="130" y2="22" strokeWidth="0.8" stroke="#ffffff" opacity="0.55" />
          <line x1="100" y1="48" x2="130" y2="22" strokeWidth="0.8" stroke="#ffffff" opacity="0.55" />
          <line x1="160" y1="48" x2="130" y2="22" strokeWidth="0.8" stroke="#ffffff" opacity="0.55" />
          <line x1="190" y1="48" x2="130" y2="22" strokeWidth="0.8" stroke="#ffffff" opacity="0.55" />
          <line x1="130" y1="18" x2="130" y2="52" strokeWidth="2.8" stroke="#ffffff" opacity="0.95" />

          {/* Sóng sông Hồng beneath bridge */}
          <path d="M 10,54 Q 30,51 50,54 T 90,54 T 130,54 T 170,54 T 210,54 T 250,54" strokeWidth="1" stroke="#7dd3fc" opacity="0.75" />
          <path d="M 25,57 Q 45,54 65,57 T 105,57 T 145,57 T 185,57 T 225,57" strokeWidth="0.8" stroke="#7dd3fc" opacity="0.55" />

          {/* Pho Hien Ancient Pagoda & Bell Tower (Chùa Chuông / Văn Miếu Xích Đằng) */}
          <g transform="translate(280, 7)" opacity="0.9">
            {/* Top Roof Tier with curved eaves */}
            <path d="M 32,15 Q 48,7 64,15 L 61,19 L 35,19 Z" fill="#ffffff" opacity="0.45" stroke="#ffffff" strokeWidth="1" />
            <path d="M 30,16 Q 22,13 20,8" stroke="#ffffff" strokeWidth="1.3" />
            <path d="M 66,16 Q 74,13 76,8" stroke="#ffffff" strokeWidth="1.3" />
            {/* Middle Roof Tier */}
            <path d="M 20,26 Q 48,15 76,26 L 73,31 L 23,31 Z" fill="#ffffff" opacity="0.35" stroke="#ffffff" strokeWidth="1" />
            <path d="M 18,27 Q 9,23 7,16" stroke="#ffffff" strokeWidth="1.3" />
            <path d="M 78,27 Q 87,23 89,16" stroke="#ffffff" strokeWidth="1.3" />
            {/* Bottom Large Eaves */}
            <path d="M 8,38 Q 48,25 88,38 L 84,44 L 12,44 Z" fill="#ffffff" opacity="0.35" stroke="#ffffff" strokeWidth="1" />
            <path d="M 6,39 Q -5,33 -7,24" stroke="#ffffff" strokeWidth="1.6" />
            <path d="M 90,39 Q 101,33 103,24" stroke="#ffffff" strokeWidth="1.6" />
            {/* Pillars and Gateway */}
            <line x1="26" y1="31" x2="26" y2="44" strokeWidth="1.6" stroke="#ffffff" />
            <line x1="70" y1="31" x2="70" y2="44" strokeWidth="1.6" stroke="#ffffff" />
            <rect x="18" y="44" width="60" height="6" fill="#ffffff" opacity="0.55" />
          </g>

          {/* Dong Son Solar Motif & Clouds */}
          <g transform="translate(425, 12)" opacity="0.8">
            <circle cx="36" cy="19" r="14" strokeWidth="1" strokeDasharray="3,2" stroke="#ffffff" />
            <circle cx="36" cy="19" r="8" strokeWidth="1" stroke="#ffffff" />
            <circle cx="36" cy="19" r="3" fill="#ffffff" />
            <path d="M 8,27 Q 16,21 24,25 T 38,23" strokeWidth="1" stroke="#ffffff" opacity="0.65" />
            <path d="M 50,25 Q 60,21 70,25 T 85,23" strokeWidth="1" stroke="#ffffff" opacity="0.65" />
            <path d="M 16,33 Q 32,29 48,32 T 76,31" strokeWidth="0.8" stroke="#ffffff" opacity="0.45" />
          </g>

          {/* Scenic Bamboo / Pine Tree Silhouettes */}
          <path d="M 256,48 Q 262,32 268,48" strokeWidth="1.2" stroke="#7dd3fc" opacity="0.65" />
          <path d="M 264,48 Q 270,28 276,48" strokeWidth="1.2" stroke="#7dd3fc" opacity="0.65" />
          <path d="M 535,48 Q 542,30 550,48" strokeWidth="1.2" stroke="#7dd3fc" opacity="0.65" />
          <path d="M 546,48 Q 554,34 562,48" strokeWidth="1.2" stroke="#7dd3fc" opacity="0.65" />
        </svg>
      </div>

      {/* Left: Official State Emblem & Product Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, zIndex: 2 }}>
        {/* Biểu trưng chính thức tỉnh Hưng Yên */}
        <div style={{ 
          width: 44, 
          height: 44, 
          flexShrink: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))'
        }}>
          <img 
            src="/assets/hung_yen_logo.png" 
            alt="Biểu trưng tỉnh Hưng Yên" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain' 
            }} 
          />
        </div>

        <div>
          <div style={{ 
            color: 'rgba(255, 255, 255, 0.92)', 
            fontSize: 11, 
            letterSpacing: '0.04em', 
            fontWeight: 600,
            textTransform: 'uppercase',
            lineHeight: 1.2
          }}>
            ỦY BAN NHÂN DÂN TỈNH HƯNG YÊN
          </div>
          <div style={{ 
            color: '#ffffff', 
            fontSize: 19, 
            fontWeight: 800, 
            letterSpacing: '-0.01em',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            lineHeight: 1.3
          }}>
            VĂN PHÒNG SỐ
            <span style={{ 
              fontSize: 10.5, 
              background: '#034a8c', 
              border: '1px solid #1e88e5',
              color: '#ffffff', 
              padding: '1px 8px', 
              borderRadius: 4,
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}>
              DEMO
            </span>
          </div>
        </div>
      </div>

      {/* Right: Search Pill, Bell with 3 badge, User Avatar & Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, zIndex: 2 }}>
        {/* Search input in pill shape matching image */}
        <div style={{ width: 280 }}>
          <Input
            placeholder="Tìm kiếm nhiệm vụ, dự án, văn bản..."
            prefix={<SearchOutlined style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: 13, marginRight: 4 }} />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.14)',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              borderRadius: 20,
              color: '#ffffff',
              fontSize: 12.5,
              height: 32
            }}
            className="header-search-input"
            allowClear
          />
        </div>

        {/* Notifications Popover with red badge "3" */}
        <Popover content={notificationContent} trigger="click" placement="bottomRight">
          <div 
            style={{ 
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'background 0.2s'
            }}
            title="Thông báo điều hành"
          >
            <Badge count={3} size="small" offset={[2, -3]} color="#EF4444">
              <BellOutlined style={{ fontSize: 16, color: '#ffffff' }} />
            </Badge>
          </div>
        </Popover>

        {/* User Account matching image: Light blue circle "TQV" + Name "Trần Quốc Văn" + "Lãnh đạo UBND Tỉnh" */}
        <Dropdown menu={{ items: userMenuItems }} trigger={['click']} placement="bottomRight">
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 9, 
              cursor: 'pointer',
              padding: '2px 8px 2px 4px',
              borderRadius: 20,
              transition: 'background 0.2s'
            }}
          >
            <div 
              style={{ 
                width: 34, 
                height: 34, 
                borderRadius: '50%', 
                background: '#4a90e2', 
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 12,
                boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
              }}
            >
              {user.avatarText}
            </div>
            <div style={{ textAlign: 'left', lineHeight: 1.25 }}>
              <div style={{ color: '#ffffff', fontSize: 13, fontWeight: 700 }}>
                {user.name}
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 11, fontWeight: 400 }}>
                {user.title}
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};
