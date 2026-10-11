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
  iconBg = '#EFF6FF',
  iconColor = '#0b74e5',
  subText,
  trendText,
  trendColor = '#10b981',
  onClick,
  highlight = false
}) => {
  return (
    <div 
      className="kpi-card"
      onClick={onClick}
      style={{
        borderColor: highlight ? '#fca5a5' : '#e2e8f0',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 110,
        padding: '12px 14px'
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
        <div style={{ fontSize: 12.5, color: '#475569', fontWeight: 600, lineHeight: 1.25 }}>
          {title}
        </div>
      </div>

      {/* Value */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
        <div style={{ 
          fontSize: 26, 
          fontWeight: 800, 
          lineHeight: 1.1, 
          color: valueColor || '#0f172a',
          letterSpacing: '-0.02em'
        }}>
          {value}
        </div>
        {unit && <span style={{ fontSize: 12, fontWeight: 500, color: '#64748b' }}>{unit}</span>}
      </div>

      {/* Subtext and trend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#64748b' }}>
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
