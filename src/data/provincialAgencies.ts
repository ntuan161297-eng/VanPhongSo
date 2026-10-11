import { Organization } from '../types/organization';

/**
 * MASTER DATA CÁC BAN VÀ CƠ QUAN CẤP TỈNH KHÁC CỦA TỈNH HƯNG YÊN
 * Tách biệt nhóm riêng, không trộn lẫn với nhóm 10 Sở chuyên môn.
 */
export const PROVINCIAL_AGENCIES_MASTER: Organization[] = [
  // --- CHÍNH QUYỀN CẤP TỈNH ---
  {
    id: 'org-gov-01',
    code: 'UBNDT',
    name: 'Ủy ban nhân dân tỉnh Hưng Yên',
    shortName: 'UBND tỉnh Hưng Yên',
    type: 'PROVINCE_GOVERNMENT',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },

  // --- CƠ QUAN TRỰC THUỘC TỈNH (PROVINCIAL_AGENCY) ---
  {
    id: 'org-agency-01',
    code: 'VPUBND',
    name: 'Văn phòng UBND tỉnh Hưng Yên',
    shortName: 'Văn phòng UBND tỉnh',
    type: 'PROVINCIAL_AGENCY',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },
  {
    id: 'org-agency-02',
    code: 'VPHDND',
    name: 'Văn phòng HĐND tỉnh Hưng Yên',
    shortName: 'Văn phòng HĐND tỉnh',
    type: 'PROVINCIAL_AGENCY',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },
  {
    id: 'org-agency-03',
    code: 'TTT',
    name: 'Thanh tra tỉnh Hưng Yên',
    shortName: 'Thanh tra tỉnh',
    type: 'PROVINCIAL_AGENCY',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },

  // --- CÁC BAN QUẢN LÝ (MANAGEMENT_BOARD) ---
  {
    id: 'org-board-01',
    code: 'BQLKCN',
    name: 'Ban Quản lý các khu công nghiệp tỉnh Hưng Yên',
    shortName: 'Ban Quản lý các KCN tỉnh',
    type: 'MANAGEMENT_BOARD',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },
  {
    id: 'org-board-02',
    code: 'BQLKKTKCN',
    name: 'Ban Quản lý Khu kinh tế và các khu công nghiệp tỉnh Hưng Yên',
    shortName: 'Ban Quản lý KKT & KCN tỉnh',
    type: 'MANAGEMENT_BOARD',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },
  {
    id: 'org-board-03',
    code: 'BQLKDH',
    name: 'Ban Quản lý Khu đại học',
    shortName: 'Ban Quản lý Khu đại học',
    type: 'MANAGEMENT_BOARD',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },
  {
    id: 'org-board-04',
    code: 'BQLDAGT',
    name: 'Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên',
    shortName: 'Ban QLDA Giao thông tỉnh',
    type: 'MANAGEMENT_BOARD',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },
  {
    id: 'org-board-05',
    code: 'BQLDADD',
    name: 'Ban Quản lý dự án ĐTXD công trình Dân dụng và Công nghiệp tỉnh Hưng Yên',
    shortName: 'Ban QLDA Dân dụng & CN tỉnh',
    type: 'MANAGEMENT_BOARD',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },
  {
    id: 'org-board-06',
    code: 'BQLDANN',
    name: 'Ban Quản lý dự án ĐTXD công trình Nông nghiệp và PTNT tỉnh Hưng Yên',
    shortName: 'Ban QLDA Nông nghiệp tỉnh',
    type: 'MANAGEMENT_BOARD',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },

  // --- CƠ QUAN PHỐI HỢP LIÊN QUAN (OTHER_RELATED_AGENCY) ---
  {
    id: 'org-other-01',
    code: 'CAT',
    name: 'Công an tỉnh Hưng Yên',
    shortName: 'Công an tỉnh',
    type: 'OTHER_RELATED_AGENCY',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  },
  {
    id: 'org-other-02',
    code: 'BCHQS',
    name: 'Bộ Chỉ huy quân sự tỉnh Hưng Yên',
    shortName: 'Bộ Chỉ huy quân sự tỉnh',
    type: 'OTHER_RELATED_AGENCY',
    status: 'ACTIVE',
    effectiveDate: '2025-07-01'
  }
];
