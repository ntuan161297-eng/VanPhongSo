import React from 'react';
import { Button } from 'antd';
import { Clock, FileText, ArrowRight } from 'lucide-react';

interface ExecutiveBannerProps {
  title?: string;
  summary?: string;
  urgentNotice?: string;
  actionText?: string;
  onActionClick?: () => void;
  updateTime?: string;
  metrics?: Array<{ label: string; value: string | number; subValue?: string; color?: string }>;
}

export const ExecutiveBanner: React.FC<ExecutiveBannerProps> = ({
  title = "Tình hình thực hiện nhiệm vụ UBND tỉnh giao",
  summary = "Toàn tỉnh hiện có 124 nhiệm vụ được giao. Tỷ lệ hoàn thành đạt 29,8%. Hiện còn 28 nhiệm vụ quá hạn chưa hoàn thành, tập trung tại một số Sở, Ban, Ngành và đơn vị cần đôn đốc, chỉ đạo.",
  actionText = "Xem chi tiết",
  onActionClick,
  updateTime = "08:30 10/10/2026",
  metrics
}) => {
  // 4 metrics exactly matching screenshot: 124 | 37 (29,8%) | 28 | 12 (3-5 ngày)
  const displayMetrics = metrics || [
    { label: 'Tổng nhiệm vụ', value: '124', color: '#0b74e5' },
    { label: 'Đã hoàn thành', value: '37', subValue: '29,8%', color: '#10b981' },
    { label: 'Quá hạn chưa hoàn thành', value: '28', color: '#ef4444' },
    { label: 'Sắp đến hạn', value: '12', subValue: '(3-5 ngày)', color: '#f59e0b' }
  ];

  return (
    <div className="fresh-executive-banner" style={{
      background: 'linear-gradient(135deg, #eef6ff 0%, #f4f8fe 48%, #e8f2fc 100%)',
      border: '1px solid #cde1f7',
      borderRadius: 8,
      padding: '14px 20px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(11, 116, 229, 0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, position: 'relative', zIndex: 2 }}>
        {/* Left Side: Document Icon + Title + Summary + Button */}
        <div style={{ flex: 1.35, display: 'flex', gap: 14 }}>
          {/* Blue Document Icon Box */}
          <div style={{ 
            width: 44, 
            height: 44, 
            borderRadius: 8, 
            background: '#e0effe', 
            color: '#0b74e5', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <FileText size={24} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <h3 style={{ fontSize: 15.5, fontWeight: 700, margin: 0, color: '#0f172a' }}>
                {title}
              </h3>
              <span style={{ fontSize: 11.5, color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <Clock size={12} /> Cập nhật lúc {updateTime}
              </span>
            </div>

            <p style={{ fontSize: 12.5, color: '#475569', margin: '0 0 10px 0', lineHeight: 1.55, maxWidth: 620 }}>
              {summary}
            </p>

            <Button
              type="default"
              size="small"
              onClick={onActionClick}
              style={{
                borderRadius: 16,
                fontSize: 11.5,
                color: '#0b74e5',
                borderColor: '#93c5fd',
                background: '#ffffff',
                fontWeight: 600,
                padding: '2px 14px',
                height: 26,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4
              }}
            >
              {actionText} <ArrowRight size={12} />
            </Button>
          </div>
        </div>

        {/* Center: Hung Yen Historic Landmark Photo with Soft Feathered Edge Fade ("Hình ảnh mờ") */}
        <div style={{ 
          position: 'relative',
          width: 250, 
          height: 94, 
          flexShrink: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          margin: '0 10px'
        }}>
          <img 
            src="/assets/pho_hien_gate.jpg" 
            alt="Chùa Chuông / Văn Miếu Xích Đằng Phố Hiến"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              // Soft gradient mask fading smoothly into the card on both left and right edges
              maskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)',
              filter: 'contrast(1.08) brightness(1.02) saturate(0.96)',
              borderRadius: 6
            }}
          />
        </div>

        {/* Right Side: 4 Executive KPI Numbers - Căn chỉnh lưới chuẩn xác, thẳng hàng tuyệt đối */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${displayMetrics.length}, minmax(84px, auto))`, 
          gap: 18, 
          flexShrink: 0,
          alignItems: 'start'
        }}>
          {displayMetrics.map((m, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                minWidth: 84
              }}
            >
              {/* Dòng 1: Con số chính (Cùng một đường đáy ngang chuẩn xác) */}
              <div style={{ 
                height: 32, 
                display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent: 'center',
                fontSize: 27, 
                fontWeight: 800, 
                color: m.color || '#0f172a', 
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}>
                {m.value}
              </div>

              {/* Dòng 2: Nhãn mô tả (Khung chiều cao cố định 34px, chứa tối đa 2 dòng không bị đẩy lệch) */}
              <div style={{ 
                height: 34, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: 12, 
                fontWeight: 500,
                color: '#475569', 
                marginTop: 6,
                lineHeight: 1.25,
                textAlign: 'center'
              }}>
                {m.label}
              </div>

              {/* Dòng 3: Tỷ lệ % / Ghi chú phụ (Khung cố định 18px đảm bảo toàn bộ các cột có chiều cao bằng nhau) */}
              <div style={{ 
                height: 18, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: 11.5, 
                fontWeight: 700, 
                color: m.color || '#10b981', 
                marginTop: 2 
              }}>
                {m.subValue ? m.subValue : <span style={{ visibility: 'hidden' }}>-</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
