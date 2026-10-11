import { AdministrativeUnit } from '../types/administrativeUnit';

/**
 * MASTER DATA ĐƠN VỊ HÀNH CHÍNH CẤP XÃ TỈNH HƯNG YÊN
 * Căn cứ Nghị quyết số 1666/NQ-UBTVQH15 và mô hình chính quyền địa phương 2 cấp.
 * Tổng số: đúng 104 đơn vị hành chính cấp xã (11 phường và 93 xã), không trùng lặp.
 */

export const WARDS_RAW: string[] = [
  'Phố Hiến',
  'Sơn Nam',
  'Hồng Châu',
  'Mỹ Hào',
  'Đường Hào',
  'Thượng Hồng',
  'Thái Bình',
  'Trần Lãm',
  'Trần Hưng Đạo',
  'Trà Lý',
  'Vũ Phúc'
];

export const COMMUNES_RAW: string[] = [
  'A Sào',
  'Ái Quốc',
  'Ân Thi',
  'Bắc Đông Hưng',
  'Bắc Đông Quan',
  'Bắc Thái Ninh',
  'Bắc Thụy Anh',
  'Bắc Tiên Hưng',
  'Bình Định',
  'Bình Nguyên',
  'Bình Thanh',
  'Châu Ninh',
  'Chí Minh',
  'Đại Đồng',
  'Diên Hà',
  'Đoàn Đào',
  'Đồng Bằng',
  'Đồng Châu',
  'Đông Hưng',
  'Đông Quan',
  'Đông Thái Ninh',
  'Đông Thụy Anh',
  'Đông Tiền Hải',
  'Đông Tiên Hưng',
  'Đức Hợp',
  'Hiệp Cường',
  'Hoàn Long',
  'Hoàng Hoa Thám',
  'Hồng Minh',
  'Hồng Quang',
  'Hồng Vũ',
  'Hưng Hà',
  'Hưng Phú',
  'Khoái Châu',
  'Kiến Xương',
  'Lạc Đạo',
  'Lê Lợi',
  'Lê Quý Đôn',
  'Long Hưng',
  'Lương Bằng',
  'Mễ Sở',
  'Minh Thọ',
  'Nam Cường',
  'Nam Đông Hưng',
  'Nam Thái Ninh',
  'Nam Thụy Anh',
  'Nam Tiền Hải',
  'Nam Tiên Hưng',
  'Nghĩa Dân',
  'Nghĩa Trụ',
  'Ngọc Lâm',
  'Ngự Thiên',
  'Nguyễn Du',
  'Nguyễn Trãi',
  'Nguyễn Văn Linh',
  'Như Quỳnh',
  'Phạm Ngũ Lão',
  'Phụ Dực',
  'Phụng Công',
  'Quang Hưng',
  'Quang Lịch',
  'Quỳnh An',
  'Quỳnh Phụ',
  'Tân Hưng',
  'Tân Thuận',
  'Tân Tiến',
  'Tây Thái Ninh',
  'Tây Thụy Anh',
  'Tây Tiền Hải',
  'Thái Ninh',
  'Thái Thụy',
  'Thần Khê',
  'Thư Trì',
  'Thư Vũ',
  'Thụy Anh',
  'Tiền Hải',
  'Tiên Hoa',
  'Tiên Hưng',
  'Tiên La',
  'Tiên Lữ',
  'Tiên Tiến',
  'Tống Trân',
  'Trà Giang',
  'Triệu Việt Vương',
  'Văn Giang',
  'Vạn Xuân',
  'Việt Tiến',
  'Việt Yên',
  'Vũ Quý',
  'Vũ Thư',
  'Vũ Tiên',
  'Xuân Trúc',
  'Yên Mỹ'
];

export const ADMINISTRATIVE_UNITS_MASTER: AdministrativeUnit[] = [
  // 11 Phường đô thị
  ...WARDS_RAW.map((name, index) => ({
    id: `adm-ward-${String(index + 1).padStart(2, '0')}`,
    code: `HY-W-${String(index + 1).padStart(2, '0')}`,
    name: `Phường ${name}`,
    shortName: name,
    type: 'PHUONG' as const,
    level: 'COMMUNE' as const,
    province: 'Hưng Yên',
    status: 'ACTIVE' as const,
    effectiveDate: '2025-07-01'
  })),

  // 93 Xã nông thôn mới & công nghiệp
  ...COMMUNES_RAW.map((name, index) => ({
    id: `adm-commune-${String(index + 1).padStart(3, '0')}`,
    code: `HY-C-${String(index + 1).padStart(3, '0')}`,
    name: `Xã ${name}`,
    shortName: name,
    type: 'XA' as const,
    level: 'COMMUNE' as const,
    province: 'Hưng Yên',
    status: 'ACTIVE' as const,
    effectiveDate: '2025-07-01'
  }))
];

// Verify total count equals exactly 104
if (ADMINISTRATIVE_UNITS_MASTER.length !== 104) {
  console.warn(`[MasterData Warning] Administrative units count is ${ADMINISTRATIVE_UNITS_MASTER.length}, expected 104.`);
}
