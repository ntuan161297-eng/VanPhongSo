import React, { useState } from 'react';
import { 
  Drawer, 
  Tabs, 
  Descriptions, 
  Tag, 
  Progress, 
  Timeline, 
  Alert, 
  Space, 
  Table, 
  Button, 
  Row,
  Col,
  Tooltip,
  Collapse
} from 'antd';
import { 
  Building2, 
  MapPin, 
  FileText, 
  AlertTriangle, 
  DollarSign, 
  Navigation,
  CheckCircle2,
  Clock,
  Layers,
  FileCheck,
  Hammer,
  Send,
  ShieldAlert,
  Plus,
  Edit,
  Trash2,
  ChevronRight,
  Check,
  Info
} from 'lucide-react';
import { ProjectItem, ProcedureItem } from '../../types';
import { StatusBadge } from '../../components/common/StatusBadge';
import { ExpediteModal } from '../../components/projects/ExpediteModal';

interface ProjectDetailDrawerProps {
  project: ProjectItem | null;
  open: boolean;
  onClose: () => void;
}

export const ProjectDetailDrawer: React.FC<ProjectDetailDrawerProps> = ({
  project,
  open,
  onClose
}) => {
  const [expediteModalOpen, setExpediteModalOpen] = useState(false);
  const [expandedProcs, setExpandedProcs] = useState<string[]>(['proc-1', 'proc-4']);

  if (!project) return null;

  const sectorLabels: Record<string, string> = {
    GIAO_THONG: 'Hạ tầng Giao thông',
    XAY_DUNG_DAN_DUNG: 'Xây dựng Dân dụng & Công nghiệp',
    NONG_NGHIEP: 'Nông nghiệp & Thủy lợi'
  };

  const capitalLabels: Record<string, string> = {
    NSNN: 'Vốn Ngân sách Nhà nước (NSNN)',
    NGOAI_NSNN: 'Ngoài Ngân sách (Vốn Doanh nghiệp / FDI)'
  };

  const stageLabels: Record<string, string> = {
    THU_TUC_DAU_TU: 'Thủ tục đầu tư',
    GIAI_PHONG_MAT_BANG: 'Giải phóng mặt bằng',
    THI_CONG_XAY_DUNG: 'Thi công xây dựng',
    HOAN_THANH: 'Hoàn thành đưa vào vận hành'
  };

  // Cây thủ tục mẫu chuẩn 100% Ảnh 1
  const defaultProcedures: ProcedureItem[] = [
    {
      id: 'proc-1',
      order: 1,
      name: 'Thủ tục 1: Các thủ tục về đầu tư, doanh nghiệp, góp vốn',
      status: 'HOAN_THANH_DUNG_HAN',
      statusLabel: 'Đã hoàn thành đúng hạn',
      deadline: '31/08/2027',
      completedDate: '27/07/2026',
      taskCount: 2,
      leadDept: project.investor || 'Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng',
      coDepts: ['Sở Tài chính'],
      directDocsCount: 0,
      updatedTaskCount: 2,
      completedTaskCount: 2,
      tasks: [
        { id: 't1-1', name: 'Chấp thuận chủ trương đầu tư dự án', status: 'HOAN_THANH', deadline: '15/06/2026', completedDate: '10/06/2026', leadDept: project.investor, coDepts: ['Sở KH&ĐT'] },
        { id: 't1-2', name: 'Đăng ký doanh nghiệp dự án và góp vốn điều lệ', status: 'HOAN_THANH', deadline: '31/08/2027', completedDate: '27/07/2026', leadDept: project.investor, coDepts: ['Sở Tài chính'] }
      ]
    },
    {
      id: 'proc-2',
      order: 2,
      name: 'Thủ tục 2: Quy hoạch, khảo sát, chuẩn bị dự án',
      status: 'HOAN_THANH_DUNG_HAN',
      statusLabel: 'Đã hoàn thành đúng hạn',
      deadline: '15/06/2027',
      completedDate: '11/07/2026',
      taskCount: 5,
      leadDept: project.investor || 'Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng',
      coDepts: ['Sở Xây dựng', 'Sở Tài chính'],
      directDocsCount: 0,
      updatedTaskCount: 5,
      completedTaskCount: 5,
      tasks: [
        { id: 't2-1', name: 'Khảo sát địa hình, địa chất công trình', status: 'HOAN_THANH', deadline: '10/04/2026', completedDate: '08/04/2026', leadDept: project.investor, coDepts: ['Sở Xây dựng'] },
        { id: 't2-2', name: 'Lập và phê duyệt đồ án quy hoạch chi tiết 1/500', status: 'HOAN_THANH', deadline: '25/05/2026', completedDate: '20/05/2026', leadDept: project.investor, coDepts: ['Sở Xây dựng'] },
        { id: 't2-3', name: 'Thẩm định Báo cáo nghiên cứu khả thi đầu tư xây dựng', status: 'HOAN_THANH', deadline: '15/06/2026', completedDate: '12/06/2026', leadDept: project.investor, coDepts: ['Sở Xây dựng'] },
        { id: 't2-4', name: 'Lấy ý kiến cộng đồng dân cư nơi thực hiện dự án', status: 'HOAN_THANH', deadline: '30/06/2026', completedDate: '28/06/2026', leadDept: project.investor, coDepts: ['UBND huyện'] },
        { id: 't2-5', name: 'Phê duyệt dự án đầu tư xây dựng', status: 'HOAN_THANH', deadline: '15/06/2027', completedDate: '11/07/2026', leadDept: project.investor, coDepts: ['Sở KH&ĐT'] }
      ]
    },
    {
      id: 'proc-3',
      order: 3,
      name: 'Thủ tục 3: Môi trường, rừng, tài nguyên',
      status: 'HOAN_THANH_DUNG_HAN',
      statusLabel: 'Đã hoàn thành đúng hạn',
      deadline: '30/04/2027',
      completedDate: '12/07/2026',
      taskCount: 1,
      leadDept: project.investor || 'Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng',
      coDepts: ['Sở Nông nghiệp và Môi trường', 'Sở Tài chính'],
      directDocsCount: 0,
      updatedTaskCount: 1,
      completedTaskCount: 1,
      tasks: [
        { id: 't3-1', name: 'Thẩm định và phê duyệt Báo cáo đánh giá tác động môi trường (ĐTM)', status: 'HOAN_THANH', deadline: '30/04/2027', completedDate: '12/07/2026', leadDept: project.investor, coDepts: ['Sở TN&MT'] }
      ]
    },
    {
      id: 'proc-4',
      order: 4,
      name: 'Thủ tục 4: Đất đai, GPMB, mặt bằng',
      status: project.status === 'CHAM_TIEN_DO' ? 'CHAM_TIEN_DO' : 'CON_HAN',
      statusLabel: project.status === 'CHAM_TIEN_DO' ? 'Chậm tiến độ' : 'Còn hạn',
      deadline: '31/10/2027',
      taskCount: 5,
      leadDept: project.investor || 'Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng',
      coDepts: ['Sở Nông nghiệp và Môi trường', 'Sở Tài chính', `UBND Xã ${project.district}`],
      directDocsCount: 0,
      updatedTaskCount: 1,
      completedTaskCount: 1,
      tasks: [
        { id: 't4-1', name: 'Thông báo thu hồi đất phục vụ dự án', status: 'HOAN_THANH', deadline: '15/08/2026', completedDate: '10/08/2026', leadDept: project.investor, coDepts: ['UBND huyện'] },
        { id: 't4-2', name: 'Hoàn thành hồ sơ, thủ tục thu hồi đất, bồi thường, hỗ trợ, tái định cư/GPMB (nếu Nhà nước thu hồi đất)', status: project.status === 'CHAM_TIEN_DO' ? 'CHAM_TIEN_DO' : 'CON_HAN', deadline: '05/10/2026', leadDept: project.investor, coDepts: ['UBND huyện'] },
        { id: 't4-3', name: 'Kiểm kê hiện trạng đất đai và tài sản trên đất', status: 'CON_HAN', deadline: '15/11/2026', leadDept: project.investor, coDepts: ['UBND huyện'] },
        { id: 't4-4', name: 'Lập và niêm yết công khai phương án bồi thường, hỗ trợ', status: 'CON_HAN', deadline: '30/12/2026', leadDept: project.investor, coDepts: ['UBND huyện'] },
        { id: 't4-5', name: 'Chi trả tiền bồi thường và bàn giao mốc giới mặt bằng sạch', status: 'CON_HAN', deadline: '31/10/2027', leadDept: project.investor, coDepts: ['UBND huyện'] }
      ]
    },
    {
      id: 'proc-5',
      order: 5,
      name: 'Thủ tục 5: Thiết kế, xây dựng, PCCC, đấu nối',
      status: 'CON_HAN',
      statusLabel: 'Còn hạn',
      deadline: '30/11/2027',
      taskCount: 6,
      leadDept: project.investor || 'Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng',
      coDepts: ['Sở Tài chính', 'Sở Xây dựng'],
      directDocsCount: 0,
      updatedTaskCount: 1,
      completedTaskCount: 1,
      tasks: [
        { id: 't5-1', name: 'Khảo sát lập thiết kế bản vẽ thi công', status: 'HOAN_THANH', deadline: '10/09/2026', completedDate: '05/09/2026', leadDept: project.investor, coDepts: ['Sở Xây dựng'] },
        { id: 't5-2', name: 'Thẩm duyệt thiết kế phòng cháy chữa cháy (PCCC)', status: 'CON_HAN', deadline: '15/12/2026', leadDept: project.investor, coDepts: ['Công an tỉnh'] },
        { id: 't5-3', name: 'Thỏa thuận đấu nối hạ tầng giao thông và cấp thoát nước', status: 'CON_HAN', deadline: '20/01/2027', leadDept: project.investor, coDepts: ['Sở GTVT'] },
        { id: 't5-4', name: 'Thẩm định hồ sơ thiết kế kỹ thuật / bản vẽ thi công', status: 'CON_HAN', deadline: '15/03/2027', leadDept: project.investor, coDepts: ['Sở Xây dựng'] },
        { id: 't5-5', name: 'Cấp Giấy phép xây dựng công trình', status: 'CON_HAN', deadline: '30/05/2027', leadDept: project.investor, coDepts: ['Sở Xây dựng'] },
        { id: 't5-6', name: 'Lựa chọn nhà thầu thi công xây dựng', status: 'CON_HAN', deadline: '30/11/2027', leadDept: project.investor, coDepts: ['Sở KH&ĐT'] }
      ]
    }
  ];

  const procedureList: ProcedureItem[] = (project.procedureStage?.procedures && project.procedureStage.procedures.length > 0)
    ? project.procedureStage.procedures
    : defaultProcedures;

  const totalProcs = procedureList.length;
  const updatedProcs = procedureList.filter(p => p.updatedTaskCount > 0).length;
  const completedProcs = procedureList.filter(p => p.status === 'HOAN_THANH_DUNG_HAN').length;

  const toggleExpandProc = (procId: string) => {
    setExpandedProcs(prev => 
      prev.includes(procId) ? prev.filter(id => id !== procId) : [...prev, procId]
    );
  };

  /* Render nội dung chuyên sâu theo giai đoạn hiện tại (Chỉ giai đoạn mà dự án đang ở) */
  const renderCurrentStageContent = () => {
    switch (project.currentStage) {
      // 1. Giai đoạn Thủ tục đầu tư (Cây văn bản chuẩn xác theo Ảnh 1)
      case 'THU_TUC_DAU_TU':
        return (
          <div>
            {/* Header bar theo đúng Ảnh 1 */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 8,
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: 14
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 800, fontSize: 13.5, color: '#0f172a' }}>
                  Đang thực hiện thủ tục đầu tư
                </span>
                <Tag color="blue" style={{ fontWeight: 700, borderRadius: 4, margin: 0 }}>
                  Giai đoạn hiện tại
                </Tag>
                <Tag color={project.status === 'CHAM_TIEN_DO' ? 'red' : 'cyan'} style={{ borderRadius: 4, margin: 0 }}>
                  {project.status === 'CHAM_TIEN_DO' ? 'Chậm tiến độ' : 'Đúng tiến độ'}
                </Tag>
                <Tag color="green" style={{ borderRadius: 4, margin: 0 }}>
                  {updatedProcs}/{totalProcs} thủ tục đã cập nhật
                </Tag>
                <Tag color="green" style={{ borderRadius: 4, margin: 0 }}>
                  {completedProcs}/{totalProcs} thủ tục đã hoàn thành
                </Tag>
              </div>

              {/* Nút thao tác + Thêm thủ tục, Sửa, Xóa */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Button 
                  size="small" 
                  style={{ background: '#ecfdf5', borderColor: '#a7f3d0', color: '#059669', fontWeight: 600 }}
                  icon={<Plus size={13} />}
                >
                  Thêm thủ tục
                </Button>
                <Button 
                  size="small" 
                  style={{ background: '#fffbeb', borderColor: '#fde68a', color: '#d97706' }}
                  icon={<Edit size={13} />}
                >
                  Sửa
                </Button>
                <Button 
                  size="small" 
                  danger 
                  style={{ background: '#fef2f2', borderColor: '#fecaca', color: '#dc2626' }}
                  icon={<Trash2 size={13} />}
                >
                  Xóa
                </Button>
              </div>
            </div>

            {/* Cây danh sách 5 thủ tục theo đúng Ảnh 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {procedureList.map((proc, idx) => {
                const isExpanded = expandedProcs.includes(proc.id);
                const isCompleted = proc.status === 'HOAN_THANH_DUNG_HAN';
                const isDelayed = proc.status === 'CHAM_TIEN_DO';

                return (
                  <div 
                    key={proc.id}
                    style={{
                      border: '1px solid #e2e8f0',
                      borderLeft: `4px solid ${isCompleted ? '#10b981' : isDelayed ? '#ef4444' : '#0284c7'}`,
                      borderRadius: 6,
                      background: '#ffffff',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Thanh tiêu đề thủ tục */}
                    <div style={{
                      padding: '10px 14px',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 8,
                      borderBottom: '1px solid #f8fafc'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 300 }}>
                        <button 
                          onClick={() => toggleExpandProc(proc.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 2,
                            display: 'flex',
                            alignItems: 'center',
                            color: '#64748b'
                          }}
                        >
                          <ChevronRight 
                            size={16} 
                            style={{ 
                              transform: isExpanded ? 'rotate(90deg)' : 'none', 
                              transition: 'transform 0.2s ease' 
                            }} 
                          />
                        </button>

                        <span style={{ fontWeight: 700, fontSize: 13, color: '#0f172a' }}>
                          {proc.name}
                        </span>

                        <Tag 
                          color={isCompleted ? 'success' : isDelayed ? 'error' : 'default'}
                          style={{ margin: 0, fontSize: 11, fontWeight: 600 }}
                        >
                          {proc.statusLabel}
                        </Tag>

                        <Tag 
                          color="cyan" 
                          icon={<Check size={11} />}
                          style={{ 
                            margin: 0, 
                            fontSize: 11, 
                            cursor: 'pointer', 
                            background: '#ecfeff', 
                            borderColor: '#a5f3fc', 
                            color: '#0891b2',
                            fontWeight: 600
                          }}
                        >
                          Xác nhận thủ tục
                        </Tag>
                      </div>

                      {/* Các nút bên phải: + Thêm công việc, Sửa, Xóa */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Button 
                          size="small" 
                          type="link" 
                          icon={<Plus size={12} />}
                          style={{ fontSize: 11.5, color: '#0284c7', padding: '0 4px', height: 24 }}
                        >
                          Thêm công việc
                        </Button>
                        <Button 
                          size="small" 
                          type="link" 
                          icon={<Edit size={12} />}
                          style={{ fontSize: 11.5, color: '#d97706', padding: '0 4px', height: 24 }}
                        >
                          Sửa
                        </Button>
                        <Button 
                          size="small" 
                          type="link" 
                          danger 
                          icon={<Trash2 size={12} />}
                          style={{ fontSize: 11.5, padding: '0 4px', height: 24 }}
                        >
                          Xóa
                        </Button>
                      </div>
                    </div>

                    {/* Dòng metadata thông tin: Hạn thủ tục, số công việc, đơn vị chủ trì, đơn vị phối hợp */}
                    <div style={{ padding: '6px 14px 10px 38px', fontSize: 12, color: '#475569', lineHeight: 1.6 }}>
                      <div>
                        Hạn thủ tục: <strong>{proc.deadline}</strong> · {proc.taskCount} công việc {proc.completedDate && `· Hoàn thành: ${proc.completedDate}`}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 2 }}>
                        <span>
                          <strong>Đơn vị chủ trì:</strong> {proc.leadDept}
                        </span>
                        <span>
                          <strong>Đơn vị phối hợp:</strong> {proc.coDepts.join(', ')}
                        </span>
                      </div>

                      <div style={{ marginTop: 2 }}>
                        Văn bản trực tiếp: <strong>{proc.directDocsCount}</strong>
                      </div>

                      {/* Badges thống kê: X/Y đã cập nhật, X/Y đã hoàn thành */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                        <Tag color="cyan" style={{ fontSize: 11, margin: 0, borderRadius: 3 }}>
                          {proc.updatedTaskCount}/{proc.taskCount} đã cập nhật
                        </Tag>
                        <Tag color="green" style={{ fontSize: 11, margin: 0, borderRadius: 3 }}>
                          {proc.completedTaskCount}/{proc.taskCount} đã hoàn thành
                        </Tag>
                      </div>
                    </div>

                    {/* Danh sách công việc con (tasks) khi expand */}
                    {isExpanded && proc.tasks && proc.tasks.length > 0 && (
                      <div style={{ background: '#f8fafc', padding: '8px 14px 10px 38px', borderTop: '1px solid #f1f5f9' }}>
                        <div style={{ fontSize: 11.5, fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                          Danh sách công việc chi tiết:
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {proc.tasks.map((task, tIdx) => (
                            <div 
                              key={task.id}
                              style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                background: '#ffffff',
                                padding: '6px 10px',
                                borderRadius: 4,
                                border: '1px solid #e2e8f0',
                                fontSize: 12
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{ color: '#64748b', fontSize: 11 }}>{tIdx + 1}.</span>
                                <span style={{ fontWeight: 600, color: '#1e293b' }}>{task.name}</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span style={{ fontSize: 11, color: '#64748b' }}>Hạn: {task.deadline}</span>
                                {task.completedDate && (
                                  <span style={{ fontSize: 11, color: '#16a34a' }}>Xong: {task.completedDate}</span>
                                )}
                                <Tag 
                                  color={task.status === 'HOAN_THANH' ? 'success' : task.status === 'CHAM_TIEN_DO' ? 'error' : 'processing'}
                                  style={{ margin: 0, fontSize: 10.5 }}
                                >
                                  {task.status === 'HOAN_THANH' ? 'Hoàn thành' : task.status === 'CHAM_TIEN_DO' ? 'Chậm' : 'Đang làm'}
                                </Tag>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );

      // 2. Giai đoạn Giải phóng mặt bằng (Diện tích GPMB, số hộ, số thửa, kinh phí chi trả...)
      case 'GIAI_PHONG_MAT_BANG':
        return (
          <div>
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 8,
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 14
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 13.5, color: '#0f172a' }}>
                  Đang thực hiện giải phóng mặt bằng
                </span>
                <Tag color="orange" style={{ fontWeight: 700, borderRadius: 4, margin: 0 }}>
                  Giai đoạn hiện tại
                </Tag>
                <Tag color={project.status === 'CHAM_TIEN_DO' ? 'red' : 'green'} style={{ borderRadius: 4, margin: 0 }}>
                  {project.status === 'CHAM_TIEN_DO' ? 'Chậm tiến độ' : 'Đúng tiến độ'}
                </Tag>
              </div>
            </div>

            {/* Thanh tiến độ bàn giao mặt bằng sạch */}
            <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: 16, borderRadius: 8, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontWeight: 700, color: '#92400e', fontSize: 14 }}>Tiến độ bàn giao mặt bằng sạch</span>
                <strong style={{ color: '#b45309', fontSize: 15 }}>
                  {project.landClearanceStage?.handedOverPercent || project.landClearanceProgress}%
                </strong>
              </div>
              <Progress 
                percent={project.landClearanceStage?.handedOverPercent || project.landClearanceProgress} 
                strokeColor="#f59e0b" 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#78350f', marginTop: 8 }}>
                <span>Tổng diện tích cần GPMB: <strong>{project.landClearanceStage?.totalArea || project.landArea || 0} ha</strong></span>
                <span>Đã bàn giao sạch: <strong>{project.landClearanceStage?.handedOverArea || 0} ha</strong></span>
              </div>
            </div>

            {/* Thống kê 3 chỉ tiêu cốt lõi: Diện tích kiểm đếm, Số thửa, Số hộ & Tiền đền bù */}
            <Row gutter={12} style={{ marginBottom: 16 }}>
              <Col span={8}>
                <div style={{ background: '#f0fdf4', padding: 12, borderRadius: 6, border: '1px solid #bbf7d0', textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#166534', fontWeight: 700 }}>DIỆN TÍCH ĐÃ KIỂM ĐẾM</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#15803d', marginTop: 2 }}>
                    {project.landClearanceStage?.surveyedArea || 0} ha
                  </div>
                  <div style={{ fontSize: 11, color: '#166534' }}>
                    Đạt <strong>{project.landClearanceStage?.surveyedPercent || 0}%</strong> tổng diện tích
                  </div>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ background: '#eff6ff', padding: 12, borderRadius: 6, border: '1px solid #bfdbfe', textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#1e40af', fontWeight: 700 }}>PHƯƠNG ÁN CHI TRẢ ĐỀN BÙ</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#1d4ed8', marginTop: 2 }}>
                    {project.landClearanceStage?.compensationPlan?.paidAmount || 0} tỷ
                  </div>
                  <div style={{ fontSize: 11, color: '#1e40af' }}>
                    Đã giải ngân <strong>{project.landClearanceStage?.compensationPlan?.paidPercent || 0}%</strong> kinh phí đền bù
                  </div>
                </div>
              </Col>

              <Col span={8}>
                <div style={{ background: '#faf5ff', padding: 12, borderRadius: 6, border: '1px solid #e9d5ff', textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#6b21a8', fontWeight: 700 }}>SỐ HỘ ĐÃ NHẬN TIỀN</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#7e22ce', marginTop: 2 }}>
                    {project.landClearanceStage?.compensationPlan?.paidHouseholds || 0} / {project.landClearanceStage?.compensationPlan?.totalHouseholds || 0}
                  </div>
                  <div style={{ fontSize: 11, color: (project.landClearanceStage?.compensationPlan?.unresolvedHouseholds || 0) > 0 ? '#b91c1c' : '#15803d' }}>
                    {(project.landClearanceStage?.compensationPlan?.unresolvedHouseholds || 0) > 0 
                      ? `⚠️ Vướng ${project.landClearanceStage?.compensationPlan?.unresolvedHouseholds} hộ chưa đồng thuận` 
                      : '✓ 100% hộ dân đồng thuận'}
                  </div>
                </div>
              </Col>
            </Row>

            {/* Chi tiết thửa đất & Tái định cư */}
            <Descriptions bordered size="small" column={1}>
              <Descriptions.Item label="Số thửa đất thu hồi">
                <span style={{ fontSize: 12.5 }}>
                  Tổng số: <strong>{project.landClearanceStage?.totalPlots || 240} thửa</strong> · Đã kiểm đếm: <strong>{project.landClearanceStage?.surveyedPlots || 220} thửa</strong> · Đã bàn giao sạch: <strong>{project.landClearanceStage?.handedOverPlots || 190} thửa</strong>
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Phương án bố trí tái định cư">
                {project.landClearanceStage?.compensationPlan?.resettlementArrangement || 'Bố trí tái định cư tại khu dân cư quy hoạch mới của xã/phường.'}
              </Descriptions.Item>
              <Descriptions.Item label="Hiện trạng mặt bằng thực tế & khó khăn">
                <div style={{ color: project.status === 'CHAM_TIEN_DO' ? '#b91c1c' : '#334155' }}>
                  {project.landClearanceStage?.clearanceNotes || project.landClearanceNote}
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Địa bàn cấp xã/phường chủ trì GPMB">
                <strong>{project.district}</strong>
              </Descriptions.Item>
            </Descriptions>
          </div>
        );

      // 3. Giai đoạn Thi công xây dựng (Tiến độ các hạng mục công trình)
      case 'THI_CONG_XAY_DUNG':
        return (
          <div>
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 8,
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 14
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 13.5, color: '#0f172a' }}>
                  Đang triển khai thi công xây dựng
                </span>
                <Tag color="blue" style={{ fontWeight: 700, borderRadius: 4, margin: 0 }}>
                  Giai đoạn hiện tại
                </Tag>
                <Tag color={project.status === 'CHAM_TIEN_DO' ? 'red' : 'green'} style={{ borderRadius: 4, margin: 0 }}>
                  {project.status === 'CHAM_TIEN_DO' ? 'Chậm tiến độ' : 'Đúng tiến độ'}
                </Tag>
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: 14, borderRadius: 8, border: '1px solid #e2e8f0', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontWeight: 700, color: '#0f172a' }}>Tiến độ thi công thực tế</span>
                <strong style={{ color: project.status === 'CHAM_TIEN_DO' ? '#ef4444' : '#0284c7', fontSize: 15 }}>
                  {project.constructionStage?.constructionProgress || project.progress}%
                </strong>
              </div>
              <Progress 
                percent={project.constructionStage?.constructionProgress || project.progress} 
                strokeColor={project.status === 'CHAM_TIEN_DO' ? '#ef4444' : '#0284c7'} 
              />
              <div style={{ fontSize: 12, color: '#475569', marginTop: 8 }}>
                Kế hoạch tổ chức: <em>{project.constructionStage?.constructionPlanNotes || 'Triển khai theo tiến độ hợp đồng đã ký kết.'}</em>
              </div>
            </div>

            <div style={{ marginBottom: 12, fontWeight: 700, fontSize: 13.5, color: '#0f172a' }}>
              Kế hoạch thực hiện các hạng mục xây dựng & gói thầu:
            </div>

            <Table
              dataSource={project.constructionStage?.items || []}
              columns={[
                {
                  title: 'STT',
                  key: 'stt',
                  width: 45,
                  align: 'center' as const,
                  render: (_: any, __: any, idx: number) => idx + 1
                },
                {
                  title: 'Hạng mục / Gói thầu',
                  dataIndex: 'name',
                  key: 'name',
                  render: (t: string) => <strong style={{ color: '#0f172a', fontSize: 12.5 }}>{t}</strong>
                },
                {
                  title: 'Nhà thầu thi công',
                  dataIndex: 'contractor',
                  key: 'contractor',
                  width: 220,
                  render: (c: string) => <span style={{ fontSize: 12, color: '#475569' }}>{c}</span>
                },
                {
                  title: 'Tiến độ KH',
                  dataIndex: 'plannedProgress',
                  key: 'plannedProgress',
                  width: 85,
                  align: 'center' as const,
                  render: (v: number) => <span style={{ fontSize: 12, color: '#64748b' }}>{v}%</span>
                },
                {
                  title: 'Tiến độ TT',
                  dataIndex: 'actualProgress',
                  key: 'actualProgress',
                  width: 85,
                  align: 'center' as const,
                  render: (v: number, r: any) => (
                    <strong style={{ color: r.status === 'CHAM_TIEN_DO' ? '#ef4444' : '#0284c7', fontSize: 12 }}>
                      {v}%
                    </strong>
                  )
                },
                {
                  title: 'Tình trạng',
                  dataIndex: 'status',
                  key: 'status',
                  width: 120,
                  render: (s: string) => {
                    if (s === 'CHAM_TIEN_DO') {
                      return <Tag color="error">Chậm tiến độ</Tag>;
                    }
                    if (s === 'HOAN_THANH') {
                      return <Tag color="success">Hoàn thành</Tag>;
                    }
                    return <Tag color="processing">Đúng tiến độ</Tag>;
                  }
                }
              ]}
              rowKey="id"
              pagination={false}
              size="small"
              bordered
            />
          </div>
        );

      // 4. Giai đoạn Hoàn thành đưa vào vận hành
      case 'HOAN_THANH':
        return (
          <div>
            <div style={{
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: 8,
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={20} color="#16a34a" />
                <span style={{ fontWeight: 800, fontSize: 14, color: '#166534' }}>
                  DỰ ÁN ĐÃ HOÀN THÀNH VÀ ĐƯA VÀO KHAI THÁC VẬN HÀNH
                </span>
              </div>
              <Tag color="success" style={{ fontWeight: 700, margin: 0 }}>
                100% Hoàn tất
              </Tag>
            </div>

            <Descriptions bordered size="small" column={1}>
              <Descriptions.Item label="Thời điểm hoàn thành bàn giao">
                <strong style={{ color: '#166534' }}>{project.finishDate}</strong>
              </Descriptions.Item>
              <Descriptions.Item label="Hồ sơ nghiệm thu công trình">
                Đã được Hội đồng nghiệm thu cấp tỉnh / bộ ngành chuyên môn kiểm tra, chấp thuận nghiệm thu hoàn thành đưa vào sử dụng.
              </Descriptions.Item>
              <Descriptions.Item label="Quyết toán vốn đầu tư">
                Đã hoàn tất báo cáo quyết toán dự án hoàn thành theo đúng quy định. Tổng kinh phí quyết toán: <strong>{project.totalInvestment.toLocaleString('vi-VN')} tỷ VNĐ</strong>.
              </Descriptions.Item>
              <Descriptions.Item label="Đơn vị thụ hưởng & quản lý khai thác">
                <strong>{project.investor}</strong> phối hợp cùng các đơn vị địa phương vận hành.
              </Descriptions.Item>
            </Descriptions>
          </div>
        );

      default:
        return null;
    }
  };

  const tabItems = [
    // Tab 1. Thông tin chung
    {
      key: 'info',
      label: '1. Thông tin chung',
      children: (
        <div>
          <Descriptions bordered size="small" column={2} style={{ marginBottom: 16 }}>
            <Descriptions.Item label="Mã dự án" span={1}>
              <strong style={{ color: '#0369a1' }}>{project.code}</strong>
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái" span={1}>
              <StatusBadge status={project.status} />
            </Descriptions.Item>
            <Descriptions.Item label="Tên dự án" span={2}>
              <span style={{ fontWeight: 600, fontSize: 13.5 }}>{project.name}</span>
            </Descriptions.Item>
            <Descriptions.Item label="Giai đoạn hiện tại" span={1}>
              <Tag color="purple" style={{ fontWeight: 700 }}>
                {stageLabels[project.currentStage]}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Lĩnh vực" span={1}>
              <Tag color="blue">{sectorLabels[project.sector]}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Nguồn vốn đầu tư" span={2}>
              <Tag color={project.capitalSource === 'NSNN' ? 'cyan' : 'gold'} style={{ fontWeight: 600 }}>
                {capitalLabels[project.capitalSource]}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Chủ đầu tư / Nhà đầu tư" span={2}>
              <strong style={{ color: '#0f172a' }}>{project.investor}</strong>
            </Descriptions.Item>
            <Descriptions.Item label="Quỹ đất sử dụng">
              <span style={{ fontWeight: 700, color: '#0369a1' }}>
                {project.landArea ? `${project.landArea.toLocaleString('vi-VN')} ha` : (project.landClearanceStage?.totalArea ? `${project.landClearanceStage.totalArea} ha` : '-')}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Địa bàn triển khai">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <MapPin size={14} color="#0798EB" /> {project.district}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Tổng mức đầu tư">
              <span style={{ fontSize: 15, fontWeight: 700, color: '#0369a1' }}>
                {project.totalInvestment.toLocaleString('vi-VN')} tỷ VNĐ
              </span>
            </Descriptions.Item>
            <Descriptions.Item label={project.capitalSource === 'NSNN' ? 'Đã giải ngân' : 'Đã thực hiện'}>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#10b981' }}>
                {project.disbursedAmount.toLocaleString('vi-VN')} tỷ VNĐ ({Math.round((project.disbursedAmount / project.totalInvestment) * 100)}%)
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Ngày khởi công">
              {project.startDate}
            </Descriptions.Item>
            <Descriptions.Item label="Dự kiến hoàn thành">
              <span style={{ fontWeight: 600 }}>{project.finishDate}</span>
            </Descriptions.Item>
          </Descriptions>

          <div style={{ background: '#f8fafc', padding: 14, borderRadius: 8, border: '1px solid #e2e8f0', marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontWeight: 600 }}>Tiến độ tổng thể công trình</span>
              <strong style={{ color: project.status === 'CHAM_TIEN_DO' ? '#ef4444' : '#0284c7' }}>{project.progress}%</strong>
            </div>
            <Progress 
              percent={project.progress} 
              status={project.status === 'CHAM_TIEN_DO' ? 'exception' : 'active'} 
              strokeColor={project.status === 'CHAM_TIEN_DO' ? '#ef4444' : '#0284c7'}
            />
          </div>
        </div>
      )
    },

    // Tab 2. Chuyên sâu theo giai đoạn hiện tại duy nhất của dự án
    {
      key: 'stage_content',
      label: `2. Giai đoạn: ${stageLabels[project.currentStage]}`,
      children: renderCurrentStageContent()
    },

    // Tab 3. Theo dõi đôn đốc vướng mắc & Đề xuất kiến nghị
    {
      key: 'expedite',
      label: (
        <span style={{ color: project.status === 'CHAM_TIEN_DO' || project.expediteInfo?.riskLevel === 'NGUY_CO_CHAM' ? '#dc2626' : undefined }}>
          3. Đôn đốc chỉ đạo {project.status === 'CHAM_TIEN_DO' ? '(!)' : ''}
        </span>
      ),
      children: (
        <div>
          {project.expediteInfo?.isDelayedOrRisk ? (
            <div>
              {/* Thẻ cảnh báo điểm nghẽn */}
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: 14, borderRadius: 8, marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#991b1b', fontWeight: 800, fontSize: 14 }}>
                    <ShieldAlert size={18} color="#dc2626" />
                    <span>DỰ ÁN CẦN TẬP TRUNG ĐÔN ĐỐC CHỈ ĐẠO</span>
                    <Tag color="error">{project.expediteInfo.delayedStageLabel}</Tag>
                  </div>
                  <Button 
                    type="primary" 
                    danger 
                    size="small" 
                    icon={<Send size={12} />}
                    onClick={() => setExpediteModalOpen(true)}
                    style={{ fontWeight: 600 }}
                  >
                    Ban hành văn bản đôn đốc
                  </Button>
                </div>

                <div style={{ fontSize: 13, color: '#7f1d1d', lineHeight: 1.5, marginBottom: 8 }}>
                  📍 <strong>Chậm ở đâu:</strong> {project.expediteInfo.bottleneckLocation}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, fontSize: 12.5, color: '#475569' }}>
                  <div>
                    <strong>Cơ quan chủ trì:</strong> <span style={{ color: '#0369a1', fontWeight: 600 }}>{project.expediteInfo.leadDepartment}</span>
                  </div>
                  <div>
                    <strong>Cơ quan phối hợp:</strong> <span>{project.expediteInfo.cooperatingDepartments.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Khó khăn vướng mắc & Đề xuất kiến nghị */}
              <Descriptions bordered size="small" column={1} style={{ marginBottom: 16 }}>
                <Descriptions.Item label="Khó khăn, vướng mắc cụ thể">
                  <div style={{ color: '#b91c1c', fontSize: 12.5, lineHeight: 1.5 }}>
                    {project.expediteInfo.detailedDifficulties}
                  </div>
                </Descriptions.Item>
                <Descriptions.Item label="Đề xuất kiến nghị giải quyết">
                  <div style={{ color: '#1e3a8a', fontSize: 12.5, lineHeight: 1.5, fontWeight: 500 }}>
                    {project.expediteInfo.proposalsAndRecommendations}
                  </div>
                </Descriptions.Item>
              </Descriptions>

              {/* Lịch sử các lần đôn đốc */}
              <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: 13.5, color: '#0f172a' }}>
                  Lịch sử văn bản chỉ đạo đôn đốc của Lãnh đạo tỉnh:
                </span>
              </div>

              {project.expediteInfo.expediteHistory && project.expediteInfo.expediteHistory.length > 0 ? (
                <Timeline
                  items={project.expediteInfo.expediteHistory.map((item) => ({
                    color: 'red',
                    children: (
                      <div style={{ paddingBottom: 6 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <strong style={{ fontSize: 13, color: '#991b1b' }}>{item.action}</strong>
                          <span style={{ fontSize: 11.5, color: '#64748b' }}>{item.date}</span>
                        </div>
                        <div style={{ fontSize: 12, color: '#334155', marginTop: 2 }}>
                          Người ký: <strong>{item.signer}</strong> {item.feedbackDeadline && ` | Hạn báo cáo: ${item.feedbackDeadline}`}
                        </div>
                        <div style={{ fontSize: 12, color: '#475569', marginTop: 4, background: '#f8fafc', padding: 8, borderRadius: 4, borderLeft: '3px solid #dc2626' }}>
                          "{item.content}"
                        </div>
                      </div>
                    )
                  }))}
                />
              ) : (
                <Alert message="Chưa có văn bản đôn đốc chính thức nào cho dự án này" type="info" showIcon />
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <CheckCircle2 size={40} color="#16a34a" style={{ marginBottom: 10 }} />
              <div style={{ fontWeight: 700, fontSize: 15, color: '#166534' }}>
                Dự án đang triển khai đúng tiến độ kế hoạch
              </div>
              <div style={{ fontSize: 12.5, color: '#64748b', marginTop: 4 }}>
                Hiện không có khó khăn, vướng mắc phát sinh cần UBND tỉnh ban hành văn bản đôn đốc.
              </div>
            </div>
          )}
        </div>
      )
    },

    // Tab 4. Bản đồ & Mốc tiến độ
    {
      key: 'map',
      label: '4. Bản đồ & Mốc việc',
      children: (
        <div>
          <div style={{ 
            height: 180, 
            background: '#e0f2fe', 
            borderRadius: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '2px dashed #0284c7',
            padding: 16,
            textAlign: 'center',
            marginBottom: 16
          }}>
            <Navigation size={30} color="#0284c7" style={{ marginBottom: 6 }} />
            <div style={{ fontWeight: 700, fontSize: 14, color: '#0369a1' }}>
              VỊ TRÍ DỰ ÁN TRÊN BẢN ĐỒ KHÔNG GIAN HƯNG YÊN
            </div>
            <div style={{ fontSize: 12.5, color: '#334155', marginTop: 3 }}>
              Tọa độ: <strong>{project.coordinates[0].toFixed(4)}° N, {project.coordinates[1].toFixed(4)}° E</strong> | Địa bàn: {project.district}
            </div>
            <Tag color={project.capitalSource === 'NSNN' ? 'blue' : 'gold'} style={{ marginTop: 8 }}>
              {project.capitalSource === 'NSNN' ? 'Lớp GIS: Vốn Ngân sách Nhà nước' : 'Lớp GIS: Vốn Ngoài Ngân sách'}
            </Tag>
          </div>

          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0f172a', marginBottom: 10 }}>
            Tiến độ các mốc sự kiện quan trọng:
          </div>

          <Timeline
            items={project.milestones.map(m => ({
              color: m.status === 'HOAN_THANH' ? 'green' : m.status === 'CHAM' ? 'red' : m.status === 'DANG_LAM' ? 'blue' : 'gray',
              children: (
                <div style={{ paddingBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: 13 }}>{m.name}</strong>
                    <Tag color={m.status === 'HOAN_THANH' ? 'success' : m.status === 'CHAM' ? 'error' : m.status === 'DANG_LAM' ? 'processing' : 'default'}>
                      {m.status === 'HOAN_THANH' ? 'Đã xong' : m.status === 'CHAM' ? 'Chậm tiến độ' : m.status === 'DANG_LAM' ? 'Đang thực hiện' : 'Chưa đến hạn'}
                    </Tag>
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
                    Thời hạn mốc: <strong>{m.date}</strong>
                  </div>
                </div>
              )
            }))}
          />
        </div>
      )
    }
  ];

  return (
    <>
      <Drawer
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Building2 size={18} color="#0798EB" />
            <span style={{ fontWeight: 700, color: '#1e293b' }}>HỒ SƠ DỰ ÁN TRỌNG ĐIỂM: {project.code}</span>
          </div>
        }
        placement="right"
        width={860}
        onClose={onClose}
        open={open}
      >
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0', lineHeight: 1.4 }}>
            {project.name}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <StatusBadge status={project.status} />
            <Tag color="blue">{sectorLabels[project.sector]}</Tag>
            <Tag color={project.capitalSource === 'NSNN' ? 'cyan' : 'gold'}>
              {capitalLabels[project.capitalSource]}
            </Tag>
            <span style={{ fontSize: 12, color: '#64748b' }}>Chủ đầu tư: <strong>{project.investor}</strong></span>
          </div>
        </div>

        <Tabs items={tabItems} defaultActiveKey="info" type="card" />
      </Drawer>

      {/* Modal đôn đốc mở trực tiếp từ hồ sơ */}
      <ExpediteModal
        project={project}
        open={expediteModalOpen}
        onClose={() => setExpediteModalOpen(false)}
      />
    </>
  );
};
