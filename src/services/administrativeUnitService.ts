import { AdministrativeUnit } from '../types/administrativeUnit';
import { ADMINISTRATIVE_UNITS_MASTER } from '../data/administrativeUnits';

export const AdministrativeUnitService = {
  /**
   * Lấy toàn bộ 104 đơn vị hành chính cấp xã (11 phường, 93 xã)
   */
  getAll(): AdministrativeUnit[] {
    return ADMINISTRATIVE_UNITS_MASTER;
  },

  /**
   * Lấy 11 Phường đô thị
   */
  getWards(): AdministrativeUnit[] {
    return ADMINISTRATIVE_UNITS_MASTER.filter(u => u.type === 'PHUONG');
  },

  /**
   * Lấy 93 Xã nông thôn mới & công nghiệp
   */
  getCommunes(): AdministrativeUnit[] {
    return ADMINISTRATIVE_UNITS_MASTER.filter(u => u.type === 'XA');
  },

  /**
   * Tìm theo ID
   */
  getById(id: string): AdministrativeUnit | undefined {
    return ADMINISTRATIVE_UNITS_MASTER.find(u => u.id === id);
  },

  /**
   * Tìm theo tên hoặc từ khóa
   */
  search(query: string): AdministrativeUnit[] {
    if (!query) return ADMINISTRATIVE_UNITS_MASTER;
    const q = query.toLowerCase().trim();
    return ADMINISTRATIVE_UNITS_MASTER.filter(u => 
      u.name.toLowerCase().includes(q) || 
      u.shortName.toLowerCase().includes(q)
    );
  }
};
