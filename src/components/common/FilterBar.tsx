import React, { useState } from 'react';
import { Select, Input, Button, Space, Tooltip } from 'antd';
import { 
  ReloadOutlined, 
  DownloadOutlined, 
  PrinterOutlined,
  SearchOutlined,
  FilterOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import { useApp } from '../../context/AppContext';
import { OrganizationService } from '../../services/organizationService';
import { AdministrativeUnitService } from '../../services/administrativeUnitService';

interface FilterBarProps {
  onExportCSV?: () => void;
  showDistrictFilter?: boolean;
  extraControls?: React.ReactNode;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  onExportCSV,
  showDistrictFilter = true,
  extraControls
}) => {
  const { filters, setFilters, resetFilters, triggerRefresh } = useApp();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const provincialDepts = OrganizationService.getProvincialDepartments();
  const provincialAgencies = OrganizationService.getProvincialAgencies();
  const communeGovernments = OrganizationService.getCommuneGovernments();
  const wards = AdministrativeUnitService.getWards();
  const communes = AdministrativeUnitService.getCommunes();

  const handlePrint = () => {
    window.print();
  };

  const handleScopeChange = (scopeVal: 'ALL' | 'PROVINCIAL_DEPT' | 'COMMUNE' | 'OTHER') => {
    setFilters(prev => ({
      ...prev,
      scope: scopeVal,
      department: 'ALL'
    }));
  };

  // Determine options for Organization dropdown based on selected scope
  const getOrganizationOptions = () => {
    if (filters.scope === 'PROVINCIAL_DEPT') {
      return [
        { value: 'ALL', label: 'Tất cả Sở / Ban / Ngành' },
        {
          label: '10 SỞ CHUYÊN MÔN CỦA TỈNH',
          options: provincialDepts.map(d => ({ value: d.shortName, label: d.name }))
        },
        {
          label: 'BAN VÀ CƠ QUAN THUỘC TỈNH',
          options: provincialAgencies.filter(a => a.type === 'PROVINCIAL_AGENCY' || a.type === 'MANAGEMENT_BOARD').map(a => ({ value: a.shortName, label: a.name }))
        }
      ];
    }

    if (filters.scope === 'COMMUNE') {
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

    if (filters.scope === 'OTHER') {
      return [
        { value: 'ALL', label: 'Tất cả cơ quan phối hợp' },
        ...provincialAgencies.filter(a => a.type === 'OTHER_RELATED_AGENCY').map(a => ({ value: a.shortName, label: a.name }))
      ];
    }

    // Default 'ALL': structured groups
    return [
      { value: 'ALL', label: 'Tất cả cơ quan, đơn vị' },
      {
        label: '10 SỞ CHUYÊN MÔN CỦA TỈNH',
        options: provincialDepts.map(d => ({ value: d.shortName, label: d.name }))
      },
      {
        label: 'BAN VÀ CƠ QUAN THUỘC TỈNH',
        options: provincialAgencies.map(a => ({ value: a.shortName, label: a.name }))
      },
      {
        label: 'CHÍNH QUYỀN CẤP CƠ SỞ (104 XÃ/PHƯỜNG)',
        options: communeGovernments.map(c => ({ value: c.shortName, label: c.name }))
      }
    ];
  };

  return (
    <div 
      className="filter-bar"
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
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
      {/* Left Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
        {/* Năm */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ fontSize: 12.5, color: '#64748b' }}>Năm:</span>
          <Select
            value={filters.year}
            onChange={(val) => setFilters(prev => ({ ...prev, year: val }))}
            style={{ width: 88 }}
            size="middle"
            options={[
              { value: 2026, label: '2026' },
              { value: 2025, label: '2025' },
              { value: 2024, label: '2024' }
            ]}
          />
        </div>

        {/* Kỳ */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ fontSize: 12.5, color: '#64748b' }}>Kỳ:</span>
          <Select
            value={filters.period}
            onChange={(val) => setFilters(prev => ({ ...prev, period: val }))}
            style={{ width: 105 }}
            size="middle"
            options={[
              { value: 'ALL', label: 'Cả năm' },
              { value: 'Q1', label: 'Quý I' },
              { value: 'Q2', label: 'Quý II' },
              { value: 'Q3', label: 'Quý III' },
              { value: 'Q4', label: 'Quý IV' },
              { value: 'M10', label: 'Tháng 10' }
            ]}
          />
        </div>

        {/* Bộ lọc phạm vi */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ fontSize: 12.5, color: '#64748b' }}>Phạm vi:</span>
          <Select
            value={filters.scope || 'ALL'}
            onChange={handleScopeChange}
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
          <span style={{ fontSize: 12.5, color: '#64748b' }}>Đơn vị:</span>
          <Select
            value={filters.department}
            onChange={(val) => setFilters(prev => ({ ...prev, department: val }))}
            style={{ width: 220 }}
            showSearch
            optionFilterProp="label"
            size="middle"
            options={getOrganizationOptions()}
          />
        </div>

        {/* Địa bàn - Chính quyền 2 cấp Tỉnh - Xã (11 Phường, 93 Xã) */}
        {showDistrictFilter && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 12.5, color: '#64748b' }}>Địa bàn:</span>
            <Select
              value={filters.district}
              onChange={(val) => setFilters(prev => ({ ...prev, district: val }))}
              style={{ width: 195 }}
              size="middle"
              showSearch
              placeholder="Chọn địa bàn"
              options={[
                { value: 'ALL', label: 'Toàn tỉnh Hưng Yên' },
                {
                  label: '11 PHƯỜNG ĐÔ THỊ',
                  options: wards.map(w => ({ value: w.name, label: w.name }))
                },
                {
                  label: '93 XÃ NÔNG THÔN MỚI & CÔNG NGHIỆP',
                  options: communes.map(c => ({ value: c.name, label: c.name }))
                }
              ]}
            />
          </div>
        )}

        {/* Search Input */}
        <Input
          placeholder="Tìm từ khóa..."
          prefix={<SearchOutlined style={{ color: '#94a3b8' }} />}
          value={filters.searchQuery}
          onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
          style={{ width: 155 }}
          allowClear
          size="middle"
        />

        {/* Bộ lọc nâng cao */}
        <Button 
          icon={<FilterOutlined />}
          onClick={() => setShowAdvanced(!showAdvanced)}
          size="middle"
          style={{ color: showAdvanced ? '#0b74e5' : '#475569' }}
        >
          Bộ lọc nâng cao
        </Button>

        {extraControls}
      </div>

      {/* Right Actions */}
      <Space size={6}>
        <Button 
          icon={<CloseCircleOutlined />} 
          onClick={resetFilters}
          size="middle"
        >
          Xóa lọc
        </Button>

        <Button 
          icon={<ReloadOutlined />} 
          onClick={triggerRefresh}
          size="middle"
        >
          Làm mới
        </Button>

        {onExportCSV && (
          <Button 
            type="primary"
            icon={<DownloadOutlined />}
            onClick={onExportCSV}
            size="middle"
            style={{ background: '#0b74e5', borderColor: '#0b74e5', fontWeight: 600 }}
          >
            Xuất CSV
          </Button>
        )}

        <Button 
          icon={<PrinterOutlined />} 
          onClick={handlePrint}
          size="middle"
        >
          In
        </Button>
      </Space>
    </div>
  );
};
