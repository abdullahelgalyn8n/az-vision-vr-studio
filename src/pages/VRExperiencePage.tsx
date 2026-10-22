import React, { useEffect, useRef, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { RotateCcw, Eye, Compass, Glasses, ExternalLink, Sparkles, Navigation } from 'lucide-react';

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

interface VRExperiencePageProps {
  currentLang: 'en' | 'ar';
}

export const VRExperiencePage: React.FC<VRExperiencePageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const { sceneId } = useParams<{ sceneId?: string }>();
  const navigate = useNavigate();

  const activeSceneId = sceneId && SCENES.some((s) => s.id === sceneId) ? sceneId : 'siwa';
  const activeScene = SCENES.find((s) => s.id === activeSceneId) || SCENES[0];

  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(5);
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
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

      // Sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, activeScene.skyColors[0]);
      skyGrad.addColorStop(0.55 + (localPitch / 200), activeScene.skyColors[1]);
      skyGrad.addColorStop(0.75 + (localPitch / 200), activeScene.skyColors[2]);
      skyGrad.addColorStop(1, '#050505');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Stars
      const starCount = 200;
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

      // Sun / Moon glow
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

      // Terrain
      ctx.save();
      if (activeScene.terrainStyle === 'salt_lake') {
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

        const waterGrad = ctx.createLinearGradient(0, horizonY, 0, height);
        waterGrad.addColorStop(0, '#2d1810');
        waterGrad.addColorStop(0.4, '#151c20');
        waterGrad.addColorStop(1, '#080c0e');
        ctx.fillStyle = waterGrad;
        ctx.fillRect(0, horizonY + 20, width, height - (horizonY + 20));

        ctx.fillStyle = '#0a0a0a';
        ctx.beginPath();
        ctx.ellipse(width * 0.45, height * 0.88, width * 0.35, 60, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(width * 0.45, height * 0.88, width * 0.34, 56, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '28px Amiri, serif';
        ctx.textAlign = 'center';
        ctx.fillText('واحة سيوة', width * 0.5, horizonY - 110);
      } else if (activeScene.terrainStyle === 'citadel') {
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

      // HUD Reticle
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
  }, [activeSceneId, isAutoRotating, isDragging, yaw, pitch, activeScene]);

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

  return (
    <div className="pb-24">
      <PageHeader
        titleEn={activeScene.titleEn}
        titleAr={activeScene.titleAr}
        subtitleEn={activeScene.descriptionEn}
        subtitleAr={activeScene.descriptionAr}
        categoryEn="360° VR VIEWER"
        categoryAr="مشغل الواقع الافتراضي"
        isRtl={isRtl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Top telemetry bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-neutral-900/60 border-b border-neutral-800 text-xs font-mono-tech">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b4ff39]" />
              <span className="text-neutral-300">
                {isRtl ? activeScene.locationAr : activeScene.locationEn}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                type="button"
                className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                  isAutoRotating
                    ? 'border-[#b4ff39] text-[#b4ff39] bg-[#b4ff39]/10'
                    : 'border-neutral-700 text-neutral-400 hover:text-white'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-[11px]">
                  {isAutoRotating ? 'ORBIT ACTIVE' : 'ORBIT PAUSED'}
                </span>
              </button>
            </div>
          </div>

          {/* Canvas Viewport */}
          <div
            className="relative w-full aspect-video md:h-[560px] bg-black cursor-grab active:cursor-grabbing select-none overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <canvas
              ref={canvasRef}
              width={1440}
              height={810}
              className="w-full h-full object-cover pointer-events-none"
            />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none bg-black/75 backdrop-blur-md px-5 py-2 rounded-full border border-neutral-800 text-xs font-mono-tech text-neutral-200 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#b4ff39]" />
              <span>{isRtl ? 'اسحب بالماوس أو الإصبع للنظر في كافة الاتجاهات' : 'Drag mouse or swipe to look around in 360°'}</span>
            </div>

            <div className="absolute top-5 right-5 pointer-events-none bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-neutral-800 text-xs font-mono-tech text-[#b4ff39] flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              <span>{Math.round(yaw)}° COMPASS</span>
            </div>
          </div>

          {/* Bottom Scene Switching Bar */}
          <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-tech text-neutral-500 uppercase mr-2">
                {isRtl ? 'الانتقال لمشهد آخر:' : 'SWITCH REALM:'}
              </span>
              {SCENES.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => navigate(`/vr/${scene.id}`)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    activeSceneId === scene.id
                      ? 'bg-[#b4ff39] text-black font-bold shadow-md'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {isRtl ? scene.titleAr.split(' - ')[0] : scene.titleEn.split(' - ')[0]}
                </button>
              ))}
            </div>

            <a
              href="https://deovr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-mono-tech transition-colors"
            >
              <Glasses className="w-4 h-4 text-[#b4ff39]" />
              <span>{isRtl ? 'فتح في نظارة DEOVR' : 'LAUNCH IN DEOVR HEADSET'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
