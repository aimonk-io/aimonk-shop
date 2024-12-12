"use client";

import { Dispatch, SetStateAction } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import useMediaQuery from "@/libs/hooks/use-media-query";
import { cn } from "@/libs/utils";


export default function Modal({
  children,
  className,
  showModal,
  setShowModal,
}: {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile } = useMediaQuery();

  // Mobile Modal
  if (isMobile) {
    return (
      <div className={`fixed inset-0 z-40 ${showModal ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur"
          onClick={() => setShowModal(false)}
        />
        <div className="fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white">
          <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
            <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
          </div>
          <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden bg-white pb-8 align-middle shadow-xl">
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Desktop Modal
  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
      <Dialog.Portal>
        <Dialog.Overlay
          id="modal-backdrop"
          className="animate-fade-in fixed inset-0 z-40 bg-gray-100 bg-opacity-50 backdrop-blur-md"
        />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className={cn(
            "animate-scale-in fixed inset-0 z-40 m-auto max-h-fit w-full max-w-md overflow-hidden border border-gray-200 bg-white p-0 shadow-xl md:rounded-2xl",
            className
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
