import React, { useState } from 'react';
import { Row, Col, Table, Progress, Tag, Button, Space, message, Segmented } from 'antd';
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
  Line, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { 
  DollarSign, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Building2, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DisbursementService } from '../../services/dataService';
import { DisbursementItem } from '../../types';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';
import { IOCDisbursementFrame } from '../../components/ioc/IOCDisbursementFrame';

export const DisbursementDashboard: React.FC = () => {
  const { filters } = useApp();
  const [activeLayout, setActiveLayout] = useState<'BOTH' | 'IOC_ONLY' | 'DASHBOARD_ONLY'>('BOTH');
  const allRecords = DisbursementService.getAll();
  const stats = DisbursementService.getStats(allRecords);
  const monthlyTrends = DisbursementService.getMonthlyTrends();
  const [activeTabMode, setActiveTabMode] = useState<'OVERVIEW' | 'DEPT_ANALYSIS' | 'LOW_RATE'>('OVERVIEW');

  // Low disbursement rate ranking (Bottom 5 departments)
  const lowestRateDepts = [...allRecords]
    .filter(r => r.capitalType === 'VON_DAU_TU')
    .sort((a, b) => a.rate - b.rate)
    .slice(0, 5)
    .map(r => ({
      name: r.deptName.replace('UBND ', '').replace('Sở ', ''),
      rate: r.rate,
      remaining: r.remainingAmount
    }));

  // Phân theo nguồn vốn theo đúng IOC Đầu tư công (Ảnh 3)
  const capitalCategoryData = [
    { name: 'Ngân sách địa phương', value: 25865, color: '#ec4899' },
    { name: 'Cấp tỉnh quản lý', value: 19546, color: '#84cc16' },
    { name: 'Vốn kéo dài 2025 sang 2026', value: 1328, color: '#06b6d4' },
    { name: 'Ngân sách Trung ương', value: 468, color: '#e11d48' },
    { name: 'Cấp xã quản lý', value: 38, color: '#22c55e' }
  ];

  // So sánh Kế hoạch & Thực giải ngân theo cấp/nguồn (Đơn vị: Tỷ VNĐ)
  const comparisonData = [
    { name: 'Vốn giao trong năm', plan: 49429.5, actual: 26332.5 },
    { name: 'NS địa phương', plan: 48899.8, actual: 25864.9 },
    { name: 'Cấp tỉnh quản lý', plan: 30793.2, actual: 19545.6 },
    { name: 'Vốn kéo dài 2025-2026', plan: 8406.7, actual: 1327.5 },
    { name: 'NS trung ương', plan: 529.7, actual: 467.6 },
    { name: 'Cấp xã quản lý', plan: 41.2, actual: 37.5 }
  ];

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "STT,ĐƠN VỊ,LOẠI VỐN,KẾ HOẠCH (TỶ VNĐ),ĐÃ GIẢI NGÂN (TỶ VNĐ),TỶ LỆ (%),CÒN LẠI (TỶ VNĐ),TRẠNG THÁI\n";
    allRecords.forEach((r, idx) => {
      csv += `${idx + 1},"${r.deptName}",${r.capitalType},${r.planAmount},${r.disbursedAmount},${r.rate},${r.remainingAmount},${r.status}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Giai_Ngan_DTC_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('Đã xuất báo cáo giải ngân vốn đầu tư công ra file CSV!');
  };

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 50,
      align: 'center' as const,
      render: (_: any, __: any, index: number) => index + 1
    },
    {
      title: 'Đơn vị / Chủ đầu tư',
      dataIndex: 'deptName',
      key: 'deptName',
      render: (t: string) => <strong style={{ color: '#0f172a', fontSize: 13 }}>{t}</strong>
    },
    {
      title: 'Nhóm vốn',
      dataIndex: 'capitalType',
      key: 'capitalType',
      width: 140,
      render: (t: string) => {
        if (t === 'VON_DAU_TU') return <Tag color="blue" style={{ borderRadius: 10 }}>Vốn đầu tư</Tag>;
        if (t === 'VON_SU_NGHIEP') return <Tag color="green" style={{ borderRadius: 10 }}>Vốn sự nghiệp</Tag>;
        return <Tag color="purple" style={{ borderRadius: 10 }}>CNTT & CĐS</Tag>;
      }
    },
    {
      title: 'Kế hoạch vốn',
      dataIndex: 'planAmount',
      key: 'planAmount',
      width: 130,
      align: 'right' as const,
      sorter: (a: DisbursementItem, b: DisbursementItem) => a.planAmount - b.planAmount,
      render: (v: number) => <span>{v.toLocaleString('vi-VN')} tỷ</span>
    },
    {
      title: 'Đã giải ngân',
      dataIndex: 'disbursedAmount',
      key: 'disbursedAmount',
      width: 130,
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
      render: (v: number, r: DisbursementItem) => (
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
      title: 'Số vốn còn lại',
      dataIndex: 'remainingAmount',
      key: 'remainingAmount',
      width: 130,
      align: 'right' as const,
      render: (v: number) => <span style={{ color: '#ef4444', fontWeight: 600 }}>{v.toLocaleString('vi-VN')} tỷ</span>
    },
    {
      title: 'Đánh giá',
      dataIndex: 'status',
      key: 'status',
      width: 140,
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
      {/* Page Title Bar & Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Kế hoạch giải ngân vốn đầu tư công
          </h1>
          <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
            Nguồn dữ liệu: Sở Tài chính & Trung tâm Điều hành Thông minh (IOC) tỉnh Hưng Yên
          </p>
        </div>

        {/* Layout Switcher */}
        <div>
          <Segmented
            value={activeLayout}
            onChange={(val) => setActiveLayout(val as any)}
            options={[
              { value: 'BOTH', label: '📑 Hiển thị đầy đủ (IOC & Phân tích)' },
              { value: 'IOC_ONLY', label: '🖥️ Màn hình IOC Tỉnh' },
              { value: 'DASHBOARD_ONLY', label: '📊 Báo cáo phân tích' }
            ]}
            style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: 2, borderRadius: 8, fontWeight: 600 }}
          />
        </div>
      </div>

      {/* KHUNG GIAO DIỆN CHUẨN IOC TỈNH HƯNG YÊN (ẢNH 3 & IFRAME SỞ TÀI CHÍNH) */}
      {(activeLayout === 'BOTH' || activeLayout === 'IOC_ONLY') && (
        <IOCDisbursementFrame />
      )}

      {/* BỐ CỤC DASHBOARD BÁO CÁO PHÂN TÍCH HIỆN CÓ */}
      {(activeLayout === 'BOTH' || activeLayout === 'DASHBOARD_ONLY') && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#1e293b' }}>
              📊 Dashboard phân tích tiến độ & chi tiết theo ngành
            </div>
            {/* Action Button Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Button
                type={activeTabMode === 'OVERVIEW' ? 'primary' : 'default'}
                icon={<Layers size={14} />}
                onClick={() => setActiveTabMode('OVERVIEW')}
                style={activeTabMode === 'OVERVIEW' ? { background: '#0b74e5', borderColor: '#0b74e5', fontWeight: 600 } : {}}
              >
                Tổng quan & Tiến độ
              </Button>

              <Button
                type={activeTabMode === 'DEPT_ANALYSIS' ? 'primary' : 'default'}
                icon={<Building2 size={14} />}
                onClick={() => setActiveTabMode('DEPT_ANALYSIS')}
                style={activeTabMode === 'DEPT_ANALYSIS' ? { background: '#0b74e5', borderColor: '#0b74e5', fontWeight: 600 } : {}}
              >
                Phân tích theo ngành
              </Button>

              <Button
                type={activeTabMode === 'LOW_RATE' ? 'primary' : 'default'}
                icon={<AlertCircle size={14} color={activeTabMode === 'LOW_RATE' ? '#ffffff' : '#ef4444'} />}
                onClick={() => setActiveTabMode('LOW_RATE')}
                style={activeTabMode === 'LOW_RATE' ? { background: '#ef4444', borderColor: '#ef4444', fontWeight: 600 } : { color: '#ef4444', borderColor: '#fca5a5' }}
              >
                Đơn vị giải ngân thấp ({stats.lowDeptsCount})
              </Button>
            </div>
          </div>

          {/* Filter Bar */}
          <FilterBar onExportCSV={handleExportCSV} />

      {/* Phố Hiến Executive Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner
          title="Tình hình giải ngân kế hoạch vốn đầu tư công tỉnh Hưng Yên"
          summary={`Kế hoạch vốn ĐTC Thủ tướng Chính phủ và HĐND tỉnh giao là ${stats.totalPlan} tỷ VNĐ (Kế hoạch địa phương giao: ${stats.localPlan} tỷ VNĐ). Lũy kế toàn tỉnh đã giải ngân đạt ${stats.totalDisbursed} tỷ VNĐ, đạt tỷ lệ ${stats.avgRate}% kế hoạch vốn TTg & HĐND giao (tương ứng 28.446.835 triệu đồng theo Sở Tài chính). Số vốn còn lại cần giải ngân là ${stats.remaining} tỷ VNĐ. Lãnh đạo Văn phòng UBND tỉnh đôn đốc các chủ đầu tư, địa phương tập trung tháo gỡ khó khăn và đẩy nhanh nghiệm thu thanh toán.`}
          actionText="Đôn đốc đơn vị chậm"
          onActionClick={() => setActiveTabMode('LOW_RATE')}
          metrics={[
            { label: 'KH TTg & HĐND', value: `${stats.totalPlan} tỷ`, color: '#0f172a' },
            { label: 'KH Địa phương', value: `${stats.localPlan} tỷ`, color: '#db2777' },
            { label: 'Đã giải ngân', value: `${stats.totalDisbursed} tỷ`, subValue: `${stats.avgRate}%`, color: '#10b981' },
            { label: 'Còn lại', value: `${stats.remaining} tỷ`, color: '#ef4444' }
          ]}
        />
      </div>

      {/* 6 KPI Cards Row */}
      <div className="kpi-grid-6">
        <KPICard
          title="KH TTg & HĐND giao"
          value={stats.totalPlan}
          unit="tỷ"
          icon={<DollarSign size={16} />}
          iconBg="#eff6ff"
          iconColor="#2563eb"
          subText="41.325.480 triệu đồng"
        />
        <KPICard
          title="KH địa phương giao"
          value={stats.localPlan}
          unit="tỷ"
          icon={<DollarSign size={16} />}
          iconBg="#fdf2f8"
          iconColor="#db2777"
          subText="56.385.647 triệu đồng"
        />
        <KPICard
          title="Tổng vốn đã giải ngân"
          value={stats.totalDisbursed}
          unit="tỷ"
          icon={<TrendingUp size={16} />}
          iconBg="#f0fdf4"
          iconColor="#10b981"
          subText="28.446.835 triệu (Kho bạc)"
        />
        <KPICard
          title="Tỷ lệ giải ngân"
          value={`${stats.avgRate}%`}
          icon={<TrendingUp size={16} />}
          iconBg="#eff6ff"
          iconColor="#0284c7"
          subText="So KH TTg & HĐND giao"
          trendText="Chuẩn số liệu IOC"
          trendColor="#10b981"
        />
        <KPICard
          title="Số vốn còn lại"
          value={stats.remaining}
          unit="tỷ"
          icon={<DollarSign size={16} />}
          iconBg="#fff7ed"
          iconColor="#ea580c"
          subText="12.878.645 triệu đồng"
          trendText="Áp lực QIV"
          trendColor="#ea580c"
        />
        <KPICard
          title="Vốn kéo dài từ 2025"
          value="8.406,718"
          unit="tỷ"
          icon={<Calendar size={16} />}
          iconBg="#f5f3ff"
          iconColor="#7c3aed"
          subText="Đã GN 1.327,5 tỷ (15.8%)"
          trendText="Nguồn 2025"
          trendColor="#7c3aed"
        />
      </div>

      {/* Charts Row: Monthly Trend Line & Plan vs Actual Bar */}
      <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
        {/* Monthly Trend */}
        <Col xs={24} lg={14}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Tiến độ giải ngân lũy kế theo tháng</span>
              <span style={{ fontSize: 12, color: '#64748b' }}>Đơn vị tính: Tỷ VNĐ</span>
            </div>
            <div style={{ height: 230 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrends} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <RechartsTooltip />
                  <Legend wrapperStyle={{ fontSize: 11.5 }} />
                  <Line type="monotone" dataKey="targetPlan" name="Mục tiêu kế hoạch" stroke="#94a3b8" strokeDasharray="5 5" strokeWidth={2} />
                  <Line type="monotone" dataKey="actualAccum" name="Thực hiện lũy kế" stroke="#0b74e5" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>

        {/* Top low rate units - Alert */}
        <Col xs={24} lg={10}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title" style={{ color: '#dc2626' }}>Top đơn vị có tỷ lệ giải ngân thấp</span>
              <Tag color="error">Cần chỉ đạo</Tag>
            </div>
            <div style={{ height: 230 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={lowestRateDepts} layout="vertical" margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" unit="%" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 11.5 }} />
                  <RechartsTooltip />
                  <Bar dataKey="rate" name="Tỷ lệ giải ngân (%)" fill="#ef4444" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Row 2: So sánh kế hoạch theo ngành & Cơ cấu nhóm vốn */}
      <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={14}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">So sánh kế hoạch vốn và thực tế giải ngân theo ngành</span>
              <span style={{ fontSize: 12, color: '#64748b' }}>Đơn vị tính: Tỷ VNĐ</span>
            </div>
            <div style={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 11.5 }} />
                  <YAxis tick={{ fontSize: 11.5 }} />
                  <RechartsTooltip />
                  <Legend wrapperStyle={{ fontSize: 11.5 }} />
                  <Bar dataKey="plan" name="Kế hoạch vốn" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="actual" name="Đã giải ngân" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={10}>
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Cơ cấu theo nhóm nguồn vốn</span>
              <Tag color="blue">Kế hoạch 2026</Tag>
            </div>
            <div style={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={capitalCategoryData}
                    cx="50%"
                    cy="45%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {capitalCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    iconSize={8}
                    wrapperStyle={{ fontSize: 11, paddingTop: 4 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Main Table: Bảng tổng hợp theo đơn vị */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">Bảng theo dõi giải ngân theo đơn vị ({allRecords.length} đơn vị)</span>
          <span style={{ fontSize: 12, color: '#0b74e5', fontWeight: 600 }}>Nguồn dữ liệu: Sở KH&ĐT và Kho bạc Nhà nước tỉnh</span>
        </div>

        <Table
          dataSource={allRecords}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 8, showSizeChanger: true }}
          size="middle"
          bordered
          scroll={{ x: 1000 }}
        />
      </div>
        </>
      )}
    </div>
  );
};
