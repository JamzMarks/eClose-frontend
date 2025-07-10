
import { Dropzone } from "./Dropzone";
type AttachPreviewProps = {
  image: File | null;
  video: File | null;

  handleImage: (file: File) => void;
  handleVideo: (file: File) => void;
};

export function AttachPreview({ image, video, handleImage, handleVideo }: AttachPreviewProps) {
  return (
    <>
    {!image && !video && (
    <Dropzone
      onSelect={(file) => {
        if (file.type.startsWith('image/')) {
          handleImage(file);
        } else if (file.type.startsWith('video/')) {
          handleVideo(file);
        } else {
          alert('Arquivo inválido.');
        }
      }}
    />
  )}
    <div className="flex gap-4 mb-5">
      {image && (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="max-w-xs max-h-48 object-cover rounded"
            />
        </div>
      )}
      {video && (
        <div>
          <video
            src={URL.createObjectURL(video)}
            controls
            className="max-w-xs max-h-48 rounded"
            />
        </div>
      )}
    </div>
    </>
  );
}
