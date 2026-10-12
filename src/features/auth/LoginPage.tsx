import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select, message } from 'antd';
import { 
  UserOutlined, 
  LockOutlined, 
  CheckCircleFilled, 
  ArrowRightOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { useApp, HUNG_YEN_OFFICE_LEADERS } from '../../context/AppContext';

export const LoginPage: React.FC = () => {
  const { login } = useApp();
  const [selectedLeaderId, setSelectedLeaderId] = useState<string>('leader-dgd');
  const [isCaptchaChecked, setIsCaptchaChecked] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const currentLeader = HUNG_YEN_OFFICE_LEADERS.find(l => l.id === selectedLeaderId) || HUNG_YEN_OFFICE_LEADERS[0];

  const handleLeaderChange = (id: string) => {
    setSelectedLeaderId(id);
  };

  const handleLogin = () => {
    if (!isCaptchaChecked) {
      message.warning('Vui lòng xác thực "Tôi không phải là người máy" để tiếp tục');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      login(currentLeader);
      message.success(`Đăng nhập thành công! Chào mừng đồng chí ${currentLeader.name} - ${currentLeader.title}`);
      setLoading(false);
    }, 400);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 50%, #edf5fc 0%, #d4e5f7 100%)',
      padding: '20px 14px',
      fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif"
    }}>
      {/* Centered Login Card */}
      <div style={{
        width: '100%',
        maxWidth: 960,
        background: '#ffffff',
        borderRadius: 20,
        boxShadow: '0 20px 60px rgba(7, 56, 114, 0.14)',
        border: '1px solid rgba(191, 219, 254, 0.8)',
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {/* Left Column: Branding & 3D Illustration matching Photo 2 */}
        <div style={{
          flex: '1 1 380px',
          background: 'linear-gradient(180deg, #f0f7ff 0%, #e2effe 100%)',
          padding: '36px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRight: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          {/* Logo Phố Hiến / Hưng Yên */}
          <div style={{ width: 68, height: 68, marginBottom: 12 }}>
            <img 
              src="/assets/hung_yen_logo.png" 
              alt="Hưng Yên Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))' }} 
            />
          </div>

          {/* Tiêu đề đổi thành: VĂN PHÒNG SỐ TỈNH HƯNG YÊN theo đúng yêu cầu */}
          <h1 style={{
            fontSize: 21,
            fontWeight: 800,
            color: '#073872',
            margin: '0 0 4px 0',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            lineHeight: 1.3
          }}>
            VĂN PHÒNG SỐ<br />TỈNH HƯNG YÊN
          </h1>
          <p style={{
            fontSize: 12,
            color: '#0284c7',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            margin: '0 0 20px 0'
          }}>
            Hệ thống chỉ đạo & điều hành thông minh
          </p>

          {/* 3D Smart City Illustration */}
          <div style={{
            width: '100%',
            maxWidth: 320,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(7, 56, 114, 0.16)',
            border: '2px solid #ffffff',
            background: '#ffffff'
          }}>
            <img 
              src="/assets/login_illustration.jpg" 
              alt="Minh họa Văn phòng số tỉnh Hưng Yên" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 18 }}>
            Văn phòng Ủy ban Nhân dân tỉnh Hưng Yên • 2026
          </div>
        </div>

        {/* Right Column: Login Form matching Photo 2 */}
        <div style={{
          flex: '1 1 420px',
          padding: '36px 38px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#ffffff'
        }}>
          <h2 style={{
            fontSize: 22,
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 18px 0',
            letterSpacing: '0.02em',
            textAlign: 'center'
          }}>
            ĐĂNG NHẬP HỆ THỐNG
          </h2>

          {/* Demo Account Switcher for Office Leaders */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 10,
            padding: '10px 14px',
            marginBottom: 18
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0369a1', marginBottom: 6 }}>
              👤 Chọn tài khoản Lãnh đạo Văn phòng UBND tỉnh:
            </div>
            <Select
              value={selectedLeaderId}
              onChange={handleLeaderChange}
              style={{ width: '100%' }}
              options={HUNG_YEN_OFFICE_LEADERS.map(leader => ({
                value: leader.id,
                label: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ 
                      width: 22, 
                      height: 22, 
                      borderRadius: '50%', 
                      background: '#0b74e5', 
                      color: '#ffffff', 
                      fontSize: 10, 
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {leader.avatarText}
                    </span>
                    <span style={{ fontWeight: 600 }}>{leader.name}</span>
                    <span style={{ fontSize: 11, color: '#64748b' }}>({leader.title})</span>
                  </div>
                )
              }))}
            />
          </div>

          <Form layout="vertical" onFinish={handleLogin}>
            {/* Input Tài khoản matching Photo 2 */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: '#334155', marginBottom: 5 }}>
                Tài khoản
              </div>
              <Input
                size="large"
                prefix={<UserOutlined style={{ color: '#94a3b8', marginRight: 6 }} />}
                suffix={<CheckCircleFilled style={{ color: '#16a34a', fontSize: 16 }} />}
                value={`${currentLeader.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/\s+/g, '')}.vp`}
                readOnly
                style={{
                  background: '#f8fafc',
                  borderColor: '#cbd5e1',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500
                }}
              />
            </div>

            {/* Input Mật khẩu matching Photo 2 */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: '#334155', marginBottom: 5 }}>
                Mật khẩu
              </div>
              <Input.Password
                size="large"
                prefix={<LockOutlined style={{ color: '#94a3b8', marginRight: 6 }} />}
                suffix={<CheckCircleFilled style={{ color: '#16a34a', fontSize: 16 }} />}
                value="hungyen2026@"
                readOnly
                style={{
                  background: '#f8fafc',
                  borderColor: '#cbd5e1',
                  borderRadius: 8,
                  fontSize: 14
                }}
              />
            </div>

            {/* Ghi nhớ đăng nhập & Quên mật khẩu matching Photo 2 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, fontSize: 13 }}>
              <Checkbox defaultChecked style={{ color: '#64748b', fontSize: 12.5 }}>
                Ghi nhớ đăng nhập
              </Checkbox>
              <span 
                style={{ color: '#0284c7', fontWeight: 600, fontSize: 12.5, cursor: 'pointer' }}
                onClick={() => message.info('Vui lòng liên hệ quản trị viên Trung tâm CNTT để được cấp lại mật khẩu.')}
              >
                Quên mật khẩu?
              </span>
            </div>

            {/* reCAPTCHA Box matching Photo 2 */}
            <div style={{
              border: '1px solid #d1d5db',
              background: '#f9fafb',
              borderRadius: 6,
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 18
            }}>
              <Checkbox 
                checked={isCaptchaChecked} 
                onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                style={{ fontSize: 13, fontWeight: 500, color: '#1e293b' }}
              >
                Tôi không phải là người máy
              </Checkbox>

              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ReloadOutlined style={{ fontSize: 18, color: '#0284c7' }} />
                <span style={{ fontSize: 9.5, color: '#64748b', fontWeight: 700, marginTop: 2 }}>
                  reCAPTCHA
                </span>
              </div>
            </div>

            {/* Nút Đăng nhập -> matching Photo 2 */}
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={loading}
              style={{
                width: '100%',
                height: 42,
                borderRadius: 8,
                background: '#0b57d0',
                borderColor: '#0b57d0',
                fontWeight: 700,
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginBottom: 14,
                boxShadow: '0 4px 12px rgba(11, 87, 208, 0.25)'
              }}
            >
              Đăng nhập <ArrowRightOutlined />
            </Button>

            {/* Hoặc đăng nhập bằng matching Photo 2 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              margin: '12px 0 14px 0',
              fontSize: 12,
              color: '#94a3b8'
            }}>
              <span style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
              <span>Hoặc đăng nhập bằng</span>
              <span style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
            </div>

            {/* Nút Đăng nhập SSO matching Photo 2 */}
            <Button
              size="large"
              onClick={handleLogin}
              style={{
                width: '100%',
                height: 40,
                borderRadius: 8,
                borderColor: '#0284c7',
                color: '#0284c7',
                fontWeight: 700,
                fontSize: 13.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                background: '#ffffff'
              }}
            >
              <UserOutlined /> Đăng nhập SSO
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
