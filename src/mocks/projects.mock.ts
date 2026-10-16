import { ProjectItem } from '../types';

export const PROJECTS_MOCK: ProjectItem[] = [
  {
    "id": "proj-1",
    "code": "DA-GT-01",
    "name": "Dự án đầu tư xây dựng đường Vành đai 4 - Vùng Thủ đô Hà Nội (Đoạn qua tỉnh Hưng Yên)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Văn Giang, Xã Nghĩa Trụ, Xã Yên Mỹ",
    "totalInvestment": 5244.5,
    "disbursedAmount": 3820.2,
    "progress": 74,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2023-06-25",
    "finishDate": "2027-12-31",
    "landArea": 232,
    "landClearanceProgress": 88.5,
    "landClearanceArea": "205.4 ha / 232 ha",
    "landClearanceNote": "Còn vướng mắc 78 hộ tại 3 khu tái định cư và di dời đường điện 220kV qua địa bàn Xã Văn Giang và Xã Yên Mỹ.",
    "bottlenecks": [
      "GPMB khu dân cư tập trung tại Xã Văn Giang chưa đồng thuận đơn giá bồi thường đất ở",
      "Thiếu hụt nguồn vật liệu cát đắp nền đường K95/K98",
      "Thủ tục cắt điện thi công di dời 3 vị trí cột điện cao thế 220kV kéo dài"
    ],
    "milestones": [
      {
        "name": "Khởi công xây dựng",
        "date": "2023-06-25",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao 70% mặt bằng",
        "date": "2023-12-30",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao 100% mặt bằng",
        "date": "2024-06-30",
        "status": "CHAM"
      },
      {
        "name": "Hoàn thành nền đường tuyến chính",
        "date": "2025-06-30",
        "status": "DANG_LAM"
      },
      {
        "name": "Thông xe kỹ thuật toàn tuyến",
        "date": "2026-12-30",
        "status": "CHUA_DEN"
      }
    ],
    "legalDocs": [
      "Nghị quyết số 56/2022/QH15",
      "Quyết định số 1420/QĐ-UBND tỉnh Hưng Yên"
    ],
    "coordinates": [
      20.9167,
      105.9556
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "56/2022/QH15",
      "policyDecisionDate": "2022-06-16",
      "currentStep": "Đã hoàn thành phê duyệt thiết kế BVTC, đang triển khai thi công và bồi thường GPMB song song",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục pháp lý đầu tư đã hoàn tất đầy đủ theo cơ chế đặc thù của Quốc hội."
    },
    "landClearanceStage": {
      "totalArea": 232,
      "surveyedArea": 232,
      "surveyedPercent": 100,
      "handedOverArea": 205.4,
      "handedOverPercent": 88.5,
      "totalPlots": 4176,
      "surveyedPlots": 4176,
      "handedOverPlots": 3696,
      "compensationPlan": {
        "totalCompensationAmount": 2150,
        "paidAmount": 1890.5,
        "paidPercent": 87.9,
        "totalHouseholds": 1420,
        "paidHouseholds": 1342,
        "unresolvedHouseholds": 78,
        "resettlementArrangement": "Bố trí 3 khu tái định cư tại Xã Văn Giang, Xã Nghĩa Trụ và Xã Yên Mỹ. Đã giao đất 85/112 lô tái định cư."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "78 hộ dân tại Xã Văn Giang chưa nhận tiền do kiến nghị về đơn giá bồi thường đất ở và chậm giao đất tái định cư."
    },
    "constructionStage": {
      "constructionProgress": 68,
      "constructionPlanNotes": "Triển khai đồng loạt 4 mũi thi công phân đoạn nền đường, cọc khoan nhồi mố trụ cầu vượt sông Bắc Hưng Hải.",
      "items": [
        {
          "id": "c1-1",
          "name": "Gói thầu số 01: Thi công xây dựng đoạn Km19+900 - Km32+000",
          "contractor": "Vinaconex",
          "plannedProgress": 75,
          "actualProgress": 65,
          "status": "CHAM_TIEN_DO",
          "note": "Thiếu cát đắp nền"
        },
        {
          "id": "c1-2",
          "name": "Gói thầu số 02: Thi công xây dựng cầu vượt nút giao cao tốc",
          "contractor": "Công ty Phương Thành",
          "plannedProgress": 80,
          "actualProgress": 78,
          "status": "DUNG_TIEN_DO"
        },
        {
          "id": "c1-3",
          "name": "Gói thầu số 03: Xây dựng hệ thống thoát nước và đường gom dân sinh",
          "contractor": "Công ty TNHH Hiệp Phú",
          "plannedProgress": 70,
          "actualProgress": 62,
          "status": "CHAM_TIEN_DO",
          "note": "Chờ bàn giao mặt bằng cục bộ"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Giải phóng mặt bằng & Tái định cư",
      "bottleneckLocation": "Khu vực 78 hộ dân giáp ranh nút giao Xã Văn Giang và hành lang di dời 3 vị trí cột điện cao thế 220kV Xã Yên Mỹ",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
      "cooperatingDepartments": [
        "UBND Xã Văn Giang",
        "UBND Xã Yên Mỹ",
        "Sở Nông nghiệp và Môi trường",
        "Sở Xây dựng",
        "Công ty Truyền tải điện 1 (EVNNPT)"
      ],
      "detailedDifficulties": "78 hộ dân tại Xã Văn Giang chưa nhận tiền do so sánh giá bồi thường đất ở giáp ranh Hà Nội; Hạ tầng kỹ thuật khu tái định cư Xã Văn Giang thi công chậm so với kế hoạch; Việc thỏa thuận lịch cắt điện thi công di dời đường điện 220kV kéo dài.",
      "proposalsAndRecommendations": "Đề nghị UBND tỉnh tổ chức đối thoại trực tiếp với các hộ dân; chỉ đạo UBND Xã Văn Giang khẩn trương hoàn thành hạ tầng tái định cư trong tháng 11/2026; giao Sở Xây dựng phối hợp Sở Nông nghiệp và Môi trường rà soát cơ chế hỗ trợ khác theo đúng Luật Đất đai mới.",
      "expediteHistory": [
        {
          "id": "exp-1",
          "date": "2026-09-15",
          "action": "Công văn đôn đốc số 245/UBND-KT",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Yêu cầu UBND Xã Văn Giang hoàn tất bàn giao 100% mặt bằng trước ngày 30/11/2026.",
          "feedbackDeadline": "2026-11-30"
        },
        {
          "id": "exp-2",
          "date": "2026-10-02",
          "action": "Thông báo kết luận số 182/TB-VP",
          "signer": "Chủ tịch UBND tỉnh",
          "content": "Giao Sở Xây dựng phối hợp Sở Nông nghiệp và Môi trường rà soát cơ chế hỗ trợ theo quy định mới.",
          "feedbackDeadline": "2026-10-25"
        }
      ]
    },
    "unresolvedIssues": "Vướng GPMB 78 hộ tại Xã Văn Giang chưa nhận tiền; chậm di dời 3 vị trí cột điện 220kV Xã Yên Mỹ; thiếu cát đắp nền."
  },
  {
    "id": "proj-2",
    "code": "DA-GT-02",
    "name": "Dự án xây dựng tuyến đường trục phát triển kinh tế Tân Phúc - Võng Phan (giai đoạn 1)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Ân Thi, Xã Tiên Lữ, Xã Quang Hưng",
    "totalInvestment": 2986,
    "disbursedAmount": 2150,
    "progress": 72,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-08-10",
    "finishDate": "2026-10-15",
    "landArea": 151,
    "landClearanceProgress": 96,
    "landClearanceArea": "145 ha / 151 ha",
    "landClearanceNote": "Đã bàn giao cơ bản đất nông nghiệp, mặt bằng thông suốt.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Phê duyệt thiết kế BVTC",
        "date": "2023-05-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Triển khai thi công Gói thầu 01",
        "date": "2023-09-01",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hợp long các cầu trên tuyến",
        "date": "2025-04-30",
        "status": "DANG_LAM"
      },
      {
        "name": "Thảm bê tông nhựa toàn tuyến",
        "date": "2026-06-30",
        "status": "CHUA_DEN"
      }
    ],
    "legalDocs": [
      "QĐ số 890/QĐ-UBND"
    ],
    "coordinates": [
      20.785,
      106.12
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "312/QĐ-HĐND",
      "policyDecisionDate": "2022-11-20",
      "currentStep": "Thi công xây lắp đại trà trên toàn tuyến, giải ngân đạt tiến độ kế hoạch",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 151,
      "surveyedArea": 151,
      "surveyedPercent": 100,
      "handedOverArea": 145,
      "handedOverPercent": 96,
      "totalPlots": 2718,
      "surveyedPlots": 2718,
      "handedOverPlots": 2610,
      "compensationPlan": {
        "totalCompensationAmount": 850,
        "paidAmount": 820,
        "paidPercent": 96.5,
        "totalHouseholds": 890,
        "paidHouseholds": 875,
        "unresolvedHouseholds": 15,
        "resettlementArrangement": "Bố trí 25 lô đất tái định cư tại Xã Ân Thi, các hộ đã nhận đất xây nhà."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Còn 6ha đất nông nghiệp đang hoàn tất hồ sơ chi trả đợt cuối."
    },
    "constructionStage": {
      "constructionProgress": 72,
      "constructionPlanNotes": "Thi công đồng loạt 3 phân đoạn, hoàn thiện đắp đất K98 và móng cọc các cầu.",
      "items": [
        {
          "id": "c2-1",
          "name": "Đoạn Tân Phúc - Km15+000",
          "contractor": "Công ty TNHH Xây dựng Hưng Long",
          "plannedProgress": 70,
          "actualProgress": 72,
          "status": "DUNG_TIEN_DO"
        },
        {
          "id": "c2-2",
          "name": "Đoạn Km15+000 - Võng Phan",
          "contractor": "Công ty CP Đầu tư XD Hải Phát",
          "plannedProgress": 75,
          "actualProgress": 72,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Mặt bằng thông suốt",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
      "cooperatingDepartments": [
        "UBND Xã Ân Thi",
        "UBND Xã Tiên Lữ",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Công tác thi công đảm bảo kế hoạch đề ra, không có vướng mắc nghiêm trọng.",
      "proposalsAndRecommendations": "Tiếp tục duy trì tiến độ, đôn đốc nhà thầu thảm bê tông nhựa đúng thời hạn.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Không có vướng mắc lớn; thi công đúng tiến độ"
  },
  {
    "id": "proj-3",
    "code": "DA-GT-03",
    "name": "Dự án nâng cấp, mở rộng tuyến đường liên tỉnh Hà Nội - Hưng Yên (đoạn qua Xã Yên Mỹ và Xã Khoái Châu)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Yên Mỹ, Xã Khoái Châu",
    "totalInvestment": 2897,
    "disbursedAmount": 1420,
    "progress": 49,
    "status": "CHAM_TIEN_DO",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-11-05",
    "finishDate": "2026-12-31",
    "landArea": 110,
    "landClearanceProgress": 82,
    "landClearanceArea": "90.2 ha / 110 ha",
    "landClearanceNote": "Vướng 42 hộ dân mặt tiền đường 379 tại Xã Yên Mỹ chưa thống nhất giá đền bù đất ở.",
    "bottlenecks": [
      "Nhà thầu thiếu hụt cát san lấp và đá cấp phối",
      "Vướng mặt bằng thi công mố cầu số 2 tại Xã Khoái Châu",
      "Di dời đường ống cấp nước sạch D400 chưa hoàn thành"
    ],
    "milestones": [
      {
        "name": "Bàn giao cọc mốc GPMB",
        "date": "2023-12-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Khởi công mở rộng mặt đường",
        "date": "2024-03-01",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thành mở rộng nền đường 4 làn xe",
        "date": "2025-06-30",
        "status": "CHAM"
      }
    ],
    "legalDocs": [
      "Nghị quyết số 120/NQ-HĐND"
    ],
    "coordinates": [
      20.84,
      106.01
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "120/NQ-HĐND",
      "policyDecisionDate": "2023-04-12",
      "currentStep": "Đang thi công nền mặt đường và hệ thống thoát nước dọc tuyến",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 110,
      "surveyedArea": 110,
      "surveyedPercent": 100,
      "handedOverArea": 90.2,
      "handedOverPercent": 82,
      "totalPlots": 1850,
      "surveyedPlots": 1850,
      "handedOverPlots": 1517,
      "compensationPlan": {
        "totalCompensationAmount": 760,
        "paidAmount": 580,
        "paidPercent": 76.3,
        "totalHouseholds": 520,
        "paidHouseholds": 478,
        "unresolvedHouseholds": 42,
        "resettlementArrangement": "Khu tái định cư Xã Yên Mỹ đang hoàn thiện hạ tầng kỹ thuật."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "42 hộ mặt tiền kinh doanh kiến nghị giá bồi thường đất ở chưa thỏa đáng."
    },
    "constructionStage": {
      "constructionProgress": 45,
      "constructionPlanNotes": "Thi công cầm chừng phân đoạn qua Xã Yên Mỹ do mặt bằng ngắt quãng.",
      "items": [
        {
          "id": "c3-1",
          "name": "Gói thầu XL-01: Mở rộng đoạn Km0 - Km10",
          "contractor": "Công ty CP Cầu đường Hưng Yên",
          "plannedProgress": 60,
          "actualProgress": 48,
          "status": "CHAM_TIEN_DO",
          "note": "Vướng mặt bằng"
        },
        {
          "id": "c3-2",
          "name": "Gói thầu XL-02: Cầu vượt sông và cống hộp",
          "contractor": "Công ty TNHH MTV Xây dựng số 1",
          "plannedProgress": 55,
          "actualProgress": 42,
          "status": "CHAM_TIEN_DO",
          "note": "Thiếu vật liệu"
        }
      ],
      "constructionStatus": "CHAM_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "THI_CONG_XAY_DUNG",
      "delayedStageLabel": "Thi công xây dựng & Nguồn vật liệu",
      "bottleneckLocation": "Gói thầu XL-01 đoạn qua Xã Yên Mỹ và vị trí mố cầu số 2 tại Xã Khoái Châu",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
      "cooperatingDepartments": [
        "UBND Xã Yên Mỹ",
        "UBND Xã Khoái Châu",
        "Sở Xây dựng",
        "Sở Nông nghiệp và Môi trường"
      ],
      "detailedDifficulties": "Nhà thầu thiếu hụt nghiêm trọng cát đắp nền k95/k98 do các mỏ hạn chế công suất; 42 hộ dân mặt tiền Xã Yên Mỹ chưa bàn giao mặt bằng; đường ống nước D400 vướng tim đường chưa di dời.",
      "proposalsAndRecommendations": "Đề nghị UBND tỉnh xem xét cấp phép khai thác tạm các mỏ cát trên sông Hồng phục vụ công trình trọng điểm; yêu cầu UBND Xã Yên Mỹ dứt điểm giải phóng mặt bằng trong tháng 11/2026; xử phạt nhà thầu thi công không tập trung thiết bị.",
      "expediteHistory": [
        {
          "id": "exp-3-1",
          "date": "2026-08-20",
          "action": "Thông báo kết luận số 145/TB-UBND",
          "signer": "Chủ tịch UBND tỉnh",
          "content": "Yêu cầu tháo gỡ điểm nghẽn vật liệu cát san lấp, đảm bảo tiến độ thông xe.",
          "feedbackDeadline": "2026-10-30"
        }
      ]
    },
    "unresolvedIssues": "Chậm thi công do thiếu cát đắp nền; 42 hộ dân Xã Yên Mỹ chưa bàn giao mặt bằng; vướng di dời ống nước D400."
  },
  {
    "id": "proj-4",
    "code": "DA-GT-04",
    "name": "Dự án xây dựng cầu vượt sông Hồng nối Phường Phố Hiến với tỉnh Hà Nam",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Phường Phố Hiến, Phường Hồng Châu",
    "totalInvestment": 3850,
    "disbursedAmount": 420,
    "progress": 18,
    "status": "CHUAN_BI_DAU_TU",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2025-01-15",
    "finishDate": "2028-12-31",
    "landArea": 68,
    "landClearanceProgress": 20,
    "landClearanceArea": "13.6 ha / 68 ha",
    "landClearanceNote": "Đang cắm mốc tim tuyến và ranh giới hành lang bảo vệ đê điều.",
    "bottlenecks": [
      "Thẩm định thỏa thuận tĩnh không thông thuyền với Cục Đường thủy nội địa Việt Nam",
      "Thủ tục phê duyệt báo cáo đánh giá tác động môi trường (ĐTM) tại Sở Nông nghiệp và Môi trường"
    ],
    "milestones": [
      {
        "name": "Chấp thuận chủ trương đầu tư",
        "date": "2024-08-25",
        "status": "HOAN_THANH"
      },
      {
        "name": "Phê duyệt Báo cáo NCKT",
        "date": "2025-06-30",
        "status": "DANG_LAM"
      },
      {
        "name": "Khởi công xây dựng trụ cầu",
        "date": "2026-03-30",
        "status": "CHUA_DEN"
      }
    ],
    "legalDocs": [
      "Nghị quyết HĐND tỉnh số 45/2024/NQ-HĐND"
    ],
    "coordinates": [
      20.65,
      106.05
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "45/2024/NQ-HĐND",
      "policyDecisionDate": "2024-08-25",
      "currentStep": "Lập Báo cáo nghiên cứu khả thi, lấy ý kiến thỏa thuận đê điều và thoát lũ sông Hồng",
      "procedureStatus": "DANG_THUC_HIEN",
      "procedures": [
        {
          "id": "p4-1",
          "order": 1,
          "name": "Thủ tục 1: Chấp thuận chủ trương đầu tư công",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "30/08/2024",
          "completedDate": "25/08/2024",
          "taskCount": 2,
          "updatedTaskCount": 2,
          "completedTaskCount": 2,
          "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
          "coDepts": [
            "Sở Tài chính"
          ],
          "directDocsCount": 1,
          "tasks": [
            {
              "id": "tp4-1",
              "name": "Trình HĐND tỉnh quyết định chủ trương đầu tư",
              "deadline": "15/08/2024",
              "completedDate": "12/08/2024",
              "status": "HOAN_THANH",
              "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
              "coDepts": [
                "Sở Tài chính"
              ]
            },
            {
              "id": "tp4-2",
              "name": "Ban hành Quyết định giao nhiệm vụ chủ đầu tư",
              "deadline": "30/08/2024",
              "completedDate": "25/08/2024",
              "status": "HOAN_THANH",
              "leadDept": "Văn phòng UBND tỉnh",
              "coDepts": [
                "Sở Nội vụ"
              ]
            }
          ]
        },
        {
          "id": "p4-2",
          "order": 2,
          "name": "Thủ tục 2: Khảo sát địa hình, thủy văn và lập BCNCKT",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "15/12/2025",
          "completedDate": "10/11/2025",
          "taskCount": 3,
          "updatedTaskCount": 3,
          "completedTaskCount": 3,
          "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
          "coDepts": [
            "Sở Xây dựng"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "tp4-3",
              "name": "Khảo sát địa chất thủy văn lòng sông Hồng",
              "deadline": "15/06/2025",
              "completedDate": "10/06/2025",
              "status": "HOAN_THANH",
              "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "tp4-4",
              "name": "Thỏa thuận tĩnh không cầu vượt sông với Cục Đường thủy nội địa",
              "deadline": "30/09/2025",
              "completedDate": "25/09/2025",
              "status": "HOAN_THANH",
              "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "tp4-5",
              "name": "Lập Báo cáo nghiên cứu khả thi dự án",
              "deadline": "15/12/2025",
              "completedDate": "10/11/2025",
              "status": "HOAN_THANH",
              "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        },
        {
          "id": "p4-3",
          "order": 3,
          "name": "Thủ tục 3: Thẩm định ĐTM và thỏa thuận thoát lũ đê điều",
          "status": "CHAM_TIEN_DO",
          "statusLabel": "Chậm tiến độ",
          "deadline": "30/04/2026",
          "taskCount": 2,
          "updatedTaskCount": 1,
          "completedTaskCount": 0,
          "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
          "coDepts": [
            "Sở Nông nghiệp và Môi trường"
          ],
          "directDocsCount": 2,
          "tasks": [
            {
              "id": "tp4-6",
              "name": "Lập hồ sơ thỏa thuận đê điều với Bộ Nông nghiệp & PTNT",
              "deadline": "30/01/2026",
              "status": "CHAM_TIEN_DO",
              "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
              "coDepts": [
                "Sở Nông nghiệp và Môi trường"
              ]
            },
            {
              "id": "tp4-7",
              "name": "Thẩm định và phê duyệt Báo cáo ĐTM",
              "deadline": "30/04/2026",
              "status": "CON_HAN",
              "leadDept": "Sở Nông nghiệp và Môi trường",
              "coDepts": [
                "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh"
              ]
            }
          ]
        },
        {
          "id": "p4-4",
          "order": 4,
          "name": "Thủ tục 4: Khảo sát bồi thường giải phóng mặt bằng",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "31/10/2026",
          "taskCount": 3,
          "updatedTaskCount": 1,
          "completedTaskCount": 0,
          "leadDept": "UBND Phường Phố Hiến",
          "coDepts": [
            "Sở Nông nghiệp và Môi trường",
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "tp4-8",
              "name": "Thông báo thu hồi đất hai đầu cầu dẫn",
              "deadline": "15/05/2026",
              "status": "CON_HAN",
              "leadDept": "UBND Phường Phố Hiến",
              "coDepts": [
                "Sở Nông nghiệp và Môi trường"
              ]
            },
            {
              "id": "tp4-9",
              "name": "Điều tra kiểm đếm đất đai tài sản trên đất",
              "deadline": "30/08/2026",
              "status": "CON_HAN",
              "leadDept": "UBND Phường Phố Hiến",
              "coDepts": [
                "Sở Nông nghiệp và Môi trường"
              ]
            },
            {
              "id": "tp4-10",
              "name": "Phê duyệt phương án bồi thường hỗ trợ tái định cư",
              "deadline": "31/10/2026",
              "status": "CON_HAN",
              "leadDept": "UBND Phường Phố Hiến",
              "coDepts": [
                "Sở Tài chính"
              ]
            }
          ]
        },
        {
          "id": "p4-5",
          "order": 5,
          "name": "Thủ tục 5: Thẩm định thiết kế bản vẽ thi công và đấu thầu",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "31/12/2026",
          "taskCount": 3,
          "updatedTaskCount": 0,
          "completedTaskCount": 0,
          "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
          "coDepts": [
            "Sở Xây dựng"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "tp4-11",
              "name": "Thẩm định thiết kế kỹ thuật / BVTC",
              "deadline": "15/10/2026",
              "status": "CON_HAN",
              "leadDept": "Sở Xây dựng",
              "coDepts": [
                "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh"
              ]
            },
            {
              "id": "tp4-12",
              "name": "Lập hồ sơ mời thầu xây lắp",
              "deadline": "15/11/2026",
              "status": "CON_HAN",
              "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
              "coDepts": [
                "Sở Tài chính"
              ]
            },
            {
              "id": "tp4-13",
              "name": "Phê duyệt kết quả lựa chọn nhà thầu",
              "deadline": "31/12/2026",
              "status": "CON_HAN",
              "leadDept": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        }
      ]
    },
    "landClearanceStage": {
      "totalArea": 68,
      "surveyedArea": 68,
      "surveyedPercent": 100,
      "handedOverArea": 13.6,
      "handedOverPercent": 20,
      "totalPlots": 720,
      "surveyedPlots": 720,
      "handedOverPlots": 144,
      "compensationPlan": {
        "totalCompensationAmount": 450,
        "paidAmount": 90,
        "paidPercent": 20,
        "totalHouseholds": 280,
        "paidHouseholds": 65,
        "unresolvedHouseholds": 215,
        "resettlementArrangement": "Khu tái định cư Phường Phố Hiến đang lập quy hoạch chi tiết 1/500."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang cắm mốc chỉ giới hành lang đê điều."
    },
    "constructionStage": {
      "constructionProgress": 0,
      "constructionPlanNotes": "Chưa triển khai thi công, đang hoàn thiện thủ tục đầu tư.",
      "items": [],
      "constructionStatus": "CHUA_KHOI_CONG"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "NGUY_CO_CHAM",
      "delayedStage": "THU_TUC_DAU_TU",
      "delayedStageLabel": "Thủ tục thỏa thuận đê điều & ĐTM",
      "bottleneckLocation": "Vướng hồ sơ thỏa thuận ảnh hưởng dòng chảy và thoát lũ sông Hồng tại Sở Nông nghiệp và Môi trường",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
      "cooperatingDepartments": [
        "Sở Nông nghiệp và Môi trường",
        "Sở Xây dựng",
        "UBND Phường Phố Hiến",
        "Cục Quản lý Đê điều"
      ],
      "detailedDifficulties": "Hồ sơ thỏa thuận thoát lũ qua cầu vượt sông Hồng cần xin ý kiến nhiều cơ quan trung ương; tiến độ thẩm định báo cáo ĐTM tại Sở Nông nghiệp và Môi trường có nguy cơ chậm hơn 30 ngày.",
      "proposalsAndRecommendations": "Đề nghị Sở Nông nghiệp và Môi trường bố trí cán bộ chuyên trách hỗ trợ chủ đầu tư hoàn thiện hồ sơ đê điều; tham mưu UBND tỉnh có văn bản gửi Bộ Nông nghiệp & PTNT xin ý kiến thống nhất trong tháng 11/2026.",
      "expediteHistory": [
        {
          "id": "exp-4-1",
          "date": "2026-09-28",
          "action": "Phiếu đôn đốc số 88/PĐĐ-VP",
          "signer": "Chánh Văn phòng UBND tỉnh",
          "content": "Đôn đốc Sở Nông nghiệp và Môi trường khẩn trương có ý kiến thẩm định ĐTM.",
          "feedbackDeadline": "2026-10-20"
        }
      ]
    },
    "unresolvedIssues": "Vướng thỏa thuận đê điều và thoát lũ sông Hồng; chậm thẩm định báo cáo ĐTM tại Sở Nông nghiệp và Môi trường."
  },
  {
    "id": "proj-5",
    "code": "DA-DD-01",
    "name": "Dự án xây dựng Trường THPT Chuyên tỉnh Hưng Yên cơ sở mới",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Giáo dục và Đào tạo",
    "district": "Phường Phố Hiến",
    "totalInvestment": 615,
    "disbursedAmount": 615,
    "progress": 100,
    "status": "HOAN_THANH",
    "currentStage": "HOAN_THANH",
    "startDate": "2022-09-05",
    "finishDate": "2025-08-20",
    "landArea": 12.5,
    "landClearanceProgress": 100,
    "landClearanceArea": "12.5 ha / 12.5 ha",
    "landClearanceNote": "100% mặt bằng sạch đã bàn giao từ năm 2022.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công xây dựng",
        "date": "2022-09-05",
        "status": "HOAN_THANH"
      },
      {
        "name": "Cất nóc khối nhà lớp học",
        "date": "2023-11-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Nghiệm thu khánh thành",
        "date": "2025-08-20",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 650/QĐ-UBND"
    ],
    "coordinates": [
      20.665,
      106.062
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "650/QĐ-UBND",
      "policyDecisionDate": "2021-12-10",
      "currentStep": "Đã hoàn thành quyết toán và bàn giao cho Sở GD&ĐT đưa vào giảng dạy",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 12.5,
      "surveyedArea": 12.5,
      "surveyedPercent": 100,
      "handedOverArea": 12.5,
      "handedOverPercent": 100,
      "totalPlots": 120,
      "surveyedPlots": 120,
      "handedOverPlots": 120,
      "compensationPlan": {
        "totalCompensationAmount": 95,
        "paidAmount": 95,
        "paidPercent": 100,
        "totalHouseholds": 65,
        "paidHouseholds": 65,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "100% hoàn thành tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Không có vướng mắc."
    },
    "constructionStage": {
      "constructionProgress": 100,
      "constructionPlanNotes": "Đã hoàn thành 100% các hạng mục và bàn giao đưa vào sử dụng từ năm học 2025-2026.",
      "items": [
        {
          "id": "c5-1",
          "name": "Khối nhà lớp học 5 tầng và nhà đa năng",
          "contractor": "Công ty CP Đầu tư Xây dựng HUD",
          "plannedProgress": 100,
          "actualProgress": 100,
          "status": "HOAN_THANH"
        }
      ],
      "constructionStatus": "HOAN_THANH"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Hoàn thành",
      "bottleneckLocation": "Đã vận hành",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Giáo dục và Đào tạo",
        "UBND Phường Phố Hiến"
      ],
      "detailedDifficulties": "Công trình đã hoàn thành xuất sắc, đạt chuẩn quốc gia mức độ 2.",
      "proposalsAndRecommendations": "Thực hiện tốt công tác bảo hành, bảo trì công trình.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Công trình đã hoàn thành bàn giao; hoạt động ổn định"
  },
  {
    "id": "proj-6",
    "code": "DA-GT-05",
    "name": "Dự án đường gom cao tốc Hà Nội - Hải Phòng (đoạn qua Xã Lạc Đạo và Xã Đình Dù)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Lạc Đạo, Xã Đình Dù",
    "totalInvestment": 1450,
    "disbursedAmount": 780,
    "progress": 54,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2024-01-10",
    "finishDate": "2027-06-30",
    "landArea": 62,
    "landClearanceProgress": 68,
    "landClearanceArea": "42.1 ha / 62 ha",
    "landClearanceNote": "Vướng mắc 36 thửa đất nông nghiệp giao khoán tại Xã Lạc Đạo có tranh chấp ranh giới.",
    "bottlenecks": [
      "Tranh chấp nguồn gốc đất nông nghiệp Nghị định 64 tại Xã Lạc Đạo",
      "Chậm xác minh diện tích đất công ích xen kẹt"
    ],
    "milestones": [
      {
        "name": "Khởi công phân đoạn 1",
        "date": "2024-03-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao 100% mặt bằng",
        "date": "2025-06-30",
        "status": "CHAM"
      }
    ],
    "legalDocs": [
      "Quyết định số 412/QĐ-UBND"
    ],
    "coordinates": [
      20.98,
      106.01
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "412/QĐ-UBND",
      "policyDecisionDate": "2023-08-15",
      "currentStep": "Bồi thường GPMB song song với thi công phân đoạn đã sạch",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 62,
      "surveyedArea": 62,
      "surveyedPercent": 100,
      "handedOverArea": 42.1,
      "handedOverPercent": 68,
      "totalPlots": 950,
      "surveyedPlots": 950,
      "handedOverPlots": 646,
      "compensationPlan": {
        "totalCompensationAmount": 380,
        "paidAmount": 265,
        "paidPercent": 69.7,
        "totalHouseholds": 340,
        "paidHouseholds": 284,
        "unresolvedHouseholds": 56,
        "resettlementArrangement": "Không có di dời nhà ở lớn, chủ yếu đền bù đất lúa."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "56 hộ tại Xã Lạc Đạo chưa nhận tiền bồi thường do tranh chấp ranh giới thửa đất."
    },
    "constructionStage": {
      "constructionProgress": 48,
      "constructionPlanNotes": "Thi công ngắt quãng theo từng đoạn mặt bằng được bàn giao.",
      "items": [
        {
          "id": "c6-1",
          "name": "Gói thầu đường gom Km12 - Km18",
          "contractor": "Công ty XD Hưng Thịnh",
          "plannedProgress": 65,
          "actualProgress": 48,
          "status": "CHAM_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Giải phóng mặt bằng đất nông nghiệp",
      "bottleneckLocation": "Khu vực đất nông nghiệp giáp ranh ga Lạc Đạo tại Xã Lạc Đạo",
      "leadDepartment": "UBND Xã Lạc Đạo",
      "cooperatingDepartments": [
        "Sở Nông nghiệp và Môi trường",
        "Sở Tài chính",
        "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
        "UBND Xã Đình Dù"
      ],
      "detailedDifficulties": "56 hộ dân Xã Lạc Đạo có tranh chấp mốc giới thửa đất theo bản đồ địa chính cũ; việc xác minh nguồn gốc đất lúa công ích xen kẹt kéo dài hơn 2 tháng chưa có biên bản chốt.",
      "proposalsAndRecommendations": "Đề nghị UBND Xã Lạc Đạo chủ trì phối hợp Sở Nông nghiệp và Môi trường lập tổ công tác đo đạc lại hiện trạng; tổ chức đối thoại công khai với các hộ dân trước ngày 15/11/2026.",
      "expediteHistory": [
        {
          "id": "exp-6-1",
          "date": "2026-09-10",
          "action": "Công văn số 310/UBND-TNMT",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Yêu cầu UBND Xã Lạc Đạo dứt điểm xác minh nguồn gốc đất trước ngày 30/10/2026.",
          "feedbackDeadline": "2026-10-30"
        }
      ]
    },
    "unresolvedIssues": "Vướng 56 hộ tranh chấp nguồn gốc đất nông nghiệp tại Xã Lạc Đạo; mặt bằng bàn giao ngắt quãng."
  },
  {
    "id": "proj-7",
    "code": "DA-DD-02",
    "name": "Dự án xây dựng Trung tâm Y tế chuyên sâu và Bệnh viện Phổi tỉnh Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Y tế",
    "district": "Phường Phố Hiến",
    "totalInvestment": 890,
    "disbursedAmount": 650,
    "progress": 78,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-05-18",
    "finishDate": "2026-12-30",
    "landArea": 8.5,
    "landClearanceProgress": 100,
    "landClearanceArea": "8.5 ha / 8.5 ha",
    "landClearanceNote": "Đã hoàn thành 100% GPMB sạch.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Cất nóc tòa nhà khám chữa bệnh 7 tầng",
        "date": "2024-12-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thiện hệ thống điều hòa khí sạch áp lực âm",
        "date": "2026-04-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "Quyết định số 225/QĐ-UBND"
    ],
    "coordinates": [
      20.672,
      106.058
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "225/QĐ-UBND",
      "policyDecisionDate": "2022-08-10",
      "currentStep": "Thi công hoàn thiện nội thất và lắp đặt hệ thống cơ điện M&E",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 8.5,
      "surveyedArea": 8.5,
      "surveyedPercent": 100,
      "handedOverArea": 8.5,
      "handedOverPercent": 100,
      "totalPlots": 65,
      "surveyedPlots": 65,
      "handedOverPlots": 65,
      "compensationPlan": {
        "totalCompensationAmount": 60,
        "paidAmount": 60,
        "paidPercent": 100,
        "totalHouseholds": 42,
        "paidHouseholds": 42,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Hoàn thành 100%."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Mặt bằng sạch thông suốt."
    },
    "constructionStage": {
      "constructionProgress": 78,
      "constructionPlanNotes": "Đang thi công trần vách thạch cao, ốp lát gạch và lắp trạm biến áp chuyên dùng.",
      "items": [
        {
          "id": "c7-1",
          "name": "Xây lắp khối nhà chính và hệ thống kỹ thuật",
          "contractor": "Công ty CP Đầu tư Lạc Hồng",
          "plannedProgress": 75,
          "actualProgress": 78,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Y tế",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Công trình bám sát tiến độ cam kết.",
      "proposalsAndRecommendations": "Đẩy nhanh thủ tục mua sắm thiết bị y tế đồng bộ khi tòa nhà hoàn thành.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Không có vướng mắc; đảm bảo tiến độ bàn giao cuối năm 2026"
  },
  {
    "id": "proj-8",
    "code": "DA-NN-01",
    "name": "Dự án cải tạo, nâng cấp hệ thống thủy lợi sông Điện Biên bảo vệ đê kè cấp bách",
    "sector": "NONG_NGHIEP",
    "capitalSource": "NSNN",
    "investor": "Sở Nông nghiệp và Môi trường",
    "managingDept": "Sở Nông nghiệp và Môi trường",
    "district": "Xã Khoái Châu, Xã Kim Động",
    "totalInvestment": 750,
    "disbursedAmount": 180,
    "progress": 25,
    "status": "CHUAN_BI_DAU_TU",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2025-02-01",
    "finishDate": "2027-12-31",
    "landArea": 35,
    "landClearanceProgress": 30,
    "landClearanceArea": "10.5 ha / 35 ha",
    "landClearanceNote": "Đang kiểm kê ranh giới bờ kênh và các cống tưới tiêu.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Phê duyệt chủ trương đầu tư",
        "date": "2024-11-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Khảo sát lập thiết kế BVTC",
        "date": "2025-06-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "Nghị quyết HĐND tỉnh số 82/NQ-HĐND"
    ],
    "coordinates": [
      20.76,
      106.02
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "82/NQ-HĐND",
      "policyDecisionDate": "2024-11-15",
      "currentStep": "Thẩm định hồ sơ Báo cáo nghiên cứu khả thi và thỏa thuận bảo vệ đê cấp III",
      "procedureStatus": "DANG_THUC_HIEN"
    },
    "landClearanceStage": {
      "totalArea": 35,
      "surveyedArea": 35,
      "surveyedPercent": 100,
      "handedOverArea": 10.5,
      "handedOverPercent": 30,
      "totalPlots": 450,
      "surveyedPlots": 450,
      "handedOverPlots": 135,
      "compensationPlan": {
        "totalCompensationAmount": 120,
        "paidAmount": 40,
        "paidPercent": 33.3,
        "totalHouseholds": 180,
        "paidHouseholds": 70,
        "unresolvedHouseholds": 110,
        "resettlementArrangement": "Không vướng tái định cư nhà ở."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang lập phương án bồi thường cây cối hoa màu ven bờ kè."
    },
    "constructionStage": {
      "constructionProgress": 0,
      "constructionPlanNotes": "Chưa khởi công thi công.",
      "items": [],
      "constructionStatus": "CHUA_KHOI_CONG"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Sở Nông nghiệp và Môi trường",
      "cooperatingDepartments": [
        "Sở Tài chính",
        "UBND Xã Khoái Châu",
        "UBND Xã Kim Động"
      ],
      "detailedDifficulties": "Hồ sơ thủ tục tuân thủ đúng quy trình đầu tư công.",
      "proposalsAndRecommendations": "Khẩn trương phê duyệt thiết kế để kịp khởi công trước mùa mưa lũ 2026.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Thủ tục đầu tư đang triển khai đúng kế hoạch"
  },
  {
    "id": "proj-9",
    "code": "DA-GT-06",
    "name": "Dự án xây dựng cầu vượt đường sắt và đường dẫn nối ĐT.382 với QL.5 (Xã Lạc Đạo)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Lạc Đạo",
    "totalInvestment": 1120,
    "disbursedAmount": 510,
    "progress": 46,
    "status": "CHAM_TIEN_DO",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-12-01",
    "finishDate": "2026-11-30",
    "landArea": 28,
    "landClearanceProgress": 75,
    "landClearanceArea": "21 ha / 28 ha",
    "landClearanceNote": "Còn vướng 2 vị trí mố cầu phía Bắc đường sắt Hà Nội - Hải Phòng.",
    "bottlenecks": [
      "Thỏa thuận phong tỏa chạy tàu để lao lắp dầm cầu vượt đường sắt",
      "Chậm di dời đường cáp thông tin tín hiệu đường sắt"
    ],
    "milestones": [
      {
        "name": "Khởi công cọc khoan nhồi",
        "date": "2024-02-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Lao dầm nhịp chính qua đường sắt",
        "date": "2025-08-30",
        "status": "CHAM"
      }
    ],
    "legalDocs": [
      "Quyết định số 718/QĐ-UBND"
    ],
    "coordinates": [
      20.975,
      106.03
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "718/QĐ-UBND",
      "policyDecisionDate": "2023-05-20",
      "currentStep": "Thi công cọc khoan nhồi và kết cấu phần dưới cầu vượt",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 28,
      "surveyedArea": 28,
      "surveyedPercent": 100,
      "handedOverArea": 21,
      "handedOverPercent": 75,
      "totalPlots": 310,
      "surveyedPlots": 310,
      "handedOverPlots": 232,
      "compensationPlan": {
        "totalCompensationAmount": 210,
        "paidAmount": 165,
        "paidPercent": 78.5,
        "totalHouseholds": 145,
        "paidHouseholds": 122,
        "unresolvedHouseholds": 23,
        "resettlementArrangement": "Khu tái định cư Xã Lạc Đạo đang bố trí giao đất cho 23 hộ."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "23 hộ chưa nhận đất tái định cư nên chưa bàn giao mặt bằng thi công mố phía Bắc."
    },
    "constructionStage": {
      "constructionProgress": 42,
      "constructionPlanNotes": "Đã hoàn thành mố phía Nam, đang chờ mặt bằng mố phía Bắc.",
      "items": [
        {
          "id": "c9-1",
          "name": "Thi công móng mố trụ và lao lắp dầm Super T",
          "contractor": "Công ty CP Xây dựng Cầu 75",
          "plannedProgress": 60,
          "actualProgress": 42,
          "status": "CHAM_TIEN_DO"
        }
      ],
      "constructionStatus": "CHAM_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "THI_CONG_XAY_DUNG",
      "delayedStageLabel": "Thi công mố cầu & Thỏa thuận đường sắt",
      "bottleneckLocation": "Vị trí mố cầu phía Bắc đường sắt tại Xã Lạc Đạo",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
      "cooperatingDepartments": [
        "UBND Xã Lạc Đạo",
        "Sở Xây dựng",
        "Tổng công ty Đường sắt Việt Nam"
      ],
      "detailedDifficulties": "Chưa thống nhất được biểu đồ chạy tàu để cấp phép phong tỏa đường sắt lao dầm cầu; 23 hộ dân phía Bắc chưa nhận đất tái định cư.",
      "proposalsAndRecommendations": "Đề nghị UBND tỉnh làm việc với Bộ Giao thông Vận tải và Tổng công ty Đường sắt Việt Nam để thống nhất lịch phong tỏa thi công; chỉ đạo UBND Xã Lạc Đạo giao đất tái định cư trước ngày 20/11/2026.",
      "expediteHistory": [
        {
          "id": "exp-9-1",
          "date": "2026-09-05",
          "action": "Công văn số 425/UBND-GT",
          "signer": "Chủ tịch UBND tỉnh",
          "content": "Yêu cầu xử lý dứt điểm điểm nghẽn đường sắt tại Xã Lạc Đạo.",
          "feedbackDeadline": "2026-11-15"
        }
      ]
    },
    "unresolvedIssues": "Vướng mặt bằng mố cầu phía Bắc (23 hộ dân Xã Lạc Đạo); chưa cấp phép phong tỏa đường sắt lao dầm."
  },
  {
    "id": "proj-10",
    "code": "DA-NN-02",
    "name": "Dự án kiên cố hóa kênh tưới tiêu liên xã phục vụ vùng chuyên canh cây ăn quả Xã Khoái Châu",
    "sector": "NONG_NGHIEP",
    "capitalSource": "NSNN",
    "investor": "Sở Nông nghiệp và Môi trường",
    "managingDept": "Sở Nông nghiệp và Môi trường",
    "district": "Xã Khoái Châu, Xã Dân Tiến",
    "totalInvestment": 380,
    "disbursedAmount": 380,
    "progress": 100,
    "status": "HOAN_THANH",
    "currentStage": "HOAN_THANH",
    "startDate": "2023-10-15",
    "finishDate": "2025-11-30",
    "landArea": 18,
    "landClearanceProgress": 100,
    "landClearanceArea": "18 ha / 18 ha",
    "landClearanceNote": "100% người dân tự nguyện hiến đất làm kênh mương.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công xây dựng",
        "date": "2023-10-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Nghiệm thu đưa vào tưới tiêu",
        "date": "2025-11-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 512/QĐ-UBND"
    ],
    "coordinates": [
      20.79,
      106.01
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "512/QĐ-UBND",
      "policyDecisionDate": "2023-04-10",
      "currentStep": "Đã hoàn thành quyết toán và bàn giao cho Công ty TNHH MTV Khai thác CTTL quản lý",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 18,
      "surveyedArea": 18,
      "surveyedPercent": 100,
      "handedOverArea": 18,
      "handedOverPercent": 100,
      "totalPlots": 260,
      "surveyedPlots": 260,
      "handedOverPlots": 260,
      "compensationPlan": {
        "totalCompensationAmount": 35,
        "paidAmount": 35,
        "paidPercent": 100,
        "totalHouseholds": 190,
        "paidHouseholds": 190,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Không có tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất 100%."
    },
    "constructionStage": {
      "constructionProgress": 100,
      "constructionPlanNotes": "Đã hoàn thành bàn giao đưa vào phục vụ vụ tưới tiêu đông xuân.",
      "items": [
        {
          "id": "c10-1",
          "name": "Kiên cố hóa 22km kênh bê tông đúc sẵn",
          "contractor": "Công ty CP Thủy lợi Hưng Yên",
          "plannedProgress": 100,
          "actualProgress": 100,
          "status": "HOAN_THANH"
        }
      ],
      "constructionStatus": "HOAN_THANH"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Hoàn thành",
      "bottleneckLocation": "Đã vận hành",
      "leadDepartment": "Sở Nông nghiệp và Môi trường",
      "cooperatingDepartments": [
        "UBND Xã Khoái Châu"
      ],
      "detailedDifficulties": "Công trình vận hành hiệu quả cao.",
      "proposalsAndRecommendations": "Bảo dưỡng định kỳ các cống đóng mở.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Công trình đã hoàn thành bàn giao; vận hành tốt"
  },
  {
    "id": "proj-11",
    "code": "DA-GT-07",
    "name": "Dự án xây dựng tuyến đường gom kết nối KCN Thăng Long II với QL.5 (Xã Yên Mỹ và Xã Liêu Xá)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Yên Mỹ, Xã Liêu Xá",
    "totalInvestment": 1680,
    "disbursedAmount": 890,
    "progress": 52,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2024-02-15",
    "finishDate": "2027-04-30",
    "landArea": 48,
    "landClearanceProgress": 65,
    "landClearanceArea": "31.2 ha / 48 ha",
    "landClearanceNote": "Còn vướng mắc 31 hộ dân thôn Liêu Hạ tại Xã Liêu Xá chưa nhận tiền bồi thường đất thổ cư.",
    "bottlenecks": [
      "31 hộ dân chưa đồng thuận về phương án giá đất cụ thể",
      "Vướng di dời hệ thống viễn thông ngầm"
    ],
    "milestones": [
      {
        "name": "Khởi công gói thầu 1",
        "date": "2024-05-10",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 310/QĐ-UBND"
    ],
    "coordinates": [
      20.89,
      106.02
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "310/QĐ-UBND",
      "policyDecisionDate": "2023-09-12",
      "currentStep": "Bồi thường GPMB phân đoạn qua Xã Liêu Xá",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 48,
      "surveyedArea": 48,
      "surveyedPercent": 100,
      "handedOverArea": 31.2,
      "handedOverPercent": 65,
      "totalPlots": 620,
      "surveyedPlots": 620,
      "handedOverPlots": 403,
      "compensationPlan": {
        "totalCompensationAmount": 420,
        "paidAmount": 275,
        "paidPercent": 65.5,
        "totalHouseholds": 280,
        "paidHouseholds": 249,
        "unresolvedHouseholds": 31,
        "resettlementArrangement": "Khu tái định cư Xã Liêu Xá đang thi công lu lèn mặt đường."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "31 hộ dân kiến nghị xem xét lại nguồn gốc đất ao vườn liền kề."
    },
    "constructionStage": {
      "constructionProgress": 45,
      "constructionPlanNotes": "Thi công đắp nền K95 đoạn đã sạch mặt bằng.",
      "items": [],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Giải phóng mặt bằng đất ở",
      "bottleneckLocation": "Khu dân cư thôn Liêu Hạ tại Xã Liêu Xá",
      "leadDepartment": "UBND Xã Liêu Xá",
      "cooperatingDepartments": [
        "Sở Nông nghiệp và Môi trường",
        "Sở Tài chính",
        "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
        "UBND Xã Yên Mỹ"
      ],
      "detailedDifficulties": "31 hộ dân thôn Liêu Hạ chưa nhất trí với phương án bồi thường đất vườn liền kề đất ở; chậm tiến độ xây dựng hạ tầng khu tái định cư Xã Liêu Xá.",
      "proposalsAndRecommendations": "Đề nghị UBND Xã Liêu Xá tổ chức rà soát hồ sơ địa chính, tham mưu phương án áp dụng chính sách hỗ trợ theo Luật Đất đai 2024; hoàn thành khu tái định cư trước 30/11/2026.",
      "expediteHistory": [
        {
          "id": "exp-11-1",
          "date": "2026-09-18",
          "action": "Công văn đôn đốc số 388/UBND-KT",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Chỉ đạo xử lý vướng mắc đất vườn tại Xã Liêu Xá.",
          "feedbackDeadline": "2026-11-10"
        }
      ]
    },
    "unresolvedIssues": "Vướng 31 hộ thôn Liêu Hạ tại Xã Liêu Xá chưa nhận bồi thường đất ở; chậm hạ tầng tái định cư."
  },
  {
    "id": "proj-12",
    "code": "DA-GT-08",
    "name": "Dự án nâng cấp, mở rộng đường ĐT.376 (đoạn qua Xã Khoái Châu và Xã Tân Dân)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Khoái Châu, Xã Dân Tiến",
    "totalInvestment": 980,
    "disbursedAmount": 760,
    "progress": 82,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-09-20",
    "finishDate": "2026-09-30",
    "landArea": 26,
    "landClearanceProgress": 98,
    "landClearanceArea": "25.5 ha / 26 ha",
    "landClearanceNote": "Đã bàn giao cơ bản toàn tuyến.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công",
        "date": "2023-09-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Thảm nhựa phân đoạn 1",
        "date": "2025-05-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 198/QĐ-UBND"
    ],
    "coordinates": [
      20.81,
      106
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "198/QĐ-UBND",
      "policyDecisionDate": "2023-03-15",
      "currentStep": "Thi công thảm bê tông nhựa hạt mịn và sơn vạch kẻ đường",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 26,
      "surveyedArea": 26,
      "surveyedPercent": 100,
      "handedOverArea": 25.5,
      "handedOverPercent": 98,
      "totalPlots": 380,
      "surveyedPlots": 380,
      "handedOverPlots": 372,
      "compensationPlan": {
        "totalCompensationAmount": 140,
        "paidAmount": 138,
        "paidPercent": 98.5,
        "totalHouseholds": 210,
        "paidHouseholds": 206,
        "unresolvedHouseholds": 4,
        "resettlementArrangement": "Không vướng."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 82,
      "constructionPlanNotes": "Đang thi công rãnh thoát nước và hệ thống an toàn giao thông.",
      "items": [
        {
          "id": "c12-1",
          "name": "Nâng cấp mặt đường ĐT.376",
          "contractor": "Công ty CP XD GT Hưng Yên",
          "plannedProgress": 80,
          "actualProgress": 82,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Thông suốt",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
      "cooperatingDepartments": [
        "UBND Xã Khoái Châu"
      ],
      "detailedDifficulties": "Thi công đạt chất lượng tốt.",
      "proposalsAndRecommendations": "Đảm bảo thông xe trước ngày 30/9/2026.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-13",
    "code": "DA-DD-03",
    "name": "Bệnh viện Đa khoa tỉnh Hưng Yên cơ sở mới quy mô 1.200 giường bệnh",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Y tế",
    "district": "Phường Phố Hiến",
    "totalInvestment": 2650,
    "disbursedAmount": 1980,
    "progress": 75,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-02-15",
    "finishDate": "2026-10-31",
    "landArea": 14.5,
    "landClearanceProgress": 100,
    "landClearanceArea": "14.5 ha / 14.5 ha",
    "landClearanceNote": "100% GPMB sạch bàn giao.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Cất nóc khối nhà cấp cứu và ngoại khoa",
        "date": "2024-10-25",
        "status": "HOAN_THANH"
      },
      {
        "name": "Lắp đặt hệ thống khí y tế trung tâm",
        "date": "2026-03-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "Quyết định số 102/QĐ-UBND"
    ],
    "coordinates": [
      20.67,
      106.06
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "102/QĐ-UBND",
      "policyDecisionDate": "2022-01-20",
      "currentStep": "Thi công hoàn thiện phòng mổ áp lực dương và các tầng nội trú",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 14.5,
      "surveyedArea": 14.5,
      "surveyedPercent": 100,
      "handedOverArea": 14.5,
      "handedOverPercent": 100,
      "totalPlots": 110,
      "surveyedPlots": 110,
      "handedOverPlots": 110,
      "compensationPlan": {
        "totalCompensationAmount": 115,
        "paidAmount": 115,
        "paidPercent": 100,
        "totalHouseholds": 75,
        "paidHouseholds": 75,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Mặt bằng sạch."
    },
    "constructionStage": {
      "constructionProgress": 75,
      "constructionPlanNotes": "Đang lắp đặt hệ thống cơ điện lạnh, máy chụp MRI, CT Scanner.",
      "items": [
        {
          "id": "c13-1",
          "name": "Xây dựng khối nhà trung tâm 9 tầng",
          "contractor": "Tổng công ty Xây dựng Hà Nội",
          "plannedProgress": 73,
          "actualProgress": 75,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Y tế",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Công trình thi công bám sát mốc tiến độ.",
      "proposalsAndRecommendations": "Tập trung hoàn thiện hồ sơ nghiệm thu phòng cháy chữa cháy.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Không có vướng mắc; đảm bảo khánh thành vào tháng 10/2026"
  },
  {
    "id": "proj-14",
    "code": "DA-DD-04",
    "name": "Dự án Khu liên hợp văn hóa, thể thao và bảo tàng tỉnh Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Văn hóa, Thể thao và Du lịch",
    "district": "Phường Phố Hiến",
    "totalInvestment": 1850,
    "disbursedAmount": 220,
    "progress": 15,
    "status": "CHUAN_BI_DAU_TU",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2025-03-01",
    "finishDate": "2028-10-30",
    "landArea": 45,
    "landClearanceProgress": 18,
    "landClearanceArea": "8.1 ha / 45 ha",
    "landClearanceNote": "Đang cắm mốc ranh giới quy hoạch 1/500.",
    "bottlenecks": [
      "Thiết kế kiến trúc phương án mái vòm sân vận động phải xin ý kiến chuyên gia",
      "Chậm hoàn thành thẩm định ĐTM tại Sở Nông nghiệp và Môi trường"
    ],
    "milestones": [
      {
        "name": "Chấp thuận chủ trương đầu tư",
        "date": "2024-09-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Nghị quyết HĐND số 66/NQ-HĐND"
    ],
    "coordinates": [
      20.662,
      106.055
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "66/NQ-HĐND",
      "policyDecisionDate": "2024-09-15",
      "currentStep": "Thi tuyển phương án kiến trúc nhà thi đấu và thẩm định ĐTM",
      "procedureStatus": "DANG_THUC_HIEN",
      "procedures": [
        {
          "id": "p14-1",
          "order": 1,
          "name": "Thủ tục 1: Chấp thuận chủ trương đầu tư",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "30/09/2024",
          "completedDate": "15/09/2024",
          "taskCount": 2,
          "updatedTaskCount": 2,
          "completedTaskCount": 2,
          "leadDept": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
          "coDepts": [
            "Sở Tài chính"
          ],
          "directDocsCount": 1,
          "tasks": []
        },
        {
          "id": "p14-2",
          "order": 2,
          "name": "Thủ tục 2: Lập và phê duyệt đồ án quy hoạch 1/500",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "15/05/2025",
          "completedDate": "10/04/2025",
          "taskCount": 3,
          "updatedTaskCount": 3,
          "completedTaskCount": 3,
          "leadDept": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
          "coDepts": [
            "Sở Xây dựng"
          ],
          "directDocsCount": 0,
          "tasks": []
        },
        {
          "id": "p14-3",
          "order": 3,
          "name": "Thủ tục 3: Thẩm định ĐTM và bảo vệ môi trường",
          "status": "CHAM_TIEN_DO",
          "statusLabel": "Chậm tiến độ",
          "deadline": "30/10/2025",
          "taskCount": 1,
          "updatedTaskCount": 1,
          "completedTaskCount": 0,
          "leadDept": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
          "coDepts": [
            "Sở Nông nghiệp và Môi trường"
          ],
          "directDocsCount": 2,
          "tasks": []
        }
      ]
    },
    "landClearanceStage": {
      "totalArea": 45,
      "surveyedArea": 45,
      "surveyedPercent": 100,
      "handedOverArea": 8.1,
      "handedOverPercent": 18,
      "totalPlots": 580,
      "surveyedPlots": 580,
      "handedOverPlots": 104,
      "compensationPlan": {
        "totalCompensationAmount": 320,
        "paidAmount": 60,
        "paidPercent": 18.7,
        "totalHouseholds": 240,
        "paidHouseholds": 45,
        "unresolvedHouseholds": 195,
        "resettlementArrangement": "Khu tái định cư đang lập dự án."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang kiểm kê ranh giới."
    },
    "constructionStage": {
      "constructionProgress": 0,
      "constructionPlanNotes": "Chưa khởi công thi công.",
      "items": [],
      "constructionStatus": "CHUA_KHOI_CONG"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "THU_TUC_DAU_TU",
      "delayedStageLabel": "Thủ tục thẩm định ĐTM & Kiến trúc",
      "bottleneckLocation": "Vướng khâu thẩm định ĐTM tại Sở Nông nghiệp và Môi trường và thẩm định kiến trúc mái vòm tại Sở Xây dựng",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Nông nghiệp và Môi trường",
        "Sở Xây dựng",
        "Sở Văn hóa, Thể thao và Du lịch",
        "UBND Phường Phố Hiến"
      ],
      "detailedDifficulties": "Hồ sơ đánh giá tác động môi trường xử lý nước thải sân vận động chưa đạt yêu cầu; việc thẩm định kết cấu giàn không gian mái vòm vượt khẩu độ cần thêm ý kiến chuyên gia Bộ Xây dựng.",
      "proposalsAndRecommendations": "Đề nghị Sở Nông nghiệp và Môi trường phối hợp chủ đầu tư hướng dẫn chỉnh sửa báo cáo ĐTM trong vòng 10 ngày; Sở Xây dựng thành lập hội đồng thẩm định kiến trúc độc lập.",
      "expediteHistory": [
        {
          "id": "exp-14-1",
          "date": "2026-09-22",
          "action": "Công văn số 195/UBND-VX",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Đôn đốc giải quyết vướng mắc thủ tục kiến trúc và ĐTM dự án Khu liên hợp thể thao.",
          "feedbackDeadline": "2026-11-05"
        }
      ]
    },
    "unresolvedIssues": "Chậm thẩm định báo cáo ĐTM tại Sở Nông nghiệp và Môi trường; chưa chốt phương án kết cấu giàn mái vòm."
  },
  {
    "id": "proj-15",
    "code": "DA-GT-09",
    "name": "Dự án xây dựng cầu Hải Hưng vượt sông Chanh nối Xã Ân Thi với Hải Dương",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Ân Thi",
    "totalInvestment": 1250,
    "disbursedAmount": 780,
    "progress": 66,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2024-03-01",
    "finishDate": "2026-12-31",
    "landArea": 22,
    "landClearanceProgress": 95,
    "landClearanceArea": "20.9 ha / 22 ha",
    "landClearanceNote": "Mặt bằng thông suốt.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công",
        "date": "2024-03-01",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 562/QĐ-UBND"
    ],
    "coordinates": [
      20.82,
      106.18
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "562/QĐ-UBND",
      "policyDecisionDate": "2023-10-18",
      "currentStep": "Thi công cọc khoan nhồi trụ T3 và T4 giữa lòng sông",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 22,
      "surveyedArea": 22,
      "surveyedPercent": 100,
      "handedOverArea": 20.9,
      "handedOverPercent": 95,
      "totalPlots": 280,
      "surveyedPlots": 280,
      "handedOverPlots": 266,
      "compensationPlan": {
        "totalCompensationAmount": 110,
        "paidAmount": 105,
        "paidPercent": 95.4,
        "totalHouseholds": 130,
        "paidHouseholds": 125,
        "unresolvedHouseholds": 5,
        "resettlementArrangement": "Hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Bàn giao cơ bản."
    },
    "constructionStage": {
      "constructionProgress": 66,
      "constructionPlanNotes": "Đang đổ bê tông bệ trụ tháp dây văng.",
      "items": [
        {
          "id": "c15-1",
          "name": "Thi công mố trụ cầu chính",
          "contractor": "Công ty CP Cầu 12",
          "plannedProgress": 65,
          "actualProgress": 66,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Thông suốt",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
      "cooperatingDepartments": [
        "UBND Xã Ân Thi",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Thi công đúng tiến độ.",
      "proposalsAndRecommendations": "Duy trì mũi thi công liên tục.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Đúng tiến độ thi công"
  },
  {
    "id": "proj-16",
    "code": "DA-NN-03",
    "name": "Dự án xử lý sạt lở đê tả sông Luộc cấp bách (đoạn qua Xã Tiên Lữ và Xã Hưng Hà)",
    "sector": "NONG_NGHIEP",
    "capitalSource": "NSNN",
    "investor": "Sở Nông nghiệp và Môi trường",
    "managingDept": "Sở Nông nghiệp và Môi trường",
    "district": "Xã Tiên Lữ, Xã Hưng Hà",
    "totalInvestment": 420,
    "disbursedAmount": 260,
    "progress": 62,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2024-06-15",
    "finishDate": "2026-06-30",
    "landArea": 15,
    "landClearanceProgress": 100,
    "landClearanceArea": "15 ha / 15 ha",
    "landClearanceNote": "100% mặt bằng đê điều sạch.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công",
        "date": "2024-06-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Lệnh khẩn cấp số 03/LKC-UBND"
    ],
    "coordinates": [
      20.62,
      106.15
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "03/LKC-UBND",
      "policyDecisionDate": "2024-05-10",
      "currentStep": "Thả đá rối hộ chân đê và lát tấm bê tông khung mái",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 15,
      "surveyedArea": 15,
      "surveyedPercent": 100,
      "handedOverArea": 15,
      "handedOverPercent": 100,
      "totalPlots": 180,
      "surveyedPlots": 180,
      "handedOverPlots": 180,
      "compensationPlan": {
        "totalCompensationAmount": 38,
        "paidAmount": 38,
        "paidPercent": 100,
        "totalHouseholds": 90,
        "paidHouseholds": 90,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Không có tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 62,
      "constructionPlanNotes": "Đang đóng cọc cừ tràm và thả đá hộc hộ chân.",
      "items": [
        {
          "id": "c16-1",
          "name": "Kè hộ chân đê tả sông Luộc",
          "contractor": "Công ty CP Thủy lợi 1",
          "plannedProgress": 60,
          "actualProgress": 62,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Sở Nông nghiệp và Môi trường",
      "cooperatingDepartments": [
        "UBND Xã Tiên Lữ",
        "UBND Xã Hưng Hà"
      ],
      "detailedDifficulties": "Công trình xử lý cấp bách chạy đua trước mùa lũ đạt kế hoạch.",
      "proposalsAndRecommendations": "Đảm bảo chất lượng vật liệu đá rọ hàn.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Đúng tiến độ kè đê cấp bách"
  },
  {
    "id": "proj-17",
    "code": "DA-DD-05",
    "name": "Dự án xây dựng Trung tâm Hành chính công và Chuyển đổi số tỉnh Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Nội vụ",
    "district": "Phường Phố Hiến",
    "totalInvestment": 850,
    "disbursedAmount": 480,
    "progress": 58,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2024-01-20",
    "finishDate": "2026-11-15",
    "landArea": 6.2,
    "landClearanceProgress": 100,
    "landClearanceArea": "6.2 ha / 6.2 ha",
    "landClearanceNote": "100% mặt bằng sạch.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công",
        "date": "2024-01-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Cất nóc tòa nhà 7 tầng",
        "date": "2025-05-18",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 480/QĐ-UBND"
    ],
    "coordinates": [
      20.668,
      106.059
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "480/QĐ-UBND",
      "policyDecisionDate": "2023-07-25",
      "currentStep": "Thi công hoàn thiện phòng máy chủ Data Center và hạ tầng mạng LAN/WAN",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 6.2,
      "surveyedArea": 6.2,
      "surveyedPercent": 100,
      "handedOverArea": 6.2,
      "handedOverPercent": 100,
      "totalPlots": 55,
      "surveyedPlots": 55,
      "handedOverPlots": 55,
      "compensationPlan": {
        "totalCompensationAmount": 45,
        "paidAmount": 45,
        "paidPercent": 100,
        "totalHouseholds": 30,
        "paidHouseholds": 30,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Mặt bằng sạch."
    },
    "constructionStage": {
      "constructionProgress": 58,
      "constructionPlanNotes": "Đang thi công trần chống tĩnh điện phòng máy chủ và vách ngăn quầy tiếp nhận một cửa.",
      "items": [
        {
          "id": "c17-1",
          "name": "Xây lắp tòa nhà và hạ tầng công nghệ",
          "contractor": "Công ty CP Tập đoàn Công nghệ VNPT",
          "plannedProgress": 55,
          "actualProgress": 58,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Nội vụ",
        "Sở Khoa học và Công nghệ",
        "UBND Phường Phố Hiến"
      ],
      "detailedDifficulties": "Công trình thi công bám sát kế hoạch chuyển đổi số.",
      "proposalsAndRecommendations": "Đẩy nhanh thử nghiệm phần mềm IOC và kho dữ liệu dùng chung.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Đúng tiến độ chuyển đổi số"
  },
  {
    "id": "proj-18",
    "code": "DA-GT-10",
    "name": "Dự án xây dựng cầu vượt sông Tranh kết nối Xã Phù Cừ với tỉnh Hải Dương",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Phù Cừ",
    "totalInvestment": 950,
    "disbursedAmount": 410,
    "progress": 43,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2024-04-10",
    "finishDate": "2027-02-28",
    "landArea": 19,
    "landClearanceProgress": 60,
    "landClearanceArea": "11.4 ha / 19 ha",
    "landClearanceNote": "Vướng 18 hộ dân có đầm nuôi thủy sản chưa thống nhất đơn giá hỗ trợ tài sản trên đất.",
    "bottlenecks": [
      "Xác định đơn giá bồi thường đầm nuôi rươi và ao cá tại Xã Phù Cừ"
    ],
    "milestones": [
      {
        "name": "Khởi công",
        "date": "2024-04-10",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 390/QĐ-UBND"
    ],
    "coordinates": [
      20.73,
      106.25
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "390/QĐ-UBND",
      "policyDecisionDate": "2023-11-10",
      "currentStep": "Kiểm kê bổ sung tài sản cây cối thủy sản và điều chỉnh phương án bồi thường",
      "procedureStatus": "DANG_THUC_HIEN"
    },
    "landClearanceStage": {
      "totalArea": 19,
      "surveyedArea": 19,
      "surveyedPercent": 100,
      "handedOverArea": 11.4,
      "handedOverPercent": 60,
      "totalPlots": 210,
      "surveyedPlots": 210,
      "handedOverPlots": 126,
      "compensationPlan": {
        "totalCompensationAmount": 115,
        "paidAmount": 68,
        "paidPercent": 59.1,
        "totalHouseholds": 95,
        "paidHouseholds": 77,
        "unresolvedHouseholds": 18,
        "resettlementArrangement": "Không có tái định cư nhà ở."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "18 hộ nuôi rươi chưa đồng ý đơn giá bồi thường của tỉnh."
    },
    "constructionStage": {
      "constructionProgress": 38,
      "constructionPlanNotes": "Thi công trụ cầu giữa sông, chờ mặt bằng đường dẫn đầu cầu.",
      "items": [],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Bồi thường đầm nuôi thủy sản",
      "bottleneckLocation": "Khu vực 18 đầm rươi ven đê tại Xã Phù Cừ",
      "leadDepartment": "UBND Xã Phù Cừ",
      "cooperatingDepartments": [
        "Sở Nông nghiệp và Môi trường",
        "Sở Tài chính",
        "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh"
      ],
      "detailedDifficulties": "18 hộ dân nuôi rươi và thủy sản tại Xã Phù Cừ kiến nghị đơn giá bồi thường hỗ trợ con giống thủy sản đặc sản chưa sát thực tế thị trường; biên bản kiểm kê tài sản phải đo đạc lại nhiều lần.",
      "proposalsAndRecommendations": "Đề nghị Sở Nông nghiệp và Môi trường phối hợp Sở Tài chính tham mưu UBND tỉnh ban hành đơn giá hỗ trợ đặc thù cho vùng nuôi rươi; yêu cầu UBND Xã Phù Cừ dứt điểm trong tháng 11/2026.",
      "expediteHistory": [
        {
          "id": "exp-18-1",
          "date": "2026-09-12",
          "action": "Công văn số 289/UBND-KT",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Tháo gỡ vướng mắc đền bù nuôi trồng thủy sản tại Xã Phù Cừ.",
          "feedbackDeadline": "2026-11-20"
        }
      ]
    },
    "unresolvedIssues": "Vướng 18 hộ nuôi rươi tại Xã Phù Cừ chưa nhận tiền đền bù; chậm bàn giao đường dẫn đầu cầu."
  },
  {
    "id": "proj-19",
    "code": "DA-DD-06",
    "name": "Dự án xây dựng Trung tâm Bảo trợ xã hội và Nuôi dưỡng người có công tỉnh Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Nội vụ",
    "district": "Xã Kim Động",
    "totalInvestment": 320,
    "disbursedAmount": 240,
    "progress": 75,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2024-02-20",
    "finishDate": "2026-08-30",
    "landArea": 5.5,
    "landClearanceProgress": 100,
    "landClearanceArea": "5.5 ha / 5.5 ha",
    "landClearanceNote": "100% mặt bằng sạch.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công",
        "date": "2024-02-20",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 118/QĐ-UBND"
    ],
    "coordinates": [
      20.74,
      106.07
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "118/QĐ-UBND",
      "policyDecisionDate": "2023-06-15",
      "currentStep": "Thi công hoàn thiện khối nhà dưỡng lão và khuôn viên cảnh quan",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 5.5,
      "surveyedArea": 5.5,
      "surveyedPercent": 100,
      "handedOverArea": 5.5,
      "handedOverPercent": 100,
      "totalPlots": 40,
      "surveyedPlots": 40,
      "handedOverPlots": 40,
      "compensationPlan": {
        "totalCompensationAmount": 25,
        "paidAmount": 25,
        "paidPercent": 100,
        "totalHouseholds": 28,
        "paidHouseholds": 28,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 75,
      "constructionPlanNotes": "Đang thi công sân vườn, đường dạo bộ và lắp thang máy chuyên dụng.",
      "items": [
        {
          "id": "c19-1",
          "name": "Xây dựng khối nhà điều dưỡng",
          "contractor": "Công ty CP Đầu tư XD Minh Anh",
          "plannedProgress": 72,
          "actualProgress": 75,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Nội vụ",
        "UBND Xã Kim Động"
      ],
      "detailedDifficulties": "Công trình thi công khang trang, chất lượng.",
      "proposalsAndRecommendations": "Chuẩn bị nhân sự tiếp nhận quản lý vận hành.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Đúng tiến độ"
  },
  {
    "id": "proj-20",
    "code": "DA-GT-11",
    "name": "Dự án kiên cố hóa đường gom hai bên đường cao tốc Hà Nội - Hải Phòng qua Xã Hoàn Long",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Hoàn Long",
    "totalInvestment": 560,
    "disbursedAmount": 560,
    "progress": 100,
    "status": "HOAN_THANH",
    "currentStage": "HOAN_THANH",
    "startDate": "2023-08-01",
    "finishDate": "2025-10-15",
    "landArea": 16,
    "landClearanceProgress": 100,
    "landClearanceArea": "16 ha / 16 ha",
    "landClearanceNote": "100% hoàn thành bàn giao.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Hoàn thành nghiệm thu",
        "date": "2025-10-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 688/QĐ-UBND"
    ],
    "coordinates": [
      20.93,
      105.99
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "688/QĐ-UBND",
      "policyDecisionDate": "2023-01-20",
      "currentStep": "Đã hoàn thành quyết toán và bàn giao cho Sở Xây dựng quản lý khai thác",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 16,
      "surveyedArea": 16,
      "surveyedPercent": 100,
      "handedOverArea": 16,
      "handedOverPercent": 100,
      "totalPlots": 190,
      "surveyedPlots": 190,
      "handedOverPlots": 190,
      "compensationPlan": {
        "totalCompensationAmount": 85,
        "paidAmount": 85,
        "paidPercent": 100,
        "totalHouseholds": 110,
        "paidHouseholds": 110,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 100,
      "constructionPlanNotes": "Đã nghiệm thu đưa vào lưu thông an toàn.",
      "items": [
        {
          "id": "c20-1",
          "name": "Đường gom bê tông nhựa",
          "contractor": "Công ty XD Hồng Hà",
          "plannedProgress": 100,
          "actualProgress": 100,
          "status": "HOAN_THANH"
        }
      ],
      "constructionStatus": "HOAN_THANH"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Hoàn thành",
      "bottleneckLocation": "Đã vận hành",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh",
      "cooperatingDepartments": [
        "UBND Xã Hoàn Long",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Công trình hoàn thành phục vụ giao thông thuận tiện.",
      "proposalsAndRecommendations": "Lắp đặt bổ sung biển báo giảm tốc tại các lối ra dân sinh.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Đã hoàn thành bàn giao đưa vào vận hành"
  },
  {
    "id": "proj-21",
    "code": "18.02.13.UB.01",
    "name": "Khu đô thị, thương mại dịch vụ, biệt thự sinh thái Nam Cầu Phủ",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần tập đoàn T&T",
    "managingDept": "Sở Xây dựng",
    "district": "Phường Phố Hiến, Xã Cẩm Xuyên",
    "totalInvestment": 3687,
    "disbursedAmount": 950,
    "progress": 35,
    "status": "CHAM_TIEN_DO",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2024-05-15",
    "finishDate": "2028-12-31",
    "landArea": 52.8,
    "landClearanceProgress": 42,
    "landClearanceArea": "22.2 ha / 52.8 ha",
    "landClearanceNote": "Đang vướng mắc hồ sơ thủ tục thu hồi đất, bồi thường hỗ trợ tái định cư.",
    "bottlenecks": [
      "Thủ tục Đất đai, GPMB, mặt bằng: Hoàn thành hồ sơ, thủ tục thu hồi đất, bồi thường, hỗ trợ, tái định cư/GPMB (nếu Nhà nước thu hồi đất)",
      "Đã hết hạn mốc công việc ngày 05/10/2026 chưa hoàn tất",
      "Thẩm định Báo cáo nghiên cứu khả thi hạng mục công trình trên đất tại Sở Xây dựng"
    ],
    "milestones": [
      {
        "name": "Chấp thuận chủ trương đầu tư",
        "date": "2024-05-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Phê duyệt quy hoạch chi tiết 1/500",
        "date": "2025-02-28",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thành thủ tục thu hồi đất và bồi thường GPMB",
        "date": "2026-10-05",
        "status": "CHAM"
      },
      {
        "name": "Khởi công xây dựng khu biệt thự ven sông",
        "date": "2027-03-30",
        "status": "CHUA_DEN"
      }
    ],
    "legalDocs": [
      "Quyết định số 18/QĐ-UBND tỉnh",
      "Giấy chứng nhận đăng ký đầu tư số 18.02.13.UB.01"
    ],
    "coordinates": [
      20.655,
      106.048
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "18/QĐ-UBND",
      "policyDecisionDate": "2024-05-15",
      "currentStep": "Lập Báo cáo nghiên cứu khả thi hạng mục công trình trên đất",
      "procedureStatus": "VUONG_MAC",
      "procedures": [
        {
          "id": "proc-tt-1",
          "order": 1,
          "name": "Thủ tục 1: Các thủ tục về đầu tư, doanh nghiệp, góp vốn",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "31/08/2027",
          "completedDate": "27/07/2026",
          "taskCount": 2,
          "updatedTaskCount": 2,
          "completedTaskCount": 2,
          "leadDept": "Công ty Cổ phần tập đoàn T&T",
          "coDepts": [
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "tt-t1",
              "name": "Chấp thuận chủ trương đầu tư và nhà đầu tư",
              "deadline": "15/06/2026",
              "completedDate": "10/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Tài chính"
              ]
            },
            {
              "id": "tt-t2",
              "name": "Thủ tục ký quỹ bảo đảm thực hiện dự án",
              "deadline": "31/08/2027",
              "completedDate": "27/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Tài chính"
              ]
            }
          ]
        },
        {
          "id": "proc-tt-2",
          "order": 2,
          "name": "Thủ tục 2: Quy hoạch, khảo sát, chuẩn bị dự án",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "15/06/2027",
          "completedDate": "11/07/2026",
          "taskCount": 5,
          "updatedTaskCount": 5,
          "completedTaskCount": 5,
          "leadDept": "Công ty Cổ phần tập đoàn T&T",
          "coDepts": [
            "Sở Xây dựng",
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "tt-t3",
              "name": "Khảo sát địa hình, địa chất công trình",
              "deadline": "10/04/2026",
              "completedDate": "08/04/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "tt-t4",
              "name": "Lập đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500",
              "deadline": "25/05/2026",
              "completedDate": "20/05/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "tt-t5",
              "name": "Lấy ý kiến cộng đồng dân cư nơi thực hiện dự án",
              "deadline": "15/06/2026",
              "completedDate": "12/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "UBND Phường Phố Hiến"
              ]
            },
            {
              "id": "tt-t6",
              "name": "Lập Báo cáo nghiên cứu khả thi hạng mục công trình trên đất",
              "deadline": "30/06/2026",
              "completedDate": "28/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "tt-t7",
              "name": "Thẩm định Báo cáo nghiên cứu khả thi đầu tư xây dựng",
              "deadline": "15/06/2027",
              "completedDate": "11/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        },
        {
          "id": "proc-tt-3",
          "order": 3,
          "name": "Thủ tục 3: Môi trường, rừng, tài nguyên",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "30/04/2027",
          "completedDate": "12/07/2026",
          "taskCount": 1,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Công ty Cổ phần tập đoàn T&T",
          "coDepts": [
            "Sở Nông nghiệp và Môi trường",
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "tt-t8",
              "name": "Thẩm định và phê duyệt Báo cáo ĐTM",
              "deadline": "30/04/2027",
              "completedDate": "12/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Nông nghiệp và Môi trường"
              ]
            }
          ]
        },
        {
          "id": "proc-tt-4",
          "order": 4,
          "name": "Thủ tục 4: Đất đai, GPMB, mặt bằng",
          "status": "CHAM_TIEN_DO",
          "statusLabel": "Chậm tiến độ",
          "deadline": "31/10/2027",
          "taskCount": 5,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Công ty Cổ phần tập đoàn T&T",
          "coDepts": [
            "Sở Nông nghiệp và Môi trường",
            "Sở Tài chính",
            "UBND Phường Phố Hiến",
            "UBND Xã Cẩm Xuyên"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "tt-t9",
              "name": "Thông báo thu hồi đất thực hiện dự án đô thị",
              "deadline": "15/08/2026",
              "completedDate": "10/08/2026",
              "status": "HOAN_THANH",
              "leadDept": "UBND Phường Phố Hiến",
              "coDepts": [
                "Sở Nông nghiệp và Môi trường"
              ]
            },
            {
              "id": "tt-t10",
              "name": "Hoàn thành hồ sơ, thủ tục thu hồi đất, bồi thường, hỗ trợ, tái định cư/GPMB (nếu Nhà nước thu hồi đất)",
              "deadline": "05/10/2026",
              "status": "CHAM_TIEN_DO",
              "leadDept": "UBND Phường Phố Hiến",
              "coDepts": [
                "Sở Nông nghiệp và Môi trường",
                "Công ty Cổ phần tập đoàn T&T"
              ]
            },
            {
              "id": "tt-t11",
              "name": "Kiểm đếm đất đai và tài sản trên đất của các hộ dân",
              "deadline": "15/11/2026",
              "status": "CON_HAN",
              "leadDept": "UBND Phường Phố Hiến",
              "coDepts": [
                "Sở Nông nghiệp và Môi trường"
              ]
            },
            {
              "id": "tt-t12",
              "name": "Lập và niêm yết công khai phương án bồi thường",
              "deadline": "30/12/2026",
              "status": "CON_HAN",
              "leadDept": "UBND Phường Phố Hiến",
              "coDepts": [
                "Sở Tài chính"
              ]
            },
            {
              "id": "tt-t13",
              "name": "Bàn giao đất sạch trên thực địa và giao đất có thu tiền",
              "deadline": "31/10/2027",
              "status": "CON_HAN",
              "leadDept": "Sở Nông nghiệp và Môi trường",
              "coDepts": [
                "Công ty Cổ phần tập đoàn T&T"
              ]
            }
          ]
        },
        {
          "id": "proc-tt-5",
          "order": 5,
          "name": "Thủ tục 5: Thiết kế, xây dựng, PCCC, đấu nối",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "30/11/2027",
          "taskCount": 6,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Công ty Cổ phần tập đoàn T&T",
          "coDepts": [
            "Sở Tài chính",
            "Sở Xây dựng"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "tt-t14",
              "name": "Khảo sát lập thiết kế bản vẽ thi công hạ tầng đô thị",
              "deadline": "10/09/2026",
              "completedDate": "05/09/2026",
              "status": "HOAN_THANH",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "tt-t15",
              "name": "Thẩm duyệt thiết kế phòng cháy chữa cháy",
              "deadline": "15/12/2026",
              "status": "CON_HAN",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Công an tỉnh"
              ]
            },
            {
              "id": "tt-t16",
              "name": "Thỏa thuận đấu nối cấp điện, cấp thoát nước và giao thông",
              "deadline": "20/01/2027",
              "status": "CON_HAN",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "tt-t17",
              "name": "Thẩm định thiết kế cơ sở và bản vẽ thi công",
              "deadline": "15/03/2027",
              "status": "CON_HAN",
              "leadDept": "Sở Xây dựng",
              "coDepts": [
                "Công ty Cổ phần tập đoàn T&T"
              ]
            },
            {
              "id": "tt-t18",
              "name": "Cấp Giấy phép xây dựng công trình",
              "deadline": "30/05/2027",
              "status": "CON_HAN",
              "leadDept": "Sở Xây dựng",
              "coDepts": [
                "Công ty Cổ phần tập đoàn T&T"
              ]
            },
            {
              "id": "tt-t19",
              "name": "Lựa chọn tổng thầu thi công hạ tầng",
              "deadline": "30/11/2027",
              "status": "CON_HAN",
              "leadDept": "Công ty Cổ phần tập đoàn T&T",
              "coDepts": []
            }
          ]
        }
      ]
    },
    "landClearanceStage": {
      "totalArea": 52.8,
      "surveyedArea": 52.8,
      "surveyedPercent": 100,
      "handedOverArea": 22.2,
      "handedOverPercent": 42,
      "totalPlots": 680,
      "surveyedPlots": 680,
      "handedOverPlots": 285,
      "compensationPlan": {
        "totalCompensationAmount": 680,
        "paidAmount": 290,
        "paidPercent": 42.6,
        "totalHouseholds": 360,
        "paidHouseholds": 185,
        "unresolvedHouseholds": 175,
        "resettlementArrangement": "Bố trí tại Khu dân cư đô thị mới Phường Phố Hiến."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "175 hộ dân chưa nhận tiền do kiến nghị về giá bồi thường đất nông nghiệp và đất ở ven sông."
    },
    "constructionStage": {
      "constructionProgress": 10,
      "constructionPlanNotes": "Đang san nền cục bộ phần diện tích 22ha đã sạch mặt bằng.",
      "items": [],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "THU_TUC_DAU_TU",
      "delayedStageLabel": "Đất đai, GPMB, mặt bằng",
      "bottleneckLocation": "Thủ tục: Đất đai, GPMB, mặt bằng. Công việc: Hoàn thành hồ sơ, thủ tục thu hồi đất, bồi thường, hỗ trợ, tái định cư/GPMB (nếu Nhà nước thu hồi đất) đã hết hạn ngày 05/10/2026",
      "leadDepartment": "Công ty Cổ phần tập đoàn T&T",
      "cooperatingDepartments": [
        "Sở Xây dựng",
        "Sở Tài chính",
        "Sở Nông nghiệp và Môi trường",
        "Công ty Cổ phần tập đoàn T&T",
        "UBND Phường Phố Hiến",
        "UBND Xã Cẩm Xuyên"
      ],
      "detailedDifficulties": "Công việc hoàn thành hồ sơ, thủ tục thu hồi đất, bồi thường, hỗ trợ tái định cư/GPMB bị quá hạn từ ngày 05/10/2026; 175 hộ dân tại Phường Phố Hiến và Xã Cẩm Xuyên chưa thống nhất đơn giá; tiến độ thẩm định báo cáo NCKT hạng mục công trình trên đất tại Sở Xây dựng bị kéo dài.",
      "proposalsAndRecommendations": "Yêu cầu Sở Xây dựng, Sở Tài chính, Sở Nông nghiệp và Môi trường phối hợp Công ty Cổ phần tập đoàn T&T và UBND Phường Phố Hiến hoàn tất phương án bồi thường hỗ trợ; báo cáo UBND tỉnh trước ngày 15/11/2026.",
      "expediteHistory": [
        {
          "id": "exp-tt-1",
          "date": "2026-10-06",
          "action": "Phiếu nhắc việc khẩn số 112/PNV-UBND",
          "signer": "Chủ tịch UBND tỉnh",
          "content": "Dự án chậm mốc hoàn thành hồ sơ thu hồi đất ngày 05/10/2026, yêu cầu giải quyết dứt điểm.",
          "feedbackDeadline": "2026-10-25"
        }
      ]
    },
    "unresolvedIssues": "Chậm mốc hoàn thành hồ sơ thủ tục thu hồi đất, bồi thường tái định cư ngày 05/10/2026; 175 hộ chưa nhận tiền."
  },
  {
    "id": "proj-22",
    "code": "DA-DN-02",
    "name": "Dự án Tổ hợp nông nghiệp hữu cơ tuần hoàn Organic Quế Lâm Lam Hồng",
    "sector": "NONG_NGHIEP",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng",
    "managingDept": "Sở Nông nghiệp và Môi trường",
    "district": "Xã Cẩm Xuyên, Xã Ân Thi",
    "totalInvestment": 1250,
    "disbursedAmount": 680,
    "progress": 55,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2024-03-20",
    "finishDate": "2027-11-30",
    "landArea": 65,
    "landClearanceProgress": 75,
    "landClearanceArea": "48.7 ha / 65 ha",
    "landClearanceNote": "Đã hoàn thành 3/5 thủ tục đúng hạn theo quy định.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Chấp thuận chủ trương đầu tư",
        "date": "2024-03-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Phê duyệt quy hoạch 1/500",
        "date": "2024-11-05",
        "status": "HOAN_THANH"
      },
      {
        "name": "Khởi công khu chế biến phân bón hữu cơ vi sinh",
        "date": "2025-06-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 88/QĐ-UBND tỉnh"
    ],
    "coordinates": [
      20.8,
      106.14
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "88/QĐ-UBND",
      "policyDecisionDate": "2024-03-20",
      "currentStep": "Đang thực hiện thủ tục đất đai GPMB và thẩm định thiết kế BVTC",
      "procedureStatus": "DANG_THUC_HIEN",
      "procedures": [
        {
          "id": "proc-ql-1",
          "order": 1,
          "name": "Thủ tục 1: Các thủ tục về đầu tư, doanh nghiệp, góp vốn",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "31/08/2027",
          "completedDate": "27/07/2026",
          "taskCount": 2,
          "updatedTaskCount": 2,
          "completedTaskCount": 2,
          "leadDept": "Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng",
          "coDepts": [
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": []
        },
        {
          "id": "proc-ql-2",
          "order": 2,
          "name": "Thủ tục 2: Quy hoạch, khảo sát, chuẩn bị dự án",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "15/06/2027",
          "completedDate": "11/07/2026",
          "taskCount": 5,
          "updatedTaskCount": 5,
          "completedTaskCount": 5,
          "leadDept": "Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng",
          "coDepts": [
            "Sở Xây dựng",
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": []
        },
        {
          "id": "proc-ql-3",
          "order": 3,
          "name": "Thủ tục 3: Môi trường, rừng, tài nguyên",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "30/04/2027",
          "completedDate": "12/07/2026",
          "taskCount": 1,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng",
          "coDepts": [
            "Sở Nông nghiệp và Môi trường",
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": []
        },
        {
          "id": "proc-ql-4",
          "order": 4,
          "name": "Thủ tục 4: Đất đai, GPMB, mặt bằng",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "31/10/2027",
          "taskCount": 5,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng",
          "coDepts": [
            "Sở Nông nghiệp và Môi trường",
            "Sở Tài chính",
            "UBND Xã Cẩm Xuyên"
          ],
          "directDocsCount": 0,
          "tasks": []
        },
        {
          "id": "proc-ql-5",
          "order": 5,
          "name": "Thủ tục 5: Thiết kế, xây dựng, PCCC, đấu nối",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "30/11/2027",
          "taskCount": 6,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng",
          "coDepts": [
            "Sở Tài chính",
            "Sở Xây dựng"
          ],
          "directDocsCount": 0,
          "tasks": []
        }
      ]
    },
    "landClearanceStage": {
      "totalArea": 65,
      "surveyedArea": 65,
      "surveyedPercent": 100,
      "handedOverArea": 48.7,
      "handedOverPercent": 75,
      "totalPlots": 420,
      "surveyedPlots": 420,
      "handedOverPlots": 315,
      "compensationPlan": {
        "totalCompensationAmount": 180,
        "paidAmount": 135,
        "paidPercent": 75,
        "totalHouseholds": 210,
        "paidHouseholds": 180,
        "unresolvedHouseholds": 30,
        "resettlementArrangement": "Không có tái định cư."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang chi trả đợt 2 cho các hộ."
    },
    "constructionStage": {
      "constructionProgress": 35,
      "constructionPlanNotes": "Đang thi công nhà xưởng ủ men vi sinh.",
      "items": [],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Công ty TNHH MTV Nông nghiệp Organic Quế Lâm Lam Hồng",
      "cooperatingDepartments": [
        "Sở Nông nghiệp và Môi trường",
        "Sở Tài chính",
        "UBND Xã Cẩm Xuyên"
      ],
      "detailedDifficulties": "Dự án triển khai bài bản, tuân thủ đúng tiến độ đã cam kết.",
      "proposalsAndRecommendations": "Hỗ trợ doanh nghiệp hoàn thiện đấu nối điện lưới 35kV phục vụ sản xuất.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Thủ tục đầu tư 3/5 đã hoàn thành đúng hạn; tiến độ đảm bảo"
  },
  {
    "id": "proj-23",
    "code": "DA-DN-03",
    "name": "Dự án Khu công nghiệp sạch Sóc Sơn - Ân Thi (giai đoạn 1)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty CP Đầu tư Phát triển KCN Hưng Yên (Liên doanh Hàn Quốc)",
    "managingDept": "Ban Quản lý các KCN tỉnh Hưng Yên",
    "district": "Xã Ân Thi, Xã Quang Hưng",
    "totalInvestment": 4180,
    "disbursedAmount": 1650,
    "progress": 42,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2023-11-10",
    "finishDate": "2027-10-30",
    "landArea": 143,
    "landClearanceProgress": 68,
    "landClearanceArea": "97.2 ha / 143 ha",
    "landClearanceNote": "Vướng 65 hộ dân chưa nhận tiền do kiến nghị về giá đất bồi thường nông nghiệp.",
    "bottlenecks": [
      "65 hộ dân Xã Ân Thi khiếu nại về ranh giới thu hồi đất",
      "Chậm hoàn thành hồ sơ chuyển đổi 18ha đất lúa 2 vụ"
    ],
    "milestones": [
      {
        "name": "Khởi công san nền đợt 1",
        "date": "2024-04-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 28/QĐ-TTg của Thủ tướng Chính phủ"
    ],
    "coordinates": [
      20.815,
      106.115
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "28/QĐ-TTg",
      "policyDecisionDate": "2023-03-20",
      "currentStep": "Giải phóng mặt bằng phân kỳ 2 và thi công hạ tầng trạm xử lý nước thải",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 143,
      "surveyedArea": 143,
      "surveyedPercent": 100,
      "handedOverArea": 97.2,
      "handedOverPercent": 68,
      "totalPlots": 1850,
      "surveyedPlots": 1850,
      "handedOverPlots": 1258,
      "compensationPlan": {
        "totalCompensationAmount": 850,
        "paidAmount": 580,
        "paidPercent": 68.2,
        "totalHouseholds": 620,
        "paidHouseholds": 555,
        "unresolvedHouseholds": 65,
        "resettlementArrangement": "Khu tái định cư Xã Ân Thi đã giao đất cho 12 hộ phải di dời."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "65 hộ tại Xã Ân Thi chưa đồng thuận giá đền bù cây trồng và đất lúa."
    },
    "constructionStage": {
      "constructionProgress": 38,
      "constructionPlanNotes": "Đã hoàn thành san nền 80ha giai đoạn 1 và đường trục chính KCN.",
      "items": [],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Giải phóng mặt bằng giai đoạn 2",
      "bottleneckLocation": "Diện tích 45.8ha đất nông nghiệp tại Xã Ân Thi",
      "leadDepartment": "Ban Quản lý các KCN tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "UBND Xã Ân Thi",
        "Sở Nông nghiệp và Môi trường",
        "Sở Tài chính"
      ],
      "detailedDifficulties": "65 hộ dân có diện tích đất nông nghiệp bị thu hồi đòi mức giá bồi thường cao hơn khung quy định của tỉnh; thủ tục chuyển đổi mục đích sử dụng đất trồng lúa gửi Bộ NN&PTNT đang chờ ý kiến thẩm định.",
      "proposalsAndRecommendations": "Đề nghị UBND Xã Ân Thi củng cố hồ sơ pháp lý, tổ chức đối thoại công khai lần 2; Sở Nông nghiệp và Môi trường trực tiếp làm việc với Cục Trồng trọt tháo gỡ chỉ tiêu đất lúa.",
      "expediteHistory": [
        {
          "id": "exp-23-1",
          "date": "2026-09-08",
          "action": "Thông báo kết luận số 168/TB-UBND",
          "signer": "Chủ tịch UBND tỉnh",
          "content": "Đôn đốc tháo gỡ khó khăn GPMB KCN sạch Ân Thi bàn giao cho đối tác Hàn Quốc.",
          "feedbackDeadline": "2026-11-15"
        }
      ]
    },
    "unresolvedIssues": "Vướng 65 hộ dân Xã Ân Thi khiếu nại giá bồi thường đất lúa; chậm bàn giao 45.8ha giai đoạn 2."
  },
  {
    "id": "proj-24",
    "code": "DA-DN-04",
    "name": "Dự án Khu đô thị sinh thái Ecopark giai đoạn 2 (Xã Văn Giang)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn Ecopark",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Văn Giang",
    "totalInvestment": 12500,
    "disbursedAmount": 9200,
    "progress": 85,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2021-08-10",
    "finishDate": "2027-12-31",
    "landArea": 220,
    "landClearanceProgress": 100,
    "landClearanceArea": "220 ha / 220 ha",
    "landClearanceNote": "100% GPMB sạch.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công phân khu vịnh đảo",
        "date": "2021-08-10",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định phê duyệt điều chỉnh quy hoạch 1/500"
    ],
    "coordinates": [
      20.94,
      105.93
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "112/QĐ-UBND",
      "policyDecisionDate": "2020-05-15",
      "currentStep": "Thi công cất nóc các tháp căn hộ ven hồ và công viên sinh thái",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 220,
      "surveyedArea": 220,
      "surveyedPercent": 100,
      "handedOverArea": 220,
      "handedOverPercent": 100,
      "totalPlots": 2800,
      "surveyedPlots": 2800,
      "handedOverPlots": 2800,
      "compensationPlan": {
        "totalCompensationAmount": 2400,
        "paidAmount": 2400,
        "paidPercent": 100,
        "totalHouseholds": 1650,
        "paidHouseholds": 1650,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 85,
      "constructionPlanNotes": "Thi công hoàn thiện mặt ngoài các tòa tháp chung cư cao cấp.",
      "items": [
        {
          "id": "c24-1",
          "name": "Phân khu căn hộ khoáng nóng SwanLake",
          "contractor": "Coteccons",
          "plannedProgress": 85,
          "actualProgress": 85,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Thông suốt",
      "leadDepartment": "Tập đoàn Ecopark",
      "cooperatingDepartments": [
        "Sở Xây dựng",
        "UBND Xã Văn Giang"
      ],
      "detailedDifficulties": "Dự án triển khai với chất lượng và tiến độ kiểu mẫu.",
      "proposalsAndRecommendations": "Đảm bảo đồng bộ hạ tầng kết nối với đường Vành đai 4.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Tiến độ thi công rất tốt; đạt 85%"
  },
  {
    "id": "proj-25",
    "code": "DA-DN-05",
    "name": "Dự án Nhà máy sản xuất linh kiện điện tử thông minh Pegatron Hưng Yên (KCN Thăng Long II)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn Pegatron (Đài Loan)",
    "managingDept": "Ban Quản lý các KCN tỉnh Hưng Yên",
    "district": "Phường Mỹ Hào, Xã Liêu Xá",
    "totalInvestment": 5800,
    "disbursedAmount": 2450,
    "progress": 48,
    "status": "CHAM_TIEN_DO",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-12-05",
    "finishDate": "2026-12-31",
    "landArea": 32,
    "landClearanceProgress": 100,
    "landClearanceArea": "32 ha / 32 ha",
    "landClearanceNote": "Mặt bằng sạch trong KCN.",
    "bottlenecks": [
      "Chậm thẩm duyệt nghiệm thu phòng cháy chữa cháy hệ thống phòng sạch",
      "Nhà thầu phụ kết cấu thép chậm bàn giao giàn không gian"
    ],
    "milestones": [
      {
        "name": "Khởi công xây dựng nhà xưởng 1",
        "date": "2023-12-05",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Giấy chứng nhận đăng ký đầu tư số 89/GCN-KCN"
    ],
    "coordinates": [
      20.905,
      106.035
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "89/GCN-KCN",
      "policyDecisionDate": "2023-08-10",
      "currentStep": "Lắp đặt kết cấu khung thép nhà xưởng chính và hệ thống cấp khí sạch",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 32,
      "surveyedArea": 32,
      "surveyedPercent": 100,
      "handedOverArea": 32,
      "handedOverPercent": 100,
      "totalPlots": 1,
      "surveyedPlots": 1,
      "handedOverPlots": 1,
      "compensationPlan": {
        "totalCompensationAmount": 280,
        "paidAmount": 280,
        "paidPercent": 100,
        "totalHouseholds": 0,
        "paidHouseholds": 0,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đất sạch KCN."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 48,
      "constructionPlanNotes": "Chậm tiến độ lắp dựng giàn kết cấu thép do nhà máy gia công chậm giao hàng.",
      "items": [
        {
          "id": "c25-1",
          "name": "Nhà xưởng 3 tầng diện tích 60.000m2",
          "contractor": "Công ty TNHH Xây dựng Delta",
          "plannedProgress": 65,
          "actualProgress": 48,
          "status": "CHAM_TIEN_DO"
        }
      ],
      "constructionStatus": "CHAM_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "THI_CONG_XAY_DUNG",
      "delayedStageLabel": "Thi công nhà xưởng & Thẩm duyệt PCCC",
      "bottleneckLocation": "Nhà xưởng sản xuất số 1 tại KCN Thăng Long II (Xã Liêu Xá)",
      "leadDepartment": "Ban Quản lý các KCN tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "Sở Xây dựng",
        "Công an tỉnh (Phòng Cảnh sát PCCC)",
        "Tập đoàn Pegatron"
      ],
      "detailedDifficulties": "Nhà thầu thi công lắp dựng khung kết cấu thép bị chậm 45 ngày; hồ sơ thẩm duyệt điều chỉnh thiết kế hệ thống chữa cháy tự động bằng khí FM-200 đang chờ Cục Cảnh sát PCCC & CNCH phản hồi.",
      "proposalsAndRecommendations": "Đề nghị Ban Quản lý các KCN tỉnh hỗ trợ doanh nghiệp làm việc với cơ quan PCCC đẩy nhanh thẩm duyệt; yêu cầu tổng thầu tăng ca lắp dựng khung nhà xưởng.",
      "expediteHistory": [
        {
          "id": "exp-25-1",
          "date": "2026-09-25",
          "action": "Phiếu đôn đốc số 78/PĐĐ-BQL",
          "signer": "Trưởng Ban Quản lý các KCN",
          "content": "Đôn đốc tổng thầu cam kết bù tiến độ thi công nhà xưởng Pegatron.",
          "feedbackDeadline": "2026-11-10"
        }
      ]
    },
    "unresolvedIssues": "Chậm thi công khung kết cấu thép nhà xưởng; đang chờ thẩm duyệt PCCC hệ thống phòng sạch."
  },
  {
    "id": "proj-26",
    "code": "DA-DN-06",
    "name": "Dự án Khu cảng cạn ICD và Trung tâm dịch vụ Logistics Khoái Châu",
    "sector": "GIAO_THONG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Giao nhận Vận tải Con Ong (Bee Logistics)",
    "managingDept": "Sở Công Thương",
    "district": "Xã Khoái Châu",
    "totalInvestment": 2450,
    "disbursedAmount": 480,
    "progress": 28,
    "status": "CHUAN_BI_DAU_TU",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2024-08-01",
    "finishDate": "2028-06-30",
    "landArea": 55,
    "landClearanceProgress": 35,
    "landClearanceArea": "19.2 ha / 55 ha",
    "landClearanceNote": "Đang kiểm đếm đợt 1.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Chấp thuận chủ trương đầu tư",
        "date": "2024-08-01",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 142/QĐ-UBND"
    ],
    "coordinates": [
      20.77,
      105.99
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "142/QĐ-UBND",
      "policyDecisionDate": "2024-08-01",
      "currentStep": "Thẩm định đồ án quy hoạch chi tiết 1/500 và thỏa thuận đấu nối đường thủy nội địa",
      "procedureStatus": "DANG_THUC_HIEN"
    },
    "landClearanceStage": {
      "totalArea": 55,
      "surveyedArea": 55,
      "surveyedPercent": 100,
      "handedOverArea": 19.2,
      "handedOverPercent": 35,
      "totalPlots": 650,
      "surveyedPlots": 650,
      "handedOverPlots": 227,
      "compensationPlan": {
        "totalCompensationAmount": 350,
        "paidAmount": 125,
        "paidPercent": 35.7,
        "totalHouseholds": 280,
        "paidHouseholds": 110,
        "unresolvedHouseholds": 170,
        "resettlementArrangement": "Khu tái định cư đang chuẩn bị."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang bồi thường đất nông nghiệp."
    },
    "constructionStage": {
      "constructionProgress": 0,
      "constructionPlanNotes": "Chưa thi công xây lắp.",
      "items": [],
      "constructionStatus": "CHUA_KHOI_CONG"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Sở Công Thương",
      "cooperatingDepartments": [
        "Sở Xây dựng",
        "UBND Xã Khoái Châu"
      ],
      "detailedDifficulties": "Thủ tục thẩm định quy hoạch tiến triển tốt.",
      "proposalsAndRecommendations": "Đẩy nhanh thỏa thuận mở bến cảng nội địa với Cục Đường thủy.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Thủ tục quy hoạch và thỏa thuận mở bến thủy đang triển khai thuận lợi"
  },
  {
    "id": "proj-27",
    "code": "DA-DN-07",
    "name": "Dự án Nhà máy sản xuất thiết bị năng lượng mặt trời JA Solar Việt Nam (KCN Yên Mỹ)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn JA Solar (Hồng Kông)",
    "managingDept": "Ban Quản lý các KCN tỉnh Hưng Yên",
    "district": "Xã Yên Mỹ",
    "totalInvestment": 6500,
    "disbursedAmount": 6500,
    "progress": 100,
    "status": "HOAN_THANH",
    "currentStage": "HOAN_THANH",
    "startDate": "2022-04-15",
    "finishDate": "2025-09-30",
    "landArea": 25,
    "landClearanceProgress": 100,
    "landClearanceArea": "25 ha / 25 ha",
    "landClearanceNote": "100% hoàn thành.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khánh thành nhà máy",
        "date": "2025-09-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Giấy chứng nhận đăng ký đầu tư số 55/GCN-KCN"
    ],
    "coordinates": [
      20.865,
      106.015
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "55/GCN-KCN",
      "policyDecisionDate": "2022-01-10",
      "currentStep": "Đã hoàn thành toàn bộ thủ tục nghiệm thu công trình và cấp phép hoạt động",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 25,
      "surveyedArea": 25,
      "surveyedPercent": 100,
      "handedOverArea": 25,
      "handedOverPercent": 100,
      "totalPlots": 1,
      "surveyedPlots": 1,
      "handedOverPlots": 1,
      "compensationPlan": {
        "totalCompensationAmount": 220,
        "paidAmount": 220,
        "paidPercent": 100,
        "totalHouseholds": 0,
        "paidHouseholds": 0,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đất KCN."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 100,
      "constructionPlanNotes": "Đã vận hành thương mại đạt 100% công suất thiết kế.",
      "items": [
        {
          "id": "c27-1",
          "name": "Nhà xưởng pin mặt trời công suất 5GW",
          "contractor": "Tổng thầu CTCI",
          "plannedProgress": 100,
          "actualProgress": 100,
          "status": "HOAN_THANH"
        }
      ],
      "constructionStatus": "HOAN_THANH"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Hoàn thành",
      "bottleneckLocation": "Đã vận hành",
      "leadDepartment": "Ban Quản lý các KCN tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "Sở Công Thương",
        "UBND Xã Yên Mỹ"
      ],
      "detailedDifficulties": "Nhà máy hoạt động xuất khẩu rất ổn định.",
      "proposalsAndRecommendations": "Tạo điều kiện thủ tục thông quan hàng hóa xuất nhập khẩu.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Nhà máy đã hoàn thành và xuất khẩu sản phẩm ra thị trường quốc tế"
  },
  {
    "id": "proj-28",
    "code": "DA-DN-08",
    "name": "Dự án Khu công nghiệp Kim Động (giai đoạn 1)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn Geleximco",
    "managingDept": "Ban Quản lý các KCN tỉnh Hưng Yên",
    "district": "Xã Kim Động",
    "totalInvestment": 2650,
    "disbursedAmount": 850,
    "progress": 38,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2024-01-15",
    "finishDate": "2027-12-31",
    "landArea": 100,
    "landClearanceProgress": 55,
    "landClearanceArea": "55 ha / 100 ha",
    "landClearanceNote": "Vướng 85 ngôi mộ tổ của các dòng họ chưa di dời.",
    "bottlenecks": [
      "Tục lệ kiêng cữ di chuyển mồ mả vào các tháng mùa hè",
      "Chậm hoàn thành nghĩa trang tập trung quy hoạch mới"
    ],
    "milestones": [
      {
        "name": "Khởi công hạ tầng kỹ thuật",
        "date": "2024-06-20",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 195/QĐ-UBND"
    ],
    "coordinates": [
      20.725,
      106.08
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "195/QĐ-UBND",
      "policyDecisionDate": "2023-09-05",
      "currentStep": "Bồi thường GPMB diện tích đất nghĩa trang và đất nông nghiệp",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 100,
      "surveyedArea": 100,
      "surveyedPercent": 100,
      "handedOverArea": 55,
      "handedOverPercent": 55,
      "totalPlots": 1250,
      "surveyedPlots": 1250,
      "handedOverPlots": 687,
      "compensationPlan": {
        "totalCompensationAmount": 550,
        "paidAmount": 310,
        "paidPercent": 56.3,
        "totalHouseholds": 480,
        "paidHouseholds": 365,
        "unresolvedHouseholds": 115,
        "resettlementArrangement": "Nghĩa trang mới tại Xã Kim Động đang thi công tường bao."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "115 hộ có đất và 85 ngôi mộ chưa di dời."
    },
    "constructionStage": {
      "constructionProgress": 30,
      "constructionPlanNotes": "San lấp mặt bằng phân đoạn 55ha đã sạch.",
      "items": [],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Di dời mồ mả & Nghĩa trang",
      "bottleneckLocation": "Khu vực nghĩa trang nhân dân thôn Phú Cường tại Xã Kim Động",
      "leadDepartment": "UBND Xã Kim Động",
      "cooperatingDepartments": [
        "Sở Nông nghiệp và Môi trường",
        "Ban Quản lý các KCN tỉnh Hưng Yên",
        "Tập đoàn Geleximco"
      ],
      "detailedDifficulties": "85 ngôi mộ dòng họ tại Xã Kim Động chưa di dời do chờ nghĩa trang mới hoàn thiện hạ tầng và phong tục chỉ bốc mộ vào dịp cuối năm âm lịch.",
      "proposalsAndRecommendations": "Đề nghị UBND Xã Kim Động khẩn trương hoàn thành hạ tầng nghĩa trang mới trước ngày 15/11/2026; vận động các dòng họ đăng ký lịch di dời trong tháng 11-12/2026.",
      "expediteHistory": [
        {
          "id": "exp-28-1",
          "date": "2026-09-20",
          "action": "Công văn số 342/UBND-KT",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Đôn đốc UBND Xã Kim Động hoàn thành nghĩa trang tập trung.",
          "feedbackDeadline": "2026-11-20"
        }
      ]
    },
    "unresolvedIssues": "Vướng 85 ngôi mộ và 115 hộ dân tại Xã Kim Động chưa di dời; chậm tiến độ nghĩa trang tập trung."
  },
  {
    "id": "proj-29",
    "code": "DA-DN-09",
    "name": "Dự án Khu đô thị Dream City Hưng Yên (Vinhomes Ocean Park 2 - Xã Nghĩa Trụ)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn Vingroup",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Nghĩa Trụ",
    "totalInvestment": 38000,
    "disbursedAmount": 34500,
    "progress": 92,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2021-10-01",
    "finishDate": "2027-06-30",
    "landArea": 460,
    "landClearanceProgress": 100,
    "landClearanceArea": "460 ha / 460 ha",
    "landClearanceNote": "100% GPMB sạch.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khánh thành công viên sóng nhân tạo lớn nhất thế giới",
        "date": "2022-04-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 188/QĐ-UBND"
    ],
    "coordinates": [
      20.935,
      105.96
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "188/QĐ-UBND",
      "policyDecisionDate": "2021-03-10",
      "currentStep": "Bàn giao các phân khu biệt thự và hoàn thiện trung tâm thương mại Mega Mall",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 460,
      "surveyedArea": 460,
      "surveyedPercent": 100,
      "handedOverArea": 460,
      "handedOverPercent": 100,
      "totalPlots": 4500,
      "surveyedPlots": 4500,
      "handedOverPlots": 4500,
      "compensationPlan": {
        "totalCompensationAmount": 3800,
        "paidAmount": 3800,
        "paidPercent": 100,
        "totalHouseholds": 2900,
        "paidHouseholds": 2900,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 92,
      "constructionPlanNotes": "Đang thi công hoàn thiện phân khu cuối cùng.",
      "items": [
        {
          "id": "c29-1",
          "name": "Khu biệt thự San Hô và Chà Là",
          "contractor": "Coteccons & Ricons",
          "plannedProgress": 92,
          "actualProgress": 92,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Thông suốt",
      "leadDepartment": "Tập đoàn Vingroup",
      "cooperatingDepartments": [
        "Sở Xây dựng",
        "UBND Xã Nghĩa Trụ"
      ],
      "detailedDifficulties": "Dự án thi công thần tốc, đạt tiến độ kỷ lục.",
      "proposalsAndRecommendations": "Hỗ trợ kết nối giao thông với cao tốc Hà Nội - Hải Phòng.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Thi công thần tốc; cư dân về ở đông đúc"
  },
  {
    "id": "proj-30",
    "code": "DA-DN-10",
    "name": "Dự án Khu công nghiệp Thổ Hoàng (Xã Ân Thi)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty CP Đầu tư KCN Thổ Hoàng",
    "managingDept": "Ban Quản lý các KCN tỉnh Hưng Yên",
    "district": "Xã Ân Thi",
    "totalInvestment": 3150,
    "disbursedAmount": 620,
    "progress": 24,
    "status": "CHUAN_BI_DAU_TU",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2024-10-15",
    "finishDate": "2028-12-31",
    "landArea": 150,
    "landClearanceProgress": 25,
    "landClearanceArea": "37.5 ha / 150 ha",
    "landClearanceNote": "Đang đo đạc trích lục bản đồ địa chính.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Chủ trương đầu tư",
        "date": "2024-10-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 215/QĐ-UBND"
    ],
    "coordinates": [
      20.805,
      106.13
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "215/QĐ-UBND",
      "policyDecisionDate": "2024-10-15",
      "currentStep": "Lập đồ án quy hoạch chi tiết xây dựng 1/2000 và Báo cáo ĐTM",
      "procedureStatus": "DANG_THUC_HIEN"
    },
    "landClearanceStage": {
      "totalArea": 150,
      "surveyedArea": 150,
      "surveyedPercent": 100,
      "handedOverArea": 37.5,
      "handedOverPercent": 25,
      "totalPlots": 1600,
      "surveyedPlots": 1600,
      "handedOverPlots": 400,
      "compensationPlan": {
        "totalCompensationAmount": 750,
        "paidAmount": 180,
        "paidPercent": 24,
        "totalHouseholds": 550,
        "paidHouseholds": 140,
        "unresolvedHouseholds": 410,
        "resettlementArrangement": "Khu tái định cư đang khảo sát."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang kiểm đếm đợt 1."
    },
    "constructionStage": {
      "constructionProgress": 0,
      "constructionPlanNotes": "Chưa thi công.",
      "items": [],
      "constructionStatus": "CHUA_KHOI_CONG"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Ban Quản lý các KCN tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "Sở Xây dựng",
        "UBND Xã Ân Thi"
      ],
      "detailedDifficulties": "Thủ tục đầu tư diễn ra bình thường.",
      "proposalsAndRecommendations": "Đẩy nhanh thẩm định quy hoạch phân khu.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Đang lập quy hoạch chi tiết 1/2000"
  },
  {
    "id": "proj-31",
    "code": "DA-DN-11",
    "name": "Dự án Tổ hợp Nhà máy sản xuất ô tô điện và pin lithium Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn Geleximco & Omoda Jaecoo (Chery Auto)",
    "managingDept": "Sở Công Thương",
    "district": "Xã Tiền Hải",
    "totalInvestment": 18500,
    "disbursedAmount": 4200,
    "progress": 32,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2024-04-18",
    "finishDate": "2028-10-30",
    "landArea": 120,
    "landClearanceProgress": 88,
    "landClearanceArea": "105.6 ha / 120 ha",
    "landClearanceNote": "Đã bàn giao cơ bản mặt bằng sạch giai đoạn 1.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công san nền nhà xưởng dập thân vỏ",
        "date": "2024-04-18",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Hợp đồng liên doanh hợp tác đầu tư quốc tế"
    ],
    "coordinates": [
      20.58,
      106.32
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "99/GCN-ĐT",
      "policyDecisionDate": "2024-01-15",
      "currentStep": "Thi công móng cọc các phân xưởng hàn, sơn và lắp ráp động cơ điện",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 120,
      "surveyedArea": 120,
      "surveyedPercent": 100,
      "handedOverArea": 105.6,
      "handedOverPercent": 88,
      "totalPlots": 1100,
      "surveyedPlots": 1100,
      "handedOverPlots": 968,
      "compensationPlan": {
        "totalCompensationAmount": 890,
        "paidAmount": 790,
        "paidPercent": 88.7,
        "totalHouseholds": 420,
        "paidHouseholds": 380,
        "unresolvedHouseholds": 40,
        "resettlementArrangement": "Khu tái định cư Xã Tiền Hải đã hoàn thành hạ tầng."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Còn 14.4ha đang hoàn tất chi trả đợt cuối."
    },
    "constructionStage": {
      "constructionProgress": 32,
      "constructionPlanNotes": "Đang ép cọc ly tâm móng nhà xưởng sơn tĩnh điện.",
      "items": [
        {
          "id": "c31-1",
          "name": "Xây dựng phân xưởng dập thân xe",
          "contractor": "Tổng thầu Hyundai E&C",
          "plannedProgress": 30,
          "actualProgress": 32,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Sở Công Thương",
      "cooperatingDepartments": [
        "Ban Quản lý các KCN tỉnh Hưng Yên",
        "UBND Xã Tiền Hải",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Dự án chiến lược được tỉnh hỗ trợ tối đa.",
      "proposalsAndRecommendations": "Đẩy nhanh thi công trạm biến áp 110kV chuyên dùng cấp điện cho nhà máy.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Đang ép cọc nhà xưởng giai đoạn 1; đúng tiến độ cam kết"
  },
  {
    "id": "proj-32",
    "code": "DA-DN-12",
    "name": "Dự án Trung tâm logistics quốc tế và kho lạnh thông minh Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn CJ Logistics (Hàn Quốc)",
    "managingDept": "Sở Công Thương",
    "district": "Xã Hoàn Long",
    "totalInvestment": 2150,
    "disbursedAmount": 2150,
    "progress": 100,
    "status": "HOAN_THANH",
    "currentStage": "HOAN_THANH",
    "startDate": "2023-01-10",
    "finishDate": "2025-08-30",
    "landArea": 28,
    "landClearanceProgress": 100,
    "landClearanceArea": "28 ha / 28 ha",
    "landClearanceNote": "100% hoàn thành.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khánh thành kho lạnh thông minh tự động",
        "date": "2025-08-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Giấy chứng nhận đăng ký đầu tư"
    ],
    "coordinates": [
      20.925,
      105.985
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "77/GCN-ĐT",
      "policyDecisionDate": "2022-10-20",
      "currentStep": "Đã hoàn thành toàn bộ công trình, đi vào vận hành cung ứng dịch vụ chuỗi cung ứng lạnh",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 28,
      "surveyedArea": 28,
      "surveyedPercent": 100,
      "handedOverArea": 28,
      "handedOverPercent": 100,
      "totalPlots": 220,
      "surveyedPlots": 220,
      "handedOverPlots": 220,
      "compensationPlan": {
        "totalCompensationAmount": 160,
        "paidAmount": 160,
        "paidPercent": 100,
        "totalHouseholds": 110,
        "paidHouseholds": 110,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Hoàn tất."
    },
    "constructionStage": {
      "constructionProgress": 100,
      "constructionPlanNotes": "Đã đi vào hoạt động 100% công suất.",
      "items": [
        {
          "id": "c32-1",
          "name": "Kho lạnh ASRS tự động hóa",
          "contractor": "Công ty XD Posco",
          "plannedProgress": 100,
          "actualProgress": 100,
          "status": "HOAN_THANH"
        }
      ],
      "constructionStatus": "HOAN_THANH"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Hoàn thành",
      "bottleneckLocation": "Đã vận hành",
      "leadDepartment": "Sở Công Thương",
      "cooperatingDepartments": [
        "UBND Xã Hoàn Long"
      ],
      "detailedDifficulties": "Hoạt động logistics rất hiệu quả.",
      "proposalsAndRecommendations": "Tiếp tục tạo thuận lợi về kiểm dịch hàng nông sản tươi sống.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Đã hoàn thành bàn giao; vận hành kho lạnh thông minh xuất sắc"
  },
  {
    "id": "proj-33",
    "code": "DA-DN-13",
    "name": "Dự án Khu đô thị công viên sinh thái thể thao Phường Đường Hào",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Tập đoàn MIK Group",
    "managingDept": "Sở Xây dựng",
    "district": "Phường Đường Hào, Phường Thượng Hồng",
    "totalInvestment": 4200,
    "disbursedAmount": 1450,
    "progress": 40,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2024-02-01",
    "finishDate": "2028-06-30",
    "landArea": 68,
    "landClearanceProgress": 58,
    "landClearanceArea": "39.4 ha / 68 ha",
    "landClearanceNote": "Vướng 48 hộ dân mặt đường quốc lộ chưa đồng thuận bàn giao mặt bằng.",
    "bottlenecks": [
      "Khiếu nại về bảng giá đất bồi thường giáp mặt đường",
      "Chậm giao đất tái định cư tại Phường Đường Hào"
    ],
    "milestones": [
      {
        "name": "Khởi công san lấp",
        "date": "2024-06-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 312/QĐ-UBND"
    ],
    "coordinates": [
      20.915,
      106.07
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "312/QĐ-UBND",
      "policyDecisionDate": "2023-11-20",
      "currentStep": "Bồi thường GPMB diện tích đất ở mặt tiền và thi công hồ điều hòa",
      "procedureStatus": "HOAN_THANH"
    },
    "landClearanceStage": {
      "totalArea": 68,
      "surveyedArea": 68,
      "surveyedPercent": 100,
      "handedOverArea": 39.4,
      "handedOverPercent": 58,
      "totalPlots": 780,
      "surveyedPlots": 780,
      "handedOverPlots": 452,
      "compensationPlan": {
        "totalCompensationAmount": 620,
        "paidAmount": 360,
        "paidPercent": 58,
        "totalHouseholds": 320,
        "paidHouseholds": 272,
        "unresolvedHouseholds": 48,
        "resettlementArrangement": "Khu tái định cư Phường Đường Hào đang thi công cống thoát nước."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "48 hộ mặt đường chưa bàn giao mặt bằng."
    },
    "constructionStage": {
      "constructionProgress": 35,
      "constructionPlanNotes": "Đang đào hồ công viên sinh thái.",
      "items": [],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Bồi thường đất ở mặt tiền",
      "bottleneckLocation": "Đoạn 48 hộ dân mặt đường trục tại Phường Đường Hào",
      "leadDepartment": "UBND Phường Đường Hào",
      "cooperatingDepartments": [
        "Sở Nông nghiệp và Môi trường",
        "Sở Tài chính",
        "Sở Xây dựng",
        "MIK Group"
      ],
      "detailedDifficulties": "48 hộ dân mặt đường yêu cầu bố trí tái định cư tại chỗ và nâng giá bồi thường đất kinh doanh; tiến độ hạ tầng tái định cư bị chậm 35 ngày.",
      "proposalsAndRecommendations": "Đề nghị UBND Phường Đường Hào khẩn trương hoàn thành hạ tầng tái định cư trong tháng 11/2026; tổ chức đối thoại trực tiếp công khai chính sách bồi thường.",
      "expediteHistory": [
        {
          "id": "exp-33-1",
          "date": "2026-09-16",
          "action": "Công văn số 355/UBND-KT",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Đôn đốc UBND Phường Đường Hào tháo gỡ điểm nghẽn mặt tiền.",
          "feedbackDeadline": "2026-11-15"
        }
      ]
    },
    "unresolvedIssues": "Vướng 48 hộ dân mặt đường tại Phường Đường Hào chưa bàn giao mặt bằng; chậm hạ tầng tái định cư."
  },
  {
    "id": "proj-34",
    "code": "DA-DN-14",
    "name": "Dự án Khu nông nghiệp công nghệ cao và nhà kính thông minh Xã Ân Thi",
    "sector": "NONG_NGHIEP",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty CP Nông nghiệp Công nghệ cao VinEco",
    "managingDept": "Sở Nông nghiệp và Môi trường",
    "district": "Xã Ân Thi",
    "totalInvestment": 920,
    "disbursedAmount": 310,
    "progress": 30,
    "status": "CHUAN_BI_DAU_TU",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2024-09-01",
    "finishDate": "2027-12-31",
    "landArea": 42,
    "landClearanceProgress": 32,
    "landClearanceArea": "13.4 ha / 42 ha",
    "landClearanceNote": "Đang thỏa thuận gom đất nông nghiệp của các hộ.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Chủ trương đầu tư",
        "date": "2024-09-01",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "Quyết định số 208/QĐ-UBND"
    ],
    "coordinates": [
      20.825,
      106.135
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "208/QĐ-UBND",
      "policyDecisionDate": "2024-09-01",
      "currentStep": "Thẩm định thỏa thuận thuê đất và phương án ứng dụng công nghệ tưới nhỏ giọt Isarel",
      "procedureStatus": "DANG_THUC_HIEN"
    },
    "landClearanceStage": {
      "totalArea": 42,
      "surveyedArea": 42,
      "surveyedPercent": 100,
      "handedOverArea": 13.4,
      "handedOverPercent": 32,
      "totalPlots": 380,
      "surveyedPlots": 380,
      "handedOverPlots": 121,
      "compensationPlan": {
        "totalCompensationAmount": 130,
        "paidAmount": 42,
        "paidPercent": 32.3,
        "totalHouseholds": 220,
        "paidHouseholds": 85,
        "unresolvedHouseholds": 135,
        "resettlementArrangement": "Không có tái định cư."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Doanh nghiệp tự thỏa thuận nhận chuyển nhượng."
    },
    "constructionStage": {
      "constructionProgress": 0,
      "constructionPlanNotes": "Chưa thi công.",
      "items": [],
      "constructionStatus": "CHUA_KHOI_CONG"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Đúng tiến độ",
      "leadDepartment": "Sở Nông nghiệp và Môi trường",
      "cooperatingDepartments": [
        "UBND Xã Ân Thi"
      ],
      "detailedDifficulties": "Mô hình tích tụ ruộng đất tự nguyện tiến hành suôn sẻ.",
      "proposalsAndRecommendations": "Hỗ trợ doanh nghiệp hoàn thiện hồ sơ cấp Giấy chứng nhận quyền sử dụng đất.",
      "expediteHistory": []
    },
    "unresolvedIssues": "Thủ tục thuê đất nông nghiệp công nghệ cao đang thực hiện đúng tiến độ"
  }
];
