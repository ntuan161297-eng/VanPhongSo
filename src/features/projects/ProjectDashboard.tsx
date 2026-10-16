import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Row, 
  Col, 
  Table, 
  Progress, 
  Tag, 
  Button, 
  Select, 
  Space, 
  message, 
  Segmented, 
  Modal, 
  Form, 
  Input, 
  DatePicker,
  Card,
  Tooltip
} from 'antd';
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
  FileSpreadsheet,
  Send,
  ShieldAlert,
  FileCheck,
  Hammer,
  Landmark,
  CheckCircle,
  FileText
} from 'lucide-react';
import dayjs from 'dayjs';
import { useApp } from '../../context/AppContext';
import { ProjectService } from '../../services/dataService';
import { ProjectItem, ProjectStage } from '../../types';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';
import { ProjectDetailDrawer } from './ProjectDetailDrawer';
import { HungYenProjectMap } from './HungYenProjectMap';
import { ExpediteModal } from '../../components/projects/ExpediteModal';

const { TextArea } = Input;

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

  // Tab lọc giai đoạn trong bảng: ALL | THU_TUC_DAU_TU | GIAI_PHONG_MAT_BANG | THI_CONG_XAY_DUNG | EXPEDITE
  const [stageTabFilter, setStageTabFilter] = useState<string>('ALL');
  const [refreshKey, setRefreshKey] = useState(0);

  // Expedite modal state
  const [expediteModalOpen, setExpediteModalOpen] = useState(false);
  const [projectToExpedite, setProjectToExpedite] = useState<ProjectItem | null>(null);

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

  // Base list filtered by global filter and capital source
  const allProjects = useMemo(() => {
    return ProjectService.getAll({
      ...filters,
      capitalSource: capitalSourceFilter
    });
  }, [filters, capitalSourceFilter, refreshKey]);

  const stats = useMemo(() => {
    return ProjectService.getStats(allProjects);
  }, [allProjects]);

  // List filtered for table according to stageTabFilter
  let displayProjects = [...allProjects];
  if (stageTabFilter === 'THU_TUC_DAU_TU') {
    displayProjects = displayProjects.filter(p => p.currentStage === 'THU_TUC_DAU_TU');
  } else if (stageTabFilter === 'GIAI_PHONG_MAT_BANG') {
    displayProjects = displayProjects.filter(p => p.currentStage === 'GIAI_PHONG_MAT_BANG');
  } else if (stageTabFilter === 'THI_CONG_XAY_DUNG') {
    displayProjects = displayProjects.filter(p => p.currentStage === 'THI_CONG_XAY_DUNG');
  } else if (stageTabFilter === 'EXPEDITE') {
    displayProjects = displayProjects.filter(p => p.status === 'CHAM_TIEN_DO' || p.expediteInfo?.riskLevel === 'NGUY_CO_CHAM');
  }

  // Danh sách các dự án chậm hạn hoặc có nguy cơ chậm
  const delayedAndRiskProjects = allProjects.filter(
    p => p.status === 'CHAM_TIEN_DO' || p.expediteInfo?.riskLevel === 'NGUY_CO_CHAM'
  );

  const handleOpenDetail = (project: ProjectItem) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const handleOpenExpedite = (project: ProjectItem) => {
    setProjectToExpedite(project);
    setExpediteModalOpen(true);
  };

  // Capital source donut data
  const capitalDonutData = [
    { name: `Vốn NSNN (${stats.nsnnCount} DA)`, value: Number(stats.nsnnInvestment), color: '#0284c7' },
    { name: `Ngoài NSNN (${stats.outsideNsnnCount} DA)`, value: Number(stats.outsideNsnnInvestment), color: '#f59e0b' }
  ];

  // Stage distribution donut data
  const stageDonutData = [
    { name: '1. Thủ tục đầu tư', value: stats.stageProcedureCount, color: '#8b5cf6' },
    { name: '2. Giải phóng mặt bằng', value: stats.stageClearanceCount, color: '#f59e0b' },
    { name: '3. Thi công xây dựng', value: stats.stageConstructionCount, color: '#0284c7' },
    { name: '4. Đã hoàn thành', value: stats.stageCompletedCount, color: '#10b981' }
  ].filter(d => d.value > 0);

  // Sector distribution data: so sánh rõ NSNN vs Ngoài NSNN trong từng lĩnh vực
  const sectorCountData = [
    { 
      sector: 'Giao thông', 
      nsnn: allProjects.filter(p => p.sector === 'GIAO_THONG' && p.capitalSource === 'NSNN').length,
      ngoaiNsnn: allProjects.filter(p => p.sector === 'GIAO_THONG' && p.capitalSource === 'NGOAI_NSNN').length,
      delayed: allProjects.filter(p => p.sector === 'GIAO_THONG' && p.status === 'CHAM_TIEN_DO').length
    },
    { 
      sector: 'XD Dân dụng & KCN', 
      nsnn: allProjects.filter(p => p.sector === 'XAY_DUNG_DAN_DUNG' && p.capitalSource === 'NSNN').length,
      ngoaiNsnn: allProjects.filter(p => p.sector === 'XAY_DUNG_DAN_DUNG' && p.capitalSource === 'NGOAI_NSNN').length,
      delayed: allProjects.filter(p => p.sector === 'XAY_DUNG_DAN_DUNG' && p.status === 'CHAM_TIEN_DO').length
    },
    { 
      sector: 'Nông nghiệp & Năng lượng', 
      nsnn: allProjects.filter(p => p.sector === 'NONG_NGHIEP' && p.capitalSource === 'NSNN').length,
      ngoaiNsnn: allProjects.filter(p => p.sector === 'NONG_NGHIEP' && p.capitalSource === 'NGOAI_NSNN').length,
      delayed: allProjects.filter(p => p.sector === 'NONG_NGHIEP' && p.status === 'CHAM_TIEN_DO').length
    }
  ];

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "MÃ DỰ ÁN,TÊN DỰ ÁN,LĨNH VỰC,NGUỒN VỐN,CHỦ TRƯƠNG ĐẦU TƯ,GIAI ĐOẠN,CHỦ ĐẦU TƯ,ĐỊA BÀN PHƯỜNG/XÃ,TỔNG VỐN (TỶ VNĐ),ĐÃ GIẢI NGÂN (TỶ VNĐ),TIẾN ĐỘ GPMB (%),TIẾN ĐỘ THI CÔNG (%),TRẠNG THÁI,CHẬM Ở ĐÂU,CƠ QUAN CHỦ TRÌ,CƠ QUAN PHỐI HỢP\n";
    allProjects.forEach(p => {
      const nameEscaped = `"${p.name.replace(/"/g, '""')}"`;
      const policy = p.procedureStage?.hasApprovedPolicy ? `Đã có (${p.procedureStage.policyDecisionNo || ''})` : 'Chưa có';
      const stage = p.currentStage;
      const gpmb = p.landClearanceStage?.handedOverPercent || p.landClearanceProgress;
      const thiCong = p.constructionStage?.constructionProgress || p.progress;
      const bottleneck = `"${(p.expediteInfo?.bottleneckLocation || '').replace(/"/g, '""')}"`;
      const lead = `"${(p.expediteInfo?.leadDepartment || p.investor).replace(/"/g, '""')}"`;
      const coop = `"${(p.expediteInfo?.cooperatingDepartments?.join('; ') || '').replace(/"/g, '""')}"`;
      csv += `${p.code},${nameEscaped},${p.sector},${p.capitalSource},"${policy}",${stage},"${p.investor}","${p.district}",${p.totalInvestment},${p.disbursedAmount},${gpmb},${thiCong},${p.status},${bottleneck},${lead},${coop}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Du_An_Trong_Diem_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất ${allProjects.length} dự án trọng điểm ra file CSV!`);
  };

  const sectorMap: Record<string, string> = {
    GIAO_THONG: 'Giao thông',
    XAY_DUNG_DAN_DUNG: 'XD Dân dụng & KCN',
    NONG_NGHIEP: 'Nông nghiệp & Năng lượng'
  };

  const columns = [
    {
      title: 'STT',
      key: 'stt',
      width: 48,
      align: 'center' as const,
      render: (_: any, __: any, index: number) => index + 1
    },
    {
      title: 'Mã & Tên dự án',
      key: 'name',
      width: 280,
      render: (_: any, record: ProjectItem) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#0284c7', fontWeight: 700, fontSize: 11.5 }}>{record.code}</span>
            <Tag 
              color={record.capitalSource === 'NSNN' ? 'blue' : 'gold'} 
              style={{ fontSize: 10, padding: '0 5px', lineHeight: '18px', borderRadius: 4 }}
            >
              {record.capitalSource === 'NSNN' ? 'Vốn NSNN' : 'Ngoài NSNN'}
            </Tag>
          </div>
          <a 
            onClick={() => handleOpenDetail(record)}
            style={{ fontWeight: 600, color: '#1e293b', fontSize: 13, lineHeight: 1.4, display: 'inline-block', marginTop: 2 }}
          >
            {record.name}
          </a>
          <div style={{ marginTop: 2, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#64748b' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
              <MapPin size={11} color="#0284c7" /> {record.district}
            </span>
          </div>
        </div>
      )
    },
    {
      title: 'Giai đoạn',
      dataIndex: 'currentStage',
      key: 'currentStage',
      width: 145,
      render: (stage: ProjectStage) => {
        if (stage === 'THU_TUC_DAU_TU') {
          return <Tag color="purple" icon={<FileCheck size={11} />}>Thủ tục đầu tư</Tag>;
        }
        if (stage === 'GIAI_PHONG_MAT_BANG') {
          return <Tag color="orange" icon={<Layers size={11} />}>Giải phóng mặt bằng</Tag>;
        }
        if (stage === 'THI_CONG_XAY_DUNG') {
          return <Tag color="blue" icon={<Hammer size={11} />}>Thi công xây dựng</Tag>;
        }
        return <Tag color="green" icon={<CheckCircle size={11} />}>Hoàn thành vận hành</Tag>;
      }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 130,
      render: (s: string) => {
        if (s === 'CHAM_TIEN_DO') {
          return <Tag color="error">⚠️ Chậm tiến độ</Tag>;
        }
        if (s === 'HOAN_THANH') {
          return <Tag color="success">✓ Đã hoàn thành</Tag>;
        }
        if (s === 'CHUAN_BI_DAU_TU') {
          return <Tag color="warning">⏳ Chuẩn bị ĐT</Tag>;
        }
        return <Tag color="processing">✓ Đang triển khai</Tag>;
      }
    },
    {
      title: 'Lĩnh vực',
      dataIndex: 'sector',
      key: 'sector',
      width: 140,
      render: (sec: string) => (
        <span style={{ fontSize: 12, color: '#334155' }}>
          {sectorMap[sec] || sec}
        </span>
      )
    },
    {
      title: 'Tổng mức đầu tư',
      dataIndex: 'totalInvestment',
      key: 'totalInvestment',
      width: 135,
      align: 'right' as const,
      sorter: (a: ProjectItem, b: ProjectItem) => a.totalInvestment - b.totalInvestment,
      render: (v: number) => (
        <strong style={{ color: '#0f172a', fontSize: 12.5 }}>
          {v.toLocaleString('vi-VN')} tỷ
        </strong>
      )
    },
    {
      title: 'Quỹ đất sử dụng',
      key: 'landArea',
      width: 125,
      align: 'right' as const,
      sorter: (a: ProjectItem, b: ProjectItem) => (a.landArea || 0) - (b.landArea || 0),
      render: (_: any, r: ProjectItem) => (
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0369a1' }}>
          {r.landArea ? `${r.landArea.toLocaleString('vi-VN')} ha` : (r.landClearanceStage?.totalArea ? `${r.landClearanceStage.totalArea} ha` : '-')}
        </span>
      )
    },
    {
      title: 'Vướng mắc, kiến nghị',
      key: 'unresolvedIssues',
      width: 250,
      render: (_: any, r: ProjectItem) => {
        const isProblem = r.status === 'CHAM_TIEN_DO' || r.expediteInfo?.riskLevel === 'NGUY_CO_CHAM';
        if (!isProblem) {
          return <span style={{ color: '#16a34a', fontSize: 12 }}>✓ Đúng tiến độ; không có vướng mắc lớn</span>;
        }
        return (
          <div style={{ fontSize: 11.5, color: '#b91c1c', background: '#fef2f2', padding: '6px 8px', borderRadius: 4, border: '1px solid #fecaca' }}>
            <div style={{ fontWeight: 700 }}>⚠️ {r.expediteInfo?.delayedStageLabel || 'Vướng mắc'}:</div>
            <div style={{ marginTop: 2 }}>{r.expediteInfo?.detailedDifficulties || r.unresolvedIssues || r.landClearanceNote}</div>
            <div style={{ marginTop: 3, color: '#1e3a8a', fontStyle: 'italic' }}>
              Kiến nghị: {r.expediteInfo?.proposalsAndRecommendations}
            </div>
          </div>
        );
      }
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 120,
      align: 'center' as const,
      render: (_: any, record: ProjectItem) => (
        <Space size={4}>
          <Button 
            size="small" 
            icon={<Eye size={11} />}
            onClick={() => handleOpenDetail(record)}
            style={{ fontSize: 11 }}
          >
            Hồ sơ
          </Button>
          {(record.status === 'CHAM_TIEN_DO' || record.expediteInfo?.riskLevel === 'NGUY_CO_CHAM') && (
            <Button
              size="small"
              type="primary"
              danger
              icon={<Send size={10} />}
              onClick={() => handleOpenExpedite(record)}
              style={{ fontSize: 11, padding: '0 6px' }}
            >
              Đôn đốc
            </Button>
          )}
        </Space>
      )
    }
  ];

  return (
    <div>
      {/* Page Title Bar & Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: activeViewMode === 'MAP' ? 8 : 12 }}>
        <div>
          <h1 style={{ fontSize: 19, fontWeight: 800, color: '#0f172a', margin: 0 }}>
            {activeViewMode === 'MAP' 
              ? 'Bản đồ không gian dự án trọng điểm toàn tỉnh Hưng Yên' 
              : activeViewMode === 'DELAYED'
              ? 'Theo dõi & Đôn đốc các dự án chậm hạn / Có nguy cơ chậm hạn'
              : 'Tổng quan các dự án trọng điểm tỉnh Hưng Yên'}
          </h1>
          <p style={{ fontSize: 12.5, color: '#64748b', margin: '2px 0 0 0' }}>
            {activeViewMode === 'MAP'
              ? 'Bản đồ không gian số & vị trí 34 dự án trọng điểm (20 dự án sử dụng NSNN và 14 dự án ngoài NSNN)'
              : activeViewMode === 'DELAYED'
              ? 'Giám sát chi tiết điểm nghẽn, cơ quan chủ trì, cơ quan phối hợp và ban hành chỉ đạo đôn đốc tháo gỡ'
              : 'Giám sát tiến độ 34 dự án động lực cấp tỉnh (20 dự án sử dụng NSNN và 14 dự án ngoài NSNN)'}
          </p>
        </div>

        {/* Action Button Group */}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <Button
            type={activeViewMode === 'OVERVIEW' ? 'primary' : 'default'}
            icon={<Layers size={14} />}
            onClick={() => handleSwitchMode('OVERVIEW')}
            style={activeViewMode === 'OVERVIEW' ? { background: '#0284c7', borderColor: '#0284c7', fontWeight: 600 } : {}}
          >
            Tổng quan & Báo cáo
          </Button>

          <Button
            type={activeViewMode === 'MAP' ? 'primary' : 'default'}
            icon={<Compass size={14} />}
            onClick={() => handleSwitchMode('MAP')}
            style={activeViewMode === 'MAP' ? { background: '#0284c7', borderColor: '#0284c7', fontWeight: 600 } : {}}
          >
            Bản đồ số ({allProjects.length})
          </Button>

          <Button
            type={activeViewMode === 'DELAYED' ? 'primary' : 'default'}
            icon={<AlertTriangle size={14} color={activeViewMode === 'DELAYED' ? '#ffffff' : '#ef4444'} />}
            onClick={() => handleSwitchMode('DELAYED')}
            style={activeViewMode === 'DELAYED' ? { background: '#ef4444', borderColor: '#ef4444', fontWeight: 600 } : { color: '#ef4444', borderColor: '#fca5a5' }}
          >
            Đôn đốc xử lý vướng mắc ({delayedAndRiskProjects.length})
          </Button>
        </div>
      </div>

      {/* Filter Bar (Khi ở chế độ OVERVIEW hoặc DELAYED) */}
      {activeViewMode !== 'MAP' && (
        <FilterBar
          onExportCSV={handleExportCSV}
          extraControls={
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 500 }}>Nguồn vốn:</span>
              <Select
                value={capitalSourceFilter}
                onChange={setCapitalSourceFilter}
                style={{ width: 180 }}
                size="middle"
                options={[
                  { value: 'ALL', label: `Tất cả nguồn vốn (${allProjects.length})` },
                  { value: 'NSNN', label: `🏛️ Vốn NSNN (${stats.nsnnCount})` },
                  { value: 'NGOAI_NSNN', label: `🏢 Ngoài NSNN (${stats.outsideNsnnCount})` }
                ]}
              />
            </div>
          }
        />
      )}

      {/* View Mode Switching */}
      {activeViewMode === 'MAP' ? (
        /* ================= 1. FULL GIAO DIỆN BẢN ĐỒ ================= */
        <div style={{ marginTop: 4 }}>
          <HungYenProjectMap
            projects={allProjects}
            selectedProject={selectedProject}
            onSelectProject={handleOpenDetail}
            fullHeight={true}
            hideStatsPanel={true}
          />
        </div>
      ) : activeViewMode === 'DELAYED' ? (
        /* ================= 2. CHẾ ĐỘ ĐÔN ĐỐC DỰ ÁN CHẬM TIẾN ĐỘ & NGUY CƠ ================= */
        <div style={{ marginTop: 10 }}>
          <div style={{ 
            background: '#fef2f2', 
            border: '1px solid #fecaca', 
            borderRadius: 8, 
            padding: '16px 20px', 
            marginBottom: 16 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#991b1b', fontWeight: 800, fontSize: 15 }}>
                <ShieldAlert size={22} color="#dc2626" />
                DANH MỤC DỰ ÁN TRỌNG ĐIỂM CHẬM HẠN & CÓ NGUY CƠ CHẬM ({delayedAndRiskProjects.length} DỰ ÁN)
              </div>
              <Button 
                type="primary" 
                danger 
                size="small" 
                icon={<Send size={12} />}
                onClick={() => {
                  if (delayedAndRiskProjects.length > 0) handleOpenExpedite(delayedAndRiskProjects[0]);
                }}
                style={{ fontWeight: 600 }}
              >
                Ban hành văn bản đôn đốc chỉ đạo
              </Button>
            </div>
            <p style={{ fontSize: 13, color: '#7f1d1d', margin: '0 0 14px 0', lineHeight: 1.5 }}>
              Theo dõi chặt chẽ: Dự án đang ở giai đoạn nào? Chậm ở đâu? Điểm nghẽn là gì? Cơ quan nào chủ trì, cơ quan nào phối hợp và các đề xuất kiến nghị tháo gỡ khó khăn.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 14 }}>
              {delayedAndRiskProjects.map(proj => {
                const exp = proj.expediteInfo;
                const isDelayed = proj.status === 'CHAM_TIEN_DO';
                return (
                  <div 
                    key={proj.id} 
                    style={{ 
                      background: '#ffffff', 
                      padding: 16, 
                      borderRadius: 8, 
                      border: `1.5px solid ${isDelayed ? '#fca5a5' : '#fde68a'}`, 
                      boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                      <Tag color={proj.capitalSource === 'NSNN' ? 'blue' : 'gold'}>
                        {proj.capitalSource === 'NSNN' ? 'Vốn NSNN' : 'Ngoài NSNN'}
                      </Tag>
                      <Tag color={isDelayed ? 'error' : 'warning'} style={{ fontWeight: 700 }}>
                        {isDelayed ? '⚠️ Chậm tiến độ' : '⏳ Có nguy cơ chậm'}
                      </Tag>
                    </div>

                    <a 
                      onClick={() => handleOpenDetail(proj)}
                      style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', lineHeight: 1.4, display: 'block', marginBottom: 6 }}
                    >
                      {proj.name}
                    </a>

                    <div style={{ fontSize: 12, color: '#475569', marginBottom: 3 }}>
                      📍 <strong>Địa bàn:</strong> {proj.district}
                    </div>

                    <div style={{ fontSize: 12, color: '#b91c1c', marginBottom: 4, background: '#fef2f2', padding: '6px 8px', borderRadius: 4 }}>
                      <div>⚠️ <strong>Đang chậm ở giai đoạn:</strong> {exp?.delayedStageLabel || 'Tiến độ'}</div>
                      <div style={{ marginTop: 2 }}>📍 <strong>Chậm tại đâu:</strong> {exp?.bottleneckLocation || proj.district}</div>
                    </div>

                    <div style={{ fontSize: 12, color: '#334155', marginBottom: 3 }}>
                      🏛️ <strong>Cơ quan chủ trì:</strong> <span style={{ color: '#0369a1', fontWeight: 600 }}>{exp?.leadDepartment || proj.investor}</span>
                    </div>

                    <div style={{ fontSize: 12, color: '#475569', marginBottom: 6 }}>
                      🤝 <strong>Cơ quan phối hợp:</strong> <span>{exp?.cooperatingDepartments?.join(', ')}</span>
                    </div>

                    <div style={{ fontSize: 11.5, color: '#64748b', background: '#f8fafc', padding: 8, borderRadius: 4, marginBottom: 10, lineHeight: 1.4 }}>
                      <strong>Khó khăn vướng mắc:</strong> {exp?.detailedDifficulties}<br/>
                      <strong>Đề xuất kiến nghị:</strong> <span style={{ color: '#1e3a8a' }}>{exp?.proposalsAndRecommendations}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: 8 }}>
                      <span style={{ fontSize: 12, color: '#64748b' }}>
                        Tổng vốn: <strong>{proj.totalInvestment} tỷ</strong> | GN: <strong>{proj.disbursedAmount} tỷ</strong>
                      </span>
                      <Space>
                        <Button size="small" onClick={() => handleOpenDetail(proj)}>Xem hồ sơ</Button>
                        <Button size="small" type="primary" danger icon={<Send size={11} />} onClick={() => handleOpenExpedite(proj)}>
                          Đôn đốc
                        </Button>
                      </Space>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bảng theo dõi chi tiết dự án chậm */}
          <div className="gov-card">
            <div className="gov-card-header">
              <span className="gov-card-title">Bảng theo dõi chi tiết dự án chậm hạn & nguy cơ</span>
            </div>
            <Table
              dataSource={delayedAndRiskProjects}
              columns={columns}
              rowKey="id"
              pagination={false}
              size="middle"
              bordered
              scroll={{ x: 1200 }}
            />
          </div>
        </div>
      ) : (
        /* ================= 3. CHẾ ĐỘ TỔNG QUAN & BÁO CÁO ================= */
        <>
          {/* Executive Summary Banner */}
          <div style={{ marginBottom: 14 }}>
            <ExecutiveBanner
              title="Tổng quan 34 Dự án trọng điểm tỉnh Hưng Yên (NSNN & Ngoài NSNN)"
              summary={`Toàn tỉnh hiện có 34 dự án trọng điểm động lực, gồm 20 dự án sử dụng vốn NSNN (${Number(stats.nsnnInvestment).toLocaleString('vi-VN')} tỷ VNĐ) và 14 dự án Ngoài NSNN (${Number(stats.outsideNsnnInvestment).toLocaleString('vi-VN')} tỷ VNĐ do các tập đoàn lớn đầu tư). Tổng vốn đầu tư đạt ${Number(stats.totalInvestment).toLocaleString('vi-VN')} tỷ VNĐ, đã giải ngân thực hiện ${Number(stats.totalDisbursed).toLocaleString('vi-VN')} tỷ VNĐ. Hiện có 4 dự án chậm tiến độ và 3 dự án có nguy cơ chậm cần tập trung đôn đốc tháo gỡ GPMB.`}
              actionText="Xem danh sách chậm hạn & chỉ đạo"
              onActionClick={() => setActiveViewMode('DELAYED')}
              metrics={[
                { label: 'Tổng số DA', value: stats.total, subValue: '20 NSNN • 14 Ngoài NSNN', color: '#0f172a' },
                { label: 'Đang triển khai', value: stats.inProgress, subValue: '24 dự án', color: '#0284c7' },
                { label: 'Chậm tiến độ', value: stats.delayed, subValue: '3 NSNN • 1 Ngoài NSNN', color: '#ef4444' },
                { label: 'Nguy cơ chậm', value: stats.riskCount, subValue: '2 NSNN • 1 Ngoài NSNN', color: '#f59e0b' }
              ]}
            />
          </div>

          {/* 6 KPI Cards Row */}
          <div className="kpi-grid-6" style={{ marginBottom: 16 }}>
            <KPICard
              title="Tổng dự án trọng điểm"
              value={stats.total}
              icon={<Building2 size={16} />}
              iconBg="#E8F2FB"
              iconColor="#1769AA"
              subText="20 NSNN • 14 Ngoài NSNN"
            />
            <KPICard
              title="Đang triển khai"
              value={stats.inProgress}
              icon={<TrendingUp size={16} />}
              iconBg="#f0f9ff"
              iconColor="#0284c7"
              subText="14 NSNN • 10 Ngoài NSNN"
            />
            <KPICard
              title="Chậm tiến độ"
              value={stats.delayed}
              valueColor="#D64545"
              icon={<AlertTriangle size={16} />}
              iconBg="#fef2f2"
              iconColor="#D64545"
              subText="3 NSNN • 1 Ngoài NSNN"
              trendText="Cần chỉ đạo gấp"
              trendColor="#D64545"
              highlight={stats.delayed > 0}
              onClick={() => handleSwitchMode('DELAYED')}
            />
            <KPICard
              title="Nguy cơ chậm"
              value={stats.riskCount}
              valueColor="#d97706"
              icon={<Clock size={16} />}
              iconBg="#fffbeb"
              iconColor="#d97706"
              subText="2 NSNN • 1 Ngoài NSNN"
              trendText="Cần theo dõi sát"
              onClick={() => handleSwitchMode('DELAYED')}
            />
            <KPICard
              title="Tổng mức đầu tư"
              value={Number(stats.totalInvestment).toLocaleString('vi-VN')}
              unit="tỷ"
              icon={<DollarSign size={16} />}
              iconBg="#faf5ff"
              iconColor="#7c3aed"
              subText={`NSNN: ${stats.nsnnInvestment} tỷ • Ngoài: ${stats.outsideNsnnInvestment} tỷ`}
            />
            <KPICard
              title="Đã giải ngân / Thực hiện"
              value={Number(stats.totalDisbursed).toLocaleString('vi-VN')}
              unit="tỷ"
              icon={<CheckCircle2 size={16} />}
              iconBg="#f0fdf4"
              iconColor="#159A75"
              subText={`Đạt ${(Number(stats.totalDisbursed) / Number(stats.totalInvestment) * 100).toFixed(1)}%`}
              trendText="↑ Tiến độ tốt"
              trendColor="#159A75"
            />
          </div>

          {/* Map Preview in Overview Mode */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0f172a', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Compass size={16} color="#0284c7" />
                Bản đồ số không gian 34 dự án trọng điểm (Vốn NSNN & Ngoài NSNN)
              </div>
              <Button 
                type="link" 
                onClick={() => handleSwitchMode('MAP')} 
                style={{ fontWeight: 600, color: '#0284c7', fontSize: 12.5 }}
              >
                Mở rộng bản đồ full màn hình →
              </Button>
            </div>
            <HungYenProjectMap
              projects={allProjects}
              selectedProject={selectedProject}
              onSelectProject={handleOpenDetail}
              fullHeight={false}
            />
          </div>

          {/* Row Charts: Cơ cấu Nguồn vốn & Phân bố Lĩnh vực so sánh NSNN vs Ngoài NSNN */}
          <Row gutter={[14, 14]} style={{ marginBottom: 16 }}>
            {/* Phân bố 3 lĩnh vực so sánh NSNN vs Ngoài NSNN */}
            <Col xs={24} lg={14}>
              <div className="gov-card">
                <div className="gov-card-header">
                  <span className="gov-card-title">Phân bố dự án theo ba lĩnh vực (NSNN vs Ngoài NSNN)</span>
                  <span style={{ fontSize: 12, color: '#64748b' }}>So sánh cơ cấu nguồn vốn theo từng ngành</span>
                </div>
                <div style={{ height: 230 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sectorCountData} margin={{ top: 10, right: 20, left: -15, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="sector" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <RechartsTooltip />
                      <Legend wrapperStyle={{ fontSize: 11.5 }} />
                      <Bar dataKey="nsnn" name="Vốn NSNN" fill="#0284c7" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ngoaiNsnn" name="Ngoài NSNN" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="delayed" name="Chậm tiến độ" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>

            {/* Cơ cấu Tổng mức đầu tư Donut */}
            <Col xs={24} lg={10}>
              <div className="gov-card">
                <div className="gov-card-header">
                  <span className="gov-card-title">Cơ cấu Tổng mức đầu tư dự án</span>
                  <Tag color="blue">{Number(stats.totalInvestment).toLocaleString('vi-VN')} Tỷ VNĐ</Tag>
                </div>
                <div style={{ height: 230 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={capitalDonutData}
                        cx="50%"
                        cy="45%"
                        innerRadius={48}
                        outerRadius={78}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {capitalDonutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip formatter={(val: any) => `${Number(val).toLocaleString('vi-VN')} tỷ`} />
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

          {/* Bảng dữ liệu chi tiết toàn bộ dự án với bộ lọc giai đoạn */}
          <div className="gov-card">
            <div className="gov-card-header" style={{ flexWrap: 'wrap', gap: 10 }}>
              <div>
                <span className="gov-card-title">
                  Danh sách chi tiết 34 dự án trọng điểm
                </span>
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
                  Bao gồm cả dự án sử dụng NSNN (20 DA) và ngoài NSNN (14 DA)
                </div>
              </div>

              {/* Segmented lọc giai đoạn */}
              <Segmented
                value={stageTabFilter}
                onChange={(val) => setStageTabFilter(val as string)}
                options={[
                  { label: `Tất cả (${allProjects.length})`, value: 'ALL' },
                  { label: `1. Thủ tục ĐT (${stats.stageProcedureCount})`, value: 'THU_TUC_DAU_TU' },
                  { label: `2. GPMB (${stats.stageClearanceCount})`, value: 'GIAI_PHONG_MAT_BANG' },
                  { label: `3. Thi công (${stats.stageConstructionCount})`, value: 'THI_CONG_XAY_DUNG' },
                  { label: `4. Đôn đốc chậm (${delayedAndRiskProjects.length})`, value: 'EXPEDITE' }
                ]}
              />
            </div>

            <Table
              dataSource={displayProjects}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 8, showSizeChanger: true }}
              size="middle"
              bordered
              scroll={{ x: 1250 }}
            />
          </div>
        </>
      )}

      {/* Expedite Modal (Chuẩn giao diện Ảnh 3 đồng nhất với Bản đồ) */}
      <ExpediteModal
        open={expediteModalOpen}
        project={projectToExpedite}
        onClose={() => setExpediteModalOpen(false)}
        onSuccess={() => {
          setRefreshKey(k => k + 1);
          if (selectedProject?.id === projectToExpedite?.id) {
            setSelectedProject({ ...projectToExpedite! });
          }
        }}
      />

      {/* Detail Dossier Drawer */}
      <ProjectDetailDrawer
        project={selectedProject}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
};
