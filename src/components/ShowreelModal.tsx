import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2, ArrowRight, Film } from 'lucide-react';
import { Editor } from '../types';

interface ShowreelModalProps {
  editor: Editor | null;
  onClose: () => void;
  onRequestEditor: (editor: Editor) => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  editor,
  onClose,
  onRequestEditor
}) => {
  if (!editor) return null;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('00:00');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser policy without mute
        setIsPlaying(false);
      });
    }
  }, [editor]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);

    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTime(`${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = newTime;
  };

  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl rounded-3xl border border-neutral-800 bg-[#090A0E] text-white shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Theatre Bar */}
        <div className="px-6 py-3.5 border-b border-neutral-800/80 bg-black/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-300">
              Cinematic Showreel
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-xs text-neutral-400 hidden sm:inline font-mono">
              ProRes 422 HQ • Master Audio
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          
          {/* Main Cinematic Video Player Area */}
          <div className="relative bg-black group aspect-video sm:aspect-[16/9] w-full flex items-center justify-center">
            <video
              ref={videoRef}
              src={editor.showreel.videoUrl}
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              className="w-full h-full object-contain cursor-pointer"
            />

            {/* Ambient vignette */}
            <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/30" />

            {/* Center Big Play Pause icon indicator when paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute w-16 h-16 rounded-full bg-[#F27D26]/80 hover:bg-[#F27D26] backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-110 shadow-2xl cursor-pointer"
              >
                <Play className="w-7 h-7 fill-current ml-1" />
              </button>
            )}

            {/* Bottom Overlay Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 opacity-90 hover:opacity-100 transition-opacity">
              {/* Progress Scrubber */}
              <div
                onClick={handleSeek}
                className="w-full h-1.5 bg-neutral-700/80 hover:h-2.5 rounded-full cursor-pointer transition-all relative overflow-hidden"
              >
                <div
                  className="h-full bg-[#F27D26] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls bar */}
              <div className="flex items-center justify-between text-xs text-neutral-300 pt-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-[11px] text-neutral-400">
                    {currentTime} / {editor.showreel.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-neutral-800">
                    {editor.showreel.title}
                  </span>
                  <button
                    onClick={toggleFullScreen}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Under-Video Details & Editor Brief */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Action & Info Split */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-4">
                <img
                  src={editor.avatar}
                  alt={editor.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-neutral-700 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {editor.name}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {editor.title} • {editor.experienceYears} Years Experience
                  </p>
                  <p className="text-xs text-emerald-400 mt-0.5">
                    {editor.availability} ({editor.availabilityType})
                  </p>
                </div>
              </div>

              {/* Primary CTA */}
              <button
                id="showreel-request-editor-cta"
                onClick={() => onRequestEditor(editor)}
                className="w-full md:w-auto px-8 py-3.5 rounded-full bg-[#F27D26] hover:bg-[#D96916] text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request This Editor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Selected Work / Projects Breakdown */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#94A3B8]">
                  Featured Chapters in this Reel
                </h4>
                <span className="text-xs text-[#64748B]">
                  Verified client deliverables
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {editor.portfolio.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveProjectIndex(index)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      activeProjectIndex === index
                        ? 'border-[#F27D26] bg-[#151518] shadow-sm'
                        : 'border-white/[0.1] bg-[#151518]/50 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-[#F27D26] font-semibold">
                        0{index + 1}
                      </span>
                      <span className="text-[10px] bg-white/10 text-slate-200 px-2.5 py-0.5 rounded-full">
                        {item.duration}
                      </span>
                    </div>

                    <h5 className="font-semibold text-xs text-white mb-1 truncate">
                      {item.title}
                    </h5>

                    <p className="text-[11px] text-[#94A3B8] mb-2 truncate">
                      {item.client}
                    </p>

                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {item.impact && (
                      <div className="mt-3 pt-2 border-t border-white/[0.08] text-[10px] text-[#F27D26] flex items-center gap-1 font-medium">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.impact}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
