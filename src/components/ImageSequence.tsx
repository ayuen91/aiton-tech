import { useEffect, useState, useRef } from 'react';

interface ImageSequenceProps {
  frames: string[];
  fps?: number;
  className?: string;
  pingPong?: boolean;
}

const ImageSequence = ({ frames, fps = 24, className = '', pingPong = false }: ImageSequenceProps) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loadedFrames, setLoadedFrames] = useState<string[]>([]);
  const [direction, setDirection] = useState<1 | -1>(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const loaded: string[] = [];
      for (const frame of frames) {
        const img = new Image();
        img.src = frame;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
        loaded.push(frame);
      }
      setLoadedFrames(loaded);
    };

    if (frames.length > 0) {
      loadImages();
    }
  }, [frames]);

  // Animate frames
  useEffect(() => {
    if (loadedFrames.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrentFrame((prev) => {
        if (pingPong) {
          const nextFrame = prev + direction;
          if (nextFrame >= loadedFrames.length - 1) {
            setDirection(-1);
            return loadedFrames.length - 1;
          } else if (nextFrame <= 0) {
            setDirection(1);
            return 0;
          }
          return nextFrame;
        }
        return (prev + 1) % loadedFrames.length;
      });
    }, 1000 / fps);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [loadedFrames, fps, pingPong, direction]);

  // Show placeholder if no frames loaded
  if (loadedFrames.length === 0) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="w-16 h-16 mx-auto rounded-full border-4 border-primary border-t-transparent animate-spin mb-4" />
          <p className="text-xs text-muted-foreground">Add your PNG frames</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={loadedFrames[currentFrame]}
        alt={`Frame ${currentFrame + 1}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ImageSequence;
