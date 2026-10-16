import React, { useState, useMemo } from 'react';
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
  Tooltip,
  Badge,
  Card
} from 'antd';
import { 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  DollarSign, 
  Eye, 
  MapPin, 
  Clock, 
  Layers, 
  Send, 
  FileCheck, 
  ShieldAlert, 
  FileText, 
  Landmark, 
  Hammer, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import dayjs from 'dayjs';
import { useApp } from '../../context/AppContext';
import { ProjectService } from '../../services/dataService';
import { ProjectItem, CapitalSource, ProjectStage } from '../../types';
import { FilterBar } from '../../components/common/FilterBar';
import { KPICard } from '../../components/common/KPICard';
import { ExecutiveBanner } from '../../components/common/ExecutiveBanner';
import { ProjectDetailDrawer } from './ProjectDetailDrawer';
import { ExpediteModal } from '../../components/projects/ExpediteModal';

const { TextArea } = Input;

interface ProjectCapitalSourcePageProps {
  capitalSource: CapitalSource; // 'NSNN' | 'NGOAI_NSNN'
  title: string;
  subtitle: string;
}

export const ProjectCapitalSourcePage: React.FC<ProjectCapitalSourcePageProps> = ({
  capitalSource,
  title,
  subtitle
}) => {
  const { filters } = useApp();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Tab lọc giai đoạn: ALL | THU_TUC_DAU_TU | GIAI_PHONG_MAT_BANG | THI_CONG_XAY_DUNG | EXPEDITE
  const [activeStageTab, setActiveStageTab] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  // Expedite modal state
  const [expediteModalOpen, setExpediteModalOpen] = useState(false);
  const [projectToExpedite, setProjectToExpedite] = useState<ProjectItem | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Fetch projects
  const rawProjectList = useMemo(() => {
    return ProjectService.getAll({
      ...filters,
      capitalSource: capitalSource
    });
  }, [filters, capitalSource, refreshKey]);

  let projectList = [...rawProjectList];

  if (activeStageTab === 'THU_TUC_DAU_TU') {
    projectList = projectList.filter(p => p.currentStage === 'THU_TUC_DAU_TU');
  } else if (activeStageTab === 'GIAI_PHONG_MAT_BANG') {
    projectList = projectList.filter(p => p.currentStage === 'GIAI_PHONG_MAT_BANG');
  } else if (activeStageTab === 'THI_CONG_XAY_DUNG') {
    projectList = projectList.filter(p => p.currentStage === 'THI_CONG_XAY_DUNG');
  } else if (activeStageTab === 'EXPEDITE') {
    projectList = projectList.filter(p => p.status === 'CHAM_TIEN_DO' || p.expediteInfo?.riskLevel === 'NGUY_CO_CHAM');
  }

  if (statusFilter !== 'ALL') {
    projectList = projectList.filter(p => p.status === statusFilter);
  }

  // Toàn bộ dự án thuộc nguồn vốn này để tính KPI chuẩn
  const allCapitalProjects = useMemo(() => {
    return ProjectService.getAll({ capitalSource });
  }, [capitalSource, refreshKey]);

  const stats = useMemo(() => {
    return ProjectService.getStats(allCapitalProjects);
  }, [allCapitalProjects]);

  const handleOpenDetail = (project: ProjectItem) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const handleOpenExpedite = (project: ProjectItem) => {
    setProjectToExpedite(project);
    setExpediteModalOpen(true);
  };

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "MÃ DỰ ÁN,TÊN DỰ ÁN,NGUỒN VỐN,CHỦ TRƯƠNG ĐẦU TƯ,GIAI ĐOẠN,TIẾN ĐỘ GPMB (%),ĐÃ KIỂM ĐẾM,ĐÃ BÀN GIAO,TIẾN ĐỘ THI CÔNG (%),TỔNG MỨC ĐẦU TƯ (TỶ),ĐÃ GIẢI NGÂN (TỶ),TRẠNG THÁI,CHẬM Ở ĐÂU,CƠ QUAN CHỦ TRÌ\n";
    projectList.forEach(p => {
      const nameEsc = `"${p.name.replace(/"/g, '""')}"`;
      const policyStr = p.procedureStage?.hasApprovedPolicy ? `Đã có (${p.procedureStage.policyDecisionNo || ''})` : 'Chưa có';
      const stageStr = p.currentStage;
      const gpmbPercent = p.landClearanceStage?.handedOverPercent || p.landClearanceProgress;
      const surveyedArea = p.landClearanceStage ? `${p.landClearanceStage.surveyedArea} ha (${p.landClearanceStage.surveyedPercent}%)` : '';
      const handedOverArea = p.landClearanceStage ? `${p.landClearanceStage.handedOverArea} ha (${p.landClearanceStage.handedOverPercent}%)` : '';
      const constrProgress = p.constructionStage?.constructionProgress || p.progress;
      const delayedLoc = `"${(p.expediteInfo?.bottleneckLocation || '').replace(/"/g, '""')}"`;
      const leadDept = `"${(p.expediteInfo?.leadDepartment || p.investor).replace(/"/g, '""')}"`;
      csv += `${p.code},${nameEsc},${p.capitalSource},"${policyStr}",${stageStr},${gpmbPercent},"${surveyedArea}","${handedOverArea}",${constrProgress},${p.totalInvestment},${p.disbursedAmount},${p.status},${delayedLoc},${leadDept}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Du_An_${capitalSource}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất ${projectList.length} dự án ra CSV!`);
  };

  const sectorMap: Record<string, string> = {
    GIAO_THONG: 'Giao thông',
    XAY_DUNG_DAN_DUNG: 'XD Dân dụng & KCN',
    NONG_NGHIEP: 'Nông nghiệp & Năng lượng'
  };

  // Base Columns: Thiết lập động chuẩn theo yêu cầu của lãnh đạo
  const columns = capitalSource === 'NSNN' ? [
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
            <Tag color="blue" style={{ fontSize: 10, padding: '0 5px', lineHeight: '18px', borderRadius: 4 }}>
              Vốn NSNN
            </Tag>
          </div>
          <a 
            onClick={() => handleOpenDetail(record)}
            style={{ fontWeight: 600, color: '#1e293b', fontSize: 13, lineHeight: 1.4, display: 'inline-block', marginTop: 2 }}
          >
            {record.name}
          </a>
          <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
            <MapPin size={11} color="#0284c7" /> {record.district}
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
      width: 145,
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
      width: 140,
      align: 'right' as const,
      sorter: (a: ProjectItem, b: ProjectItem) => a.totalInvestment - b.totalInvestment,
      render: (v: number) => (
        <strong style={{ color: '#0f172a', fontSize: 13 }}>
          {v.toLocaleString('vi-VN')} tỷ
        </strong>
      )
    },
    {
      title: 'Tỷ lệ giải ngân',
      key: 'disbursedAmount',
      width: 175,
      align: 'right' as const,
      sorter: (a: ProjectItem, b: ProjectItem) => (a.disbursedAmount / a.totalInvestment) - (b.disbursedAmount / b.totalInvestment),
      render: (_: any, r: ProjectItem) => {
        const percent = Math.round((r.disbursedAmount / r.totalInvestment) * 100);
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
              <span style={{ fontSize: 11, color: '#64748b' }}>Đã GN: {r.disbursedAmount.toLocaleString('vi-VN')} tỷ</span>
              <strong style={{ color: percent >= 70 ? '#15803d' : percent >= 40 ? '#0284c7' : '#dc2626', fontSize: 12.5 }}>
                {percent}%
              </strong>
            </div>
            <Progress 
              percent={percent} 
              size="small" 
              showInfo={false}
              strokeColor={percent >= 70 ? '#10b981' : percent >= 40 ? '#0284c7' : '#ef4444'} 
            />
          </div>
        );
      }
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 120,
      align: 'center' as const,
      render: (_: any, record: ProjectItem) => {
        const isProblem = record.status === 'CHAM_TIEN_DO' || record.expediteInfo?.riskLevel === 'NGUY_CO_CHAM';
        return (
          <Space orientation="horizontal" size={4}>
            <Tooltip title="Xem chi tiết hồ sơ">
              <Button 
                size="small" 
                icon={<Eye size={12} />}
                onClick={() => handleOpenDetail(record)}
                style={{ fontSize: 11.5 }}
              >
                Hồ sơ
              </Button>
            </Tooltip>
            {isProblem && (
              <Tooltip title="Ban hành văn bản đôn đốc chỉ đạo">
                <Button 
                  size="small" 
                  type="primary" 
                  danger
                  icon={<Send size={11} />}
                  onClick={() => handleOpenExpedite(record)}
                  style={{ fontSize: 11.5, padding: '0 6px' }}
                >
                  Đôn đốc
                </Button>
              </Tooltip>
            )}
          </Space>
        );
      }
    }
  ] : [
    // Bảng Dự án Ngoài NSNN: STT; Mã & tên dự án như cũ ; nhà đầu tư; giai đoạn ; trạng thái; lĩnh vực; tổng mức đầu tư; Thao tác
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
      width: 270,
      render: (_: any, record: ProjectItem) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#d97706', fontWeight: 700, fontSize: 11.5 }}>{record.code}</span>
            <Tag color="gold" style={{ fontSize: 10, padding: '0 5px', lineHeight: '18px', borderRadius: 4 }}>
              Ngoài NSNN
            </Tag>
          </div>
          <a 
            onClick={() => handleOpenDetail(record)}
            style={{ fontWeight: 600, color: '#1e293b', fontSize: 13, lineHeight: 1.4, display: 'inline-block', marginTop: 2 }}
          >
            {record.name}
          </a>
          <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
            <MapPin size={11} color="#d97706" /> {record.district}
          </div>
        </div>
      )
    },
    {
      title: 'Nhà đầu tư',
      dataIndex: 'investor',
      key: 'investor',
      width: 220,
      render: (inv: string) => (
        <div style={{ fontSize: 12, fontWeight: 600, color: '#0f172a', lineHeight: 1.35 }}>
          <Building2 size={12} color="#0284c7" style={{ display: 'inline', marginRight: 4 }} />
          {inv}
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
      width: 145,
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
      width: 140,
      align: 'right' as const,
      sorter: (a: ProjectItem, b: ProjectItem) => a.totalInvestment - b.totalInvestment,
      render: (v: number) => (
        <strong style={{ color: '#0f172a', fontSize: 13 }}>
          {v.toLocaleString('vi-VN')} tỷ
        </strong>
      )
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 120,
      align: 'center' as const,
      render: (_: any, record: ProjectItem) => {
        const isProblem = record.status === 'CHAM_TIEN_DO' || record.expediteInfo?.riskLevel === 'NGUY_CO_CHAM';
        return (
          <Space orientation="horizontal" size={4}>
            <Tooltip title="Xem chi tiết hồ sơ">
              <Button 
                size="small" 
                icon={<Eye size={12} />}
                onClick={() => handleOpenDetail(record)}
                style={{ fontSize: 11.5 }}
              >
                Hồ sơ
              </Button>
            </Tooltip>
            {isProblem && (
              <Tooltip title="Ban hành văn bản đôn đốc chỉ đạo">
                <Button 
                  size="small" 
                  type="primary" 
                  danger
                  icon={<Send size={11} />}
                  onClick={() => handleOpenExpedite(record)}
                  style={{ fontSize: 11.5, padding: '0 6px' }}
                >
                  Đôn đốc
                </Button>
              </Tooltip>
            )}
          </Space>
        );
      }
    }
  ];

  return (
    <div>
      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {capitalSource === 'NSNN' ? (
              <Landmark size={22} color="#0284c7" />
            ) : (
              <Building2 size={22} color="#d97706" />
            )}
            <h1 style={{ fontSize: 19, fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {title}
            </h1>
          </div>
          <p style={{ fontSize: 12.5, color: '#64748b', margin: '3px 0 0 0' }}>
            {subtitle}
          </p>
        </div>

        {/* Nút thao tác nhanh */}
        <Space>
          <Button 
            type="primary"
            danger
            icon={<AlertTriangle size={14} />}
            onClick={() => setActiveStageTab('EXPEDITE')}
            style={{ fontWeight: 600 }}
          >
            Dự án chậm & Nguy cơ ({capitalSource === 'NSNN' ? stats.nsnnDelayed + stats.nsnnRisk : stats.outsideNsnnDelayed + stats.outsideNsnnRisk})
          </Button>
        </Space>
      </div>

      {/* Filter Bar */}
      <FilterBar onExportCSV={handleExportCSV} />

      {/* Executive Summary Banner */}
      <div style={{ marginBottom: 14 }}>
        <ExecutiveBanner
          title={`Tình hình thực hiện các dự án ${capitalSource === 'NSNN' ? 'sử dụng NSNN' : 'ngoài NSNN'}`}
          summary={
            capitalSource === 'NSNN'
              ? `Tổng số 20 dự án sử dụng vốn NSNN với tổng mức đầu tư ${Number(stats.nsnnInvestment).toLocaleString('vi-VN')} tỷ VNĐ, đã giải ngân ${Number(stats.nsnnDisbursed).toLocaleString('vi-VN')} tỷ VNĐ. Hiện có ${stats.nsnnDelayed} dự án chậm tiến độ và ${stats.nsnnRisk} dự án có nguy cơ chậm cần đôn đốc tháo gỡ GPMB.`
              : `Tổng số 14 dự án Ngoài NSNN (vốn FDI & Doanh nghiệp) với tổng mức đầu tư ${Number(stats.outsideNsnnInvestment).toLocaleString('vi-VN')} tỷ VNĐ, đã giải ngân thực hiện ${Number(stats.outsideNsnnDisbursed).toLocaleString('vi-VN')} tỷ VNĐ. Hiện có ${stats.outsideNsnnDelayed} dự án chậm và ${stats.outsideNsnnRisk} dự án cần hỗ trợ giải phóng mặt bằng.`
          }
          actionText="Xem danh mục chậm hạn & chỉ đạo"
          onActionClick={() => setActiveStageTab('EXPEDITE')}
          metrics={[
            { 
              label: 'Tổng dự án', 
              value: capitalSource === 'NSNN' ? stats.nsnnCount : stats.outsideNsnnCount, 
              color: '#0f172a' 
            },
            { 
              label: 'Tổng mức đầu tư', 
              value: capitalSource === 'NSNN' ? `${stats.nsnnInvestment} tỷ` : `${stats.outsideNsnnInvestment} tỷ`, 
              color: '#0284c7' 
            },
            { 
              label: 'Chậm tiến độ', 
              value: capitalSource === 'NSNN' ? stats.nsnnDelayed : stats.outsideNsnnDelayed, 
              subValue: 'Vướng GPMB/Thủ tục', 
              color: '#ef4444' 
            },
            { 
              label: 'Nguy cơ chậm', 
              value: capitalSource === 'NSNN' ? stats.nsnnRisk : stats.outsideNsnnRisk, 
              subValue: 'Cần đôn đốc', 
              color: '#f59e0b' 
            }
          ]}
        />
      </div>

      {/* KPI Cards Row (Phù hợp với từng nguồn vốn) */}
      <div className="kpi-grid-6" style={{ marginBottom: 14 }}>
        <KPICard
          title={capitalSource === 'NSNN' ? 'Dự án sử dụng NSNN' : 'Dự án ngoài NSNN'}
          value={capitalSource === 'NSNN' ? stats.nsnnCount : stats.outsideNsnnCount}
          icon={capitalSource === 'NSNN' ? <Landmark size={16} /> : <Building2 size={16} />}
          iconBg={capitalSource === 'NSNN' ? '#e0f2fe' : '#fef3c7'}
          iconColor={capitalSource === 'NSNN' ? '#0284c7' : '#d97706'}
          subText={capitalSource === 'NSNN' ? 'Đầu tư công cấp tỉnh' : 'Vốn doanh nghiệp / FDI'}
        />

        <KPICard
          title="Tổng mức đầu tư"
          value={Number(capitalSource === 'NSNN' ? stats.nsnnInvestment : stats.outsideNsnnInvestment).toLocaleString('vi-VN')}
          unit="tỷ"
          icon={<DollarSign size={16} />}
          iconBg="#faf5ff"
          iconColor="#7c3aed"
          subText="Tổng kinh phí phê duyệt"
        />

        <KPICard
          title={capitalSource === 'NSNN' ? 'Đã giải ngân' : 'Đã thực hiện'}
          value={Number(capitalSource === 'NSNN' ? stats.nsnnDisbursed : stats.outsideNsnnDisbursed).toLocaleString('vi-VN')}
          unit="tỷ"
          icon={<CheckCircle2 size={16} />}
          iconBg="#ecfdf5"
          iconColor="#10b981"
          subText={
            capitalSource === 'NSNN'
              ? `Đạt ${(Number(stats.nsnnDisbursed) / Number(stats.nsnnInvestment) * 100).toFixed(1)}% KH vốn`
              : `Đạt ${(Number(stats.outsideNsnnDisbursed) / Number(stats.outsideNsnnInvestment) * 100).toFixed(1)}% tổng vốn`
          }
        />

        <KPICard
          title="Chậm tiến độ"
          value={capitalSource === 'NSNN' ? stats.nsnnDelayed : stats.outsideNsnnDelayed}
          valueColor="#dc2626"
          icon={<AlertTriangle size={16} />}
          iconBg="#fef2f2"
          iconColor="#dc2626"
          subText="Cần xử lý gấp"
          highlight={(capitalSource === 'NSNN' ? stats.nsnnDelayed : stats.outsideNsnnDelayed) > 0}
          onClick={() => setActiveStageTab('EXPEDITE')}
        />

        <KPICard
          title="Nguy cơ chậm"
          value={capitalSource === 'NSNN' ? stats.nsnnRisk : stats.outsideNsnnRisk}
          valueColor="#d97706"
          icon={<Clock size={16} />}
          iconBg="#fffbeb"
          iconColor="#d97706"
          subText="Cần theo dõi sát"
          onClick={() => setActiveStageTab('EXPEDITE')}
        />

        <KPICard
          title="Giai đoạn GPMB"
          value={allCapitalProjects.filter(p => p.currentStage === 'GIAI_PHONG_MAT_BANG').length}
          icon={<Layers size={16} />}
          iconBg="#f1f5f9"
          iconColor="#475569"
          subText="Đang chi trả & bồi thường"
          onClick={() => setActiveStageTab('GIAI_PHONG_MAT_BANG')}
        />
      </div>

      {/* Tabs / Filter theo các giai đoạn mà người dùng quan tâm */}
      <div style={{ 
        background: '#ffffff', 
        padding: '12px 16px', 
        borderRadius: 8, 
        border: '1px solid #e2e8f0', 
        marginBottom: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#334155' }}>
            Xem theo giai đoạn quan tâm:
          </span>
          <Segmented
            value={activeStageTab}
            onChange={(val) => setActiveStageTab(val as string)}
            options={[
              { label: `Tất cả (${allCapitalProjects.length})`, value: 'ALL' },
              { 
                label: `1. Thủ tục đầu tư (${allCapitalProjects.filter(p => p.currentStage === 'THU_TUC_DAU_TU').length})`, 
                value: 'THU_TUC_DAU_TU' 
              },
              { 
                label: `2. Giải phóng mặt bằng (${allCapitalProjects.filter(p => p.currentStage === 'GIAI_PHONG_MAT_BANG').length})`, 
                value: 'GIAI_PHONG_MAT_BANG' 
              },
              { 
                label: `3. Thi công xây dựng (${allCapitalProjects.filter(p => p.currentStage === 'THI_CONG_XAY_DUNG').length})`, 
                value: 'THI_CONG_XAY_DUNG' 
              },
              { 
                label: `4. Đôn đốc chậm hạn & Nguy cơ (${allCapitalProjects.filter(p => p.status === 'CHAM_TIEN_DO' || p.expediteInfo?.riskLevel === 'NGUY_CO_CHAM').length})`, 
                value: 'EXPEDITE' 
              }
            ]}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12.5, color: '#64748b' }}>Trạng thái:</span>
          <Select
            value={statusFilter}
            onChange={setStatusFilter}
            style={{ width: 160 }}
            size="small"
            options={[
              { label: 'Tất cả trạng thái', value: 'ALL' },
              { label: 'Đang triển khai', value: 'DANG_TRIEN_KHAI' },
              { label: 'Chậm tiến độ', value: 'CHAM_TIEN_DO' },
              { label: 'Chuẩn bị đầu tư', value: 'CHUAN_BI_DAU_TU' },
              { label: 'Đã hoàn thành', value: 'HOAN_THANH' }
            ]}
          />
        </div>
      </div>

      {/* Banner cảnh báo khi xem tab Đôn đốc */}
      {activeStageTab === 'EXPEDITE' && (
        <div style={{ 
          background: '#fef2f2', 
          border: '1px solid #fca5a5', 
          borderRadius: 8, 
          padding: '12px 16px', 
          marginBottom: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShieldAlert size={24} color="#dc2626" />
            <div>
              <div style={{ fontWeight: 700, color: '#991b1b', fontSize: 14 }}>
                DANH MỤC DỰ ÁN CẦN LÃNH ĐẠO TỈNH TẬP TRUNG ĐÔN ĐỐC & THÁO GỠ ĐIỂM NGHẼN
              </div>
              <div style={{ fontSize: 12.5, color: '#7f1d1d' }}>
                Xác định rõ dự án đang chậm ở giai đoạn nào, điểm nghẽn tại đâu, trách nhiệm cơ quan chủ trì và cơ quan phối hợp giải quyết.
              </div>
            </div>
          </div>
          <Button 
            type="primary" 
            danger
            icon={<Send size={13} />}
            onClick={() => {
              if (projectList.length > 0) {
                handleOpenExpedite(projectList[0]);
              }
            }}
          >
            Chỉ đạo hàng loạt
          </Button>
        </div>
      )}

      {/* Main Table */}
      <div className="gov-card">
        <div className="gov-card-header">
          <span className="gov-card-title">
            Danh sách chi tiết {projectList.length} dự án ({capitalSource === 'NSNN' ? 'Vốn NSNN' : 'Ngoài NSNN'})
          </span>
          <span style={{ fontSize: 12, color: '#0284c7', fontWeight: 600 }}>
            Hệ thống giám sát điều hành điện tử tỉnh Hưng Yên
          </span>
        </div>

        <Table
          dataSource={projectList}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10, showSizeChanger: true }}
          size="middle"
          bordered
          scroll={{ x: 1300 }}
        />
      </div>

      {/* Expedite Modal (Ban hành chỉ đạo đôn đốc chuẩn theo biểu mẫu lãnh đạo) */}
      <ExpediteModal
        project={projectToExpedite}
        open={expediteModalOpen}
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
