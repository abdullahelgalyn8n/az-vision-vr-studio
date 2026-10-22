import React, { useEffect, useRef, useState } from 'react';
import { X, RotateCcw, Eye, Compass, Glasses, ExternalLink } from 'lucide-react';

interface PanoramaViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScene?: string;
  isRtl?: boolean;
}

interface SceneData {
  id: string;
  titleEn: string;
  titleAr: string;
  locationEn: string;
  locationAr: string;
  descriptionEn: string;
  descriptionAr: string;
  deoVrUrl: string;
  skyColors: [string, string, string];
  terrainStyle: 'salt_lake' | 'citadel' | 'dunes';
}

const SCENES: SceneData[] = [
  {
    id: 'siwa',
    titleEn: 'Siwa Oasis 360° - Sunset on Lake Siwa',
    titleAr: 'واحة سيوة 360° - غروب بحيرة سيوة',
    locationEn: 'Bayoot Island, Lake Siwa, Egypt',
    locationAr: 'جزيرة بيوت، بحيرة سيوة، مصر',
    descriptionEn: 'A quiet boat journey across the crystalline salt lake to Bayoot Island as the sunset turns the Egyptian desert into copper and obsidian.',
    descriptionAr: 'رحلة قارب هادئة عبر بحيرة الملح البلورية إلى جزيرة بيوت بينما يحول الغروب صحراء مصر إلى نحاس وأوبسيديان.',
    deoVrUrl: 'https://deovr.com/channel/visionvr',
    skyColors: ['#13091f', '#6e2b26', '#e07a3f'],
    terrainStyle: 'salt_lake',
  },
  {
    id: 'shali',
    titleEn: 'Shali Fortress Secrets 360°',
    titleAr: 'أسرار قلعة شالي 360°',
    locationEn: 'Ancient Fortress of Shali, Siwa',
    locationAr: 'حصن شالي القديم، سيوة',
    descriptionEn: 'Explore the 13th-century kershef citadel under the starlit Saharan night with spatial binaural acoustic decay.',
    descriptionAr: 'استكشف قلعة الكرشيف العائدة للقرن الثالث عشر تحت سماء الصحراء المرصعة بالنجوم مع صوت مجسم ثلاثي الأبعاد.',
    deoVrUrl: 'https://deovr.com/channel/visionvr',
    skyColors: ['#040814', '#0d1d36', '#1b324f'],
    terrainStyle: 'citadel',
  },
  {
    id: 'dunes',
    titleEn: 'A Nostalgic VR Journey Across the Dunes',
    titleAr: 'رحلة حنين افتراضية عبر الكثبان الرملية',
    locationEn: 'Great Sand Sea, Western Desert',
    locationAr: 'بحر الرمال الأعظم، الصحراء الغربية',
    descriptionEn: 'Endless waves of golden sand beneath celestial constellations, preserved forever in immersive 8K space.',
    descriptionAr: 'أمواج لا نهائية من الرمال الذهبية تحت مجرات النجوم الخالدة، محفوظة للأبد في فضاء ثلاثي الأبعاد.',
    deoVrUrl: 'https://deovr.com/channel/visionvr',
    skyColors: ['#020b14', '#152b47', '#533c31'],
    terrainStyle: 'dunes',
  },
];

export const PanoramaViewerModal: React.FC<PanoramaViewerModalProps> = ({
  isOpen,
  onClose,
  initialScene = 'siwa',
  isRtl = false,
}) => {
  const [activeSceneId, setActiveSceneId] = useState(initialScene);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(5);
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const activeScene = SCENES.find((s) => s.id === activeSceneId) || SCENES[0];

  useEffect(() => {
    setActiveSceneId(initialScene);
  }, [initialScene]);

  // Canvas 360 panoramic renderer
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let localYaw = yaw;
    let localPitch = pitch;
    let localAutoRotate = isAutoRotating;

    const render = () => {
      if (localAutoRotate && !isDragging) {
        localYaw = (localYaw + 0.15) % 360;
        setYaw(localYaw);
      }

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, activeScene.skyColors[0]);
      skyGrad.addColorStop(0.55 + (localPitch / 200), activeScene.skyColors[1]);
      skyGrad.addColorStop(0.75 + (localPitch / 200), activeScene.skyColors[2]);
      skyGrad.addColorStop(1, '#050505');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Starfield / celestial particles
      const starCount = 180;
      ctx.save();
      for (let i = 0; i < starCount; i++) {
        const starX = ((i * 137.5 + localYaw * 4) % width + width) % width;
        const starY = (Math.sin(i * 99) * 0.5 + 0.5) * (height * 0.55);
        const radius = (i % 3 === 0) ? 1.5 : 0.8;
        const alpha = 0.4 + 0.6 * Math.sin(Date.now() * 0.002 + i);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(starX, starY, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Horizon line
      const horizonY = height * 0.62 + localPitch * 2.5;

      // Celestial Sun / Moon glow
      const sunX = ((localYaw * 3.5 + 400) % width + width) % width;
      const sunY = horizonY - 45;
      const sunGrad = ctx.createRadialGradient(sunX, sunY, 5, sunX, sunY, 140);
      sunGrad.addColorStop(0, 'rgba(255, 235, 180, 0.9)');
      sunGrad.addColorStop(0.3, 'rgba(255, 140, 50, 0.4)');
      sunGrad.addColorStop(1, 'rgba(255, 80, 0, 0)');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 140, 0, Math.PI * 2);
      ctx.fill();

      // Terrain generation based on style
      ctx.save();
      if (activeScene.terrainStyle === 'salt_lake') {
        // Distant Siwa palm ridges
        ctx.fillStyle = '#170c0c';
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        for (let x = 0; x <= width; x += 30) {
          const offset = Math.sin((x + localYaw * 4) * 0.015) * 22 + Math.cos((x + localYaw * 3) * 0.03) * 12;
          ctx.lineTo(x, horizonY + offset);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();

        // Water reflection plane
        const waterGrad = ctx.createLinearGradient(0, horizonY, 0, height);
        waterGrad.addColorStop(0, '#2d1810');
        waterGrad.addColorStop(0.4, '#151c20');
        waterGrad.addColorStop(1, '#080c0e');
        ctx.fillStyle = waterGrad;
        ctx.fillRect(0, horizonY + 20, width, height - (horizonY + 20));

        // Salt crystal shore & solitary silhouette
        ctx.fillStyle = '#0a0a0a';
        ctx.beginPath();
        ctx.ellipse(width * 0.45, height * 0.88, width * 0.35, 60, 0, 0, Math.PI * 2);
        ctx.fill();

        // White salt rims
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(width * 0.45, height * 0.88, width * 0.34, 56, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Calligraphy overlay simulation in canvas
        ctx.fillStyle = '#ffffff';
        ctx.font = '28px Amiri, serif';
        ctx.textAlign = 'center';
        ctx.fillText('واحة سيوة', width * 0.5, horizonY - 110);
      } else if (activeScene.terrainStyle === 'citadel') {
        // Shali citadel mudbrick towers silhouette
        ctx.fillStyle = '#080f1a';
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        for (let x = 0; x <= width; x += 40) {
          const towerHeight = Math.abs(Math.sin((x + localYaw * 5) * 0.02)) * 85;
          ctx.lineTo(x, horizonY - towerHeight);
          ctx.lineTo(x + 25, horizonY - towerHeight);
          ctx.lineTo(x + 25, horizonY);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '28px Amiri, serif';
        ctx.textAlign = 'center';
        ctx.fillText('أسرار شالي', width * 0.5, horizonY - 110);
      } else {
        // Great Sand Sea dunes
        ctx.fillStyle = '#1e1610';
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        for (let x = 0; x <= width; x += 20) {
          const duneCurve = Math.sin((x + localYaw * 6) * 0.008) * 55 + Math.sin((x + localYaw * 3) * 0.02) * 20;
          ctx.lineTo(x, horizonY + duneCurve);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // VR Reticle / HUD Grid overlay
      ctx.save();
      ctx.strokeStyle = 'rgba(180, 255, 57, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 45, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(width / 2 - 60, height / 2);
      ctx.lineTo(width / 2 - 20, height / 2);
      ctx.moveTo(width / 2 + 20, height / 2);
      ctx.lineTo(width / 2 + 60, height / 2);
      ctx.moveTo(width / 2, height / 2 - 60);
      ctx.lineTo(width / 2, height / 2 - 20);
      ctx.moveTo(width / 2, height / 2 + 20);
      ctx.lineTo(width / 2, height / 2 + 60);
      ctx.stroke();

      // Heading indicator text
      ctx.fillStyle = '#b4ff39';
      ctx.font = '10px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${Math.round(localYaw)}° YAW · 8K STEREO 360°`, width / 2, height / 2 + 75);
      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    localAutoRotate = isAutoRotating;
    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isOpen, activeSceneId, isAutoRotating, isDragging, yaw, pitch, activeScene]);

  // Handle drag to look around
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    setYaw((prev) => (prev - deltaX * 0.3 + 360) % 360);
    setPitch((prev) => Math.max(-30, Math.min(30, prev + deltaY * 0.2)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vr-viewer-title"
    >
      <div className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#b4ff39] animate-pulse" />
            <h2 id="vr-viewer-title" className="text-sm md:text-base font-semibold text-white tracking-wide">
              {isRtl ? activeScene.titleAr : activeScene.titleEn}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              type="button"
              className={`px-3 py-1 text-xs rounded-full border transition-all flex items-center gap-1.5 ${
                isAutoRotating 
                  ? 'border-[#b4ff39] text-[#b4ff39] bg-[#b4ff39]/10' 
                  : 'border-neutral-700 text-neutral-400 hover:text-white'
              }`}
              title="Toggle auto orbit"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono-tech text-[11px]">
                {isAutoRotating ? 'ORBIT ON' : 'ORBIT OFF'}
              </span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close VR preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 360 Viewport */}
        <div 
          className="relative w-full aspect-video md:h-[460px] bg-black cursor-grab active:cursor-grabbing select-none overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-full object-cover pointer-events-none"
          />

          {/* Top-left scene coordinates */}
          <div className="absolute top-4 left-4 pointer-events-none bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-[11px] font-mono-tech text-neutral-300">
            <span className="text-[#b4ff39] font-bold">SPATIAL FEED</span> · {isRtl ? activeScene.locationAr : activeScene.locationEn}
          </div>

          {/* Drag instruction overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-800 text-xs font-mono-tech text-neutral-300 flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#b4ff39]" />
            <span>{isRtl ? 'اسحب بالماوس أو اللمس للاستكشاف بزاوية 360 درجة' : 'Drag mouse to look around in 360°'}</span>
          </div>

          {/* Compass heading */}
          <div className="absolute top-4 right-4 pointer-events-none bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-mono-tech text-[#b4ff39] flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '18s' }} />
            <span>{Math.round(yaw)}°</span>
          </div>
        </div>

        {/* Bottom scene selector and headset link */}
        <div className="p-4 md:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Scene tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-mono-tech text-neutral-500 mr-2">
              {isRtl ? 'المشاهد المتاحة:' : 'SCENES:'}
            </span>
            {SCENES.map((scene) => (
              <button
                key={scene.id}
                onClick={() => setActiveSceneId(scene.id)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeSceneId === scene.id
                    ? 'bg-[#b4ff39] text-black font-semibold'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {isRtl ? scene.titleAr.split(' - ')[0] : scene.titleEn.split(' - ')[0]}
              </button>
            ))}
          </div>

          {/* VR Headset Links */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <a
              href="https://deovr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-mono-tech transition-colors"
            >
              <Glasses className="w-4 h-4 text-[#b4ff39]" />
              <span>{isRtl ? 'مشاهدة على DEOVR في النظارة' : 'OPEN IN DEOVR HEADSET'}</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
