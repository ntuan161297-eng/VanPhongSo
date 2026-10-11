import React, { useState } from 'react';
import { Modal, Select, Button, Table, Tabs, Tag, message } from 'antd';
import { PrinterOutlined, DownloadOutlined, FileTextOutlined } from '@ant-design/icons';
import { useApp } from '../../context/AppContext';
import { TaskService, ProjectService, DisbursementService, BudgetService } from '../../services/dataService';

export const ReportModal: React.FC = () => {
  const { reportModalOpen, setReportModalOpen } = useApp();
  const [reportPeriod, setReportPeriod] = useState('Năm 2026');

  const taskStats = TaskService.getStats(TaskService.getAll());
  const projStats = ProjectService.getStats(ProjectService.getAll());
  const disbStats = DisbursementService.getStats(DisbursementService.getAll());
  const budgetStats = BudgetService.getStats();

  const handleExportSummaryCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "\uFEFF" // UTF-8 BOM for Vietnamese Excel support
      + "BÁO CÁO TỔNG HỢP VĂN PHÒNG SỐ TỈNH HƯNG YÊN\n"
      + `Kỳ báo cáo: ${reportPeriod}\n\n`
      + "HỢP PHẦN,CHỈ TIÊU,GIÁ TRỊ,ĐƠN VỊ,ĐÁNH GIÁ\n"
      + `Nhiệm vụ giao,Tổng số nhiệm vụ,${taskStats.total},Nhiệm vụ,Toàn tỉnh\n`
      + `Nhiệm vụ giao,Đã hoàn thành,${taskStats.completedTotal},Nhiệm vụ,Đạt ${taskStats.completionRate}%\n`
      + `Nhiệm vụ giao,Quá hạn chưa xong,${taskStats.overduePending},Nhiệm vụ,Cần đôn đốc khẩn\n`
      + `Dự án trọng điểm,Tổng số dự án,${projStats.total},Dự án,Tập trung 3 lĩnh vực\n`
      + `Dự án trọng điểm,Tổng vốn đầu tư,${projStats.totalInvestment},Tỷ VNĐ,Toàn bộ dự án\n`
      + `Dự án trọng điểm,Dự án chậm tiến độ,${projStats.delayed},Dự án,Vướng mắc GPMB\n`
      + `Giải ngân đầu tư công,Kế hoạch vốn,${disbStats.totalPlan},Tỷ VNĐ,Năm 2026\n`
      + `Giải ngân đầu tư công,Đã giải ngân,${disbStats.totalDisbursed},Tỷ VNĐ,Tỷ lệ ${disbStats.avgRate}%\n`
      + `Thu chi ngân sách,Tổng thu ngân sách,${budgetStats.totalRevActual},Tỷ VNĐ,Đạt ${budgetStats.revRate}% dự toán\n`
      + `Thu chi ngân sách,Tổng chi ngân sách,${budgetStats.totalExpActual},Tỷ VNĐ,Đạt ${budgetStats.expRate}% dự toán\n`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Bao_Cao_Dieu_Hanh_Hung_Yen_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('Đã xuất báo cáo tổng hợp dạng CSV thành công!');
  };

  const summaryData = [
    { key: '1', module: '1. Nhiệm vụ giao', kpi: `Tổng ${taskStats.total} nhiệm vụ`, actual: `Hoàn thành ${taskStats.completedTotal} (${taskStats.completionRate}%)`, alert: `${taskStats.overduePending} quá hạn`, status: 'warning' },
    { key: '2', module: '2. Dự án trọng điểm', kpi: `Tổng ${projStats.total} dự án (Vốn ${projStats.totalInvestment} tỷ)`, actual: `Đang triển khai ${projStats.inProgress} dự án`, alert: `${projStats.delayed} dự án chậm tiến độ`, status: 'error' },
    { key: '3', module: '3. Giải ngân đầu tư công', kpi: `Kế hoạch: ${disbStats.totalPlan} tỷ VNĐ`, actual: `Đã giải ngân: ${disbStats.totalDisbursed} tỷ (${disbStats.avgRate}%)`, alert: `${disbStats.lowDeptsCount} đơn vị giải ngân thấp`, status: 'error' },
    { key: '4', module: '4. Thu chi ngân sách', kpi: `Dự toán thu: ${budgetStats.totalRevPlan} tỷ VNĐ`, actual: `Thực thu: ${budgetStats.totalRevActual} tỷ (${budgetStats.revRate}%)`, alert: 'Dữ liệu mô phỏng từ IOC', status: 'processing' }
  ];

  const columns = [
    { title: 'Hợp phần điều hành', dataIndex: 'module', key: 'module', render: (t: string) => <strong>{t}</strong> },
    { title: 'Chỉ tiêu kế hoạch / Quy mô', dataIndex: 'kpi', key: 'kpi' },
    { title: 'Kết quả thực hiện', dataIndex: 'actual', key: 'actual' },
    { 
      title: 'Vấn đề trọng tâm cần chỉ đạo', 
      dataIndex: 'alert', 
      key: 'alert',
      render: (t: string, r: any) => <Tag color={r.status}>{t}</Tag>
    }
  ];

  return (
    <Modal
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#1e293b' }}>
          <FileTextOutlined style={{ color: '#0798EB' }} />
          <span>BÁO CÁO TỔNG HỢP ĐIỀU HÀNH TỈNH HƯNG YÊN</span>
        </div>
      }
      open={reportModalOpen}
      onCancel={() => setReportModalOpen(false)}
      width={850}
      footer={[
        <Button key="close" onClick={() => setReportModalOpen(false)}>Đóng</Button>,
        <Button key="print" icon={<PrinterOutlined />} onClick={() => window.print()}>In báo cáo</Button>,
        <Button key="export" type="primary" icon={<DownloadOutlined />} onClick={handleExportSummaryCSV} style={{ background: '#0798EB' }}>
          Xuất Báo cáo CSV
        </Button>
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, background: '#f8fafc', padding: 12, borderRadius: 6 }}>
        <div>
          <span style={{ fontSize: 13, color: '#64748b' }}>Kỳ tổng hợp: </span>
          <Select
            value={reportPeriod}
            onChange={setReportPeriod}
            style={{ width: 150 }}
            options={[
              { value: 'Năm 2024', label: 'Năm 2024' },
              { value: 'Quý III/2024', label: 'Quý III/2024' },
              { value: 'Tháng 10/2024', label: 'Tháng 10/2024' }
            ]}
          />
        </div>
        <div style={{ fontSize: 12, color: '#64748b' }}>
          Thời điểm tạo: <strong>{new Date().toLocaleDateString('vi-VN')}</strong>
        </div>
      </div>

      <Table
        dataSource={summaryData}
        columns={columns}
        pagination={false}
        size="middle"
        bordered
      />

      <div style={{ marginTop: 16, padding: 12, background: '#eff6ff', borderRadius: 6, fontSize: 12.5, color: '#1e40af' }}>
        <strong>Đánh giá chung của Văn phòng UBND tỉnh:</strong> Công tác chỉ đạo điều hành 10 tháng năm 2024 diễn ra đồng bộ, quyết liệt. Tiến độ giải ngân vốn đầu tư công đạt 75.89% cao hơn mức bình quân chung cả nước. Tuy nhiên cần tập trung tháo gỡ GPMB tại dự án đường Vành đai 4 và tuyến Tân Phúc - Võng Phan, đồng thời đôn đốc các đơn vị có tỷ lệ giải ngân dưới 60%.
      </div>
    </Modal>
  );
};
