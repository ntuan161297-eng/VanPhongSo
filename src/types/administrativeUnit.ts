export type AdministrativeUnitType = 'XA' | 'PHUONG';
export type AdministrativeLevel = 'PROVINCE' | 'COMMUNE';

export interface AdministrativeUnit {
  id: string; // e.g. "adm-xa-001", "adm-phuong-001"
  code: string; // Official administrative code or technical identifier
  name: string; // Full name: "Xã Nghĩa Trụ", "Phường Phố Hiến"
  shortName: string; // e.g. "Nghĩa Trụ", "Phố Hiến"
  type: AdministrativeUnitType;
  level: AdministrativeLevel;
  province: string; // "Hưng Yên"
  status: 'ACTIVE' | 'INACTIVE';
  effectiveDate: string; // "2025-07-01"
  historicalNote?: string; // Information on former district/area if verified
}
