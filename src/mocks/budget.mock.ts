import { BudgetCategoryItem, BudgetMonthlyItem } from '../types';

export const BUDGET_MONTHLY_MOCK: BudgetMonthlyItem[] = [
  { month: 'Tháng 1', revenuePlan: 2600, revenueActual: 2750, revenueRate: 105.7, expensePlan: 2100, expenseActual: 1980, expenseRate: 94.3, netDiff: 770 },
  { month: 'Tháng 2', revenuePlan: 2500, revenueActual: 2480, revenueRate: 99.2, expensePlan: 2050, expenseActual: 1920, expenseRate: 93.6, netDiff: 560 },
  { month: 'Tháng 3', revenuePlan: 2800, revenueActual: 3100, revenueRate: 110.7, expensePlan: 2300, expenseActual: 2210, expenseRate: 96.1, netDiff: 890 },
  { month: 'Tháng 4', revenuePlan: 2700, revenueActual: 2820, revenueRate: 104.4, expensePlan: 2250, expenseActual: 2180, expenseRate: 96.9, netDiff: 640 },
  { month: 'Tháng 5', revenuePlan: 2650, revenueActual: 2710, revenueRate: 102.3, expensePlan: 2200, expenseActual: 2150, expenseRate: 97.7, netDiff: 560 },
  { month: 'Tháng 6', revenuePlan: 2900, revenueActual: 3250, revenueRate: 112.1, expensePlan: 2500, expenseActual: 2420, expenseRate: 96.8, netDiff: 830 },
  { month: 'Tháng 7', revenuePlan: 2750, revenueActual: 2880, revenueRate: 104.7, expensePlan: 2350, expenseActual: 2290, expenseRate: 97.4, netDiff: 590 },
  { month: 'Tháng 8', revenuePlan: 2800, revenueActual: 2950, revenueRate: 105.4, expensePlan: 2400, expenseActual: 2340, expenseRate: 97.5, netDiff: 610 },
  { month: 'Tháng 9', revenuePlan: 3000, revenueActual: 3320, revenueRate: 110.7, expensePlan: 2600, expenseActual: 2550, expenseRate: 98.1, netDiff: 770 },
  { month: 'Tháng 10', revenuePlan: 2950, revenueActual: 3180, revenueRate: 107.8, expensePlan: 2550, expenseActual: 2490, expenseRate: 97.6, netDiff: 690 },
  { month: 'Tháng 11 (ước)', revenuePlan: 3100, revenueActual: 3260, revenueRate: 105.2, expensePlan: 2700, expenseActual: 2650, expenseRate: 98.1, netDiff: 610 },
  { month: 'Tháng 12 (kế hoạch)', revenuePlan: 3350, revenueActual: 3500, revenueRate: 104.5, expensePlan: 3000, expenseActual: 2920, expenseRate: 97.3, netDiff: 580 }
];

export const REVENUE_CATEGORIES_MOCK: BudgetCategoryItem[] = [
  { name: 'Thu từ khu vực doanh nghiệp có vốn FDI', plan: 12500, actual: 13420, rate: 107.4, type: 'THU' },
  { name: 'Thu tiền sử dụng đất các dự án KĐT, KCN', plan: 9500, actual: 10280, rate: 108.2, type: 'THU' },
  { name: 'Thu từ khu vực công thương nghiệp ngoài quốc doanh', plan: 4800, actual: 4950, rate: 103.1, type: 'THU' },
  { name: 'Thuế thu nhập cá nhân', plan: 2200, actual: 2380, rate: 108.2, type: 'THU' },
  { name: 'Thu từ hoạt động xuất nhập khẩu', plan: 3800, actual: 3920, rate: 103.2, type: 'THU' },
  { name: 'Lệ phí trước bạ, phí và các khoản thu khác', plan: 1300, actual: 1250, rate: 96.2, type: 'THU' }
];

export const EXPENSE_CATEGORIES_MOCK: BudgetCategoryItem[] = [
  { name: 'Chi đầu tư phát triển kết cấu hạ tầng', plan: 14500, actual: 13850, rate: 95.5, type: 'CHI' },
  { name: 'Chi sự nghiệp giáo dục, đào tạo và dạy nghề', plan: 5400, actual: 5290, rate: 98.0, type: 'CHI' },
  { name: 'Chi quản lý hành chính nhà nước, đảng, đoàn thể', plan: 2800, actual: 2740, rate: 97.9, type: 'CHI' },
  { name: 'Chi sự nghiệp y tế, dân số và gia đình', plan: 2100, actual: 2060, rate: 98.1, type: 'CHI' },
  { name: 'Chi sự nghiệp kinh tế, nông lâm thủy sản, giao thông', plan: 1850, actual: 1790, rate: 96.8, type: 'CHI' },
  { name: 'Chi bảo đảm xã hội và các chính sách an sinh', plan: 1350, actual: 1340, rate: 99.3, type: 'CHI' },
  { name: 'Chi an ninh, quốc phòng địa phương', plan: 900, actual: 890, rate: 98.9, type: 'CHI' }
];
