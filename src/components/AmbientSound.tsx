import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AmbientSoundProps {
  isRtl?: boolean;
}

export const AmbientSound: React.FC<AmbientSoundProps> = ({ isRtl = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const startAmbient = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Deep desert night drone: Root D2 (73.4Hz) + Fifth A2 (110Hz)
      const frequencies = [73.42, 110.0, 146.83];
      oscillatorsRef.current = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(220 + idx * 80, ctx.currentTime);

        gain.gain.setValueAtTime(0.15 / (idx + 1), ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start();
        oscillatorsRef.current.push(osc);
      });

      // Desert wind noise buffer
      const bufferSize = ctx.sampleRate * 4;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const windFilter = ctx.createBiquadFilter();
      windFilter.type = 'bandpass';
      windFilter.frequency.setValueAtTime(320, ctx.currentTime);
      windFilter.Q.setValueAtTime(1.8, ctx.currentTime);

      const windGain = ctx.createGain();
      windGain.gain.setValueAtTime(0.08, ctx.currentTime);

      noise.connect(windFilter);
      windFilter.connect(windGain);
      windGain.connect(masterGain);

      noise.start();
      noiseSourceRef.current = noise;
      setIsPlaying(true);
    } catch {
      // Audio autoplay or browser context disabled
    }
  };

  const stopAmbient = () => {
    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try { osc.stop(); } catch {}
        });
        try { noiseSourceRef.current?.stop(); } catch {}
        try { audioCtxRef.current?.close(); } catch {}
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      try {
        oscillatorsRef.current.forEach((osc) => osc.stop());
        noiseSourceRef.current?.stop();
        audioCtxRef.current?.close();
      } catch {}
    };
  }, []);

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  return (
    <button
      onClick={toggleSound}
      type="button"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 hover:border-[#b4ff39]/50 text-xs text-neutral-300 transition-all cursor-pointer group"
      aria-label={isPlaying ? 'Mute ambient soundscape' : 'Play desert ambient soundscape'}
      title={isPlaying ? 'Mute soundscape' : 'Play desert soundscape'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#b4ff39] animate-pulse" />
          <span className={`text-[10px] text-[#b4ff39] ${isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'}`}>
            {isRtl ? 'صوت بيئي 360°' : 'AMBIENT 360°'}
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300" />
          <span className={`text-[10px] text-neutral-500 group-hover:text-neutral-300 ${isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'}`}>
            {isRtl ? 'تشغيل الصوت' : 'SOUNDSCAPE'}
          </span>
        </>
      )}
    </button>
  );
};
