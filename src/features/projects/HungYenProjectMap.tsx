import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Tag, Tooltip, Input, Checkbox, Segmented } from 'antd';
import { 
  Home, 
  Search, 
  Compass, 
  Layers, 
  MapPin, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Maximize2, 
  Eye, 
  Info, 
  SlidersHorizontal 
} from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ProjectItem } from '../../types';

interface HungYenProjectMapProps {
  projects: ProjectItem[];
  selectedProject?: ProjectItem | null;
  onSelectProject: (project: ProjectItem) => void;
  fullHeight?: boolean;
  hideStatsPanel?: boolean;
}


// 16 key zones representing the administrative space of the new Hung Yen Province (combining Hung Yen & Thai Binh)
interface LocalityDensityZone {
  id: string;
  name: string;
  shortName: string;
  type: 'PHUONG' | 'XA';
  center: [number, number];
  polygon: [number, number][];
  densityPercent: number;
  areaKm2: number;
  projectCount: number;
  delayedCount: number;
  color: string;
  borderColor: string;
}

const LOCALITY_ZONES: LocalityDensityZone[] = [
  {
    id: 'zone-my-hao',
    name: 'Phường Mỹ Hào',
    shortName: 'P. Mỹ Hào',
    type: 'PHUONG',
    center: [20.93, 106.10],
    polygon: [
      [20.95, 106.06], [20.96, 106.13], [20.92, 106.16], [20.89, 106.12], [20.90, 106.07]
    ],
    densityPercent: 16.87,
    areaKm2: 82.98,
    projectCount: 14,
    delayedCount: 3,
    color: '#ef4444', // Red - High Density Hotspot
    borderColor: '#b91c1c'
  },
  {
    id: 'zone-pho-hien',
    name: 'Phường Phố Hiến',
    shortName: 'P. Phố Hiến',
    type: 'PHUONG',
    center: [20.655, 106.055],
    polygon: [
      [20.68, 106.02], [20.68, 106.09], [20.63, 106.09], [20.63, 106.02]
    ],
    densityPercent: 10.63,
    areaKm2: 28.23,
    projectCount: 4,
    delayedCount: 0,
    color: '#f59e0b', // Yellow/Amber - Medium-High
    borderColor: '#d97706'
  },
  {
    id: 'zone-van-giang',
    name: 'Xã Văn Giang',
    shortName: 'Xã Văn Giang',
    type: 'XA',
    center: [20.94, 105.955],
    polygon: [
      [20.96, 105.92], [20.97, 105.99], [20.91, 105.99], [20.91, 105.93]
    ],
    densityPercent: 9.35,
    areaKm2: 32.10,
    projectCount: 3,
    delayedCount: 1,
    color: '#f59e0b',
    borderColor: '#d97706'
  },
  {
    id: 'zone-thai-binh',
    name: 'Phường Thái Bình',
    shortName: 'P. Thái Bình',
    type: 'PHUONG',
    center: [20.45, 106.335],
    polygon: [
      [20.48, 106.30], [20.48, 106.37], [20.42, 106.37], [20.42, 106.30]
    ],
    densityPercent: 9.05,
    areaKm2: 33.14,
    projectCount: 3,
    delayedCount: 0,
    color: '#f59e0b',
    borderColor: '#d97706'
  },
  {
    id: 'zone-tien-hai',
    name: 'Xã Tiền Hải',
    shortName: 'Xã Tiền Hải',
    type: 'XA',
    center: [20.40, 106.52],
    polygon: [
      [20.44, 106.46], [20.44, 106.58], [20.35, 106.58], [20.35, 106.46]
    ],
    densityPercent: 8.23,
    areaKm2: 35.47,
    projectCount: 3,
    delayedCount: 0,
    color: '#f59e0b',
    borderColor: '#d97706'
  },
  {
    id: 'zone-quynh-phu',
    name: 'Xã Quỳnh Phụ',
    shortName: 'Xã Quỳnh Phụ',
    type: 'XA',
    center: [20.73, 106.35],
    polygon: [
      [20.76, 106.30], [20.77, 106.41], [20.69, 106.41], [20.69, 106.30]
    ],
    densityPercent: 7.84,
    areaKm2: 38.27,
    projectCount: 3,
    delayedCount: 1,
    color: '#f59e0b',
    borderColor: '#d97706'
  },
  {
    id: 'zone-nghia-tru',
    name: 'Xã Nghĩa Trụ',
    shortName: 'Xã Nghĩa Trụ',
    type: 'XA',
    center: [20.97, 105.96],
    polygon: [
      [20.99, 105.93], [20.99, 106.00], [20.95, 106.00], [20.95, 105.93]
    ],
    densityPercent: 6.45,
    areaKm2: 25.10,
    projectCount: 2,
    delayedCount: 0,
    color: '#10b981', // Mint Green - Moderate
    borderColor: '#059669'
  },
  {
    id: 'zone-yen-my',
    name: 'Xã Yên Mỹ',
    shortName: 'Xã Yên Mỹ',
    type: 'XA',
    center: [20.89, 106.04],
    polygon: [
      [20.92, 106.01], [20.92, 106.07], [20.86, 106.07], [20.86, 106.01]
    ],
    densityPercent: 6.10,
    areaKm2: 30.50,
    projectCount: 2,
    delayedCount: 0,
    color: '#10b981',
    borderColor: '#059669'
  },
  {
    id: 'zone-khoai-chau',
    name: 'Xã Khoái Châu',
    shortName: 'Xã Khoái Châu',
    type: 'XA',
    center: [20.82, 105.98],
    polygon: [
      [20.85, 105.94], [20.85, 106.02], [20.78, 106.02], [20.78, 105.94]
    ],
    densityPercent: 5.90,
    areaKm2: 36.40,
    projectCount: 2,
    delayedCount: 0,
    color: '#10b981',
    borderColor: '#059669'
  },
  {
    id: 'zone-kien-xuong',
    name: 'Xã Kiến Xương',
    shortName: 'Xã Kiến Xương',
    type: 'XA',
    center: [20.38, 106.36],
    polygon: [
      [20.42, 106.31], [20.42, 106.42], [20.32, 106.42], [20.32, 106.31]
    ],
    densityPercent: 5.80,
    areaKm2: 31.40,
    projectCount: 2,
    delayedCount: 0,
    color: '#10b981',
    borderColor: '#059669'
  },
  {
    id: 'zone-an-thi',
    name: 'Xã Ân Thi',
    shortName: 'Xã Ân Thi',
    type: 'XA',
    center: [20.82, 106.12],
    polygon: [
      [20.86, 106.08], [20.86, 106.17], [20.77, 106.17], [20.77, 106.08]
    ],
    densityPercent: 5.20,
    areaKm2: 34.20,
    projectCount: 1,
    delayedCount: 0,
    color: '#10b981',
    borderColor: '#059669'
  },
  {
    id: 'zone-tien-lu',
    name: 'Xã Tiên Lữ',
    shortName: 'Xã Tiên Lữ',
    type: 'XA',
    center: [20.69, 106.18],
    polygon: [
      [20.73, 106.13], [20.73, 106.22], [20.65, 106.22], [20.65, 106.13]
    ],
    densityPercent: 4.80,
    areaKm2: 32.50,
    projectCount: 1,
    delayedCount: 0,
    color: '#ffffff', // Pale White/Translucent
    borderColor: '#94a3b8'
  },
  {
    id: 'zone-hung-ha',
    name: 'Xã Hưng Hà',
    shortName: 'Xã Hưng Hà',
    type: 'XA',
    center: [20.60, 106.22],
    polygon: [
      [20.64, 106.17], [20.65, 106.27], [20.55, 106.27], [20.55, 106.17]
    ],
    densityPercent: 4.50,
    areaKm2: 37.10,
    projectCount: 1,
    delayedCount: 0,
    color: '#ffffff',
    borderColor: '#94a3b8'
  },
  {
    id: 'zone-dong-hung',
    name: 'Xã Đông Hưng',
    shortName: 'Xã Đông Hưng',
    type: 'XA',
    center: [20.55, 106.36],
    polygon: [
      [20.59, 106.30], [20.59, 106.42], [20.50, 106.42], [20.50, 106.30]
    ],
    densityPercent: 4.20,
    areaKm2: 35.80,
    projectCount: 1,
    delayedCount: 0,
    color: '#ffffff',
    borderColor: '#94a3b8'
  },
  {
    id: 'zone-thai-thuy',
    name: 'Xã Thái Thụy',
    shortName: 'Xã Thái Thụy',
    type: 'XA',
    center: [20.55, 106.52],
    polygon: [
      [20.60, 106.46], [20.60, 106.59], [20.48, 106.59], [20.48, 106.46]
    ],
    densityPercent: 4.00,
    areaKm2: 44.50,
    projectCount: 1,
    delayedCount: 0,
    color: '#ffffff',
    borderColor: '#94a3b8'
  },
  {
    id: 'zone-vu-thu',
    name: 'Xã Vũ Thư',
    shortName: 'Xã Vũ Thư',
    type: 'XA',
    center: [20.44, 106.22],
    polygon: [
      [20.48, 106.17], [20.49, 106.28], [20.38, 106.28], [20.38, 106.17]
    ],
    densityPercent: 3.80,
    areaKm2: 36.70,
    projectCount: 1,
    delayedCount: 0,
    color: '#ffffff',
    borderColor: '#94a3b8'
  }
];

// Outer provincial boundary of the new unified Hung Yen Province
const PROVINCE_OUTER_BOUNDARY: [number, number][] = [
  [20.98, 105.93],
  [20.99, 106.05],
  [20.98, 106.14],
  [20.94, 106.20],
  [20.91, 106.27],
  [20.84, 106.33],
  [20.76, 106.39],
  [20.68, 106.46],
  [20.59, 106.59],
  [20.48, 106.63],
  [20.36, 106.56],
  [20.26, 106.46],
  [20.29, 106.33],
  [20.38, 106.22],
  [20.46, 106.16],
  [20.55, 106.08],
  [20.63, 106.01],
  [20.72, 105.95],
  [20.82, 105.92],
  [20.92, 105.91],
  [20.98, 105.93]
];

export const HungYenProjectMap: React.FC<HungYenProjectMapProps> = ({
  projects,
  selectedProject,
  onSelectProject,
  fullHeight = false,
  hideStatsPanel = false
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const polygonsLayerRef = useRef<L.LayerGroup | null>(null);

  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      wrapperRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 200);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);


  // States
  const [mapType, setMapType] = useState<'SATELLITE' | 'STREET' | 'TERRAIN'>('SATELLITE');
  const [densityViewMode, setDensityViewMode] = useState<'DENSITY' | 'COUNT'>('DENSITY');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChip, setActiveChip] = useState<'ALL' | 'KEY' | 'PETITION' | 'RISK' | 'DELAYED'>('ALL');
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [legendCollapsed, setLegendCollapsed] = useState(false);

  // Status Filters
  const [filterOnSchedule, setFilterOnSchedule] = useState(true);
  const [filterPetition, setFilterPetition] = useState(true);
  const [filterRisk, setFilterRisk] = useState(true);
  const [filterDelayed, setFilterDelayed] = useState(true);

  // Center coordinate of new Hung Yen Province
  const PROVINCE_CENTER: [number, number] = [20.66, 106.26];
  const DEFAULT_ZOOM = 10;

  // 1. Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: PROVINCE_CENTER,
      zoom: DEFAULT_ZOOM,
      minZoom: 9,
      maxZoom: 18,
      zoomControl: false,
      attributionControl: false
    });

    // Default: Google Satellite Hybrid Tile Layer (matching reference image)
    const googleHybridTile = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    googleHybridTile.addTo(map);
    tileLayerRef.current = googleHybridTile;

    // Layer groups for markers and polygons
    const polygonsGroup = L.layerGroup().addTo(map);
    const markersGroup = L.layerGroup().addTo(map);
    polygonsLayerRef.current = polygonsGroup;
    markersLayerRef.current = markersGroup;

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // 2. Handle Map Type switching (Satellite / Streets / Terrain)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    let newTileLayer: L.TileLayer;
    if (mapType === 'SATELLITE') {
      newTileLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      });
    } else if (mapType === 'STREET') {
      newTileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      });
    } else {
      newTileLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      });
    }

    newTileLayer.addTo(map);
    tileLayerRef.current = newTileLayer;
  }, [mapType]);

  // 3. Render Province Boundary & Locality Choropleth Polygons (Mật độ dự án)
  useEffect(() => {
    const map = mapInstanceRef.current;
    const group = polygonsLayerRef.current;
    if (!map || !group) return;

    group.clearLayers();

    // Red Outer Boundary of New Hung Yen Province (matching screenshot)
    const provinceBorder = L.polygon(PROVINCE_OUTER_BOUNDARY, {
      color: '#ef4444',
      weight: 3,
      opacity: 0.95,
      fillColor: '#ffffff',
      fillOpacity: 0.08,
      dashArray: undefined
    });
    group.addLayer(provinceBorder);

    // Locality Polygons with Choropleth Density Fill
    LOCALITY_ZONES.forEach(zone => {
      // Determine fill opacity and color based on density mode
      const fillOpacity = zone.color === '#ef4444' ? 0.48 : zone.color === '#f59e0b' ? 0.42 : zone.color === '#10b981' ? 0.36 : 0.22;
      
      const poly = L.polygon(zone.polygon, {
        color: zone.borderColor,
        weight: 1.5,
        opacity: 0.85,
        fillColor: zone.color,
        fillOpacity: fillOpacity
      });

      // Hover interaction
      poly.on('mouseover', () => {
        poly.setStyle({
          weight: 2.5,
          color: '#ffffff',
          fillOpacity: Math.min(0.7, fillOpacity + 0.2)
        });
      });

      poly.on('mouseout', () => {
        poly.setStyle({
          weight: 1.5,
          color: zone.borderColor,
          fillOpacity: fillOpacity
        });
      });

      poly.on('click', () => {
        map.flyTo(zone.center, 12, { duration: 1 });
      });

      group.addLayer(poly);

      // Label Marker for Locality Name on map
      const labelHtml = `
        <div style="
          text-align: center;
          font-family: system-ui, sans-serif;
          pointer-events: none;
          transform: translate(-50%, -50%);
        ">
          <div style="
            font-size: 11px;
            font-weight: 800;
            color: #0f172a;
            text-shadow: 0 1px 3px rgba(255,255,255,0.9), 0 0 5px #ffffff;
            white-space: nowrap;
          ">
            ${zone.shortName}
          </div>
          <div style="
            font-size: 9.5px;
            font-weight: 700;
            color: #1e40af;
            text-shadow: 0 1px 2px rgba(255,255,255,0.9);
          ">
            (${zone.projectCount} DA)
          </div>
        </div>
      `;

      const labelIcon = L.divIcon({
        html: labelHtml,
        className: 'locality-label-icon',
        iconSize: [80, 30],
        iconAnchor: [40, 15]
      });

      const labelMarker = L.marker(zone.center, {
        icon: labelIcon,
        interactive: false
      });

      group.addLayer(labelMarker);
    });
  }, [densityViewMode]);

  // 4. Render Project Pins & Markers (Filtering by Status & Search)
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = p.name.toLowerCase().includes(q) || p.district.toLowerCase().includes(q);
        if (!match) return false;
      }

      // Chip filters
      if (activeChip === 'DELAYED' && p.status !== 'CHAM_TIEN_DO') return false;
      if (activeChip === 'KEY' && !['proj-1', 'proj-2', 'proj-3', 'proj-13', 'proj-24', 'proj-32', 'proj-33'].includes(p.id)) return false;

      // Status Checkboxes
      if (p.status === 'HOAN_THANH' && !filterOnSchedule) return false;
      if (p.status === 'DANG_TRIEN_KHAI' && !filterOnSchedule) return false;
      if (p.status === 'CHUAN_BI_DAU_TU' && !filterPetition) return false;
      if (p.status === 'CHAM_TIEN_DO' && !filterDelayed) return false;

      return true;
    });
  }, [projects, searchQuery, activeChip, filterOnSchedule, filterPetition, filterDelayed]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const group = markersLayerRef.current;
    if (!map || !group) return;

    group.clearLayers();

    filteredProjects.forEach(proj => {
      const isSelected = selectedProject?.id === proj.id;

      // Determine Pin Icon color & symbol matching reference screenshot
      let pinBg = '#10b981'; // Green (Đúng tiến độ)
      let pinSymbol = '✓';
      let ringColor = 'rgba(16, 185, 129, 0.4)';

      if (proj.status === 'CHAM_TIEN_DO') {
        pinBg = '#ef4444'; // Red with exclamation (Chậm tiến độ)
        pinSymbol = '!';
        ringColor = 'rgba(239, 68, 68, 0.45)';
      } else if (proj.bottlenecks && proj.bottlenecks.length > 0) {
        pinBg = '#f59e0b'; // Orange (Có kiến nghị / vướng mắc)
        pinSymbol = '⚠';
        ringColor = 'rgba(245, 158, 11, 0.4)';
      } else if (proj.progress < 50 && proj.status !== 'HOAN_THANH') {
        pinBg = '#eab308'; // Amber/Yellow (Nguy cơ chậm)
        pinSymbol = '•';
        ringColor = 'rgba(234, 179, 8, 0.4)';
      }

      const pinSize = isSelected ? 34 : 26;

      const pinHtml = `
        <div style="
          position: relative;
          width: ${pinSize}px;
          height: ${pinSize}px;
          border-radius: 50%;
          background: ${pinBg};
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 3px ${ringColor}, 0 2px 8px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 900;
          font-size: ${isSelected ? 14 : 12}px;
          cursor: pointer;
          transition: transform 0.2s ease;
        ">
          ${pinSymbol}
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'project-pin-marker',
        iconSize: [pinSize, pinSize],
        iconAnchor: [pinSize / 2, pinSize / 2]
      });

      const marker = L.marker(proj.coordinates, { icon: customIcon });

      // Interactive Popup
      const popupContent = `
        <div style="font-family: system-ui, sans-serif; padding: 4px; min-width: 240px; max-width: 290px;">
          <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 6px; line-height: 1.35;">
            ${proj.name}
          </div>
          <div style="font-size: 11.5px; color: #64748b; margin-bottom: 4px;">
            📍 Địa bàn: <strong style="color: #0b74e5;">${proj.district}</strong>
          </div>
          <div style="font-size: 11.5px; color: #334155; margin-bottom: 4px;">
            💰 Tổng mức đầu tư: <strong>${proj.totalInvestment} tỷ VNĐ</strong>
          </div>
          <div style="font-size: 11.5px; color: #334155; margin-bottom: 8px;">
            📊 Tiến độ hoàn thành: <strong style="color: ${proj.status === 'CHAM_TIEN_DO' ? '#ef4444' : '#10b981'};">${proj.progress}%</strong>
          </div>
          <div style="
            display: inline-block;
            font-size: 11px;
            font-weight: 600;
            padding: 2px 8px;
            border-radius: 12px;
            background: ${proj.status === 'CHAM_TIEN_DO' ? '#fee2e2' : '#dcfce7'};
            color: ${proj.status === 'CHAM_TIEN_DO' ? '#b91c1c' : '#15803d'};
            margin-bottom: 10px;
          ">
            ${proj.status === 'CHAM_TIEN_DO' ? '⚠️ Chậm tiến độ (Vướng GPMB)' : '✓ Đang triển khai tốt'}
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('click', () => {
        onSelectProject(proj);
      });

      group.addLayer(marker);
    });
  }, [filteredProjects, selectedProject]);

  // Pan to selected project when changed externally
  useEffect(() => {
    if (selectedProject && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(selectedProject.coordinates, 13, { duration: 1.2 });
    }
  }, [selectedProject]);

  // Invalidate map size when fullHeight toggles or layout updates
  useEffect(() => {
    const timer = setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [fullHeight, isFullscreen]);

  // Reset to full province view
  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(PROVINCE_CENTER, DEFAULT_ZOOM, { duration: 1 });
    }
  };

  const handleFlyToLocality = (center: [number, number]) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(center, 12.5, { duration: 1 });
    }
  };

  return (
    <div 
      ref={wrapperRef}
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: isFullscreen ? '100vh' : fullHeight ? 'calc(100vh - 170px)' : 600, 
        minHeight: isFullscreen ? '100vh' : fullHeight ? 620 : 600,
        borderRadius: isFullscreen ? 0 : 10, 
        overflow: 'hidden', 
        boxShadow: isFullscreen ? 'none' : '0 4px 24px rgba(0,0,0,0.2)',
        border: isFullscreen ? 'none' : '1px solid #cbd5e1'
      }}
    >
      {/* 1. Leaflet Map Canvas */}
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%', zIndex: 1 }} />

      {/* 2. Top-Left Floating Controls: Home, Search, Layer Switcher */}
      <div className="map-top-left-controls" style={{
        position: 'absolute',
        top: 14,
        left: 16,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        {/* Home Button */}
        <Tooltip title="Về toàn cảnh tỉnh Hưng Yên">
          <button
            onClick={handleResetView}
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#1e293b'
            }}
          >
            <Home size={18} />
          </button>
        </Tooltip>

        {/* Search Input Box */}
        <div className="map-search-box" style={{ width: 220 }}>
          <Input
            placeholder="🔍 Dự án trọng điểm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            allowClear
            style={{
              height: 38,
              borderRadius: 8,
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              border: '1px solid #cbd5e1',
              fontSize: 12.5,
              fontWeight: 500
            }}
          />
        </div>

        {/* Layer Toggle Button (Satellite / Street / Terrain) */}
        <Tooltip title="Đổi lớp bản đồ">
          <div style={{
            background: '#ffffff',
            borderRadius: 8,
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            border: '1px solid #cbd5e1',
            padding: 2,
            display: 'flex',
            alignItems: 'center'
          }}>
            <Segmented
              size="small"
              value={mapType}
              onChange={(val) => setMapType(val as any)}
              options={[
                { value: 'SATELLITE', label: '🛰️ Vệ tinh' },
                { value: 'STREET', label: '🗺️ Bản đồ' },
                { value: 'TERRAIN', label: '⛰️ Địa hình' }
              ]}
              style={{ fontWeight: 600, fontSize: 11 }}
            />
          </div>
        </Tooltip>
      </div>

      {/* 3. Top-Right Floating Controls: Compass & Compass Heading */}
      <div className="map-top-right-controls" style={{
        position: 'absolute',
        top: 14,
        right: 16,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        <Tooltip title="Hướng Bắc / La bàn">
          <button
            onClick={handleResetView}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#0b74e5'
            }}
          >
            <Compass size={20} />
          </button>
        </Tooltip>

        <Tooltip title={isFullscreen ? "Thu nhỏ (Esc)" : "Toàn màn hình"}>
          <button
            onClick={toggleFullscreen}
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isFullscreen ? '#0b74e5' : '#475569'
            }}
          >
            <Maximize2 size={16} />
          </button>
        </Tooltip>
      </div>

      {/* 4. Bottom-Left Floating Panel: "Giám sát & Theo dõi Dự án" (Ẩn khi xem bản đồ không gian thuần túy) */}
      {!hideStatsPanel && (
      <div className="map-bottom-left-panel" style={{
        position: 'absolute',
        bottom: 16,
        left: 16,
        zIndex: 1000,
        width: 310,
        maxHeight: leftPanelCollapsed ? 48 : 420,
        background: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(8px)',
        borderRadius: 10,
        border: '1px solid rgba(226, 232, 240, 0.9)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.18)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'max-height 0.25s ease'
      }}>
        {/* Panel Header */}
        <div style={{
          padding: '10px 14px',
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}
        onClick={() => setLeftPanelCollapsed(!leftPanelCollapsed)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 13, color: '#0f172a' }}>
            <span style={{ fontSize: 15 }}>📊</span>
            Giám sát & Theo dõi Dự án
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
            {leftPanelCollapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {!leftPanelCollapsed && (
          <div style={{ padding: '10px 12px', overflowY: 'auto' }}>
            {/* Filter Chips matching screenshot: Địa bàn | Trọng điểm 34 | Kiến nghị 2 | Nguy cơ 5 | Chậm 33 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', marginBottom: 10 }}>
              <span 
                onClick={() => setActiveChip('ALL')}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '2px 8px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  background: activeChip === 'ALL' ? '#0b74e5' : '#f1f5f9',
                  color: activeChip === 'ALL' ? '#ffffff' : '#475569'
                }}
              >
                Địa bàn
              </span>
              <span 
                onClick={() => setActiveChip('KEY')}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  background: '#ecfdf5',
                  color: '#059669',
                  border: '1px solid #a7f3d0'
                }}
              >
                Trọng điểm <strong style={{ color: '#047857' }}>34</strong>
              </span>
              <span 
                onClick={() => setActiveChip('PETITION')}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  background: '#fffbeb',
                  color: '#d97706',
                  border: '1px solid #fde68a'
                }}
              >
                Kiến nghị <strong style={{ color: '#b45309' }}>2</strong>
              </span>
              <span 
                onClick={() => setActiveChip('RISK')}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  background: '#fef3c7',
                  color: '#b45309',
                  border: '1px solid #fcd34d'
                }}
              >
                Nguy cơ <strong style={{ color: '#92400e' }}>5</strong>
              </span>
              <span 
                onClick={() => setActiveChip('DELAYED')}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  background: '#fef2f2',
                  color: '#dc2626',
                  border: '1px solid #fecaca'
                }}
              >
                Chậm <strong style={{ color: '#b91c1c' }}>3</strong>
              </span>
            </div>

            {/* Segmented Switch: Số lượng | Mật độ dự án (Active Blue matching screenshot) */}
            <div style={{ marginBottom: 10 }}>
              <Segmented
                block
                size="small"
                value={densityViewMode}
                onChange={(val) => setDensityViewMode(val as any)}
                options={[
                  { value: 'COUNT', label: 'Số lượng' },
                  { value: 'DENSITY', label: 'Mật độ dự án' }
                ]}
                style={{
                  background: '#f1f5f9',
                  fontWeight: 600,
                  fontSize: 11.5
                }}
              />
            </div>

            {/* Ranked List of Localities by Density / Count */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {LOCALITY_ZONES.slice(0, 7).map((item, idx) => {
                let barColor = '#f59e0b';
                if (idx === 0) barColor = '#ef4444'; // Red bar for top density locality (P. Mỹ Hào)
                if (idx > 4) barColor = '#10b981';

                return (
                  <div
                    key={item.id}
                    onClick={() => handleFlyToLocality(item.center)}
                    style={{
                      padding: '6px 8px',
                      borderRadius: 6,
                      background: '#ffffff',
                      border: '1px solid #f1f5f9',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#93c5fd')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#f1f5f9')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ 
                          width: 17, 
                          height: 17, 
                          borderRadius: '50%', 
                          background: idx === 0 ? '#ef4444' : idx < 3 ? '#f59e0b' : '#64748b',
                          color: '#ffffff',
                          fontSize: 10,
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {idx + 1}
                        </span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#1e293b' }}>
                          {item.name}
                        </span>
                      </div>
                      <span style={{ fontSize: 11.5, fontWeight: 700, color: '#0f172a' }}>
                        {item.projectCount} dự án
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 10.5, color: '#64748b' }}>
                      <span>Mật độ: <strong style={{ color: barColor }}>{item.densityPercent}%</strong> ({item.areaKm2} km²)</span>
                      {item.delayedCount > 0 && (
                        <span style={{ color: '#ef4444', fontWeight: 600 }}>{item.delayedCount} chậm</span>
                      )}
                    </div>

                    {/* Progress density bar matching screenshot */}
                    <div style={{ height: 3, width: '100%', background: '#f1f5f9', borderRadius: 2, marginTop: 4, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, item.densityPercent * 5)}%`, background: barColor }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      )}

      {/* 5. Bottom-Right Floating Panel: "Chú thích bản đồ" (Map Legend matching screenshot) */}
      <div className="map-bottom-right-legend" style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        zIndex: 1000,
        width: 220,
        background: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(8px)',
        borderRadius: 10,
        border: '1px solid rgba(226, 232, 240, 0.9)',
        boxShadow: '0 4px 18px rgba(0, 0, 0, 0.18)',
        overflow: 'hidden'
      }}>
        {/* Legend Header */}
        <div 
          style={{
            padding: '8px 12px',
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
          onClick={() => setLegendCollapsed(!legendCollapsed)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontWeight: 700, fontSize: 12.5, color: '#0f172a' }}>
            <Info size={14} color="#0b74e5" />
            Chú thích bản đồ
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
            {legendCollapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {!legendCollapsed && (
          <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
            <Checkbox
              checked={filterOnSchedule && filterPetition && filterRisk && filterDelayed}
              onChange={(e) => {
                const checked = e.target.checked;
                setFilterOnSchedule(checked);
                setFilterPetition(checked);
                setFilterRisk(checked);
                setFilterDelayed(checked);
              }}
              style={{ fontWeight: 600, fontSize: 12 }}
            >
              Chọn tất cả ({projects.length})
            </Checkbox>

            <div style={{ height: 1, background: '#f1f5f9' }} />

            <Checkbox
              checked={filterOnSchedule}
              onChange={(e) => setFilterOnSchedule(e.target.checked)}
              style={{ fontSize: 11.5 }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                Đúng tiến độ (24)
              </span>
            </Checkbox>

            <Checkbox
              checked={filterPetition}
              onChange={(e) => setFilterPetition(e.target.checked)}
              style={{ fontSize: 11.5 }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
                Có kiến nghị vướng mắc (2)
              </span>
            </Checkbox>

            <Checkbox
              checked={filterRisk}
              onChange={(e) => setFilterRisk(e.target.checked)}
              style={{ fontSize: 11.5 }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#eab308' }} />
                Nguy cơ chậm tiến độ (5)
              </span>
            </Checkbox>

            <Checkbox
              checked={filterDelayed}
              onChange={(e) => setFilterDelayed(e.target.checked)}
              style={{ fontSize: 11.5 }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }} />
                Chậm tiến độ (3)
              </span>
            </Checkbox>
          </div>
        )}
      </div>
    </div>
  );
};
