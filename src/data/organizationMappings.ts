import { HistoricalOrganizationMapping } from '../types/organization';

/**
 * BẢNG ÁNH XẠ LỊCH SỬ TỔ CHỨC VÀ CHỨC NĂNG (HISTORICAL MAPPINGS)
 * Phục vụ tra cứu, phân loại hồ sơ lịch sử và chuyển tiếp chức năng quản lý.
 */
export const HISTORICAL_ORGANIZATION_MAPPINGS: HistoricalOrganizationMapping[] = [
  {
    oldOrganizationId: 'old-skhdt',
    oldOrganizationName: 'Sở Kế hoạch và Đầu tư tỉnh Hưng Yên',
    newOrganizationId: 'org-dept-06',
    newOrganizationName: 'Sở Tài chính tỉnh Hưng Yên',
    mappingType: 'FUNCTION_TRANSFERRED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 202/2025/QH15',
    notes: 'Toàn bộ chức năng quản lý kế hoạch, quy hoạch và phân bổ đầu tư công được chuyển về Sở Tài chính.'
  },
  {
    oldOrganizationId: 'old-sgtvt',
    oldOrganizationName: 'Sở Giao thông Vận tải tỉnh Hưng Yên',
    newOrganizationId: 'org-dept-09',
    newOrganizationName: 'Sở Xây dựng tỉnh Hưng Yên',
    mappingType: 'FUNCTION_TRANSFERRED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 202/2025/QH15',
    notes: 'Chức năng quản lý kết cấu hạ tầng giao thông, quy hoạch giao thông được chuyển về Sở Xây dựng.'
  },
  {
    oldOrganizationId: 'old-snnptnt',
    oldOrganizationName: 'Sở Nông nghiệp và Phát triển nông thôn tỉnh Hưng Yên',
    newOrganizationId: 'org-dept-05',
    newOrganizationName: 'Sở Nông nghiệp và Môi trường tỉnh Hưng Yên',
    mappingType: 'MERGED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 202/2025/QH15',
    notes: 'Hợp nhất cùng chức năng Sở Tài nguyên và Môi trường thành Sở Nông nghiệp và Môi trường.'
  },
  {
    oldOrganizationId: 'old-stnmt',
    oldOrganizationName: 'Sở Tài nguyên và Môi trường tỉnh Hưng Yên',
    newOrganizationId: 'org-dept-05',
    newOrganizationName: 'Sở Nông nghiệp và Môi trường tỉnh Hưng Yên',
    mappingType: 'MERGED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 202/2025/QH15',
    notes: 'Hợp nhất thành Sở Nông nghiệp và Môi trường.'
  },
  {
    oldOrganizationId: 'old-stttt',
    oldOrganizationName: 'Sở Thông tin và Truyền thông tỉnh Hưng Yên',
    newOrganizationId: 'org-dept-03',
    newOrganizationName: 'Sở Khoa học và Công nghệ tỉnh Hưng Yên',
    mappingType: 'FUNCTION_TRANSFERRED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 202/2025/QH15',
    notes: 'Chức năng công nghệ số, chuyển đổi số và viễn thông được chuyển về Sở Khoa học và Công nghệ.'
  },
  {
    oldOrganizationId: 'old-sldtbxh',
    oldOrganizationName: 'Sở Lao động - Thương binh và Xã hội tỉnh Hưng Yên',
    newOrganizationId: 'org-dept-04',
    newOrganizationName: 'Sở Nội vụ tỉnh Hưng Yên',
    mappingType: 'FUNCTION_TRANSFERRED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 202/2025/QH15',
    notes: 'Các chức năng an sinh, việc làm, tiền lương phân bổ về Sở Nội vụ, Sở Y tế và cơ quan liên quan.'
  },
  // Các đơn vị cấp huyện cũ chuyển đổi sang mô hình 2 cấp
  {
    oldOrganizationId: 'old-h-vangiang',
    oldOrganizationName: 'UBND Huyện Văn Giang',
    newOrganizationId: 'adm-commune-vangiang',
    newOrganizationName: 'UBND Xã Văn Giang (và các xã/phường trên địa bàn)',
    mappingType: 'DISSOLVED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 1666/NQ-UBTVQH15',
    notes: 'Cấp huyện kết thúc nhiệm vụ. Chính quyền cơ sở trực tiếp là các Xã, Phường.'
  },
  {
    oldOrganizationId: 'old-h-yenmy',
    oldOrganizationName: 'UBND Huyện Yên Mỹ',
    newOrganizationId: 'adm-commune-yenmy',
    newOrganizationName: 'UBND Xã Yên Mỹ (và các xã/phường trên địa bàn)',
    mappingType: 'DISSOLVED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 1666/NQ-UBTVQH15',
    notes: 'Cấp huyện kết thúc nhiệm vụ.'
  },
  {
    oldOrganizationId: 'old-h-khoaichau',
    oldOrganizationName: 'UBND Huyện Khoái Châu',
    newOrganizationId: 'adm-commune-khoaichau',
    newOrganizationName: 'UBND Xã Khoái Châu (và các xã/phường trên địa bàn)',
    mappingType: 'DISSOLVED',
    effectiveDate: '2025-07-01',
    verificationStatus: 'VERIFIED',
    sourceReference: 'Nghị quyết số 1666/NQ-UBTVQH15',
    notes: 'Cấp huyện kết thúc nhiệm vụ.'
  }
];
