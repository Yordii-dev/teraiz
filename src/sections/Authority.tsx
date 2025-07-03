import { useTranslation } from "../context/TranslationContext";
import "./Authority.css";
import Image from "./Image";
import Imagen1 from "./../assets/MapChart_Map.png";

function Authority() {
  const { t } = useTranslation();
  const texts = t.authority;

  return (
    <div>
      <div className="authority text-black d-flex align-items-start justify-content-between">
        <div className="authority__title">{texts.title} </div>
        <div className="authority__socialproofs d-flex flex-column">
          {texts.list.map((autho, index) => (
            <div key={index} className="authority__socialproofs__proof">
              <p className="size-2 my-0 weight-semibold text-start">
                {autho.title}
              </p>
              <p className="size-3 my-0">{autho.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Image img={Imagen1} children={<p>HOLASSS</p>}></Image>
    </div>
  );
}

export default Authority;
