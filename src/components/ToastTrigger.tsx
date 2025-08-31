// ToastTrigger.tsx
import { useToast } from "@/hooks/use-toast";
import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function ToastTrigger({ title, description }: Props) {
  const { toast } = useToast();

  // Solo disparar toast cuando se monte
  React.useEffect(() => {
    toast({ title, description });
  }, []);

  return null;
}
