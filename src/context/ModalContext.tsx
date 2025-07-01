import { createContext, useContext, useRef } from "react";
import type { RefObject, ReactNode } from "react";

declare global {
  interface Window {
    bootstrap: {
      Modal: any;
    };
  }
}

export type ModalKey = "success" | "contact" | "language"; // 🔁 Aquí agregas los modales que uses

type ModalContextType = {
  modalRefs: Record<ModalKey, RefObject<HTMLDivElement | null>>;
  openModal: (key: ModalKey) => void;
  closeModal: (key: ModalKey) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe usarse dentro de un <ModalProvider>");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const modalRefs: Record<ModalKey, RefObject<HTMLDivElement | null>> = {
    success: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    language: useRef<HTMLDivElement>(null),
  };

  const openModal = (key: ModalKey) => {
    const ref = modalRefs[key];
    if (ref?.current) {
      const modal = new window.bootstrap.Modal(ref.current);
      modal.show();
    }
  };

  const closeModal = (key: ModalKey) => {
    const ref = modalRefs[key];
    if (ref?.current) {
      const modalInstance = window.bootstrap.Modal.getInstance(ref.current);
      modalInstance?.hide();
    }
  };

  return (
    <ModalContext.Provider value={{ modalRefs, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
