"use client";

import { useState, useRef } from "react"
import { useTranslations } from 'next-intl';
import { Volume2, VolumeX } from "lucide-react"

interface TestimonialCardProps {
  name: string
  date: string
  video?: string
  image?: string
  testimonial: string
}

export default function TestimonialCard({ name, date, video, image, testimonial }: TestimonialCardProps) {
  const t = useTranslations();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden group">
        {video ? (
          <>
            {/* Video Element */}
            <video
              ref={videoRef}
              src={video}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer"
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              onMouseEnter={handlePlay}
              onMouseLeave={handlePause}
              onClick={handlePlay}
              onLoadedMetadata={(e) => {
                // Show first frame but don't auto-play
                e.currentTarget.currentTime = 0.1;
              }}
            />
            
            {/* Volume Control Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-80 hover:opacity-100"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX size={16} className="text-white" />
              ) : (
                <Volume2 size={16} className="text-white" />
              )}
            </button>
          </>
        ) : (
          /* Fallback to image if no video */
          <img src={image} alt={name} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm font-light tracking-[0.1em]">{name}</h3>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
        <p className="text-sm leading-relaxed text-neutral-600">{testimonial}</p>
        <button className="text-xs font-light tracking-wide text-neutral-900 hover:text-neutral-600">
          {t('testimonials.readMore')}
        </button>
      </div>
    </div>
  )
}
