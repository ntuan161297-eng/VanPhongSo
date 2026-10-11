import { Organization, HistoricalOrganizationMapping } from '../types/organization';
import { PROVINCIAL_DEPARTMENTS_MASTER } from '../data/provincialDepartments';
import { PROVINCIAL_AGENCIES_MASTER } from '../data/provincialAgencies';
import { ADMINISTRATIVE_UNITS_MASTER } from '../data/administrativeUnits';
import { HISTORICAL_ORGANIZATION_MAPPINGS } from '../data/organizationMappings';

// Tự động sinh danh mục 104 cơ quan chính quyền cấp cơ sở (UBND các Xã/Phường)
const COMMUNE_GOVERNMENTS: Organization[] = ADMINISTRATIVE_UNITS_MASTER.map(unit => ({
  id: `org-ubnd-${unit.id}`,
  code: `UBND-${unit.code}`,
  name: `Ủy ban nhân dân ${unit.name}`,
  shortName: `UBND ${unit.name}`,
  type: 'COMMUNE_GOVERNMENT' as const,
  administrativeUnitId: unit.id,
  status: 'ACTIVE' as const,
  effectiveDate: '2025-07-01'
}));

export const OrganizationService = {
  /**
   * Lấy toàn bộ danh mục tổ chức trong hệ thống (Sở, Ban, Cơ quan tỉnh & UBND 104 Xã/Phường)
   */
  getAll(): Organization[] {
    return [
      ...PROVINCIAL_DEPARTMENTS_MASTER,
      ...PROVINCIAL_AGENCIES_MASTER,
      ...COMMUNE_GOVERNMENTS
    ];
  },

  /**
   * Lấy danh mục 10 Sở chuyên môn chuẩn của tỉnh
   */
  getProvincialDepartments(): Organization[] {
    return PROVINCIAL_DEPARTMENTS_MASTER;
  },

  /**
   * Lấy các Ban quản lý và cơ quan trực thuộc tỉnh
   */
  getProvincialAgencies(): Organization[] {
    return PROVINCIAL_AGENCIES_MASTER;
  },

  /**
   * Lấy toàn bộ 104 UBND Xã/Phường
   */
  getCommuneGovernments(): Organization[] {
    return COMMUNE_GOVERNMENTS;
  },

  /**
   * Lấy danh mục đơn vị theo nhóm loại hình
   */
  getByType(type: Organization['type']): Organization[] {
    return this.getAll().filter(o => o.type === type);
  },

  /**
   * Tìm theo ID
   */
  getById(id: string): Organization | undefined {
    return this.getAll().find(o => o.id === id);
  },

  /**
   * Lấy danh sách ánh xạ tổ chức lịch sử
   */
  getHistoricalMappings(): HistoricalOrganizationMapping[] {
    return HISTORICAL_ORGANIZATION_MAPPINGS;
  },

  /**
   * Tra cứu đơn vị kế thừa từ tên cũ
   */
  resolveSuccessor(oldOrgName: string): HistoricalOrganizationMapping | undefined {
    return HISTORICAL_ORGANIZATION_MAPPINGS.find(m => 
      m.oldOrganizationName.toLowerCase().includes(oldOrgName.toLowerCase())
    );
  }
};
