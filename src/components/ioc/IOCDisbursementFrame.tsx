import React, { useState, useMemo } from 'react';
import { Tag, Tooltip, Input, Select, Modal, Segmented } from 'antd';
import { 
  FullscreenOutlined, 
  FullscreenExitOutlined, 
  SettingOutlined, 
  GlobalOutlined,
  AppstoreOutlined,
  LinkOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar,
  ComposedChart,
  Line
} from 'recharts';

interface IOCDisbursementFrameProps {
  initialIframeUrl?: string;
}

interface FundDetailItem {
  stt: number;
  nguonVon: string;
  khVon: string;
  giaiNgan: string;
  tyLe: string;
  isHeader?: boolean;
}

const FUND_DETAIL_DATA: FundDetailItem[] = [
  { stt: 1, nguonVon: 'TỔNG SỐ (Toàn tỉnh)', khVon: '41.325.480', giaiNgan: '21.111.769', tyLe: '51.1%', isHeader: true },
  { stt: 2, nguonVon: 'KẾ HOẠCH VỐN GIAO TRONG NĂM', khVon: '41.325.480', giaiNgan: '19.657.370', tyLe: '47.6%', isHeader: true },
  { stt: 3, nguonVon: 'Phân theo nguồn vốn', khVon: '41.325.480', giaiNgan: '19.657.370', tyLe: '47.6%' },
  { stt: 4, nguonVon: 'Phân theo cấp ngân sách', khVon: '41.325.480', giaiNgan: '19.657.370', tyLe: '47.6%' },
  { stt: 5, nguonVon: 'Vốn đầu tư công trong kế hoạch Thủ tướng Chính phủ giao', khVon: '22.846.500', giaiNgan: '19.280.306', tyLe: '84.4%' },
  { stt: 6, nguonVon: 'Vốn đầu tư công trong cân đối ngân sách địa phương', khVon: '18.478.980', giaiNgan: '18.227.036', tyLe: '98.6%' },
  { stt: 7, nguonVon: 'Vốn từ nguồn thu sử dụng đất', khVon: '17.199.540', giaiNgan: '17.199.540', tyLe: '100.0%' },
  { stt: 8, nguonVon: 'Cấp tỉnh quản lý', khVon: '14.288.302', giaiNgan: '14.288.302', tyLe: '100.0%' },
  { stt: 9, nguonVon: 'Vốn ngân sách tỉnh', khVon: '13.911.238', giaiNgan: '13.911.238', tyLe: '100.0%' },
  { stt: 10, nguonVon: 'Nguồn khác', khVon: '26.506.159', giaiNgan: '1.454.399', tyLe: '5.5%' }
];

export const IOCDisbursementFrame: React.FC<IOCDisbursementFrameProps> = ({
  initialIframeUrl = "https://ioc.hungyen.gov.vn/embed/giai-ngan-dau-tu-cong"
}) => {
  const [viewMode, setViewMode] = useState<'NATIVE' | 'IFRAME'>('NATIVE');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(initialIframeUrl);
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState(initialIframeUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('9');

  // Dữ liệu biểu đồ thanh ngang "Phân bố giải ngân theo nguồn" (Ảnh 2)
  const sourceDistributionData = [
    { name: 'Nguồn khác', value: 26506.159, fill: '#64748b' },
    { name: 'KẾ HOẠCH VỐN GIAO TR...', value: 19657.37, fill: '#3b82f6' },
    { name: 'Phân theo nguồn vốn', value: 19657.37, fill: '#10b981' },
    { name: 'Phân theo cấp ngân sách', value: 19657.37, fill: '#f59e0b' },
    { name: 'Vốn đầu tư công tro...', value: 19280.306, fill: '#8b5cf6' },
    { name: 'Vốn đầu tư công tro...', value: 18227.036, fill: '#06b6d4' },
    { name: 'Vốn từ nguồn thu sử...', value: 17199.54, fill: '#ef4444' },
    { name: 'Cấp tỉnh quản lý', value: 14288.302, fill: '#84cc16' },
    { name: 'Vốn ngân sách tỉnh', value: 13911.238, fill: '#ec4899' }
  ];

  // Dữ liệu biểu đồ Radar "Tiến độ giải ngân theo nguồn" (Ảnh 2)
  const radarData = [
    { subject: 'Vốn ngân sách tỉnh', plan: 13911, actual: 13911 },
    { subject: 'Cấp tỉnh quản lý', plan: 14288, actual: 14288 },
    { subject: 'Vốn thu sử dụng đất', plan: 17200, actual: 17200 },
    { subject: 'Vốn ĐTC TTCP giao', plan: 22846, actual: 19280 },
    { subject: 'Vốn ĐTC cân đối ĐP', plan: 18478, actual: 18227 },
    { subject: 'KH vốn giao trong năm', plan: 41325, actual: 19657 },
    { subject: 'Nguồn khác', plan: 26506, actual: 1454 }
  ];

  // Dữ liệu So sánh kế hoạch và giải ngân theo nguồn (Ảnh 2)
  const comparisonData = [
    { name: 'Nguồn khác', plan: 26506, actual: 1454, rate: 5.5 },
    { name: 'KH vốn giao...', plan: 41325, actual: 19657, rate: 47.6 },
    { name: 'Phân nguồn...', plan: 41325, actual: 19657, rate: 47.6 },
    { name: 'Vốn ĐTC TT...', plan: 22846, actual: 19280, rate: 84.4 },
    { name: 'Vốn NS tỉnh', plan: 14288, actual: 13911, rate: 97.4 }
  ];

  const filteredFundTable = useMemo(() => {
    if (!searchTerm.trim()) return FUND_DETAIL_DATA;
    const q = searchTerm.toLowerCase();
    return FUND_DETAIL_DATA.filter(item => item.nguonVon.toLowerCase().includes(q));
  }, [searchTerm]);

  return (
    <div 
      className="ioc-screen-wrapper"
      style={{
        background: '#f8fafc',
        borderRadius: isFullscreen ? 0 : 12,
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        color: '#1e293b',
        fontFamily: "'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Tag color="#0284c7" style={{ borderRadius: 6, fontWeight: 700, padding: '3px 10px', fontSize: 12 }}>
            <GlobalOutlined /> IOC TỈNH HƯNG YÊN - GIẢI NGÂN VỐN ĐẦU TƯ CÔNG
          </Tag>
          <span style={{ fontSize: 13, color: '#475569' }}>
            Nguồn: <strong style={{ color: '#0f172a' }}>Hệ thống Kho bạc & Sở Tài chính</strong> • Kỳ: <strong style={{ color: '#0284c7' }}>Tháng 9/2026</strong>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#10b981', fontWeight: 600 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
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
            style={{ background: '#f1f5f9', fontWeight: 600 }}
          />

          <Tooltip title="Cấu hình URL Iframe">
            <button 
              onClick={() => setIsUrlModalOpen(true)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#475569'
              }}
            >
              <SettingOutlined />
            </button>
          </Tooltip>

          <Tooltip title={isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình IOC"}>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                border: '1px solid #0284c7',
                background: '#0284c7',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Main IOC Content Area */}
      {viewMode === 'IFRAME' ? (
        <div style={{ width: '100%', height: isFullscreen ? 'calc(100vh - 52px)' : 850, position: 'relative' }}>
          <iframe 
            src={iframeUrl}
            title="IOC Tỉnh Hưng Yên - Giải Ngân Đầu Tư Công"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '6px 14px',
            borderRadius: 6,
            fontSize: 12,
            color: '#475569',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            Đang nhúng link IOC: <span style={{ color: '#0284c7', fontWeight: 600 }}>{iframeUrl}</span>
          </div>
        </div>
      ) : (
        /* NATIVE VIEW - TÁI LẬP 100% GIAO DIỆN CHUẨN ẢNH 2 */
        <div style={{ padding: '16px 20px', background: '#f8fafc', minHeight: 700 }}>
          
          {/* Header Toolbar: Kỳ báo cáo & Bộ lọc */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 16
          }}>
            <p style={{ margin: 0, fontSize: 13.5, color: '#334155' }}>
              Kỳ báo cáo <strong>Tháng 9/2026</strong> — cập nhật <strong>10/09/2026</strong>
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Select
                value={selectedYear}
                onChange={setSelectedYear}
                style={{ width: 115 }}
                size="middle"
                options={[
                  { value: '2026', label: 'Năm 2026' },
                  { value: '2025', label: 'Năm 2025' }
                ]}
              />

              <Select
                value={selectedMonth}
                onChange={setSelectedMonth}
                style={{ width: 125 }}
                size="middle"
                options={[
                  { value: '9', label: 'Tháng 9' },
                  { value: '10', label: 'Tháng 10' },
                  { value: '8', label: 'Tháng 8' }
                ]}
              />
            </div>
          </div>

          {/* HÀNG 1: 5 THẺ KPI CHÍNH THEO ẢNH 2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: 14,
            marginBottom: 16
          }}>
            {/* THẺ 1: TỔNG KH VỐN TT GIAO */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 18px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #6366f1',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', marginBottom: 6 }}>
                | TỔNG KH VỐN TT GIAO
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: '#eef2ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6366f1',
                  fontSize: 18
                }}>
                  🏛️
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    43.452,6
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>tỷ đồng</div>
                </div>
              </div>
            </div>

            {/* THẺ 2: TỔNG KH VỐN TT+HĐND GIAO */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 18px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #2563eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', marginBottom: 6 }}>
                | TỔNG KH VỐN TT+HĐND GIAO
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: '#eff6ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563eb',
                  fontSize: 18
                }}>
                  📈
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    41.325,5
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>tỷ đồng</div>
                </div>
              </div>
            </div>

            {/* THẺ 3: TỔNG KH VỐN ĐỊA PHƯƠNG */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 18px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #0891b2',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#0891b2', textTransform: 'uppercase', marginBottom: 6 }}>
                | TỔNG KH VỐN ĐỊA PHƯƠNG
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: '#ecfeff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0891b2',
                  fontSize: 18
                }}>
                  🏠
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    56.113,9
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>tỷ đồng</div>
                </div>
              </div>
            </div>

            {/* THẺ 4: TỔNG GIẢI NGÂN LŨY KẾ */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 18px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #059669',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#059669', textTransform: 'uppercase', marginBottom: 6 }}>
                | TỔNG GIẢI NGÂN LŨY KẾ
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: '#ecfdf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669',
                  fontSize: 18
                }}>
                  💰
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    21.111,8
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>tỷ đồng</div>
                </div>
              </div>
            </div>

            {/* THẺ 5: TỶ LỆ GIẢI NGÂN TRUNG BÌNH */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 18px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #ea580c',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#ea580c', textTransform: 'uppercase', marginBottom: 6 }}>
                | TỶ LỆ GIẢI NGÂN TRUNG BÌNH
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: '#fff7ed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ea580c',
                  fontSize: 18
                }}>
                  %
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    51.1
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>%</div>
                </div>
              </div>
            </div>
          </div>

          {/* HÀNG 2: 2 BIỂU ĐỒ (TIẾN ĐỘ GIẢI NGÂN THEO NGUỒN & PHÂN BỐ GIẢI NGÂN THEO NGUỒN) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: 16,
            marginBottom: 16
          }}>
            {/* PANEL TRÁI: TIẾN ĐỘ GIẢI NGÂN THEO NGUỒN */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #2563eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#1e3a8a', letterSpacing: '0.03em', margin: 0, textTransform: 'uppercase' }}>
                  | TIẾN ĐỘ GIẢI NGÂN THEO NGUỒN
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11.5 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569' }}>
                    <span style={{ width: 10, height: 10, borderRadius: 2, background: '#93c5fd' }} />
                    Kế hoạch vốn TT+HĐND giao
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569' }}>
                    <span style={{ width: 10, height: 10, borderRadius: 2, background: '#10b981' }} />
                    Giải ngân lũy kế
                  </span>
                </div>
              </div>

              <div style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 10.5 }} />
                    <PolarRadiusAxis stroke="#cbd5e1" />
                    <Radar name="Kế hoạch vốn" dataKey="plan" stroke="#3b82f6" fill="#93c5fd" fillOpacity={0.45} />
                    <Radar name="Giải ngân lũy kế" dataKey="actual" stroke="#10b981" fill="#10b981" fillOpacity={0.65} />
                    <RechartsTooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* PANEL PHẢI: PHÂN BỐ GIẢI NGÂN THEO NGUỒN */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #2563eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#1e3a8a', letterSpacing: '0.03em', margin: '0 0 12px 0', textTransform: 'uppercase' }}>
                | PHÂN BỐ GIẢI NGÂN THEO NGUỒN
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {sourceDistributionData.map((item, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 2 }}>
                      <span style={{ color: '#334155', fontWeight: 600 }}>{item.name}</span>
                      <strong style={{ color: '#0f172a' }}>{item.value.toLocaleString('vi-VN')}</strong>
                    </div>
                    <div style={{ height: 8, borderRadius: 4, background: '#f1f5f9', overflow: 'hidden' }}>
                      <div style={{
                        width: `${Math.min(100, (item.value / 26506.159) * 100)}%`,
                        height: '100%',
                        background: item.fill,
                        borderRadius: 4
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HÀNG 3: SO SÁNH KẾ HOẠCH & GIẢI NGÂN + BẢNG CHI TIẾT NGUỒN VỐN */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: 16,
            marginBottom: 16
          }}>
            {/* PANEL TRÁI: SO SÁNH KẾ HOẠCH VÀ GIẢI NGÂN THEO NGUỒN */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #2563eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#1e3a8a', letterSpacing: '0.03em', margin: 0, textTransform: 'uppercase' }}>
                  | SO SÁNH KẾ HOẠCH VÀ GIẢI NGÂN THEO NGUỒN
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: '#3b82f6' }} />
                    Kế hoạch
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: '#10b981' }} />
                    Giải ngân
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#ea580c' }}>
                    ● Tỷ lệ (%)
                  </span>
                </div>
              </div>

              <div style={{ height: 230 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={comparisonData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 10.5 }} axisLine={{ stroke: '#cbd5e1' }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fill: '#64748b', fontSize: 10.5 }} axisLine={false} tickLine={false} tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fill: '#ea580c', fontSize: 10.5 }} axisLine={false} tickLine={false} tickFormatter={(val) => `${val}%`} />
                    <RechartsTooltip />
                    <Bar yAxisId="left" dataKey="plan" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={20} name="Kế hoạch vốn" />
                    <Bar yAxisId="left" dataKey="actual" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={20} name="Giải ngân" />
                    <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#ea580c" strokeWidth={2} dot={{ r: 4 }} name="Tỷ lệ (%)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* PANEL PHẢI: CHI TIẾT NGUỒN VỐN */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #2563eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '12px 18px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 10
              }}>
                <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#1e3a8a', letterSpacing: '0.03em', margin: 0, textTransform: 'uppercase' }}>
                  | CHI TIẾT NGUỒN VỐN
                </h3>

                <div style={{ width: 220 }}>
                  <Input
                    prefix={<SearchOutlined style={{ color: '#94a3b8' }} />}
                    placeholder="Tìm kiếm tiêu chí nguồn vốn..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    allowClear
                    size="small"
                    style={{ borderRadius: 6, fontSize: 12 }}
                  />
                </div>
              </div>

              <div style={{ maxHeight: 230, overflowY: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, textAlign: 'left' }}>
                  <thead style={{ position: 'sticky', top: 0, background: '#f8fafc', zIndex: 10, borderBottom: '2px solid #e2e8f0' }}>
                    <tr style={{ color: '#475569', fontWeight: 700 }}>
                      <th style={{ padding: '8px 12px', textAlign: 'center', width: 45 }}>STT</th>
                      <th style={{ padding: '8px 12px' }}>Nguồn vốn</th>
                      <th style={{ padding: '8px 12px', textAlign: 'right' }}>KH vốn TT+HĐND gi...</th>
                      <th style={{ padding: '8px 12px', textAlign: 'right' }}>Giải ngân lũy kế</th>
                      <th style={{ padding: '8px 12px', textAlign: 'right', width: 85 }}>Tỷ lệ (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFundTable.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: '1px solid #f1f5f9',
                          background: row.isHeader ? '#f8fafc' : idx % 2 === 0 ? '#ffffff' : '#fafafa',
                          fontWeight: row.isHeader ? 700 : 500,
                          cursor: 'pointer'
                        }}
                      >
                        <td style={{ padding: '7px 12px', textAlign: 'center', color: '#64748b' }}>{row.stt}</td>
                        <td style={{ padding: '7px 12px', color: row.isHeader ? '#0f172a' : '#334155' }}>{row.nguonVon}</td>
                        <td style={{ padding: '7px 12px', textAlign: 'right' }}>{row.khVon}</td>
                        <td style={{ padding: '7px 12px', textAlign: 'right', color: '#059669', fontWeight: 600 }}>{row.giaiNgan}</td>
                        <td style={{ padding: '7px 12px', textAlign: 'right', color: '#ea580c', fontWeight: 700 }}>{row.tyLe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cấu hình URL Iframe */}
      <Modal
        title="Cấu hình URL Iframe IOC Tỉnh Hưng Yên"
        open={isUrlModalOpen}
        onOk={() => {
          setIframeUrl(tempUrl);
          setIsUrlModalOpen(false);
        }}
        onCancel={() => {
          setTempUrl(iframeUrl);
          setIsUrlModalOpen(false);
        }}
        okText="Lưu liên kết"
        cancelText="Hủy"
      >
        <div style={{ marginBottom: 12, fontSize: 13, color: '#64748b' }}>
          Nhập URL cổng thông tin điều hành IOC Tỉnh Hưng Yên để nhúng trực tiếp qua Iframe:
        </div>
        <Input 
          value={tempUrl}
          onChange={(e) => setTempUrl(e.target.value)}
          placeholder="https://ioc.hungyen.gov.vn/embed/giai-ngan-dau-tu-cong"
        />
      </Modal>
    </div>
  );
};
