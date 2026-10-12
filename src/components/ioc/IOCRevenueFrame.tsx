import React, { useState } from 'react';
import { Button, Tag, Tooltip, Input, Modal, Segmented } from 'antd';
import { 
  FullscreenOutlined, 
  FullscreenExitOutlined, 
  ReloadOutlined, 
  LinkOutlined, 
  SettingOutlined, 
  CheckCircleOutlined,
  GlobalOutlined,
  AppstoreOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  AreaChart, 
  Area 
} from 'recharts';

interface IOCRevenueFrameProps {
  initialIframeUrl?: string;
}

export const IOCRevenueFrame: React.FC<IOCRevenueFrameProps> = ({ 
  initialIframeUrl = "https://ioc.hungyen.gov.vn/embed/thu-ngan-sach" 
}) => {
  const [viewMode, setViewMode] = useState<'NATIVE' | 'IFRAME'>('NATIVE');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(initialIframeUrl);
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState(initialIframeUrl);
  const [lastRefreshed, setLastRefreshed] = useState('12/10/2026 - 08:30');

  // Dữ liệu biểu đồ cột Tiền sử dụng đất (Ảnh 1)
  const landUseData = [
    { date: '31/01', value: 362413 },
    { date: '28/02', value: 2835518 },
    { date: '11/02', value: 5416106 },
    { date: '31/03', value: 8713196 },
    { date: '30/04', value: 12786288 },
    { date: '31/05', value: 13555544 },
    { date: '30/06', value: 14915798 },
    { date: '31/07', value: 16417489 },
    { date: '31/08', value: 18029855 },
    { date: '30/09', value: 19544192 },
    { date: '12/10', value: 19544192 }
  ];

  // Dữ liệu biểu đồ cột Tiền thuê đất (Ảnh 1)
  const landRentData = [
    { date: '28/02', value: 0 },
    { date: '31/01', value: 1980 },
    { date: '11/02', value: 1980 },
    { date: '31/03', value: 30776 },
    { date: '30/04', value: 162689 },
    { date: '31/05', value: 360903 },
    { date: '30/06', value: 482748 },
    { date: '31/07', value: 531270 },
    { date: '31/08', value: 589791 },
    { date: '30/09', value: 619807 },
    { date: '12/10', value: 619807 }
  ];

  // Dữ liệu diện tích / chuỗi thời gian thu ngân sách trong kỳ báo cáo (Ảnh 1)
  const periodTrendData = [
    { date: '31/01', nsXa: 1222331, nsTinh: 3770915, nstw: 7825685, nsnn: 12589246, nsdp: 8492119 },
    { date: '11/02', nsXa: 1602529, nsTinh: 4210000, nstw: 8900000, nsnn: 14000000, nsdp: 10500000 },
    { date: '28/02', nsXa: 2501260, nsTinh: 5858116, nstw: 12000000, nsnn: 26108464, nsdp: 18000000 },
    { date: '31/03', nsXa: 4578408, nsTinh: 8162558, nstw: 18000000, nsnn: 40000000, nsdp: 30000000 },
    { date: '30/04', nsXa: 6314772, nsTinh: 11692184, nstw: 23000000, nsnn: 57258936, nsdp: 42000000 },
    { date: '31/05', nsXa: 7156162, nsTinh: 12153107, nstw: 25000000, nsnn: 63305849, nsdp: 48000000 },
    { date: '30/06', nsXa: 8316697, nsTinh: 13605889, nstw: 27000000, nsnn: 70273885, nsdp: 54000000 },
    { date: '31/07', nsXa: 8825218, nsTinh: 15147246, nstw: 30000000, nsnn: 77728741, nsdp: 60000000 },
    { date: '31/08', nsXa: 10760648, nsTinh: 17164726, nstw: 32000000, nsnn: 86646702, nsdp: 68000000 },
    { date: '30/09', nsXa: 12062106, nsTinh: 18649288, nstw: 34000000, nsnn: 94158911, nsdp: 71087454 },
    { date: '12/10', nsXa: 12823847, nsTinh: 19544192, nstw: 36063786, nsnn: 103415802, nsdp: 75000000 }
  ];

  // Dữ liệu tổng thu xã/phường hàng đầu (Ảnh 1)
  const communeRankingData = [
    { name: 'Xã Nghĩa Trụ', value: 7679616 },
    { name: 'Xã Như Quỳnh', value: 4106013 },
    { name: 'Xã Văn Giang', value: 3839309 },
    { name: 'Xã Nguyễn Văn Linh', value: 3658139 },
    { name: 'Xã Yên Mỹ', value: 1082678 },
    { name: 'Xã Phụng Công', value: 1855314 },
    { name: 'Phường Phố Hiến', value: 1747162 },
    { name: 'Phường Mỹ Hào', value: 1372013 },
    { name: 'Phường Trần Hưng Đạo', value: 1340161 },
    { name: 'Phường Lam Sơn', value: 1129981 },
    { name: 'Xã Dực Dục', value: 856821 }
  ];

  const handleRefresh = () => {
    setLastRefreshed(`12/10/2026 - ${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`);
  };

  return (
    <div 
      className="ioc-screen-wrapper"
      style={{
        background: '#0d1322',
        borderRadius: isFullscreen ? 0 : 10,
        border: '1px solid #1e293b',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
        color: '#ffffff',
        fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
        overflow: 'hidden',
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? 0 : undefined,
        left: isFullscreen ? 0 : undefined,
        width: isFullscreen ? '100vw' : '100%',
        height: isFullscreen ? '100vh' : 'auto',
        zIndex: isFullscreen ? 99999 : 1,
        marginBottom: 18
      }}
    >
      {/* Top Controller Bar (Thanh công cụ tích hợp nguồn IOC tỉnh) */}
      <div style={{
        background: '#131b2e',
        borderBottom: '1px solid #23314e',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Tag color="#0284c7" style={{ borderRadius: 4, fontWeight: 700, padding: '2px 8px' }}>
            <GlobalOutlined /> TÍCH HỢP IOC TỈNH HƯNG YÊN
          </Tag>
          <span style={{ fontSize: 12, color: '#94a3b8' }}>
            Nguồn: <strong style={{ color: '#38bdf8' }}>Hệ thống báo cáo Tabmis</strong> • Cập nhật: {lastRefreshed}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#10b981' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Đồng bộ thời gian thực
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Segmented
            size="small"
            value={viewMode}
            onChange={(val) => setViewMode(val as any)}
            options={[
              { value: 'NATIVE', label: <span><AppstoreOutlined /> Giao diện chuẩn ảnh</span> },
              { value: 'IFRAME', label: <span><LinkOutlined /> Nhúng Iframe Live</span> }
            ]}
            style={{ background: '#0b1120', color: '#cbd5e1' }}
          />

          <Tooltip title="Cấu hình URL Iframe IOC">
            <Button 
              size="small" 
              icon={<SettingOutlined />} 
              onClick={() => setIsUrlModalOpen(true)}
              style={{ background: 'transparent', borderColor: '#334155', color: '#cbd5e1' }}
            />
          </Tooltip>

          <Tooltip title="Làm mới số liệu">
            <Button 
              size="small" 
              icon={<ReloadOutlined />} 
              onClick={handleRefresh}
              style={{ background: 'transparent', borderColor: '#334155', color: '#cbd5e1' }}
            />
          </Tooltip>

          <Tooltip title={isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình IOC"}>
            <Button 
              size="small" 
              icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />} 
              onClick={() => setIsFullscreen(!isFullscreen)}
              style={{ background: '#0284c7', borderColor: '#0284c7', color: '#ffffff' }}
            />
          </Tooltip>
        </div>
      </div>

      {/* Main IOC Content Area */}
      {viewMode === 'IFRAME' ? (
        <div style={{ width: '100%', height: isFullscreen ? 'calc(100vh - 46px)' : 780, position: 'relative' }}>
          <iframe 
            src={iframeUrl}
            title="IOC Tỉnh Hưng Yên - Thu Ngân Sách"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'rgba(15, 23, 42, 0.85)',
            padding: '6px 12px',
            borderRadius: 6,
            fontSize: 12,
            color: '#94a3b8',
            backdropFilter: 'blur(4px)'
          }}>
            Đang nhúng link IOC: <span style={{ color: '#38bdf8' }}>{iframeUrl}</span>
          </div>
        </div>
      ) : (
        /* NATIVE VIEW - TÁI LẬP 100% GIAO DIỆN THEO ẢNH 1 */
        <div style={{ padding: '16px 20px', background: '#0e1424' }}>
          {/* Header IOC chuẩn ảnh 1 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {/* Quốc huy */}
              <div style={{ width: 44, height: 44, flexShrink: 0 }}>
                <img src="/assets/hung_yen_logo.png" alt="Quốc huy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#facc15', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  HỆ THỐNG GIÁM SÁT TÌNH HÌNH KINH TẾ XÃ HỘI
                </h2>
                <div style={{ fontSize: 13.5, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                  <span style={{ fontSize: 14 }}>⊞</span>
                  <strong>Thống kê tình hình thu ngân sách nhà nước hàng ngày trên địa bàn tỉnh Hưng Yên</strong>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontStyle: 'italic' }}>Nguồn: Hệ thống báo cáo Tabmis</div>
              <div style={{ fontSize: 13, color: '#f1f5f9', marginTop: 2 }}>Ngày báo cáo</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#38bdf8' }}>12/10/2026</div>
            </div>
          </div>

          {/* HÀNG 1: 5 THẺ CHỈ SỐ TOP CHUẨN XÁC THEO ẢNH 1 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 12,
            marginBottom: 16
          }}>
            {/* Thẻ 1: Tổng thu */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Tổng thu(1=2+3)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                54.840.065
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>

            {/* Thẻ 2: Thực hiện NSTW */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Thực hiện NSTW(2)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                9.451.634
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>

            {/* Thẻ 3: Thực hiện NSĐP */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Thực hiện NSĐP(3=4+5)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                45.388.430
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>

            {/* Thẻ 4: Thực hiện NS cấp tỉnh */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Thực hiện NS cấp tỉnh(4)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                36.063.786
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>

            {/* Thẻ 5: Thực hiện NS cấp xã */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Thực hiện NS cấp xã(5)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                9.324.646
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>
          </div>

          {/* HÀNG 2: 2 KHỐI GIỮA (THU TIỀN SỬ DỤNG ĐẤT & THU TIỀN THUÊ ĐẤT) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: 14, marginBottom: 14 }}>
            {/* Box Trái: TÌNH HÌNH THU TIỀN SỬ DỤNG ĐẤT */}
            <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: '#0284c7', color: '#ffffff', padding: '8px 14px', fontWeight: 700, fontSize: 13.5, textAlign: 'center', letterSpacing: '0.04em' }}>
                TÌNH HÌNH THU TIỀN SỬ DỤNG ĐẤT ( TRIỆU ĐỒNG )
              </div>
              <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* 3 Cột số bên trái */}
                <div style={{ width: 140, display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSNN</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>19.544.192</div>
                  </div>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSTW</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>2.933.436</div>
                  </div>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSĐP</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>16.610.756</div>
                  </div>
                </div>

                {/* Biểu đồ cột giữa */}
                <div style={{ flex: 1, height: 180 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={landUseData} margin={{ top: 15, right: 5, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="2 2" stroke="#1f293d" vertical={false} />
                      <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 9.5 }} />
                      <YAxis tick={{ fill: '#94a3b8', fontSize: 9.5 }} tickFormatter={(v) => `${Math.round(v / 1000000)}M`} />
                      <RechartsTooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: 11 }} />
                      <Bar dataKey="value" name="Tiền sử dụng đất" fill="#00c2ff" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* 2 Cột số bên phải */}
                <div style={{ width: 140, display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
                  <div style={{ background: '#162035', padding: '8px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NS cấp tỉnh</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>8.711.605</div>
                  </div>
                  <div style={{ background: '#162035', padding: '8px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NS cấp xã</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>7.899.151</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Box Phải: THU TIỀN THUÊ ĐẤT */}
            <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: '#059669', color: '#ffffff', padding: '8px 14px', fontWeight: 700, fontSize: 13.5, textAlign: 'center', letterSpacing: '0.04em' }}>
                THU TIỀN THUÊ ĐẤT ( TRIỆU ĐỒNG )
              </div>
              <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* 3 Cột số bên trái */}
                <div style={{ width: 140, display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSNN</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>619.807</div>
                  </div>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSTW</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>92.207</div>
                  </div>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSĐP</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>527.601</div>
                  </div>
                </div>

                {/* Biểu đồ cột giữa */}
                <div style={{ flex: 1, height: 180 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={landRentData} margin={{ top: 15, right: 5, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="2 2" stroke="#1f293d" vertical={false} />
                      <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 9.5 }} />
                      <YAxis tick={{ fill: '#94a3b8', fontSize: 9.5 }} tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
                      <RechartsTooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: 11 }} />
                      <Bar dataKey="value" name="Tiền thuê đất" fill="#4ade80" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* 2 Cột số bên phải */}
                <div style={{ width: 140, display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
                  <div style={{ background: '#162035', padding: '8px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NS cấp tỉnh</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>518.452</div>
                  </div>
                  <div style={{ background: '#162035', padding: '8px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NS cấp xã</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>9.148</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HÀNG 3: 2 KHỐI ĐÁY (TIẾN ĐỘ TRONG KỲ VÀ TỔNG THU XÃ PHƯỜNG) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: 14 }}>
            {/* Box Trái: TÌNH HÌNH THU NGÂN SÁCH TRONG KỲ BÁO CÁO */}
            <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: '#0ea5e9', color: '#ffffff', padding: '8px 14px', fontWeight: 700, fontSize: 13.5, textAlign: 'center', letterSpacing: '0.04em' }}>
                TÌNH HÌNH THU NGÂN SÁCH TRONG KỲ BÁO CÁO
              </div>
              <div style={{ padding: '10px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, fontSize: 11, color: '#94a3b8', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#38bdf8', borderRadius: 2 }} /> Lũy kế NSXã</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#818cf8', borderRadius: 2 }} /> Lũy kế NSTỉnh</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#fb7185', borderRadius: 2 }} /> Lũy kế NSTW</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#f59e0b', borderRadius: 2 }} /> Lũy kế NSNN</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#34d399', borderRadius: 2 }} /> Lũy kế NSĐP</span>
                </div>
                <div style={{ height: 210 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={periodTrendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="2 2" stroke="#1f293d" />
                      <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 9.5 }} />
                      <YAxis tick={{ fill: '#94a3b8', fontSize: 9.5 }} tickFormatter={(v) => `${Math.round(v / 1000000)}M`} />
                      <RechartsTooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: 11 }} />
                      <Area type="monotone" dataKey="nsnn" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} name="Lũy kế NSNN" />
                      <Area type="monotone" dataKey="nsdp" stroke="#34d399" fill="#34d399" fillOpacity={0.2} name="Lũy kế NSĐP" />
                      <Area type="monotone" dataKey="nstw" stroke="#fb7185" fill="#fb7185" fillOpacity={0.2} name="Lũy kế NSTW" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Box Phải: TÌNH HÌNH TỔNG THU XÃ PHƯỜNG */}
            <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: '#0ea5e9', color: '#ffffff', padding: '8px 14px', fontWeight: 700, fontSize: 13.5, textAlign: 'center', letterSpacing: '0.04em' }}>
                TÌNH HÌNH TỔNG THU XÃ PHƯỜNG
              </div>
              <div style={{ padding: '10px 14px', height: 245 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={communeRankingData} margin={{ top: 20, right: 10, left: -10, bottom: 35 }}>
                    <CartesianGrid strokeDasharray="2 2" stroke="#1f293d" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#cbd5e1', fontSize: 9.5 }} 
                      interval={0} 
                      angle={-35} 
                      textAnchor="end" 
                    />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 9.5 }} tickFormatter={(v) => `${Math.round(v / 1000000)}M`} />
                    <RechartsTooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: 11 }} />
                    <Bar dataKey="value" name="Tổng thu xã/phường" fill="#00d2ff" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cấu hình liên kết Iframe IOC Tỉnh */}
      <Modal
        title="Cấu hình đường dẫn nhúng Iframe IOC Tỉnh Hưng Yên"
        open={isUrlModalOpen}
        onOk={() => {
          setIframeUrl(tempUrl);
          setIsUrlModalOpen(false);
        }}
        onCancel={() => setIsUrlModalOpen(false)}
        okText="Lưu đường dẫn"
        cancelText="Đóng"
      >
        <p style={{ fontSize: 13, color: '#475569' }}>
          Nhập đường dẫn trực tiếp từ Cổng Trung tâm Giám sát Điều hành Thông minh (IOC) tỉnh Hưng Yên:
        </p>
        <Input 
          value={tempUrl} 
          onChange={(e) => setTempUrl(e.target.value)} 
          placeholder="https://ioc.hungyen.gov.vn/embed/..."
          style={{ marginTop: 8 }}
        />
        <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 10 }}>
          💡 Mẹo: Khi dùng trong mạng nội bộ UBND tỉnh, bạn có thể nhập link IP hoặc Domain nội bộ của IOC.
        </div>
      </Modal>
    </div>
  );
};
