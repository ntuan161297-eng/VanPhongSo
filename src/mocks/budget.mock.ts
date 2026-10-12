import { BudgetCategoryItem, BudgetMonthlyItem } from '../types';

export const BUDGET_MONTHLY_MOCK: BudgetMonthlyItem[] = [
  { month: 'Tháng 1', revenuePlan: 4100, revenueActual: 4250, revenueRate: 103.7, expensePlan: 5200, expenseActual: 5080, expenseRate: 97.7, netDiff: -830 },
  { month: 'Tháng 2', revenuePlan: 4000, revenueActual: 4180, revenueRate: 104.5, expensePlan: 5100, expenseActual: 4950, expenseRate: 97.1, netDiff: -770 },
  { month: 'Tháng 3', revenuePlan: 4300, revenueActual: 4620, revenueRate: 107.4, expensePlan: 5400, expenseActual: 5280, expenseRate: 97.8, netDiff: -660 },
  { month: 'Tháng 4', revenuePlan: 4200, revenueActual: 4450, revenueRate: 106.0, expensePlan: 5300, expenseActual: 5180, expenseRate: 97.7, netDiff: -730 },
  { month: 'Tháng 5', revenuePlan: 4150, revenueActual: 4380, revenueRate: 105.5, expensePlan: 5250, expenseActual: 5120, expenseRate: 97.5, netDiff: -740 },
  { month: 'Tháng 6', revenuePlan: 4500, revenueActual: 4890, revenueRate: 108.7, expensePlan: 5800, expenseActual: 5650, expenseRate: 97.4, netDiff: -760 },
  { month: 'Tháng 7', revenuePlan: 4300, revenueActual: 4520, revenueRate: 105.1, expensePlan: 5500, expenseActual: 5380, expenseRate: 97.8, netDiff: -860 },
  { month: 'Tháng 8', revenuePlan: 4400, revenueActual: 4650, revenueRate: 105.7, expensePlan: 5600, expenseActual: 5480, expenseRate: 97.9, netDiff: -830 },
  { month: 'Tháng 9', revenuePlan: 4600, revenueActual: 4920, revenueRate: 107.0, expensePlan: 6000, expenseActual: 5850, expenseRate: 97.5, netDiff: -930 },
  { month: 'Tháng 10', revenuePlan: 4550, revenueActual: 4880, revenueRate: 107.3, expensePlan: 5950, expenseActual: 5810, expenseRate: 97.6, netDiff: -930 },
  { month: 'Tháng 11 (ước)', revenuePlan: 4300, revenueActual: 4540, revenueRate: 105.6, expensePlan: 5500, expenseActual: 5350, expenseRate: 97.3, netDiff: -810 },
  { month: 'Tháng 12 (kế hoạch)', revenuePlan: 4400, revenueActual: 4560.065, revenueRate: 103.6, expensePlan: 5600, expenseActual: 5203.103, expenseRate: 92.9, netDiff: -643.038 }
];

export const REVENUE_CATEGORIES_MOCK: BudgetCategoryItem[] = [
  { name: 'Thu tiền sử dụng đất (KĐT, KCN, đấu giá quyền SDĐ)', plan: 18500, actual: 19544.192, rate: 105.6, type: 'THU' },
  { name: 'Thu từ khu vực doanh nghiệp có vốn đầu tư nước ngoài (FDI)', plan: 17000, actual: 17480.0, rate: 102.8, type: 'THU' },
  { name: 'Thực hiện ngân sách trung ương (NSTW phân bổ)', plan: 9200, actual: 9451.634, rate: 102.7, type: 'THU' },
  { name: 'Thu khu vực công thương nghiệp ngoài quốc doanh', plan: 4500, actual: 4824.432, rate: 107.2, type: 'THU' },
  { name: 'Thuế thu nhập cá nhân & các khoản phí, lệ phí', plan: 2800, actual: 2920.0, rate: 104.3, type: 'THU' },
  { name: 'Thu tiền thuê đất các tổ chức kinh tế', plan: 600, actual: 619.807, rate: 103.3, type: 'THU' }
];

export const EXPENSE_CATEGORIES_MOCK: BudgetCategoryItem[] = [
  { name: 'Chi đầu tư phát triển (Kết cấu hạ tầng & CT trọng điểm)', plan: 41000, actual: 39659.254, rate: 96.7, type: 'CHI' },
  { name: 'Chi sự nghiệp giáo dục, đào tạo và dạy nghề', plan: 10500, actual: 10250.0, rate: 97.6, type: 'CHI' },
  { name: 'Chi quản lý hành chính nhà nước & chính quyền 2 cấp', plan: 5800, actual: 5680.119, rate: 97.9, type: 'CHI' },
  { name: 'Chi sự nghiệp y tế, dân số và gia đình', plan: 4200, actual: 4110.0, rate: 97.9, type: 'CHI' },
  { name: 'Chi sự nghiệp kinh tế, nông lâm thủy sản, giao thông', plan: 2800, actual: 2740.0, rate: 97.9, type: 'CHI' },
  { name: 'Chi bảo đảm an sinh xã hội, an ninh - quốc phòng', plan: 1900, actual: 1893.730, rate: 99.7, type: 'CHI' }
];
