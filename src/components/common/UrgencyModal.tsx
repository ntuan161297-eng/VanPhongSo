import React, { useState } from 'react';
import { Modal, Form, Input, Select, DatePicker, message, Alert } from 'antd';
import { SendOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { TaskItem } from '../../types';
import { TaskService } from '../../services/dataService';
import dayjs from 'dayjs';

interface UrgencyModalProps {
  task: TaskItem | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const UrgencyModal: React.FC<UrgencyModalProps> = ({
  task,
  open,
  onClose,
  onSuccess
}) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  if (!task) return null;

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSubmitting(true);

      // Simulate API call to expedite task
      setTimeout(() => {
        TaskService.expediteTask(
          task.id,
          values.instruction,
          values.signer
        );

        setSubmitting(false);
        message.success({
          content: `Đã ban hành văn bản đôn đốc số VBĐĐ-${Date.now().toString().slice(-4)} tới ${task.leadingDept}! (Mô phỏng demo)`,
          duration: 3
        });
        form.resetFields();
        onClose();
        onSuccess();
      }, 600);
    } catch (err) {
      // Form validation failed
    }
  };

  return (
    <Modal
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#b91c1c' }}>
          <ExclamationCircleOutlined />
          <span>Ban hành Văn bản Đôn đốc xử lý nhiệm vụ (Demo)</span>
        </div>
      }
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      okText="Ban hành đôn đốc"
      cancelText="Hủy"
      confirmLoading={submitting}
      okButtonProps={{ danger: true, icon: <SendOutlined /> }}
      width={620}
      destroyOnClose
    >
      <Alert
        message="Mô phỏng quy trình chỉ đạo, đôn đốc của Lãnh đạo tỉnh"
        description="Thao tác này sẽ ghi nhật ký đôn đốc vào tiến độ của nhiệm vụ và tăng chỉ số cảnh báo đối với đơn vị chủ trì."
        type="warning"
        showIcon
        style={{ marginBottom: 16 }}
      />

      <div style={{ background: '#f8fafc', padding: 12, borderRadius: 6, marginBottom: 16, fontSize: 13 }}>
        <div><strong>Mã nhiệm vụ:</strong> {task.code}</div>
        <div style={{ marginTop: 4 }}><strong>Nội dung:</strong> {task.title}</div>
        <div style={{ marginTop: 4 }}>
          <strong>Đơn vị chủ trì:</strong> <span style={{ color: '#0369a1', fontWeight: 600 }}>{task.leadingDept}</span>
        </div>
        <div style={{ marginTop: 4 }}>
          <strong>Hạn xử lý:</strong> <span style={{ color: '#dc2626', fontWeight: 600 }}>{task.deadline}</span>
          <span style={{ marginLeft: 16 }}><strong>Số lần đã đôn đốc:</strong> {task.expediteCount}</span>
        </div>
      </div>

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          signer: 'Đ/c Trần Quốc Văn - Chủ tịch UBND tỉnh',
          urgencyLevel: 'HOA_TOC',
          newDeadline: dayjs().add(5, 'day'),
          instruction: `Yêu cầu Giám đốc ${task.leadingDept} khẩn trương tập trung chỉ đạo, khắc phục vướng mắc và báo cáo kết quả thực hiện về UBND tỉnh trước thời hạn được giao.`
        }}
      >
        <Form.Item
          name="signer"
          label="Lãnh đạo ký ban hành"
          rules={[{ required: true, message: 'Vui lòng chọn người ký' }]}
        >
          <Select
            options={[
              { value: 'Đ/c Trần Quốc Văn - Chủ tịch UBND tỉnh', label: 'Đ/c Trần Quốc Văn - Chủ tịch UBND tỉnh' },
              { value: 'Đ/c Nguyễn Hùng Nam - Phó Chủ tịch UBND tỉnh', label: 'Đ/c Nguyễn Hùng Nam - Phó Chủ tịch UBND tỉnh' },
              { value: 'Đ/c Nguyễn Lê Huy - Phó Chủ tịch UBND tỉnh', label: 'Đ/c Nguyễn Lê Huy - Phó Chủ tịch UBND tỉnh' }
            ]}
          />
        </Form.Item>

        <Form.Item
          name="instruction"
          label="Nội dung chỉ đạo đôn đốc"
          rules={[{ required: true, message: 'Vui lòng nhập nội dung chỉ đạo' }]}
        >
          <Input.TextArea rows={3} placeholder="Nhập chỉ đạo cụ thể đối với đơn vị..." />
        </Form.Item>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Form.Item
            name="urgencyLevel"
            label="Mức độ khẩn"
          >
            <Select
              options={[
                { value: 'HOA_TOC', label: 'Hỏa tốc (Xử lý ngay)' },
                { value: 'KHAN', label: 'Khẩn (Trong 24 giờ)' },
                { value: 'THUONG', label: 'Bình thường' }
              ]}
            />
          </Form.Item>

          <Form.Item
            name="newDeadline"
            label="Hạn báo cáo bổ sung"
          >
            <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};
