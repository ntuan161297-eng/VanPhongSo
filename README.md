# VĂN PHÒNG SỐ TỈNH HƯNG YÊN (HUNG YEN DIGITAL OFFICE)

> **Nền tảng điều hành số thống nhất – Theo dõi tiến độ, giám sát kết quả, hỗ trợ ra quyết định.**
> Ứng dụng điều hành số phục vụ trình diễn và giới thiệu giải pháp với Thường trực UBND tỉnh Hưng Yên, Lãnh đạo các Sở, Ban, Ngành và UBND các Huyện, Thị xã, Thành phố.

---

## 🏛️ I. KIẾN TRÚC GIAO DIỆN 4 TẦNG (EXECUTIVE 4-TIER ARCHITECTURE)

Hệ thống được thiết kế theo đúng tiêu chuẩn **Modern Government Premium Executive Dashboard**, không sử dụng Sidebar trái nhằm tối ưu hóa 100% không gian hiển thị cho các màn hình điều hành lãnh đạo:

- **TẦNG 1 – HEADER (Nền xanh `#348AC7`, cao 60px):**
  - Biểu tượng nhận diện chính quyền tỉnh (Landmark vector), định danh: `UBND TỈNH HƯNG YÊN - VĂN PHÒNG SỐ`.
  - Bộ chuyển đổi vai trò (Role Switcher): *Lãnh đạo UBND Tỉnh*, *Lãnh đạo Sở/Ngành*, *Chuyên viên Tổng hợp*.
  - Công cụ tìm kiếm nhanh toàn hệ thống.
  - Chuông cảnh báo điều hành thông minh (kèm số lượng thông báo mới và phân loại khẩn cấp).
  - Menu tài khoản người dùng: Thông tin cá nhân, Tổng hợp – Báo cáo, Tài liệu HDSD, Quản trị hệ thống, Phân quyền, Đăng xuất demo.

- **TẦNG 2 – MENU CHA (Hàng Tab cấp 1 ngang, cao 42px, bo góc trên 7px, active `#0798EB`):**
  - **TAB 1:** `NHIỆM VỤ GIAO` (Icon: ClipboardCheck)
  - **TAB 2:** `DỰ ÁN TRỌNG ĐIỂM` (Icon: Building2)
  - **TAB 3:** `GIẢI NGÂN VỐN ĐẦU TƯ CÔNG` (Icon: ChartNoAxesCombined)
  - **TAB 4:** `THU CHI NGÂN SÁCH` (Icon: Wallet)

- **TẦNG 3 – MENU CON (Hàng Tab cấp 2, nằm sát hàng Tab cha 0–2px):**
  - **Nhiệm vụ giao:** *Dashboard* | *Nhiệm vụ cần xử lý* | *Nhiệm vụ đã hoàn thành* | *Nhiệm vụ hoàn thành quá hạn* | *Nhiệm vụ đang giải quyết* | *Nhiệm vụ đang giải quyết quá hạn*
  - **Dự án trọng điểm:** *Dashboard* | *Giao thông* | *Xây dựng dân dụng* | *Nông nghiệp*
  - **Giải ngân vốn ĐTC:** *Dashboard* | *Vốn đầu tư* | *Vốn sự nghiệp* | *Giải ngân CNTT*
  - **Thu chi ngân sách:** *Dashboard* | *Thu* | *Chi*

- **TẦNG 4 – DASHBOARD VÀ MÀN HÌNH NGHIỆP VỤ CHI TIẾT:**
  - Tiêu đề nghiệp vụ, kỳ báo cáo, nhãn DEMO.
  - Bộ lọc điều hành toàn diện: Năm, Kỳ/Tháng/Quý, Đơn vị/Sở Ban Ngành, Địa bàn huyện/thị, Tìm kiếm từ khóa, Nút Xóa lọc, Làm mới, In báo cáo, Xuất file CSV thực tế.
  - Khối Executive Summary nền Navy (`#15355B`).
  - Lưới KPI Cards số liệu điều hành lớn, rõ ràng.
  - Biểu đồ trực quan (Recharts) đa chiều: Donut, Bar ngang, Line xu hướng, Phân bố ngành.
  - Bảng dữ liệu chi tiết có phân trang, tìm kiếm, sắp xếp và xem chi tiết qua Drawer.

---

## 🚀 II. CÁC TÍNH NĂNG VÀ HỢP PHẦN HOÀN CHỈNH

### 1. Hợp phần Nhiệm vụ giao (Hoàn thiện cấp độ cao nhất)
- **3 Chế độ chuyển đổi Dashboard (Segmented):**
  1. **Tổng quan & Cảnh báo:** Executive summary, 7 KPI Cards (Tổng, Hoàn thành, Đang làm, Quá hạn, Sắp đến hạn, Chờ duyệt, Chưa giao), Donut cơ cấu tiến độ, Biểu đồ xu hướng 6 tháng, Danh sách đơn vị cần tập trung, 2 biểu đồ cột ngang xếp hạng đơn vị quá hạn và đơn vị xuất sắc.
  2. **Phân tích chuyên sâu:** Ma trận phân tích tiến độ chi tiết theo từng Sở/Ngành/Huyện, biểu đồ theo lãnh đạo UBND tỉnh giao việc, cơ cấu 7 lĩnh vực công tác.
  3. **Đôn đốc & Xử lý gấp:** Banner đỏ cảnh báo lãnh đạo, 4 khối cảnh báo khẩn, Bảng danh sách ưu tiên xử lý.
- **Tính năng Đôn đốc mô phỏng (Urgency Modal):** Cho phép lãnh đạo nhập chỉ đạo khẩn, chọn người ký, mức độ hỏa tốc và hạn báo cáo, tự động ghi vào lịch sử tiến độ nhiệm vụ.
- **Hồ sơ chi tiết nhiệm vụ (TaskDetailDrawer - 720px):** Toàn bộ thông tin giao việc, người chủ trì, đơn vị phối hợp, tiến độ, timeline lịch sử, văn bản pháp lý liên quan và liên kết phần mềm nguồn.
- **Hơn 120 nhiệm vụ giả lập thực tế:** Gắn với các địa danh và bài toán phát triển kinh tế - xã hội của tỉnh Hưng Yên (Vành đai 4, Tân Phúc - Võng Phan, Bắc Hưng Hải, v.v.).

### 2. Hợp phần Dự án trọng điểm
- Giám sát 31 dự án trọng điểm với tổng mức đầu tư hơn 35.000 tỷ VNĐ.
- **Bộ lọc nguồn vốn:** Phân tách rõ ràng giữa **Vốn NSNN** và **Ngoài NSNN** (Xã hội hóa, doanh nghiệp FDI/trong nước).
- **Bản đồ không gian dự án tỉnh Hưng Yên (HungYenProjectMap):** Tọa độ thực tế của từng dự án trên bản đồ số tỉnh, phân loại màu theo lĩnh vực và trạng thái chậm tiến độ, tooltip tương tác.
- **Hồ sơ chi tiết dự án (7 Tab nội bộ):**
  1. Thông tin chung
  2. Tiến độ mốc việc (Timeline)
  3. Kế hoạch vốn
  4. Giải phóng mặt bằng (Diện tích, tiến độ, vướng mắc dân cư)
  5. Vướng mắc và kiến nghị
  6. Bản đồ số GIS
  7. Văn bản pháp lý liên quan
- **3 Tab chuyên ngành:** Giao thông, Xây dựng dân dụng, Nông nghiệp & Thủy lợi.

### 3. Hợp phần Giải ngân vốn đầu tư công
- Giám sát 3 nhóm vốn: **Vốn đầu tư phát triển**, **Vốn sự nghiệp**, **Giải ngân ứng dụng CNTT & CĐS**.
- Tiến độ lũy kế 12 tháng so sánh mục tiêu và thực hiện.
- Xếp hạng cảnh báo các đơn vị có tỷ lệ giải ngân dưới 60%.
- So sánh kế hoạch vốn và thực tế giải ngân theo từng ngành.
- Định dạng tiền tệ VND chuẩn xác (Tỷ VNĐ).

### 4. Hợp phần Thu chi ngân sách
- Giám sát cân đối tài chính công 12 tháng năm 2024.
- Biểu đồ kết hợp cột và đường: Dự toán thu/chi so với thực thu/thực chi.
- Bảng cân đối thu chi theo tháng.
- Cơ cấu chi tiết 6 khoản thu và 7 lĩnh vực chi chính.
- **Nhãn tích hợp IOC bắt buộc:** `"Nguồn dữ liệu dự kiến: IOC | Trạng thái hiện tại: Demo – Chưa kết nối"`.

### 5. Tiện ích Báo cáo & Quản trị hệ thống
- **Tổng hợp – Báo cáo (ReportModal):** Tổng hợp liên hợp 4 hợp phần, hỗ trợ in ấn trực tiếp và xuất file CSV thực tế.
- **Quản trị hệ thống (AdminModal):** Thông tin nguồn dữ liệu, metadata và ma trận phân quyền người dùng mẫu.
- **Hướng dẫn sử dụng (UserGuideModal):** Hướng dẫn chi tiết dành cho lãnh đạo và chuyên viên.

---

## 🛠️ III. HƯỚNG DẪN KHỞI CHẠY (LOCAL RUN)

Ứng dụng đang chạy trên môi trường local:

- **Địa chỉ truy cập:** [http://127.0.0.1:5173/](http://127.0.0.1:5173/)
- **Thư mục mã nguồn:** `C:\Users\DELL\.gemini\antigravity-ide\scratch\hung-yen-digital-office`

### Khởi động bằng dòng lệnh:
```powershell
cd C:\Users\DELL\.gemini\antigravity-ide\scratch\hung-yen-digital-office
$env:PATH = "C:\AI_Text_To_Video_Studio\runtime;$env:PATH"
npm run dev -- --host 127.0.0.1 --port 5173
```

### Đóng gói Production Bundle:
```powershell
npm run build
```

---

## 🔌 IV. SẴN SÀNG TÍCH HỢP HỆ THỐNG THẬT (PHASE 2 ROADMAP)

Mã nguồn được thiết kế với lớp Service Adapter độc lập (`src/services/dataService.ts`), giúp tách biệt hoàn toàn giữa giao diện và nguồn dữ liệu:

1. **Phần mềm Quản lý & Theo dõi nhiệm vụ UBND tỉnh:** Thay thế `TaskService.getAll()` bằng REST API endpoint `GET /api/v1/tasks`.
2. **Hệ thống Quản lý Dự án ĐTXD (Sở KH&ĐT):** Thay thế `ProjectService.getAll()` bằng `GET /api/v1/projects`.
3. **Hệ thống Kho bạc & Đầu tư công Tabmis:** Thay thế `DisbursementService.getAll()` bằng `GET /api/v1/disbursement`.
4. **Hệ sinh thái IOC Hưng Yên:** Tích hợp SSO Gov (OAuth2 / OpenID Connect) và WebSocket streaming dữ liệu ngân sách thời gian thực.
