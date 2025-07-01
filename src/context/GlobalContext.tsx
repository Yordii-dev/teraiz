import { createContext, useContext, useState } from "react";
import type {ReactNode} from 'react'
import type { targetModalType } from "../types/targetModal";

type GlobalContextType = {
  targetModalContact: targetModalType
  setTargetModalContact: (target: targetModalType) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobal = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal debe usarse dentro de un <GlobalProvider>");
  }
  return context;
};

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [targetModalContact, setTargetModalContact] = useState<targetModalType>("target_1");

  return (
    <GlobalContext.Provider
      value={{ targetModalContact, setTargetModalContact }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
