// GlobalContext.tsx
import { createContext, useContext, useState } from "react";
import type {ReactNode} from 'react'

const defaultDescriptionModalContact =
  "Hola, me interesa el 40% de descuento en sus soluciones inmobiliarias. ¿Podrían escribirme?.";

type GlobalContextType = {
  descriptionModalContact: string;
  setDescriptionModalContact: (desc: string) => void;
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
  const [descriptionModalContact, setDescriptionModalContact] = useState<string>(
    defaultDescriptionModalContact
  );

  return (
    <GlobalContext.Provider
      value={{ descriptionModalContact, setDescriptionModalContact }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
