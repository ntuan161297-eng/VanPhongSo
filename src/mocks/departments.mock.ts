import { DepartmentInfo } from '../types';
import { OrganizationService } from '../services/organizationService';
import { AdministrativeUnitService } from '../services/administrativeUnitService';

export { OrganizationService, AdministrativeUnitService };

/**
 * Danh mục cơ quan hành chính dùng cho giao diện tương thích ngược,
 * được nạp trực tiếp từ Master Data chuẩn hóa.
 */
export const DEPARTMENTS_MOCK: DepartmentInfo[] = OrganizationService.getAll().map(org => ({
  id: org.id,
  code: org.code,
  name: org.name,
  shortName: org.shortName,
  category: org.type === 'COMMUNE_GOVERNMENT' ? 'XA_PHUONG' : 'SO_BAN_NGANH'
}));

/**
 * Danh sách 104 xã, phường phục vụ bộ lọc địa bàn (không còn cấp huyện)
 */
export const DISTRICTS_LIST: string[] = [
  ...AdministrativeUnitService.getWards().map(w => w.name),
  ...AdministrativeUnitService.getCommunes().map(c => c.name),
  '104 Xã/Phường sau sắp xếp (Toàn tỉnh)'
];

/**
 * Cấu trúc phân nhóm 2 cấp địa bàn hiển thị trên Select OptGroup
 */
export const TWO_TIER_AREAS = [
  {
    tier: 'CẤP PHƯỜNG (11 Phường đô thị trung tâm & công nghiệp)',
    items: AdministrativeUnitService.getWards().map(w => w.name)
  },
  {
    tier: 'CẤP XÃ (93 Xã nông thôn mới & công nghiệp sau sắp xếp)',
    items: AdministrativeUnitService.getCommunes().map(c => c.name)
  }
];
