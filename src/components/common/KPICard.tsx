import React from 'react';

interface KPICardProps {
  title: string;
  value: string | number;
  valueColor?: string;
  unit?: string;
  icon: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  subText?: string;
  trendText?: string;
  trendColor?: string;
  trend?: string;
  trendValue?: string;
  onClick?: () => void;
  highlight?: boolean;
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  valueColor,
  unit,
  icon,
  iconBg = '#E8F2FB',
  iconColor = '#1769AA',
  subText,
  trendText,
  trendColor = '#159A75',
  onClick,
  highlight = false
}) => {
  return (
    <div 
      className={`kpi-card ${onClick ? 'kpi-clickable' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      title={onClick ? `${title}: Nhấn để xem danh sách chi tiết` : title}
      style={{
        borderColor: highlight ? '#fecaca' : '#DCE5EF',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 112,
        padding: '12px 14px',
        borderRadius: 8,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.18s ease-in-out',
        boxShadow: highlight ? '0 1px 4px rgba(214, 69, 69, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.03)'
      }}
    >
      {/* Header: Icon on left + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <div 
          style={{ 
            width: 28, 
            height: 28, 
            borderRadius: 6, 
            backgroundColor: iconBg, 
            color: iconColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {icon}
        </div>
        <div style={{ fontSize: 13, color: '#1F2D3D', fontWeight: 600, lineHeight: 1.25 }}>
          {title}
        </div>
      </div>

      {/* Value (28-32px per prompt section 9) */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
        <div style={{ 
          fontSize: 28, 
          fontWeight: 700, 
          lineHeight: 1.1, 
          color: valueColor || '#1F2D3D',
          letterSpacing: '-0.02em'
        }}>
          {value}
        </div>
        {unit && <span style={{ fontSize: 12.5, fontWeight: 500, color: '#64748B' }}>{unit}</span>}
      </div>

      {/* Subtext and trend */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, fontSize: 11.5, color: '#64748B' }}>
        <span>{subText}</span>
        {trendText && (
          <span style={{ color: trendColor, fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>
            {trendText}
          </span>
        )}
      </div>
    </div>
  );
};
