"use client";

import { PenLine, X } from "lucide-react";
import { SetStateAction } from "react";
import { CreatePostForm } from "./components/CreatePostForm";

interface CreatePostModalProps {
  showModal: boolean;
  setShowModal: (value: SetStateAction<boolean>) => void;
}

export const CreatePostModal = ({
  showModal,
  setShowModal,
}: CreatePostModalProps) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
          <div className="relative bg-background text-foreground w-full  md:max-w-2xl p-4 sm:p-6 rounded-lg overflow-y-auto">
            {/* Fechar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
            >
              <X className="w-5 h-5 cursor-pointer" />
            </button>

            {/* Título */}
            <h2 className="text-xl font-semibold mb-4 flex gap-2"><PenLine></PenLine>Create Post</h2>
            <CreatePostForm></CreatePostForm>
          </div>
        </div>
      )}
    </>
  );
};
