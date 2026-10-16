import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, DatePicker, Row, Col, Button, message } from 'antd';
import { Megaphone, Send, ShieldAlert } from 'lucide-react';
import dayjs from 'dayjs';
import { ProjectItem } from '../../types';
import { ProjectService } from '../../services/dataService';

const { TextArea } = Input;

interface ExpediteModalProps {
  open: boolean;
  project: ProjectItem | null;
  onClose: () => void;
  onSuccess?: () => void;
}

export const ExpediteModal: React.FC<ExpediteModalProps> = ({
  open,
  project,
  onClose,
  onSuccess
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (project && open) {
      form.resetFields();

      // Chuẩn bị danh sách đơn vị nhận đôn đốc từ cơ quan chủ trì + phối hợp + nhà đầu tư (loại trừ trùng lặp)
      const rawDepts: string[] = [];
      if (project.expediteInfo?.leadDepartment) rawDepts.push(project.expediteInfo.leadDepartment);
      if (project.investor) rawDepts.push(project.investor);
      if (project.expediteInfo?.cooperatingDepartments) {
        project.expediteInfo.cooperatingDepartments.forEach(d => rawDepts.push(d));
      }
      if (rawDepts.length === 0) {
        rawDepts.push('Sở Xây dựng', 'Sở Tài chính', 'Sở Nông nghiệp và Môi trường', project.investor);
      }
      const targetDepts = Array.from(new Set(rawDepts.filter(Boolean)));

      let defaultProcedure = 'Các thủ tục về đầu tư, doanh nghiệp, góp vốn';
      if (project.expediteInfo?.delayedStage === 'GIAI_PHONG_MAT_BANG' || project.currentStage === 'GIAI_PHONG_MAT_BANG') {
        defaultProcedure = 'Đất đai, GPMB, mặt bằng';
      } else if (project.expediteInfo?.delayedStage === 'THI_CONG_XAY_DUNG' || project.currentStage === 'THI_CONG_XAY_DUNG') {
        defaultProcedure = 'Thi công xây dựng, hạ tầng kỹ thuật';
      } else if (project.currentStage === 'HOAN_THANH') {
        defaultProcedure = 'Thiết kế, xây dựng, PCCC, đấu nối';
      }

      const defaultTask = project.expediteInfo?.bottleneckLocation
        ? `Tập trung giải quyết dứt điểm điểm nghẽn tại ${project.expediteInfo.bottleneckLocation}`
        : 'Hoàn thành hồ sơ, thủ tục bồi thường, hỗ trợ, tái định cư/GPMB và tháo gỡ vướng mắc phát sinh';

      // Số văn bản gợi ý từ lịch sử đôn đốc hoặc sinh số chuẩn tỉnh
      const existingDoc = project.expediteInfo?.expediteHistory?.[0]?.docNumber;
      const docNumber = existingDoc || `${Math.floor(Math.random() * 800 + 100)}/UBND-KT`;

      form.setFieldsValue({
        targetDepts,
        docNumber,
        issueDate: dayjs(),
        summary: `V/v đôn đốc đẩy nhanh tiến độ thực hiện dự án: ${project.name}`,
        signer: 'Lãnh đạo UBND tỉnh',
        signerTitle: 'Phó Chủ tịch UBND tỉnh',
        procedureName: defaultProcedure,
        taskName: defaultTask,
        content: `Yêu cầu các đơn vị khẩn trương phối hợp xử lý dứt điểm các vướng mắc, khó khăn tại dự án ${project.name} (${project.code}). Báo cáo kết quả xử lý về UBND tỉnh đúng thời hạn cam kết.`
      });
    }
  }, [project, open, form]);

  if (!project) return null;

  const stageLabels: Record<string, string> = {
    THU_TUC_DAU_TU: 'Đang thực hiện thủ tục đầu tư',
    GIAI_PHONG_MAT_BANG: 'Đang giải phóng mặt bằng',
    THI_CONG_XAY_DUNG: 'Đang triển khai thi công xây dựng',
    HOAN_THANH: 'Hoàn thành đưa vào vận hành'
  };

  const statusLabels: Record<string, string> = {
    DANG_TRIEN_KHAI: 'Đúng tiến độ',
    CHAM_TIEN_DO: 'Chậm tiến độ',
    CHUAN_BI_DAU_TU: 'Chuẩn bị đầu tư',
    HOAN_THANH: 'Đã hoàn thành'
  };

  const handleFinish = (values: any) => {
    try {
      const formattedDate = values.issueDate ? values.issueDate.format('DD/MM/YYYY') : dayjs().format('DD/MM/YYYY');
      ProjectService.expediteProject(
        project.id,
        values.content,
        `${values.signer} (${values.signerTitle})`,
        dayjs().add(15, 'day').format('YYYY-MM-DD')
      );

      // Thêm thông tin mở rộng vào lịch sử
      if (project.expediteInfo?.expediteHistory && project.expediteInfo.expediteHistory.length > 0) {
        const latest = project.expediteInfo.expediteHistory[0];
        latest.docNumber = values.docNumber;
        latest.targetDepts = values.targetDepts;
        latest.procedureName = values.procedureName;
        latest.taskName = values.taskName;
        latest.signerTitle = values.signerTitle;
      }

      message.success(`Đã ban hành văn bản đôn đốc số ${values.docNumber} tới các đơn vị phối hợp!`);
      onClose();
      if (onSuccess) onSuccess();
    } catch (e) {
      message.error('Lỗi khi gửi văn bản đôn đốc');
    }
  };

  // Danh sách các cơ quan chính quyền 2 cấp và các Sở ban ngành để người dùng chọn nhanh
  const allDepartmentOptions = Array.from(new Set([
    ...(project.expediteInfo?.leadDepartment ? [project.expediteInfo.leadDepartment] : []),
    ...(project.investor ? [project.investor] : []),
    ...(project.expediteInfo?.cooperatingDepartments || []),
    'Sở Xây dựng',
    'Sở Tài chính',
    'Sở Nông nghiệp và Môi trường',
    'Sở Công Thương',
    'Sở Nội vụ',
    'Sở Tư pháp',
    'Sở Khoa học và Công nghệ',
    'Sở Giáo dục và Đào tạo',
    'Sở Y tế',
    'Sở Văn hóa, Thể thao và Du lịch',
    'Ban Quản lý các KCN tỉnh Hưng Yên',
    'Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh',
    'Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh',
    'Công an tỉnh (Phòng Cảnh sát PCCC)',
    'Văn phòng UBND tỉnh'
  ])).map(name => ({ label: name, value: name }));

  return (
    <Modal
      title={
        <div style={{ 
          background: '#0284c7', 
          margin: '-20px -24px 16px -24px', 
          padding: '14px 24px', 
          color: '#ffffff', 
          display: 'flex', 
          alignItems: 'center', 
          gap: 10,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8
        }}>
          <Megaphone size={20} color="#ffffff" />
          <span style={{ fontSize: 16, fontWeight: 700 }}>Đôn đốc dự án</span>
        </div>
      }
      open={open}
      onCancel={onClose}
      footer={null}
      width={780}
      destroyOnClose
      styles={{ body: { padding: '0 4px 10px 4px' } }}
    >
      {/* Khung tóm tắt trạng thái (Ảnh 3) */}
      <div style={{ marginBottom: 16, borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>
          {project.name}
        </div>
        <div style={{ fontSize: 12.5, color: '#475569', marginTop: 3 }}>
          Giai đoạn hiện tại: <strong>{stageLabels[project.currentStage] || project.currentStage}</strong> · <span style={{ color: project.status === 'CHAM_TIEN_DO' ? '#dc2626' : '#15803d', fontWeight: 600 }}>{statusLabels[project.status] || project.status}</span>
        </div>
        <div style={{ fontSize: 12, color: '#64748b', marginTop: 2, fontStyle: 'italic' }}>
          Dự án đang chậm hoặc có mốc phải hoàn thành trong 10 ngày, đủ điều kiện gửi đôn đốc.
        </div>
      </div>

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        {/* Đơn vị nhận đôn đốc */}
        <Form.Item 
          name="targetDepts" 
          label={<span style={{ fontWeight: 600 }}>Đơn vị/Doanh nghiệp nhận đôn đốc</span>} 
          rules={[{ required: true, message: 'Vui lòng chọn ít nhất một đơn vị nhận đôn đốc' }]}
          extra={<span style={{ fontSize: 11.5, color: '#64748b' }}>Danh sách được lấy sẵn từ Đơn vị phối hợp trong thông tin dự án; có thể thêm hoặc bỏ đơn vị trước khi gửi.</span>}
        >
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Thêm cơ quan, đơn vị nhận đôn đốc..."
            tokenSeparators={[',']}
            options={allDepartmentOptions}
          />
        </Form.Item>

        {/* Số văn bản & Ngày ban hành */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="docNumber" label="Số văn bản" rules={[{ required: true, message: 'Vui lòng nhập số văn bản' }]}>
              <Input placeholder="Ví dụ: 120/UBND-VP" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="issueDate" label="Ngày ban hành" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
            </Form.Item>
          </Col>
        </Row>

        {/* Trích yếu */}
        <Form.Item name="summary" label="Trích yếu" rules={[{ required: true, message: 'Vui lòng nhập trích yếu' }]}>
          <Input placeholder="V/v đôn đốc đẩy nhanh tiến độ..." showCount maxLength={255} />
        </Form.Item>

        {/* Người ký & Chức vụ */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="signer" label="Người ký" rules={[{ required: true, message: 'Vui lòng nhập người ký' }]}>
              <Input placeholder="Họ và tên người ký" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="signerTitle" label="Chức vụ" rules={[{ required: true, message: 'Vui lòng nhập chức vụ' }]}>
              <Input placeholder="Ví dụ: Phó Chủ tịch UBND tỉnh" />
            </Form.Item>
          </Col>
        </Row>

        {/* Thủ tục cần đôn đốc & Công việc cần đôn đốc */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="procedureName" label="Thủ tục cần đôn đốc">
              <Select
                options={[
                  { value: 'Các thủ tục về đầu tư, doanh nghiệp, góp vốn', label: 'Thủ tục 1: Đầu tư, doanh nghiệp, góp vốn' },
                  { value: 'Quy hoạch, khảo sát, chuẩn bị dự án', label: 'Thủ tục 2: Quy hoạch, khảo sát, chuẩn bị dự án' },
                  { value: 'Môi trường, rừng, tài nguyên', label: 'Thủ tục 3: Môi trường, rừng, tài nguyên' },
                  { value: 'Đất đai, GPMB, mặt bằng', label: 'Thủ tục 4: Đất đai, GPMB, mặt bằng' },
                  { value: 'Thiết kế, xây dựng, PCCC, đấu nối', label: 'Thủ tục 5: Thiết kế, xây dựng, PCCC, đấu nối' },
                  { value: 'Thi công xây dựng, hạ tầng kỹ thuật', label: 'Hạng mục: Thi công xây dựng, hạ tầng' }
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="taskName" label="Công việc cần đôn đốc">
              <Input placeholder="Tên công việc hoặc điểm nghẽn cụ thể..." />
            </Form.Item>
          </Col>
        </Row>

        {/* Nội dung đôn đốc */}
        <Form.Item 
          name="content" 
          label={<span style={{ fontWeight: 600 }}>Nội dung đôn đốc</span>} 
          rules={[{ required: true, message: 'Vui lòng nhập nội dung chỉ đạo đôn đốc' }]}
        >
          <TextArea rows={4} placeholder="Nhập chi tiết nội dung chỉ đạo tháo gỡ khó khăn, yêu cầu các đơn vị chủ trì, phối hợp thực hiện..." />
        </Form.Item>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 16 }}>
          <Button onClick={onClose}>Hủy bỏ</Button>
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<Send size={14} />} 
            style={{ background: '#f59e0b', borderColor: '#d97706', fontWeight: 700 }}
          >
            📢 Gửi đôn đốc ngay
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
