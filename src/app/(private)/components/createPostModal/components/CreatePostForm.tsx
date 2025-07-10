import { useForm } from "react-hook-form";
import { AttachPreview } from "./AttachPreview";
import { Send, Video, Image } from "lucide-react";
import { useAttachs } from "@/hooks/useAttach";

type Post = {
  content: string;
};

export const CreatePostForm = () => {
  const { register, handleSubmit, watch, reset } = useForm<Post>();

  const watchedContent = watch("content");
  const { image, video, handleImage, handleVideo, resetAttachs } = useAttachs();

  const onSubmit = (data: Post) => {
    const formData = new FormData();
    formData.append("content", data.content);
    if (image) formData.append("image", image);
    if (video) formData.append("video", video);

    console.log("FormData:", formData);

    // Aqui você faria o fetch/Axios para o backend
    // await fetch('/api/posts', { method: 'POST', body: formData })

    reset();
    resetAttachs();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <textarea
        {...register("content")}
        placeholder="What's on your mind?"
        rows={4}
        className="w-full p-3 rounded resize-none bg-transparent focus:outline-none min-32 max-h-72 custom-scroll"
        required
        maxLength={400}
      />

      <div>
        {/* <AttachPreview attachs={attachs} /> */}
        <AttachPreview image={image} video={video} handleImage={handleImage} handleVideo={handleVideo}/>

        <div className="flex justify-between">
          <div className="flex gap-2">
            {/* Adicionar Imagem */}
            <label className="flex items-center gap-2 cursor-pointer px-2 py-2 border border-gray-300 dark:border-neutral-700 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
              <Image className="w-5 h-5" />
              <input
                type="file"
                accept="image/*"
                // Use estado local para armazenar o arquivo
                onChange={(e) => {
                  if (e.target.files?.[0]) handleImage(e.target.files[0]);
                }}
                className="hidden"
              />
            </label>

            {/* Adicionar Vídeo */}
            <label className="flex items-center gap-2 cursor-pointer px-2 py-2  border border-gray-300 dark:border-neutral-700 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
              <Video className="w-5 h-5" />
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) handleVideo(e.target.files[0]);
                }}
              />
            </label>
          </div>
                    
          <button
            type="submit"
            disabled={!watchedContent || watchedContent.trim().length === 0}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50 transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
