import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Row, Col, Table, Progress, Tag, Button, Select, Space, message } from 'antd';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
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
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  DollarSign, 
  Eye, 
  Layers,
  MapPin,
  Clock,
  Compass,
  FileSpreadsheet
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProjectService } from '../../services/dataService';
import { ProjectItem } from '../../types';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';
import { ProjectDetailDrawer } from './ProjectDetailDrawer';
import { HungYenProjectMap } from './HungYenProjectMap';

export const ProjectDashboard: React.FC = () => {
  const { filters } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const viewQuery = searchParams.get('view');

  const [capitalSourceFilter, setCapitalSourceFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeViewMode, setActiveViewMode] = useState<'OVERVIEW' | 'MAP' | 'DELAYED'>(
    viewQuery === 'map' ? 'MAP' : viewQuery === 'delayed' ? 'DELAYED' : 'OVERVIEW'
  );

  useEffect(() => {
    if (viewQuery === 'map') {
      setActiveViewMode('MAP');
    } else if (viewQuery === 'delayed') {
      setActiveViewMode('DELAYED');
    }
  }, [viewQuery]);

  const handleSwitchMode = (mode: 'OVERVIEW' | 'MAP' | 'DELAYED') => {
    setActiveViewMode(mode);
    if (mode === 'MAP') {
      setSearchParams({ view: 'map' });
    } else if (mode === 'DELAYED') {
      setSearchParams({ view: 'delayed' });
    } else {
      setSearchParams({});
    }
  };

  // Filter projects
  const projects = ProjectService.getAll({
    ...filters,
    capitalSource: capitalSourceFilter
  });
  const stats = ProjectService.getStats(projects);

  const handleOpenDetail = (project: ProjectItem) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  // Capital source donut data
  const capitalDonutData = [
    { name: 'Vốn Ngân sách (NSNN)', value: stats.nsnnCount, color: '#0b74e5' },
    { name: 'Ngoài Ngân sách', value: stats.outsideNsnnCount, color: '#f59e0b' }
  ];

  // Sector distribution data
  const sectorCountData = [
    { 
      sector: 'Giao thông', 
      total: projects.filter(p => p.sector === 'GIAO_THONG').length,
      delayed: projects.filter(p => p.sector === 'GIAO_THONG' && p.status === 'CHAM_TIEN_DO').length
    },
    { 
      sector: 'XD Dân dụng', 
      total: projects.filter(p => p.sector === 'XAY_DUNG_DAN_DUNG').length,
      delayed: projects.filter(p => p.sector === 'XAY_DUNG_DAN_DUNG' && p.status === 'CHAM_TIEN_DO').length
    },
    { 
      sector: 'Nông nghiệp', 
      total: projects.filter(p => p.sector === 'NONG_NGHIEP').length,
      delayed: projects.filter(p => p.sector === 'NONG_NGHIEP' && p.status === 'CHAM_TIEN_DO').length
    }
  ];

  // Delayed projects for leadership focus
  const delayedProjects = projects.filter(p => p.status === 'CHAM_TIEN_DO');

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "MÃ DỰ ÁN,TÊN DỰ ÁN,LĨNH VỰC,NGUỒN VỐN,CHỦ ĐẦU TƯ,ĐỊA BÀN PHƯỜNG/XÃ,TỔNG VỐN (TỶ VNĐ),ĐÃ GIẢI NGÂN (TỶ VNĐ),TIẾN ĐỘ (%),TRẠNG THÁI\n";
    projects.forEach(p => {
      const nameEscaped = `"${p.name.replace(/"/g, '""')}"`;
      csv += `${p.code},${nameEscaped},${p.sector},${p.capitalSource},"${p.investor}","${p.district}",${p.totalInvestment},${p.disbursedAmount},${p.progress},${p.status}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Du_An_Trong_Diem_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất ${projects.length} dự án ra file CSV!`);
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
      title: 'Mã dự án',
      dataIndex: 'code',
      key: 'code',
      width: 105,
      render: (t: string) => <span style={{ color: '#0b74e5', fontWeight: 700, fontSize: 12 }}>{t}</span>
    },
    {
      title: 'Tên dự án trọng điểm',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: ProjectItem) => (
        <div>
          <a 
            onClick={() => handleOpenDetail(record)}
            style={{ fontWeight: 600, color: '#1e293b', fontSize: 13, lineHeight: 1.4 }}
          >
            {text}
          </a>
          <div style={{ marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Tag color={record.capitalSource === 'NSNN' ? 'blue' : 'gold'} style={{ fontSize: 11, borderRadius: 10 }}>
              {record.capitalSource === 'NSNN' ? 'NSNN' : 'Ngoài NSNN'}
            </Tag>
            <span style={{ fontSize: 11.5, color: '#64748b' }}>Chủ đầu tư: {record.investor}</span>
          </div>
        </div>
      )
    },
    {
      title: 'Lĩnh vực',
      dataIndex: 'sector',
      key: 'sector',
      width: 130,
      render: (s: string) => {
        if (s === 'GIAO_THONG') return <span style={{ color: '#0284c7', fontWeight: 500 }}>Giao thông</span>;
        if (s === 'XAY_DUNG_DAN_DUNG') return <span style={{ color: '#7c3aed', fontWeight: 500 }}>XD Dân dụng</span>;
        return <span style={{ color: '#059669', fontWeight: 500 }}>Nông nghiệp</span>;
      }
    },
    {
      title: 'Địa bàn (Phường / Xã)',
      dataIndex: 'district',
      key: 'district',
      width: 170,
      render: (t: string) => (
        <span style={{ fontSize: 12, color: '#334155', display: 'flex', alignItems: 'center', gap: 4 }}>
          <MapPin size={11} color="#0b74e5" /> {t}
        </span>
      )
    },
    {
      title: 'Tổng mức đầu tư',
      dataIndex: 'totalInvestment',
      key: 'totalInvestment',
      width: 130,
      align: 'right' as const,
      sorter: (a: ProjectItem, b: ProjectItem) => a.totalInvestment - b.totalInvestment,
      render: (v: number) => <strong style={{ color: '#0f172a' }}>{v.toLocaleString('vi-VN')} tỷ</strong>
    },
    {
      title: 'Đã giải ngân',
      dataIndex: 'disbursedAmount',
      key: 'disbursedAmount',
      width: 130,
      align: 'right' as const,
      render: (v: number, r: ProjectItem) => (
        <span style={{ color: '#10b981', fontWeight: 600 }}>
          {v.toLocaleString('vi-VN')} tỷ ({Math.round((v / r.totalInvestment) * 100)}%)
        </span>
      )
    },
    {
      title: 'Tiến độ',
      dataIndex: 'progress',
      key: 'progress',
      width: 125,
      sorter: (a: ProjectItem, b: ProjectItem) => a.progress - b.progress,
      render: (v: number, r: ProjectItem) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress 
            percent={v} 
            size="small" 
            showInfo={false}
            strokeColor={r.status === 'CHAM_TIEN_DO' ? '#ef4444' : '#0b74e5'}
            style={{ flex: 1 }}
          />
          <span style={{ fontSize: 12, fontWeight: 600, color: '#64748b', width: 30 }}>{v}%</span>
        </div>
      )
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 140,
      render: (s: string) => {
        if (s === 'CHAM_TIEN_DO') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#dc2626', fontSize: 12.5, fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#dc2626' }} /> Chậm tiến độ
            </span>
          );
        }
        if (s === 'HOAN_THANH') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#16a34a', fontSize: 12.5, fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }} /> Hoàn thành
            </span>
          );
        }
        if (s === 'CHUAN_BI_DAU_TU') {
          return (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#d97706', fontSize: 12.5, fontWeight: 500 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b' }} /> Chuẩn bị ĐT
            </span>
          );
        }
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#0284c7', fontSize: 12.5, fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0284c7' }} /> Đang triển khai
          </span>
        );
      }
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 90,
      render: (_: any, record: ProjectItem) => (
        <Button 
          size="small" 
          icon={<Eye size={12} />}
          onClick={() => handleOpenDetail(record)}
          style={{ fontSize: 12 }}
        >
          Hồ sơ
        </Button>
      )
    }
  ];

  return (
    <div>
      {/* Page Title Bar & Action Buttons (Matching Screenshot) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: activeViewMode === 'MAP' ? 8 : 12 }}>
        <div>
          <h1 style={{ fontSize: 19, fontWeight: 800, color: '#0f172a', margin: 0 }}>
            {activeViewMode === 'MAP' ? 'Bản đồ không gian dự án trọng điểm' : 'Tổng quan dự án trọng điểm'}
          </h1>
          <p style={{ fontSize: 12.5, color: '#64748b', margin: '2px 0 0 0' }}>
            {activeViewMode === 'MAP'
              ? 'Không gian bản đồ vệ tinh & vị trí 34 dự án động lực trên toàn địa bàn 104 Xã, Phường tỉnh Hưng Yên'
              : 'Giám sát tiến độ, công tác bồi thường GPMB và kế hoạch vốn các công trình động lực trên địa bàn 104 Xã, Phường'}
          </p>
        </div>

        {/* Action Button Group */}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <Button
            type={activeViewMode === 'OVERVIEW' ? 'primary' : 'default'}
            icon={<Layers size={14} />}
            onClick={() => handleSwitchMode('OVERVIEW')}
            style={activeViewMode === 'OVERVIEW' ? { background: '#0b74e5', borderColor: '#0b74e5', fontWeight: 600 } : {}}
          >
            Tổng quan & Tiến độ
          </Button>

          <Button
            type={activeViewMode === 'MAP' ? 'primary' : 'default'}
            icon={<Compass size={14} />}
            onClick={() => handleSwitchMode('MAP')}
            style={activeViewMode === 'MAP' ? { background: '#0b74e5', borderColor: '#0b74e5', fontWeight: 600 } : {}}
          >
            Bản đồ không gian
          </Button>

          <Button
            type={activeViewMode === 'DELAYED' ? 'primary' : 'default'}
            icon={<AlertTriangle size={14} color={activeViewMode === 'DELAYED' ? '#ffffff' : '#ef4444'} />}
            onClick={() => handleSwitchMode('DELAYED')}
            style={activeViewMode === 'DELAYED' ? { background: '#ef4444', borderColor: '#ef4444', fontWeight: 600 } : { color: '#ef4444', borderColor: '#fca5a5' }}
          >
            Đôn đốc & Xử lý gấp ({stats.delayed})
          </Button>
        </div>
      </div>

      {/* Filter Bar (Chỉ hiển thị ở chế độ Báo cáo số liệu & Danh sách) */}
      {activeViewMode !== 'MAP' && (
        <FilterBar
          onExportCSV={handleExportCSV}
          extraControls={
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 500 }}>Nguồn vốn:</span>
              <Select
                value={capitalSourceFilter}
                onChange={setCapitalSourceFilter}
                style={{ width: 155 }}
                size="middle"
                options={[
                  { value: 'ALL', label: 'Tất cả nguồn vốn' },
                  { value: 'NSNN', label: 'Vốn Ngân sách (NSNN)' },
                  { value: 'NGOAI_NSNN', label: 'Ngoài Ngân sách' }
                ]}
              />
            </div>
          }
        />
      )}

      {/* View Mode Switching: MAP (Full screen map without metrics) vs DELAYED vs OVERVIEW */}
      {activeViewMode === 'MAP' ? (
        /* ================= FULL GIAO DIỆN BẢN ĐỒ VỆ TINH (KHÔNG CẦN SỐ LIỆU) ================= */
        <div style={{ marginTop: 4 }}>
          <HungYenProjectMap
            projects={projects}
            selectedProject={selectedProject}
            onSelectProject={handleOpenDetail}
            fullHeight={true}
            hideStatsPanel={true}
          />
        </div>
      ) : activeViewMode === 'DELAYED' ? (
        /* ================= CHẾ ĐỘ ĐÔN ĐỐC DỰ ÁN CHẬM TIẾN ĐỘ ================= */
        <div style={{ marginTop: 10 }}>
          <div style={{ 
            background: '#fef2f2', 
            border: '1px solid #fecaca', 
            borderRadius: 8, 
            padding: '16px 20px', 
            marginBottom: 16 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#991b1b', fontWeight: 800, fontSize: 15 }}>
                <AlertTriangle size={20} color="#dc2626" />
                DANH MỤC DỰ ÁN TRỌNG ĐIỂM CHẬM TIẾN ĐỘ & VƯỚNG MẮC GPMB ({delayedProjects.length} DỰ ÁN)
              </div>
              <Button type="primary" danger size="small" style={{ fontWeight: 600 }}>
                Xuất phiếu giao ban đôn đốc
              </Button>
            </div>
            <p style={{ fontSize: 13, color: '#7f1d1d', margin: '0 0 14px 0', lineHeight: 1.5 }}>
              Tập trung tháo gỡ vướng mắc giải phóng mặt bằng, tái định cư và di dời hạ tầng kỹ thuật tại các địa bàn cấp xã/phường trọng điểm.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 12 }}>
              {delayedProjects.map(proj => (
                <div 
                  key={proj.id} 
                  onClick={() => handleOpenDetail(proj)}
                  style={{ 
                    background: '#ffffff', 
                    padding: 14, 
                    borderRadius: 8, 
                    border: '1px solid #fca5a5', 
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(239, 68, 68, 0.08)'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0f172a' }}>{proj.name}</div>
                  <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                    📍 Địa bàn: <strong style={{ color: '#0b74e5' }}>{proj.district}</strong>
                  </div>
                  <div style={{ fontSize: 12, color: '#334155', marginTop: 2 }}>
                    Tổng mức: <strong>{proj.totalInvestment} tỷ</strong> | Tiến độ: <strong style={{ color: '#ef4444' }}>{proj.progress}%</strong>
                  </div>
                  <div style={{ fontSize: 11.5, color: '#b91c1c', marginTop: 6, background: '#fef2f2', padding: '6px 8px', borderRadius: 4 }}>
                    ⚠️ {proj.landClearanceNote}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bảng dự án chậm */}
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Bảng theo dõi chi tiết dự án chậm tiến độ</span>
            </div>
            <Table
              dataSource={delayedProjects}
              columns={columns}
              rowKey="id"
              pagination={false}
              size="middle"
              bordered
              scroll={{ x: 1000 }}
            />
          </div>
        </div>
      ) : (
        /* ================= CHẾ ĐỘ TỔNG QUAN & TIẾN ĐỘ (CÓ ĐẦY ĐỦ SỐ LIỆU) ================= */
        <>
          {/* Phố Hiến Executive Summary Banner (Matching Exact Layout) */}
          <div style={{ marginBottom: 14 }}>
            <ExecutiveBanner
              title="Tình hình thực hiện các dự án trọng điểm tỉnh Hưng Yên"
              summary={`Toàn tỉnh hiện có ${stats.total} dự án trọng điểm được giám sát chặt chẽ. Đã giải ngân đạt ${Number(stats.totalDisbursed).toLocaleString('vi-VN')} tỷ VNĐ trên tổng số ${Number(stats.totalInvestment).toLocaleString('vi-VN')} tỷ VNĐ vốn đầu tư. Hiện còn ${stats.delayed} dự án vướng mắc tiến độ GPMB cần các Sở/Ngành và chính quyền các Xã/Phường tập trung phối hợp tháo gỡ.`}
              actionText="Xem danh sách chậm GPMB"
              onActionClick={() => setActiveViewMode('DELAYED')}
              metrics={[
                { label: 'Tổng dự án', value: stats.total, color: '#0f172a' },
                { label: 'Đang triển khai', value: stats.inProgress, color: '#0b74e5' },
                { label: 'Chậm tiến độ', value: stats.delayed, subValue: 'Vướng GPMB', color: '#ef4444' },
                { label: 'Đã hoàn thành', value: stats.completed, subValue: 'Bàn giao', color: '#10b981' }
              ]}
            />
          </div>

          {/* 6 KPI Cards Row */}
          <div className="kpi-grid-6">
            <KPICard
              title="Tổng dự án trọng điểm"
              value={stats.total}
              icon={<Building2 size={16} />}
              iconBg="#eff6ff"
              iconColor="#2563eb"
              subText="Dự án động lực cấp tỉnh"
            />
            <KPICard
              title="Đang triển khai"
              value={stats.inProgress}
              icon={<TrendingUp size={16} />}
              iconBg="#f0f9ff"
              iconColor="#0284c7"
              subText="Thi công hiện trường"
            />
            <KPICard
              title="Chậm tiến độ"
              value={stats.delayed}
              valueColor="#ef4444"
              icon={<AlertTriangle size={16} />}
              iconBg="#fef2f2"
              iconColor="#ef4444"
              subText="Vướng mắc GPMB"
              trendText="Cần chỉ đạo"
              trendColor="#ef4444"
              highlight={stats.delayed > 0}
            />
            <KPICard
              title="Đã hoàn thành"
              value={stats.completed}
              icon={<CheckCircle2 size={16} />}
              iconBg="#ecfdf5"
              iconColor="#10b981"
              subText="Đưa vào khai thác"
            />
            <KPICard
              title="Tổng mức đầu tư"
              value={Number(stats.totalInvestment).toLocaleString('vi-VN')}
              unit="tỷ"
              icon={<DollarSign size={16} />}
              iconBg="#faf5ff"
              iconColor="#7c3aed"
              subText="Toàn bộ danh mục"
            />
            <KPICard
              title="Đã giải ngân"
              value={Number(stats.totalDisbursed).toLocaleString('vi-VN')}
              unit="tỷ"
              icon={<DollarSign size={16} />}
              iconBg="#f0fdf4"
              iconColor="#059669"
              subText={`Đạt ${(Number(stats.totalDisbursed) / Number(stats.totalInvestment) * 100).toFixed(1)}%`}
              trendText="↑ Tiến độ tốt"
              trendColor="#10b981"
            />
          </div>

          {/* Map Preview in Overview Mode with Full Expansion Link */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0f172a', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Compass size={16} color="#0b74e5" />
                Bản đồ không gian & mật độ dự án toàn tỉnh Hưng Yên
              </div>
              <Button 
                type="link" 
                onClick={() => handleSwitchMode('MAP')} 
                style={{ fontWeight: 600, color: '#0b74e5', fontSize: 12.5 }}
              >
                Mở rộng bản đồ full giao diện →
              </Button>
            </div>
            <HungYenProjectMap
              projects={projects}
              selectedProject={selectedProject}
              onSelectProject={handleOpenDetail}
              fullHeight={false}
            />
          </div>

          {/* Row: Phân bố dự án theo lĩnh vực & Cơ cấu nguồn vốn */}
          <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
            {/* Phân bố 3 lĩnh vực */}
            <Col xs={24} lg={14}>
              <div className="gov-card">
                <div className="gov-card-header">
                  <span className="gov-card-title">Phân bố dự án theo ba lĩnh vực trọng điểm</span>
                  <span style={{ fontSize: 12, color: '#64748b' }}>So sánh tổng số và số dự án chậm</span>
                </div>
                <div style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sectorCountData} margin={{ top: 10, right: 20, left: -15, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="sector" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <RechartsTooltip />
                      <Legend wrapperStyle={{ fontSize: 11.5 }} />
                      <Bar dataKey="total" name="Tổng dự án" fill="#0b74e5" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="delayed" name="Chậm tiến độ" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>

            {/* Cơ cấu nguồn vốn Donut */}
            <Col xs={24} lg={10}>
              <div className="gov-card">
                <div className="gov-card-header">
                  <span className="gov-card-title">Cơ cấu nguồn vốn dự án</span>
                  <Tag color="blue">{stats.total} Dự án</Tag>
                </div>
                <div style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={capitalDonutData}
                        cx="50%"
                        cy="45%"
                        innerRadius={45}
                        outerRadius={75}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {capitalDonutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                      <Legend 
                        layout="horizontal" 
                        verticalAlign="bottom" 
                        align="center"
                        iconSize={8}
                        wrapperStyle={{ fontSize: 11.5, paddingTop: 6 }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>

          {/* Bảng dữ liệu chi tiết toàn bộ dự án */}
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Danh sách chi tiết dự án trọng điểm ({projects.length} dự án)</span>
              <span style={{ fontSize: 12, color: '#0b74e5', fontWeight: 600 }}>Dữ liệu quy hoạch & đầu tư công tỉnh Hưng Yên</span>
            </div>

            <Table
              dataSource={projects}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 8, showSizeChanger: true }}
              size="middle"
              bordered
              scroll={{ x: 1050 }}
            />
          </div>
        </>
      )}

      {/* Detail Dossier Drawer */}
      <ProjectDetailDrawer
        project={selectedProject}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
};
