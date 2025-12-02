'use client';

import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import type { MusicVideo } from '@/lib/data';

interface VideoModalProps {
  video: MusicVideo | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 border-0 bg-transparent shadow-none">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
