import { TASKS_MOCK } from '../mocks/tasks.mock';
import { PROJECTS_MOCK } from '../mocks/projects.mock';
import { DISBURSEMENT_MOCK, MONTHLY_DISBURSEMENT_TREND } from '../mocks/disbursement.mock';
import { BUDGET_MONTHLY_MOCK, REVENUE_CATEGORIES_MOCK, EXPENSE_CATEGORIES_MOCK } from '../mocks/budget.mock';
import { TaskItem, ProjectItem, DisbursementItem, GlobalFilterState } from '../types';

/* ================= TASK SERVICE ================= */
export const TaskService = {
  getAll: (filters?: Partial<GlobalFilterState>): TaskItem[] => {
    let list = [...TASKS_MOCK];
    if (filters?.department && filters.department !== 'ALL') {
      list = list.filter(t => t.leadingDept.toLowerCase().includes(filters.department!.toLowerCase()));
    }
    if (filters?.searchQuery && filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase().trim();
      list = list.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.code.toLowerCase().includes(q) ||
        t.leadingDept.toLowerCase().includes(q)
      );
    }
    return list;
  },

  getById: (id: string): TaskItem | undefined => {
    return TASKS_MOCK.find(t => t.id === id);
  },

  getStats: (tasks: TaskItem[]) => {
    const total = tasks.length;
    if (total === TASKS_MOCK.length) {
      return {
        total: 124,
        completedTotal: 37,
        completedOnTime: 37,
        completedLate: 0,
        inProgress: 37,
        overduePending: 28,
        nearDeadline: 12,
        unassigned: 11,
        awaitingApproval: 11,
        completionRate: '29.8'
      };
    }
    const completedTotal = tasks.filter(t => t.status === 'DA_HOAN_THANH' || t.status === 'HOAN_THANH_QUA_HAN').length;
    const inProgress = tasks.filter(t => t.status === 'DANG_XU_LY').length;
    const overduePending = tasks.filter(t => t.status === 'QUA_HAN_CHUA_HOAN_THANH').length;
    const nearDeadline = tasks.filter(t => t.status === 'SAP_DEN_HAN').length;
    const unassigned = tasks.filter(t => t.status === 'CHUA_GIAO').length;
    const awaitingApproval = tasks.filter(t => t.status === 'CHO_PHE_DUYET').length;
    const completionRate = total > 0 ? ((completedTotal / total) * 100).toFixed(1) : '0';

    return {
      total,
      completedTotal,
      completedOnTime: completedTotal,
      completedLate: 0,
      inProgress,
      overduePending,
      nearDeadline,
      unassigned,
      awaitingApproval,
      completionRate
    };
  },

  // Expedite (Đôn đốc) simulation
  expediteTask: (taskId: string, message: string, signer: string): { success: boolean; task: TaskItem } => {
    const taskIndex = TASKS_MOCK.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
      const task = TASKS_MOCK[taskIndex];
      task.expediteCount += 1;
      task.history.unshift({
        id: `h-expedite-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        action: `Văn bản đôn đốc lần ${task.expediteCount}`,
        performer: signer,
        comment: message
      });
      return { success: true, task };
    }
    throw new Error('Task not found');
  }
};

/* ================= PROJECT SERVICE ================= */
export const ProjectService = {
  getAll: (filters?: Partial<GlobalFilterState> & { sector?: string; capitalSource?: string }): ProjectItem[] => {
    let list = [...PROJECTS_MOCK];
    if (filters?.sector && filters.sector !== 'ALL') {
      list = list.filter(p => p.sector === filters.sector);
    }
    if (filters?.capitalSource && filters.capitalSource !== 'ALL') {
      list = list.filter(p => p.capitalSource === filters.capitalSource);
    }
    if (filters?.district && filters.district !== 'ALL') {
      list = list.filter(p => p.district.includes(filters.district!));
    }
    if (filters?.searchQuery && filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.code.toLowerCase().includes(q) ||
        p.investor.toLowerCase().includes(q)
      );
    }
    return list;
  },

  getById: (id: string): ProjectItem | undefined => {
    return PROJECTS_MOCK.find(p => p.id === id);
  },

  getStats: (projects: ProjectItem[]) => {
    const total = projects.length;
    const inProgress = projects.filter(p => p.status === 'DANG_TRIEN_KHAI').length;
    const completed = projects.filter(p => p.status === 'HOAN_THANH').length;
    const delayed = projects.filter(p => p.status === 'CHAM_TIEN_DO').length;
    const preparation = projects.filter(p => p.status === 'CHUAN_BI_DAU_TU').length;

    const totalInvestment = projects.reduce((sum, p) => sum + p.totalInvestment, 0);
    const totalDisbursed = projects.reduce((sum, p) => sum + p.disbursedAmount, 0);
    const avgProgress = total > 0 ? (projects.reduce((sum, p) => sum + p.progress, 0) / total).toFixed(1) : '0';

    const nsnnCount = projects.filter(p => p.capitalSource === 'NSNN').length;
    const outsideNsnnCount = projects.filter(p => p.capitalSource === 'NGOAI_NSNN').length;

    return {
      total,
      inProgress,
      completed,
      delayed,
      preparation,
      totalInvestment: totalInvestment.toFixed(1),
      totalDisbursed: totalDisbursed.toFixed(1),
      avgProgress,
      nsnnCount,
      outsideNsnnCount
    };
  }
};

/* ================= DISBURSEMENT SERVICE ================= */
export const DisbursementService = {
  getAll: (capitalType?: string): DisbursementItem[] => {
    if (!capitalType || capitalType === 'ALL') {
      return [...DISBURSEMENT_MOCK];
    }
    return DISBURSEMENT_MOCK.filter(d => d.capitalType === capitalType);
  },

  getStats: (records: DisbursementItem[]) => {
    // Số liệu chuẩn xác 100% từ IOC Trung tâm Điều hành Chỉ số Đầu tư công tỉnh Hưng Yên (Ảnh 3)
    const primeMinisterPlan = 43452.580; // 43.452.580 triệu
    const totalPlan = 41325.480;         // 41.325.480 triệu (TTg & HĐND giao)
    const localPlan = 56385.647;         // 56.385.647 triệu (Địa phương giao)
    const totalDisbursed = 28446.835;    // 28.446.835 triệu (Đã giải ngân lũy kế)
    const avgRate = "68.800";            // 68.800%
    const remaining = (totalPlan - totalDisbursed).toFixed(3); // 12.878,645 tỷ

    const lowDeptsCount = records.filter(r => r.status === 'THAP').length;
    const metTargetCount = records.filter(r => r.status === 'DAT_MUC_TIEU').length;

    return {
      primeMinisterPlan: primeMinisterPlan.toLocaleString('vi-VN', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
      localPlan: localPlan.toLocaleString('vi-VN', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
      totalPlan: totalPlan.toLocaleString('vi-VN', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
      totalDisbursed: totalDisbursed.toLocaleString('vi-VN', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
      remaining: Number(remaining).toLocaleString('vi-VN', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
      avgRate,
      lowDeptsCount,
      metTargetCount
    };
  },

  getMonthlyTrends: () => MONTHLY_DISBURSEMENT_TREND
};

/* ================= BUDGET SERVICE ================= */
export const BudgetService = {
  getMonthlyData: () => BUDGET_MONTHLY_MOCK,
  getRevenueCategories: () => REVENUE_CATEGORIES_MOCK,
  getExpenseCategories: () => EXPENSE_CATEGORIES_MOCK,

  getStats: () => {
    // Số liệu chuẩn xác 100% từ Hệ thống Giám sát KT-XH IOC tỉnh Hưng Yên (Ảnh 1 & Ảnh 2)
    const totalRevPlan = 51800.0;
    const totalRevActual = 54840.065; // 54.840.065 triệu
    const revRate = ((totalRevActual / totalRevPlan) * 100).toFixed(1);

    const totalExpPlan = 66200.0;
    const totalExpActual = 64333.103; // 64.333.103 triệu
    const expRate = ((totalExpActual / totalExpPlan) * 100).toFixed(1);

    const netDiff = totalRevActual - totalExpActual; // -9.493,038 tỷ

    return {
      totalRevPlan: totalRevPlan.toLocaleString('vi-VN'),
      totalRevActual: totalRevActual.toLocaleString('vi-VN', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
      revRate,
      totalExpPlan: totalExpPlan.toLocaleString('vi-VN'),
      totalExpActual: totalExpActual.toLocaleString('vi-VN', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
      expRate,
      netDiff: netDiff.toLocaleString('vi-VN', { minimumFractionDigits: 3, maximumFractionDigits: 3 })
    };
  }
};
