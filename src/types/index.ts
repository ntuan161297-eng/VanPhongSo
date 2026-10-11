export type UserRole = 'LEADER_PROVINCE' | 'LEADER_DEPT' | 'LEADER_COMMUNE' | 'SPECIALIST';

export * from './administrativeUnit';
export * from './organization';

export interface UserProfile {
  id: string;
  name: string;
  title: string;
  department: string;
  role: UserRole;
  avatarText: string;
}

export interface GlobalFilterState {
  year: number;
  period: string; // 'ALL' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'M1'...'M12'
  scope?: 'ALL' | 'PROVINCIAL_DEPT' | 'COMMUNE' | 'OTHER'; // Phạm vi lọc
  department: string; // 'ALL' or specific organization name
  district: string; // 'ALL' or specific commune/ward name
  searchQuery: string;
}

export interface DepartmentInfo {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: 'SO_BAN_NGANH' | 'QUAN_HUYEN' | 'XA_PHUONG';
}

/* ==================== TASKS ==================== */
export type TaskStatus = 
  | 'CAN_XU_LY'
  | 'DANG_XU_LY'
  | 'QUA_HAN_CHUA_HOAN_THANH'
  | 'DA_HOAN_THANH'
  | 'HOAN_THANH_QUA_HAN'
  | 'SAP_DEN_HAN'
  | 'CHO_PHE_DUYET'
  | 'CHUA_GIAO';

export type TaskPriority = 'HOA_TOC' | 'KHAN' | 'TRUNG_BINH' | 'BINH_THUONG';

export interface TaskHistoryItem {
  id: string;
  date: string;
  action: string;
  performer: string;
  comment: string;
}

export interface TaskItem {
  id: string;
  code: string;
  title: string;
  leadingDept: string;
  coDepts: string[];
  assignDate: string;
  deadline: string;
  progress: number;
  status: TaskStatus;
  priority: TaskPriority;
  assignedLeader: string; // e.g. "Chủ tịch UBND tỉnh", "Phó Chủ tịch UBND tỉnh"
  field: string; // "Nội chính", "Kinh tế - Ngân sách", "Đô thị - Giao thông", "Văn hóa - Xã hội"
  expediteCount: number;
  history: TaskHistoryItem[];
  relatedDocs: string[];
  notes?: string;
}

/* ==================== PROJECTS ==================== */
export type ProjectSector = 'GIAO_THONG' | 'XAY_DUNG_DAN_DUNG' | 'NONG_NGHIEP';
export type CapitalSource = 'NSNN' | 'NGOAI_NSNN';
export type ProjectStatus = 'DANG_TRIEN_KHAI' | 'HOAN_THANH' | 'CHAM_TIEN_DO' | 'CHUAN_BI_DAU_TU';

export interface Milestone {
  name: string;
  date: string;
  status: 'HOAN_THANH' | 'DANG_LAM' | 'CHUA_DEN' | 'CHAM';
}

export interface ProjectItem {
  id: string;
  code: string;
  name: string;
  sector: ProjectSector;
  capitalSource: CapitalSource;
  investor: string; // Chủ đầu tư
  managingDept: string;
  district: string; // Địa bàn cấp xã/phường (P. Phố Hiến, Xã Văn Giang, P. Mỹ Hào, etc.)
  totalInvestment: number; // Tỷ VNĐ
  disbursedAmount: number; // Tỷ VNĐ
  progress: number; // %
  status: ProjectStatus;
  startDate: string;
  finishDate: string;
  landClearanceProgress: number; // % GPMB
  landClearanceArea: string; // e.g. "45.2 ha / 50 ha"
  landClearanceNote: string;
  bottlenecks: string[];
  milestones: Milestone[];
  legalDocs: string[];
  coordinates: [number, number]; // Lat, Lng for interactive demo map
}

/* ==================== DISBURSEMENT ==================== */
export type CapitalType = 'VON_DAU_TU' | 'VON_SU_NGHIEP' | 'VON_CNTT';

export interface DisbursementItem {
  id: string;
  stt: number;
  deptCode: string;
  deptName: string;
  capitalType: CapitalType;
  planAmount: number; // Tỷ VNĐ
  disbursedAmount: number; // Tỷ VNĐ
  rate: number; // %
  remainingAmount: number; // Tỷ VNĐ
  period: string;
  status: 'DAT_MUC_TIEU' | 'TRUNG_BINH' | 'THAP';
}

/* ==================== BUDGET ==================== */
export interface BudgetMonthlyItem {
  month: string;
  revenuePlan: number; // Tỷ VNĐ
  revenueActual: number;
  revenueRate: number; // %
  expensePlan: number;
  expenseActual: number;
  expenseRate: number;
  netDiff: number; // Thu - Chi
}

export interface BudgetCategoryItem {
  name: string;
  plan: number;
  actual: number;
  rate: number;
  type: 'THU' | 'CHI';
}
