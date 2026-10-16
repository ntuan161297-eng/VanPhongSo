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
export type ProjectStage = 'THU_TUC_DAU_TU' | 'GIAI_PHONG_MAT_BANG' | 'THI_CONG_XAY_DUNG' | 'HOAN_THANH';

export interface Milestone {
  name: string;
  date: string;
  status: 'HOAN_THANH' | 'DANG_LAM' | 'CHUA_DEN' | 'CHAM';
}

/* 1. Giai đoạn Thủ tục đầu tư */
export interface ProcedureTaskItem {
  id: string;
  name: string; // Tên công việc con
  deadline: string; // Hạn hoàn thành
  completedDate?: string;
  status: 'HOAN_THANH' | 'CON_HAN' | 'CHAM_TIEN_DO';
  leadDept: string;
  coDepts: string[];
}

export interface ProcedureItem {
  id: string;
  order: number; // 1, 2, 3, 4, 5
  name: string; // e.g. "Thủ tục 1: Các thủ tục về đầu tư, doanh nghiệp, góp vốn"
  status: 'HOAN_THANH_DUNG_HAN' | 'CON_HAN' | 'CHAM_TIEN_DO' | 'DANG_THUC_HIEN';
  statusLabel: string; // "Đã hoàn thành đúng hạn" | "Còn hạn" | "Chậm tiến độ"
  deadline: string; // e.g. "31/08/2027"
  completedDate?: string; // e.g. "27/07/2026"
  taskCount: number; // 2 công việc
  updatedTaskCount: number; // 2/2 đã cập nhật
  completedTaskCount: number; // 2/2 đã hoàn thành
  leadDept: string; // Đơn vị chủ trì
  coDepts: string[]; // Đơn vị phối hợp
  directDocsCount: number; // Văn bản trực tiếp
  tasks?: ProcedureTaskItem[];
}

export interface ProjectProcedureStage {
  hasApprovedPolicy: boolean; // Đã có chủ trương đầu tư hay chưa
  policyDecisionNo?: string; // Số Quyết định chấp thuận / phê duyệt chủ trương ĐT
  policyDecisionDate?: string;
  currentStep: string; // "Đang lập BCNCKT", "Đã phê duyệt dự án ĐTXD", "Đang thẩm định TK BVTC", v.v.
  procedureStatus: 'HOAN_THANH' | 'DANG_THUC_HIEN' | 'CHUA_THUC_HIEN' | 'VUONG_MAC';
  procedureNotes?: string;
  procedures?: ProcedureItem[]; // Cây văn bản thể hiện các bước thủ tục đầu tư (Ảnh 1)
}

/* 2. Giai đoạn Giải phóng mặt bằng */
export interface ProjectCompensationPlan {
  totalCompensationAmount: number; // Tỷ VNĐ (Tổng phương án bồi thường)
  paidAmount: number; // Tỷ VNĐ đã chi trả
  paidPercent: number; // %
  totalHouseholds: number; // Tổng số hộ ảnh hưởng
  paidHouseholds: number; // Số hộ đã nhận tiền bồi thường
  unresolvedHouseholds: number; // Số hộ còn vướng mắc / chưa nhận
  resettlementArrangement: string; // Phương án bố trí tái định cư
}

export interface ProjectLandClearanceStage {
  totalArea: number; // Tổng diện tích đất GPMB (ha)
  surveyedArea: number; // Diện tích đã kiểm đếm (ha)
  surveyedPercent: number; // % diện tích đã kiểm đếm
  handedOverArea: number; // Diện tích đã bàn giao thực tế (ha)
  handedOverPercent: number; // % diện tích bàn giao
  totalPlots?: number; // Tổng số thửa đất
  surveyedPlots?: number; // Số thửa đã kiểm đếm
  handedOverPlots?: number; // Số thửa đã bàn giao
  compensationPlan: ProjectCompensationPlan;
  clearanceStatus: 'HOAN_THANH' | 'DANG_THUC_HIEN' | 'CHAM_TIEN_DO' | 'NGUY_CO_CHAM';
  clearanceNotes: string;
}

/* 3. Giai đoạn Thi công xây dựng */
export interface ConstructionItem {
  id: string;
  name: string; // Tên hạng mục / Gói thầu
  contractor: string; // Nhà thầu thi công chính
  plannedProgress: number; // % Tiến độ kế hoạch
  actualProgress: number; // % Tiến độ thực tế
  status: 'DUNG_TIEN_DO' | 'CHAM_TIEN_DO' | 'HOAN_THANH';
  note?: string;
}

export interface ProjectConstructionStage {
  constructionProgress: number; // % tiến độ thi công tổng thể
  constructionPlanNotes: string;
  items: ConstructionItem[];
  constructionStatus: 'DUNG_TIEN_DO' | 'CHAM_TIEN_DO' | 'NGUY_CO_CHAM' | 'HOAN_THANH' | 'CHUA_KHOI_CONG';
}

/* 4. Theo dõi đôn đốc dự án chậm hạn / có nguy cơ */
export interface ProjectExpediteRecord {
  id: string;
  docNumber?: string; // Số văn bản đôn đốc
  date: string;
  action: string;
  signer: string;
  signerTitle?: string; // Chức vụ người ký
  content: string;
  targetDepts?: string[]; // Đơn vị nhận đôn đốc
  procedureName?: string; // Thủ tục cần đôn đốc
  taskName?: string; // Công việc cần đôn đốc
  feedbackDeadline?: string;
}

export interface ProjectExpediteInfo {
  isDelayedOrRisk: boolean; // Có chậm hạn hoặc nguy cơ chậm
  riskLevel: 'BINH_THUONG' | 'NGUY_CO_CHAM' | 'CHAM_TIEN_DO';
  delayedStage: 'THU_TUC_DAU_TU' | 'GIAI_PHONG_MAT_BANG' | 'THI_CONG_XAY_DUNG' | 'KHONG_CHAM';
  delayedStageLabel: string;
  bottleneckLocation: string; // Chậm ở đâu cụ thể
  leadDepartment: string; // Cơ quan chủ trì
  cooperatingDepartments: string[]; // Cơ quan phối hợp
  detailedDifficulties: string; // Khó khăn, vướng mắc cụ thể
  proposalsAndRecommendations: string; // Đề xuất kiến nghị giải quyết
  expediteHistory: ProjectExpediteRecord[];
}

export interface ProjectItem {
  id: string;
  code: string;
  name: string;
  sector: ProjectSector;
  capitalSource: CapitalSource;
  investor: string; // Chủ đầu tư / Nhà đầu tư
  managingDept: string;
  district: string; // Địa bàn cấp xã/phường (P. Phố Hiến, Xã Văn Giang, P. Mỹ Hào, etc.)
  totalInvestment: number; // Tỷ VNĐ
  disbursedAmount: number; // Tỷ VNĐ
  progress: number; // %
  status: ProjectStatus;
  currentStage: ProjectStage; // 4 giai đoạn: 'THU_TUC_DAU_TU' | 'GIAI_PHONG_MAT_BANG' | 'THI_CONG_XAY_DUNG' | 'HOAN_THANH'
  startDate: string;
  finishDate: string;
  landArea: number; // Quỹ đất sử dụng (ha)
  landClearanceProgress: number; // % GPMB
  landClearanceArea: string; // e.g. "45.2 ha / 50 ha"
  landClearanceNote: string;
  bottlenecks: string[];
  unresolvedIssues?: string; // Vướng mắc, kiến nghị tóm tắt cho cột bảng
  milestones: Milestone[];
  legalDocs: string[];
  coordinates: [number, number]; // Lat, Lng for interactive demo map

  // Thông tin chuyên sâu theo các giai đoạn
  procedureStage: ProjectProcedureStage;
  landClearanceStage: ProjectLandClearanceStage;
  constructionStage: ProjectConstructionStage;
  expediteInfo: ProjectExpediteInfo;
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
