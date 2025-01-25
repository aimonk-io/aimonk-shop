'use client';
// import { useEffect } from "react";
import { useToast } from "@/libs/hooks/use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-20 right-4 space-y-4 z-50">
      {toasts.map((toast) => (
        <div key={toast.id} className="relative flex flex-col bg-white border rounded-[10px] shadow-md p-4 w-80 overflow-hidden">
          {/* Toast Title and Description */}
           {/* Dismiss Button */}
          <div className="flex flex-row gap-6 jsutify-between items-center justify-between">
            {toast.title && <p className="font-bold text-red-500 text-[14px]">{toast.title}</p>}
            <button className="text-black-500 mt-2 text-[13px]" onClick={() => dismiss(toast.id)} > X </button>
          </div>


          {toast.description && <p className="mt-1 text-gray-600 text-[13px]">{toast.description}</p>}
          {toast.action && <div className="mt-2 text-[12px]">{toast.action}</div>}

         
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-red-500" style={{ width: "100%", animation: `toast-progress ${toast.duration || 5000}ms linear`,}}> </div>
          {/* CSS Animation for Progress Bar */}
          <style jsx>{`
            @keyframes toast-progress {
              from {
                width: 100%;
              }
              to {
                width: 0%;
              }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
}
