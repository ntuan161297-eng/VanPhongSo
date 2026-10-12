import React, { useState } from 'react';
import { Button, Tag, Tooltip, Input, Modal, Segmented } from 'antd';
import { 
  FullscreenOutlined, 
  FullscreenExitOutlined, 
  ReloadOutlined, 
  LinkOutlined, 
  SettingOutlined, 
  GlobalOutlined,
  AppstoreOutlined
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

interface IOCExpenseFrameProps {
  initialIframeUrl?: string;
}

export const IOCExpenseFrame: React.FC<IOCExpenseFrameProps> = ({ 
  initialIframeUrl = "https://ioc.hungyen.gov.vn/embed/chi-ngan-sach" 
}) => {
  const [viewMode, setViewMode] = useState<'NATIVE' | 'IFRAME'>('NATIVE');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(initialIframeUrl);
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState(initialIframeUrl);
  const [lastRefreshed, setLastRefreshed] = useState('12/10/2026 - 08:30');

  // Dữ liệu biểu đồ cột Chi thường xuyên (Ảnh 2)
  const recurrentExpenseData = [
    { date: '02/01', value: 2010433 },
    { date: '31/01', value: 4697630 },
    { date: '28/02', value: 7120000 },
    { date: '11/03', value: 10474547 },
    { date: '31/03', value: 13468639 },
    { date: '30/04', value: 16474547 },
    { date: '31/05', value: 18522728 },
    { date: '30/06', value: 20761430 },
    { date: '31/07', value: 22100000 },
    { date: '31/08', value: 23500000 },
    { date: '30/09', value: 24630119 },
    { date: '12/10', value: 24630119 }
  ];

  // Dữ liệu biểu đồ cột Chi đầu tư phát triển (Ảnh 2)
  const developmentExpenseData = [
    { date: '02/01', value: 0 },
    { date: '31/01', value: 112458 },
    { date: '28/02', value: 708490 },
    { date: '31/03', value: 7268440 },
    { date: '30/04', value: 15604632 },
    { date: '31/05', value: 20609213 },
    { date: '30/06', value: 26609213 },
    { date: '31/07', value: 32917949 },
    { date: '31/08', value: 36000000 },
    { date: '30/09', value: 39659254 },
    { date: '12/10', value: 39659254 }
  ];

  // Dữ liệu xếp hạng tổng chi xã/phường (Ảnh 2)
  const communeExpenseRanking = [
    { name: 'Xã Quỳnh Phụ', value: 889256 },
    { name: 'Phường Trần Lãm', value: 589347 },
    { name: 'Xã Triệu Việt Vương', value: 577511 },
    { name: 'Phường Phố Hiến', value: 574462 },
    { name: 'Xã Yên Mỹ', value: 538133 },
    { name: 'Xã Hoàn Long', value: 521731 },
    { name: 'Xã Như Quỳnh', value: 471192 },
    { name: 'Xã Chí Minh', value: 435856 },
    { name: 'Phường Thái Bình', value: 427762 },
    { name: 'Xã Tiền Hải', value: 425713 },
    { name: 'Xã Hưng Hà', value: 422252 },
    { name: 'Xã Thái Thụy', value: 405490 }
  ];

  // Dữ liệu diện tích chi ngân sách trong kỳ báo cáo (Ảnh 2)
  const periodExpenseTrendData = [
    { date: '02/01', nsXa: 847519, nsTinh: 2459, nstw: 17002, nsnn: 2884472, nsdp: 35498852 },
    { date: '28/02', nsXa: 13662711, nsTinh: 3485210, nstw: 1800000, nsnn: 18085553, nsdp: 43239512 },
    { date: '31/03', nsXa: 16610892, nsTinh: 13417500, nstw: 2127697, nsnn: 2798753, nsdp: 52595818 },
    { date: '30/04', nsXa: 23873661, nsTinh: 14807455, nstw: 23144858, nsnn: 33729622, nsdp: 54149701 },
    { date: '31/05', nsXa: 34758531, nsTinh: 18922166, nstw: 24000000, nsnn: 41784241, nsdp: 72146447 },
    { date: '30/06', nsXa: 43239512, nsTinh: 21000000, nstw: 26000000, nsnn: 47782966, nsdp: 75274146 },
    { date: '31/07', nsXa: 51916220, nsTinh: 24000000, nstw: 27000000, nsnn: 54149701, nsdp: 82253125 },
    { date: '31/08', nsXa: 61449107, nsTinh: 27000000, nstw: 28000000, nsnn: 61449107, nsdp: 84881555 },
    { date: '30/09', nsXa: 64333103, nsTinh: 30000000, nstw: 2883995, nsnn: 64333103, nsdp: 87415072 },
    { date: '12/10', nsXa: 64333103, nsTinh: 35493126, nstw: 2883995, nsnn: 64333103, nsdp: 87415072 }
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
      {/* Top Controller Bar */}
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
              { value: 'NATIVE', label: <span><AppstoreOutlined /> Giao diện IOC</span> },
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
            title="IOC Tỉnh Hưng Yên - Chi Ngân Sách"
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
        /* NATIVE VIEW - TÁI LẬP 100% GIAO DIỆN THEO ẢNH 2 */
        <div style={{ padding: '16px 20px', background: '#0e1424' }}>
          {/* Header IOC Tỉnh */}
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
                  <strong>Thống kê tình hình chi ngân sách nhà nước hàng ngày trên địa bàn tỉnh Hưng Yên</strong>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontStyle: 'italic' }}>Nguồn: Hệ thống báo cáo Tabmis</div>
              <div style={{ fontSize: 13, color: '#f1f5f9', marginTop: 2 }}>Ngày báo cáo</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#38bdf8' }}>12/10/2026</div>
            </div>
          </div>

          {/* HÀNG 1: 5 THẺ CHỈ SỐ TOP CHUẨN XÁC THEO ẢNH 2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 12,
            marginBottom: 16
          }}>
            {/* Thẻ 1: Tổng chi */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Tổng chi (1=2+3)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                64.333.103
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>

            {/* Thẻ 2: Thực hiện NSTW */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Thực hiện NSTW (2)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                2.883.995
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>

            {/* Thẻ 3: Thực hiện NSĐP */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Thực hiện NSĐP (3=4+5)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                61.449.107
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>

            {/* Thẻ 4: Thực hiện NS cấp tỉnh */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Thực hiện NS cấp tỉnh(4)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                35.493.126
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>

            {/* Thẻ 5: Thực hiện NS cấp xã */}
            <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 600 }}>Thực hiện NS cấp xã (5)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00d2ff', lineHeight: 1.2, margin: '6px 0 2px 0' }}>
                25.955.981
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Triệu đồng</div>
            </div>
          </div>

          {/* HÀNG 2: 2 KHỐI GIỮA (CHI THƯỜNG XUYÊN & CHI ĐẦU TƯ PHÁT TRIỂN) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: 14, marginBottom: 14 }}>
            {/* Box Trái: TÌNH HÌNH CHI THƯỜNG XUYÊN */}
            <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: '#0284c7', color: '#ffffff', padding: '8px 14px', fontWeight: 700, fontSize: 13.5, textAlign: 'center', letterSpacing: '0.04em' }}>
                TÌNH HÌNH CHI THƯỜNG XUYÊN (TRIỆU ĐỒNG)
              </div>
              <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* 3 Cột số bên trái */}
                <div style={{ width: 140, display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSNN</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>24.630.119</div>
                  </div>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSTW</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>2.394.444</div>
                  </div>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSĐP</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>22.235.674</div>
                  </div>
                </div>

                {/* Biểu đồ cột giữa */}
                <div style={{ flex: 1, height: 180 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={recurrentExpenseData} margin={{ top: 15, right: 5, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="2 2" stroke="#1f293d" vertical={false} />
                      <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 9.5 }} />
                      <YAxis tick={{ fill: '#94a3b8', fontSize: 9.5 }} tickFormatter={(v) => `${Math.round(v / 1000000)}M`} />
                      <RechartsTooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: 11 }} />
                      <Bar dataKey="value" name="Chi thường xuyên" fill="#00c2ff" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* 2 Cột số bên phải */}
                <div style={{ width: 140, display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
                  <div style={{ background: '#162035', padding: '8px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NS cấp tỉnh</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>4.697.630</div>
                  </div>
                  <div style={{ background: '#162035', padding: '8px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NS cấp xã</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>17.538.045</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Box Phải: TÌNH HÌNH CHI ĐẦU TƯ PHÁT TRIỂN */}
            <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: '#059669', color: '#ffffff', padding: '8px 14px', fontWeight: 700, fontSize: 13.5, textAlign: 'center', letterSpacing: '0.04em' }}>
                TÌNH HÌNH CHI ĐẦU TƯ PHÁT TRIỂN (TRIỆU ĐỒNG)
              </div>
              <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* 3 Cột số bên trái */}
                <div style={{ width: 140, display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSNN</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>39.659.254</div>
                  </div>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSTW</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>462.072</div>
                  </div>
                  <div style={{ background: '#162035', padding: '6px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NSĐP</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>39.197.182</div>
                  </div>
                </div>

                {/* Biểu đồ cột giữa */}
                <div style={{ flex: 1, height: 180 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={developmentExpenseData} margin={{ top: 15, right: 5, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="2 2" stroke="#1f293d" vertical={false} />
                      <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 9.5 }} />
                      <YAxis tick={{ fill: '#94a3b8', fontSize: 9.5 }} tickFormatter={(v) => `${Math.round(v / 1000000)}M`} />
                      <RechartsTooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: 11 }} />
                      <Bar dataKey="value" name="Chi đầu tư phát triển" fill="#4ade80" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* 2 Cột số bên phải */}
                <div style={{ width: 140, display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
                  <div style={{ background: '#162035', padding: '8px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NS cấp tỉnh</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>30.792.732</div>
                  </div>
                  <div style={{ background: '#162035', padding: '8px 8px', borderRadius: 6, border: '1px solid #23314e' }}>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Thực hiện NS cấp xã</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>8.404.450</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HÀNG 3: 2 KHỐI ĐÁY (TỔNG CHI XÃ PHƯỜNG & DIỄN BIẾN TRONG KỲ) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: 14 }}>
            {/* Box Trái: TÌNH HÌNH TỔNG CHI XÃ PHƯỜNG */}
            <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: '#0ea5e9', color: '#ffffff', padding: '8px 14px', fontWeight: 700, fontSize: 13.5, textAlign: 'center', letterSpacing: '0.04em' }}>
                TÌNH HÌNH TỔNG CHI XÃ PHƯỜNG
              </div>
              <div style={{ padding: '10px 14px', height: 245 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={communeExpenseRanking} margin={{ top: 20, right: 10, left: -10, bottom: 35 }}>
                    <CartesianGrid strokeDasharray="2 2" stroke="#1f293d" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#cbd5e1', fontSize: 9.5 }} 
                      interval={0} 
                      angle={-35} 
                      textAnchor="end" 
                    />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 9.5 }} tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
                    <RechartsTooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: 11 }} />
                    <Bar dataKey="value" name="Tổng chi xã/phường" fill="#00d2ff" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Box Phải: TÌNH HÌNH CHI NGÂN SÁCH TRONG KỲ BÁO CÁO */}
            <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ background: '#0ea5e9', color: '#ffffff', padding: '8px 14px', fontWeight: 700, fontSize: 13.5, textAlign: 'center', letterSpacing: '0.04em' }}>
                TÌNH HÌNH CHI NGÂN SÁCH TRONG KỲ BÁO CÁO
              </div>
              <div style={{ padding: '10px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, fontSize: 11, color: '#94a3b8', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#38bdf8', borderRadius: 2 }} /> Lũy kế NSĐP</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#818cf8', borderRadius: 2 }} /> Lũy kế NSTỉnh</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#fb7185', borderRadius: 2 }} /> Lũy kế NSXã</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#f59e0b', borderRadius: 2 }} /> Lũy kế NSTW</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#34d399', borderRadius: 2 }} /> Lũy kế NSNN</span>
                </div>
                <div style={{ height: 210 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={periodExpenseTrendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="2 2" stroke="#1f293d" />
                      <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 9.5 }} />
                      <YAxis tick={{ fill: '#94a3b8', fontSize: 9.5 }} tickFormatter={(v) => `${Math.round(v / 1000000)}M`} />
                      <RechartsTooltip contentStyle={{ background: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: 11 }} />
                      <Area type="monotone" dataKey="nsdp" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.2} name="Lũy kế NSĐP" />
                      <Area type="monotone" dataKey="nsnn" stroke="#34d399" fill="#34d399" fillOpacity={0.2} name="Lũy kế NSNN" />
                      <Area type="monotone" dataKey="nsTinh" stroke="#818cf8" fill="#818cf8" fillOpacity={0.2} name="Lũy kế NSTỉnh" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
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
          placeholder="https://ioc.hungyen.gov.vn/embed/chi-ngan-sach"
          style={{ marginTop: 8 }}
        />
        <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 10 }}>
          💡 Mẹo: Khi dùng trong mạng nội bộ UBND tỉnh, bạn có thể nhập link IP hoặc Domain nội bộ của IOC.
        </div>
      </Modal>
    </div>
  );
};
