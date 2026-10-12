import React, { useState, useMemo } from 'react';
import { Tag, Tooltip, Input, Select, Modal, Segmented, Button, Space, message } from 'antd';
import { 
  FullscreenOutlined, 
  FullscreenExitOutlined, 
  SettingOutlined, 
  GlobalOutlined,
  AppstoreOutlined,
  LinkOutlined,
  SearchOutlined,
  ReloadOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
  PrinterOutlined
} from '@ant-design/icons';
import { OrganizationService } from '../../services/organizationService';
import { AdministrativeUnitService } from '../../services/administrativeUnitService';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

interface IOCExpenseFrameProps {
  initialIframeUrl?: string;
}

interface ExpenseItem {
  id: string;
  tenChiTieu: string;
  nsnnKy: string;
  nsTrungUong: string;
  nsDiaPhuong: string;
  nsTinh: string;
  nsXa: string;
  luyKeNsnn?: string;
  isHeader?: boolean;
  level?: number;
}

const EXPENSE_DETAIL_TABLE: ExpenseItem[] = [
  { id: '1', tenChiTieu: 'TỔNG CHI NGÂN SÁCH (KỲ)', nsnnKy: '64.333.103', nsTrungUong: '2.883.995', nsDiaPhuong: '61.449.108', nsTinh: '35.493.126', nsXa: '25.955.981', luyKeNsnn: '64.333.103', isHeader: true, level: 0 },
  { id: '2', tenChiTieu: 'Chi Đầu Tư Phát Triển', nsnnKy: '39.659.254', nsTrungUong: '462.072', nsDiaPhuong: '39.197.182', nsTinh: '30.792.732', nsXa: '8.404.450', luyKeNsnn: '39.659.254', isHeader: true, level: 1 },
  { id: '3', tenChiTieu: 'Chi đầu tư XDCB các dự án trọng điểm tỉnh', nsnnKy: '24.150.280', nsTrungUong: '350.000', nsDiaPhuong: '23.800.280', nsTinh: '21.500.280', nsXa: '2.300.000', luyKeNsnn: '24.150.280', level: 2 },
  { id: '4', tenChiTieu: 'Chi đầu tư hạ tầng giao thông kết nối liên vùng', nsnnKy: '8.420.550', nsTrungUong: '112.072', nsDiaPhuong: '8.308.478', nsTinh: '6.120.452', nsXa: '2.188.026', luyKeNsnn: '8.420.550', level: 2 },
  { id: '5', tenChiTieu: 'Chi đầu tư hạ tầng công nghệ và chuyển đổi số', nsnnKy: '3.850.124', nsTrungUong: '0', nsDiaPhuong: '3.850.124', nsTinh: '2.450.000', nsXa: '1.400.124', luyKeNsnn: '3.850.124', level: 2 },
  { id: '6', tenChiTieu: 'Chi đầu tư các chương trình mục tiêu quốc gia', nsnnKy: '3.238.300', nsTrungUong: '0', nsDiaPhuong: '3.238.300', nsTinh: '722.000', nsXa: '2.516.300', luyKeNsnn: '3.238.300', level: 2 },
  { id: '7', tenChiTieu: 'Chi Thường Xuyên', nsnnKy: '24.630.119', nsTrungUong: '2.394.444', nsDiaPhuong: '22.235.675', nsTinh: '4.697.630', nsXa: '17.538.045', luyKeNsnn: '24.630.119', isHeader: true, level: 1 },
  { id: '8', tenChiTieu: 'Chi sự nghiệp kinh tế', nsnnKy: '8.745.210', nsTrungUong: '450.120', nsDiaPhuong: '8.295.090', nsTinh: '2.150.340', nsXa: '6.144.750', luyKeNsnn: '8.745.210', level: 2 },
  { id: '9', tenChiTieu: 'Chi sự nghiệp giáo dục, đào tạo và dạy nghề', nsnnKy: '6.890.350', nsTrungUong: '210.000', nsDiaPhuong: '6.680.350', nsTinh: '1.050.200', nsXa: '5.630.150', luyKeNsnn: '6.890.350', level: 2 },
  { id: '10', tenChiTieu: 'Chi sự nghiệp y tế, dân số và gia đình', nsnnKy: '3.250.400', nsTrungUong: '180.500', nsDiaPhuong: '3.069.900', nsTinh: '820.400', nsXa: '2.249.500', luyKeNsnn: '3.250.400', level: 2 },
  { id: '11', tenChiTieu: 'Chi quản lý hành chính nhà nước, đảng, đoàn thể', nsnnKy: '2.850.120', nsTrungUong: '820.100', nsDiaPhuong: '2.030.020', nsTinh: '420.300', nsXa: '1.609.720', luyKeNsnn: '2.850.120', level: 2 },
  { id: '12', tenChiTieu: 'Chi quốc phòng, an ninh và trật tự an toàn xã hội', nsnnKy: '1.450.300', nsTrungUong: '650.200', nsDiaPhuong: '800.100', nsTinh: '180.200', nsXa: '619.900', luyKeNsnn: '1.450.300', level: 2 },
  { id: '13', tenChiTieu: 'Chi bảo đảm xã hội, an sinh đời sống', nsnnKy: '1.443.739', nsTrungUong: '83.524', nsDiaPhuong: '1.360.215', nsTinh: '76.190', nsXa: '1.284.025', luyKeNsnn: '1.443.739', level: 2 },
  { id: '14', tenChiTieu: 'Các khoản chi khác', nsnnKy: '43.730', nsTrungUong: '27.479', nsDiaPhuong: '16.251', nsTinh: '2.764', nsXa: '13.487', luyKeNsnn: '43.730', level: 1 }
];

export const IOCExpenseFrame: React.FC<IOCExpenseFrameProps> = ({ 
  initialIframeUrl = "https://ioc.hungyen.gov.vn/embed/chi-ngan-sach" 
}) => {
  const [viewMode, setViewMode] = useState<'NATIVE' | 'IFRAME'>('NATIVE');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(initialIframeUrl);
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState(initialIframeUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedPeriod, setSelectedPeriod] = useState('M10');
  const [selectedScope, setSelectedScope] = useState<'ALL' | 'PROVINCIAL_DEPT' | 'COMMUNE' | 'OTHER'>('ALL');
  const [selectedDepartment, setSelectedDepartment] = useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');

  const provincialDepts = OrganizationService.getProvincialDepartments();
  const provincialAgencies = OrganizationService.getProvincialAgencies();
  const communeGovernments = OrganizationService.getCommuneGovernments();
  const wards = AdministrativeUnitService.getWards();
  const communes = AdministrativeUnitService.getCommunes();

  const resetFilters = () => {
    setSelectedYear('2026');
    setSelectedPeriod('M10');
    setSelectedScope('ALL');
    setSelectedDepartment('ALL');
    setSelectedDistrict('ALL');
    setSearchTerm('');
    message.info('Đã xóa bộ lọc về mặc định');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    let csv = "data:text/csv;charset=utf-8,\uFEFF";
    csv += "STT,TÊN CHỈ TIÊU,NSNN KỲ (TRIỆU ĐỒNG),NS TRUNG ƯƠNG,NS ĐỊA PHƯƠNG,NS TỈNH,NS XÃ\n";
    filteredTableData.forEach((item, index) => {
      const ten = `"${item.tenChiTieu.replace(/"/g, '""')}"`;
      csv += `${index + 1},${ten},${item.nsnnKy},${item.nsTrungUong},${item.nsDiaPhuong},${item.nsTinh},${item.nsXa}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Chi_Ngan_Sach_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất ${filteredTableData.length} chỉ tiêu chi ngân sách ra file CSV!`);
  };

  const getOrganizationOptions = () => {
    if (selectedScope === 'PROVINCIAL_DEPT') {
      return [
        { value: 'ALL', label: 'Tất cả Sở / Ban / Ngành' },
        {
          label: '10 SỞ CHUYÊN MÔN CỦA TỈNH',
          options: provincialDepts.map(d => ({ value: d.shortName, label: d.name }))
        },
        {
          label: 'CƠ QUAN TÀI CHÍNH - CHI NGÂN SÁCH & BAN THUỘC TỈNH',
          options: provincialAgencies.map(a => ({ value: a.shortName, label: a.name }))
        }
      ];
    }
    if (selectedScope === 'COMMUNE') {
      return [
        { value: 'ALL', label: 'Tất cả 104 Xã, Phường' },
        {
          label: '11 PHƯỜNG ĐÔ THỊ',
          options: communeGovernments.filter(c => c.name.includes('Phường')).map(c => ({ value: c.shortName, label: c.name }))
        },
        {
          label: '93 XÃ NÔNG THÔN MỚI & CÔNG NGHIỆP',
          options: communeGovernments.filter(c => c.name.includes('Xã')).map(c => ({ value: c.shortName, label: c.name }))
        }
      ];
    }
    if (selectedScope === 'OTHER') {
      return [
        { value: 'ALL', label: 'Tất cả cơ quan phối hợp' },
        ...provincialAgencies.filter(a => a.type === 'OTHER_RELATED_AGENCY').map(a => ({ value: a.shortName, label: a.name }))
      ];
    }
    return [
      { value: 'ALL', label: 'Toàn tỉnh (tất cả cơ quan, đơn vị)' },
      {
        label: '10 SỞ CHUYÊN MÔN CỦA TỈNH',
        options: provincialDepts.map(d => ({ value: d.shortName, label: d.name }))
      },
      {
        label: 'CƠ QUAN TÀI CHÍNH - CHI NGÂN SÁCH & BAN THUỘC TỈNH',
        options: provincialAgencies.map(a => ({ value: a.shortName, label: a.name }))
      },
      {
        label: 'CHÍNH QUYỀN CẤP CƠ SỞ (104 XÃ/PHƯỜNG)',
        options: communeGovernments.map(c => ({ value: c.shortName, label: c.name }))
      }
    ];
  };

  const districtOptions = [
    { value: 'ALL', label: 'Toàn tỉnh Hưng Yên' },
    {
      label: '11 PHƯỜNG ĐÔ THỊ',
      options: wards.map(w => ({ value: w.name, label: w.name }))
    },
    {
      label: '93 XÃ NÔNG THÔN MỚI & CÔNG NGHIỆP',
      options: communes.map(c => ({ value: c.name, label: c.name }))
    }
  ];

  // Dữ liệu Donut cơ cấu theo cấp ngân sách (Ảnh 3)
  const donutData = [
    { name: 'Ngân sách Tỉnh', value: 35493126, pct: '55,2%', color: '#10b981' },
    { name: 'Ngân sách Xã', value: 25955981, pct: '40,3%', color: '#f59e0b' },
    { name: 'Ngân sách Trung ương', value: 2883995, pct: '4,5%', color: '#3b82f6' }
  ];

  // Dữ liệu Xu hướng Thu - Chi ngân sách theo tháng (Ảnh 3)
  const monthlyTrendData = [
    { month: 'T1/2026', thu: 0, chi: 0 },
    { month: 'T2/2026', thu: 10200, chi: 3650 },
    { month: 'T3/2026', thu: 17450, chi: 20850 },
    { month: 'T4/2026', thu: 26085, chi: 25286 },
    { month: 'T5/2026', thu: 36400, chi: 29320 },
    { month: 'T6/2026', thu: 40500, chi: 39150 },
    { month: 'T7/2026', thu: 45200, chi: 0 },
    { month: 'T8/2026', thu: 49500, chi: 53500 },
    { month: 'T9/2026', thu: 52800, chi: 60800 },
    { month: 'T10/2026', thu: 54840, chi: 64333 }
  ];

  const filteredTableData = useMemo(() => {
    if (!searchTerm.trim()) return EXPENSE_DETAIL_TABLE;
    const q = searchTerm.toLowerCase();
    return EXPENSE_DETAIL_TABLE.filter(item => item.tenChiTieu.toLowerCase().includes(q));
  }, [searchTerm]);

  return (
    <div 
      className="ioc-screen-wrapper"
      style={{
        background: '#f8fafc',
        borderRadius: isFullscreen ? 0 : 12,
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        color: '#1e293b',
        fontFamily: "'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: 'hidden',
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? 0 : undefined,
        left: isFullscreen ? 0 : undefined,
        width: isFullscreen ? '100vw' : '100%',
        height: isFullscreen ? '100vh' : 'auto',
        zIndex: isFullscreen ? 99999 : 1,
        marginBottom: 18
      }}
    >
      {/* Top Controller Bar */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Tag color="#ea580c" style={{ borderRadius: 6, fontWeight: 700, padding: '3px 10px', fontSize: 12 }}>
            <GlobalOutlined /> IOC TỈNH HƯNG YÊN - CHI NGÂN SÁCH
          </Tag>
          <span style={{ fontSize: 13, color: '#475569' }}>
            Nguồn: <strong style={{ color: '#0f172a' }}>Hệ thống báo cáo Tabmis</strong> • Số liệu chốt: <strong style={{ color: '#ea580c' }}>12/10/2026</strong>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#10b981', fontWeight: 600 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            Đồng bộ kỳ Tháng 10/2026
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Segmented
            size="small"
            value={viewMode}
            onChange={(val) => setViewMode(val as any)}
            options={[
              { value: 'NATIVE', label: <span><AppstoreOutlined /> Giao diện IOC</span> },
              { value: 'IFRAME', label: <span><LinkOutlined /> Nhúng Iframe Live</span> }
            ]}
            style={{ background: '#f1f5f9', fontWeight: 600 }}
          />

          <Tooltip title="Cấu hình URL Iframe">
            <button 
              onClick={() => setIsUrlModalOpen(true)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#475569'
              }}
            >
              <SettingOutlined />
            </button>
          </Tooltip>

          <Tooltip title={isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình IOC"}>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                border: '1px solid #ea580c',
                background: '#ea580c',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Main IOC Content Area */}
      {viewMode === 'IFRAME' ? (
        <div style={{ width: '100%', height: isFullscreen ? 'calc(100vh - 52px)' : 850, position: 'relative' }}>
          <iframe 
            src={iframeUrl}
            title="IOC Tỉnh Hưng Yên - Chi Ngân Sách"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '6px 14px',
            borderRadius: 6,
            fontSize: 12,
            color: '#475569',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            Đang nhúng link IOC: <span style={{ color: '#ea580c', fontWeight: 600 }}>{iframeUrl}</span>
          </div>
        </div>
      ) : (
        /* NATIVE VIEW - TÁI LẬP 100% GIAO DIỆN CHUẨN ẢNH 3 */
        <div className="thu-chi-ngan-sach-dashboard" style={{ padding: '16px 20px', background: '#f8fafc', minHeight: 700 }}>
          
          {/* Meta line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 12
          }}>
            <p style={{ margin: 0, fontSize: 13.5, color: '#334155' }}>
              Số liệu chốt ngày <strong style={{ color: '#0f172a' }}>12/10/2026</strong>, kỳ báo cáo <strong>Tháng 10/2026</strong> • Nguồn: <strong style={{ color: '#ea580c' }}>Hệ thống Tabmis & Sở Tài chính</strong>
            </p>
          </div>

          {/* CHUẨN FILTER BAR LAYOUT CỦA PHẦN MỀM */}
          <div 
            className="filter-bar"
            style={{
              background: '#ffffff',
              border: '1px solid #DCE5EF',
              borderRadius: 8,
              padding: '10px 14px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              marginBottom: 16
            }}
          >
            {/* Left Filter Controls */}
            <div className="filter-bar-left" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
              {/* Năm */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: 12.5, color: '#64748B' }}>Năm:</span>
                <Select
                  value={selectedYear}
                  onChange={setSelectedYear}
                  style={{ width: 92 }}
                  size="middle"
                  options={[
                    { value: '2026', label: '2026' },
                    { value: '2025', label: '2025' },
                    { value: '2024', label: '2024' }
                  ]}
                />
              </div>

              {/* Kỳ */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: 12.5, color: '#64748B' }}>Kỳ:</span>
                <Select
                  value={selectedPeriod}
                  onChange={setSelectedPeriod}
                  style={{ width: 110 }}
                  size="middle"
                  options={[
                    { value: 'M10', label: 'Tháng 10' },
                    { value: 'M09', label: 'Tháng 9' },
                    { value: 'M08', label: 'Tháng 8' },
                    { value: 'Q3', label: 'Quý III' },
                    { value: 'Q2', label: 'Quý II' },
                    { value: 'Q1', label: 'Quý I' },
                    { value: 'ALL', label: 'Cả năm' }
                  ]}
                />
              </div>

              {/* Phạm vi */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: 12.5, color: '#64748B' }}>Phạm vi:</span>
                <Select
                  value={selectedScope}
                  onChange={(val) => {
                    setSelectedScope(val);
                    setSelectedDepartment('ALL');
                  }}
                  style={{ width: 135 }}
                  size="middle"
                  options={[
                    { value: 'ALL', label: 'Toàn tỉnh' },
                    { value: 'PROVINCIAL_DEPT', label: 'Sở/Ban/Ngành' },
                    { value: 'COMMUNE', label: 'Xã/Phường' },
                    { value: 'OTHER', label: 'Cơ quan khác' }
                  ]}
                />
              </div>

              {/* Đơn vị */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: 12.5, color: '#64748B' }}>Đơn vị:</span>
                <Select
                  value={selectedDepartment}
                  onChange={setSelectedDepartment}
                  style={{ width: 220 }}
                  showSearch
                  optionFilterProp="label"
                  size="middle"
                  options={getOrganizationOptions()}
                />
              </div>

              {/* Địa bàn (104 Xã/Phường) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: 12.5, color: '#64748B' }}>Địa bàn:</span>
                <Select
                  value={selectedDistrict}
                  onChange={setSelectedDistrict}
                  style={{ width: 195 }}
                  size="middle"
                  showSearch
                  optionFilterProp="label"
                  options={districtOptions}
                />
              </div>

              {/* Search input */}
              <Input
                placeholder="Tìm từ khóa / chỉ tiêu chi..."
                prefix={<SearchOutlined style={{ color: '#94a3b8' }} />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: 175 }}
                allowClear
                size="middle"
              />
            </div>

            {/* Right Action Buttons */}
            <Space size={6} className="filter-bar-right">
              <Button 
                icon={<CloseCircleOutlined />} 
                onClick={resetFilters}
                size="middle"
              >
                Xóa lọc
              </Button>

              <Button 
                icon={<ReloadOutlined />} 
                onClick={() => {
                  message.success('Đã làm mới dữ liệu chi ngân sách từ IOC!');
                }}
                size="middle"
              >
                Làm mới
              </Button>

              <Button 
                type="primary"
                icon={<DownloadOutlined />}
                onClick={handleExportCSV}
                size="middle"
                style={{ background: '#1769AA', borderColor: '#1769AA', fontWeight: 600 }}
              >
                Xuất CSV
              </Button>

              <Button 
                icon={<PrinterOutlined />} 
                onClick={handlePrint}
                size="middle"
              >
                In
              </Button>
            </Space>
          </div>

          {/* HÀNG 1: 2 THẺ KPI CHÍNH (CHI NGÂN SÁCH KỲ & LŨY KẾ) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 16,
            marginBottom: 16
          }}>
            {/* THẺ 1: CHI NGÂN SÁCH (KỲ) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #f97316',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
                CHI NGÂN SÁCH (KỲ)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: '#fff7ed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ea580c',
                  fontSize: 26,
                  flexShrink: 0
                }}>
                  💸
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    64.333,1
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginTop: 2 }}>
                    Tỷ đồng
                  </div>
                </div>
              </div>

              {/* Tiến độ phân bổ */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                      Ngân sách Tỉnh
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      35.493.126 <span style={{ color: '#64748b', fontWeight: 500 }}>(55,2%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '55.2%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                      Ngân sách Xã
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      25.955.981 <span style={{ color: '#64748b', fontWeight: 500 }}>(40,3%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '40.3%', height: '100%', background: '#f59e0b', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }} />
                      Ngân sách Trung ương
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      2.883.995 <span style={{ color: '#64748b', fontWeight: 500 }}>(4,5%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '4.5%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>

            {/* THẺ 2: CHI NGÂN SÁCH (LŨY KẾ) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #f97316',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
                CHI NGÂN SÁCH (LŨY KẾ)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: '#fff7ed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ea580c',
                  fontSize: 26,
                  flexShrink: 0
                }}>
                  📊
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    64.333,1
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginTop: 2 }}>
                    Tỷ đồng
                  </div>
                </div>
              </div>

              {/* Tiến độ phân bổ */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                      Ngân sách Tỉnh
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      35.493.126 <span style={{ color: '#64748b', fontWeight: 500 }}>(55,2%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '55.2%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                      Ngân sách Xã
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      25.955.981 <span style={{ color: '#64748b', fontWeight: 500 }}>(40,3%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '40.3%', height: '100%', background: '#f59e0b', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }} />
                      Ngân sách Trung ương
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      2.883.995 <span style={{ color: '#64748b', fontWeight: 500 }}>(4,5%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '4.5%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HÀNG 2: THANH PHÂN BỔ TỶ TRỌNG (CHI ĐTPT 61,6% / CHI THƯỜNG XUYÊN 38,3% / CHI KHÁC 0,1%) */}
          <div style={{
            background: '#ffffff',
            borderRadius: 10,
            padding: '14px 18px',
            border: '1px solid #e2e8f0',
            borderLeft: '4px solid #3b82f6',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            marginBottom: 16
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 10 }}>
              Tỷ trọng trong tổng chi ngân sách kỳ Tháng 10/2026
            </div>

            <div style={{ display: 'flex', height: 14, borderRadius: 7, overflow: 'hidden', background: '#f1f5f9', marginBottom: 10 }}>
              {/* Chi ĐTPT: 61.6% */}
              <div style={{ width: '61.6%', background: 'linear-gradient(90deg, #3b82f6, #2563eb)' }} title="Chi đầu tư phát triển: 61,6%" />
              {/* Chi thường xuyên: 38.3% */}
              <div style={{ width: '38.3%', background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)' }} title="Chi thường xuyên: 38,3%" />
              {/* Chi khác: 0.1% */}
              <div style={{ width: '0.1%', background: '#cbd5e1' }} title="Các khoản chi khác: 0,1%" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: '#3b82f6' }} />
                <span style={{ color: '#475569' }}>Chi đầu tư phát triển</span>
                <strong style={{ color: '#2563eb' }}>61,6%</strong>
                <span style={{ color: '#64748b' }}>39.659,3 tỷ</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: '#8b5cf6' }} />
                <span style={{ color: '#475569' }}>Chi thường xuyên</span>
                <strong style={{ color: '#7c3aed' }}>38,3%</strong>
                <span style={{ color: '#64748b' }}>24.630,1 tỷ</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: '#cbd5e1' }} />
                <span style={{ color: '#475569' }}>Các khoản chi khác</span>
                <strong style={{ color: '#475569' }}>0,1%</strong>
                <span style={{ color: '#64748b' }}>43,7 tỷ</span>
              </div>
            </div>
          </div>

          {/* HÀNG 3: 2 THẺ KPI PHỤ (CHI ĐTPT & CHI THƯỜNG XUYÊN) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 16,
            marginBottom: 16
          }}>
            {/* THẺ 3: CHI ĐẦU TƯ PHÁT TRIỂN (KỲ) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #3b82f6',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
                CHI ĐẦU TƯ PHÁT TRIỂN (KỲ)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: '#eff6ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6',
                  fontSize: 26,
                  flexShrink: 0
                }}>
                  📈
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    39.659,3
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginTop: 2 }}>
                    Tỷ đồng
                  </div>
                </div>
              </div>

              {/* Chi tiết phân bổ Tỉnh / Xã / TW */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                      Ngân sách Tỉnh
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      30.792.732 <span style={{ color: '#64748b', fontWeight: 500 }}>(77,6%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '77.6%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                      Ngân sách Xã
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      8.404.450 <span style={{ color: '#64748b', fontWeight: 500 }}>(21,2%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '21.2%', height: '100%', background: '#f59e0b', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }} />
                      Ngân sách Trung ương
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      462.072 <span style={{ color: '#64748b', fontWeight: 500 }}>(1,2%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '1.2%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>

            {/* THẺ 4: CHI THƯỜNG XUYÊN (KỲ) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #8b5cf6',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
                CHI THƯỜNG XUYÊN (KỲ)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: '#f5f3ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b5cf6',
                  fontSize: 26,
                  flexShrink: 0
                }}>
                  🔄
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    24.630,1
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginTop: 2 }}>
                    Tỷ đồng
                  </div>
                </div>
              </div>

              {/* Chi tiết phân bổ Xã / Tỉnh / TW */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                      Ngân sách Xã
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      17.538.045 <span style={{ color: '#64748b', fontWeight: 500 }}>(71,2%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '71.2%', height: '100%', background: '#f59e0b', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'center', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                      Ngân sách Tỉnh
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      4.697.630 <span style={{ color: '#64748b', fontWeight: 500 }}>(19,1%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '19.1%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }} />
                      Ngân sách Trung ương
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      2.394.444 <span style={{ color: '#64748b', fontWeight: 500 }}>(9,7%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '9.7%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HÀNG 4: 2 BIỂU ĐỒ SONG SONG (CƠ CẤU CẤP CHI & XU HƯỚNG THU-CHI) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: 16,
            marginBottom: 16
          }}>
            {/* PANEL TRÁI: CƠ CẤU THEO CẤP NGÂN SÁCH (KỲ Tháng 10/2026) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #ea580c',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#ea580c', letterSpacing: '0.03em', margin: '0 0 14px 0', textTransform: 'uppercase' }}>
                CƠ CẤU THEO CẤP NGÂN SÁCH (KỲ Tháng 10/2026)
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                {/* Donut Chart */}
                <div style={{ width: 170, height: 170, position: 'relative' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={donutData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={48}
                        outerRadius={75}
                        stroke="#ffffff"
                        strokeWidth={2}
                      >
                        {donutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    pointerEvents: 'none'
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>64.333,1</div>
                    <div style={{ fontSize: 9.5, color: '#64748b' }}>Tỷ đồng</div>
                  </div>
                </div>

                {/* Legend list */}
                <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {donutData.map((item, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 2 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                          <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }} />
                          {item.name}
                        </span>
                        <span style={{ color: '#0f172a', fontWeight: 700 }}>
                          {item.value.toLocaleString('vi-VN')} <span style={{ color: '#64748b', fontWeight: 500 }}>({item.pct})</span>
                        </span>
                      </div>
                      <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                        <div style={{ 
                          width: item.pct.replace(',', '.'), 
                          height: '100%', 
                          background: item.color, 
                          borderRadius: 3 
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PANEL PHẢI: XU HƯỚNG THU - CHI NGÂN SÁCH THEO THÁNG */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderLeft: '4px solid #ea580c',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#ea580c', letterSpacing: '0.03em', margin: 0, textTransform: 'uppercase' }}>
                  XU HƯỚNG THU - CHI NGÂN SÁCH THEO THÁNG
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11.5 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: '#34d399' }} />
                    Thu ngân sách
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#475569' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: '#fbbf24' }} />
                    Chi ngân sách
                  </span>
                </div>
              </div>

              <div style={{ height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyTrendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 10.5 }} axisLine={{ stroke: '#cbd5e1' }} tickLine={false} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 10.5 }} axisLine={false} tickLine={false} tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`} />
                    <RechartsTooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const thuVal = payload.find(p => p.dataKey === 'thu')?.value || 0;
                          const chiVal = payload.find(p => p.dataKey === 'chi')?.value || 0;
                          return (
                            <div style={{
                              background: '#ffffff',
                              border: '1px solid #e2e8f0',
                              borderRadius: 6,
                              padding: '8px 12px',
                              fontSize: 12,
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}>
                              <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{label}</div>
                              <div style={{ color: '#059669', marginBottom: 2 }}>
                                • Thu ngân sách: <strong>{thuVal.toLocaleString('vi-VN')}</strong> tỷ
                              </div>
                              <div style={{ color: '#d97706' }}>
                                • Chi ngân sách: <strong>{chiVal.toLocaleString('vi-VN')}</strong> tỷ
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="thu" fill="#34d399" radius={[4, 4, 0, 0]} maxBarSize={22} name="Thu ngân sách" />
                    <Bar dataKey="chi" fill="#fbbf24" radius={[4, 4, 0, 0]} maxBarSize={22} name="Chi ngân sách" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* HÀNG 5: BẢNG CHI TIẾT CHI NGÂN SÁCH NHÀ NƯỚC */}
          <div style={{
            background: '#ffffff',
            borderRadius: 10,
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '14px 20px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12
            }}>
              <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#0f172a', margin: 0, letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                CHI TIẾT CHI NGÂN SÁCH NHÀ NƯỚC (KỲ Tháng 10/2026) - TRIỆU ĐỒNG
              </h3>

              <div style={{ width: 280 }}>
                <Input
                  prefix={<SearchOutlined style={{ color: '#94a3b8' }} />}
                  placeholder="Tìm kiếm chỉ tiêu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  allowClear
                  style={{ borderRadius: 6, fontSize: 12.5 }}
                />
              </div>
            </div>

            <div style={{ maxHeight: 480, overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5, textAlign: 'left' }}>
                <thead style={{ position: 'sticky', top: 0, background: '#f8fafc', zIndex: 10, borderBottom: '2px solid #e2e8f0' }}>
                  <tr style={{ color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '10px 14px', textAlign: 'left', minWidth: 260 }}>Chỉ tiêu chi</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', minWidth: 120 }}>NSNN (kỳ)</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', minWidth: 120 }}>NS Trung ương</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', minWidth: 120 }}>NS Địa phương</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', minWidth: 120 }}>NS Tỉnh</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', minWidth: 120 }}>NS Xã</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', minWidth: 120 }}>Lũy kế NSNN</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTableData.map((row, index) => {
                    const isTotal = row.level === 0;
                    const isParent = row.isHeader;
                    const indentPx = (row.level || 0) * 16;

                    return (
                      <tr 
                        key={row.id}
                        style={{
                          borderBottom: '1px solid #f1f5f9',
                          background: isTotal ? '#f1f5f9' : index % 2 === 0 ? '#ffffff' : '#fafafa',
                          fontWeight: isTotal ? 800 : isParent ? 700 : 500,
                          color: isTotal ? '#0f172a' : '#334155',
                          transition: 'background 0.15s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#fff7ed'; }}
                        onMouseLeave={(e) => { 
                          e.currentTarget.style.background = isTotal ? '#f1f5f9' : index % 2 === 0 ? '#ffffff' : '#fafafa'; 
                        }}
                      >
                        <td style={{ padding: '9px 14px', paddingLeft: 14 + indentPx, textAlign: 'left' }}>
                          {isParent && <span style={{ color: '#ea580c', marginRight: 4 }}>•</span>}
                          {row.tenChiTieu}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right', color: isTotal ? '#ea580c' : undefined }}>
                          {row.nsnnKy}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right' }}>
                          {row.nsTrungUong}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right' }}>
                          {row.nsDiaPhuong}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right', color: '#10b981' }}>
                          {row.nsTinh}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right', color: '#f59e0b' }}>
                          {row.nsXa}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right', fontWeight: 700 }}>
                          {row.luyKeNsnn}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div style={{
              padding: '8px 16px',
              background: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 12,
              color: '#64748b'
            }}>
              <span>Hiển thị {filteredTableData.length} / {EXPENSE_DETAIL_TABLE.length} chỉ tiêu chi ngân sách</span>
              <span>Đơn vị tính: Triệu đồng • Cập nhật từ Hệ thống báo cáo Tabmis</span>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cấu hình URL Iframe */}
      <Modal
        title="Cấu hình URL Iframe IOC Tỉnh Hưng Yên"
        open={isUrlModalOpen}
        onOk={() => {
          setIframeUrl(tempUrl);
          setIsUrlModalOpen(false);
        }}
        onCancel={() => {
          setTempUrl(iframeUrl);
          setIsUrlModalOpen(false);
        }}
        okText="Lưu liên kết"
        cancelText="Hủy"
      >
        <div style={{ marginBottom: 12, fontSize: 13, color: '#64748b' }}>
          Nhập URL cổng thông tin điều hành IOC Tỉnh Hưng Yên để nhúng trực tiếp qua Iframe:
        </div>
        <Input 
          value={tempUrl}
          onChange={(e) => setTempUrl(e.target.value)}
          placeholder="https://ioc.hungyen.gov.vn/embed/chi-ngan-sach"
        />
      </Modal>
    </div>
  );
};
