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
import { Wallet, ArrowDownRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { BudgetService } from '../../services/dataService';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';

export const BudgetExpensePage: React.FC = () => {
  const stats = BudgetService.getStats();
  const monthlyData = BudgetService.getMonthlyData();
  const expenseCats = BudgetService.getExpenseCategories();

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "KHOẢN CHI,DỰ TOÁN (TỶ VNĐ),THỰC CHI (TỶ VNĐ),TỶ LỆ ĐẠT (%)\n";
    expenseCats.forEach(r => {
      csv += `"${r.name}",${r.plan},${r.actual},${r.rate}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Chi_Tiet_Chi_Ngan_Sach_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('Đã xuất báo cáo chi tiết chi ngân sách ra CSV!');
  };

  const columns = [
    { title: 'Lĩnh vực chi ngân sách', dataIndex: 'name', key: 'name', render: (t: string) => <strong style={{ color: '#0f172a', fontSize: 13 }}>{t}</strong> },
    { title: 'Dự toán chi (tỷ VNĐ)', dataIndex: 'plan', key: 'plan', align: 'right' as const, render: (v: number) => <span>{v.toLocaleString('vi-VN')} tỷ</span> },
    { title: 'Thực chi (tỷ VNĐ)', dataIndex: 'actual', key: 'actual', align: 'right' as const, render: (v: number) => <strong style={{ color: '#0b74e5' }}>{v.toLocaleString('vi-VN')} tỷ</strong> },
    { 
      title: 'Tỷ lệ giải ngân chi (%)', 
      dataIndex: 'rate', 
      key: 'rate', 
      width: 220,
      render: (v: number) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress percent={v} size="small" showInfo={false} strokeColor="#0b74e5" style={{ flex: 1 }} />
          <span style={{ 
            fontSize: 12, 
            fontWeight: 700, 
            color: '#0b74e5',
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
          Thống kê chi tiết chi ngân sách nhà nước
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
          Chi đầu tư phát triển kết cấu hạ tầng và chi thường xuyên các hoạt động sự nghiệp tỉnh
        </p>
      </div>

      <FilterBar onExportCSV={handleExportCSV} />

      {/* Phố Hiến Executive Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner
          title="Tình hình chi ngân sách nhà nước tỉnh Hưng Yên"
          summary={`Tổng dự toán chi ngân sách được duyệt là ${stats.totalExpPlan} tỷ VNĐ. Tổng chi thực hiện đạt ${stats.totalExpActual} tỷ VNĐ (tương đương ${stats.expRate}%). Ngân sách đảm bảo đáp ứng đầy đủ nguồn lực cho chi đầu tư phát triển, an sinh xã hội và vận hành chính quyền 2 cấp.`}
          actionText="Xuất danh mục chi"
          onActionClick={handleExportCSV}
          metrics={[
            { label: 'Dự toán chi', value: `${stats.totalExpPlan} tỷ`, color: '#0f172a' },
            { label: 'Thực chi', value: `${stats.totalExpActual} tỷ`, subValue: `${stats.expRate}%`, color: '#0b74e5' },
            { label: 'Tỷ lệ giải ngân', value: `${stats.expRate}%`, color: '#10b981' },
            { label: 'Cân đối chi', value: 'Bảo đảm', color: '#059669' }
          ]}
        />
      </div>

      {/* 4 KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 16 }}>
        <KPICard
          title="Dự toán chi ngân sách"
          value={stats.totalExpPlan}
          unit="tỷ"
          icon={<Wallet size={16} />}
          iconBg="#eff6ff"
          iconColor="#2563eb"
          subText="Dự toán được duyệt"
        />
        <KPICard
          title="Thực chi ngân sách"
          value={stats.totalExpActual}
          unit="tỷ"
          icon={<ArrowDownRight size={16} />}
          iconBg="#f0f9ff"
          iconColor="#0284c7"
          subText="Khối lượng đã thanh toán"
        />
        <KPICard
          title="Tỷ lệ giải ngân chi"
          value={`${stats.expRate}%`}
          icon={<TrendingUp size={16} />}
          iconBg="#eff6ff"
          iconColor="#0369a1"
          subText="Kiểm soát chi chặt chẽ"
        />
        <KPICard
          title="Cân đối chi phát triển"
          value="12.540 tỷ"
          icon={<CheckCircle2 size={16} />}
          iconBg="#ecfdf5"
          iconColor="#10b981"
          subText="Chi đầu tư xây dựng cơ bản"
        />
      </div>

      {/* Charts */}
      <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={14}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">So sánh Dự toán & Thực chi theo các lĩnh vực</span>
              <span style={{ fontSize: 12, color: '#64748b' }}>Đơn vị: Tỷ VNĐ</span>
            </div>
            <div style={{ height: 230 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseCats} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <RechartsTooltip />
                  <Legend wrapperStyle={{ fontSize: 11.5 }} />
                  <Bar dataKey="plan" name="Dự toán chi" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="actual" name="Thực chi" fill="#0b74e5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={10}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Xu hướng chi ngân sách 12 tháng</span>
              <Tag color="blue" style={{ borderRadius: 10 }}>Năm 2026</Tag>
            </div>
            <div style={{ height: 230 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <RechartsTooltip />
                  <Line type="monotone" dataKey="expenseActual" name="Thực chi" stroke="#0b74e5" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Table */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">Bảng tổng hợp các khoản chi ngân sách</span>
          <span style={{ fontSize: 12, color: '#0b74e5', fontWeight: 600 }}>{expenseCats.length} Lĩnh vực chi</span>
        </div>
        <Table dataSource={expenseCats} columns={columns} rowKey="name" pagination={false} size="middle" bordered />
      </div>
    </div>
  );
};
