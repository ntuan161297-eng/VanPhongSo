import React from 'react';
import { Row, Col, Table, Progress, Tag, Button, message } from 'antd';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend 
} from 'recharts';
import { DollarSign, TrendingUp, AlertCircle, CheckCircle2, Layers } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DisbursementService } from '../../services/dataService';
import { CapitalType, DisbursementItem } from '../../types';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';

interface DisbursementCapitalPageProps {
  capitalType: CapitalType;
  title: string;
  subtitle: string;
}

export const DisbursementCapitalPage: React.FC<DisbursementCapitalPageProps> = ({
  capitalType,
  title,
  subtitle
}) => {
  const { filters } = useApp();
  const records = DisbursementService.getAll(capitalType);
  const stats = DisbursementService.getStats(records);

  const chartData = records.map(r => ({
    name: r.deptName.replace('Sở ', '').replace('UBND ', '').slice(0, 15),
    plan: r.planAmount,
    actual: r.disbursedAmount
  }));

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "STT,ĐƠN VỊ,KẾ HOẠCH (TỶ VNĐ),ĐÃ GIẢI NGÂN (TỶ VNĐ),TỶ LỆ (%),CÒN LẠI (TỶ VNĐ),KỲ BÁO CÁO,TRẠNG THÁI\n";
    records.forEach((r, idx) => {
      csv += `${idx + 1},"${r.deptName}",${r.planAmount},${r.disbursedAmount},${r.rate},${r.remainingAmount},"${r.period}",${r.status}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `${title.replace(/\s+/g, '_')}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất dữ liệu ${title} ra file CSV!`);
  };

  const columns = [
    {
      title: 'STT',
      key: 'stt',
      width: 50,
      align: 'center' as const,
      render: (_: any, __: any, index: number) => index + 1
    },
    {
      title: 'Đơn vị thực hiện',
      dataIndex: 'deptName',
      key: 'deptName',
      render: (t: string) => <strong style={{ color: '#0f172a', fontSize: 13 }}>{t}</strong>
    },
    {
      title: 'Kế hoạch vốn',
      dataIndex: 'planAmount',
      key: 'planAmount',
      width: 140,
      align: 'right' as const,
      sorter: (a: DisbursementItem, b: DisbursementItem) => a.planAmount - b.planAmount,
      render: (v: number) => <span>{v.toLocaleString('vi-VN')} tỷ</span>
    },
    {
      title: 'Vốn đã giải ngân',
      dataIndex: 'disbursedAmount',
      key: 'disbursedAmount',
      width: 140,
      align: 'right' as const,
      sorter: (a: DisbursementItem, b: DisbursementItem) => a.disbursedAmount - b.disbursedAmount,
      render: (v: number) => <strong style={{ color: '#10b981' }}>{v.toLocaleString('vi-VN')} tỷ</strong>
    },
    {
      title: 'Tỷ lệ giải ngân',
      dataIndex: 'rate',
      key: 'rate',
      width: 150,
      sorter: (a: DisbursementItem, b: DisbursementItem) => a.rate - b.rate,
      render: (v: number) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress 
            percent={v} 
            size="small" 
            showInfo={false} 
            strokeColor={v < 60 ? '#ef4444' : v < 75 ? '#f59e0b' : '#10b981'} 
            style={{ flex: 1 }}
          />
          <span style={{ 
            fontSize: 12, 
            fontWeight: 700, 
            color: v < 60 ? '#ef4444' : v < 75 ? '#f59e0b' : '#10b981',
            width: 42,
            textAlign: 'right'
          }}>
            {v}%
          </span>
        </div>
      )
    },
    {
      title: 'Vốn còn lại',
      dataIndex: 'remainingAmount',
      key: 'remainingAmount',
      width: 130,
      align: 'right' as const,
      render: (v: number) => <span style={{ color: '#ef4444', fontWeight: 600 }}>{v.toLocaleString('vi-VN')} tỷ</span>
    },
    {
      title: 'Kỳ báo cáo',
      dataIndex: 'period',
      key: 'period',
      width: 110,
      render: (t: string) => <span style={{ fontSize: 12, color: '#64748b' }}>{t}</span>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 130,
      render: (s: string) => {
        if (s === 'DAT_MUC_TIEU') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#16a34a', fontSize: 12.5, fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }} /> Đạt mục tiêu
            </span>
          );
        }
        if (s === 'TRUNG_BINH') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#ea580c', fontSize: 12.5, fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ea580c' }} /> Trung bình
            </span>
          );
        }
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#dc2626', fontSize: 12.5, fontWeight: 600 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#dc2626' }} /> Tỷ lệ thấp
          </span>
        );
      }
    }
  ];

  return (
    <div>
      {/* Title */}
      <div style={{ marginBottom: 12 }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
          {title}
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
          {subtitle}
        </p>
      </div>

      {/* Filter Bar */}
      <FilterBar onExportCSV={handleExportCSV} />

      {/* Phố Hiến Executive Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner
          title={`Tiến độ nguồn vốn: ${title}`}
          summary={`Tổng kế hoạch vốn được giao là ${stats.totalPlan} tỷ VNĐ. Toàn nhóm đã giải ngân ${stats.totalDisbursed} tỷ VNĐ (tương đương ${stats.avgRate}%). Các đơn vị đang đẩy nhanh tiến độ hoàn thiện hồ sơ nghiệm thu thanh toán trước ngày 31/12.`}
          actionText="Xuất danh sách"
          onActionClick={handleExportCSV}
          metrics={[
            { label: 'Kế hoạch vốn', value: `${stats.totalPlan} tỷ`, color: '#0f172a' },
            { label: 'Đã giải ngân', value: `${stats.totalDisbursed} tỷ`, subValue: `${stats.avgRate}%`, color: '#10b981' },
            { label: 'Còn lại', value: `${stats.remaining} tỷ`, color: '#ef4444' },
            { label: 'Đạt mục tiêu', value: stats.metTargetCount, subValue: 'Trên 75%', color: '#0b74e5' }
          ]}
        />
      </div>

      {/* KPI Row (4 Cards) */}
      <div className="kpi-grid-4">
        <KPICard
          title="Kế hoạch vốn nhóm"
          value={stats.totalPlan}
          unit="tỷ"
          icon={<DollarSign size={16} />}
          iconBg="#eff6ff"
          iconColor="#2563eb"
          subText="Tổng phân bổ chi"
        />
        <KPICard
          title="Đã giải ngân"
          value={stats.totalDisbursed}
          unit="tỷ"
          icon={<TrendingUp size={16} />}
          iconBg="#f0fdf4"
          iconColor="#10b981"
          subText="Khối lượng đã chi"
        />
        <KPICard
          title="Tỷ lệ giải ngân nhóm"
          value={`${stats.avgRate}%`}
          icon={<TrendingUp size={16} />}
          iconBg="#f0f9ff"
          iconColor="#0284c7"
          subText="Bình quân danh mục"
          trendText="Theo kế hoạch"
          trendColor="#10b981"
        />
        <KPICard
          title="Số vốn còn lại"
          value={stats.remaining}
          unit="tỷ"
          icon={<AlertCircle size={16} />}
          iconBg="#fff7ed"
          iconColor="#ea580c"
          subText="Cần giải ngân trước 31/12"
        />
      </div>

      {/* Chart: Bar Comparison */}
      <div className="gov-card" style={{ marginBottom: 16 }}>
        <div className="gov-card-header">
          <span className="gov-card-title">So sánh kế hoạch và thực hiện theo từng đơn vị</span>
          <span style={{ fontSize: 12, color: '#64748b' }}>Đơn vị tính: Tỷ VNĐ</span>
        </div>
        <div style={{ height: 230 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <RechartsTooltip />
              <Legend wrapperStyle={{ fontSize: 11.5 }} />
              <Bar dataKey="plan" name="Kế hoạch vốn" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="actual" name="Đã giải ngân" fill="#0b74e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detail Table */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">Bảng chi tiết tình hình giải ngân</span>
          <span style={{ fontSize: 12, color: '#0b74e5', fontWeight: 600 }}>{records.length} Đơn vị</span>
        </div>

        <Table
          dataSource={records}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 8, showSizeChanger: true }}
          size="middle"
          bordered
          scroll={{ x: 1000 }}
        />
      </div>
    </div>
  );
};
