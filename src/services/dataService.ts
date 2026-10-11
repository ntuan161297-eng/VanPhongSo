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
    const totalPlan = records.reduce((sum, r) => sum + r.planAmount, 0);
    const totalDisbursed = records.reduce((sum, r) => sum + r.disbursedAmount, 0);
    const remaining = totalPlan - totalDisbursed;
    const avgRate = totalPlan > 0 ? ((totalDisbursed / totalPlan) * 100).toFixed(2) : '0';

    const lowDeptsCount = records.filter(r => r.status === 'THAP').length;
    const metTargetCount = records.filter(r => r.status === 'DAT_MUC_TIEU').length;

    return {
      totalPlan: totalPlan.toFixed(1),
      totalDisbursed: totalDisbursed.toFixed(1),
      remaining: remaining.toFixed(1),
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
    const totalRevPlan = BUDGET_MONTHLY_MOCK.reduce((sum, m) => sum + m.revenuePlan, 0);
    const totalRevActual = BUDGET_MONTHLY_MOCK.reduce((sum, m) => sum + m.revenueActual, 0);
    const revRate = ((totalRevActual / totalRevPlan) * 100).toFixed(1);

    const totalExpPlan = BUDGET_MONTHLY_MOCK.reduce((sum, m) => sum + m.expensePlan, 0);
    const totalExpActual = BUDGET_MONTHLY_MOCK.reduce((sum, m) => sum + m.expenseActual, 0);
    const expRate = ((totalExpActual / totalExpPlan) * 100).toFixed(1);

    const netDiff = totalRevActual - totalExpActual;

    return {
      totalRevPlan: totalRevPlan.toLocaleString('vi-VN'),
      totalRevActual: totalRevActual.toLocaleString('vi-VN'),
      revRate,
      totalExpPlan: totalExpPlan.toLocaleString('vi-VN'),
      totalExpActual: totalExpActual.toLocaleString('vi-VN'),
      expRate,
      netDiff: netDiff.toLocaleString('vi-VN')
    };
  }
};
