import { ProjectItem } from '../types';

export const PROJECTS_MOCK: ProjectItem[] = [
  {
    "id": "proj-1",
    "code": "DA-GT-01",
    "name": "Dự án đầu tư xây dựng đường Vành đai 4 - Vùng Thủ đô Hà Nội (Đoạn qua tỉnh Hưng Yên)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Văn Giang, Xã Nghĩa Trụ, Xã Yên Mỹ",
    "totalInvestment": 5244.5,
    "disbursedAmount": 3820.2,
    "progress": 74,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2023-06-25",
    "finishDate": "2027-12-31",
    "landClearanceProgress": 88.5,
    "landClearanceArea": "205.4 ha / 232 ha",
    "landClearanceNote": "Còn vướng mắc 3 khu tái định cư và di dời đường điện 220kV qua địa bàn xã Văn Giang và xã Yên Mỹ.",
    "bottlenecks": [
      "GPMB khu dân cư tập trung tại xã Văn Giang chưa đồng thuận giá đền bù",
      "Thiếu hụt nguồn vật liệu cát đắp nền đường",
      "Thủ tục di dời hạ tầng kỹ thuật đường điện cao thế chậm"
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
      "compensationPlan": {
        "totalCompensationAmount": 2150,
        "paidAmount": 1890.5,
        "paidPercent": 87.9,
        "totalHouseholds": 1420,
        "paidHouseholds": 1342,
        "unresolvedHouseholds": 78,
        "resettlementArrangement": "Bố trí 3 khu tái định cư tại xã Văn Giang, xã Nghĩa Trụ và xã Yên Mỹ. Đã giao đất 85/112 lô tái định cư."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "78 hộ dân tại xã Văn Giang chưa nhận tiền do kiến nghị về đơn giá bồi thường đất ở và chậm giao đất tái định cư.",
      "totalPlots": 4176,
      "surveyedPlots": 4176,
      "handedOverPlots": 3696
    },
    "constructionStage": {
      "constructionProgress": 68,
      "constructionPlanNotes": "Triển khai đồng loạt 4 mũi thi công phân đoạn nền đường, cọc khoan nhồi mố trụ cầu vượt sông Bắc Hưng Hải.",
      "items": [
        {
          "id": "c1",
          "name": "Gói thầu số 01: Thi công xây dựng đoạn Km19+900 - Km32+000",
          "contractor": "Tổng công ty CP Xuất nhập khẩu & Xây dựng Việt Nam (Vinaconex)",
          "plannedProgress": 75,
          "actualProgress": 65,
          "status": "CHAM_TIEN_DO",
          "note": "Thiếu cát đắp nền"
        },
        {
          "id": "c2",
          "name": "Gói thầu số 02: Thi công xây dựng cầu vượt nút giao cao tốc",
          "contractor": "Công ty CP Đầu tư & Xây dựng giao thông Phương Thành",
          "plannedProgress": 80,
          "actualProgress": 78,
          "status": "DUNG_TIEN_DO"
        },
        {
          "id": "c3",
          "name": "Gói thầu số 03: Xây dựng hệ thống thoát nước và đường gom dân sinh",
          "contractor": "Công ty TNHH Hiệp Phú",
          "plannedProgress": 70,
          "actualProgress": 62,
          "status": "CHAM_TIEN_DO",
          "note": "Chờ bàn giao mặt bằng cục bộ"
        }
      ],
      "constructionStatus": "CHAM_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Giải phóng mặt bằng & Tái định cư",
      "bottleneckLocation": "Khu vực 78 hộ dân giáp ranh nút giao xã Văn Giang và hành lang di dời 3 vị trí cột điện cao thế 220kV xã Yên Mỹ",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "UBND huyện Văn Giang",
        "UBND huyện Yên Mỹ",
        "Sở Tài nguyên và Môi trường",
        "Công ty Truyền tải điện 1 (EVNNPT)"
      ],
      "detailedDifficulties": "78 hộ dân chưa nhận tiền do so sánh giá bồi thường đất ở giáp ranh Hà Nội; Hạ tầng kỹ thuật khu tái định cư Văn Giang thi công chậm so với kế hoạch; Việc thỏa thuận lịch cắt điện thi công di dời đường điện 220kV kéo dài.",
      "proposalsAndRecommendations": "Đề nghị UBND tỉnh tổ chức đối thoại trực tiếp với các hộ dân; chỉ đạo UBND huyện Văn Giang khẩn trương hoàn thành hạ tầng tái định cư trong tháng 11/2026; kiến nghị Bộ Công Thương và EVNNPT hỗ trợ phê duyệt phương án cắt điện.",
      "expediteHistory": [
        {
          "id": "exp-1",
          "date": "2026-09-15",
          "action": "Công văn đôn đốc số 245/UBND-KT",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Yêu cầu UBND huyện Văn Giang hoàn tất bàn giao 100% mặt bằng trước ngày 30/11/2026.",
          "feedbackDeadline": "2026-11-30"
        },
        {
          "id": "exp-2",
          "date": "2026-10-02",
          "action": "Thông báo kết luận số 182/TB-VP",
          "signer": "Chủ tịch UBND tỉnh",
          "content": "Giao Sở Xây dựng phối hợp Sở TN&MT rà soát cơ chế hỗ trợ khác theo đúng Luật Đất đai mới.",
          "feedbackDeadline": "2026-10-25"
        }
      ]
    },
    "landArea": 232,
    "unresolvedIssues": "Giải phóng mặt bằng & Tái định cư: Khu vực 78 hộ dân giáp ranh nút giao xã Văn Giang và hành lang di dời 3 vị trí cột điện cao thế 220kV xã Yên Mỹ"
  },
  {
    "id": "proj-2",
    "code": "DA-GT-02",
    "name": "Dự án xây dựng tuyến đường trục phát triển kinh tế Tân Phúc - Võng Phan (giai đoạn 1)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD công trình Giao thông tỉnh",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Ân Thi, Xã Tiên Lữ, Xã Quang Hưng",
    "totalInvestment": 2986,
    "disbursedAmount": 1845,
    "progress": 62,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-08-10",
    "finishDate": "2026-10-15",
    "landClearanceProgress": 94,
    "landClearanceArea": "142 ha / 151 ha",
    "landClearanceNote": "Đã bàn giao cơ bản đất nông nghiệp, đang hoàn tất di dời mồ mả.",
    "bottlenecks": [
      "Thời tiết mưa bão ảnh hưởng thi công móng cọc cầu"
    ],
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
      }
    ],
    "legalDocs": [
      "QĐ số 890/QĐ-UBND phê duyệt dự án"
    ],
    "coordinates": [
      20.785,
      106.12
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "312/QĐ-HĐND",
      "policyDecisionDate": "2022-11-20",
      "currentStep": "Hoàn thành thẩm định TK BVTC, nghiệm thu từng giai đoạn",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Hồ sơ pháp lý đầy đủ, không vướng thủ tục đầu tư."
    },
    "landClearanceStage": {
      "totalArea": 151,
      "surveyedArea": 151,
      "surveyedPercent": 100,
      "handedOverArea": 142,
      "handedOverPercent": 94,
      "compensationPlan": {
        "totalCompensationAmount": 850,
        "paidAmount": 810,
        "paidPercent": 95.3,
        "totalHouseholds": 890,
        "paidHouseholds": 865,
        "unresolvedHouseholds": 25,
        "resettlementArrangement": "Đã bố trí 25 lô đất tái định cư tại xã Ân Thi, các hộ đang hoàn tất bốc thăm."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Còn 9ha chủ yếu là đất công ích và 18 ngôi mộ đang chờ mùa hanh khô để di dời theo phong tục.",
      "totalPlots": 2718,
      "surveyedPlots": 2718,
      "handedOverPlots": 2555
    },
    "constructionStage": {
      "constructionProgress": 60,
      "constructionPlanNotes": "Thi công đồng loạt 3 phân đoạn, tập trung hoàn thiện đắp đất k95, k98 và mố trụ 5 cầu trên tuyến.",
      "items": [
        {
          "id": "c2-1",
          "name": "Đoạn Tân Phúc - Km15+000",
          "contractor": "Công ty TNHH Xây dựng Hưng Long",
          "plannedProgress": 65,
          "actualProgress": 63,
          "status": "DUNG_TIEN_DO"
        },
        {
          "id": "c2-2",
          "name": "Hạng mục 5 cầu vượt kênh thủy lợi",
          "contractor": "Công ty CP Cầu đường Hải Phòng",
          "plannedProgress": 60,
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
      "bottleneckLocation": "Không có điểm nghẽn nghiêm trọng",
      "leadDepartment": "Ban Quản lý dự án ĐTXD công trình Giao thông tỉnh",
      "cooperatingDepartments": [
        "UBND huyện Ân Thi",
        "UBND huyện Tiên Lữ"
      ],
      "detailedDifficulties": "Nguồn cung đất đắp cục bộ có thời điểm biến động giá.",
      "proposalsAndRecommendations": "Tiếp tục duy trì tiến độ giải ngân vốn được bố trí năm 2026.",
      "expediteHistory": []
    },
    "landArea": 151,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-3",
    "code": "DA-GT-03",
    "name": "Nâng cấp mở rộng tuyến đường tỉnh ĐT.379 kết nối Hà Nội - KĐT Ecopark đến TP Hưng Yên",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Văn Giang, Xã Khoái Châu, Xã Mễ Sở",
    "totalInvestment": 1680,
    "disbursedAmount": 1450,
    "progress": 86,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2022-04-10",
    "finishDate": "2025-03-31",
    "landClearanceProgress": 98.2,
    "landClearanceArea": "88 ha / 89.6 ha",
    "landClearanceNote": "Mặt bằng thông suốt, các nhà thầu đang tập trung thảm bê tông nhựa mặt đường.",
    "bottlenecks": [
      "Phân luồng giao thông vừa thi công vừa khai thác gặp nhiều áp lực"
    ],
    "milestones": [
      {
        "name": "Khởi công đoạn 1",
        "date": "2022-05-01",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thành thảm thô đoạn qua xã Khoái Châu",
        "date": "2024-08-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Nghiệm thu toàn tuyến",
        "date": "2025-03-31",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 512/QĐ-UBND"
    ],
    "coordinates": [
      20.875,
      106.01
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "512/QĐ-UBND",
      "policyDecisionDate": "2021-08-12",
      "currentStep": "Nghiệm thu hoàn thành phân đoạn 1 và 2",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục đầy đủ."
    },
    "landClearanceStage": {
      "totalArea": 89.6,
      "surveyedArea": 89.6,
      "surveyedPercent": 100,
      "handedOverArea": 88,
      "handedOverPercent": 98.2,
      "compensationPlan": {
        "totalCompensationAmount": 620,
        "paidAmount": 615,
        "paidPercent": 99.2,
        "totalHouseholds": 560,
        "paidHouseholds": 556,
        "unresolvedHouseholds": 4,
        "resettlementArrangement": "Đã hoàn tất 100% tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Còn 1.6ha vuốt dốc chân cầu đang bàn giao nốt mặt bằng sạch.",
      "totalPlots": 1613,
      "surveyedPlots": 1613,
      "handedOverPlots": 1584
    },
    "constructionStage": {
      "constructionProgress": 88,
      "constructionPlanNotes": "Đang thảm bê tông nhựa lớp 2 và lắp đặt hệ thống biển báo, đèn chiếu sáng cao áp.",
      "items": [
        {
          "id": "c3-1",
          "name": "Thảm nhựa Polyme mặt đường đoạn Km0 - Km18",
          "contractor": "Công ty CP Tasco",
          "plannedProgress": 90,
          "actualProgress": 88,
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
      "bottleneckLocation": "Không có điểm nghẽn",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "Sở GTVT",
        "UBND huyện Khoái Châu"
      ],
      "detailedDifficulties": "Lưu lượng xe cao trên tuyến ĐT.379 đòi hỏi phân luồng thi công ban đêm.",
      "proposalsAndRecommendations": "Tập trung nghiệm thu thông xe kỹ thuật trước Tết Nguyên đán.",
      "expediteHistory": []
    },
    "landArea": 89.6,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-4",
    "code": "DA-GT-04",
    "name": "Cầu Hải Hưng và đường dẫn kết nối tỉnh Hưng Yên với tỉnh Hải Dương",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD công trình Giao thông tỉnh",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Quang Hưng, Xã Đình Cao",
    "totalInvestment": 498.5,
    "disbursedAmount": 498.5,
    "progress": 100,
    "status": "HOAN_THANH",
    "currentStage": "HOAN_THANH",
    "startDate": "2022-01-15",
    "finishDate": "2024-05-19",
    "landClearanceProgress": 100,
    "landClearanceArea": "18.5 ha / 18.5 ha",
    "landClearanceNote": "Đã hoàn thành bàn giao 100% và đưa vào khai thác.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Hợp long cầu",
        "date": "2023-11-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Khánh thành thông xe",
        "date": "2024-05-19",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ nghiệm thu đưa vào sử dụng số 341/SXD-GĐ"
    ],
    "coordinates": [
      20.71,
      106.19
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "115/QĐ-UBND",
      "policyDecisionDate": "2021-03-20",
      "currentStep": "Đã quyết toán vốn đầu tư hoàn thành",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Dự án đã quyết toán hoàn chỉnh."
    },
    "landClearanceStage": {
      "totalArea": 18.5,
      "surveyedArea": 18.5,
      "surveyedPercent": 100,
      "handedOverArea": 18.5,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 145,
        "paidAmount": 145,
        "paidPercent": 100,
        "totalHouseholds": 120,
        "paidHouseholds": 120,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã hoàn tất 100% chi trả và tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đã bàn giao 100% diện tích sạch.",
      "totalPlots": 333,
      "surveyedPlots": 333,
      "handedOverPlots": 333
    },
    "constructionStage": {
      "constructionProgress": 100,
      "constructionPlanNotes": "Công trình đã đưa vào khai thác sử dụng an toàn, phát huy hiệu quả cao.",
      "items": [
        {
          "id": "c4-1",
          "name": "Toàn bộ cầu Hải Hưng và đường dẫn 2 đầu cầu",
          "contractor": "Tổng công ty Thăng Long - CTCP",
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
      "delayedStageLabel": "Đã hoàn thành",
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý dự án ĐTXD công trình Giao thông tỉnh",
      "cooperatingDepartments": [],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Đã bàn giao cho Sở GTVT quản lý bảo trì thường xuyên.",
      "expediteHistory": []
    },
    "landArea": 18.5,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-5",
    "code": "DA-GT-05",
    "name": "Đường nối cao tốc Hà Nội - Hải Phòng với đường cao tốc Cầu Giẽ - Ninh Bình (giai đoạn 2)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban QLDA ĐTXD Công trình Giao thông",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Yên Mỹ, Phường Mỹ Hào",
    "totalInvestment": 1420,
    "disbursedAmount": 850,
    "progress": 60,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-03-20",
    "finishDate": "2025-12-31",
    "landClearanceProgress": 91,
    "landClearanceArea": "65 ha / 71.4 ha",
    "landClearanceNote": "Đang giải quyết 15 hộ dân tại nút giao Yên Mỹ.",
    "bottlenecks": [
      "Tranh chấp ranh giới mốc giới với một số hộ dân"
    ],
    "milestones": [
      {
        "name": "Hoàn thành cọc khoan nhồi",
        "date": "2024-01-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Lắp dầm cầu vượt nút giao",
        "date": "2024-11-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 668/QĐ-UBND"
    ],
    "coordinates": [
      20.93,
      106.05
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "668/QĐ-UBND",
      "policyDecisionDate": "2022-09-10",
      "currentStep": "Thi công xây lắp và giải ngân kế hoạch vốn",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục pháp lý hoàn thành."
    },
    "landClearanceStage": {
      "totalArea": 71.4,
      "surveyedArea": 71.4,
      "surveyedPercent": 100,
      "handedOverArea": 65,
      "handedOverPercent": 91,
      "compensationPlan": {
        "totalCompensationAmount": 410,
        "paidAmount": 382,
        "paidPercent": 93.2,
        "totalHouseholds": 380,
        "paidHouseholds": 365,
        "unresolvedHouseholds": 15,
        "resettlementArrangement": "Đã phê duyệt phương án bồi thường, đang hoàn thiện thủ tục giao đất TĐC."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "15 hộ dân tại nút giao Yên Mỹ có kiến nghị về diện tích đất lưu không.",
      "totalPlots": 1285,
      "surveyedPlots": 1285,
      "handedOverPlots": 1169
    },
    "constructionStage": {
      "constructionProgress": 64,
      "constructionPlanNotes": "Đang tổ chức đúc dầm Super-T và thi công nền đường mở rộng làn xe.",
      "items": [
        {
          "id": "c5-1",
          "name": "Gói thầu mở rộng làn xe Km0 - Km12",
          "contractor": "Công ty CP Đầu tư XD & XNK 168 Việt Nam",
          "plannedProgress": 68,
          "actualProgress": 64,
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
      "bottleneckLocation": "Nút giao Yên Mỹ",
      "leadDepartment": "Ban QLDA ĐTXD Công trình Giao thông",
      "cooperatingDepartments": [
        "UBND huyện Yên Mỹ",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Cần xác định chính xác nguồn gốc sử dụng đất qua các thời kỳ.",
      "proposalsAndRecommendations": "Đề nghị UBND huyện Yên Mỹ sớm ban hành quyết định giải quyết khiếu nại của 15 hộ dân.",
      "expediteHistory": []
    },
    "landArea": 71.4,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-6",
    "code": "DA-GT-07",
    "name": "Cải tạo, nâng cấp QL.38 đoạn qua Phường Mỹ Hào và Xã Ân Thi",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Phường Mỹ Hào, Xã Ân Thi",
    "totalInvestment": 890,
    "disbursedAmount": 620,
    "progress": 70,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-04-01",
    "finishDate": "2025-06-30",
    "landClearanceProgress": 95,
    "landClearanceArea": "32 ha / 33.6 ha",
    "landClearanceNote": "Cơ bản sạch mặt bằng.",
    "bottlenecks": [
      "Hệ thống cáp ngầm viễn thông chưa di dời đồng bộ"
    ],
    "milestones": [
      {
        "name": "Khởi công gói 1",
        "date": "2023-05-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Thi công cống hộp thoát nước",
        "date": "2024-03-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 412/QĐ-BGTVT"
    ],
    "coordinates": [
      20.89,
      106.11
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "412/QĐ-BGTVT",
      "policyDecisionDate": "2022-07-15",
      "currentStep": "Thi công thảm bê tông nhựa và rãnh thoát nước dọc tuyến",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục đầy đủ."
    },
    "landClearanceStage": {
      "totalArea": 33.6,
      "surveyedArea": 33.6,
      "surveyedPercent": 100,
      "handedOverArea": 32,
      "handedOverPercent": 95.2,
      "compensationPlan": {
        "totalCompensationAmount": 260,
        "paidAmount": 254,
        "paidPercent": 97.7,
        "totalHouseholds": 310,
        "paidHouseholds": 304,
        "unresolvedHouseholds": 6,
        "resettlementArrangement": "Đã giải quyết xong tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Chỉ còn vướng hạ tầng kỹ thuật cáp quang ngầm của nhà mạng viễn thông.",
      "totalPlots": 605,
      "surveyedPlots": 605,
      "handedOverPlots": 576
    },
    "constructionStage": {
      "constructionProgress": 72,
      "constructionPlanNotes": "Đang triển khai thảm nhựa bán mặt đường để đảm bảo an toàn giao thông.",
      "items": [
        {
          "id": "c6-1",
          "name": "Thi công mặt đường QL.38 và hệ thống ATGT",
          "contractor": "Công ty CP Xây dựng GT Bắc Ninh",
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
      "bottleneckLocation": "Không có điểm nghẽn lớn",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "VNPT Hưng Yên",
        "Viettel Hưng Yên",
        "UBND TX Mỹ Hào"
      ],
      "detailedDifficulties": "Di dời cáp ngầm cần thi công đêm để tránh ngắt kết nối thông tin liên lạc.",
      "proposalsAndRecommendations": "Đôn đốc các doanh nghiệp viễn thông hoàn tất hạ ngầm trong tháng 11/2026.",
      "expediteHistory": []
    },
    "landArea": 33.6,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-7",
    "code": "DA-GT-08",
    "name": "Đường bên đường cao tốc Hà Nội - Hải Phòng qua địa phận Xã Văn Giang",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "UBND Xã Văn Giang",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Văn Giang, Xã Phụng Công",
    "totalInvestment": 670,
    "disbursedAmount": 510,
    "progress": 76,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2022-09-15",
    "finishDate": "2025-04-30",
    "landClearanceProgress": 92,
    "landClearanceArea": "28 ha / 30.4 ha",
    "landClearanceNote": "Đang giải phóng đoạn qua khu chợ nông sản.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Bàn giao mặt bằng đợt 1",
        "date": "2023-02-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 901/QĐ-UBND"
    ],
    "coordinates": [
      20.95,
      105.97
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "901/QĐ-UBND",
      "policyDecisionDate": "2022-04-10",
      "currentStep": "Thi công hoàn thiện nền đường và hệ thống thoát nước",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục hoàn tất."
    },
    "landClearanceStage": {
      "totalArea": 30.4,
      "surveyedArea": 30.4,
      "surveyedPercent": 100,
      "handedOverArea": 28,
      "handedOverPercent": 92.1,
      "compensationPlan": {
        "totalCompensationAmount": 195,
        "paidAmount": 188,
        "paidPercent": 96.4,
        "totalHouseholds": 240,
        "paidHouseholds": 232,
        "unresolvedHouseholds": 8,
        "resettlementArrangement": "Đã bố trí các ki-ốt tạm phục vụ tiểu thương chợ hoa cây cảnh Phụng Công."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang di chuyển tạm thời 8 hộ kinh doanh hoa cây cảnh để hoàn thiện mương thoát nước.",
      "totalPlots": 547,
      "surveyedPlots": 547,
      "handedOverPlots": 504
    },
    "constructionStage": {
      "constructionProgress": 78,
      "constructionPlanNotes": "Khối lượng thi công đạt khá, đảm bảo kết nối liên hoàn các khu dân cư ven đường cao tốc.",
      "items": [
        {
          "id": "c7-1",
          "name": "Xây lắp tuyến đường bên cao tốc",
          "contractor": "Công ty TNHH Đầu tư XD Nam Hà",
          "plannedProgress": 80,
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
      "bottleneckLocation": "Không có vướng mắc lớn",
      "leadDepartment": "UBND huyện Văn Giang",
      "cooperatingDepartments": [
        "UBND xã Phụng Công",
        "Ban QLDA huyện"
      ],
      "detailedDifficulties": "Khu vực đông dân cư trồng cây cảnh hoa tết, cần đảm bảo lối đi tạm cho người dân.",
      "proposalsAndRecommendations": "Tiếp tục tăng ca thi công thảm nhựa mặt đường trước Tết.",
      "expediteHistory": []
    },
    "landArea": 30.4,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-8",
    "code": "DA-GT-09",
    "name": "Đường trục kinh tế kết nối Xã Hiệp Cường với QL.39 và ĐT.376",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "UBND Xã Hiệp Cường",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Hiệp Cường",
    "totalInvestment": 410,
    "disbursedAmount": 390,
    "progress": 95,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2022-11-01",
    "finishDate": "2024-12-31",
    "landClearanceProgress": 100,
    "landClearanceArea": "22 ha / 22 ha",
    "landClearanceNote": "Đã hoàn thành 100% GPMB.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Nghiệm thu kỹ thuật",
        "date": "2024-11-15",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 210/QĐ-UBND"
    ],
    "coordinates": [
      20.73,
      106.03
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "210/QĐ-UBND",
      "policyDecisionDate": "2022-03-22",
      "currentStep": "Lập hồ sơ nghiệm thu hoàn thành công trình",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục chuẩn bị kết thúc."
    },
    "landClearanceStage": {
      "totalArea": 22,
      "surveyedArea": 22,
      "surveyedPercent": 100,
      "handedOverArea": 22,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 95,
        "paidAmount": 95,
        "paidPercent": 100,
        "totalHouseholds": 180,
        "paidHouseholds": 180,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã hoàn thành 100% chi trả bồi thường."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Không còn vướng mắc.",
      "totalPlots": 396,
      "surveyedPlots": 396,
      "handedOverPlots": 396
    },
    "constructionStage": {
      "constructionProgress": 96,
      "constructionPlanNotes": "Hoàn thiện sơn kẻ vạch đường và hệ thống chiếu sáng LED.",
      "items": [
        {
          "id": "c8-1",
          "name": "Nền mặt đường và hệ thống ATGT",
          "contractor": "Công ty CP Xây dựng Đông Đô",
          "plannedProgress": 100,
          "actualProgress": 96,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "UBND huyện Kim Động",
      "cooperatingDepartments": [
        "Sở GTVT"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Tổ chức nghiệm thu bàn giao đưa vào sử dụng trong quý IV/2026.",
      "expediteHistory": []
    },
    "landArea": 22,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-9",
    "code": "DA-GT-10",
    "name": "Tuyến đường bộ kết nối Di sản văn hóa - du lịch Sông Hồng (Giai đoạn 1)",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Mễ Sở, Xã Bình Minh, Phường Phố Hiến",
    "totalInvestment": 3850,
    "disbursedAmount": 1820,
    "progress": 48,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2023-05-15",
    "finishDate": "2027-06-30",
    "landClearanceProgress": 68,
    "landClearanceArea": "78 ha / 114.7 ha",
    "landClearanceNote": "Chậm GPMB tại đoạn qua các đầm sen, vườn quất cảnh và đất bãi bồi ven đê sông Hồng.",
    "bottlenecks": [
      "Xác định nguồn gốc đất bãi bồi ngoài đê phức tạp qua nhiều thời kỳ",
      "Đơn giá đền bù cây ăn quả, cây cảnh đặc sản Mễ Sở chưa nhận được sự đồng thuận cao",
      "Quy hoạch hành lang thoát lũ sông Hồng cần xin ý kiến Bộ Nông nghiệp & PTNT"
    ],
    "milestones": [
      {
        "name": "Khởi công xây dựng",
        "date": "2023-05-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao mặt bằng đợt 1",
        "date": "2023-11-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao 100% mặt bằng",
        "date": "2024-06-30",
        "status": "CHAM"
      }
    ],
    "legalDocs": [
      "QĐ số 1145/QĐ-UBND phê duyệt dự án"
    ],
    "coordinates": [
      20.82,
      105.98
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "1145/QĐ-UBND",
      "policyDecisionDate": "2022-12-05",
      "currentStep": "Thực hiện thủ tục điều chỉnh cục bộ hướng tuyến tránh vùng lõi di tích Đền Đa Hòa",
      "procedureStatus": "DANG_THUC_HIEN",
      "procedureNotes": "Đang hoàn tất văn bản lấy ý kiến Cục Di sản văn hóa - Bộ VHTTDL."
    },
    "landClearanceStage": {
      "totalArea": 114.7,
      "surveyedArea": 105,
      "surveyedPercent": 91.5,
      "handedOverArea": 78,
      "handedOverPercent": 68,
      "compensationPlan": {
        "totalCompensationAmount": 980,
        "paidAmount": 640,
        "paidPercent": 65.3,
        "totalHouseholds": 720,
        "paidHouseholds": 495,
        "unresolvedHouseholds": 225,
        "resettlementArrangement": "Đang triển khai xây dựng khu tái định cư Mễ Sở và Bình Minh, tiến độ hạ tầng đạt 45%."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "225 hộ dân tại xã Mễ Sở và xã Bình Minh chưa nhận tiền bồi thường do kiến nghị mức hỗ trợ đào đắp ao hồ nuôi thủy sản và cây cảnh lâu năm.",
      "totalPlots": 2065,
      "surveyedPlots": 1889,
      "handedOverPlots": 1404
    },
    "constructionStage": {
      "constructionProgress": 42,
      "constructionPlanNotes": "Mới thi công đắp nền cát đoạn mặt bằng sạch xã Mễ Sở; các đoạn còn lại bị ngắt quãng.",
      "items": [
        {
          "id": "c9-1",
          "name": "Gói thầu XL-01: Km0 - Km14",
          "contractor": "Tổng công ty Xây dựng Công trình Giao thông 8",
          "plannedProgress": 60,
          "actualProgress": 42,
          "status": "CHAM_TIEN_DO",
          "note": "Vướng GPMB mặt bằng xôi đỗ"
        }
      ],
      "constructionStatus": "CHAM_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Giải phóng mặt bằng & Đền bù cây cảnh đặc sản",
      "bottleneckLocation": "Đoạn Km5+200 đến Km11+400 qua xã Mễ Sở và xã Bình Minh (vùng chuyên canh cam, quất cảnh)",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "UBND huyện Khoái Châu",
        "Sở Tài nguyên và Môi trường",
        "Sở Nông nghiệp & PTNT"
      ],
      "detailedDifficulties": "Đất bãi ngoài đê có lịch sử giao khoán phức tạp; các hộ dân đầu tư mô hình nông nghiệp sinh thái đòi bồi thường cao gấp 2 lần khung quy định; khu tái định cư chậm tiến độ xây lắp.",
      "proposalsAndRecommendations": "Thành lập Tổ công tác đặc biệt do Giám đốc Sở TN&MT làm Tổ trưởng phối hợp với Thường trực Huyện ủy Khoái Châu trực tiếp kiểm tra từng thửa đất; áp dụng chính sách hỗ trợ chuyển đổi nghề nghiệp tối đa theo thẩm quyền.",
      "expediteHistory": [
        {
          "id": "exp-9-1",
          "date": "2026-08-20",
          "action": "Chỉ thị số 12/CT-UBND",
          "signer": "Chủ tịch UBND tỉnh",
          "content": "Tập trung cao độ tháo gỡ điểm nghẽn GPMB tuyến đường Di sản sông Hồng.",
          "feedbackDeadline": "2026-10-30"
        },
        {
          "id": "exp-9-2",
          "date": "2026-10-10",
          "action": "Biên bản đôn đốc liên ngành số 44/BB-LN",
          "signer": "Tổ trưởng Tổ công tác tỉnh",
          "content": "Giao UBND huyện Khoái Châu phê duyệt phương án bồi thường đợt 3 trước ngày 15/11/2026.",
          "feedbackDeadline": "2026-11-15"
        }
      ]
    },
    "landArea": 114.7,
    "unresolvedIssues": "Giải phóng mặt bằng & Đền bù cây cảnh đặc sản: Đoạn Km5+200 đến Km11+400 qua xã Mễ Sở và xã Bình Minh (vùng chuyên canh cam, quất cảnh)"
  },
  {
    "id": "proj-10",
    "code": "DA-GT-13",
    "name": "Tuyến đường trục kết nối Khu kinh tế ven biển Tiền Hải với Quốc lộ 39",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Tiền Hải, Xã Đông Tiền Hải",
    "totalInvestment": 2150,
    "disbursedAmount": 1420,
    "progress": 66,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-02-20",
    "finishDate": "2026-12-31",
    "landClearanceProgress": 88,
    "landClearanceArea": "52 ha / 59.2 ha",
    "landClearanceNote": "Đang đẩy nhanh tiến độ bàn giao mặt bằng đoạn qua rừng phòng hộ.",
    "bottlenecks": [
      "Thủ tục chuyển đổi mục đích sử dụng đất rừng phòng hộ ven biển"
    ],
    "milestones": [
      {
        "name": "Khởi công gói thầu xây lắp 02",
        "date": "2023-04-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Thông xe đoạn 1 (12km)",
        "date": "2024-09-02",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 1205/QĐ-UBND"
    ],
    "coordinates": [
      20.4,
      106.52
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "1205/QĐ-UBND",
      "policyDecisionDate": "2022-08-30",
      "currentStep": "Đã hoàn thành thủ tục trồng rừng thay thế, đang tiếp tục thi công",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục chuyển mục đích sử dụng rừng đã được Thủ tướng Chính phủ chấp thuận."
    },
    "landClearanceStage": {
      "totalArea": 59.2,
      "surveyedArea": 59.2,
      "surveyedPercent": 100,
      "handedOverArea": 52,
      "handedOverPercent": 88,
      "compensationPlan": {
        "totalCompensationAmount": 380,
        "paidAmount": 350,
        "paidPercent": 92.1,
        "totalHouseholds": 210,
        "paidHouseholds": 198,
        "unresolvedHouseholds": 12,
        "resettlementArrangement": "Đã bố trí 18 lô đất tái định cư tại xã Tiền Hải."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang hoàn tất thủ tục bàn giao 7.2ha đất lâm nghiệp cuối cùng.",
      "totalPlots": 1066,
      "surveyedPlots": 1066,
      "handedOverPlots": 938
    },
    "constructionStage": {
      "constructionProgress": 68,
      "constructionPlanNotes": "Nhà thầu đang tập trung đắp cát nền đường xử lý đất yếu bằng bấc thấm PVD và giếng cát.",
      "items": [
        {
          "id": "c10-1",
          "name": "Gói thầu nền móng và cầu qua sông Tiền Hải",
          "contractor": "Công ty CP Xây dựng Cầu 75",
          "plannedProgress": 72,
          "actualProgress": 68,
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
      "bottleneckLocation": "Không có điểm nghẽn nghiêm trọng",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "Sở Nông nghiệp & PTNT",
        "Chi cục Kiểm lâm"
      ],
      "detailedDifficulties": "Điều kiện địa chất bùn lầy ven biển đòi hỏi thời gian chờ lún nền đường từ 6-8 tháng.",
      "proposalsAndRecommendations": "Tiếp tục quan trắc độ lún chặt chẽ trước khi dỡ tải thảm nhựa.",
      "expediteHistory": []
    },
    "landArea": 59.2,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-11",
    "code": "DA-GT-14",
    "name": "Đường tỉnh ĐT.382B đoạn từ nút giao cao tốc Hà Nội - Hải Phòng đến đường trục Tân Phúc - Võng Phan",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Yên Mỹ, Xã Đồng Than",
    "totalInvestment": 1250,
    "disbursedAmount": 680,
    "progress": 54,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-09-01",
    "finishDate": "2026-06-30",
    "landClearanceProgress": 85,
    "landClearanceArea": "38 ha / 44.7 ha",
    "landClearanceNote": "Đã bàn giao đất nông nghiệp, đang giải quyết đất ở tái định cư.",
    "bottlenecks": [
      "Chậm tiến độ xây dựng hạ tầng khu tái định cư xã Đồng Than"
    ],
    "milestones": [
      {
        "name": "Khởi công xây lắp",
        "date": "2023-09-01",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thành cống hộp khẩu độ lớn",
        "date": "2024-05-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 778/QĐ-UBND"
    ],
    "coordinates": [
      20.9,
      106.07
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "778/QĐ-UBND",
      "policyDecisionDate": "2023-02-15",
      "currentStep": "Triển khai thi công xây lắp",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục đầy đủ."
    },
    "landClearanceStage": {
      "totalArea": 44.7,
      "surveyedArea": 44.7,
      "surveyedPercent": 100,
      "handedOverArea": 38,
      "handedOverPercent": 85,
      "compensationPlan": {
        "totalCompensationAmount": 320,
        "paidAmount": 285,
        "paidPercent": 89.1,
        "totalHouseholds": 260,
        "paidHouseholds": 235,
        "unresolvedHouseholds": 25,
        "resettlementArrangement": "Khu tái định cư Đồng Than quy mô 3.5ha đang thi công san nền."
      },
      "clearanceStatus": "NGUY_CO_CHAM",
      "clearanceNotes": "Nếu khu tái định cư chậm hơn 1 tháng sẽ làm chậm tiến độ bàn giao mặt bằng đợt 2.",
      "totalPlots": 805,
      "surveyedPlots": 805,
      "handedOverPlots": 684
    },
    "constructionStage": {
      "constructionProgress": 56,
      "constructionPlanNotes": "Nhà thầu đang tập trung đắp đất nền đường K95 và cấp phối đá dăm.",
      "items": [
        {
          "id": "c11-1",
          "name": "Xây lắp tuyến đường ĐT.382B",
          "contractor": "Công ty TNHH MTV Xây dựng 28",
          "plannedProgress": 60,
          "actualProgress": 56,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "NGUY_CO_CHAM",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Nguy cơ chậm do hạ tầng tái định cư",
      "bottleneckLocation": "Khu tái định cư xã Đồng Than (25 hộ dân)",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình giao thông tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "UBND huyện Yên Mỹ",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Nhà thầu thi công khu tái định cư thi công cầm chừng do vướng mắc mặt bằng thoát nước tạm.",
      "proposalsAndRecommendations": "UBND huyện Yên Mỹ tăng cường đôn đốc nhà thầu hạ tầng tái định cư hoàn thành trước 15/12/2026.",
      "expediteHistory": [
        {
          "id": "exp-11-1",
          "date": "2026-10-05",
          "action": "Công văn nhắc nhở số 312/SXD",
          "signer": "Phó Giám đốc Sở Xây dựng",
          "content": "Yêu cầu báo cáo tiến độ tuần dự án ĐT.382B.",
          "feedbackDeadline": "2026-10-20"
        }
      ]
    },
    "landArea": 44.7,
    "unresolvedIssues": "Nguy cơ chậm do hạ tầng tái định cư: Khu tái định cư xã Đồng Than (25 hộ dân)"
  },
  {
    "id": "proj-12",
    "code": "DA-GT-15",
    "name": "Cải tạo nâng cấp tuyến đường ĐT.376 đoạn qua huyện Khoái Châu và Ân Thi",
    "sector": "GIAO_THONG",
    "capitalSource": "NSNN",
    "investor": "Ban QLDA ĐTXD Công trình Giao thông",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Khoái Châu, Xã Ân Thi",
    "totalInvestment": 580,
    "disbursedAmount": 430,
    "progress": 78,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-01-15",
    "finishDate": "2025-08-30",
    "landClearanceProgress": 96,
    "landClearanceArea": "25 ha / 26 ha",
    "landClearanceNote": "Mặt bằng cơ bản thông suốt.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Nghiệm thu gói thầu 01",
        "date": "2024-06-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 389/QĐ-UBND"
    ],
    "coordinates": [
      20.84,
      106.08
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "389/QĐ-UBND",
      "policyDecisionDate": "2022-06-10",
      "currentStep": "Thi công thảm bê tông nhựa mặt đường",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục hoàn tất."
    },
    "landClearanceStage": {
      "totalArea": 26,
      "surveyedArea": 26,
      "surveyedPercent": 100,
      "handedOverArea": 25,
      "handedOverPercent": 96.2,
      "compensationPlan": {
        "totalCompensationAmount": 180,
        "paidAmount": 176,
        "paidPercent": 97.8,
        "totalHouseholds": 210,
        "paidHouseholds": 206,
        "unresolvedHouseholds": 4,
        "resettlementArrangement": "Đã hoàn tất tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đang tháo dỡ nốt tường rào của 4 hộ dân.",
      "totalPlots": 468,
      "surveyedPlots": 468,
      "handedOverPlots": 450
    },
    "constructionStage": {
      "constructionProgress": 80,
      "constructionPlanNotes": "Đang triển khai lu lèn thảm nhựa hạt trung và lắp rãnh thoát nước bê tông đúc sẵn.",
      "items": [
        {
          "id": "c12-1",
          "name": "Cải tạo mặt đường và thoát nước ĐT.376",
          "contractor": "Công ty CP Xây dựng Giao thông Hưng Yên",
          "plannedProgress": 82,
          "actualProgress": 80,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban QLDA ĐTXD Công trình Giao thông",
      "cooperatingDepartments": [
        "UBND huyện Khoái Châu"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Đảm bảo thông xe phục vụ người dân trước mùa mưa bão.",
      "expediteHistory": []
    },
    "landArea": 26,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-13",
    "code": "DA-XD-01",
    "name": "Bệnh viện Đa khoa tỉnh Hưng Yên cơ sở mới quy mô 1.200 giường bệnh",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Y tế",
    "district": "Phường Phố Hiến, Xã Bảo Khê",
    "totalInvestment": 2650,
    "disbursedAmount": 1480,
    "progress": 58,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-02-15",
    "finishDate": "2026-10-31",
    "landClearanceProgress": 100,
    "landClearanceArea": "14.5 ha / 14.5 ha",
    "landClearanceNote": "Đã hoàn thành 100% GPMB từ tháng 10/2023.",
    "bottlenecks": [
      "Thủ tục phê duyệt thiết kế hệ thống PCCC và thiết bị y tế chuyên sâu"
    ],
    "milestones": [
      {
        "name": "Cất nóc khối nhà nội trú 12 tầng",
        "date": "2024-07-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Lắp đặt hệ thống khí y tế trung tâm",
        "date": "2025-03-30",
        "status": "DANG_LAM"
      },
      {
        "name": "Nghiệm thu đưa vào vận hành",
        "date": "2026-10-31",
        "status": "CHUA_DEN"
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
      "currentStep": "Thẩm định hồ sơ thiết kế điều chỉnh hệ thống PCCC theo QCVN 06:2022/BXD",
      "procedureStatus": "VUONG_MAC",
      "procedureNotes": "Đang làm việc với Cục Cảnh sát PCCC và CNCH (Bộ Công an) để thẩm duyệt thiết kế PCCC chuyên khoa.",
      "procedures": [
        {
          "id": "proc-1",
          "order": 1,
          "name": "Thủ tục 1: Các thủ tục về đầu tư, doanh nghiệp, góp vốn",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "31/08/2027",
          "completedDate": "27/07/2026",
          "taskCount": 2,
          "updatedTaskCount": 2,
          "completedTaskCount": 2,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Kế hoạch và Đầu tư",
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t1-1",
              "name": "Đăng ký thành lập doanh nghiệp dự án / Chi nhánh điều hành",
              "deadline": "30/06/2026",
              "completedDate": "20/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT"
              ]
            },
            {
              "id": "t1-2",
              "name": "Thủ tục chấp thuận chủ trương đầu tư và cấp Giấy chứng nhận ĐKĐT",
              "deadline": "31/08/2027",
              "completedDate": "27/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT",
                "Sở Tài chính"
              ]
            }
          ]
        },
        {
          "id": "proc-2",
          "order": 2,
          "name": "Thủ tục 2: Quy hoạch, khảo sát, chuẩn bị dự án",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "15/06/2027",
          "completedDate": "11/07/2026",
          "taskCount": 5,
          "updatedTaskCount": 5,
          "completedTaskCount": 5,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Xây dựng",
            "Sở Tài chính",
            "UBND cấp xã/phường"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t2-1",
              "name": "Lập, thẩm định và phê duyệt nhiệm vụ quy hoạch chi tiết 1/500",
              "deadline": "15/02/2026",
              "completedDate": "10/02/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-2",
              "name": "Khảo sát địa hình, địa chất phục vụ lập dự án đầu tư",
              "deadline": "30/04/2026",
              "completedDate": "25/04/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-3",
              "name": "Lấy ý kiến cộng đồng dân cư về đồ án quy hoạch",
              "deadline": "30/05/2026",
              "completedDate": "28/05/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "UBND xã/phường"
              ]
            },
            {
              "id": "t2-4",
              "name": "Phê duyệt đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500",
              "deadline": "15/06/2027",
              "completedDate": "11/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-5",
              "name": "Lập Báo cáo nghiên cứu khả thi (BCNCKT) dự án ĐTXD",
              "deadline": "30/07/2026",
              "completedDate": "29/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        },
        {
          "id": "proc-3",
          "order": 3,
          "name": "Thủ tục 3: Môi trường, rừng, tài nguyên",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "30/04/2027",
          "completedDate": "12/07/2026",
          "taskCount": 1,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Tài nguyên và Môi trường",
            "Sở Nông nghiệp và PTNT"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t3-1",
              "name": "Lập Báo cáo đánh giá tác động môi trường (ĐTM) và thẩm định phê duyệt",
              "deadline": "30/04/2027",
              "completedDate": "12/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở TN&MT"
              ]
            }
          ]
        },
        {
          "id": "proc-4",
          "order": 4,
          "name": "Thủ tục 4: Đất đai, GPMB, mặt bằng",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "31/10/2027",
          "taskCount": 5,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "UBND cấp huyện / Trung tâm Phát triển quỹ đất",
          "coDepts": [
            "Sở Tài nguyên và Môi trường",
            "Sở Tài chính",
            "UBND xã/phường"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t4-1",
              "name": "Ban hành thông báo thu hồi đất phục vụ dự án",
              "deadline": "30/05/2026",
              "completedDate": "25/05/2026",
              "status": "HOAN_THANH",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-2",
              "name": "Thực hiện điều tra, khảo sát, đo đạc, kiểm đếm đất đai tài sản",
              "deadline": "30/09/2026",
              "status": "CON_HAN",
              "leadDept": "Trung tâm PTQĐ",
              "coDepts": [
                "UBND xã/phường"
              ]
            },
            {
              "id": "t4-3",
              "name": "Lập và phê duyệt phương án bồi thường, hỗ trợ, tái định cư",
              "deadline": "31/12/2026",
              "status": "CON_HAN",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở Tài chính",
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-4",
              "name": "Hoàn thành hồ sơ, thủ tục thu hồi đất, bồi thường, hỗ trợ, tái định cư/GPMB (nếu Nhà nước thu hồi đất)",
              "deadline": "31/05/2027",
              "status": "CON_HAN",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-5",
              "name": "Bàn giao đất sạch trên thực địa và cấp Giấy chứng nhận quyền sử dụng đất",
              "deadline": "31/10/2027",
              "status": "CON_HAN",
              "leadDept": "Sở TN&MT",
              "coDepts": [
                "UBND huyện"
              ]
            }
          ]
        },
        {
          "id": "proc-5",
          "order": 5,
          "name": "Thủ tục 5: Thiết kế, xây dựng, PCCC, đấu nối",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "30/11/2027",
          "taskCount": 6,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Xây dựng",
            "Công an tỉnh (Phòng Cảnh sát PCCC)",
            "Công ty Điện lực"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t5-1",
              "name": "Thỏa thuận đấu nối cấp điện, cấp thoát nước và giao thông",
              "deadline": "30/06/2026",
              "completedDate": "20/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Điện lực",
                "Sở GTVT"
              ]
            },
            {
              "id": "t5-2",
              "name": "Thẩm duyệt thiết kế phòng cháy và chữa cháy (PCCC)",
              "deadline": "30/11/2026",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Công an tỉnh"
              ]
            },
            {
              "id": "t5-3",
              "name": "Thẩm định thiết kế bản vẽ thi công và dự toán xây dựng",
              "deadline": "28/02/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t5-4",
              "name": "Cấp Giấy phép xây dựng công trình",
              "deadline": "30/04/2027",
              "status": "CON_HAN",
              "leadDept": "Sở Xây dựng",
              "coDepts": [
                "Chủ đầu tư"
              ]
            },
            {
              "id": "t5-5",
              "name": "Đấu thầu lựa chọn nhà thầu xây lắp",
              "deadline": "31/07/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT"
              ]
            },
            {
              "id": "t5-6",
              "name": "Thông báo khởi công xây dựng công trình",
              "deadline": "30/11/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        }
      ]
    },
    "landClearanceStage": {
      "totalArea": 14.5,
      "surveyedArea": 14.5,
      "surveyedPercent": 100,
      "handedOverArea": 14.5,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 185,
        "paidAmount": 185,
        "paidPercent": 100,
        "totalHouseholds": 95,
        "paidHouseholds": 95,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã hoàn tất 100% bồi thường và giao đất sạch."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đã có mặt bằng sạch 100% từ giai đoạn khởi công.",
      "totalPlots": 261,
      "surveyedPlots": 261,
      "handedOverPlots": 261
    },
    "constructionStage": {
      "constructionProgress": 60,
      "constructionPlanNotes": "Khối nhà chính 12 tầng đã cất nóc, đang hoàn thiện trát ngoài, ốp lát và lắp đặt đường ống điều hòa.",
      "items": [
        {
          "id": "c13-1",
          "name": "Khối nhà điều trị nội trú 12 tầng",
          "contractor": "Tổng công ty 789 - Binh đoàn 11",
          "plannedProgress": 65,
          "actualProgress": 62,
          "status": "DUNG_TIEN_DO"
        },
        {
          "id": "c13-2",
          "name": "Khối nhà khám bệnh và cấp cứu 5 tầng",
          "contractor": "Công ty CP Đầu tư & Phát triển nhà Hà Nội 22",
          "plannedProgress": 70,
          "actualProgress": 68,
          "status": "DUNG_TIEN_DO"
        },
        {
          "id": "c13-3",
          "name": "Gói thầu thiết bị cơ điện MEP & Khí y tế",
          "contractor": "Liên danh MEP Y tế Việt Nhật",
          "plannedProgress": 45,
          "actualProgress": 35,
          "status": "CHAM_TIEN_DO",
          "note": "Chờ thẩm duyệt PCCC"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "NGUY_CO_CHAM",
      "delayedStage": "THU_TUC_DAU_TU",
      "delayedStageLabel": "Vướng mắc thủ tục thẩm định PCCC thiết bị y tế",
      "bottleneckLocation": "Khối nhà cấp cứu và khu phòng mổ áp lực âm (hạng mục kỹ thuật PCCC)",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Y tế",
        "Công an tỉnh Hưng Yên (Phòng Cảnh sát PCCC)",
        "Sở Xây dựng"
      ],
      "detailedDifficulties": "Quy chuẩn kỹ thuật quốc gia về PCCC mới ban hành yêu cầu vật liệu chống cháy đặc chủng cho bệnh viện cao tầng; thủ tục thẩm duyệt thiết kế cấp Cục mất nhiều thời gian.",
      "proposalsAndRecommendations": "Đề nghị UBND tỉnh có văn bản gửi Cục Cảnh sát PCCC & CNCH hỗ trợ thẩm duyệt nhanh; Sở Xây dựng hướng dẫn chủ đầu tư hoàn thiện hồ sơ dự toán bổ sung.",
      "expediteHistory": [
        {
          "id": "exp-13-1",
          "date": "2026-09-28",
          "action": "Công văn tháo gỡ số 519/UBND-VX",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Chỉ đạo Ban QLDA làm việc trực tiếp với Cục PCCC hoàn thành thẩm duyệt trước 30/10/2026.",
          "feedbackDeadline": "2026-10-30"
        }
      ]
    },
    "landArea": 14.5,
    "unresolvedIssues": "Vướng mắc thủ tục thẩm định PCCC thiết bị y tế: Khối nhà cấp cứu và khu phòng mổ áp lực âm (hạng mục kỹ thuật PCCC)"
  },
  {
    "id": "proj-14",
    "code": "DA-XD-02",
    "name": "Bệnh viện Sản Nhi tỉnh Hưng Yên (giai đoạn 2 - hoàn thiện khối điều trị kỹ thuật cao)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Y tế",
    "district": "Phường Phố Hiến, Phường Lam Sơn",
    "totalInvestment": 820,
    "disbursedAmount": 650,
    "progress": 82,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2022-08-01",
    "finishDate": "2025-06-30",
    "landClearanceProgress": 100,
    "landClearanceArea": "6.2 ha / 6.2 ha",
    "landClearanceNote": "100% mặt bằng sạch.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Cất nóc khối kỹ thuật",
        "date": "2024-03-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Lắp đặt thang máy bệnh viện",
        "date": "2024-10-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 672/QĐ-UBND"
    ],
    "coordinates": [
      20.665,
      106.055
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "672/QĐ-UBND",
      "policyDecisionDate": "2022-03-15",
      "currentStep": "Lắp đặt thiết bị chuyên dùng và hoàn thiện nội thất",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục đầy đủ."
    },
    "landClearanceStage": {
      "totalArea": 6.2,
      "surveyedArea": 6.2,
      "surveyedPercent": 100,
      "handedOverArea": 6.2,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 78,
        "paidAmount": 78,
        "paidPercent": 100,
        "totalHouseholds": 42,
        "paidHouseholds": 42,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã hoàn tất 100%."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Không có vướng mắc.",
      "totalPlots": 112,
      "surveyedPlots": 112,
      "handedOverPlots": 112
    },
    "constructionStage": {
      "constructionProgress": 84,
      "constructionPlanNotes": "Đang lắp đặt hệ thống lọc không khí phòng mổ vô trùng và sơn hoàn thiện.",
      "items": [
        {
          "id": "c14-1",
          "name": "Xây dựng khối nhà điều trị kỹ thuật cao 9 tầng",
          "contractor": "Công ty CP Xây dựng số 1 Hà Nội",
          "plannedProgress": 85,
          "actualProgress": 84,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Y tế"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Đưa vào sử dụng đúng dịp kỷ niệm ngày giải phóng tỉnh.",
      "expediteHistory": []
    },
    "landArea": 6.2,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-15",
    "code": "DA-XD-03",
    "name": "Xây dựng Trường THPT Chuyên Hưng Yên tại địa điểm mới",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Giáo dục và Đào tạo",
    "district": "Phường Phố Hiến, Xã Trung Nghĩa",
    "totalInvestment": 590,
    "disbursedAmount": 480,
    "progress": 88,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-03-01",
    "finishDate": "2025-05-30",
    "landClearanceProgress": 100,
    "landClearanceArea": "8.0 ha / 8.0 ha",
    "landClearanceNote": "Đã hoàn thành 100% GPMB.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Cất nóc khối nhà hiệu bộ và lớp học",
        "date": "2024-05-19",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thành nhà thi đấu đa năng",
        "date": "2024-11-20",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 450/QĐ-UBND"
    ],
    "coordinates": [
      20.655,
      106.07
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "450/QĐ-UBND",
      "policyDecisionDate": "2022-09-05",
      "currentStep": "Lắp đặt bàn ghế, trang thiết bị phòng thí nghiệm STEM và ký túc xá",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục đầy đủ."
    },
    "landClearanceStage": {
      "totalArea": 8,
      "surveyedArea": 8,
      "surveyedPercent": 100,
      "handedOverArea": 8,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 85,
        "paidAmount": 85,
        "paidPercent": 100,
        "totalHouseholds": 65,
        "paidHouseholds": 65,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã chi trả 100%."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Không có vướng mắc.",
      "totalPlots": 144,
      "surveyedPlots": 144,
      "handedOverPlots": 144
    },
    "constructionStage": {
      "constructionProgress": 90,
      "constructionPlanNotes": "Khối nhà hiệu bộ, giảng đường 4 tầng, ký túc xá học sinh và bể bơi tiêu chuẩn đã cơ bản hoàn thành.",
      "items": [
        {
          "id": "c15-1",
          "name": "Khu giảng đường, nhà đa năng và cảnh quan sân trường",
          "contractor": "Công ty TNHH MTV Xây dựng 319",
          "plannedProgress": 90,
          "actualProgress": 90,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở GD&ĐT"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Sẵn sàng đưa vào giảng dạy cho năm học mới 2026-2027.",
      "expediteHistory": []
    },
    "landArea": 8,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-16",
    "code": "DA-XD-04",
    "name": "Trung tâm Hội nghị và Triển lãm tỉnh Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Phường Phố Hiến",
    "totalInvestment": 750,
    "disbursedAmount": 390,
    "progress": 52,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-10-10",
    "finishDate": "2026-08-30",
    "landClearanceProgress": 100,
    "landClearanceArea": "5.5 ha / 5.5 ha",
    "landClearanceNote": "100% mặt bằng sạch.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Xong phần móng và tầng hầm",
        "date": "2024-04-30",
        "status": "HOAN_THANH"
      },
      {
        "name": "Lắp đặt kết cấu mái vòm thép khẩu độ lớn",
        "date": "2025-01-20",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 815/QĐ-UBND"
    ],
    "coordinates": [
      20.66,
      106.05
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "815/QĐ-UBND",
      "policyDecisionDate": "2023-04-12",
      "currentStep": "Gia công kết cấu thép vòm không gian",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục pháp lý hoàn chỉnh."
    },
    "landClearanceStage": {
      "totalArea": 5.5,
      "surveyedArea": 5.5,
      "surveyedPercent": 100,
      "handedOverArea": 5.5,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 65,
        "paidAmount": 65,
        "paidPercent": 100,
        "totalHouseholds": 35,
        "paidHouseholds": 35,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đất sạch công hữu 100%.",
      "totalPlots": 99,
      "surveyedPlots": 99,
      "handedOverPlots": 99
    },
    "constructionStage": {
      "constructionProgress": 55,
      "constructionPlanNotes": "Đang thi công khung vách hội trường chính 1.500 chỗ ngồi và 6 phòng hội thảo chuyên đề.",
      "items": [
        {
          "id": "c16-1",
          "name": "Xây dựng hội trường và cảnh quan quảng trường ngoài trời",
          "contractor": "Tổng công ty Xây dựng Bạch Đằng",
          "plannedProgress": 55,
          "actualProgress": 55,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Văn phòng UBND tỉnh"
      ],
      "detailedDifficulties": "Vận chuyển cấu kiện dầm thép siêu trường siêu trọng trong nội thành.",
      "proposalsAndRecommendations": "Phối hợp Công an thành phố phân luồng xe vận tải chuyên dụng vào ban đêm.",
      "expediteHistory": []
    },
    "landArea": 5.5,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-17",
    "code": "DA-XD-05",
    "name": "Khu liên cơ quan hành chính tỉnh Hưng Yên (Trụ sở làm việc tập trung)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
    "managingDept": "Sở Xây dựng",
    "district": "Phường Phố Hiến",
    "totalInvestment": 1850,
    "disbursedAmount": 720,
    "progress": 40,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2024-01-10",
    "finishDate": "2027-03-31",
    "landClearanceProgress": 100,
    "landClearanceArea": "9.2 ha / 9.2 ha",
    "landClearanceNote": "Khu đất thu hồi từ cơ sở cũ đã giải phóng xong.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Xong đài móng và 2 tầng hầm đỗ xe",
        "date": "2024-09-30",
        "status": "HOAN_THANH"
      },
      {
        "name": "Thi công thân tòa tháp A và B (18 tầng)",
        "date": "2025-08-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 1350/QĐ-UBND"
    ],
    "coordinates": [
      20.663,
      106.052
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "1350/QĐ-UBND",
      "policyDecisionDate": "2023-06-28",
      "currentStep": "Thi công kết cấu bê tông cốt thép thân công trình",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục hoàn thiện."
    },
    "landClearanceStage": {
      "totalArea": 9.2,
      "surveyedArea": 9.2,
      "surveyedPercent": 100,
      "handedOverArea": 9.2,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 110,
        "paidAmount": 110,
        "paidPercent": 100,
        "totalHouseholds": 48,
        "paidHouseholds": 48,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đã bàn giao mặt bằng đầy đủ.",
      "totalPlots": 166,
      "surveyedPlots": 166,
      "handedOverPlots": 166
    },
    "constructionStage": {
      "constructionProgress": 42,
      "constructionPlanNotes": "Đang thi công sàn tầng 6 tháp đôi và trung tâm tích hợp dữ liệu dùng chung (Data Center).",
      "items": [
        {
          "id": "c17-1",
          "name": "Thi công khối nhà đôi 18 tầng liên cơ quan",
          "contractor": "Tổng công ty Đầu tư Phát triển Hạ tầng Đô thị UDIC",
          "plannedProgress": 45,
          "actualProgress": 42,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý dự án ĐTXD các công trình dân dụng và công nghiệp tỉnh",
      "cooperatingDepartments": [
        "Sở Nội vụ",
        "Sở KH&CN"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Tiếp tục duy trì tiến độ xây dựng hiện đại, thông minh theo tiêu chuẩn tòa nhà xanh.",
      "expediteHistory": []
    },
    "landArea": 9.2,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-18",
    "code": "DA-NL-01",
    "name": "Cải tạo nâng cấp hệ thống đê tả sông Hồng kết hợp đường giao thông cứu hộ cứu nạn",
    "sector": "NONG_NGHIEP",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD công trình Nông nghiệp & PTNT tỉnh",
    "managingDept": "Sở Nông nghiệp & Phát triển Nông thôn",
    "district": "Xã Văn Giang, Xã Khoái Châu, Xã Tiên Lữ",
    "totalInvestment": 1350,
    "disbursedAmount": 890,
    "progress": 72,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-01-20",
    "finishDate": "2025-12-31",
    "landClearanceProgress": 94,
    "landClearanceArea": "62 ha / 66 ha",
    "landClearanceNote": "Đã xử lý 45 trường hợp vi phạm lấn chiếm hành lang thoát lũ đê điều.",
    "bottlenecks": [
      "Tập kết vật liệu bãi sông vi phạm Luật Đê điều cần di dời"
    ],
    "milestones": [
      {
        "name": "Hoàn thành đắp tôn áp trúc mở rộng mặt đê 12m",
        "date": "2024-04-30",
        "status": "HOAN_THANH"
      },
      {
        "name": "Xử lý mạch đùn mạch sủi 3 đoạn xung yếu",
        "date": "2024-10-15",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 540/QĐ-BNN-ĐĐ",
      "QĐ số 808/QĐ-UBND"
    ],
    "coordinates": [
      20.76,
      105.99
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "540/QĐ-BNN-ĐĐ",
      "policyDecisionDate": "2022-05-18",
      "currentStep": "Nghiệm thu khối lượng thảm bê tông mặt đê",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục đầy đủ."
    },
    "landClearanceStage": {
      "totalArea": 66,
      "surveyedArea": 66,
      "surveyedPercent": 100,
      "handedOverArea": 62,
      "handedOverPercent": 93.9,
      "compensationPlan": {
        "totalCompensationAmount": 220,
        "paidAmount": 205,
        "paidPercent": 93.2,
        "totalHouseholds": 190,
        "paidHouseholds": 178,
        "unresolvedHouseholds": 12,
        "resettlementArrangement": "Đã giải tỏa các công trình tạm vi phạm hành lang đê điều."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Còn 12 bãi chứa cát sỏi trái phép ngoài bãi sông đang yêu cầu tự giải tỏa trước 30/11/2026.",
      "totalPlots": 1188,
      "surveyedPlots": 1188,
      "handedOverPlots": 1116
    },
    "constructionStage": {
      "constructionProgress": 75,
      "constructionPlanNotes": "Đang triển khai thảm bê tông nhựa mặt đê và xây tường chắn sóng bê tông cốt thép.",
      "items": [
        {
          "id": "c18-1",
          "name": "Cứng hóa mặt đê và kè chống sạt lở bờ sông",
          "contractor": "Công ty CP Đầu tư & Xây dựng Thủy lợi Hưng Yên",
          "plannedProgress": 75,
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
      "bottleneckLocation": "Bãi sông xã Khoái Châu",
      "leadDepartment": "Ban Quản lý dự án ĐTXD công trình Nông nghiệp & PTNT tỉnh",
      "cooperatingDepartments": [
        "Chi cục Đê điều & PCTT",
        "UBND huyện Khoái Châu"
      ],
      "detailedDifficulties": "Cần kiên quyết xử lý bến bãi không phép để hoàn thiện dốc lên đê.",
      "proposalsAndRecommendations": "UBND huyện Khoái Châu tổ chức cưỡng chế di dời vật liệu nếu chủ bến bãi cố tình chây ì.",
      "expediteHistory": []
    },
    "landArea": 66,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-19",
    "code": "DA-NL-02",
    "name": "Xây dựng mới Trạm bơm tiêu úng Triều Dương và nạo vét kênh trục dẫn nước",
    "sector": "NONG_NGHIEP",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD công trình Nông nghiệp & PTNT tỉnh",
    "managingDept": "Sở Nông nghiệp & Phát triển Nông thôn",
    "district": "Xã Tiên Lữ, Xã Quang Hưng",
    "totalInvestment": 720,
    "disbursedAmount": 510,
    "progress": 75,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-04-15",
    "finishDate": "2025-10-30",
    "landClearanceProgress": 98,
    "landClearanceArea": "32 ha / 32.6 ha",
    "landClearanceNote": "Cơ bản thông thoáng dòng chảy.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Xong bể hút và nhà trạm bơm 8 tổ máy",
        "date": "2024-06-30",
        "status": "HOAN_THANH"
      },
      {
        "name": "Lắp đặt tổ máy bơm công suất lớn 32.000 m3/h",
        "date": "2024-12-15",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 695/QĐ-UBND"
    ],
    "coordinates": [
      20.69,
      106.15
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "695/QĐ-UBND",
      "policyDecisionDate": "2022-10-18",
      "currentStep": "Lắp đặt động cơ điện và cửa van xả tự động",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục hoàn thành."
    },
    "landClearanceStage": {
      "totalArea": 32.6,
      "surveyedArea": 32.6,
      "surveyedPercent": 100,
      "handedOverArea": 32,
      "handedOverPercent": 98.2,
      "compensationPlan": {
        "totalCompensationAmount": 95,
        "paidAmount": 93,
        "paidPercent": 97.9,
        "totalHouseholds": 110,
        "paidHouseholds": 108,
        "unresolvedHouseholds": 2,
        "resettlementArrangement": "Đã hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Không còn vướng mắc.",
      "totalPlots": 587,
      "surveyedPlots": 587,
      "handedOverPlots": 576
    },
    "constructionStage": {
      "constructionProgress": 78,
      "constructionPlanNotes": "Khối nhà trạm bơm đã lắp đặt xong cần trục gian máy, chuẩn bị thả rotor động cơ.",
      "items": [
        {
          "id": "c19-1",
          "name": "Nhà trạm bơm, bể xả và kênh xả qua đê",
          "contractor": "Tổng công ty Cơ điện Xây dựng Nông nghiệp (Agrimeco)",
          "plannedProgress": 80,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý dự án ĐTXD công trình Nông nghiệp & PTNT tỉnh",
      "cooperatingDepartments": [
        "Công ty TNHH MTV Khai thác CTTL Nam Hưng Yên"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Chạy thử nghiệm tải đơn và tải liên động trước mùa bão lũ năm tới.",
      "expediteHistory": []
    },
    "landArea": 32.6,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-20",
    "code": "DA-NL-03",
    "name": "Trạm bơm tiêu úng Ngũ Lão và nạo vét hệ thống sông Cửu An chống ngập úng nông nghiệp",
    "sector": "NONG_NGHIEP",
    "capitalSource": "NSNN",
    "investor": "Ban Quản lý dự án ĐTXD công trình Nông nghiệp & PTNT tỉnh",
    "managingDept": "Sở Nông nghiệp & Phát triển Nông thôn",
    "district": "Xã Kim Động, Xã Ân Thi",
    "totalInvestment": 610,
    "disbursedAmount": 430,
    "progress": 70,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-06-01",
    "finishDate": "2025-11-30",
    "landClearanceProgress": 95,
    "landClearanceArea": "28 ha / 29.5 ha",
    "landClearanceNote": "Mặt bằng thi công kênh dẫn thuận lợi.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Xong nạo vét 15km lòng sông Cửu An",
        "date": "2024-05-20",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 430/QĐ-UBND"
    ],
    "coordinates": [
      20.75,
      106.09
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "430/QĐ-UBND",
      "policyDecisionDate": "2023-01-10",
      "currentStep": "Thi công cống qua đê và lắp máy biến áp",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục đầy đủ."
    },
    "landClearanceStage": {
      "totalArea": 29.5,
      "surveyedArea": 29.5,
      "surveyedPercent": 100,
      "handedOverArea": 28,
      "handedOverPercent": 94.9,
      "compensationPlan": {
        "totalCompensationAmount": 76,
        "paidAmount": 73,
        "paidPercent": 96.1,
        "totalHouseholds": 85,
        "paidHouseholds": 82,
        "unresolvedHouseholds": 3,
        "resettlementArrangement": "Đã hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Không có vướng mắc.",
      "totalPlots": 531,
      "surveyedPlots": 531,
      "handedOverPlots": 504
    },
    "constructionStage": {
      "constructionProgress": 72,
      "constructionPlanNotes": "Thi công cống xả tiêu ngầm qua đê sông Cửu An đảm bảo chống rò rỉ.",
      "items": [
        {
          "id": "c20-1",
          "name": "Nhà trạm và nạo vét lòng dẫn tiêu",
          "contractor": "Công ty CP Đầu tư & Xây dựng Thủy lợi Hưng Yên",
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý dự án ĐTXD công trình Nông nghiệp & PTNT tỉnh",
      "cooperatingDepartments": [
        "UBND huyện Kim Động"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Đưa vào trực chiến tiêu úng bảo vệ lúa vụ chiêm xuân.",
      "expediteHistory": []
    },
    "landArea": 29.5,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-21",
    "code": "DA-DN-01",
    "name": "Khu công nghiệp Thăng Long II (Giai đoạn 3 mở rộng 180,5 ha)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty TNHH KCN Thăng Long II (Tập đoàn Sumitomo Nhật Bản)",
    "managingDept": "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
    "district": "Xã Yên Mỹ, Phường Mỹ Hào",
    "totalInvestment": 3200,
    "disbursedAmount": 2650,
    "progress": 82,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2022-11-15",
    "finishDate": "2025-12-31",
    "landClearanceProgress": 97.5,
    "landClearanceArea": "176 ha / 180.5 ha",
    "landClearanceNote": "Mặt bằng cơ bản hoàn thành, đã có 12 nhà đầu tư Nhật Bản đăng ký thuê đất sạch.",
    "bottlenecks": [
      "Thủ tục cấp phép trạm biến áp 110kV cấp nguồn cho các nhà máy công nghệ bán dẫn"
    ],
    "milestones": [
      {
        "name": "Khởi công hạ tầng kỹ thuật Giai đoạn 3",
        "date": "2022-11-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thành Nhà máy xử lý nước thải 6.000 m3/ngày",
        "date": "2024-03-30",
        "status": "HOAN_THANH"
      },
      {
        "name": "Lấp đầy 80% diện tích cho thuê",
        "date": "2025-12-31",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 1819/QĐ-TTg phê duyệt chủ trương",
      "Giấy CNĐKĐT số 281/BQLKCN"
    ],
    "coordinates": [
      20.91,
      106.08
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "1819/QĐ-TTg",
      "policyDecisionDate": "2021-12-28",
      "currentStep": "Thẩm định hồ sơ môi trường và PCCC cho các nhà đầu tư thứ cấp",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Dự án trọng điểm FDI Nhật Bản, thủ tục chấp thuận chủ trương đầu tư đã hoàn tất."
    },
    "landClearanceStage": {
      "totalArea": 180.5,
      "surveyedArea": 180.5,
      "surveyedPercent": 100,
      "handedOverArea": 176,
      "handedOverPercent": 97.5,
      "compensationPlan": {
        "totalCompensationAmount": 720,
        "paidAmount": 705,
        "paidPercent": 97.9,
        "totalHouseholds": 620,
        "paidHouseholds": 608,
        "unresolvedHouseholds": 12,
        "resettlementArrangement": "Đã hoàn thành 100% tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Chỉ còn 4.5ha đất nghĩa trang đang di dời nốt phần mộ cuối cùng.",
      "totalPlots": 3249,
      "surveyedPlots": 3249,
      "handedOverPlots": 3168
    },
    "constructionStage": {
      "constructionProgress": 85,
      "constructionPlanNotes": "Hạ tầng giao thông nội bộ, cấp thoát nước và trạm xử lý nước thải đã đưa vào vận hành phân khu A.",
      "items": [
        {
          "id": "c21-1",
          "name": "Đường giao thông nội bộ và hệ thống cáp ngầm",
          "contractor": "Công ty TNHH Kajima Việt Nam",
          "plannedProgress": 88,
          "actualProgress": 85,
          "status": "DUNG_TIEN_DO"
        },
        {
          "id": "c21-2",
          "name": "Nhà máy xử lý nước thải tập trung Module 2",
          "contractor": "Công ty CP Kỹ thuật Môi trường Kobelco Eco-Solutions",
          "plannedProgress": 100,
          "actualProgress": 100,
          "status": "HOAN_THANH"
        }
      ],
      "constructionStatus": "DUNG_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Không có điểm nghẽn nghiêm trọng",
      "leadDepartment": "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "Công ty Điện lực Hưng Yên (PC Hưng Yên)",
        "UBND huyện Yên Mỹ"
      ],
      "detailedDifficulties": "Cần sớm đóng điện trạm biến áp 110kV Thăng Long 2 để bàn giao nguồn điện sạch cho các doanh nghiệp điện tử.",
      "proposalsAndRecommendations": "PC Hưng Yên phối hợp Tổng công ty Điện lực miền Bắc (EVNNPC) nghiệm thu trạm 110kV trong tháng 11/2026.",
      "expediteHistory": []
    },
    "landArea": 180.5,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-22",
    "code": "DA-DN-02",
    "name": "Khu công nghiệp Sạch Hưng Yên (Hợp tác Việt Nam - Hàn Quốc, quy mô 143 ha)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty TNHH Đầu tư VTK Hưng Yên (Tập đoàn LH Hàn Quốc & TDH Ecoland)",
    "managingDept": "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
    "district": "Xã Ân Thi, Xã Yên Mỹ",
    "totalInvestment": 2800,
    "disbursedAmount": 2150,
    "progress": 75,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2022-11-25",
    "finishDate": "2026-06-30",
    "landClearanceProgress": 96,
    "landClearanceArea": "137 ha / 143 ha",
    "landClearanceNote": "Hạ tầng thông minh xanh kiểu mẫu, đã thu hút nhiều tập đoàn linh kiện ô tô Hàn Quốc.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công xây dựng",
        "date": "2022-11-25",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thành san nền phân khu 1 (80 ha)",
        "date": "2023-12-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Khánh thành toàn bộ hạ tầng kỹ thuật",
        "date": "2026-06-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "Quyết định số 1056/QĐ-TTg",
      "QĐ giao đất đợt 1 số 412/QĐ-UBND"
    ],
    "coordinates": [
      20.88,
      106.06
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "1056/QĐ-TTg",
      "policyDecisionDate": "2021-07-07",
      "currentStep": "Bàn giao đất cho các nhà đầu tư Hàn Quốc xây dựng nhà xưởng",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Dự án biểu tượng hợp tác kinh tế Việt - Hàn."
    },
    "landClearanceStage": {
      "totalArea": 143,
      "surveyedArea": 143,
      "surveyedPercent": 100,
      "handedOverArea": 137,
      "handedOverPercent": 95.8,
      "compensationPlan": {
        "totalCompensationAmount": 580,
        "paidAmount": 565,
        "paidPercent": 97.4,
        "totalHouseholds": 510,
        "paidHouseholds": 498,
        "unresolvedHouseholds": 12,
        "resettlementArrangement": "Đã hoàn tất tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Còn 6ha đất mương nội đồng đang hoàn tất thủ tục bàn giao.",
      "totalPlots": 2574,
      "surveyedPlots": 2574,
      "handedOverPlots": 2466
    },
    "constructionStage": {
      "constructionProgress": 78,
      "constructionPlanNotes": "Đang hoàn thiện mạng lưới giao thông thông minh, camera AI kiểm soát an ninh và cây xanh cảnh quan.",
      "items": [
        {
          "id": "c22-1",
          "name": "San nền, đường trục và trạm điều hành thông minh",
          "contractor": "Công ty Cổ phần Tập đoàn Xây dựng Hòa Bình",
          "plannedProgress": 80,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "Sở Kế hoạch và Đầu tư",
        "UBND huyện Yên Mỹ"
      ],
      "detailedDifficulties": "Không có vướng mắc phát sinh.",
      "proposalsAndRecommendations": "Tiếp tục hỗ trợ cấp Giấy phép xây dựng nhanh cho các dự án thứ cấp Hàn Quốc.",
      "expediteHistory": []
    },
    "landArea": 143,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-23",
    "code": "DA-DN-03",
    "name": "Khu công nghiệp Yên Mỹ quy mô 280 ha",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tổng công ty Viglacera - CTCP",
    "managingDept": "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
    "district": "Xã Yên Mỹ, Xã Đồng Than",
    "totalInvestment": 3450,
    "disbursedAmount": 2420,
    "progress": 70,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-01-10",
    "finishDate": "2026-12-31",
    "landClearanceProgress": 90,
    "landClearanceArea": "252 ha / 280 ha",
    "landClearanceNote": "Đã hoàn tất bồi thường phần lớn đất nông nghiệp, đang thi công hạ tầng song song.",
    "bottlenecks": [
      "Còn 28ha đất trang trại nông nghiệp cần đối thoại thống nhất đơn giá hỗ trợ"
    ],
    "milestones": [
      {
        "name": "Khởi công xây dựng hạ tầng",
        "date": "2023-01-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Xong trạm xử lý nước thải 8.000 m3/ngày",
        "date": "2024-08-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 765/QĐ-TTg chấp thuận chủ trương"
    ],
    "coordinates": [
      20.92,
      106.04
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "765/QĐ-TTg",
      "policyDecisionDate": "2022-06-03",
      "currentStep": "Thực hiện thủ tục giao đất đợt 3",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục pháp lý chủ trương đã xong."
    },
    "landClearanceStage": {
      "totalArea": 280,
      "surveyedArea": 280,
      "surveyedPercent": 100,
      "handedOverArea": 252,
      "handedOverPercent": 90,
      "compensationPlan": {
        "totalCompensationAmount": 980,
        "paidAmount": 890,
        "paidPercent": 90.8,
        "totalHouseholds": 980,
        "paidHouseholds": 920,
        "unresolvedHouseholds": 60,
        "resettlementArrangement": "Đã bố trí 60 lô đất tái định cư tại xã Đồng Than."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "60 hộ dân có đất vườn chuồng trại chuyển đổi đang đề nghị áp dụng mức hỗ trợ tài sản trên đất cao hơn.",
      "totalPlots": 5040,
      "surveyedPlots": 5040,
      "handedOverPlots": 4536
    },
    "constructionStage": {
      "constructionProgress": 72,
      "constructionPlanNotes": "Đã hoàn thành trải thảm nhựa các trục D1, N1 và kết nối nguồn điện nước đến từng chân lô đất.",
      "items": [
        {
          "id": "c23-1",
          "name": "Hạ tầng giao thông, thoát nước và chiếu sáng",
          "contractor": "Công ty CP Đầu tư & Xây dựng Viglacera",
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
      "delayedStageLabel": "Đang bám sát tiến độ",
      "bottleneckLocation": "Khu vực 28ha giáp đường huyện ĐH.45",
      "leadDepartment": "UBND huyện Yên Mỹ",
      "cooperatingDepartments": [
        "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
        "Tổng công ty Viglacera"
      ],
      "detailedDifficulties": "Thẩm định hồ sơ chuyển đổi trang trại nông nghiệp thời hạn 50 năm.",
      "proposalsAndRecommendations": "UBND huyện sớm hoàn tất phê duyệt phương án bồi thường đợt cuối trong quý IV/2026.",
      "expediteHistory": []
    },
    "landArea": 280,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-24",
    "code": "DA-DN-04",
    "name": "Khu công nghiệp số 5 Hưng Yên quy mô 192,6 ha",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Đầu tư KCN Yên Mỹ (Tập đoàn TNI Holdings)",
    "managingDept": "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
    "district": "Xã Ân Thi, Xã Quang Hưng",
    "totalInvestment": 2380,
    "disbursedAmount": 1350,
    "progress": 55,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2023-03-15",
    "finishDate": "2026-12-31",
    "landClearanceProgress": 74,
    "landClearanceArea": "142 ha / 192.6 ha",
    "landClearanceNote": "Chậm trễ trong GPMB 50,6 ha còn lại do người dân chưa đồng thuận phương án bồi thường cây ăn quả.",
    "bottlenecks": [
      "Khiếu nại về đơn giá kiểm đếm cây cam, bưởi đặc sản tại xã Ân Thi",
      "Chưa hoàn thành di dời đường ống cấp nước D300 cắt ngang qua khu công nghiệp"
    ],
    "milestones": [
      {
        "name": "Khởi công xây lắp hạ tầng",
        "date": "2023-03-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao 100% mặt bằng",
        "date": "2024-04-30",
        "status": "CHAM"
      },
      {
        "name": "Xong trạm xử lý nước thải",
        "date": "2025-06-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 1412/QĐ-TTg phê duyệt chủ trương đầu tư"
    ],
    "coordinates": [
      20.81,
      106.11
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "1412/QĐ-TTg",
      "policyDecisionDate": "2022-08-18",
      "currentStep": "Thẩm tra thiết kế bản vẽ thi công trạm biến áp 110kV KCN số 5",
      "procedureStatus": "DANG_THUC_HIEN",
      "procedureNotes": "Thủ tục chấp thuận chủ trương đầu tư đã hoàn tất."
    },
    "landClearanceStage": {
      "totalArea": 192.6,
      "surveyedArea": 180,
      "surveyedPercent": 93.5,
      "handedOverArea": 142,
      "handedOverPercent": 73.7,
      "compensationPlan": {
        "totalCompensationAmount": 760,
        "paidAmount": 520,
        "paidPercent": 68.4,
        "totalHouseholds": 780,
        "paidHouseholds": 560,
        "unresolvedHouseholds": 220,
        "resettlementArrangement": "Đang xây dựng khu tái định cư tập trung quy mô 4.2ha tại xã Ân Thi."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "220 hộ dân chưa nhận tiền do kiến nghị giá bồi thường cây ăn quả lâu năm và chậm bàn giao đất tái định cư.",
      "totalPlots": 3467,
      "surveyedPlots": 3242,
      "handedOverPlots": 2555
    },
    "constructionStage": {
      "constructionProgress": 52,
      "constructionPlanNotes": "Nhà thầu mới thi công san nền được 120ha và trục đường chính số 1; phân khu phía Tây chưa có mặt bằng để thi công cống thoát nước.",
      "items": [
        {
          "id": "c24-1",
          "name": "San nền và giao thông trục D1 KCN số 5",
          "contractor": "Công ty CP Đầu tư Xây dựng Hạ tầng Hoàng Sơn",
          "plannedProgress": 70,
          "actualProgress": 52,
          "status": "CHAM_TIEN_DO",
          "note": "Chờ mặt bằng 50ha"
        }
      ],
      "constructionStatus": "CHAM_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Giải phóng mặt bằng 50,6 ha cây ăn quả",
      "bottleneckLocation": "Khu vực 50,6 ha thuộc địa bàn xã Ân Thi giáp đường trục Tân Phúc - Võng Phan",
      "leadDepartment": "UBND huyện Ân Thi",
      "cooperatingDepartments": [
        "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
        "Sở Tài nguyên và Môi trường",
        "Tập đoàn TNI Holdings"
      ],
      "detailedDifficulties": "Người dân trồng cây ăn quả mật độ cao trước thời điểm kiểm đếm; việc xác định cây trồng hợp pháp và cây trồng trục lợi bồi thường gặp nhiều tranh chấp phức tạp.",
      "proposalsAndRecommendations": "UBND huyện Ân Thi thành lập tổ thẩm tra liên ngành xác minh hiện trạng qua ảnh viễn thám; áp dụng chính sách hỗ trợ thỏa đáng theo đúng quy định; tổ chức chi trả dứt điểm trong tháng 11/2026.",
      "expediteHistory": [
        {
          "id": "exp-24-1",
          "date": "2026-09-10",
          "action": "Thông báo kết luận số 210/TB-UBND",
          "signer": "Chủ tịch UBND tỉnh",
          "content": "Giao UBND huyện Ân Thi tập trung cao độ GPMB KCN số 5 trước ngày 15/12/2026.",
          "feedbackDeadline": "2026-12-15"
        },
        {
          "id": "exp-24-2",
          "date": "2026-10-08",
          "action": "Công văn đôn đốc số 88/BQLKCN",
          "signer": "Trưởng Ban QLDA KCN",
          "content": "Đề nghị huyện sớm bàn giao 30ha đất sạch để khởi công trạm xử lý nước thải.",
          "feedbackDeadline": "2026-10-31"
        }
      ]
    },
    "landArea": 192.6,
    "unresolvedIssues": "Giải phóng mặt bằng 50,6 ha cây ăn quả: Khu vực 50,6 ha thuộc địa bàn xã Ân Thi giáp đường trục Tân Phúc - Võng Phan"
  },
  {
    "id": "proj-25",
    "code": "DA-DN-05",
    "name": "Khu công nghiệp Phố Nối A mở rộng diện tích 92,5 ha",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Phát triển Hạ tầng KCN Phố Nối A (Tập đoàn Hòa Phát)",
    "managingDept": "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
    "district": "Xã Yên Mỹ, Phường Mỹ Hào",
    "totalInvestment": 1650,
    "disbursedAmount": 1420,
    "progress": 86,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2022-06-15",
    "finishDate": "2025-06-30",
    "landClearanceProgress": 98.5,
    "landClearanceArea": "91 ha / 92.5 ha",
    "landClearanceNote": "Hạ tầng đồng bộ hiện đại, tỷ lệ lấp đầy đạt gần 80%.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công hạ tầng mở rộng",
        "date": "2022-06-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao 100% diện tích đợt 1",
        "date": "2023-08-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 519/QĐ-TTg"
    ],
    "coordinates": [
      20.95,
      106.03
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "519/QĐ-TTg",
      "policyDecisionDate": "2021-04-15",
      "currentStep": "Nghiệm thu hoàn thành hạ tầng kỹ thuật toàn khu",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục hoàn chỉnh."
    },
    "landClearanceStage": {
      "totalArea": 92.5,
      "surveyedArea": 92.5,
      "surveyedPercent": 100,
      "handedOverArea": 91,
      "handedOverPercent": 98.4,
      "compensationPlan": {
        "totalCompensationAmount": 390,
        "paidAmount": 386,
        "paidPercent": 99,
        "totalHouseholds": 410,
        "paidHouseholds": 406,
        "unresolvedHouseholds": 4,
        "resettlementArrangement": "Đã hoàn tất 100%."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Không còn vướng mắc.",
      "totalPlots": 1665,
      "surveyedPlots": 1665,
      "handedOverPlots": 1638
    },
    "constructionStage": {
      "constructionProgress": 88,
      "constructionPlanNotes": "Đang hoàn thiện chiếu sáng LED và trạm cấp nước sạch công suất 10.000 m3/ngày.",
      "items": [
        {
          "id": "c25-1",
          "name": "Xây dựng đường nội bộ và trạm xử lý nước thải mở rộng",
          "contractor": "Công ty CP Xây dựng Hòa Phát",
          "plannedProgress": 90,
          "actualProgress": 88,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Ban Quản lý các Khu công nghiệp tỉnh Hưng Yên",
      "cooperatingDepartments": [
        "UBND TX Mỹ Hào"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Thu hút các dự án công nghệ cao và công nghiệp hỗ trợ vào phần diện tích còn lại.",
      "expediteHistory": []
    },
    "landArea": 92.5,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-26",
    "code": "DA-DN-06",
    "name": "Cụm công nghiệp Lạc Đạo quy mô 50 ha",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Đầu tư Phát triển CCN Lạc Đạo",
    "managingDept": "Sở Công Thương",
    "district": "Xã Lạc Đạo",
    "totalInvestment": 680,
    "disbursedAmount": 510,
    "progress": 78,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-02-10",
    "finishDate": "2025-09-30",
    "landClearanceProgress": 96,
    "landClearanceArea": "48 ha / 50 ha",
    "landClearanceNote": "Hạ tầng cơ bản đã đón các xưởng sản xuất di dời từ làng nghề.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công xây lắp",
        "date": "2023-02-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Xong trạm xử lý nước thải tập trung",
        "date": "2024-06-20",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 315/QĐ-UBND"
    ],
    "coordinates": [
      20.98,
      106.01
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "315/QĐ-UBND",
      "policyDecisionDate": "2022-04-18",
      "currentStep": "Giao đất và cấp giấy phép xây dựng nhà xưởng cho doanh nghiệp làng nghề",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục thành lập cụm công nghiệp hoàn tất."
    },
    "landClearanceStage": {
      "totalArea": 50,
      "surveyedArea": 50,
      "surveyedPercent": 100,
      "handedOverArea": 48,
      "handedOverPercent": 96,
      "compensationPlan": {
        "totalCompensationAmount": 185,
        "paidAmount": 180,
        "paidPercent": 97.3,
        "totalHouseholds": 280,
        "paidHouseholds": 274,
        "unresolvedHouseholds": 6,
        "resettlementArrangement": "Đã hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Còn 2ha đang làm thủ tục bàn giao.",
      "totalPlots": 900,
      "surveyedPlots": 900,
      "handedOverPlots": 864
    },
    "constructionStage": {
      "constructionProgress": 80,
      "constructionPlanNotes": "Đang hoàn thiện hệ thống PCCC cụm và đường gom đấu nối ra đường sắt Hà Nội - Hải Phòng.",
      "items": [
        {
          "id": "c26-1",
          "name": "Đường nội bộ, thoát nước và trạm xử lý nước thải",
          "contractor": "Công ty TNHH MTV Xây dựng Đất Việt",
          "plannedProgress": 82,
          "actualProgress": 80,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Sở Công Thương",
      "cooperatingDepartments": [
        "UBND huyện Văn Lâm"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Tập trung di dời các cơ sở gây ô nhiễm môi trường trong khu dân cư Lạc Đạo vào CCN.",
      "expediteHistory": []
    },
    "landArea": 50,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-27",
    "code": "DA-DN-07",
    "name": "Khu đô thị thương mại du lịch sinh thái Ecopark (Phân khu vịnh đảo & Swan Lake)",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Tập đoàn Ecopark",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Văn Giang, Xã Phụng Công",
    "totalInvestment": 12500,
    "disbursedAmount": 10800,
    "progress": 88,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2021-03-15",
    "finishDate": "2026-12-31",
    "landClearanceProgress": 100,
    "landClearanceArea": "120 ha / 120 ha",
    "landClearanceNote": "Đã hoàn thành 100% GPMB từ nhiều năm trước, đang bàn giao các tòa tháp chung cư cao cấp và biệt thự đảo.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Cất nóc cụm tháp Swan Lake Residences",
        "date": "2023-11-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao căn hộ khoáng nóng Onsen",
        "date": "2024-08-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Khánh thành công viên sinh thái Hồ Thiên Nga mở rộng",
        "date": "2025-04-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "Quyết định số 123/QĐ-UBND phê duyệt 1/500 điều chỉnh"
    ],
    "coordinates": [
      20.97,
      105.93
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "80/2004/QĐ-TTg",
      "policyDecisionDate": "2004-06-30",
      "currentStep": "Thực hiện thủ tục cấp giấy chứng nhận quyền sở hữu nhà ở (Sổ hồng) cho cư dân",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Dự án khu đô thị sinh thái tiêu biểu quốc tế."
    },
    "landClearanceStage": {
      "totalArea": 120,
      "surveyedArea": 120,
      "surveyedPercent": 100,
      "handedOverArea": 120,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 1850,
        "paidAmount": 1850,
        "paidPercent": 100,
        "totalHouseholds": 1100,
        "paidHouseholds": 1100,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã hoàn tất 100%."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đã hoàn thành GPMB 100%.",
      "totalPlots": 2160,
      "surveyedPlots": 2160,
      "handedOverPlots": 2160
    },
    "constructionStage": {
      "constructionProgress": 90,
      "constructionPlanNotes": "Các cụm tòa nhà chung cư cao tầng đã cất nóc và bàn giao trên 3.000 căn hộ cho cư dân về sinh sống.",
      "items": [
        {
          "id": "c27-1",
          "name": "Cụm tháp The Landmark & Swan Lake Onsen",
          "contractor": "Công ty CP Xây dựng Coteccons",
          "plannedProgress": 92,
          "actualProgress": 90,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Sở Xây dựng",
      "cooperatingDepartments": [
        "Sở TN&MT",
        "UBND huyện Văn Giang"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Đẩy nhanh tiến độ cấp Sổ hồng cho các hộ dân đã hoàn thành nghĩa vụ tài chính.",
      "expediteHistory": []
    },
    "landArea": 120,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-28",
    "code": "DA-DN-08",
    "name": "Khu đô thị sinh thái Vinhomes Ocean Park 2 - The Empire Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn Vingroup (Công ty CP Vinhomes)",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Nghĩa Trụ, Xã Long Hưng",
    "totalInvestment": 38000,
    "disbursedAmount": 34500,
    "progress": 92,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2021-08-01",
    "finishDate": "2026-06-30",
    "landClearanceProgress": 100,
    "landClearanceArea": "458 ha / 458 ha",
    "landClearanceNote": "Đã hoàn thành 100% GPMB, biển tạo sóng nhân tạo lớn nhất thế giới Royal Wave Park đã hoạt động đón hàng triệu du khách.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khai trương Tổ hợp công viên sóng Royal Wave Park",
        "date": "2022-04-30",
        "status": "HOAN_THANH"
      },
      {
        "name": "Bàn giao hơn 8.000 căn thấp tầng",
        "date": "2023-12-31",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thiện toàn bộ hạ tầng xã hội Vinschool, Vinmec",
        "date": "2025-06-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 31/QĐ-TTg phê duyệt chủ trương",
      "QĐ số 89/QĐ-UBND"
    ],
    "coordinates": [
      20.93,
      105.96
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "31/QĐ-TTg",
      "policyDecisionDate": "2021-01-06",
      "currentStep": "Nghiệm thu đưa công trình vào sử dụng từng phân khu",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Dự án quy mô đại đô thị lớn nhất miền Bắc."
    },
    "landClearanceStage": {
      "totalArea": 458,
      "surveyedArea": 458,
      "surveyedPercent": 100,
      "handedOverArea": 458,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 4200,
        "paidAmount": 4200,
        "paidPercent": 100,
        "totalHouseholds": 2800,
        "paidHouseholds": 2800,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã bố trí hoàn tất 2 khu tái định cư Nghĩa Trụ và Long Hưng với hạ tầng hoàn chỉnh."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đã hoàn tất GPMB 100%.",
      "totalPlots": 8244,
      "surveyedPlots": 8244,
      "handedOverPlots": 8244
    },
    "constructionStage": {
      "constructionProgress": 94,
      "constructionPlanNotes": "Các phân khu Chà Là, San Hô, Sao Biển, Đảo Dừa, Hải Âu đã bàn giao đưa vào ở sôi động.",
      "items": [
        {
          "id": "c28-1",
          "name": "Toàn bộ hạ tầng giao thông kết nối cao tốc Hà Nội - Hải Phòng và Vành đai 3.5",
          "contractor": "Công ty CP Xây dựng Delta",
          "plannedProgress": 95,
          "actualProgress": 94,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Sở Xây dựng",
      "cooperatingDepartments": [
        "UBND huyện Văn Giang"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Tiếp tục phát triển hệ thống xe buýt điện thông minh VinBus kết nối trung tâm Hà Nội và Hưng Yên.",
      "expediteHistory": []
    },
    "landArea": 458,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-29",
    "code": "DA-DN-09",
    "name": "Khu đô thị Vinhomes Ocean Park 3 - The Crown Hưng Yên",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn Vingroup (Tập đoàn Đại Dương)",
    "managingDept": "Sở Xây dựng",
    "district": "Xã Nghĩa Trụ, Xã Như Quỳnh",
    "totalInvestment": 32000,
    "disbursedAmount": 26800,
    "progress": 84,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2022-03-01",
    "finishDate": "2026-12-31",
    "landClearanceProgress": 100,
    "landClearanceArea": "294 ha / 294 ha",
    "landClearanceNote": "100% mặt bằng sạch, vịnh biển bốn mùa Paradise Bay đã vận hành.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khai trương Vịnh thiên đường Paradise Bay",
        "date": "2022-10-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Cất nóc cụm shophouse Mega Grand World",
        "date": "2023-11-30",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 122/QĐ-TTg phê duyệt chủ trương"
    ],
    "coordinates": [
      20.945,
      105.98
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "122/QĐ-TTg",
      "policyDecisionDate": "2021-02-10",
      "currentStep": "Nghiệm thu bàn giao các phân khu Phố Biển, Vịnh Tây",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục pháp lý hoàn tất."
    },
    "landClearanceStage": {
      "totalArea": 294,
      "surveyedArea": 294,
      "surveyedPercent": 100,
      "handedOverArea": 294,
      "handedOverPercent": 100,
      "compensationPlan": {
        "totalCompensationAmount": 2900,
        "paidAmount": 2900,
        "paidPercent": 100,
        "totalHouseholds": 1950,
        "paidHouseholds": 1950,
        "unresolvedHouseholds": 0,
        "resettlementArrangement": "Đã hoàn thành 100% bồi thường và tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đã bàn giao mặt bằng 100%.",
      "totalPlots": 5292,
      "surveyedPlots": 5292,
      "handedOverPlots": 5292
    },
    "constructionStage": {
      "constructionProgress": 86,
      "constructionPlanNotes": "Mega Grand World Hà Nội - Hưng Yên đã trở thành tâm điểm du lịch, vui chơi giải trí ban đêm lớn nhất vùng Thủ đô.",
      "items": [
        {
          "id": "c29-1",
          "name": "Khu thương mại Mega Grand World và dòng sông Venice",
          "contractor": "Công ty CP Xây dựng Central",
          "plannedProgress": 90,
          "actualProgress": 88,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Sở Xây dựng",
      "cooperatingDepartments": [
        "UBND huyện Văn Giang",
        "UBND huyện Văn Lâm"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Đảm bảo trật tự an toàn giao thông tại nút giao Vành đai 3.5 vào các dịp lễ hội cuối tuần.",
      "expediteHistory": []
    },
    "landArea": 294,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-30",
    "code": "DA-DN-10",
    "name": "Khu đô thị thương mại dịch vụ du lịch Phố Hiến Heritage",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Đầu tư Du lịch Đô thị Phố Hiến",
    "managingDept": "Sở Kế hoạch và Đầu tư",
    "district": "Phường Phố Hiến, Phường Hồng Châu",
    "totalInvestment": 2450,
    "disbursedAmount": 620,
    "progress": 30,
    "status": "CHAM_TIEN_DO",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2024-02-15",
    "finishDate": "2028-12-31",
    "landClearanceProgress": 45,
    "landClearanceArea": "36 ha / 80 ha",
    "landClearanceNote": "Chậm phê duyệt quy hoạch chi tiết 1/500 do phải bảo tồn không gian di tích quốc gia đặc biệt Phố Hiến.",
    "bottlenecks": [
      "Chưa thống nhất ranh giới bảo vệ di tích Hồ Bán Nguyệt và Đền Mẫu",
      "Thủ tục đánh giá tác động di sản văn hóa xin ý kiến Bộ Văn hóa, Thể thao và Du lịch kéo dài"
    ],
    "milestones": [
      {
        "name": "Chấp thuận chủ trương đầu tư",
        "date": "2023-08-20",
        "status": "HOAN_THANH"
      },
      {
        "name": "Phê duyệt đồ án quy hoạch 1/500",
        "date": "2024-03-30",
        "status": "CHAM"
      },
      {
        "name": "Khởi công xây dựng",
        "date": "2024-10-30",
        "status": "CHAM"
      }
    ],
    "legalDocs": [
      "QĐ số 650/QĐ-UBND chấp thuận chủ trương đầu tư"
    ],
    "coordinates": [
      20.65,
      106.05
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "650/QĐ-UBND",
      "policyDecisionDate": "2023-08-20",
      "currentStep": "Lập lại đồ án quy hoạch chi tiết tỷ lệ 1/500 theo ý kiến của Cục Di sản văn hóa",
      "procedureStatus": "VUONG_MAC",
      "procedureNotes": "Phải rà soát khoanh vùng bảo vệ I và vùng bảo vệ II của Quần thể di tích Phố Hiến.",
      "procedures": [
        {
          "id": "proc-1",
          "order": 1,
          "name": "Thủ tục 1: Các thủ tục về đầu tư, doanh nghiệp, góp vốn",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "31/08/2027",
          "completedDate": "27/07/2026",
          "taskCount": 2,
          "updatedTaskCount": 2,
          "completedTaskCount": 2,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Kế hoạch và Đầu tư",
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t1-1",
              "name": "Đăng ký thành lập doanh nghiệp dự án / Chi nhánh điều hành",
              "deadline": "30/06/2026",
              "completedDate": "20/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT"
              ]
            },
            {
              "id": "t1-2",
              "name": "Thủ tục chấp thuận chủ trương đầu tư và cấp Giấy chứng nhận ĐKĐT",
              "deadline": "31/08/2027",
              "completedDate": "27/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT",
                "Sở Tài chính"
              ]
            }
          ]
        },
        {
          "id": "proc-2",
          "order": 2,
          "name": "Thủ tục 2: Quy hoạch, khảo sát, chuẩn bị dự án",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "15/06/2027",
          "completedDate": "11/07/2026",
          "taskCount": 5,
          "updatedTaskCount": 5,
          "completedTaskCount": 5,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Xây dựng",
            "Sở Tài chính",
            "UBND cấp xã/phường"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t2-1",
              "name": "Lập, thẩm định và phê duyệt nhiệm vụ quy hoạch chi tiết 1/500",
              "deadline": "15/02/2026",
              "completedDate": "10/02/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-2",
              "name": "Khảo sát địa hình, địa chất phục vụ lập dự án đầu tư",
              "deadline": "30/04/2026",
              "completedDate": "25/04/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-3",
              "name": "Lấy ý kiến cộng đồng dân cư về đồ án quy hoạch",
              "deadline": "30/05/2026",
              "completedDate": "28/05/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "UBND xã/phường"
              ]
            },
            {
              "id": "t2-4",
              "name": "Phê duyệt đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500",
              "deadline": "15/06/2027",
              "completedDate": "11/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-5",
              "name": "Lập Báo cáo nghiên cứu khả thi (BCNCKT) dự án ĐTXD",
              "deadline": "30/07/2026",
              "completedDate": "29/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        },
        {
          "id": "proc-3",
          "order": 3,
          "name": "Thủ tục 3: Môi trường, rừng, tài nguyên",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "30/04/2027",
          "completedDate": "12/07/2026",
          "taskCount": 1,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Tài nguyên và Môi trường",
            "Sở Nông nghiệp và PTNT"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t3-1",
              "name": "Lập Báo cáo đánh giá tác động môi trường (ĐTM) và thẩm định phê duyệt",
              "deadline": "30/04/2027",
              "completedDate": "12/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở TN&MT"
              ]
            }
          ]
        },
        {
          "id": "proc-4",
          "order": 4,
          "name": "Thủ tục 4: Đất đai, GPMB, mặt bằng",
          "status": "CHAM_TIEN_DO",
          "statusLabel": "Chậm tiến độ",
          "deadline": "31/10/2027",
          "taskCount": 5,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "UBND cấp huyện / Trung tâm Phát triển quỹ đất",
          "coDepts": [
            "Sở Tài nguyên và Môi trường",
            "Sở Tài chính",
            "UBND xã/phường"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t4-1",
              "name": "Ban hành thông báo thu hồi đất phục vụ dự án",
              "deadline": "30/05/2026",
              "completedDate": "25/05/2026",
              "status": "HOAN_THANH",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-2",
              "name": "Thực hiện điều tra, khảo sát, đo đạc, kiểm đếm đất đai tài sản",
              "deadline": "30/09/2026",
              "status": "CHAM_TIEN_DO",
              "leadDept": "Trung tâm PTQĐ",
              "coDepts": [
                "UBND xã/phường"
              ]
            },
            {
              "id": "t4-3",
              "name": "Lập và phê duyệt phương án bồi thường, hỗ trợ, tái định cư",
              "deadline": "31/12/2026",
              "status": "CON_HAN",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở Tài chính",
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-4",
              "name": "Hoàn thành hồ sơ, thủ tục thu hồi đất, bồi thường, hỗ trợ, tái định cư/GPMB (nếu Nhà nước thu hồi đất)",
              "deadline": "31/05/2027",
              "status": "CON_HAN",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-5",
              "name": "Bàn giao đất sạch trên thực địa và cấp Giấy chứng nhận quyền sử dụng đất",
              "deadline": "31/10/2027",
              "status": "CON_HAN",
              "leadDept": "Sở TN&MT",
              "coDepts": [
                "UBND huyện"
              ]
            }
          ]
        },
        {
          "id": "proc-5",
          "order": 5,
          "name": "Thủ tục 5: Thiết kế, xây dựng, PCCC, đấu nối",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "30/11/2027",
          "taskCount": 6,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Xây dựng",
            "Công an tỉnh (Phòng Cảnh sát PCCC)",
            "Công ty Điện lực"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t5-1",
              "name": "Thỏa thuận đấu nối cấp điện, cấp thoát nước và giao thông",
              "deadline": "30/06/2026",
              "completedDate": "20/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Điện lực",
                "Sở GTVT"
              ]
            },
            {
              "id": "t5-2",
              "name": "Thẩm duyệt thiết kế phòng cháy và chữa cháy (PCCC)",
              "deadline": "30/11/2026",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Công an tỉnh"
              ]
            },
            {
              "id": "t5-3",
              "name": "Thẩm định thiết kế bản vẽ thi công và dự toán xây dựng",
              "deadline": "28/02/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t5-4",
              "name": "Cấp Giấy phép xây dựng công trình",
              "deadline": "30/04/2027",
              "status": "CON_HAN",
              "leadDept": "Sở Xây dựng",
              "coDepts": [
                "Chủ đầu tư"
              ]
            },
            {
              "id": "t5-5",
              "name": "Đấu thầu lựa chọn nhà thầu xây lắp",
              "deadline": "31/07/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT"
              ]
            },
            {
              "id": "t5-6",
              "name": "Thông báo khởi công xây dựng công trình",
              "deadline": "30/11/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        }
      ]
    },
    "landClearanceStage": {
      "totalArea": 80,
      "surveyedArea": 55,
      "surveyedPercent": 68.8,
      "handedOverArea": 36,
      "handedOverPercent": 45,
      "compensationPlan": {
        "totalCompensationAmount": 480,
        "paidAmount": 210,
        "paidPercent": 43.8,
        "totalHouseholds": 420,
        "paidHouseholds": 195,
        "unresolvedHouseholds": 225,
        "resettlementArrangement": "Chưa có phương án tái định cư cụ thể cho 225 hộ dân."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "Tạm dừng chi trả đền bù để chờ điều chỉnh ranh giới quy hoạch 1/500 tránh phạm vào vùng đệm di tích.",
      "totalPlots": 1440,
      "surveyedPlots": 991,
      "handedOverPlots": 648
    },
    "constructionStage": {
      "constructionProgress": 10,
      "constructionPlanNotes": "Chưa đủ điều kiện khởi công xây lắp đại trà, mới chỉ san gạt tạm thời khu vực văn phòng điều hành.",
      "items": [
        {
          "id": "c30-1",
          "name": "Khu hạ tầng khung công viên văn hóa Phố Hiến",
          "contractor": "Chưa lựa chọn nhà thầu xây lắp chính",
          "plannedProgress": 35,
          "actualProgress": 10,
          "status": "CHAM_TIEN_DO",
          "note": "Chờ phê duyệt 1/500"
        }
      ],
      "constructionStatus": "CHUA_KHOI_CONG"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "THU_TUC_DAU_TU",
      "delayedStageLabel": "Thủ tục quy hoạch 1/500 & Bảo tồn di tích quốc gia đặc biệt",
      "bottleneckLocation": "Vùng đệm tiếp giáp Đền Mẫu và khu vực Hồ Bán Nguyệt (Phường Hồng Châu)",
      "leadDepartment": "Sở Xây dựng",
      "cooperatingDepartments": [
        "Sở Văn hóa, Thể thao và Du lịch",
        "UBND thành phố Hưng Yên",
        "Bộ Văn hóa, Thể thao và Du lịch"
      ],
      "detailedDifficulties": "Hồ sơ quy hoạch ban đầu đề xuất mật độ xây dựng cao không phù hợp với Quy chế quản lý di tích quốc gia đặc biệt Phố Hiến; thời gian lấy ý kiến thẩm định của Bộ VHTTDL kéo dài hơn 6 tháng.",
      "proposalsAndRecommendations": "Đề nghị Sở Xây dựng phối hợp Sở VHTTDL làm việc với Cục Di sản văn hóa thống nhất giảm tầng cao, tăng mật độ cây xanh mặt nước; trình UBND tỉnh phê duyệt đồ án 1/500 điều chỉnh trong tháng 11/2026.",
      "expediteHistory": [
        {
          "id": "exp-30-1",
          "date": "2026-08-15",
          "action": "Thông báo số 215/TB-UBND",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Yêu cầu nhà đầu tư tiếp thu nghiêm túc ý kiến Bộ VHTTDL, không để phá vỡ cảnh quan di tích.",
          "feedbackDeadline": "2026-10-31"
        },
        {
          "id": "exp-30-2",
          "date": "2026-10-02",
          "action": "Công văn đôn đốc số 1120/SXD",
          "signer": "Giám đốc Sở Xây dựng",
          "content": "Đôn đốc nhà đầu tư nộp lại hồ sơ 1/500 trước ngày 20/10/2026.",
          "feedbackDeadline": "2026-10-20"
        }
      ]
    },
    "landArea": 80,
    "unresolvedIssues": "Thủ tục quy hoạch 1/500 & Bảo tồn di tích quốc gia đặc biệt: Vùng đệm tiếp giáp Đền Mẫu và khu vực Hồ Bán Nguyệt (Phường Hồng Châu)"
  },
  {
    "id": "proj-31",
    "code": "DA-DN-11",
    "name": "Trung tâm Logistics và Cảng cạn ICD Yên Mỹ quy mô 45 ha",
    "sector": "GIAO_THONG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Tập đoàn HATECO Logistics",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Xã Yên Mỹ, Xã Trung Hưng",
    "totalInvestment": 2600,
    "disbursedAmount": 1850,
    "progress": 72,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-05-10",
    "finishDate": "2026-03-31",
    "landClearanceProgress": 94,
    "landClearanceArea": "42.3 ha / 45 ha",
    "landClearanceNote": "Cụm kho ngoại quan và bãi container thông minh đã hoàn thành giai đoạn 1.",
    "bottlenecks": [],
    "milestones": [
      {
        "name": "Khởi công xây dựng kho ngoại quan",
        "date": "2023-05-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Được Bộ GTVT công bố mở cảng cạn ICD",
        "date": "2024-09-18",
        "status": "HOAN_THANH"
      }
    ],
    "legalDocs": [
      "QĐ số 889/QĐ-BGTVT công bố mở Cảng cạn ICD Yên Mỹ"
    ],
    "coordinates": [
      20.915,
      106.03
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "889/QĐ-BGTVT",
      "policyDecisionDate": "2023-01-15",
      "currentStep": "Thủ tục kết nối luồng thông quan hải quan điện tử",
      "procedureStatus": "HOAN_THANH",
      "procedureNotes": "Thủ tục mở cảng cạn đã được Bộ GTVT và Tổng cục Hải quan công nhận."
    },
    "landClearanceStage": {
      "totalArea": 45,
      "surveyedArea": 45,
      "surveyedPercent": 100,
      "handedOverArea": 42.3,
      "handedOverPercent": 94,
      "compensationPlan": {
        "totalCompensationAmount": 260,
        "paidAmount": 248,
        "paidPercent": 95.4,
        "totalHouseholds": 210,
        "paidHouseholds": 202,
        "unresolvedHouseholds": 8,
        "resettlementArrangement": "Đã hoàn tất tái định cư."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đang giải tỏa nốt 2.7ha bãi trung chuyển ngoài phạm vi kho chính.",
      "totalPlots": 810,
      "surveyedPlots": 810,
      "handedOverPlots": 761
    },
    "constructionStage": {
      "constructionProgress": 75,
      "constructionPlanNotes": "Đã xây dựng xong 3 khối kho lạnh bảo quản nông sản xuất khẩu và bãi container 20ha gắn cẩu giàn RTG tự động.",
      "items": [
        {
          "id": "c31-1",
          "name": "Kho bãi logistics thông minh và hệ thống kiểm hóa tự động",
          "contractor": "Công ty CP Đầu tư Xây dựng Hateco",
          "plannedProgress": 75,
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
      "bottleneckLocation": "Không có",
      "leadDepartment": "Sở Giao thông Vận tải",
      "cooperatingDepartments": [
        "Cục Hải quan tỉnh Hưng Yên",
        "UBND huyện Yên Mỹ"
      ],
      "detailedDifficulties": "Không có",
      "proposalsAndRecommendations": "Đẩy mạnh kết nối luồng hàng hóa từ các KCN Hưng Yên sang cảng biển Hải Phòng và Lạng Sơn.",
      "expediteHistory": []
    },
    "landArea": 45,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-32",
    "code": "DA-DN-12",
    "name": "Tổ hợp nhà máy xử lý rác thải sinh hoạt phát điện công nghệ cao Phù Cừ",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty Cổ phần Năng lượng Xanh Hưng Yên (Tập đoàn Greenity)",
    "managingDept": "Sở Tài nguyên và Môi trường",
    "district": "Xã Đoàn Đào, Xã Phù Cừ",
    "totalInvestment": 1850,
    "disbursedAmount": 1120,
    "progress": 62,
    "status": "DANG_TRIEN_KHAI",
    "currentStage": "THI_CONG_XAY_DUNG",
    "startDate": "2023-04-20",
    "finishDate": "2026-03-31",
    "landClearanceProgress": 98,
    "landClearanceArea": "19.6 ha / 20 ha",
    "landClearanceNote": "Mặt bằng thông suốt, lò đốt rác công nghệ cao Martin (Đức) đang lắp đặt.",
    "bottlenecks": [
      "Thủ tục thỏa thuận đấu nối phát điện lên lưới điện quốc gia 110kV"
    ],
    "milestones": [
      {
        "name": "Xong phần móng lò đốt và tháp khói 80m",
        "date": "2024-05-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Đốt rác chạy thử nghiệm",
        "date": "2025-08-30",
        "status": "DANG_LAM"
      }
    ],
    "legalDocs": [
      "QĐ số 410/QĐ-UBND chấp thuận chủ trương",
      "QĐ phê duyệt ĐTM số 215/QĐ-BTNMT"
    ],
    "coordinates": [
      20.73,
      106.24
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "410/QĐ-UBND",
      "policyDecisionDate": "2022-05-30",
      "currentStep": "Thỏa thuận kỹ thuật điểm đấu nối lưới điện 110kV với EVN",
      "procedureStatus": "DANG_THUC_HIEN",
      "procedureNotes": "Hồ sơ ĐTM đã được Bộ TN&MT phê duyệt."
    },
    "landClearanceStage": {
      "totalArea": 20,
      "surveyedArea": 20,
      "surveyedPercent": 100,
      "handedOverArea": 19.6,
      "handedOverPercent": 98,
      "compensationPlan": {
        "totalCompensationAmount": 95,
        "paidAmount": 93,
        "paidPercent": 97.9,
        "totalHouseholds": 82,
        "paidHouseholds": 80,
        "unresolvedHouseholds": 2,
        "resettlementArrangement": "Đã hoàn tất."
      },
      "clearanceStatus": "HOAN_THANH",
      "clearanceNotes": "Đất sạch đủ điều kiện lắp máy.",
      "totalPlots": 360,
      "surveyedPlots": 360,
      "handedOverPlots": 353
    },
    "constructionStage": {
      "constructionProgress": 65,
      "constructionPlanNotes": "Khối nhà lò đốt rác và silo chứa tro bay đã cất nóc, đang lắp đặt lò ghi Martin công suất 800 tấn/ngày đêm.",
      "items": [
        {
          "id": "c32-1",
          "name": "Lắp đặt dây chuyền lò đốt rác và tuabin phát điện 20MW",
          "contractor": "Tập đoàn Cơ khí Lắp máy Việt Nam (Lilama 10)",
          "plannedProgress": 68,
          "actualProgress": 65,
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
      "bottleneckLocation": "Điểm đấu nối đường dây 110kV",
      "leadDepartment": "Sở Tài nguyên và Môi trường",
      "cooperatingDepartments": [
        "Sở Công Thương",
        "Công ty Điện lực Hưng Yên"
      ],
      "detailedDifficulties": "Thủ tục hòa lưới điện bán điện dư cần văn bản chấp thuận của Cục Điều tiết Điện lực.",
      "proposalsAndRecommendations": "Sở Công Thương hỗ trợ doanh nghiệp làm việc với Bộ Công Thương để sớm hoàn tất Hợp đồng mua bán điện (PPA).",
      "expediteHistory": []
    },
    "landArea": 20,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  },
  {
    "id": "proj-33",
    "code": "DA-DN-13",
    "name": "Tuyến đường trục kết nối các khu công nghiệp phía Đông Hưng Yên (Dự án PPP/BT Ngoài NSNN)",
    "sector": "GIAO_THONG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Tập đoàn Phát triển Đô thị & KCN Yên Mỹ (Nhà đầu tư BT)",
    "managingDept": "Sở Giao thông Vận tải",
    "district": "Phường Mỹ Hào, Xã Yên Mỹ",
    "totalInvestment": 2150,
    "disbursedAmount": 1100,
    "progress": 51,
    "status": "CHAM_TIEN_DO",
    "currentStage": "GIAI_PHONG_MAT_BANG",
    "startDate": "2023-01-10",
    "finishDate": "2026-06-30",
    "landClearanceProgress": 75,
    "landClearanceArea": "80 ha / 106.6 ha",
    "landClearanceNote": "Chậm trễ trong giải ngân vốn đối ứng và chuyển đổi đất lúa 2 vụ.",
    "bottlenecks": [
      "Chậm phê duyệt phương án bồi thường cây cối hoa màu tại xã Yên Mỹ",
      "Thủ tục quyết toán quỹ đất đối ứng thanh toán hợp đồng BT vướng mắc theo quy định mới"
    ],
    "milestones": [
      {
        "name": "Ký kết hợp đồng dự án",
        "date": "2022-12-10",
        "status": "HOAN_THANH"
      },
      {
        "name": "Thi công phân đoạn 1",
        "date": "2023-07-01",
        "status": "HOAN_THANH"
      },
      {
        "name": "Hoàn thành phân đoạn 2",
        "date": "2024-08-30",
        "status": "CHAM"
      }
    ],
    "legalDocs": [
      "QĐ số 1102/QĐ-UBND chấp thuận chủ trương"
    ],
    "coordinates": [
      20.94,
      106.09
    ],
    "procedureStage": {
      "hasApprovedPolicy": true,
      "policyDecisionNo": "1102/QĐ-UBND",
      "policyDecisionDate": "2022-09-15",
      "currentStep": "Rà soát hợp đồng BT theo quy định chuyển tiếp của Luật PPP",
      "procedureStatus": "VUONG_MAC",
      "procedureNotes": "Vướng mắc về cơ chế thanh toán quỹ đất đối ứng cho nhà đầu tư."
    },
    "landClearanceStage": {
      "totalArea": 106.6,
      "surveyedArea": 95,
      "surveyedPercent": 89.1,
      "handedOverArea": 80,
      "handedOverPercent": 75,
      "compensationPlan": {
        "totalCompensationAmount": 490,
        "paidAmount": 360,
        "paidPercent": 73.5,
        "totalHouseholds": 540,
        "paidHouseholds": 410,
        "unresolvedHouseholds": 130,
        "resettlementArrangement": "Đang chờ phê duyệt vị trí khu tái định cư."
      },
      "clearanceStatus": "CHAM_TIEN_DO",
      "clearanceNotes": "130 hộ dân chưa nhận tiền do vướng mắc chuyển đổi cơ cấu cây trồng nông nghiệp sang phi nông nghiệp.",
      "totalPlots": 1919,
      "surveyedPlots": 1710,
      "handedOverPlots": 1439
    },
    "constructionStage": {
      "constructionProgress": 52,
      "constructionPlanNotes": "Nhà thầu chỉ thi công cầm chừng trên đoạn 80ha đã có mặt bằng.",
      "items": [
        {
          "id": "c33-1",
          "name": "Nền mặt đường phân đoạn 1 (Km0 - Km8)",
          "contractor": "Công ty CP Đầu tư & Phát triển Đông Đô",
          "plannedProgress": 75,
          "actualProgress": 52,
          "status": "CHAM_TIEN_DO",
          "note": "Thiếu vốn đối ứng GPMB"
        }
      ],
      "constructionStatus": "CHAM_TIEN_DO"
    },
    "expediteInfo": {
      "isDelayedOrRisk": true,
      "riskLevel": "CHAM_TIEN_DO",
      "delayedStage": "GIAI_PHONG_MAT_BANG",
      "delayedStageLabel": "Giải phóng mặt bằng & Cơ chế thanh toán quỹ đất BT",
      "bottleneckLocation": "Đoạn Km9+000 đến Km14+200 qua địa bàn xã Yên Mỹ",
      "leadDepartment": "Sở Giao thông Vận tải",
      "cooperatingDepartments": [
        "Sở Kế hoạch và Đầu tư",
        "Sở Tài nguyên và Môi trường",
        "UBND huyện Yên Mỹ"
      ],
      "detailedDifficulties": "Vướng mắc quy định pháp luật về phương thức thanh toán hợp đồng BT; nhà đầu tư chậm ứng kinh phí bồi thường GPMB đợt 2 do chưa được giao quỹ đất đối ứng.",
      "proposalsAndRecommendations": "Đề nghị Sở Kế hoạch và Đầu tư chủ trì phối hợp với Sở Tài chính rà soát tổng thể hợp đồng dự án; báo cáo Thường trực UBND tỉnh chỉ đạo phương án tháo gỡ vốn bồi thường trong tháng 11/2026.",
      "expediteHistory": [
        {
          "id": "exp-33-1",
          "date": "2026-09-05",
          "action": "Công văn chỉ đạo số 380/UBND-ĐT",
          "signer": "Phó Chủ tịch UBND tỉnh",
          "content": "Yêu cầu Sở Kế hoạch & Đầu tư rà soát hợp đồng dự án BT theo đúng quy định.",
          "feedbackDeadline": "2026-10-25"
        }
      ]
    },
    "landArea": 106.6,
    "unresolvedIssues": "Giải phóng mặt bằng & Cơ chế thanh toán quỹ đất BT: Đoạn Km9+000 đến Km14+200 qua địa bàn xã Yên Mỹ"
  },
  {
    "id": "proj-34",
    "code": "DA-DN-14",
    "name": "Trung tâm thương mại dịch vụ phức hợp AEON Mall Phố Hiến",
    "sector": "XAY_DUNG_DAN_DUNG",
    "capitalSource": "NGOAI_NSNN",
    "investor": "Công ty TNHH AEON Việt Nam & Đối tác liên doanh",
    "managingDept": "Sở Công Thương",
    "district": "Phường Phố Hiến, Xã Trung Nghĩa",
    "totalInvestment": 3600,
    "disbursedAmount": 850,
    "progress": 35,
    "status": "CHUAN_BI_DAU_TU",
    "currentStage": "THU_TUC_DAU_TU",
    "startDate": "2024-06-15",
    "finishDate": "2027-10-31",
    "landClearanceProgress": 60,
    "landClearanceArea": "7.2 ha / 12 ha",
    "landClearanceNote": "Đang hoàn tất thủ tục giao đất sạch thông qua đấu giá quyền sử dụng đất.",
    "bottlenecks": [
      "Quy trình thẩm định giá khởi điểm đấu giá quyền sử dụng đất thương mại dịch vụ"
    ],
    "milestones": [
      {
        "name": "Ký biên bản ghi nhớ hợp tác đầu tư (MOU)",
        "date": "2023-10-15",
        "status": "HOAN_THANH"
      },
      {
        "name": "Phê duyệt phương án đấu giá đất",
        "date": "2024-05-30",
        "status": "HOAN_THANH"
      },
      {
        "name": "Khởi công xây dựng trung tâm thương mại",
        "date": "2025-03-15",
        "status": "CHUA_DEN"
      }
    ],
    "legalDocs": [
      "Thông báo số 188/TB-UBND chấp thuận địa điểm nghiên cứu"
    ],
    "coordinates": [
      20.668,
      106.065
    ],
    "procedureStage": {
      "hasApprovedPolicy": false,
      "policyDecisionNo": "Đang hoàn thiện thủ tục chấp thuận chủ trương",
      "policyDecisionDate": "Dự kiến 11/2026",
      "currentStep": "Thẩm định giá đất cụ thể để tổ chức đấu giá quyền sử dụng đất thực hiện dự án",
      "procedureStatus": "DANG_THUC_HIEN",
      "procedureNotes": "Dự án thương mại dịch vụ quy mô cấp vùng, thu hút thương hiệu bán lẻ hàng đầu Nhật Bản.",
      "procedures": [
        {
          "id": "proc-1",
          "order": 1,
          "name": "Thủ tục 1: Các thủ tục về đầu tư, doanh nghiệp, góp vốn",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "31/08/2027",
          "completedDate": "27/07/2026",
          "taskCount": 2,
          "updatedTaskCount": 2,
          "completedTaskCount": 2,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Kế hoạch và Đầu tư",
            "Sở Tài chính"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t1-1",
              "name": "Đăng ký thành lập doanh nghiệp dự án / Chi nhánh điều hành",
              "deadline": "30/06/2026",
              "completedDate": "20/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT"
              ]
            },
            {
              "id": "t1-2",
              "name": "Thủ tục chấp thuận chủ trương đầu tư và cấp Giấy chứng nhận ĐKĐT",
              "deadline": "31/08/2027",
              "completedDate": "27/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT",
                "Sở Tài chính"
              ]
            }
          ]
        },
        {
          "id": "proc-2",
          "order": 2,
          "name": "Thủ tục 2: Quy hoạch, khảo sát, chuẩn bị dự án",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "15/06/2027",
          "completedDate": "11/07/2026",
          "taskCount": 5,
          "updatedTaskCount": 5,
          "completedTaskCount": 5,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Xây dựng",
            "Sở Tài chính",
            "UBND cấp xã/phường"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t2-1",
              "name": "Lập, thẩm định và phê duyệt nhiệm vụ quy hoạch chi tiết 1/500",
              "deadline": "15/02/2026",
              "completedDate": "10/02/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-2",
              "name": "Khảo sát địa hình, địa chất phục vụ lập dự án đầu tư",
              "deadline": "30/04/2026",
              "completedDate": "25/04/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-3",
              "name": "Lấy ý kiến cộng đồng dân cư về đồ án quy hoạch",
              "deadline": "30/05/2026",
              "completedDate": "28/05/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "UBND xã/phường"
              ]
            },
            {
              "id": "t2-4",
              "name": "Phê duyệt đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500",
              "deadline": "15/06/2027",
              "completedDate": "11/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t2-5",
              "name": "Lập Báo cáo nghiên cứu khả thi (BCNCKT) dự án ĐTXD",
              "deadline": "30/07/2026",
              "completedDate": "29/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        },
        {
          "id": "proc-3",
          "order": 3,
          "name": "Thủ tục 3: Môi trường, rừng, tài nguyên",
          "status": "HOAN_THANH_DUNG_HAN",
          "statusLabel": "Đã hoàn thành đúng hạn",
          "deadline": "30/04/2027",
          "completedDate": "12/07/2026",
          "taskCount": 1,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Tài nguyên và Môi trường",
            "Sở Nông nghiệp và PTNT"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t3-1",
              "name": "Lập Báo cáo đánh giá tác động môi trường (ĐTM) và thẩm định phê duyệt",
              "deadline": "30/04/2027",
              "completedDate": "12/07/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở TN&MT"
              ]
            }
          ]
        },
        {
          "id": "proc-4",
          "order": 4,
          "name": "Thủ tục 4: Đất đai, GPMB, mặt bằng",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "31/10/2027",
          "taskCount": 5,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "UBND cấp huyện / Trung tâm Phát triển quỹ đất",
          "coDepts": [
            "Sở Tài nguyên và Môi trường",
            "Sở Tài chính",
            "UBND xã/phường"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t4-1",
              "name": "Ban hành thông báo thu hồi đất phục vụ dự án",
              "deadline": "30/05/2026",
              "completedDate": "25/05/2026",
              "status": "HOAN_THANH",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-2",
              "name": "Thực hiện điều tra, khảo sát, đo đạc, kiểm đếm đất đai tài sản",
              "deadline": "30/09/2026",
              "status": "CON_HAN",
              "leadDept": "Trung tâm PTQĐ",
              "coDepts": [
                "UBND xã/phường"
              ]
            },
            {
              "id": "t4-3",
              "name": "Lập và phê duyệt phương án bồi thường, hỗ trợ, tái định cư",
              "deadline": "31/12/2026",
              "status": "CON_HAN",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở Tài chính",
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-4",
              "name": "Hoàn thành hồ sơ, thủ tục thu hồi đất, bồi thường, hỗ trợ, tái định cư/GPMB (nếu Nhà nước thu hồi đất)",
              "deadline": "31/05/2027",
              "status": "CON_HAN",
              "leadDept": "UBND huyện",
              "coDepts": [
                "Sở TN&MT"
              ]
            },
            {
              "id": "t4-5",
              "name": "Bàn giao đất sạch trên thực địa và cấp Giấy chứng nhận quyền sử dụng đất",
              "deadline": "31/10/2027",
              "status": "CON_HAN",
              "leadDept": "Sở TN&MT",
              "coDepts": [
                "UBND huyện"
              ]
            }
          ]
        },
        {
          "id": "proc-5",
          "order": 5,
          "name": "Thủ tục 5: Thiết kế, xây dựng, PCCC, đấu nối",
          "status": "CON_HAN",
          "statusLabel": "Còn hạn",
          "deadline": "30/11/2027",
          "taskCount": 6,
          "updatedTaskCount": 1,
          "completedTaskCount": 1,
          "leadDept": "Chủ đầu tư dự án",
          "coDepts": [
            "Sở Xây dựng",
            "Công an tỉnh (Phòng Cảnh sát PCCC)",
            "Công ty Điện lực"
          ],
          "directDocsCount": 0,
          "tasks": [
            {
              "id": "t5-1",
              "name": "Thỏa thuận đấu nối cấp điện, cấp thoát nước và giao thông",
              "deadline": "30/06/2026",
              "completedDate": "20/06/2026",
              "status": "HOAN_THANH",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Điện lực",
                "Sở GTVT"
              ]
            },
            {
              "id": "t5-2",
              "name": "Thẩm duyệt thiết kế phòng cháy và chữa cháy (PCCC)",
              "deadline": "30/11/2026",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Công an tỉnh"
              ]
            },
            {
              "id": "t5-3",
              "name": "Thẩm định thiết kế bản vẽ thi công và dự toán xây dựng",
              "deadline": "28/02/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            },
            {
              "id": "t5-4",
              "name": "Cấp Giấy phép xây dựng công trình",
              "deadline": "30/04/2027",
              "status": "CON_HAN",
              "leadDept": "Sở Xây dựng",
              "coDepts": [
                "Chủ đầu tư"
              ]
            },
            {
              "id": "t5-5",
              "name": "Đấu thầu lựa chọn nhà thầu xây lắp",
              "deadline": "31/07/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở KH&ĐT"
              ]
            },
            {
              "id": "t5-6",
              "name": "Thông báo khởi công xây dựng công trình",
              "deadline": "30/11/2027",
              "status": "CON_HAN",
              "leadDept": "Chủ đầu tư",
              "coDepts": [
                "Sở Xây dựng"
              ]
            }
          ]
        }
      ]
    },
    "landClearanceStage": {
      "totalArea": 12,
      "surveyedArea": 12,
      "surveyedPercent": 100,
      "handedOverArea": 7.2,
      "handedOverPercent": 60,
      "compensationPlan": {
        "totalCompensationAmount": 145,
        "paidAmount": 95,
        "paidPercent": 65.5,
        "totalHouseholds": 90,
        "paidHouseholds": 65,
        "unresolvedHouseholds": 25,
        "resettlementArrangement": "Đang bố trí tái định cư tại phường Phố Hiến."
      },
      "clearanceStatus": "DANG_THUC_HIEN",
      "clearanceNotes": "Đang chi trả nốt đợt 2 cho 25 hộ đất nông nghiệp còn lại.",
      "totalPlots": 216,
      "surveyedPlots": 216,
      "handedOverPlots": 130
    },
    "constructionStage": {
      "constructionProgress": 5,
      "constructionPlanNotes": "Đang thiết kế cơ sở và chuẩn bị đấu thầu gói thầu cọc móng thử nghiệm.",
      "items": [
        {
          "id": "c34-1",
          "name": "Thiết kế cơ sở và khảo sát địa chất",
          "contractor": "Công ty TNHH Kiến trúc Nikken Sekkei",
          "plannedProgress": 100,
          "actualProgress": 95,
          "status": "DUNG_TIEN_DO"
        }
      ],
      "constructionStatus": "CHUA_KHOI_CONG"
    },
    "expediteInfo": {
      "isDelayedOrRisk": false,
      "riskLevel": "BINH_THUONG",
      "delayedStage": "KHONG_CHAM",
      "delayedStageLabel": "Đúng tiến độ",
      "bottleneckLocation": "Không có điểm nghẽn nghiêm trọng",
      "leadDepartment": "Sở Tài nguyên và Môi trường",
      "cooperatingDepartments": [
        "Sở Tài chính",
        "UBND thành phố Hưng Yên",
        "Sở Kế hoạch & Đầu tư"
      ],
      "detailedDifficulties": "Thẩm định giá đất theo Nghị định 71/2024/NĐ-CP cần đơn vị tư vấn độc lập.",
      "proposalsAndRecommendations": "Đẩy nhanh tiến độ đấu giá quyền sử dụng đất để nhà đầu tư khởi công đúng quý I/2027.",
      "expediteHistory": []
    },
    "landArea": 12,
    "unresolvedIssues": "Không có vướng mắc lớn; đúng tiến độ"
  }
];
