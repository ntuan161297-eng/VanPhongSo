export type OrganizationType = 
  | 'PROVINCE_GOVERNMENT'       // UBND tỉnh Hưng Yên
  | 'PROVINCIAL_DEPARTMENT'     // 10 Sở chuyên môn
  | 'PROVINCIAL_AGENCY'         // Văn phòng UBND tỉnh, Thanh tra tỉnh,...
  | 'MANAGEMENT_BOARD'          // Các Ban Quản lý
  | 'COMMUNE_GOVERNMENT'        // UBND 104 Xã/Phường
  | 'OTHER_RELATED_AGENCY';     // Công an tỉnh, Bộ CHQS tỉnh,...

export interface Organization {
  id: string;
  code: string;
  name: string; // Full official legal name: "Sở Xây dựng tỉnh Hưng Yên", "UBND xã Văn Giang"
  shortName: string; // Display name: "Sở Xây dựng", "UBND Xã Văn Giang"
  type: OrganizationType;
  administrativeUnitId?: string; // Linked commune administrative unit if COMMUNE_GOVERNMENT
  parentOrgId?: string;
  status: 'ACTIVE' | 'INACTIVE';
  effectiveDate: string; // "2025-07-01"
}

export interface HistoricalOrganizationMapping {
  oldOrganizationId: string;
  oldOrganizationName: string;
  newOrganizationId: string;
  newOrganizationName: string;
  mappingType: 'MERGED' | 'FUNCTION_TRANSFERRED' | 'DISSOLVED' | 'RESTUCTURED' | 'NEEDS_VERIFICATION';
  effectiveDate: string;
  verificationStatus: 'VERIFIED' | 'NEEDS_VERIFICATION';
  sourceReference: string;
  notes?: string;
}
