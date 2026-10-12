import { TaskItem, TaskPriority, TaskStatus } from '../types';

export const FEATURED_TASKS_MOCK: TaskItem[] = [
  {
    id: 'task-feat-1',
    code: 'NV-HY-26-001',
    title: 'Tổ chức các hoạt động Chuyển đổi số tỉnh Hưng Yên năm 2026',
    leadingDept: 'Sở Khoa học và Công nghệ',
    coDepts: ['Văn phòng UBND tỉnh', 'UBND các xã, phường'],
    assignDate: '15/01/2026',
    deadline: '30/10/2026',
    progress: 70,
    status: 'DANG_XU_LY',
    priority: 'KHAN',
    assignedLeader: 'Đ/c Đinh Gia Dũng - Chánh VP UBND tỉnh',
    field: 'Khoa học công nghệ & Chuyển đổi số',
    expediteCount: 1,
    history: [
      { id: 'h1', date: '15/01/2026', action: 'Giao nhiệm vụ', performer: 'Văn phòng UBND tỉnh', comment: 'Giao cơ quan chủ trì xây dựng kế hoạch triển khai ngày chuyển đổi số toàn tỉnh.' }
    ],
    relatedDocs: ['Kế hoạch số 12/KH-UBND', 'Quyết định số 105/QĐ-UBND']
  },
  {
    id: 'task-feat-2',
    code: 'NV-HY-26-002',
    title: 'Báo cáo tiến độ giải ngân vốn đầu tư công Quý IV/2026',
    leadingDept: 'Sở Tài chính',
    coDepts: ['Sở Xây dựng', 'Kho bạc Nhà nước tỉnh', 'Ban QLDA Giao thông tỉnh'],
    assignDate: '20/01/2026',
    deadline: '25/10/2026',
    progress: 40,
    status: 'SAP_DEN_HAN',
    priority: 'HOA_TOC',
    assignedLeader: 'Đ/c Nguyễn Quang Trung - Phó Chánh VP',
    field: 'Tài chính - Kế hoạch đầu tư',
    expediteCount: 2,
    history: [
      { id: 'h2', date: '20/01/2026', action: 'Giao nhiệm vụ', performer: 'Lãnh đạo Văn phòng UBND tỉnh', comment: 'Yêu cầu tổng hợp chi tiết kế hoạch vốn từng dự án trọng điểm.' }
    ],
    relatedDocs: ['Công văn số 342/UBND-KT']
  },
  {
    id: 'task-feat-3',
    code: 'NV-HY-26-003',
    title: 'Rà soát, sắp xếp lại quy hoạch các khu công nghiệp',
    leadingDept: 'Ban Quản lý các KCN tỉnh',
    coDepts: ['Sở Xây dựng', 'Sở Nông nghiệp và Môi trường'],
    assignDate: '10/01/2026',
    deadline: '20/10/2026',
    progress: 20,
    status: 'QUA_HAN_CHUA_HOAN_THANH',
    priority: 'HOA_TOC',
    assignedLeader: 'Đ/c Nguyễn Đức Huỳnh - Phó Chánh VP',
    field: 'Đô thị - Quy hoạch xây dựng',
    expediteCount: 3,
    history: [
      { id: 'h3', date: '10/01/2026', action: 'Giao nhiệm vụ', performer: 'Văn phòng UBND tỉnh', comment: 'Đôn đốc lần 3 yêu cầu hoàn thành đồ án quy hoạch phân khu các KCN mới.' }
    ],
    relatedDocs: ['Thông báo kết luận số 55/TB-UBND']
  },
  {
    id: 'task-feat-4',
    code: 'NV-HY-26-004',
    title: 'Xây dựng Đề án phát triển nông nghiệp công nghệ cao',
    leadingDept: 'Sở Nông nghiệp và Môi trường',
    coDepts: ['Sở Khoa học và Công nghệ', 'UBND các xã, phường'],
    assignDate: '05/02/2026',
    deadline: '31/12/2026',
    progress: 10,
    status: 'CHUA_GIAO',
    priority: 'TRUNG_BINH',
    assignedLeader: 'Đ/c Nguyễn Văn Dực - Phó Chánh VP',
    field: 'Nông nghiệp & Môi trường',
    expediteCount: 0,
    history: [
      { id: 'h4', date: '05/02/2026', action: 'Dự thảo giao việc', performer: 'Văn phòng UBND tỉnh', comment: 'Đang lấy ý kiến chuyên gia và các hợp tác xã nông nghiệp cơ sở.' }
    ],
    relatedDocs: ['Tờ trình số 18/TTr-SNNMT']
  },
  {
    id: 'task-feat-5',
    code: 'NV-HY-26-005',
    title: 'Triển khai các nhiệm vụ chuyển đổi số cấp xã năm 2026',
    leadingDept: 'UBND Xã Văn Giang',
    coDepts: ['UBND Xã Nghĩa Trụ', 'UBND Phường Phố Hiến', 'Sở Khoa học và Công nghệ'],
    assignDate: '12/01/2026',
    deadline: '10/11/2026',
    progress: 35,
    status: 'DANG_XU_LY',
    priority: 'KHAN',
    assignedLeader: 'Đ/c Nguyễn Xuân Phương - Phó Chánh VP',
    field: 'Chính quyền 2 cấp & Cải cách TTHC',
    expediteCount: 1,
    history: [
      { id: 'h5', date: '12/01/2026', action: 'Giao nhiệm vụ', performer: 'Lãnh đạo Văn phòng UBND tỉnh', comment: 'Thí điểm mô hình điều hành chính quyền 2 cấp tại 104 xã, phường sau sắp xếp.' }
    ],
    relatedDocs: ['Nghị quyết số 1666/NQ-UBTVQH15']
  }
];

// Helper to generate exactly 124 tasks with exact distribution:
// 37 Đã hoàn thành (29.8%), 37 Đang thực hiện, 28 Quá hạn chưa hoàn thành, 12 Sắp đến hạn, 11 Chờ phê duyệt, 11 Chưa giao
export const generateTasksMock = (): TaskItem[] => {
  const list: TaskItem[] = [...FEATURED_TASKS_MOCK];

  const deptList = [
    'Sở Nông nghiệp và Môi trường',
    'UBND Xã Văn Giang',
    'Sở Tài chính',
    'Sở Xây dựng',
    'Ban Quản lý các KCN tỉnh',
    'Sở Khoa học và Công nghệ',
    'Sở Nội vụ',
    'UBND Phường Phố Hiến',
    'UBND Phường Thái Bình',
    'UBND Xã Nghĩa Trụ',
    'UBND Xã Quỳnh Phụ',
    'UBND Xã Tiền Hải',
    'UBND Phường Mỹ Hào',
    'UBND Xã Khoái Châu',
    'Sở Công Thương',
    'Sở Y tế',
    'Sở Giáo dục và Đào tạo',
    'Sở Văn hóa, Thể thao và Du lịch',
    'Sở Tư pháp'
  ];

  const leaders = [
    'Đ/c Đinh Gia Dũng - Chánh VP UBND tỉnh',
    'Đ/c Nguyễn Quang Trung - Phó Chánh VP',
    'Đ/c Nguyễn Đức Huỳnh - Phó Chánh VP',
    'Đ/c Nguyễn Văn Dực - Phó Chánh VP',
    'Đ/c Nguyễn Xuân Phương - Phó Chánh VP',
    'Đ/c Lê Anh Tuấn - Phó Chánh VP'
  ];

  const taskTitles = [
    'Đẩy nhanh tiến độ GPMB dự án Vành đai 4 vùng Thủ đô qua địa bàn các xã',
    'Hoàn thiện cơ sở dữ liệu số hóa 104 xã/phường sau sắp xếp chính quyền 2 cấp',
    'Kiểm tra công tác phòng chống thiên tai đê tả sông Hồng và sông Trà Lý',
    'Thẩm định phương án phân bổ và điều hòa kế hoạch vốn đầu tư công năm 2026',
    'Phê duyệt đồ án quy hoạch phân khu xây dựng KCN sạch Hưng Yên',
    'Triển khai phương án sắp xếp cơ sở nhà đất dôi dư sau sắp xếp ĐVHC cấp xã',
    'Thanh tra trách nhiệm thực thi công vụ và kỷ luật hành chính tại cơ sở xã, phường',
    'Xây dựng hệ thống giải quyết TTHC liên thông chính quyền 2 cấp Tỉnh - Xã',
    'Đôn đốc thu ngân sách tiền sử dụng đất các dự án khu đô thị mới',
    'Khảo sát đầu tư nâng cấp hạ tầng giao thông kết nối các xã sáp nhập',
    'Nghiệm thu đưa vào sử dụng công trình Bệnh viện Sản - Nhi tỉnh',
    'Bàn giao mặt bằng thi công tuyến đường Tân Phúc - Võng Phan giai đoạn 2',
    'Xử lý ô nhiễm nguồn nước sông Bắc Hưng Hải đoạn qua địa bàn tỉnh',
    'Triển khai bệnh án điện tử và tích hợp dữ liệu khám chữa bệnh tại các trạm y tế xã',
    'Tổ chức diễn tập khu vực phòng thủ tỉnh Hưng Yên năm 2026'
  ];

  const statusPool: TaskStatus[] = [];
  for (let i = 0; i < 37; i++) statusPool.push('DA_HOAN_THANH');
  for (let i = 0; i < 28; i++) statusPool.push('QUA_HAN_CHUA_HOAN_THANH');
  for (let i = 0; i < 26; i++) statusPool.push('DANG_XU_LY');
  for (let i = 0; i < 11; i++) statusPool.push('SAP_DEN_HAN');
  for (let i = 0; i < 11; i++) statusPool.push('CHO_PHE_DUYET');
  for (let i = 0; i < 11; i++) statusPool.push('CHUA_GIAO');

  statusPool[0] = 'DANG_XU_LY';
  statusPool[1] = 'SAP_DEN_HAN';
  statusPool[2] = 'QUA_HAN_CHUA_HOAN_THANH';
  statusPool[3] = 'CHUA_GIAO';
  statusPool[4] = 'DANG_XU_LY';

  for (let i = 5; i < 124; i++) {
    const status = statusPool[i];
    const dept = deptList[(i * 3) % deptList.length];
    const title = taskTitles[i % taskTitles.length] + ` (Đợt ${Math.floor(i / 10) + 1})`;
    const leader = leaders[i % leaders.length];

    let progress = 50;
    let deadline = '30/11/2026';
    let priority: TaskPriority = 'TRUNG_BINH';
    let expedite = 0;

    if (status === 'DA_HOAN_THANH') {
      progress = 100;
      deadline = '15/09/2026';
    } else if (status === 'QUA_HAN_CHUA_HOAN_THANH') {
      progress = 20 + (i % 35);
      deadline = '01/10/2026';
      priority = 'HOA_TOC';
      expedite = 1 + (i % 3);
    } else if (status === 'SAP_DEN_HAN') {
      progress = 65 + (i % 25);
      deadline = '15/10/2026';
      priority = 'KHAN';
      expedite = 1;
    } else if (status === 'CHO_PHE_DUYET') {
      progress = 95;
      deadline = '28/10/2026';
    } else if (status === 'CHUA_GIAO') {
      progress = 0;
      deadline = '15/12/2026';
    }

    list.push({
      id: `task-gen-${i + 1}`,
      code: `NV-HY-26-${String(i + 1).padStart(3, '0')}`,
      title,
      leadingDept: dept,
      coDepts: [deptList[(i + 1) % deptList.length]],
      assignDate: '15/02/2026',
      deadline,
      progress,
      status,
      priority,
      assignedLeader: leader,
      field: 'Chỉ đạo điều hành chính quyền 2 cấp',
      expediteCount: expedite,
      history: [
        { id: `hg-${i}`, date: '15/02/2026', action: 'Giao nhiệm vụ', performer: 'UBND tỉnh Hưng Yên', comment: 'Thực hiện theo chỉ đạo của Tỉnh ủy và UBND tỉnh.' }
      ],
      relatedDocs: [`QĐ-${100 + i}/QĐ-UBND`]
    });
  }

  return list;
};

export const TASKS_MOCK = generateTasksMock();
