import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Howl } from 'howler';

interface AudioPlayerProps {
  title: string;
  src: string;
  description?: string;
}

const AudioPlayer = ({ title, src, description }: AudioPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const soundRef = useRef<Howl | null>(null);
  const requestRef = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Howler sound
    soundRef.current = new Howl({
      src: [src],
      html5: true,
      onload: () => {
        if (soundRef.current) {
          setDuration(soundRef.current.duration());
        }
      },
      onplay: () => {
        setPlaying(true);
        animateProgress();
      },
      onpause: () => {
        setPlaying(false);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      },
      onstop: () => {
        setPlaying(false);
        setProgress(0);
        setCurrentTime(0);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      },
      onend: () => {
        setPlaying(false);
        setProgress(0);
        setCurrentTime(0);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      }
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [src]);

  const animateProgress = () => {
    if (soundRef.current) {
      const seek = soundRef.current.seek();
      setCurrentTime(seek);
      setProgress((seek / duration) * 100);
    }
    requestRef.current = requestAnimationFrame(animateProgress);
  };

  const togglePlayPause = () => {
    if (!soundRef.current) return;

    if (playing) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!soundRef.current || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const seekTime = duration * percent;
    
    soundRef.current.seek(seekTime);
    setProgress(percent * 100);
    setCurrentTime(seekTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-dark-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-800 mb-6">
      <div className="flex items-start mb-4">
        <button
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-dark-900 flex-shrink-0 mr-4"
          onClick={togglePlayPause}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <div>
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          {description && <p className="text-gray-400 text-sm">{description}</p>}
        </div>
      </div>
      
      <div className="mt-4">
        <div 
          ref={progressBarRef}
          className="audio-progress cursor-pointer" 
          onClick={handleProgressClick}
        >
          <div className="audio-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-500">{formatTime(currentTime)}</span>
          <span className="text-xs text-gray-500">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;