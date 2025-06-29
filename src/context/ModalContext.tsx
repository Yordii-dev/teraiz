import { createContext, useContext, useRef } from "react";

// Al inicio del archivo (ModalContext.tsx, por ejemplo)
declare global {
  interface Window {
    bootstrap: {
      Modal: any;
    };
  }
}
type ModalContextType = {
  successModalRef: React.RefObject<HTMLDivElement | null>; // ✅ Correcto

  openSuccessModal: () => void;
  closeSuccessModal: () => void;
};

// 🔹 Contexto con tipo opcional
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 🔹 Hook personalizado para consumir el contexto
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe usarse dentro de un <ModalProvider>");
  }
  return context;
};

// 🔹 Proveedor del contexto
export const ModalProvider = ({ children }: { children: any }) => {
  const successModalRef = useRef<HTMLDivElement>(null);

  const openSuccessModal = () => {
    if (successModalRef.current) {
      const modal = new window.bootstrap.Modal(successModalRef.current);
      modal.show();
    }
  };

  const closeSuccessModal = () => {
    if (successModalRef.current) {
      const instance = window.bootstrap.Modal.getInstance(
        successModalRef.current
      );
      instance?.hide();
    }
  };

  return (
    <ModalContext.Provider
      value={{ successModalRef, openSuccessModal, closeSuccessModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
