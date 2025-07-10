import { BookImage } from 'lucide-react';

type DropzoneProps = {
  onSelect: (file: File) => void;
};

export function Dropzone({ onSelect }: DropzoneProps) {
  return (
    <label className="block w-full border-2 border-dashed border-gray-800 dark:border-neutral-700 p-6 rounded-xl min-h-32 flex-col items-center justify-center cursor-pointer hover:bg-gray-800 dark:hover:bg-neutral-800 transition">
      <div className="flex flex-col items-center">
        <div className="border border-gray-400 dark:border-neutral-700 p-4 rounded-full mb-2">
          <BookImage className="w-8 h-8 text-gray-600 dark:text-gray-300" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-balance text-center">
          Clique para adicionar imagem ou vídeo
        </p>
      </div>

      <input
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onSelect(e.target.files[0]);
          }
        }}
      />
    </label>
  );
}
