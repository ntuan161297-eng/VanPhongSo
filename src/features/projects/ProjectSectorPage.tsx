import React, { useState } from 'react';
import { Row, Col, Table, Progress, Tag, Button, Select, Space, message } from 'antd';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip as RechartsTooltip, 
  Legend 
} from 'recharts';
import { 
  Building2, 
  Truck, 
  Sprout, 
  DollarSign, 
  Eye, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  MapPin
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProjectService } from '../../services/dataService';
import { ProjectItem, ProjectSector } from '../../types';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';
import { ProjectDetailDrawer } from './ProjectDetailDrawer';

interface ProjectSectorPageProps {
  sector: ProjectSector;
  title: string;
  subtitle: string;
}

export const ProjectSectorPage: React.FC<ProjectSectorPageProps> = ({
  sector,
  title,
  subtitle
}) => {
  const { filters } = useApp();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [capitalFilter, setCapitalFilter] = useState('ALL');

  const projects = ProjectService.getAll({
    ...filters,
    sector,
    capitalSource: capitalFilter
  });
  const stats = ProjectService.getStats(projects);

  const statusDonut = [
    { name: 'Đang triển khai', value: stats.inProgress, color: '#0b74e5' },
    { name: 'Chậm tiến độ', value: stats.delayed, color: '#ef4444' },
    { name: 'Đã hoàn thành', value: stats.completed, color: '#10b981' },
    { name: 'Chuẩn bị đầu tư', value: stats.preparation, color: '#64748b' }
  ].filter(d => d.value > 0);

  const handleOpenDetail = (project: ProjectItem) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "MÃ DỰ ÁN,TÊN DỰ ÁN,CHỦ ĐẦU TƯ,ĐỊA BÀN PHƯỜNG/XÃ,TỔNG VỐN (TỶ VNĐ),ĐÃ GIẢI NGÂN (TỶ VNĐ),TIẾN ĐỘ (%),TRẠNG THÁI\n";
    projects.forEach(p => {
      const nameEsc = `"${p.name.replace(/"/g, '""')}"`;
      csv += `${p.code},${nameEsc},"${p.investor}","${p.district}",${p.totalInvestment},${p.disbursedAmount},${p.progress},${p.status}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `${title.replace(/\s+/g, '_')}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất danh sách ${projects.length} dự án ra CSV!`);
  };

  const getSectorIcon = () => {
    switch (sector) {
      case 'GIAO_THONG': return <Truck size={22} color="#0b74e5" />;
      case 'XAY_DUNG_DAN_DUNG': return <Building2 size={22} color="#7c3aed" />;
      case 'NONG_NGHIEP': return <Sprout size={22} color="#059669" />;
    }
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
      title: 'Tên dự án',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: ProjectItem) => (
        <div>
          <a 
            onClick={() => handleOpenDetail(record)}
            style={{ fontWeight: 600, color: '#1e293b', fontSize: 13 }}
          >
            {text}
          </a>
          <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 2 }}>
            Chủ đầu tư: <strong>{record.investor}</strong> | {record.capitalSource === 'NSNN' ? 'Vốn NSNN' : 'Ngoài NSNN'}
          </div>
        </div>
      )
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
      render: (v: number) => <strong style={{ color: '#0f172a' }}>{v.toLocaleString('vi-VN')} tỷ</strong>
    },
    {
      title: 'Đã giải ngân',
      dataIndex: 'disbursedAmount',
      key: 'disbursedAmount',
      width: 130,
      align: 'right' as const,
      render: (v: number) => <span style={{ color: '#10b981', fontWeight: 600 }}>{v.toLocaleString('vi-VN')} tỷ</span>
    },
    {
      title: 'Tiến độ',
      dataIndex: 'progress',
      key: 'progress',
      width: 125,
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
        <Button size="small" icon={<Eye size={12} />} onClick={() => handleOpenDetail(record)} style={{ fontSize: 12 }}>
          Hồ sơ
        </Button>
      )
    }
  ];

  return (
    <div>
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{ 
          width: 44, 
          height: 44, 
          borderRadius: 8, 
          background: '#eff6ff', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {getSectorIcon()}
        </div>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
            {title}
          </h1>
          <p style={{ fontSize: 13, color: '#64748b', margin: '2px 0 0 0' }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar
        onExportCSV={handleExportCSV}
        extraControls={
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 12.5, color: '#64748b' }}>Nguồn vốn:</span>
            <Select
              value={capitalFilter}
              onChange={setCapitalFilter}
              style={{ width: 150 }}
              options={[
                { value: 'ALL', label: 'Tất cả nguồn' },
                { value: 'NSNN', label: 'Vốn NSNN' },
                { value: 'NGOAI_NSNN', label: 'Ngoài NSNN' }
              ]}
            />
          </div>
        }
      />

      {/* Phố Hiến Executive Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner
          title={`Tình hình thực hiện: ${title}`}
          summary={`Danh mục hiện có ${projects.length} dự án với tổng mức đầu tư ${Number(stats.totalInvestment).toLocaleString('vi-VN')} tỷ VNĐ. Tiến độ giải ngân đạt ${Number(stats.totalDisbursed).toLocaleString('vi-VN')} tỷ VNĐ trên toàn bộ các xã, phường thụ hưởng.`}
          actionText="Xuất danh mục dự án"
          onActionClick={handleExportCSV}
          metrics={[
            { label: 'Tổng dự án', value: stats.total, color: '#0f172a' },
            { label: 'Đang triển khai', value: stats.inProgress, color: '#0b74e5' },
            { label: 'Chậm tiến độ', value: stats.delayed, subValue: 'Cần đôn đốc', color: '#ef4444' },
            { label: 'Đã hoàn thành', value: stats.completed, color: '#10b981' }
          ]}
        />
      </div>

      {/* Condensed Sector KPIs & Donut */}
      <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={16}>
          <div className="kpi-grid-4">
            <KPICard
              title="Tổng số dự án"
              value={stats.total}
              icon={<Building2 size={16} />}
              iconBg="#eff6ff"
              iconColor="#2563eb"
              subText="Theo phân kỳ đầu tư"
            />
            <KPICard
              title="Tổng mức đầu tư"
              value={Number(stats.totalInvestment).toLocaleString('vi-VN')}
              unit="tỷ"
              icon={<DollarSign size={16} />}
              iconBg="#faf5ff"
              iconColor="#7c3aed"
              subText="Tổng quy mô vốn"
            />
            <KPICard
              title="Chậm tiến độ"
              value={stats.delayed}
              valueColor="#ef4444"
              icon={<AlertTriangle size={16} />}
              iconBg="#fef2f2"
              iconColor="#ef4444"
              subText="Cần lãnh đạo chỉ đạo"
              highlight={stats.delayed > 0}
            />
            <KPICard
              title="Đã hoàn thành"
              value={stats.completed}
              icon={<CheckCircle2 size={16} />}
              iconBg="#ecfdf5"
              iconColor="#10b981"
              subText="Nghiệm thu bàn giao"
            />
          </div>
        </Col>

        <Col xs={24} lg={8}>
          <div className="gov-card" style={{ height: '100%', minHeight: 180 }}>
            <div className="gov-card-header" style={{ marginBottom: 6 }}>
              <span className="gov-card-title">Cơ cấu trạng thái dự án</span>
              <Tag color="blue" style={{ borderRadius: 10 }}>{projects.length} DA</Tag>
            </div>
            <div style={{ height: 130 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusDonut}
                    cx="50%"
                    cy="50%"
                    innerRadius={32}
                    outerRadius={55}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {statusDonut.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    iconSize={8}
                    wrapperStyle={{ fontSize: 11 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Main Table */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">Danh sách dự án ({projects.length})</span>
          <span style={{ fontSize: 12, color: '#0b74e5', fontWeight: 600 }}>Tỉnh Hưng Yên – Chính quyền 2 cấp</span>
        </div>

        <Table
          dataSource={projects}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 8, showSizeChanger: true }}
          size="middle"
          bordered
          scroll={{ x: 1000 }}
        />
      </div>

      {/* Project Detail Drawer */}
      <ProjectDetailDrawer
        project={selectedProject}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
};
