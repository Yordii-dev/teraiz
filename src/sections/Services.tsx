import Service from "../components/Service";
import { useTranslation } from "../context/TranslationContext";
import "./Services.css";

import {
  faBullhorn,
  faLayerGroup,
  faRobot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const { t } = useTranslation();
  const texts = t.services;

  const icons = [faBullhorn, faLayerGroup, faRobot, faStar];
  texts.list = texts.list.map((s, index) => ({ icon: icons[index], ...s }));

  return (
    <div className="services text-black">
      <div className="services__title text-center">{texts.title}</div>

      <div className="services_list mx-auto">
        {texts.list.map((service, index) => (
          <Service
            key={index}
            //@ts-ignore
            icon={service.icon}
            title={service.title}
            description={service.description}
            cta={service.textCtaBtn}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
