import React from 'react';
import { Drawer, Tabs, Descriptions, Tag, Progress, Timeline, Alert, Space, Table } from 'antd';
import { 
  Building2, 
  MapPin, 
  FileText, 
  AlertTriangle, 
  Calendar, 
  DollarSign, 
  Navigation,
  CheckCircle2,
  Clock,
  Layers
} from 'lucide-react';
import { ProjectItem } from '../../types';
import { StatusBadge } from '../../components/common/StatusBadge';

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
  if (!project) return null;

  const sectorLabels: Record<string, string> = {
    GIAO_THONG: 'Hạ tầng Giao thông',
    XAY_DUNG_DAN_DUNG: 'Xây dựng Dân dụng & Công nghiệp',
    NONG_NGHIEP: 'Nông nghiệp & Thủy lợi'
  };

  const capitalLabels: Record<string, string> = {
    NSNN: 'Vốn Ngân sách Nhà nước (NSNN)',
    NGOAI_NSNN: 'Vốn Ngoài Ngân sách (Xã hội hóa / Doanh nghiệp)'
  };

  const tabItems = [
    // 1. Thông tin chung
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
              <span style={{ fontWeight: 600 }}>{project.name}</span>
            </Descriptions.Item>
            <Descriptions.Item label="Lĩnh vực">
              <Tag color="blue">{sectorLabels[project.sector]}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Nguồn vốn">
              <Tag color={project.capitalSource === 'NSNN' ? 'cyan' : 'gold'}>
                {capitalLabels[project.capitalSource]}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Chủ đầu tư" span={2}>
              <strong>{project.investor}</strong>
            </Descriptions.Item>
            <Descriptions.Item label="Cơ quan quản lý">
              {project.managingDept}
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
            <Descriptions.Item label="Đã giải ngân">
              <span style={{ fontSize: 15, fontWeight: 700, color: '#10b981' }}>
                {project.disbursedAmount.toLocaleString('vi-VN')} tỷ VNĐ
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Ngày khởi công">
              {project.startDate}
            </Descriptions.Item>
            <Descriptions.Item label="Dự kiến hoàn thành">
              <span style={{ fontWeight: 600 }}>{project.finishDate}</span>
            </Descriptions.Item>
          </Descriptions>

          <div style={{ background: '#f8fafc', padding: 14, borderRadius: 8, border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontWeight: 600 }}>Tổng tiến độ công trình</span>
              <strong style={{ color: '#0284c7' }}>{project.progress}%</strong>
            </div>
            <Progress percent={project.progress} status={project.status === 'CHAM_TIEN_DO' ? 'exception' : 'active'} />
          </div>
        </div>
      )
    },

    // 2. Tiến độ thực hiện
    {
      key: 'progress',
      label: '2. Tiến độ mốc việc',
      children: (
        <div>
          <Alert 
            message="Kế hoạch tiến độ tổng thể dự án" 
            description="Các mốc nhiệm vụ trọng tâm từ khởi công, giải phóng mặt bằng đến hoàn thành bàn giao sử dụng."
            type="info"
            showIcon
            style={{ marginBottom: 16 }}
          />

          <Timeline
            items={project.milestones.map(m => ({
              color: m.status === 'HOAN_THANH' ? 'green' : m.status === 'CHAM' ? 'red' : m.status === 'DANG_LAM' ? 'blue' : 'gray',
              children: (
                <div style={{ paddingBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: 13.5 }}>{m.name}</strong>
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
    },

    // 3. Kế hoạch vốn
    {
      key: 'capital',
      label: '3. Kế hoạch vốn',
      children: (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 16 }}>
            <div style={{ background: '#eff6ff', padding: 12, borderRadius: 6, textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#64748b' }}>TỔNG MỨC ĐẦU TƯ</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0369a1' }}>{project.totalInvestment} tỷ</div>
            </div>
            <div style={{ background: '#f0fdf4', padding: 12, borderRadius: 6, textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#64748b' }}>ĐÃ THỰC HIỆN</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#10b981' }}>{project.disbursedAmount} tỷ</div>
            </div>
            <div style={{ background: '#faf5ff', padding: 12, borderRadius: 6, textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#64748b' }}>TỶ LỆ GIẢI NGÂN</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#7c3aed' }}>
                {Math.round((project.disbursedAmount / project.totalInvestment) * 100)}%
              </div>
            </div>
          </div>

          <Descriptions bordered size="small" column={1}>
            <Descriptions.Item label="Kế hoạch vốn năm 2024">
              <strong>{(project.totalInvestment * 0.35).toFixed(1)} tỷ VNĐ</strong>
            </Descriptions.Item>
            <Descriptions.Item label="Đã giải ngân trong năm">
              <strong>{(project.disbursedAmount * 0.65).toFixed(1)} tỷ VNĐ</strong>
            </Descriptions.Item>
            <Descriptions.Item label="Số vốn còn lại cần bố trí">
              {(project.totalInvestment - project.disbursedAmount).toFixed(1)} tỷ VNĐ
            </Descriptions.Item>
          </Descriptions>
        </div>
      )
    },

    // 4. Giải phóng mặt bằng
    {
      key: 'clearance',
      label: '4. Giải phóng mặt bằng',
      children: (
        <div>
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: 14, borderRadius: 8, marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontWeight: 600, color: '#92400e' }}>Tiến độ bàn giao mặt bằng</span>
              <strong style={{ color: '#b45309' }}>{project.landClearanceProgress}%</strong>
            </div>
            <Progress percent={project.landClearanceProgress} strokeColor="#f59e0b" />
            <div style={{ fontSize: 12, color: '#78350f', marginTop: 8 }}>
              Diện tích đã bàn giao: <strong>{project.landClearanceArea}</strong>
            </div>
          </div>

          <Descriptions bordered size="small" column={1}>
            <Descriptions.Item label="Tình hình GPMB thực tế">
              {project.landClearanceNote}
            </Descriptions.Item>
            <Descriptions.Item label="Huyện/Thị chủ trì bồi thường">
              {project.district}
            </Descriptions.Item>
          </Descriptions>
        </div>
      )
    },

    // 5. Vướng mắc và kiến nghị
    {
      key: 'bottlenecks',
      label: '5. Vướng mắc kiến nghị',
      children: (
        <div>
          {project.bottlenecks.length > 0 ? (
            <div>
              <Alert 
                message="Các khó khăn vướng mắc cần UBND tỉnh chỉ đạo" 
                type="warning" 
                showIcon 
                style={{ marginBottom: 16 }}
              />
              <Space direction="vertical" style={{ width: '100%' }}>
                {project.bottlenecks.map((b, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      padding: '10px 14px', 
                      background: '#fef2f2', 
                      border: '1px solid #fecaca', 
                      borderRadius: 6,
                      fontSize: 13,
                      color: '#991b1b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}
                  >
                    <AlertTriangle size={16} />
                    <span>{b}</span>
                  </div>
                ))}
              </Space>
            </div>
          ) : (
            <Alert message="Dự án không có vướng mắc phát sinh nghiêm trọng" type="success" showIcon />
          )}
        </div>
      )
    },

    // 6. Bản đồ số
    {
      key: 'map',
      label: '6. Bản đồ',
      children: (
        <div>
          <div style={{ 
            height: 260, 
            background: '#e0f2fe', 
            borderRadius: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '2px dashed #0284c7',
            padding: 20,
            textAlign: 'center'
          }}>
            <Navigation size={36} color="#0284c7" style={{ marginBottom: 10 }} />
            <div style={{ fontWeight: 700, fontSize: 15, color: '#0369a1' }}>
              VỊ TRÍ DỰ ÁN TRÊN BẢN ĐỒ TỈNH HƯNG YÊN
            </div>
            <div style={{ fontSize: 13, color: '#334155', marginTop: 4 }}>
              Tọa độ địa lý: <strong>{project.coordinates[0].toFixed(4)}° N, {project.coordinates[1].toFixed(4)}° E</strong>
            </div>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
              Địa bàn: {project.district} | Hệ tọa độ Quốc gia VN-2000
            </div>
            <Tag color="blue" style={{ marginTop: 10 }}>GIS Demo Layer Hưng Yên</Tag>
          </div>
        </div>
      )
    },

    // 7. Văn bản liên quan
    {
      key: 'docs',
      label: '7. Văn bản liên quan',
      children: (
        <div>
          <Space direction="vertical" style={{ width: '100%' }}>
            {project.legalDocs.map((doc, idx) => (
              <div 
                key={idx} 
                style={{ 
                  padding: '10px 14px', 
                  background: '#ffffff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: 13
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FileText size={16} color="#0798EB" />
                  <strong>{doc}</strong>
                </div>
                <Tag color="cyan">Hồ sơ pháp lý</Tag>
              </div>
            ))}
          </Space>
        </div>
      )
    }
  ];

  return (
    <Drawer
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Building2 size={18} color="#0798EB" />
          <span style={{ fontWeight: 700, color: '#1e293b' }}>HỒ SƠ DỰ ÁN TRỌNG ĐIỂM: {project.code}</span>
        </div>
      }
      placement="right"
      width={780}
      onClose={onClose}
      open={open}
    >
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0', lineHeight: 1.4 }}>
          {project.name}
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <StatusBadge status={project.status} />
          <Tag color="blue">{sectorLabels[project.sector]}</Tag>
          <span style={{ fontSize: 12, color: '#64748b' }}>Chủ đầu tư: {project.investor}</span>
        </div>
      </div>

      <Tabs items={tabItems} defaultActiveKey="info" type="card" />
    </Drawer>
  );
};
