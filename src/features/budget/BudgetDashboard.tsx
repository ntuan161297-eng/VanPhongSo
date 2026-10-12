import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Table, Progress, Tag, Alert, Button, message, Space } from 'antd';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  TrendingUp, 
  Database, 
  AlertTriangle,
  Scale,
  Layers,
  CircleDollarSign,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BudgetService } from '../../services/dataService';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';

export const BudgetDashboard: React.FC = () => {
  const navigate = useNavigate();
  const stats = BudgetService.getStats();
  const monthlyData = BudgetService.getMonthlyData();
  const revenueCats = BudgetService.getRevenueCategories();
  const expenseCats = BudgetService.getExpenseCategories();
  const [activeTabMode, setActiveTabMode] = useState<'OVERVIEW' | 'REVENUE' | 'EXPENSE'>('OVERVIEW');

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "THÁNG,DỰ TOÁN THU,THỰC THU,TỶ LỆ THU (%),DỰ TOÁN CHI,THỰC CHI,TỶ LỆ CHI (%),CHÊNH LỆCH THU CHI (TỶ VNĐ)\n";
    monthlyData.forEach(m => {
      csv += `"${m.month}",${m.revenuePlan},${m.revenueActual},${m.revenueRate},${m.expensePlan},${m.expenseActual},${m.expenseRate},${m.netDiff}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Thu_Chi_Ngan_Sach_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('Đã xuất báo cáo Thu - Chi ngân sách ra file CSV!');
  };

  const COLORS_REV = ['#0b74e5', '#0284c7', '#059669', '#10b981', '#f59e0b', '#8b5cf6'];
  const COLORS_EXP = ['#dc2626', '#ea580c', '#d97706', '#2563eb', '#059669', '#7c3aed', '#64748b'];

  const monthlyColumns = [
    { title: 'Kỳ ngân sách', dataIndex: 'month', key: 'month', render: (t: string) => <strong style={{ color: '#0f172a' }}>{t}</strong> },
    { title: 'Dự toán thu', dataIndex: 'revenuePlan', key: 'revenuePlan', align: 'right' as const, render: (v: number) => `${v.toLocaleString('vi-VN')} tỷ` },
    { title: 'Thực thu', dataIndex: 'revenueActual', key: 'revenueActual', align: 'right' as const, render: (v: number) => <strong style={{ color: '#10b981' }}>{v.toLocaleString('vi-VN')} tỷ</strong> },
    { 
      title: 'Tỷ lệ thu', 
      dataIndex: 'revenueRate', 
      key: 'revenueRate', 
      align: 'right' as const, 
      render: (v: number) => (
        <span style={{ 
          color: v >= 100 ? '#16a34a' : '#d97706', 
          fontWeight: 700, 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: 4 
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: v >= 100 ? '#16a34a' : '#f59e0b' }} />
          {v}%
        </span>
      ) 
    },
    { title: 'Dự toán chi', dataIndex: 'expensePlan', key: 'expensePlan', align: 'right' as const, render: (v: number) => `${v.toLocaleString('vi-VN')} tỷ` },
    { title: 'Thực chi', dataIndex: 'expenseActual', key: 'expenseActual', align: 'right' as const, render: (v: number) => <strong style={{ color: '#0284c7' }}>{v.toLocaleString('vi-VN')} tỷ</strong> },
    { 
      title: 'Tỷ lệ chi', 
      dataIndex: 'expenseRate', 
      key: 'expenseRate', 
      align: 'right' as const, 
      render: (v: number) => (
        <span style={{ color: '#0284c7', fontWeight: 600 }}>{v}%</span>
      ) 
    },
    { 
      title: 'Chênh lệch (Thu - Chi)*', 
      dataIndex: 'netDiff', 
      key: 'netDiff', 
      align: 'right' as const, 
      render: (v: number) => <span style={{ color: v >= 0 ? '#10b981' : '#ef4444', fontWeight: 700 }}>+{v.toLocaleString('vi-VN')} tỷ</span>
    }
  ];

  return (
    <div>
      {/* Title & IOC Source Status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Tổng quan thu chi ngân sách nhà nước
          </h1>
          <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
            Phân tích số liệu tài chính công và cân đối thu - chi ngân sách trên địa bàn tỉnh Hưng Yên
          </p>
        </div>

        {/* IOC Status Pill with Live Indicator & Quick Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ 
            background: '#ffffff', 
            border: '1px solid #bbf7d0', 
            padding: '6px 14px', 
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 12,
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
          }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', background: '#22c55e', opacity: 0.7, animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
              <Database size={16} color="#16a34a" />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#166534' }}>Tích hợp IOC Tỉnh Hưng Yên</div>
              <div style={{ color: '#15803d', fontSize: 11 }}>Nguồn: <strong>Tabmis & Sở Tài chính</strong></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar onExportCSV={handleExportCSV} />

      {/* Phố Hiến Executive Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner
          title="Tình hình thu - chi ngân sách tỉnh Hưng Yên"
          summary={`Tổng dự toán thu ngân sách nhà nước năm 2026 là ${stats.totalRevPlan} tỷ VNĐ. Thực hiện thu đạt ${stats.totalRevActual} tỷ VNĐ (đạt ${stats.revRate}% dự toán HĐND giao, tương ứng 54.840.065 triệu đồng theo Tabmis). Tổng chi ngân sách thực hiện là ${stats.totalExpActual} tỷ VNĐ (đạt ${stats.expRate}% dự toán), bảo đảm đáp ứng vốn chi đầu tư phát triển (39.659,254 tỷ VNĐ) và chi thường xuyên (24.630,119 tỷ VNĐ) phục vụ bộ máy.`}
          actionText="Xem cơ cấu các khoản thu"
          metrics={[
            { label: 'Dự toán thu', value: `${stats.totalRevPlan} tỷ`, color: '#0f172a' },
            { label: 'Thực thu', value: `${stats.totalRevActual} tỷ`, subValue: `${stats.revRate}%`, color: '#10b981' },
            { label: 'Dự toán chi', value: `${stats.totalExpPlan} tỷ`, color: '#0b74e5' },
            { label: 'Thực chi', value: `${stats.totalExpActual} tỷ`, subValue: `${stats.expRate}%`, color: '#0284c7' }
          ]}
        />
      </div>

      {/* 6 KPI Cards */}
      <div className="kpi-grid-6">
        <KPICard
          title="Dự toán thu ngân sách"
          value={stats.totalRevPlan}
          unit="tỷ"
          icon={<Wallet size={16} />}
          iconBg="#eff6ff"
          iconColor="#2563eb"
          subText="HĐND tỉnh giao"
        />
        <KPICard
          title="Thu ngân sách thực hiện"
          value={stats.totalRevActual}
          unit="tỷ"
          icon={<ArrowUpRight size={16} />}
          iconBg="#f0fdf4"
          iconColor="#10b981"
          subText="54.840.065 triệu (Tabmis)"
          trendText="↑ Vượt dự toán"
          trendColor="#10b981"
        />
        <KPICard
          title="Tỷ lệ thực hiện thu"
          value={`${stats.revRate}%`}
          icon={<TrendingUp size={16} />}
          iconBg="#f0fdf4"
          iconColor="#059669"
          subText="So dự toán HĐND giao"
          trendText="↑ Tăng trưởng tốt"
          trendColor="#10b981"
        />
        <KPICard
          title="Dự toán chi ngân sách"
          value={stats.totalExpPlan}
          unit="tỷ"
          icon={<Wallet size={16} />}
          iconBg="#fdf2f8"
          iconColor="#db2777"
          subText="Phân bổ đầu năm"
        />
        <KPICard
          title="Chi ngân sách thực hiện"
          value={stats.totalExpActual}
          unit="tỷ"
          icon={<ArrowDownRight size={16} />}
          iconBg="#eff6ff"
          iconColor="#0284c7"
          subText={`Đạt ${stats.expRate}% dự toán`}
        />
        <KPICard
          title="Chênh lệch Thu - Chi*"
          value={`${stats.netDiff}`}
          unit="tỷ"
          icon={<Scale size={16} />}
          iconBg="#ecfdf5"
          iconColor="#0284c7"
          subText="*Dòng tiền điều hành Tabmis"
          trendText="Kỳ báo cáo 12/10"
          trendColor="#0284c7"
        />
      </div>

      <div style={{ marginBottom: 14 }}>
        <Alert
          message="Lưu ý kỹ thuật về số liệu ngân sách:"
          description="Chỉ tiêu chênh lệch thu – chi trên dashboard là phép so sánh kỹ thuật hỗ trợ lãnh đạo theo dõi dòng tiền điều hành, không đồng nhất chỉ tiêu này với kết dư ngân sách chính thức theo Luật Ngân sách nhà nước."
          type="info"
          showIcon
          style={{ borderRadius: 8, border: '1px solid #bfdbfe', background: '#eff6ff' }}
        />
      </div>

      {/* Row 1: Charts: Xu hướng Thu Chi kết hợp & Cơ cấu nguồn thu */}
      <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={16}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Xu hướng thu - chi ngân sách theo tháng</span>
              <span style={{ fontSize: 12, color: '#64748b' }}>Đơn vị tính: Tỷ VNĐ</span>
            </div>
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={monthlyData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <RechartsTooltip />
                  <Legend wrapperStyle={{ fontSize: 11.5 }} />
                  <Bar dataKey="revenueActual" name="Thu thực hiện" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenseActual" name="Chi thực hiện" fill="#0b74e5" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="revenuePlan" name="Dự toán thu" stroke="#059669" strokeDasharray="4 4" strokeWidth={2} />
                  <Line type="monotone" dataKey="expensePlan" name="Dự toán chi" stroke="#0284c7" strokeDasharray="4 4" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>

        {/* Cơ cấu nguồn thu Donut */}
        <Col xs={24} lg={8}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Cơ cấu các khoản thu chính</span>
              <Tag color="green" style={{ borderRadius: 10 }}>Tổng 36,170 tỷ</Tag>
            </div>
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueCats}
                    cx="50%"
                    cy="45%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="actual"
                  >
                    {revenueCats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_REV[index % COLORS_REV.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    iconSize={8}
                    wrapperStyle={{ fontSize: 10.5, paddingTop: 4 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Row 2: Bảng chi tiết Thu Chi 12 tháng */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">Bảng cân đối thu - chi ngân sách theo tháng</span>
          <span style={{ fontSize: 12, color: '#0b74e5', fontWeight: 600 }}>Dữ liệu tài chính công tỉnh Hưng Yên</span>
        </div>

        <Table
          dataSource={monthlyData}
          columns={monthlyColumns}
          rowKey="month"
          pagination={false}
          size="middle"
          bordered
          scroll={{ x: 900 }}
        />
      </div>
    </div>
  );
};
