import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Popover, Dropdown, MenuProps, Input, Tag, Button, Empty, message } from 'antd';
import { 
  BellOutlined, 
  SearchOutlined, 
  UserOutlined, 
  FileTextOutlined, 
  QuestionCircleOutlined, 
  SettingOutlined, 
  SafetyCertificateOutlined, 
  LogoutOutlined, 
  SwapOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  RightOutlined,
  ThunderboltOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled
} from '@ant-design/icons';
import { useApp, HUNG_YEN_PROVINCE_LEADERS, HUNG_YEN_OFFICE_LEADERS, NotificationItem, NotificationCategory } from '../../context/AppContext';
import { UserRole } from '../../types';

export const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const { 
    user, 
    role, 
    setRole, 
    setUser,
    logout,
    notifications, 
    markNotificationAsRead,
    markAllNotificationsAsRead,
    expediteNotificationTask,
    setReportModalOpen,
    setAdminModalOpen,
    setGuideModalOpen
  } = useApp();

  const [searchValue, setSearchValue] = useState('');
  const [notifPopoverOpen, setNotifPopoverOpen] = useState(false);
  const [activeNotifTab, setActiveNotifTab] = useState<'ALL' | 'OVERDUE' | 'NEAR' | 'PENDING'>('ALL');

  const unreadCount = notifications.filter(n => !n.read).length;
  const overdueCount = notifications.filter(n => n.category === 'TASK_OVERDUE').length;
  const nearCount = notifications.filter(n => n.category === 'TASK_NEAR').length;
  const pendingCount = notifications.filter(n => n.category === 'TASK_PENDING').length;

  const filteredNotifications = notifications.filter(n => {
    if (activeNotifTab === 'OVERDUE') return n.category === 'TASK_OVERDUE';
    if (activeNotifTab === 'NEAR') return n.category === 'TASK_NEAR';
    if (activeNotifTab === 'PENDING') return n.category === 'TASK_PENDING';
    return true;
  });

  const handleTaskClick = (item: NotificationItem) => {
    markNotificationAsRead(item.id);
    setNotifPopoverOpen(false);
    if (item.actionUrl) {
      navigate(item.actionUrl);
    }
  };

  const handleExpedite = (e: React.MouseEvent, item: NotificationItem) => {
    e.stopPropagation();
    expediteNotificationTask(item.id);
    message.success(`Đã gửi thông báo đôn đốc khẩn cấp tới ${item.deptName || 'đơn vị chủ trì'}!`);
  };

  const notificationContent = (
    <div style={{ width: 400, maxWidth: '90vw' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '12px 16px', 
        borderBottom: '1px solid #f1f5f9',
        background: '#f8fafc',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 700, color: '#0f172a', fontSize: 14 }}>
            Nhắc việc & Đôn đốc nhiệm vụ
          </span>
          {unreadCount > 0 && (
            <Tag color="red" style={{ margin: 0, borderRadius: 10, fontSize: 11, fontWeight: 600 }}>
              {unreadCount} mới
            </Tag>
          )}
        </div>
        {unreadCount > 0 && (
          <Button 
            type="link" 
            size="small" 
            onClick={markAllNotificationsAsRead}
            style={{ padding: 0, fontSize: 11.5, color: '#0284c7' }}
          >
            Đã đọc tất cả
          </Button>
        )}
      </div>

      {/* Tabs Filter Bar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 6, 
        padding: '8px 12px', 
        borderBottom: '1px solid #e2e8f0', 
        background: '#ffffff',
        overflowX: 'auto'
      }}>
        <button
          type="button"
          onClick={() => setActiveNotifTab('ALL')}
          style={{
            border: 'none',
            background: activeNotifTab === 'ALL' ? '#e0f2fe' : 'transparent',
            color: activeNotifTab === 'ALL' ? '#0369a1' : '#64748b',
            fontWeight: activeNotifTab === 'ALL' ? 700 : 500,
            fontSize: 12,
            padding: '4px 10px',
            borderRadius: 16,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4
          }}
        >
          Tất cả <span style={{ opacity: 0.8 }}>({notifications.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveNotifTab('OVERDUE')}
          style={{
            border: 'none',
            background: activeNotifTab === 'OVERDUE' ? '#fee2e2' : 'transparent',
            color: activeNotifTab === 'OVERDUE' ? '#b91c1c' : '#64748b',
            fontWeight: activeNotifTab === 'OVERDUE' ? 700 : 500,
            fontSize: 12,
            padding: '4px 10px',
            borderRadius: 16,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4
          }}
        >
          🚨 Quá hạn <span style={{ opacity: 0.8 }}>({overdueCount})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveNotifTab('NEAR')}
          style={{
            border: 'none',
            background: activeNotifTab === 'NEAR' ? '#fef3c7' : 'transparent',
            color: activeNotifTab === 'NEAR' ? '#b45309' : '#64748b',
            fontWeight: activeNotifTab === 'NEAR' ? 700 : 500,
            fontSize: 12,
            padding: '4px 10px',
            borderRadius: 16,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4
          }}
        >
          ⏳ Sắp đến hạn <span style={{ opacity: 0.8 }}>({nearCount})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveNotifTab('PENDING')}
          style={{
            border: 'none',
            background: activeNotifTab === 'PENDING' ? '#f1f5f9' : 'transparent',
            color: activeNotifTab === 'PENDING' ? '#334155' : '#64748b',
            fontWeight: activeNotifTab === 'PENDING' ? 700 : 500,
            fontSize: 12,
            padding: '4px 10px',
            borderRadius: 16,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4
          }}
        >
          📝 Chờ duyệt <span style={{ opacity: 0.8 }}>({pendingCount})</span>
        </button>
      </div>

      {/* List Container */}
      <div style={{ maxHeight: 380, overflowY: 'auto' }}>
        {filteredNotifications.length === 0 ? (
          <div style={{ padding: '32px 16px', textAlign: 'center' }}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có thông báo trong mục này" />
          </div>
        ) : (
          filteredNotifications.map(item => {
            const isOverdue = item.category === 'TASK_OVERDUE';
            const isNear = item.category === 'TASK_NEAR';
            const isPending = item.category === 'TASK_PENDING';
            const isDone = item.category === 'TASK_DONE';

            return (
              <div 
                key={item.id} 
                onClick={() => handleTaskClick(item)}
                style={{ 
                  padding: '12px 14px', 
                  borderBottom: '1px solid #f1f5f9',
                  cursor: 'pointer',
                  background: item.read ? '#ffffff' : (isOverdue ? '#fff5f5' : '#f0f9ff'),
                  transition: 'background 0.2s',
                  position: 'relative'
                }}
                className="notification-item-card"
              >
                {/* Top tags row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, marginBottom: 5 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
                    {item.taskCode && (
                      <Tag 
                        color={isOverdue ? 'error' : isNear ? 'warning' : isPending ? 'processing' : 'success'}
                        style={{ margin: 0, fontSize: 10.5, fontWeight: 700, borderRadius: 4, padding: '0 5px' }}
                      >
                        {item.taskCode}
                      </Tag>
                    )}
                    {item.deptName && (
                      <span style={{ fontSize: 11, color: '#475569', fontWeight: 600 }}>
                        {item.deptName}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: '#94a3b8' }}>{item.time}</span>
                    {!item.read && (
                      <span style={{ 
                        width: 7, 
                        height: 7, 
                        borderRadius: '50%', 
                        background: isOverdue ? '#ef4444' : '#0284c7', 
                        flexShrink: 0 
                      }} />
                    )}
                  </div>
                </div>

                {/* Main title */}
                <div style={{ 
                  fontSize: 13, 
                  fontWeight: item.read ? 500 : 700, 
                  color: isOverdue ? '#991b1b' : '#0f172a', 
                  lineHeight: 1.45,
                  marginBottom: 6
                }}>
                  {item.title}
                </div>

                {/* Deadline and Sub information */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, fontSize: 11.5 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b' }}>
                    {item.deadline && (
                      <span style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: 4,
                        color: isOverdue ? '#dc2626' : isNear ? '#d97706' : '#64748b',
                        fontWeight: (isOverdue || isNear) ? 600 : 400
                      }}>
                        <ClockCircleOutlined style={{ fontSize: 11 }} /> {item.deadline}
                      </span>
                    )}
                    {item.expediteCount !== undefined && item.expediteCount > 0 && (
                      <Tag color="magenta" style={{ margin: 0, fontSize: 10, padding: '0 4px', borderRadius: 10 }}>
                        Đã đôn đốc {item.expediteCount} lần
                      </Tag>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} onClick={(e) => e.stopPropagation()}>
                    {(isOverdue || isNear) && (
                      <Button
                        size="small"
                        type="dashed"
                        danger={isOverdue}
                        icon={<ThunderboltOutlined style={{ fontSize: 11 }} />}
                        onClick={(e) => handleExpedite(e, item)}
                        style={{ 
                          height: 24, 
                          fontSize: 11, 
                          padding: '0 8px',
                          borderRadius: 4,
                          fontWeight: 600,
                          borderColor: isOverdue ? '#fca5a5' : '#fcd34d',
                          color: isOverdue ? '#b91c1c' : '#b45309',
                          background: isOverdue ? '#fff1f2' : '#fffbeb'
                        }}
                      >
                        Đôn đốc ngay
                      </Button>
                    )}
                    <Button
                      size="small"
                      type="link"
                      onClick={() => handleTaskClick(item)}
                      style={{ height: 24, fontSize: 11.5, padding: '0 4px', color: '#0284c7', fontWeight: 600 }}
                    >
                      Xem chi tiết <RightOutlined style={{ fontSize: 9 }} />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div style={{ 
        padding: '10px 14px', 
        borderTop: '1px solid #f1f5f9', 
        background: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
      }}>
        <span style={{ fontSize: 12, color: '#64748b' }}>
          Tổng cộng: <strong>{notifications.length}</strong> thông báo nhắc việc
        </span>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            setNotifPopoverOpen(false);
            navigate('/nhiem-vu/can-xu-ly');
          }}
          style={{ 
            fontSize: 12, 
            height: 28, 
            borderRadius: 6,
            background: '#0798eb',
            fontWeight: 600 
          }}
        >
          Toàn bộ nhiệm vụ cần xử lý ➔
        </Button>
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
          key: 'role-province-leaders',
          label: '🏛️ Lãnh đạo UBND Tỉnh',
          children: HUNG_YEN_PROVINCE_LEADERS.map((leader) => ({
            key: `prov-leader-${leader.id}`,
            label: (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 2px', minWidth: 250 }}>
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: 28, 
                  height: 28, 
                  borderRadius: '50%', 
                  background: user.name === leader.name ? '#073872' : '#dbeafe', 
                  color: user.name === leader.name ? '#ffffff' : '#073872', 
                  fontSize: 11, 
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {leader.avatarText}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ 
                    fontWeight: user.name === leader.name ? 700 : 600, 
                    color: user.name === leader.name ? '#073872' : '#0f172a',
                    fontSize: 13,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>{leader.name}</span>
                    {user.name === leader.name && (
                      <Tag color="blue" style={{ fontSize: 10, padding: '0 6px', margin: 0, borderRadius: 10 }}>
                        Đang chọn
                      </Tag>
                    )}
                  </div>
                  <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 1 }}>
                    {leader.title}
                  </div>
                </div>
              </div>
            ),
            onClick: () => {
              setUser(leader);
              message.success(`Đã chuyển vai trò điều hành: ${leader.name} - ${leader.title}`);
            }
          }))
        },
        {
          key: 'role-office-leaders',
          label: '🏢 Lãnh đạo Văn phòng UBND Tỉnh',
          children: HUNG_YEN_OFFICE_LEADERS.map((leader) => ({
            key: `office-leader-${leader.id}`,
            label: (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 2px', minWidth: 250 }}>
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: 28, 
                  height: 28, 
                  borderRadius: '50%', 
                  background: user.name === leader.name ? '#0b74e5' : '#e2e8f0', 
                  color: user.name === leader.name ? '#ffffff' : '#334155', 
                  fontSize: 11, 
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {leader.avatarText}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ 
                    fontWeight: user.name === leader.name ? 700 : 600, 
                    color: user.name === leader.name ? '#0b74e5' : '#0f172a',
                    fontSize: 13,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>{leader.name}</span>
                    {user.name === leader.name && (
                      <Tag color="blue" style={{ fontSize: 10, padding: '0 6px', margin: 0, borderRadius: 10 }}>
                        Đang chọn
                      </Tag>
                    )}
                  </div>
                  <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 1 }}>
                    {leader.title}
                  </div>
                </div>
              </div>
            ),
            onClick: () => {
              setUser(leader);
              message.success(`Đã chuyển vai trò điều hành: ${leader.name} - ${leader.title}`);
            }
          }))
        },
        {
          key: 'role-2',
          label: '🏛️ Lãnh đạo Sở/Ngành',
          onClick: () => {
            setRole('LEADER_DEPT');
            message.info('Đã chuyển sang vai trò: Lãnh đạo Sở/Ngành');
          }
        },
        {
          key: 'role-3',
          label: '🏘️ Lãnh đạo UBND Xã/Phường',
          onClick: () => {
            setRole('LEADER_COMMUNE');
            message.info('Đã chuyển sang vai trò: Lãnh đạo UBND Xã/Phường');
          }
        },
        {
          key: 'role-4',
          label: '📋 Chuyên viên Tổng hợp',
          onClick: () => {
            setRole('SPECIALIST');
            message.info('Đã chuyển sang vai trò: Chuyên viên Tổng hợp');
          }
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
      label: 'Đăng xuất',
      onClick: () => {
        logout();
        message.info('Đã đăng xuất khỏi hệ thống Văn phòng số tỉnh Hưng Yên');
      }
    }
  ];

  return (
    <header 
      className="app-header"
      style={{
        height: 56,
        background: '#123B5D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        position: 'relative',
        boxShadow: '0 2px 8px rgba(18, 59, 93, 0.25)',
        zIndex: 100,
        overflow: 'hidden'
      }}
    >
      {/* Background Historic Watermark Graphic: Cầu Hưng Hà / Yên Lệnh, Chùa Chuông Phố Hiến, Sóng sông Hồng & Mây cổ */}
      <div 
        className="header-watermark"
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
          opacity: 0.10,
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, zIndex: 2, minWidth: 0 }}>
        {/* Biểu trưng chính thức tỉnh Hưng Yên */}
        <div 
          className="header-emblem-logo"
          style={{ 
            width: 44, 
            height: 44, 
            flexShrink: 0, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))'
          }}
        >
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

        <div style={{ minWidth: 0 }}>
          <div 
            className="header-emblem-text-top"
            style={{ 
              color: 'rgba(255, 255, 255, 0.92)', 
              fontSize: 11, 
              letterSpacing: '0.04em', 
              fontWeight: 600,
              textTransform: 'uppercase',
              lineHeight: 1.2,
              whiteSpace: 'nowrap'
            }}
          >
            ỦY BAN NHÂN DÂN TỈNH HƯNG YÊN
          </div>
          <div 
            className="header-emblem-text-title"
            style={{ 
              color: '#ffffff', 
              fontSize: 18, 
              fontWeight: 800, 
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              lineHeight: 1.3,
              whiteSpace: 'nowrap'
            }}
          >
            VĂN PHÒNG SỐ
            <Tag 
              style={{ 
                background: 'rgba(255, 255, 255, 0.12)', 
                border: '1px solid rgba(255, 255, 255, 0.22)', 
                color: '#e2e8f0', 
                borderRadius: 12, 
                fontSize: 11, 
                fontWeight: 600, 
                margin: 0,
                padding: '0 8px',
                height: 20,
                lineHeight: '18px'
              }}
            >
              {user.title}
            </Tag>
          </div>
        </div>
      </div>

      {/* Right: Search Pill, Bell with 3 badge, User Avatar & Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, zIndex: 2, flexShrink: 0 }}>
        {/* Search input in pill shape */}
        <div className="header-search-container" style={{ width: 250 }}>
          <Input
            placeholder="Tìm kiếm nhiệm vụ, dự án, văn bản..."
            prefix={<SearchOutlined style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: 13, marginRight: 4 }} />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              borderColor: 'rgba(255, 255, 255, 0.22)',
              borderRadius: 20,
              color: '#ffffff',
              fontSize: 12.5,
              height: 32
            }}
            className="header-search-input"
            allowClear
          />
        </div>

        {/* Notifications Popover with dynamic unread badge */}
        <Popover 
          content={notificationContent} 
          trigger="click" 
          placement="bottomRight"
          open={notifPopoverOpen}
          onOpenChange={setNotifPopoverOpen}
        >
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
              background: notifPopoverOpen ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
              transition: 'background 0.2s',
              flexShrink: 0
            }}
            title="Nhắc việc & Thông báo điều hành"
          >
            <Badge count={unreadCount} size="small" offset={[2, -3]} color="#D64545">
              <BellOutlined style={{ fontSize: 16, color: '#ffffff' }} />
            </Badge>
          </div>
        </Popover>

        {/* User Account / Menu Tiện ích */}
        <Dropdown menu={{ items: userMenuItems }} trigger={['click']} placement="bottomRight">
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8, 
              cursor: 'pointer',
              padding: '2px 8px 2px 2px',
              borderRadius: 20,
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.2s',
              flexShrink: 0
            }}
            title="Tài khoản & Tiện ích điều hành"
          >
            <div 
              style={{ 
                width: 28, 
                height: 28, 
                borderRadius: '50%', 
                background: '#1769AA', 
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 11.5,
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                flexShrink: 0
              }}
            >
              {user.avatarText}
            </div>
            <div className="header-user-text" style={{ textAlign: 'left', lineHeight: 1.25 }}>
              <div style={{ color: '#ffffff', fontSize: 12.5, fontWeight: 700 }}>
                {user.name}
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: 10.5, fontWeight: 400 }}>
                {user.title}
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};
