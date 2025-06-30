"use client";

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FilterIcon, XIcon } from "lucide-react";
import ExploreFiltersForm from "./ExploreFiltersForm"; // form separado para reuso

export const ExploreFiltersModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Botão mobile */}
      <div className="md:hidden flex justify-end mb-4 px-4">
        <button
          onClick={openModal}
          className="flex items-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-full"
        >
          <FilterIcon size={18} />
          Filtros
        </button>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center px-4 py-3 border-b">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Filtrar eventos
                    </DialogTitle>
                    <button onClick={closeModal}>
                      <XIcon size={20} className="text-neutral-700" />
                    </button>
                  </div>

                  <div className="p-4">
                    <ExploreFiltersForm onSubmitCallback={closeModal} />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
