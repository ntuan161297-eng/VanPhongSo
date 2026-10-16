import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { useApp } from '../context/AppContext';
import { LoginPage } from '../features/auth/LoginPage';

// Features
import { TaskDashboard } from '../features/tasks/TaskDashboard';
import { TaskListPage } from '../features/tasks/TaskListPage';
import { ProjectDashboard } from '../features/projects/ProjectDashboard';
import { ProjectCapitalSourcePage } from '../features/projects/ProjectCapitalSourcePage';
import { DisbursementDashboard } from '../features/disbursement/DisbursementDashboard';
import { DisbursementCapitalPage } from '../features/disbursement/DisbursementCapitalPage';
import { BudgetDashboard } from '../features/budget/BudgetDashboard';
import { BudgetRevenuePage } from '../features/budget/BudgetRevenuePage';
import { BudgetExpensePage } from '../features/budget/BudgetExpensePage';

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useApp();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Navigate to="/nhiem-vu/dashboard" replace />} />
      <Route path="/" element={<AppLayout />}>
        {/* Default route redirect to Nhiệm vụ Dashboard */}
        <Route index element={<Navigate to="/nhiem-vu/dashboard" replace />} />

        {/* 1. HỢP PHẦN NHIỆM VỤ GIAO */}
        <Route path="nhiem-vu" element={<Navigate to="/nhiem-vu/dashboard" replace />} />
        <Route path="nhiem-vu/dashboard" element={<TaskDashboard />} />
        <Route 
          path="nhiem-vu/can-xu-ly" 
          element={
            <TaskListPage 
              pageTitle="DANH SÁCH NHIỆM VỤ CẦN XỬ LÝ" 
              pageSubtitle="Các nhiệm vụ đang giải quyết, sắp đến hạn hoặc quá hạn cần xử lý gấp" 
              filterStatus={['DANG_XU_LY', 'SAP_DEN_HAN', 'QUA_HAN_CHUA_HOAN_THANH']} 
            />
          } 
        />
        <Route 
          path="nhiem-vu/da-hoan-thanh" 
          element={
            <TaskListPage 
              pageTitle="DANH SÁCH NHIỆM VỤ ĐÃ HOÀN THÀNH" 
              pageSubtitle="Các nhiệm vụ đã hoàn thành đúng hạn quy định của UBND tỉnh" 
              filterStatus="DA_HOAN_THANH" 
            />
          } 
        />
        <Route 
          path="nhiem-vu/hoan-thanh-qua-han" 
          element={
            <TaskListPage 
              pageTitle="DANH SÁCH NHIỆM VỤ HOÀN THÀNH QUÁ HẠN" 
              pageSubtitle="Các nhiệm vụ đã nộp báo cáo kết quả nhưng bị trễ thời hạn được giao" 
              filterStatus="HOAN_THANH_QUA_HAN" 
            />
          } 
        />
        <Route 
          path="nhiem-vu/dang-giai-quyet" 
          element={
            <TaskListPage 
              pageTitle="DANH SÁCH NHIỆM VỤ ĐANG GIẢI QUYẾT" 
              pageSubtitle="Nhiệm vụ đang trong hạn xử lý của các cơ quan, đơn vị" 
              filterStatus={['DANG_XU_LY', 'SAP_DEN_HAN']} 
            />
          } 
        />
        <Route 
          path="nhiem-vu/dang-giai-quyet-qua-han" 
          element={
            <TaskListPage 
              pageTitle="DANH SÁCH NHIỆM VỤ ĐANG GIẢI QUYẾT QUÁ HẠN" 
              pageSubtitle="Cảnh báo: Các nhiệm vụ đã trễ hạn báo cáo nhưng chưa hoàn thành dứt điểm" 
              filterStatus="QUA_HAN_CHUA_HOAN_THANH" 
            />
          } 
        />

        {/* 2. HỢP PHẦN DỰ ÁN TRỌNG ĐIỂM */}
        <Route path="du-an" element={<Navigate to="/du-an/dashboard" replace />} />
        <Route path="du-an/dashboard" element={<ProjectDashboard />} />
        <Route 
          path="du-an/su-dung-nsnn" 
          element={
            <ProjectCapitalSourcePage 
              capitalSource="NSNN" 
              title="DỰ ÁN TRỌNG ĐIỂM SỬ DỤNG VỐN NGÂN SÁCH NHÀ NƯỚC (NSNN)" 
              subtitle="Giám sát 20 dự án hạ tầng giao thông, công trình dân dụng, y tế, giáo dục và thủy lợi sử dụng vốn ngân sách Trung ương và Tỉnh" 
            />
          } 
        />
        <Route 
          path="du-an/ngoai-nsnn" 
          element={
            <ProjectCapitalSourcePage 
              capitalSource="NGOAI_NSNN" 
              title="DỰ ÁN TRỌNG ĐIỂM NGOÀI NGÂN SÁCH NHÀ NƯỚC (VỐN DOANH NGHIỆP / FDI / XÃ HỘI HÓA)" 
              subtitle="Giám sát 14 dự án khu công nghiệp, đại đô thị sinh thái, logistics và năng lượng do các tập đoàn kinh tế đầu tư" 
            />
          } 
        />
        {/* Redirect các route cũ để tương thích ngược */}
        <Route path="du-an/giao-thong" element={<Navigate to="/du-an/su-dung-nsnn" replace />} />
        <Route path="du-an/xay-dung-dan-dung" element={<Navigate to="/du-an/ngoai-nsnn" replace />} />
        <Route path="du-an/nong-nghiep" element={<Navigate to="/du-an/su-dung-nsnn" replace />} />

        {/* 3. HỢP PHẦN GIẢI NGÂN VỐN ĐẦU TƯ CÔNG */}
        <Route path="giai-ngan" element={<Navigate to="/giai-ngan/dashboard" replace />} />
        <Route path="giai-ngan/dashboard" element={<DisbursementDashboard />} />
        <Route 
          path="giai-ngan/von-dau-tu" 
          element={
            <DisbursementCapitalPage 
              capitalType="VON_DAU_TU" 
              title="TIẾN ĐỘ GIẢI NGÂN VỐN ĐẦU TƯ PHÁT TRIỂN" 
              subtitle="Nguồn vốn đầu tư công tập trung của ngân sách Trung ương và ngân sách tỉnh" 
            />
          } 
        />
        <Route 
          path="giai-ngan/von-su-nghiep" 
          element={
            <DisbursementCapitalPage 
              capitalType="VON_SU_NGHIEP" 
              title="TIẾN ĐỘ GIẢI NGÂN VỐN SỰ NGHIỆP" 
              subtitle="Kế hoạch vốn sự nghiệp kinh tế, giáo dục, y tế và môi trường" 
            />
          } 
        />
        <Route 
          path="giai-ngan/giai-ngan-cntt" 
          element={
            <DisbursementCapitalPage 
              capitalType="VON_CNTT" 
              title="TIẾN ĐỘ GIẢI NGÂN ỨNG DỤNG CNTT & CHUYỂN ĐỔI SỐ" 
              subtitle="Kế hoạch vốn các đề án cơ sở dữ liệu chuyên ngành và trung tâm điều hành IOC" 
            />
          } 
        />

        {/* 4. HỢP PHẦN THU CHI NGÂN SÁCH */}
        <Route path="ngan-sach" element={<Navigate to="/ngan-sach/dashboard" replace />} />
        <Route path="ngan-sach/dashboard" element={<BudgetDashboard />} />
        <Route path="ngan-sach/thu" element={<BudgetRevenuePage />} />
        <Route path="ngan-sach/chi" element={<BudgetExpensePage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/nhiem-vu/dashboard" replace />} />
      </Route>
    </Routes>
  );
};
