import { useRef, useState } from "react";
import "./Companies.css";

import img from "../assets/react.svg";
import Company from "../components/Company";
import { useTranslation } from "../context/TranslationContext";

function Companies() {
  const { t } = useTranslation();
  const texts = t.testimonies;

  const icons = [img];
  texts.list = texts.list.map((s) => ({ img: icons[0], ...s }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? texts.list.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === texts.list.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="compaines text-black d-flex align-items-center justify-content-between">
      <div
        className={`compaines__list h-100 border-radius swipe-container`}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0].clientX;
          const diff = touchStartX.current - endX;
          if (diff > 50) goNext();
          else if (diff < -50) goPrev();
        }}
      >
        <Company
          key={currentIndex}
          //@ts-ignore
          img={texts.list[currentIndex].img}
          title={texts.list[currentIndex].title}
          author={texts.list[currentIndex].author}
          description={texts.list[currentIndex].description}
        />

        <div className="dots">
          {texts.list.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="compaines__title d-flex justify-content-end">
        {texts.title}{" "}
      </div>
    </div>
  );
}

export default Companies;
