import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { getContent, getLang } from "@/contexts/PageContext";

interface BtnaCtaProps {
  lang: string;
  classBtn: string;
  textBtn: string;
  sizeBtn?: "sm" | "icon" | "lg";
  visibleIcon?: boolean;
}

const BtnCta = ({
  classBtn,
  textBtn,
  visibleIcon,
  sizeBtn,
  lang,
}: BtnaCtaProps) => {
  const handlerClick = (e: any) => {
    window.location.href = `/${lang}/contact`;
  };
  return (
    <Button size={sizeBtn} className={classBtn} onClick={handlerClick}>
      {textBtn}
      {visibleIcon && (
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      )}
    </Button>
  );
};
export default BtnCta;
