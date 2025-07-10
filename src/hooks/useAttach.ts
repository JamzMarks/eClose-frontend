// hooks/useAttachs.ts
import { useState } from 'react';

export function useAttachs() {
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
    
  function handleImage(file: File) {
    if (!file.type.startsWith('image/')) {
      alert('Apenas imagens são permitidas.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Imagem muito grande (máx. 5MB).');
      return;
    }
    setImage(file);
  }

  function handleVideo(file: File) {
    if (!file.type.startsWith('video/')) {
      alert('Apenas vídeos são permitidos.');
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      alert('Vídeo muito grande (máx. 50MB).');
      return;
    }
    setVideo(file);
  }

  function resetAttachs() {
    setImage(null);
    setVideo(null);
  }

  return {
    image,
    video,
    handleImage,
    handleVideo,
    resetAttachs,
  };
}
