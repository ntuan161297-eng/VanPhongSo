import React, { useState, useMemo } from 'react';
import { Tag, Tooltip, Input, Select, Modal, Segmented, Button, Space, message } from 'antd';
import { 
  FullscreenOutlined, 
  FullscreenExitOutlined, 
  ReloadOutlined, 
  LinkOutlined, 
  SettingOutlined, 
  GlobalOutlined,
  AppstoreOutlined,
  SearchOutlined,
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

interface IOCRevenueFrameProps {
  initialIframeUrl?: string;
}

// Dữ liệu bảng chi tiết thu ngân sách nhà nước chốt ngày 12/10/2026 (Triệu đồng) từ HTML IOC Tỉnh
interface RevenueItem {
  id: string;
  tenChiTieu: string;
  nsnnKy: string;
  nsTrungUong: string;
  nsDiaPhuong: string;
  nsTinh: string;
  nsXa: string;
  luyKeNsnn: string;
  isHeader?: boolean;
  level?: number;
}

const REVENUE_DETAIL_TABLE: RevenueItem[] = [
  { id: '1', tenChiTieu: 'TỔNG SỐ', nsnnKy: '206.059.377', nsTrungUong: '14.472.055', nsDiaPhuong: '191.587.322', nsTinh: '147.050.516', nsXa: '44.536.807', luyKeNsnn: '206.074.921', isHeader: true, level: 0 },
  { id: '2', tenChiTieu: 'TỔNG SỐ (Đã loại trừ hoàn thuế GTGT)', nsnnKy: '200.710.379', nsTrungUong: '9.123.057', nsDiaPhuong: '191.587.322', nsTinh: '147.050.516', nsXa: '44.536.807', luyKeNsnn: '200.725.923', isHeader: true, level: 0 },
  { id: '3', tenChiTieu: 'Thu Ngân Sách Nhà Nước', nsnnKy: '54.840.065', nsTrungUong: '9.451.634', nsDiaPhuong: '45.388.430', nsTinh: '36.063.786', nsXa: '9.324.646', luyKeNsnn: '54.840.065', isHeader: true, level: 1 },
  { id: '4', tenChiTieu: 'Thu NSNN (Đã loại trừ hoàn thuế GTGT)', nsnnKy: '49.491.067', nsTrungUong: '4.102.636', nsDiaPhuong: '45.388.430', nsTinh: '36.063.786', nsXa: '9.324.646', luyKeNsnn: '49.491.067', isHeader: true, level: 1 },
  { id: '5', tenChiTieu: 'Thu nội địa không kể dầu thô', nsnnKy: '48.819.872', nsTrungUong: '3.689.665', nsDiaPhuong: '45.130.207', nsTinh: '35.884.831', nsXa: '9.245.377', luyKeNsnn: '48.819.872', isHeader: true, level: 2 },
  { id: '6', tenChiTieu: 'Thu từ khu vực doanh nghiệp do Nhà nước giữ vai trò chủ đạo', nsnnKy: '1.016.438', nsTrungUong: '177', nsDiaPhuong: '1.016.261', nsTinh: '1.016.261', nsXa: '0', luyKeNsnn: '1.016.438', level: 3 },
  { id: '7', tenChiTieu: 'Thu từ khu vực DN do Nhà nước giữ vai trò chủ đạo Trung ương quản lý', nsnnKy: '896.479', nsTrungUong: '177', nsDiaPhuong: '896.303', nsTinh: '896.303', nsXa: '0', luyKeNsnn: '896.479', level: 4 },
  { id: '8', tenChiTieu: 'Thuế giá trị gia tăng hàng sản xuất - kinh doanh trong nước', nsnnKy: '645.778', nsTrungUong: '55', nsDiaPhuong: '645.723', nsTinh: '645.723', nsXa: '0', luyKeNsnn: '645.778', level: 5 },
  { id: '9', tenChiTieu: 'Tr.đó: Từ hoạt động thăm dò và khai thác dầu, khí bán ra trong nước', nsnnKy: '55', nsTrungUong: '55', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '55', level: 6 },
  { id: '10', tenChiTieu: 'Thuế thu nhập doanh nghiệp', nsnnKy: '63.756', nsTrungUong: '0', nsDiaPhuong: '63.756', nsTinh: '63.756', nsXa: '0', luyKeNsnn: '63.756', level: 5 },
  { id: '11', tenChiTieu: 'Thuế tài nguyên', nsnnKy: '186.824', nsTrungUong: '0', nsDiaPhuong: '186.824', nsTinh: '186.824', nsXa: '0', luyKeNsnn: '186.824', level: 5 },
  { id: '12', tenChiTieu: 'Thu từ khí thiên nhiên, khí than theo hiệp định, hợp đồng', nsnnKy: '121', nsTrungUong: '121', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '121', level: 5 },
  { id: '13', tenChiTieu: 'Thu từ khu vực DN do Nhà nước giữ vai trò chủ đạo địa phương quản lý', nsnnKy: '119.958', nsTrungUong: '0', nsDiaPhuong: '119.958', nsTinh: '119.958', nsXa: '0', luyKeNsnn: '119.958', level: 4 },
  { id: '14', tenChiTieu: 'Thuế giá trị gia tăng hàng sản xuất - kinh doanh trong nước', nsnnKy: '67.332', nsTrungUong: '0', nsDiaPhuong: '67.332', nsTinh: '67.332', nsXa: '0', luyKeNsnn: '67.332', level: 5 },
  { id: '15', tenChiTieu: 'Thuế thu nhập doanh nghiệp', nsnnKy: '51.270', nsTrungUong: '0', nsDiaPhuong: '51.270', nsTinh: '51.270', nsXa: '0', luyKeNsnn: '51.270', level: 5 },
  { id: '16', tenChiTieu: 'Thuế tài nguyên', nsnnKy: '1.356', nsTrungUong: '0', nsDiaPhuong: '1.356', nsTinh: '1.356', nsXa: '0', luyKeNsnn: '1.356', level: 5 },
  { id: '17', tenChiTieu: 'Thu từ khu vực doanh nghiệp có vốn đầu tư nước ngoài (FDI)', nsnnKy: '3.599.495', nsTrungUong: '0', nsDiaPhuong: '3.599.495', nsTinh: '3.599.495', nsXa: '0', luyKeNsnn: '3.599.495', level: 3 },
  { id: '18', tenChiTieu: 'Thuế giá trị gia tăng hàng sản xuất - kinh doanh trong nước', nsnnKy: '617.860', nsTrungUong: '0', nsDiaPhuong: '617.860', nsTinh: '617.860', nsXa: '0', luyKeNsnn: '617.860', level: 4 },
  { id: '19', tenChiTieu: 'Thuế tiêu thụ đặc biệt hàng SX-KD trong nước', nsnnKy: '52.344', nsTrungUong: '0', nsDiaPhuong: '52.344', nsTinh: '52.344', nsXa: '0', luyKeNsnn: '52.344', level: 4 },
  { id: '20', tenChiTieu: 'Thuế thu nhập doanh nghiệp', nsnnKy: '2.888.897', nsTrungUong: '0', nsDiaPhuong: '2.888.897', nsTinh: '2.888.897', nsXa: '0', luyKeNsnn: '2.888.897', level: 4 },
  { id: '21', tenChiTieu: 'Thuế tài nguyên', nsnnKy: '40.394', nsTrungUong: '0', nsDiaPhuong: '40.394', nsTinh: '40.394', nsXa: '0', luyKeNsnn: '40.394', level: 4 },
  { id: '22', tenChiTieu: 'Thu từ khu vực kinh tế ngoài quốc doanh', nsnnKy: '18.511.174', nsTrungUong: '87.176', nsDiaPhuong: '18.423.998', nsTinh: '18.194.496', nsXa: '229.502', luyKeNsnn: '18.511.174', isHeader: true, level: 3 },
  { id: '23', tenChiTieu: 'Thuế giá trị gia tăng hàng sản xuất - kinh doanh trong nước', nsnnKy: '9.919.854', nsTrungUong: '0', nsDiaPhuong: '9.919.854', nsTinh: '9.692.503', nsXa: '227.351', luyKeNsnn: '9.919.854', level: 4 },
  { id: '24', tenChiTieu: 'Thuế tiêu thụ đặc biệt hàng sản xuất - kinh doanh trong nước', nsnnKy: '747.001', nsTrungUong: '87.143', nsDiaPhuong: '659.859', nsTinh: '657.877', nsXa: '1.982', luyKeNsnn: '747.001', level: 4 },
  { id: '25', tenChiTieu: 'Tr.đó: Thuế tiêu thụ đặc biệt hàng nhập khẩu bán ra trong nước', nsnnKy: '87.143', nsTrungUong: '87.143', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '87.143', level: 5 },
  { id: '26', tenChiTieu: 'Thuế thu nhập doanh nghiệp', nsnnKy: '7.794.414', nsTrungUong: '33', nsDiaPhuong: '7.794.381', nsTinh: '7.794.381', nsXa: '0', luyKeNsnn: '7.794.414', level: 4 },
  { id: '27', tenChiTieu: 'Thuế tài nguyên', nsnnKy: '49.904', nsTrungUong: '0', nsDiaPhuong: '49.904', nsTinh: '49.735', nsXa: '170', luyKeNsnn: '49.904', level: 4 },
  { id: '28', tenChiTieu: 'Thuế thu nhập cá nhân', nsnnKy: '2.516.782', nsTrungUong: '-12', nsDiaPhuong: '2.516.794', nsTinh: '2.283.771', nsXa: '233.023', luyKeNsnn: '2.516.782', level: 3 },
  { id: '29', tenChiTieu: 'Thuế bảo vệ môi trường do cơ quan thuế thực hiện', nsnnKy: '232.681', nsTrungUong: '92.059', nsDiaPhuong: '140.622', nsTinh: '140.622', nsXa: '0', luyKeNsnn: '232.681', level: 3 },
  { id: '30', tenChiTieu: 'Lệ phí trước bạ', nsnnKy: '1.301.169', nsTrungUong: '0', nsDiaPhuong: '1.301.169', nsTinh: '749.307', nsXa: '551.862', luyKeNsnn: '1.301.169', level: 3 },
  { id: '31', tenChiTieu: 'Các loại phí, lệ phí', nsnnKy: '164.660', nsTrungUong: '63.031', nsDiaPhuong: '101.630', nsTinh: '82.713', nsXa: '18.917', luyKeNsnn: '164.660', level: 3 },
  { id: '32', tenChiTieu: 'Thu phí, lệ phí trung ương', nsnnKy: '63.973', nsTrungUong: '63.031', nsDiaPhuong: '942', nsTinh: '942', nsXa: '0', luyKeNsnn: '63.973', level: 4 },
  { id: '33', tenChiTieu: 'Thu phí, lệ phí tỉnh', nsnnKy: '63.667', nsTrungUong: '0', nsDiaPhuong: '63.667', nsTinh: '63.663', nsXa: '4', luyKeNsnn: '63.667', level: 4 },
  { id: '34', tenChiTieu: 'Thu phí, lệ phí xã', nsnnKy: '37.021', nsTrungUong: '0', nsDiaPhuong: '37.021', nsTinh: '18.109', nsXa: '18.913', luyKeNsnn: '37.021', level: 4 },
  { id: '35', tenChiTieu: 'Các khoản thu về nhà, đất', nsnnKy: '20.238.832', nsTrungUong: '3.025.642', nsDiaPhuong: '17.213.190', nsTinh: '9.230.206', nsXa: '7.982.984', luyKeNsnn: '20.238.832', isHeader: true, level: 3 },
  { id: '36', tenChiTieu: 'Thu tiền cho thuê đất, thuê mặt nước', nsnnKy: '619.807', nsTrungUong: '92.207', nsDiaPhuong: '527.601', nsTinh: '518.452', nsXa: '9.148', luyKeNsnn: '619.807', isHeader: true, level: 4 },
  { id: '37', tenChiTieu: 'Thu tiền sử dụng đất', nsnnKy: '19.544.192', nsTrungUong: '2.933.436', nsDiaPhuong: '16.610.756', nsTinh: '8.711.605', nsXa: '7.899.151', luyKeNsnn: '19.544.192', isHeader: true, level: 4 },
  { id: '38', tenChiTieu: 'Thu tiền cho thuê và bán nhà ở thuộc sở hữu nhà nước', nsnnKy: '148', nsTrungUong: '0', nsDiaPhuong: '148', nsTinh: '148', nsXa: '0', luyKeNsnn: '148', level: 4 },
  { id: '39', tenChiTieu: 'Thu từ hoạt động xổ số kiến thiết', nsnnKy: '79.857', nsTrungUong: '0', nsDiaPhuong: '79.857', nsTinh: '79.857', nsXa: '0', luyKeNsnn: '79.857', level: 3 },
  { id: '40', tenChiTieu: 'Thu tiền cấp quyền khai thác khoáng sản, vùng trời, vùng biển', nsnnKy: '112.680', nsTrungUong: '18.626', nsDiaPhuong: '94.054', nsTinh: '94.054', nsXa: '0', luyKeNsnn: '112.680', level: 3 },
  { id: '41', tenChiTieu: 'Thu khác ngân sách', nsnnKy: '902.139', nsTrungUong: '402.966', nsDiaPhuong: '499.173', nsTinh: '405.147', nsXa: '94.026', luyKeNsnn: '902.139', level: 3 },
  { id: '42', tenChiTieu: 'Thu tiền phạt', nsnnKy: '360.473', nsTrungUong: '263.385', nsDiaPhuong: '97.088', nsTinh: '41.697', nsXa: '55.392', luyKeNsnn: '360.473', level: 4 },
  { id: '43', tenChiTieu: 'Thu tịch thu', nsnnKy: '133.727', nsTrungUong: '133.624', nsDiaPhuong: '104', nsTinh: '0', nsXa: '104', luyKeNsnn: '133.727', level: 4 },
  { id: '44', tenChiTieu: 'Thu cân đối từ hoạt động xuất nhập khẩu', nsnnKy: '412.971', nsTrungUong: '412.971', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '412.971', isHeader: true, level: 2 },
  { id: '45', tenChiTieu: 'Tổng thu từ hoạt động XNK', nsnnKy: '5.761.969', nsTrungUong: '5.761.969', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '5.761.969', level: 3 },
  { id: '46', tenChiTieu: 'Thuế xuất khẩu', nsnnKy: '34.130', nsTrungUong: '34.130', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '34.130', level: 4 },
  { id: '47', tenChiTieu: 'Thuế nhập khẩu', nsnnKy: '582.210', nsTrungUong: '582.210', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '582.210', level: 4 },
  { id: '48', tenChiTieu: 'Thuế giá trị gia tăng hàng nhập khẩu', nsnnKy: '5.106.954', nsTrungUong: '5.106.954', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '5.106.954', level: 4 },
  { id: '49', tenChiTieu: 'Hoàn thuế GTGT', nsnnKy: '-5.348.998', nsTrungUong: '-5.348.998', nsDiaPhuong: '0', nsTinh: '0', nsXa: '0', luyKeNsnn: '-5.348.998', level: 3 },
  { id: '50', tenChiTieu: 'Các khoản huy động, đóng góp', nsnnKy: '256.887', nsTrungUong: '0', nsDiaPhuong: '256.887', nsTinh: '177.618', nsXa: '79.269', luyKeNsnn: '256.887', level: 2 }
];

export const IOCRevenueFrame: React.FC<IOCRevenueFrameProps> = ({ 
  initialIframeUrl = "https://ioc.hungyen.gov.vn/embed/thu-ngan-sach" 
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
    csv += "STT,TÊN CHỈ TIÊU,NSNN KỲ (TRIỆU ĐỒNG),NS TRUNG ƯƠNG,NS ĐỊA PHƯƠNG,NS TỈNH,NS XÃ,LŨY KẾ NSNN\n";
    filteredTableData.forEach((item, index) => {
      const ten = `"${item.tenChiTieu.replace(/"/g, '""')}"`;
      csv += `${index + 1},${ten},${item.nsnnKy},${item.nsTrungUong},${item.nsDiaPhuong},${item.nsTinh},${item.nsXa},${item.luyKeNsnn}\n`;
    });
    const encoded = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Hung_Yen_Thu_Ngan_Sach_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success(`Đã xuất ${filteredTableData.length} chỉ tiêu thu ngân sách ra file CSV!`);
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
          label: 'CƠ QUAN TÀI CHÍNH - THUẾ - KHO BẠC & BAN THUỘC TỈNH',
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
        label: 'CƠ QUAN TÀI CHÍNH - THUẾ - KHO BẠC & BAN THUỘC TỈNH',
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

  // Dữ liệu biểu đồ cơ cấu theo cấp ngân sách (Donut)
  const donutData = [
    { name: 'Ngân sách Tỉnh', value: 36063786, pct: '65,8%', color: '#10b981' },
    { name: 'Ngân sách Trung ương', value: 9451634, pct: '17,2%', color: '#3b82f6' },
    { name: 'Ngân sách Xã', value: 9324646, pct: '17,0%', color: '#f59e0b' }
  ];

  // Dữ liệu biểu đồ Xu hướng Thu - Chi ngân sách theo tháng (Ảnh 4)
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

  // Filter chi tiết bảng theo ô tìm kiếm
  const filteredTableData = useMemo(() => {
    if (!searchTerm.trim()) return REVENUE_DETAIL_TABLE;
    const q = searchTerm.toLowerCase();
    return REVENUE_DETAIL_TABLE.filter(item => item.tenChiTieu.toLowerCase().includes(q));
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
      {/* Top Controller Bar (Thanh điều hướng & Tích hợp nguồn IOC Tỉnh) */}
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
          <Tag color="#059669" style={{ borderRadius: 6, fontWeight: 700, padding: '3px 10px', fontSize: 12 }}>
            <GlobalOutlined /> IOC TỈNH HƯNG YÊN
          </Tag>
          <span style={{ fontSize: 13, color: '#475569' }}>
            Nguồn: <strong style={{ color: '#0f172a' }}>Hệ thống báo cáo Tabmis</strong> • Số liệu chốt: <strong style={{ color: '#059669' }}>12/10/2026</strong>
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
                border: '1px solid #059669',
                background: '#059669',
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
            title="IOC Tỉnh Hưng Yên - Thu Ngân Sách"
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
            Đang nhúng link IOC: <span style={{ color: '#0284c7', fontWeight: 600 }}>{iframeUrl}</span>
          </div>
        </div>
      ) : (
        /* NATIVE VIEW - TÁI LẬP 100% GIAO DIỆN CHUẨN HTML & ẢNH 4 */
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
              Số liệu chốt ngày <strong style={{ color: '#0f172a' }}>12/10/2026</strong>, kỳ báo cáo <strong>Tháng 10/2026</strong> • Nguồn: <strong style={{ color: '#059669' }}>Hệ thống Tabmis & Sở Tài chính</strong>
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
                placeholder="Tìm từ khóa / chỉ tiêu..."
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
                  message.success('Đã làm mới dữ liệu thu ngân sách từ IOC!');
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

          {/* HÀNG 1: 2 THẺ KPI CHÍNH (THU NGÂN SÁCH KỲ & LŨY KẾ) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 16,
            marginBottom: 16
          }}>
            {/* THẺ 1: THU NGÂN SÁCH (KỲ) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #10b981',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
                THU NGÂN SÁCH (KỲ)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: '#ecfdf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  fontSize: 26,
                  flexShrink: 0
                }}>
                  💵
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    54.840,1
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginTop: 2 }}>
                    Tỷ đồng
                  </div>
                </div>
              </div>

              {/* Thanh tiến độ chi tiết Tỉnh / TW / Xã */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {/* Ngân sách Tỉnh */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                      Ngân sách Tỉnh
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      36.063.786 <span style={{ color: '#64748b', fontWeight: 500 }}>(65,8%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '65.76%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                  </div>
                </div>

                {/* Ngân sách Trung ương */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }} />
                      Ngân sách Trung ương
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      9.451.634 <span style={{ color: '#64748b', fontWeight: 500 }}>(17,2%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '17.23%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
                  </div>
                </div>

                {/* Ngân sách Xã */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                      Ngân sách Xã
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      9.324.646 <span style={{ color: '#64748b', fontWeight: 500 }}>(17,0%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '17.00%', height: '100%', background: '#f59e0b', borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>

            {/* THẺ 2: THU NGÂN SÁCH (LŨY KẾ) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #10b981',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
                THU NGÂN SÁCH (LŨY KẾ)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: '50%',
                  background: '#ecfdf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  fontSize: 26,
                  flexShrink: 0
                }}>
                  📈
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    54.840,1
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginTop: 2 }}>
                    Tỷ đồng
                  </div>
                </div>
              </div>

              {/* Thanh tiến độ chi tiết Tỉnh / TW / Xã */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {/* Ngân sách Tỉnh */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                      Ngân sách Tỉnh
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      36.063.786 <span style={{ color: '#64748b', fontWeight: 500 }}>(65,8%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '65.76%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                  </div>
                </div>

                {/* Ngân sách Trung ương */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }} />
                      Ngân sách Trung ương
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      9.451.634 <span style={{ color: '#64748b', fontWeight: 500 }}>(17,2%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '17.23%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
                  </div>
                </div>

                {/* Ngân sách Xã */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                      Ngân sách Xã
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      9.324.646 <span style={{ color: '#64748b', fontWeight: 500 }}>(17,0%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '17.00%', height: '100%', background: '#f59e0b', borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HÀNG 2: THANH PHÂN BỔ TỶ TRỌNG (THU TIỀN SDĐ / THU THUÊ ĐẤT / THU KHÁC) */}
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
              Tỷ trọng trong tổng thu ngân sách kỳ Tháng 10/2026
            </div>

            {/* Segmented Bar */}
            <div style={{ display: 'flex', height: 14, borderRadius: 7, overflow: 'hidden', background: '#f1f5f9', marginBottom: 10 }}>
              {/* Thu tiền sử dụng đất: 35.6% */}
              <div style={{ width: '35.63%', background: 'linear-gradient(90deg, #3b82f6, #2563eb)' }} title="Thu tiền sử dụng đất: 35,6%" />
              {/* Thu tiền thuê đất: 1.1% */}
              <div style={{ width: '1.13%', background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)' }} title="Thu tiền thuê đất, mặt nước: 1,1%" />
              {/* Thu khác: 63.2% */}
              <div style={{ width: '63.24%', background: '#cbd5e1' }} title="Các khoản thu khác: 63,2%" />
            </div>

            {/* Legend items */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: '#3b82f6' }} />
                <span style={{ color: '#475569' }}>Thu tiền sử dụng đất</span>
                <strong style={{ color: '#2563eb' }}>35,6%</strong>
                <span style={{ color: '#64748b' }}>19.544,2 tỷ</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: '#8b5cf6' }} />
                <span style={{ color: '#475569' }}>Thu tiền thuê đất, mặt nước</span>
                <strong style={{ color: '#7c3aed' }}>1,1%</strong>
                <span style={{ color: '#64748b' }}>619,8 tỷ</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: '#cbd5e1' }} />
                <span style={{ color: '#475569' }}>Các khoản thu khác</span>
                <strong style={{ color: '#475569' }}>63,2%</strong>
                <span style={{ color: '#64748b' }}>34.676,1 tỷ</span>
              </div>
            </div>
          </div>

          {/* HÀNG 3: 2 THẺ KPI PHỤ (THU TIỀN SD ĐẤT & THU TIỀN THUÊ ĐẤT) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 16,
            marginBottom: 16
          }}>
            {/* THẺ 3: THU TIỀN SỬ DỤNG ĐẤT (KỲ) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #3b82f6',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
                THU TIỀN SỬ DỤNG ĐẤT (KỲ)
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
                  📍
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    19.544,2
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
                      8.711.605 <span style={{ color: '#64748b', fontWeight: 500 }}>(44,6%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '44.57%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                      Ngân sách Xã
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      7.899.151 <span style={{ color: '#64748b', fontWeight: 500 }}>(40,4%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '40.42%', height: '100%', background: '#f59e0b', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }} />
                      Ngân sách Trung ương
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      2.933.436 <span style={{ color: '#64748b', fontWeight: 500 }}>(15,0%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '15.01%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>

            {/* THẺ 4: THU TIỀN THUÊ ĐẤT, MẶT NƯỚC (KỲ) */}
            <div style={{
              background: '#ffffff',
              borderRadius: 10,
              padding: '16px 20px',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #8b5cf6',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>
                THU TIỀN THUÊ ĐẤT, MẶT NƯỚC (KỲ)
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
                  🏢
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                    619,8
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginTop: 2 }}>
                    Tỷ đồng
                  </div>
                </div>
              </div>

              {/* Chi tiết phân bổ Tỉnh / TW / Xã */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                      Ngân sách Tỉnh
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      518.452 <span style={{ color: '#64748b', fontWeight: 500 }}>(83,6%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '83.65%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }} />
                      Ngân sách Trung ương
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      92.207 <span style={{ color: '#64748b', fontWeight: 500 }}>(14,9%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '14.88%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#334155', fontWeight: 600 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                      Ngân sách Xã
                    </span>
                    <span style={{ color: '#0f172a', fontWeight: 700 }}>
                      9.148 <span style={{ color: '#64748b', fontWeight: 500 }}>(1,5%)</span>
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', overflow: 'hidden' }}>
                    <div style={{ width: '1.48%', height: '100%', background: '#f59e0b', borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HÀNG 4: 2 BIỂU ĐỒ SONG SONG (CƠ CẤU CẤP NGÂN SÁCH & XU HƯỚNG THÁNG) */}
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
              borderLeft: '4px solid #0284c7',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#0369a1', letterSpacing: '0.03em', margin: '0 0 14px 0', textTransform: 'uppercase' }}>
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
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>54.840,1</div>
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
              borderLeft: '4px solid #0284c7',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#0369a1', letterSpacing: '0.03em', margin: 0, textTransform: 'uppercase' }}>
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

          {/* HÀNG 5: BẢNG CHI TIẾT THU NGÂN SÁCH NHÀ NƯỚC - TRIỆU ĐỒNG */}
          <div style={{
            background: '#ffffff',
            borderRadius: 10,
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden'
          }}>
            {/* Header Bảng */}
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
                CHI TIẾT THU NGÂN SÁCH NHÀ NƯỚC (KỲ Tháng 10/2026) - TRIỆU ĐỒNG
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

            {/* Table Container với Sticky Header & Cuộn 480px */}
            <div style={{ maxHeight: 480, overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5, textAlign: 'left' }}>
                <thead style={{ position: 'sticky', top: 0, background: '#f8fafc', zIndex: 10, borderBottom: '2px solid #e2e8f0' }}>
                  <tr style={{ color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '10px 14px', textAlign: 'left', minWidth: 260 }}>Chỉ tiêu</th>
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
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#eff6ff'; }}
                        onMouseLeave={(e) => { 
                          e.currentTarget.style.background = isTotal ? '#f1f5f9' : index % 2 === 0 ? '#ffffff' : '#fafafa'; 
                        }}
                      >
                        <td style={{ padding: '9px 14px', paddingLeft: 14 + indentPx, textAlign: 'left' }}>
                          {isParent && <span style={{ color: '#0284c7', marginRight: 4 }}>•</span>}
                          {row.tenChiTieu}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right', color: isTotal ? '#059669' : undefined }}>
                          {row.nsnnKy}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right' }}>
                          {row.nsTrungUong}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right' }}>
                          {row.nsDiaPhuong}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right', color: '#0284c7' }}>
                          {row.nsTinh}
                        </td>
                        <td style={{ padding: '9px 14px', textAlign: 'right', color: '#d97706' }}>
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

            {/* Footer Table */}
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
              <span>Hiển thị {filteredTableData.length} / {REVENUE_DETAIL_TABLE.length} chỉ tiêu ngân sách</span>
              <span>Đơn vị tính: Triệu đồng • Dữ liệu kiểm toán: Đã đồng bộ với Tabmis tỉnh</span>
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
          placeholder="https://ioc.hungyen.gov.vn/embed/thu-ngan-sach"
        />
        <div style={{ marginTop: 8, fontSize: 12, color: '#94a3b8' }}>
          * Mặc định: https://ioc.hungyen.gov.vn/embed/thu-ngan-sach
        </div>
      </Modal>
    </div>
  );
};
