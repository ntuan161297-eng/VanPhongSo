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

interface IOCDisbursementFrameProps {
  initialIframeUrl?: string;
}

export const IOCDisbursementFrame: React.FC<IOCDisbursementFrameProps> = ({
  initialIframeUrl = "https://ioc.hungyen.gov.vn/embed/giai-ngan-dau-tu-cong"
}) => {
  const [viewMode, setViewMode] = useState<'NATIVE' | 'IFRAME'>('NATIVE');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(initialIframeUrl);
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState(initialIframeUrl);
  const [lastRefreshed, setLastRefreshed] = useState('08/10/2026 - 09:15');

  const handleRefresh = () => {
    setLastRefreshed(`08/10/2026 - ${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`);
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
            Nguồn: <strong style={{ color: '#38bdf8' }}>Sở Tài chính</strong> • Cập nhật: {lastRefreshed}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#10b981' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Đồng bộ dữ liệu số
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
        <div style={{ width: '100%', height: isFullscreen ? 'calc(100vh - 46px)' : 750, position: 'relative' }}>
          <iframe 
            src={iframeUrl}
            title="IOC Tỉnh Hưng Yên - Giải Ngân Vốn Đầu Tư Công"
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
        /* NATIVE VIEW - TÁI LẬP 100% GIAO DIỆN THEO ẢNH 3 */
        <div style={{ padding: '16px 20px', background: '#0e1424', overflowX: 'auto' }}>
          <div style={{ minWidth: 900 }}>
            {/* Header IOC Tỉnh */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Quốc huy */}
                <div style={{ width: 44, height: 44, flexShrink: 0 }}>
                  <img src="/assets/hung_yen_logo.png" alt="Quốc huy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: 18, fontWeight: 800, color: '#facc15', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                    TRUNG TÂM ĐIỀU HÀNH CHỈ SỐ ĐẦU TƯ CÔNG
                  </h2>
                  <div style={{ fontSize: 13.5, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                    <span style={{ fontSize: 14 }}>⊞</span>
                    <strong>Kế hoạch giải ngân vốn đầu tư công</strong>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 13, color: '#cbd5e1', fontStyle: 'italic' }}>Nguồn: Sở tài chính</div>
                <div style={{ fontSize: 13, color: '#f1f5f9', marginTop: 2 }}>Ngày cập nhật</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#38bdf8' }}>08/10/2026</div>
              </div>
            </div>

            {/* HÀNG 1: 5 THẺ CHỈ SỐ TỔNG HỢP TOP (ẢNH 3) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 10,
              marginBottom: 14
            }}>
              <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#cbd5e1', fontWeight: 600, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Kế hoạch vốn ĐTC được Thủ tướng CP giao
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#00d2ff', margin: '6px 0 0 0' }}>
                  43.452.580
                </div>
              </div>

              <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#cbd5e1', fontWeight: 600, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Kế hoạch vốn ĐTC được Thủ tướng CP giao và HĐND giao
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#00d2ff', margin: '6px 0 0 0' }}>
                  41.325.480
                </div>
              </div>

              <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#cbd5e1', fontWeight: 600, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Kế hoạch vốn địa phương giao
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#00d2ff', margin: '6px 0 0 0' }}>
                  56.385.647
                </div>
              </div>

              <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#cbd5e1', fontWeight: 600, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Giải ngân lũy kế từ đầu năm đến nay
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#00d2ff', margin: '6px 0 0 0' }}>
                  28.446.835
                </div>
              </div>

              <div style={{ background: '#141d33', border: '1px solid #1e2c4d', borderRadius: 8, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#cbd5e1', fontWeight: 600, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Tỷ lệ (%) giải ngân so với KH vốn được TTg và HĐND giao
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#00d2ff', margin: '6px 0 0 0' }}>
                  68.800%
                </div>
              </div>
            </div>

            {/* BẢNG CÁC DẢI PHÂN RÃ THEO NGUỒN VỐN & CẤP NGÂN SÁCH (ẢNH 3) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* KHỐI 1: KẾ HOẠCH VỐN GIAO TRONG NĂM (CYAN HEADER) */}
              <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid #0284c7' }}>
                <div style={{ background: '#0284c7', color: '#ffffff', padding: '6px 14px', fontWeight: 700, fontSize: 13, textAlign: 'center', letterSpacing: '0.04em' }}>
                  KẾ HOẠCH VỐN GIAO TRONG NĂM
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, padding: '8px 10px', background: '#121a2d' }}>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    43.452.580
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    41.325.480
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    49.429.453
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    26.332.470
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    63.700%
                  </div>
                </div>
              </div>

              {/* KHỐI 2: Phân theo nguồn vốn: ngân sách địa phương (PINK HEADER) */}
              <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid #db2777' }}>
                <div style={{ background: '#db2777', color: '#ffffff', padding: '6px 14px', fontWeight: 700, fontSize: 13, textAlign: 'center' }}>
                  Phân theo nguồn vốn: ngân sách địa phương
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, padding: '8px 10px', background: '#121a2d' }}>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    42.542.000
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    40.414.900
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    48.899.753
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    25.864.917
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    64.000%
                  </div>
                </div>
              </div>

              {/* KHỐI 3: Phân theo nguồn vốn: ngân sách trung ương (MAROON HEADER) */}
              <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid #9f1239' }}>
                <div style={{ background: '#9f1239', color: '#ffffff', padding: '6px 14px', fontWeight: 700, fontSize: 13, textAlign: 'center' }}>
                  Phân theo nguồn vốn: ngân sách trung ương
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, padding: '8px 10px', background: '#121a2d' }}>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    910.580
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    910.580
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    529.700
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    467.553
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    88.300%
                  </div>
                </div>
              </div>

              {/* KHỐI 4: Phân theo cấp ngân sách: Cấp tỉnh quản lý (LIGHT GREEN HEADER) */}
              <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid #22c55e' }}>
                <div style={{ background: '#22c55e', color: '#0f172a', padding: '6px 14px', fontWeight: 800, fontSize: 13, textAlign: 'center' }}>
                  Phân theo cấp ngân sách: Cấp tỉnh quản lý
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, padding: '8px 10px', background: '#121a2d' }}>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    33.223.080
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    31.095.980
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    30.793.235
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    19.545.595
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    62.900%
                  </div>
                </div>
              </div>

              {/* KHỐI 5: Phân theo cấp ngân sách: Cấp xã quản lý (DARK GREEN HEADER) */}
              <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid #0d9488' }}>
                <div style={{ background: '#0d9488', color: '#ffffff', padding: '6px 14px', fontWeight: 700, fontSize: 13, textAlign: 'center' }}>
                  Phân theo cấp ngân sách: Cấp xã quản lý
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, padding: '8px 10px', background: '#121a2d' }}>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#94a3b8', fontStyle: 'italic', fontSize: 15 }}>
                    (Trống)
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#94a3b8', fontStyle: 'italic', fontSize: 15 }}>
                    (Trống)
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    41.168
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    37.486
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '8px 6px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 17 }}>
                    91.100%
                  </div>
                </div>
              </div>

              {/* KHỐI 6: KẾ HOẠCH VỐN KÉO DÀI TỪ NĂM 2025 SANG NĂM 2026 */}
              <div style={{ background: '#121a2d', border: '1px solid #1e2c4d', borderRadius: 6, padding: '10px 14px', marginTop: 4 }}>
                {/* Dòng chính */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 13, color: '#f1f5f9' }}>
                    <span style={{ fontSize: 14 }}>⊞</span>
                    KẾ HOẠCH VỐN KÉO DÀI TỪ NĂM 2025 SANG NĂM 2026
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 16 }}>
                    8.406.718
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 16 }}>
                    1.327.500
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 700, fontSize: 16 }}>
                    15.800%
                  </div>
                </div>

                {/* Sub-row 1: Vốn NSTW */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', alignItems: 'center', gap: 10, padding: '4px 0 4px 20px', borderTop: '1px solid #1f293d' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: '#cbd5e1' }}>
                    <span style={{ fontSize: 11, color: '#64748b' }}>▪</span> Vốn NSTW
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 600, fontSize: 15 }}>
                    8.406.718
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 600, fontSize: 15 }}>
                    1.327.500
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 600, fontSize: 15 }}>
                    15.800%
                  </div>
                </div>

                {/* Sub-row 2: Vốn ngân sách tỉnh */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', alignItems: 'center', gap: 10, padding: '4px 0 4px 20px', borderTop: '1px solid #1f293d' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: '#cbd5e1' }}>
                    <span style={{ fontSize: 11, color: '#64748b' }}>▪</span> Vốn ngân sách tỉnh
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 600, fontSize: 15 }}>
                    8.406.718
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 600, fontSize: 15 }}>
                    1.327.500
                  </div>
                  <div style={{ background: '#162035', border: '1px solid #23314e', borderRadius: 6, padding: '6px 8px', textAlign: 'center', color: '#38bdf8', fontWeight: 600, fontSize: 15 }}>
                    15.800%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cấu hình liên kết Iframe IOC Tỉnh */}
      <Modal
        title="Cấu hình đường dẫn nhúng Iframe IOC Đầu Tư Công"
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
          placeholder="https://ioc.hungyen.gov.vn/embed/giai-ngan-dau-tu-cong"
          style={{ marginTop: 8 }}
        />
        <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 10 }}>
          💡 Mẹo: Khi dùng trong mạng nội bộ UBND tỉnh, bạn có thể nhập link IP hoặc Domain nội bộ của IOC.
        </div>
      </Modal>
    </div>
  );
};
