import React from 'react';
import { Modal, Tabs, Table, Tag, Descriptions, Alert } from 'antd';
import { SettingOutlined, DatabaseOutlined, SafetyCertificateOutlined, ApiOutlined, HistoryOutlined } from '@ant-design/icons';
import { useApp } from '../../context/AppContext';
import { HISTORICAL_ORGANIZATION_MAPPINGS } from '../../data/organizationMappings';

export const AdminModal: React.FC = () => {
  const { adminModalOpen, setAdminModalOpen } = useApp();

  const dataSources = [
    { key: '1', name: 'Phần mềm Quản lý & Theo dõi nhiệm vụ UBND tỉnh', type: 'REST API Nội bộ', status: 'Mô phỏng Mock API (124 nhiệm vụ)', color: 'blue', lastSync: '10/10/2026 08:30' },
    { key: '2', name: 'Hệ thống Quản lý Dự án ĐTXD (Sở Xây dựng tỉnh Hưng Yên)', type: 'Database PostgreSQL', status: 'Mô phỏng Mock API (31 dự án)', color: 'blue', lastSync: '10/10/2026 07:45' },
    { key: '3', name: 'Hệ thống Quản lý Kế hoạch vốn (Sở Tài chính tỉnh Hưng Yên)', type: 'Data Warehouse', status: 'Mô phỏng Mock API (Chính quyền 2 cấp)', color: 'blue', lastSync: '10/10/2026 08:00' },
    { key: '4', name: 'Trung tâm Điều hành Đô thị thông minh (IOC Hưng Yên)', type: 'IOC Enterprise Bus', status: 'Demo – Chưa kết nối API chính thức', color: 'orange', lastSync: 'Chờ cấp API Key' }
  ];

  const dataSourceColumns = [
    { title: 'Hệ thống nguồn', dataIndex: 'name', key: 'name', render: (t: string) => <strong>{t}</strong> },
    { title: 'Giao thức tích hợp', dataIndex: 'type', key: 'type' },
    { 
      title: 'Trạng thái kết nối', 
      dataIndex: 'status', 
      key: 'status', 
      render: (t: string, r: any) => <Tag color={r.color}>{t}</Tag> 
    },
    { title: 'Thời điểm đồng bộ', dataIndex: 'lastSync', key: 'lastSync' }
  ];

  const permissions = [
    { key: '1', role: 'Lãnh đạo Văn phòng UBND tỉnh', scope: 'Toàn tỉnh (Xem toàn bộ 4 hợp phần, ban hành đôn đốc khẩn, phê duyệt báo cáo)', access: 'Toàn quyền điều hành Văn phòng tỉnh' },
    { key: '2', role: 'Lãnh đạo Sở/Ban/Ngành', scope: 'Phạm vi 10 Sở chuyên môn và các Ban quản lý, đơn vị trực thuộc', access: 'Báo cáo & Giám sát ngành' },
    { key: '3', role: 'Lãnh đạo UBND Xã/Phường', scope: 'Phạm vi xã/phường được giao quản lý theo mô hình chính quyền 2 cấp', access: 'Điều hành & Xử lý cấp cơ sở' },
    { key: '4', role: 'Chuyên viên Tổng hợp', scope: 'Xem tổng hợp số liệu, hỗ trợ tổng hợp và xuất báo cáo định kỳ', access: 'Xem & Khai thác số liệu' }
  ];

  const permissionColumns = [
    { title: 'Vai trò người dùng', dataIndex: 'role', key: 'role', render: (t: string) => <strong>{t}</strong> },
    { title: 'Phạm vi dữ liệu', dataIndex: 'scope', key: 'scope' },
    { title: 'Quyền hạn trên hệ thống', dataIndex: 'access', key: 'access', render: (t: string) => <Tag color="green">{t}</Tag> }
  ];

  const mappingColumns = [
    { title: 'Cơ quan / Tổ chức cũ', dataIndex: 'oldOrganizationName', key: 'oldOrganizationName', render: (t: string) => <strong style={{ color: '#64748b' }}>{t}</strong> },
    { 
      title: 'Hình thức', 
      dataIndex: 'mappingType', 
      key: 'mappingType',
      render: (t: string) => {
        if (t === 'MERGED') return <Tag color="blue">Sáp nhập</Tag>;
        if (t === 'FUNCTION_TRANSFERRED') return <Tag color="purple">Chuyển giao chức năng</Tag>;
        return <Tag color="red">Kết thúc nhiệm vụ</Tag>;
      }
    },
    { title: 'Cơ quan tiếp nhận / kế thừa hiện hành', dataIndex: 'newOrganizationName', key: 'newOrganizationName', render: (t: string) => <strong style={{ color: '#0b74e5' }}>{t}</strong> },
    { title: 'Căn cứ pháp lý', dataIndex: 'sourceReference', key: 'sourceReference' }
  ];

  return (
    <Modal
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <SettingOutlined style={{ color: '#0b74e5' }} />
          <span>QUẢN TRỊ HỆ THỐNG VÀ THÔNG TIN TÍCH HỢP CHÍNH QUYỀN 2 CẤP</span>
        </div>
      }
      open={adminModalOpen}
      onCancel={() => setAdminModalOpen(false)}
      width={880}
      footer={null}
    >
      <Alert
        message="MÔ HÌNH CHÍNH QUYỀN ĐỊA PHƯƠNG HAI CẤP (TỈNH - XÃ)"
        description="Hệ thống đã chuẩn hóa toàn bộ mô hình dữ liệu theo cơ cấu 10 Sở chuyên môn, các Ban thuộc tỉnh và 104 xã, phường (11 phường, 93 xã) theo Nghị quyết số 1666/NQ-UBTVQH15. Cấp huyện đã được loại bỏ khỏi tầng điều hành hiện hành."
        type="info"
        showIcon
        style={{ marginBottom: 16 }}
      />

      <Tabs
        items={[
          {
            key: 'sources',
            label: <span><DatabaseOutlined /> Nguồn dữ liệu & Trạng thái tích hợp</span>,
            children: (
              <Table
                dataSource={dataSources}
                columns={dataSourceColumns}
                pagination={false}
                size="middle"
              />
            )
          },
          {
            key: 'roles',
            label: <span><SafetyCertificateOutlined /> Phân quyền theo mô hình 2 cấp</span>,
            children: (
              <div>
                <Table
                  dataSource={permissions}
                  columns={permissionColumns}
                  pagination={false}
                  size="middle"
                />
                <div style={{ marginTop: 16, fontSize: 12.5, color: '#64748b' }}>
                  * Lưu ý: Trong phiên demo, bạn có thể chuyển đổi nhanh vai trò thông qua công cụ Switcher tại góc trên bên phải thanh Header.
                </div>
              </div>
            )
          },
          {
            key: 'mappings',
            label: <span><HistoryOutlined /> Ánh xạ cơ quan & lịch sử</span>,
            children: (
              <div>
                <Table
                  dataSource={HISTORICAL_ORGANIZATION_MAPPINGS}
                  columns={mappingColumns}
                  rowKey="oldOrganizationId"
                  pagination={false}
                  size="middle"
                />
                <div style={{ marginTop: 12, fontSize: 12, color: '#64748b' }}>
                  Bảng đối chiếu phục vụ tra cứu dữ liệu quá khứ và lưu vết hồ sơ trước thời điểm 01/7/2025.
                </div>
              </div>
            )
          },
          {
            key: 'architecture',
            label: <span><ApiOutlined /> Kiến trúc & Mở rộng</span>,
            children: (
              <Descriptions bordered size="small" column={1}>
                <Descriptions.Item label="Mô hình chính quyền">Chính quyền địa phương 2 cấp (Cấp Tỉnh → Cấp Xã / Phường)</Descriptions.Item>
                <Descriptions.Item label="Master Data cấp tỉnh">10 Sở chuyên môn chính thức + Các Ban quản lý và cơ quan thuộc tỉnh</Descriptions.Item>
                <Descriptions.Item label="Master Data cấp xã">104 Đơn vị hành chính cấp xã (11 Phường và 93 Xã theo NQ 1666)</Descriptions.Item>
                <Descriptions.Item label="Kiến trúc ứng dụng">React 18 + TypeScript + Vite + Ant Design 5 (Zero-error build)</Descriptions.Item>
                <Descriptions.Item label="Lớp Service Adapter">Tách biệt độc lập: AdministrativeUnitService, OrganizationService, TaskService, ProjectService, DisbursementService, BudgetService</Descriptions.Item>
                <Descriptions.Item label="Tiêu chuẩn Responsive">Tối ưu cho màn hình lãnh đạo: 1920×1080, 1440×900, 1366×768</Descriptions.Item>
              </Descriptions>
            )
          }
        ]}
      />
    </Modal>
  );
};
