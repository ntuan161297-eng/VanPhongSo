import React from 'react';
import { Modal, Collapse, Typography, Tag } from 'antd';
import { QuestionCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useApp } from '../../context/AppContext';

const { Paragraph, Title } = Typography;

export const UserGuideModal: React.FC = () => {
  const { guideModalOpen, setGuideModalOpen } = useApp();

  const items = [
    {
      key: '1',
      label: '1. Cấu trúc 4 tầng giao diện điều hành',
      children: (
        <div>
          <Paragraph>
            Hệ thống <strong>Văn phòng số tỉnh Hưng Yên</strong> được thiết kế theo cấu trúc phẳng 4 tầng chuyên biệt:
          </Paragraph>
          <ul>
            <li><strong>Tầng 1 (Header):</strong> Nhận diện thương hiệu cơ quan nhà nước, chuyển đổi vai trò người dùng, chuông cảnh báo và thông tin cá nhân.</li>
            <li><strong>Tầng 2 (Menu cha - Hàng Tab cấp 1):</strong> Gồm 4 hợp phần cốt lõi: <em>Nhiệm vụ giao, Dự án trọng điểm, Giải ngân vốn ĐTC, Thu chi ngân sách</em>.</li>
            <li><strong>Tầng 3 (Menu con - Hàng Tab cấp 2):</strong> Nằm sát ngay dưới hàng Tab cha, cho phép truy cập nhanh Dashboard hoặc danh mục nghiệp vụ chi tiết.</li>
            <li><strong>Tầng 4 (Màn hình điều hành):</strong> Banner Executive, KPI điều hành, Biểu đồ đa chiều, Danh sách cảnh báo và Bảng dữ liệu tương tác.</li>
          </ul>
        </div>
      )
    },
    {
      key: '2',
      label: '2. Thao tác trên Hợp phần Nhiệm vụ giao (3 chế độ)',
      children: (
        <div>
          <Paragraph>
            Tại <strong>Dashboard Nhiệm vụ</strong>, lãnh đạo có thể chuyển đổi giữa 3 chế độ xem:
          </Paragraph>
          <ul>
            <li><strong>Tổng quan & Cảnh báo:</strong> Nắm toàn cảnh tiến độ xử lý, cơ cấu donut, xu hướng và các đơn vị cần tập trung.</li>
            <li><strong>Phân tích chuyên sâu:</strong> Thống kê chi tiết theo đơn vị, người giao việc và lĩnh vực quản lý.</li>
            <li><strong>Đôn đốc & Xử lý gấp:</strong> Tập trung vào các nhiệm vụ quá hạn, sắp đến hạn. Lãnh đạo có thể bấm nút <strong>Đôn đốc (demo)</strong> để ban hành ngay chỉ đạo văn bản đôn đốc.</li>
          </ul>
        </div>
      )
    },
    {
      key: '3',
      label: '3. Theo dõi Dự án trọng điểm & Bản đồ số',
      children: (
        <Paragraph>
          Click vào bất kỳ dự án nào trong bảng để mở <strong>Hồ sơ chi tiết dự án (Drawer)</strong> gồm 7 tab nội bộ: Thông tin chung, Tiến độ mốc việc (Timeline), Kế hoạch vốn, Tình hình GPMB, Vướng mắc kiến nghị, Bản đồ số mô phỏng vị trí địa lý trên địa bàn tỉnh Hưng Yên và Văn bản pháp lý liên quan.
        </Paragraph>
      )
    },
    {
      key: '4',
      label: '4. Giám sát Giải ngân & Thu chi ngân sách',
      children: (
        <Paragraph>
          Giám sát tỷ lệ giải ngân theo từng Sở/Ban/Ngành và UBND Xã/Phường theo mô hình chính quyền 2 cấp với hệ thống cảnh báo màu sắc (Đạt mục tiêu / Trung bình / Thấp). Đối với ngân sách, hệ thống thể hiện dự toán và thực hiện cả 2 chiều Thu và Chi theo từng tháng trong năm 2026.
        </Paragraph>
      )
    }
  ];

  return (
    <Modal
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <QuestionCircleOutlined style={{ color: '#0798EB' }} />
          <span>HƯỚNG DẪN SỬ DỤNG VĂN PHÒNG SỐ TỈNH HƯNG YÊN</span>
        </div>
      }
      open={guideModalOpen}
      onCancel={() => setGuideModalOpen(false)}
      width={720}
      footer={null}
    >
      <Collapse defaultActiveKey={['1', '2']} items={items} />
    </Modal>
  );
};
