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
  Legend, 
  LineChart, 
  Line 
} from 'recharts';
import { Wallet, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BudgetService } from '../../services/dataService';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';

export const BudgetRevenuePage: React.FC = () => {
  const stats = BudgetService.getStats();
  const monthlyData = BudgetService.getMonthlyData();
  const revenueCats = BudgetService.getRevenueCategories();

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "KHOẢN THU,DỰ TOÁN (TỶ VNĐ),THỰC THU (TỶ VNĐ),TỶ LỆ ĐẠT (%)\n";
    revenueCats.forEach(r => {
      csv += `"${r.name}",${r.plan},${r.actual},${r.rate}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Chi_Tiet_Thu_Ngan_Sach_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('Đã xuất báo cáo chi tiết thu ngân sách ra CSV!');
  };

  const columns = [
    { title: 'Danh mục nguồn thu ngân sách', dataIndex: 'name', key: 'name', render: (t: string) => <strong style={{ color: '#0f172a', fontSize: 13 }}>{t}</strong> },
    { title: 'Dự toán giao (tỷ VNĐ)', dataIndex: 'plan', key: 'plan', align: 'right' as const, render: (v: number) => <span>{v.toLocaleString('vi-VN')} tỷ</span> },
    { title: 'Thực thu (tỷ VNĐ)', dataIndex: 'actual', key: 'actual', align: 'right' as const, render: (v: number) => <strong style={{ color: '#10b981' }}>{v.toLocaleString('vi-VN')} tỷ</strong> },
    { 
      title: 'Tỷ lệ thực hiện (%)', 
      dataIndex: 'rate', 
      key: 'rate', 
      width: 220,
      render: (v: number) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress percent={v} size="small" showInfo={false} strokeColor={v >= 100 ? '#10b981' : '#f59e0b'} style={{ flex: 1 }} />
          <span style={{ 
            fontSize: 12, 
            fontWeight: 700, 
            color: v >= 100 ? '#10b981' : '#f59e0b',
            width: 45,
            textAlign: 'right'
          }}>
            {v}%
          </span>
        </div>
      )
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
          Thống kê chi tiết thu ngân sách nhà nước
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
          Chi tiết thu nội địa, thu xuất nhập khẩu và thu tiền sử dụng đất trên địa bàn toàn tỉnh
        </p>
      </div>

      <FilterBar onExportCSV={handleExportCSV} />

      {/* Phố Hiến Executive Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner
          title="Tình hình thu ngân sách nhà nước tỉnh Hưng Yên"
          summary={`Tổng dự toán thu giao là ${stats.totalRevPlan} tỷ VNĐ. Thực hiện lũy kế đạt ${stats.totalRevActual} tỷ VNĐ (đạt ${stats.revRate}% dự toán HĐND tỉnh giao). Nguồn thu nội địa và thu tiền sử dụng đất tiếp tục duy trì mức tăng trưởng tích cực.`}
          actionText="Xuất danh mục thu"
          onActionClick={handleExportCSV}
          metrics={[
            { label: 'Dự toán thu', value: `${stats.totalRevPlan} tỷ`, color: '#0f172a' },
            { label: 'Thực thu', value: `${stats.totalRevActual} tỷ`, subValue: `${stats.revRate}%`, color: '#10b981' },
            { label: 'Tỷ lệ đạt', value: `${stats.revRate}%`, color: '#0b74e5' },
            { label: 'Tăng thu', value: '+1.970 tỷ', color: '#059669' }
          ]}
        />
      </div>

      {/* 4 KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 16 }}>
        <KPICard
          title="Dự toán thu ngân sách"
          value={stats.totalRevPlan}
          unit="tỷ"
          icon={<Wallet size={16} />}
          iconBg="#eff6ff"
          iconColor="#2563eb"
          subText="Dự toán HĐND giao"
        />
        <KPICard
          title="Thực thu lũy kế"
          value={stats.totalRevActual}
          unit="tỷ"
          icon={<ArrowUpRight size={16} />}
          iconBg="#f0fdf4"
          iconColor="#10b981"
          subText="Kho bạc Nhà nước ghi nhận"
          trendText="Vượt chỉ tiêu"
          trendColor="#10b981"
        />
        <KPICard
          title="Tỷ lệ đạt dự toán"
          value={`${stats.revRate}%`}
          icon={<TrendingUp size={16} />}
          iconBg="#f0fdf4"
          iconColor="#059669"
          subText="Vượt 6.5% kế hoạch năm"
          trendText="↑ +6.5%"
          trendColor="#10b981"
        />
        <KPICard
          title="Thu vượt dự toán"
          value={`+${(Number(stats.totalRevActual.replace(/\./g, '')) - Number(stats.totalRevPlan.replace(/\./g, ''))).toLocaleString('vi-VN')}`}
          unit="tỷ"
          icon={<CheckCircle2 size={16} />}
          iconBg="#ecfdf5"
          iconColor="#10b981"
          subText="Tăng thu ngân sách"
        />
      </div>

      {/* Charts */}
      <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={14}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">So sánh Dự toán & Thực thu theo nhóm nguồn</span>
              <span style={{ fontSize: 12, color: '#64748b' }}>Đơn vị tính: Tỷ VNĐ</span>
            </div>
            <div style={{ height: 230 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueCats} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <RechartsTooltip />
                  <Legend wrapperStyle={{ fontSize: 11.5 }} />
                  <Bar dataKey="plan" name="Dự toán" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="actual" name="Thực thu" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={10}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Xu hướng thu ngân sách 12 tháng</span>
              <Tag color="green" style={{ borderRadius: 10 }}>Năm 2026</Tag>
            </div>
            <div style={{ height: 230 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <RechartsTooltip />
                  <Line type="monotone" dataKey="revenueActual" name="Thực thu" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Table */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">Bảng tổng hợp các khoản thu ngân sách</span>
          <span style={{ fontSize: 12, color: '#0b74e5', fontWeight: 600 }}>{revenueCats.length} Khoản thu</span>
        </div>
        <Table dataSource={revenueCats} columns={columns} rowKey="name" pagination={false} size="middle" bordered />
      </div>
    </div>
  );
};
