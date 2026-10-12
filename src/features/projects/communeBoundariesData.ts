export interface CommuneZone {
  id: string;
  name: string;
  shortName: string;
  center: [number, number];
  polygon: [number, number][];
  hasRedPin?: boolean;
  projectCount: number;
  areaKm2: number;
  population?: number;
}

// Danh sách toàn bộ các xã/phường trên địa bàn tỉnh theo đúng phân định địa giới hành chính ảnh 1
export const COMMUNE_ZONES: CommuneZone[] = [
  // --- KHU VỰC BẮC HƯNG YÊN (Văn Giang, Văn Lâm, Mỹ Hào, Yên Mỹ) ---
  {
    id: 'xa-phung-cong',
    name: 'Xã Phụng Công',
    shortName: 'Phụng Công',
    center: [20.975, 105.930],
    hasRedPin: true,
    projectCount: 4,
    areaKm2: 12.4,
    polygon: [
      [20.990, 105.915], [20.995, 105.945], [20.965, 105.950], [20.955, 105.920]
    ]
  },
  {
    id: 'xa-nhu-quynh',
    name: 'Xã Như Quỳnh',
    shortName: 'Như Quỳnh',
    center: [20.990, 106.010],
    hasRedPin: false,
    projectCount: 6,
    areaKm2: 16.2,
    polygon: [
      [21.010, 105.980], [21.015, 106.040], [20.975, 106.045], [20.970, 105.980]
    ]
  },
  {
    id: 'xa-nghia-tru',
    name: 'Xã Nghĩa Trụ',
    shortName: 'Nghĩa Trụ',
    center: [20.965, 105.975],
    hasRedPin: true,
    projectCount: 5,
    areaKm2: 14.8,
    polygon: [
      [20.980, 105.950], [20.985, 106.000], [20.945, 106.005], [20.940, 105.955]
    ]
  },
  {
    id: 'xa-van-giang',
    name: 'Xã Văn Giang',
    shortName: 'Văn Giang',
    center: [20.940, 105.955],
    hasRedPin: false,
    projectCount: 5,
    areaKm2: 15.6,
    polygon: [
      [20.955, 105.930], [20.960, 105.980], [20.925, 105.980], [20.920, 105.930]
    ]
  },
  {
    id: 'phuong-my-hao',
    name: 'Phường Mỹ Hào',
    shortName: 'P. Mỹ Hào',
    center: [20.955, 106.100],
    hasRedPin: true,
    projectCount: 8,
    areaKm2: 18.5,
    polygon: [
      [20.975, 106.060], [20.980, 106.135], [20.935, 106.140], [20.930, 106.065]
    ]
  },
  {
    id: 'phuong-duong-hao',
    name: 'Phường Đường Hào',
    shortName: 'P. Đường Hào',
    center: [20.920, 106.120],
    hasRedPin: false,
    projectCount: 3,
    areaKm2: 14.1,
    polygon: [
      [20.935, 106.090], [20.940, 106.150], [20.905, 106.155], [20.900, 106.095]
    ]
  },
  {
    id: 'phuong-thuong-hong',
    name: 'Phường Thương Hồng',
    shortName: 'P. Thương Hồng',
    center: [20.945, 106.170],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.5,
    polygon: [
      [20.965, 106.140], [20.970, 106.200], [20.925, 106.205], [20.920, 106.145]
    ]
  },
  {
    id: 'xa-nguyen-van-linh',
    name: 'Xã Nguyễn Văn Linh',
    shortName: 'Nguyễn Văn Linh',
    center: [20.940, 106.035],
    hasRedPin: false,
    projectCount: 3,
    areaKm2: 12.8,
    polygon: [
      [20.955, 106.005], [20.960, 106.065], [20.925, 106.070], [20.920, 106.010]
    ]
  },
  {
    id: 'xa-hoan-long',
    name: 'Xã Hoàn Long',
    shortName: 'Hoàn Long',
    center: [20.915, 105.980],
    hasRedPin: false,
    projectCount: 3,
    areaKm2: 13.9,
    polygon: [
      [20.930, 105.955], [20.935, 106.005], [20.895, 106.010], [20.890, 105.960]
    ]
  },
  {
    id: 'xa-me-so',
    name: 'Xã Mễ Sở',
    shortName: 'Mễ Sở',
    center: [20.910, 105.925],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 11.8,
    polygon: [
      [20.930, 105.900], [20.930, 105.950], [20.890, 105.955], [20.890, 105.905]
    ]
  },
  {
    id: 'xa-viet-yen',
    name: 'Xã Việt Yên',
    shortName: 'Việt Yên',
    center: [20.910, 106.040],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.2,
    polygon: [
      [20.925, 106.015], [20.930, 106.070], [20.890, 106.070], [20.885, 106.015]
    ]
  },
  {
    id: 'xa-yen-my',
    name: 'Xã Yên Mỹ',
    shortName: 'Yên Mỹ',
    center: [20.885, 106.045],
    hasRedPin: true,
    projectCount: 5,
    areaKm2: 16.4,
    polygon: [
      [20.905, 106.015], [20.910, 106.075], [20.865, 106.075], [20.860, 106.015]
    ]
  },
  {
    id: 'xa-pham-ngu-lao',
    name: 'Xã Phạm Ngũ Lão',
    shortName: 'Phạm Ngũ Lão',
    center: [20.885, 106.130],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.5,
    polygon: [
      [20.905, 106.095], [20.910, 106.165], [20.865, 106.170], [20.860, 106.100]
    ]
  },

  // --- KHU VỰC TRUNG TÂM (Khoái Châu, Ân Thi, Kim Động, Phố Hiến) ---
  {
    id: 'xa-trieu-viet-vuong',
    name: 'Xã Triệu Việt Vương',
    shortName: 'Triệu Việt Vương',
    center: [20.855, 105.990],
    hasRedPin: true,
    projectCount: 4,
    areaKm2: 15.3,
    polygon: [
      [20.875, 105.960], [20.880, 106.020], [20.835, 106.025], [20.830, 105.965]
    ]
  },
  {
    id: 'xa-khoai-chau',
    name: 'Xã Khoái Châu',
    shortName: 'Khoái Châu',
    center: [20.825, 105.975],
    hasRedPin: true,
    projectCount: 5,
    areaKm2: 17.2,
    polygon: [
      [20.845, 105.945], [20.850, 106.005], [20.805, 106.010], [20.800, 105.950]
    ]
  },
  {
    id: 'xa-chau-ninh',
    name: 'Xã Châu Ninh',
    shortName: 'Châu Ninh',
    center: [20.810, 105.930],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 11.5,
    polygon: [
      [20.830, 105.905], [20.830, 105.955], [20.790, 105.955], [20.790, 105.910]
    ]
  },
  {
    id: 'xa-viet-tien',
    name: 'Xã Việt Tiến',
    shortName: 'Việt Tiến',
    center: [20.845, 106.050],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.0,
    polygon: [
      [20.865, 106.020], [20.870, 106.080], [20.825, 106.085], [20.820, 106.025]
    ]
  },
  {
    id: 'xa-xuan-truc',
    name: 'Xã Xuân Trúc',
    shortName: 'Xuân Trúc',
    center: [20.840, 106.110],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.0,
    polygon: [
      [20.860, 106.080], [20.865, 106.140], [20.820, 106.145], [20.815, 106.085]
    ]
  },
  {
    id: 'xa-an-thi',
    name: 'Xã Ân Thi',
    shortName: 'Ân Thi',
    center: [20.820, 106.160],
    hasRedPin: true,
    projectCount: 3,
    areaKm2: 17.5,
    polygon: [
      [20.845, 106.135], [20.845, 106.195], [20.795, 106.195], [20.795, 106.135]
    ]
  },
  {
    id: 'xa-nguyen-trai-hy',
    name: 'Xã Nguyễn Trãi',
    shortName: 'Nguyễn Trãi',
    center: [20.785, 106.135],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.8,
    polygon: [
      [20.810, 106.105], [20.810, 106.165], [20.760, 106.165], [20.760, 106.105]
    ]
  },
  {
    id: 'xa-chi-minh',
    name: 'Xã Chí Minh',
    shortName: 'Chí Minh',
    center: [20.765, 105.995],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.7,
    polygon: [
      [20.790, 105.965], [20.790, 106.025], [20.740, 106.025], [20.740, 105.965]
    ]
  },
  {
    id: 'xa-nghia-dan',
    name: 'Xã Nghĩa Dân',
    shortName: 'Nghĩa Dân',
    center: [20.750, 106.040],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 12.9,
    polygon: [
      [20.770, 106.015], [20.770, 106.070], [20.730, 106.070], [20.730, 106.015]
    ]
  },
  {
    id: 'xa-luong-bang',
    name: 'Xã Lương Bằng',
    shortName: 'Lương Bằng',
    center: [20.725, 106.030],
    hasRedPin: false,
    projectCount: 3,
    areaKm2: 14.6,
    polygon: [
      [20.745, 106.000], [20.750, 106.060], [20.705, 106.060], [20.700, 106.000]
    ]
  },
  {
    id: 'xa-hong-quang',
    name: 'Xã Hồng Quang',
    shortName: 'Hồng Quang',
    center: [20.730, 106.090],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.1,
    polygon: [
      [20.750, 106.060], [20.755, 106.120], [20.710, 106.120], [20.705, 106.060]
    ]
  },
  {
    id: 'xa-doan-dao',
    name: 'Xã Đoàn Đào',
    shortName: 'Đoàn Đào',
    center: [20.710, 106.140],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.5,
    polygon: [
      [20.730, 106.110], [20.735, 106.170], [20.690, 106.170], [20.685, 106.110]
    ]
  },
  {
    id: 'xa-quang-hung',
    name: 'Xã Quang Hưng',
    shortName: 'Quang Hưng',
    center: [20.720, 106.200],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.8,
    polygon: [
      [20.740, 106.170], [20.745, 106.230], [20.700, 106.230], [20.695, 106.170]
    ]
  },
  {
    id: 'xa-duc-hop',
    name: 'Xã Đức Hợp',
    shortName: 'Đức Hợp',
    center: [20.700, 105.980],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.0,
    polygon: [
      [20.720, 105.950], [20.720, 106.005], [20.675, 106.005], [20.675, 105.955]
    ]
  },
  {
    id: 'xa-hiep-cuong',
    name: 'Xã Hiệp Cường',
    shortName: 'Hiệp Cường',
    center: [20.690, 106.030],
    hasRedPin: true,
    projectCount: 3,
    areaKm2: 14.2,
    polygon: [
      [20.710, 106.005], [20.715, 106.055], [20.670, 106.055], [20.665, 106.005]
    ]
  },
  {
    id: 'xa-hoang-hoa-tham',
    name: 'Xã Hoàng Hoa Thám',
    shortName: 'Hoàng Hoa Thám',
    center: [20.670, 106.070],
    hasRedPin: true,
    projectCount: 3,
    areaKm2: 13.9,
    polygon: [
      [20.690, 106.040], [20.695, 106.100], [20.650, 106.100], [20.645, 106.040]
    ]
  },
  {
    id: 'xa-tien-tien',
    name: 'Xã Tiền Tiến',
    shortName: 'Tiền Tiến',
    center: [20.670, 106.200],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.3,
    polygon: [
      [20.690, 106.170], [20.695, 106.230], [20.650, 106.230], [20.645, 106.170]
    ]
  },
  {
    id: 'xa-tien-hoa',
    name: 'Xã Tiên Hoa',
    shortName: 'Tiên Hoa',
    center: [20.655, 106.145],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 11.8,
    polygon: [
      [20.675, 106.115], [20.675, 106.175], [20.635, 106.175], [20.635, 106.115]
    ]
  },
  {
    id: 'xa-tong-tran',
    name: 'Xã Tổng Trân',
    shortName: 'Tổng Trân',
    center: [20.635, 106.190],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.0,
    polygon: [
      [20.655, 106.160], [20.655, 106.220], [20.615, 106.220], [20.615, 106.160]
    ]
  },
  {
    id: 'phuong-son-nam',
    name: 'Phường Sơn Nam',
    shortName: 'P. Sơn Nam',
    center: [20.665, 106.030],
    hasRedPin: false,
    projectCount: 3,
    areaKm2: 11.2,
    polygon: [
      [20.680, 106.010], [20.685, 106.050], [20.650, 106.050], [20.645, 106.010]
    ]
  },
  {
    id: 'phuong-pho-hien',
    name: 'Phường Phố Hiến',
    shortName: 'P. Phố Hiến',
    center: [20.650, 106.050],
    hasRedPin: true,
    projectCount: 6,
    areaKm2: 16.8,
    polygon: [
      [20.670, 106.025], [20.670, 106.075], [20.625, 106.075], [20.625, 106.025]
    ]
  },
  {
    id: 'xa-tan-hung',
    name: 'Xã Tân Hưng',
    shortName: 'Tân Hưng',
    center: [20.625, 106.040],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.1,
    polygon: [
      [20.645, 106.015], [20.645, 106.065], [20.605, 106.065], [20.605, 106.015]
    ]
  },
  {
    id: 'xa-tien-lu',
    name: 'Xã Tiên Lữ',
    shortName: 'Tiên Lữ',
    center: [20.620, 106.100],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.5,
    polygon: [
      [20.640, 106.070], [20.640, 106.130], [20.600, 106.130], [20.600, 106.070]
    ]
  },
  {
    id: 'phuong-hong-chau',
    name: 'Phường Hồng Châu',
    shortName: 'P. Hồng Châu',
    center: [20.610, 106.040],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 10.9,
    polygon: [
      [20.625, 106.015], [20.625, 106.065], [20.590, 106.065], [20.590, 106.020]
    ]
  },

  // --- KHU VỰC THÁI BÌNH (Quỳnh Phụ, Hưng Hà, Đông Hưng, Thái Thụy, TP Thái Bình, Tiền Hải, Kiến Xương, Vũ Thư) ---
  {
    id: 'xa-ngoc-lam',
    name: 'Xã Ngọc Lâm',
    shortName: 'Ngọc Lâm',
    center: [20.645, 106.240],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.5,
    polygon: [
      [20.665, 106.210], [20.665, 106.270], [20.625, 106.270], [20.625, 106.210]
    ]
  },
  {
    id: 'xa-minh-tho',
    name: 'Xã Minh Thọ',
    shortName: 'Minh Thọ',
    center: [20.660, 106.310],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.8,
    polygon: [
      [20.680, 106.275], [20.680, 106.345], [20.640, 106.345], [20.640, 106.275]
    ]
  },
  {
    id: 'xa-a-sao',
    name: 'Xã A Sào',
    shortName: 'A Sào',
    center: [20.670, 106.370],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.2,
    polygon: [
      [20.690, 106.340], [20.695, 106.405], [20.650, 106.405], [20.645, 106.340]
    ]
  },
  {
    id: 'xa-ngu-thien',
    name: 'Xã Ngự Thiền',
    shortName: 'Ngự Thiền',
    center: [20.590, 106.140],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.7,
    polygon: [
      [20.610, 106.110], [20.610, 106.170], [20.570, 106.170], [20.570, 106.110]
    ]
  },
  {
    id: 'xa-dien-ha',
    name: 'Xã Diên Hà',
    shortName: 'Diên Hà',
    center: [20.610, 106.220],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 14.0,
    polygon: [
      [20.630, 106.185], [20.630, 106.255], [20.590, 106.255], [20.590, 106.185]
    ]
  },
  {
    id: 'xa-quynh-phu',
    name: 'Xã Quỳnh Phụ',
    shortName: 'Quỳnh Phụ',
    center: [20.650, 106.350],
    hasRedPin: true,
    projectCount: 4,
    areaKm2: 17.0,
    polygon: [
      [20.670, 106.315], [20.675, 106.385], [20.625, 106.385], [20.625, 106.315]
    ]
  },
  {
    id: 'xa-dong-bang',
    name: 'Xã Đồng Bằng',
    shortName: 'Đồng Bằng',
    center: [20.640, 106.410],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.5,
    polygon: [
      [20.660, 106.380], [20.665, 106.445], [20.620, 106.445], [20.615, 106.380]
    ]
  },
  {
    id: 'xa-phu-duc',
    name: 'Xã Phụ Dực',
    shortName: 'Phụ Dực',
    center: [20.630, 106.480],
    hasRedPin: true,
    projectCount: 3,
    areaKm2: 15.2,
    polygon: [
      [20.655, 106.445], [20.655, 106.515], [20.605, 106.515], [20.605, 106.445]
    ]
  },
  {
    id: 'xa-long-hung',
    name: 'Xã Long Hưng',
    shortName: 'Long Hưng',
    center: [20.560, 106.120],
    hasRedPin: true,
    projectCount: 3,
    areaKm2: 13.8,
    polygon: [
      [20.585, 106.090], [20.585, 106.150], [20.535, 106.150], [20.535, 106.090]
    ]
  },
  {
    id: 'xa-tien-la',
    name: 'Xã Tiên La',
    shortName: 'Tiên La',
    center: [20.550, 106.180],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.5,
    polygon: [
      [20.570, 106.150], [20.575, 106.210], [20.525, 106.210], [20.525, 106.150]
    ]
  },
  {
    id: 'xa-than-khe',
    name: 'Xã Thần Khê',
    shortName: 'Thần Khê',
    center: [20.580, 106.240],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.9,
    polygon: [
      [20.600, 106.210], [20.600, 106.270], [20.560, 106.270], [20.560, 106.210]
    ]
  },
  {
    id: 'xa-bac-tien-hung',
    name: 'Xã Bắc Tiên Hưng',
    shortName: 'Bắc Tiên Hưng',
    center: [20.560, 106.270],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.3,
    polygon: [
      [20.580, 106.240], [20.580, 106.300], [20.540, 106.300], [20.540, 106.240]
    ]
  },
  {
    id: 'xa-quynh-an',
    name: 'Xã Quỳnh An',
    shortName: 'Quỳnh An',
    center: [20.600, 106.350],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.1,
    polygon: [
      [20.620, 106.315], [20.620, 106.385], [20.580, 106.385], [20.580, 106.315]
    ]
  },
  {
    id: 'xa-bac-dong-hung',
    name: 'Xã Bắc Đông Hưng',
    shortName: 'Bắc Đông Hưng',
    center: [20.570, 106.370],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.0,
    polygon: [
      [20.590, 106.340], [20.590, 106.400], [20.550, 106.400], [20.550, 106.340]
    ]
  },
  {
    id: 'xa-tan-tien',
    name: 'Xã Tân Tiến',
    shortName: 'Tân Tiến',
    center: [20.590, 106.450],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.6,
    polygon: [
      [20.610, 106.415], [20.610, 106.485], [20.570, 106.485], [20.570, 106.415]
    ]
  },
  {
    id: 'xa-tay-thuy-anh',
    name: 'Xã Tây Thụy Anh',
    shortName: 'Tây Thụy Anh',
    center: [20.570, 106.500],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.0,
    polygon: [
      [20.590, 106.470], [20.590, 106.535], [20.550, 106.535], [20.550, 106.470]
    ]
  },
  {
    id: 'xa-thuy-anh',
    name: 'Xã Thụy Anh',
    shortName: 'Thụy Anh',
    center: [20.550, 106.540],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.5,
    polygon: [
      [20.570, 106.510], [20.575, 106.575], [20.530, 106.575], [20.525, 106.510]
    ]
  },
  {
    id: 'xa-bac-thuy-anh',
    name: 'Xã Bắc Thụy Anh',
    shortName: 'Bắc Thụy Anh',
    center: [20.570, 106.590],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 14.2,
    polygon: [
      [20.590, 106.560], [20.595, 106.630], [20.545, 106.630], [20.545, 106.560]
    ]
  },
  {
    id: 'xa-dong-thuy-anh',
    name: 'Xã Đông Thụy Anh',
    shortName: 'Đông Thụy Anh',
    center: [20.580, 106.660],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 15.6,
    polygon: [
      [20.600, 106.620], [20.605, 106.700], [20.555, 106.700], [20.550, 106.620]
    ]
  },
  {
    id: 'xa-thai-thuy',
    name: 'Xã Thái Thụy',
    shortName: 'Thái Thụy',
    center: [20.510, 106.610],
    hasRedPin: true,
    projectCount: 4,
    areaKm2: 19.5,
    polygon: [
      [20.535, 106.570], [20.540, 106.660], [20.480, 106.660], [20.480, 106.570]
    ]
  },
  {
    id: 'xa-hung-ha',
    name: 'Xã Hưng Hà',
    shortName: 'Hưng Hà',
    center: [20.520, 106.190],
    hasRedPin: true,
    projectCount: 4,
    areaKm2: 16.5,
    polygon: [
      [20.545, 106.155], [20.550, 106.225], [20.495, 106.225], [20.495, 106.155]
    ]
  },
  {
    id: 'xa-dong-tien-hung',
    name: 'Xã Đông Tiến Hưng',
    shortName: 'Đông Tiến Hưng',
    center: [20.530, 106.270],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.0,
    polygon: [
      [20.550, 106.240], [20.550, 106.300], [20.510, 106.300], [20.510, 106.240]
    ]
  },
  {
    id: 'xa-dong-hung',
    name: 'Xã Đông Hưng',
    shortName: 'Đông Hưng',
    center: [20.530, 106.340],
    hasRedPin: true,
    projectCount: 4,
    areaKm2: 16.2,
    polygon: [
      [20.550, 106.305], [20.555, 106.375], [20.505, 106.375], [20.505, 106.305]
    ]
  },
  {
    id: 'xa-nam-thuy-anh',
    name: 'Xã Nam Thủy Anh',
    shortName: 'Nam Thủy Anh',
    center: [20.520, 106.480],
    hasRedPin: true,
    projectCount: 2,
    areaKm2: 13.9,
    polygon: [
      [20.545, 106.445], [20.545, 106.515], [20.495, 106.515], [20.495, 106.445]
    ]
  },
  {
    id: 'xa-bac-dong-quan',
    name: 'Xã Bắc Đông Quan',
    shortName: 'Bắc Đông Quan',
    center: [20.500, 106.370],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.8,
    polygon: [
      [20.520, 106.340], [20.520, 106.400], [20.480, 106.400], [20.480, 106.340]
    ]
  },
  {
    id: 'xa-thai-ninh',
    name: 'Xã Thái Ninh',
    shortName: 'Thái Ninh',
    center: [20.480, 106.570],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.5,
    polygon: [
      [20.505, 106.535], [20.505, 106.605], [20.455, 106.605], [20.455, 106.535]
    ]
  },
  {
    id: 'xa-tien-hung',
    name: 'Xã Tiên Hưng',
    shortName: 'Tiên Hưng',
    center: [20.490, 106.230],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.6,
    polygon: [
      [20.510, 106.200], [20.510, 106.260], [20.470, 106.260], [20.470, 106.200]
    ]
  },
  {
    id: 'xa-nam-tien-hung',
    name: 'Xã Nam Tiên Hưng',
    shortName: 'Nam Tiên Hưng',
    center: [20.470, 106.250],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.0,
    polygon: [
      [20.490, 106.220], [20.490, 106.280], [20.450, 106.280], [20.450, 106.220]
    ]
  },
  {
    id: 'xa-nam-dong-hung',
    name: 'Xã Nam Đông Hưng',
    shortName: 'Nam Đông Hưng',
    center: [20.465, 106.330],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.5,
    polygon: [
      [20.485, 106.300], [20.485, 106.360], [20.445, 106.360], [20.445, 106.300]
    ]
  },
  {
    id: 'xa-dong-quan',
    name: 'Xã Đông Quan',
    shortName: 'Đông Quan',
    center: [20.470, 106.410],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.2,
    polygon: [
      [20.490, 106.380], [20.495, 106.445], [20.450, 106.445], [20.445, 106.380]
    ]
  },
  {
    id: 'xa-bac-thai',
    name: 'Xã Bắc Thái',
    shortName: 'Bắc Thái',
    center: [20.450, 106.520],
    hasRedPin: true,
    projectCount: 2,
    areaKm2: 14.1,
    polygon: [
      [20.475, 106.485], [20.475, 106.555], [20.425, 106.555], [20.425, 106.485]
    ]
  },
  {
    id: 'xa-dong-thai-ninh',
    name: 'Xã Đông Thái Ninh',
    shortName: 'Đông Thái Ninh',
    center: [20.450, 106.600],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.7,
    polygon: [
      [20.475, 106.565], [20.475, 106.640], [20.425, 106.640], [20.425, 106.565]
    ]
  },
  {
    id: 'xa-nam-thai-ninh',
    name: 'Xã Nam Thái Ninh',
    shortName: 'Nam Thái Ninh',
    center: [20.420, 106.550],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.8,
    polygon: [
      [20.440, 106.515], [20.440, 106.585], [20.400, 106.585], [20.400, 106.515]
    ]
  },

  // --- PHÍA NAM: VŨ THƯ, TP THÁI BÌNH, KIẾN XƯƠNG, TIỀN HẢI ---
  {
    id: 'xa-hong-minh',
    name: 'Xã Hồng Minh',
    shortName: 'Hồng Minh',
    center: [20.460, 106.160],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.5,
    polygon: [
      [20.485, 106.130], [20.485, 106.190], [20.435, 106.190], [20.435, 106.130]
    ]
  },
  {
    id: 'xa-le-quy-don',
    name: 'Xã Lê Quý Đôn',
    shortName: 'Lê Quý Đôn',
    center: [20.490, 106.110],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 11.9,
    polygon: [
      [20.515, 106.080], [20.515, 106.140], [20.465, 106.140], [20.465, 106.080]
    ]
  },
  {
    id: 'xa-tra-giang',
    name: 'Xã Trà Giang',
    shortName: 'Trà Giang',
    center: [20.435, 106.420],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.2,
    polygon: [
      [20.455, 106.390], [20.455, 106.450], [20.415, 106.450], [20.415, 106.390]
    ]
  },
  {
    id: 'xa-van-xuan',
    name: 'Xã Vạn Xuân',
    shortName: 'Vạn Xuân',
    center: [20.425, 106.120],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.0,
    polygon: [
      [20.450, 106.085], [20.450, 106.155], [20.400, 106.155], [20.400, 106.085]
    ]
  },
  {
    id: 'xa-thu-tri',
    name: 'Xã Thư Trì',
    shortName: 'Thư Trì',
    center: [20.425, 106.210],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.4,
    polygon: [
      [20.445, 106.180], [20.445, 106.240], [20.405, 106.240], [20.405, 106.180]
    ]
  },
  {
    id: 'phuong-thai-binh',
    name: 'Phường Thái Bình',
    shortName: 'P. Thái Bình',
    center: [20.450, 106.330],
    hasRedPin: false,
    projectCount: 5,
    areaKm2: 17.5,
    polygon: [
      [20.470, 106.300], [20.470, 106.365], [20.430, 106.365], [20.430, 106.300]
    ]
  },
  {
    id: 'phuong-tra-ly',
    name: 'Phường Trà Lý',
    shortName: 'P. Trà Lý',
    center: [20.430, 106.360],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.0,
    polygon: [
      [20.450, 106.330], [20.450, 106.395], [20.410, 106.395], [20.410, 106.330]
    ]
  },
  {
    id: 'xa-binh-nguyen',
    name: 'Xã Bình Nguyên',
    shortName: 'Bình Nguyên',
    center: [20.410, 106.390],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.3,
    polygon: [
      [20.430, 106.360], [20.430, 106.425], [20.390, 106.425], [20.390, 106.360]
    ]
  },
  {
    id: 'xa-dong-tien-hai',
    name: 'Xã Đông Tiền Hải',
    shortName: 'Đông Tiền Hải',
    center: [20.410, 106.630],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.8,
    polygon: [
      [20.435, 106.595], [20.435, 106.670], [20.385, 106.670], [20.385, 106.595]
    ]
  },
  {
    id: 'xa-vu-thu',
    name: 'Xã Vũ Thư',
    shortName: 'Vũ Thư',
    center: [20.395, 106.220],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 15.0,
    polygon: [
      [20.420, 106.185], [20.420, 106.255], [20.370, 106.255], [20.370, 106.185]
    ]
  },
  {
    id: 'phuong-tran-hung-dao',
    name: 'Phường Trần Hưng Đạo',
    shortName: 'P. Trần Hưng Đạo',
    center: [20.410, 106.320],
    hasRedPin: true,
    projectCount: 5,
    areaKm2: 14.0,
    polygon: [
      [20.430, 106.295], [20.430, 106.345], [20.390, 106.345], [20.390, 106.295]
    ]
  },
  {
    id: 'phuong-tran-lam',
    name: 'Phường Trần Lãm',
    shortName: 'P. Trần Lãm',
    center: [20.395, 106.340],
    hasRedPin: true,
    projectCount: 4,
    areaKm2: 13.5,
    polygon: [
      [20.415, 106.315], [20.415, 106.370], [20.375, 106.370], [20.375, 106.315]
    ]
  },
  {
    id: 'phuong-vu-phuc',
    name: 'Phường Vũ Phúc',
    shortName: 'P. Vũ Phúc',
    center: [20.380, 106.310],
    hasRedPin: true,
    projectCount: 3,
    areaKm2: 12.8,
    polygon: [
      [20.400, 106.285], [20.400, 106.340], [20.360, 106.340], [20.360, 106.285]
    ]
  },
  {
    id: 'xa-tan-thuan',
    name: 'Xã Tân Thuận',
    shortName: 'Tân Thuận',
    center: [20.370, 106.180],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.1,
    polygon: [
      [20.395, 106.145], [20.395, 106.215], [20.345, 106.215], [20.345, 106.145]
    ]
  },
  {
    id: 'xa-vu-van',
    name: 'Xã Vũ Vân',
    shortName: 'Vũ Vân',
    center: [20.355, 106.280],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.5,
    polygon: [
      [20.375, 106.250], [20.375, 106.310], [20.335, 106.310], [20.335, 106.250]
    ]
  },
  {
    id: 'xa-vu-quy',
    name: 'Xã Vũ Quý',
    shortName: 'Vũ Quý',
    center: [20.375, 106.370],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.0,
    polygon: [
      [20.395, 106.340], [20.395, 106.400], [20.355, 106.400], [20.355, 106.340]
    ]
  },
  {
    id: 'xa-quang-lich',
    name: 'Xã Quang Lịch',
    shortName: 'Quang Lịch',
    center: [20.380, 106.430],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.6,
    polygon: [
      [20.400, 106.400], [20.400, 106.460], [20.360, 106.460], [20.360, 106.400]
    ]
  },
  {
    id: 'xa-le-loi',
    name: 'Xã Lê Lợi',
    shortName: 'Lê Lợi',
    center: [20.390, 106.480],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.4,
    polygon: [
      [20.410, 106.450], [20.410, 106.510], [20.370, 106.510], [20.370, 106.450]
    ]
  },
  {
    id: 'xa-tien-hai',
    name: 'Xã Tiền Hải',
    shortName: 'Tiền Hải',
    center: [20.370, 106.530],
    hasRedPin: false,
    projectCount: 4,
    areaKm2: 18.2,
    polygon: [
      [20.395, 106.495], [20.395, 106.565], [20.345, 106.565], [20.345, 106.495]
    ]
  },
  {
    id: 'xa-dong-chau',
    name: 'Xã Đồng Châu',
    shortName: 'Đồng Châu',
    center: [20.370, 106.600],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.5,
    polygon: [
      [20.395, 106.565], [20.395, 106.640], [20.345, 106.640], [20.345, 106.565]
    ]
  },
  {
    id: 'xa-kien-xuong',
    name: 'Xã Kiến Xương',
    shortName: 'Kiến Xương',
    center: [20.340, 106.390],
    hasRedPin: true,
    projectCount: 3,
    areaKm2: 15.8,
    polygon: [
      [20.365, 106.355], [20.365, 106.425], [20.315, 106.425], [20.315, 106.355]
    ]
  },
  {
    id: 'xa-vu-tien',
    name: 'Xã Vũ Tiên',
    shortName: 'Vũ Tiên',
    center: [20.340, 106.250],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 13.0,
    polygon: [
      [20.365, 106.215], [20.365, 106.285], [20.315, 106.285], [20.315, 106.215]
    ]
  },
  {
    id: 'xa-thu-vu',
    name: 'Xã Thư Vũ',
    shortName: 'Thư Vũ',
    center: [20.340, 106.320],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.6,
    polygon: [
      [20.365, 106.285], [20.365, 106.355], [20.315, 106.355], [20.315, 106.285]
    ]
  },
  {
    id: 'xa-hong-vu',
    name: 'Xã Hồng Vũ',
    shortName: 'Hồng Vũ',
    center: [20.320, 106.350],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.0,
    polygon: [
      [20.345, 106.320], [20.345, 106.380], [20.295, 106.380], [20.295, 106.320]
    ]
  },
  {
    id: 'xa-ai-quoc',
    name: 'Xã Ái Quốc',
    shortName: 'Ái Quốc',
    center: [20.330, 106.450],
    hasRedPin: true,
    projectCount: 2,
    areaKm2: 13.2,
    polygon: [
      [20.355, 106.415], [20.355, 106.485], [20.305, 106.485], [20.305, 106.415]
    ]
  },
  {
    id: 'xa-tay-tien-hai',
    name: 'Xã Tây Tiền Hải',
    shortName: 'Tây Tiền Hải',
    center: [20.330, 106.510],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 13.5,
    polygon: [
      [20.355, 106.480], [20.355, 106.545], [20.305, 106.545], [20.305, 106.480]
    ]
  },
  {
    id: 'xa-nam-cuong',
    name: 'Xã Nam Cường',
    shortName: 'Nam Cường',
    center: [20.310, 106.570],
    hasRedPin: true,
    projectCount: 3,
    areaKm2: 15.0,
    polygon: [
      [20.335, 106.535], [20.335, 106.610], [20.285, 106.610], [20.285, 106.535]
    ]
  },
  {
    id: 'xa-binh-thanh',
    name: 'Xã Bình Thanh',
    shortName: 'Bình Thanh',
    center: [20.290, 106.410],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.8,
    polygon: [
      [20.315, 106.375], [20.315, 106.445], [20.265, 106.445], [20.265, 106.375]
    ]
  },
  {
    id: 'xa-binh-dinh',
    name: 'Xã Bình Định',
    shortName: 'Bình Định',
    center: [20.270, 106.430],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 12.2,
    polygon: [
      [20.295, 106.395], [20.295, 106.465], [20.245, 106.465], [20.245, 106.395]
    ]
  },
  {
    id: 'xa-nam-tien-hai',
    name: 'Xã Nam Tiền Hải',
    shortName: 'Nam Tiền Hải',
    center: [20.280, 106.530],
    hasRedPin: false,
    projectCount: 2,
    areaKm2: 14.1,
    polygon: [
      [20.305, 106.495], [20.305, 106.565], [20.255, 106.565], [20.255, 106.495]
    ]
  },
  {
    id: 'xa-hung-phu',
    name: 'Xã Hưng Phú',
    shortName: 'Hưng Phú',
    center: [20.240, 106.560],
    hasRedPin: false,
    projectCount: 1,
    areaKm2: 15.5,
    polygon: [
      [20.265, 106.520], [20.265, 106.600], [20.215, 106.600], [20.215, 106.520]
    ]
  }
];

// Đường bao tổng thể tỉnh mới
export const UNIFIED_PROVINCE_BORDER: [number, number][] = [
  [21.015, 105.940],
  [21.015, 106.040],
  [20.985, 106.140],
  [20.970, 106.200],
  [20.890, 106.170],
  [20.760, 106.230],
  [20.695, 106.405],
  [20.655, 106.515],
  [20.605, 106.700],
  [20.540, 106.660],
  [20.475, 106.640],
  [20.435, 106.670],
  [20.335, 106.610],
  [20.265, 106.600],
  [20.215, 106.520],
  [20.245, 106.395],
  [20.315, 106.215],
  [20.400, 106.085],
  [20.515, 106.080],
  [20.585, 106.090],
  [20.645, 106.010],
  [20.720, 105.950],
  [20.830, 105.905],
  [20.930, 105.900],
  [20.990, 105.915]
];
