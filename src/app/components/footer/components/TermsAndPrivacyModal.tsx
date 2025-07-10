'use client';

import { X } from "lucide-react";
import { SetStateAction, useState, useEffect } from "react";

interface TermsAndPrivacyModalProps {
  showModal: boolean;
  setShowModal: (value: SetStateAction<boolean>) => void;
}

export const TermsAndPrivacyModal = ({
  showModal,
  setShowModal,
}: TermsAndPrivacyModalProps) => {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  // Bloquear scroll do body quando o modal estiver aberto (opcional)
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
          <div className="relative bg-background text-foreground w-full h-7/12 sm:h-auto sm:w-2/3 lg:max-w-2xl p-4 sm:p-6 rounded-lg overflow-y-auto">
            {/* Botão Fechar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
            >
              <X className="w-5 h-5 cursor-pointer" />
            </button>

            {/* Título */}
            <h2 className="text-xl font-semibold mb-4">
              {activeTab === "terms" ? "Terms & Conditions" : "Privacy Policy"}
            </h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setActiveTab("terms")}
                className={`px-3 py-1 rounded ${
                  activeTab === "terms"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                Terms
              </button>
              <button
                onClick={() => setActiveTab("privacy")}
                className={`px-3 py-1 rounded ${
                  activeTab === "privacy"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                Privacy
              </button>
            </div>

            {/* Conteúdo */}
            <div className="max-h-[70vh] overflow-y-auto text-sm space-y-2">
              {activeTab === "terms" ? (
                <>
                  <p>
                    Aqui vai o conteúdo de Terms & Conditions. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>
                    Mais cláusulas legais, direitos, obrigações, etc.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Aqui vai o conteúdo da Privacy Policy. Como coletamos, usamos e protegemos os seus dados.
                  </p>
                  <p>
                    Informações sobre cookies, armazenamento, consentimento, etc.
                  </p>
                </>
              )}
            </div>

            {/* Botão Fechar */}
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
