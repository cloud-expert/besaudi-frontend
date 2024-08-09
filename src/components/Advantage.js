import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Advantagecard from "../common/Advantagecard";
import {
  faClock,
  faMobile,
  faRssSquare,
  faShieldAlt,
  faSmile,
  faTshirt,
} from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Advantage() {
  const { i18n, t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="px-16 pb-20 mt-12 -mx-16">
      <h1 className="mb-20 text-5xl font-bold text-center text-transparent bg-gradient-to-b from-gray-800 via-white to-gray-800 bg-clip-text">
        {t("advantage_title")}
      </h1>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div onClick={() => setActiveIndex(0)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faMobile} />}
            active={activeIndex === 0}
            title={t("advantage_1_title")}
            content={
              t("advantage_1_content")
            }
          />
        </div>
        <div onClick={() => setActiveIndex(1)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faShieldAlt} />}
            active={activeIndex === 1}
            title={t("advantage_2_title")}
            content={
              t("advantage_2_content")
            }
          />
        </div>
        <div onClick={() => setActiveIndex(2)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faClock} />}
            active={activeIndex === 2}
            title={t("advantage_3_title")}
            content={
              t("advantage_3_content")
            }
          />
        </div>
        <div onClick={() => setActiveIndex(3)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faTshirt} />}
            active={activeIndex === 3}
            title={t("advantage_4_title")}
            content={
              t("advantage_4_content")
            }
          />
        </div>
        <div onClick={() => setActiveIndex(4)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faRssSquare} />}
            active={activeIndex === 4}
            title={t("advantage_5_title")}
            content={
              t("advantage_5_content")
            }
          />
        </div>
        <div onClick={() => setActiveIndex(5)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faSmile} />}
            active={activeIndex === 5}
            title={t("advantage_6_title")}
            content={
              t("advantage_6_content")
            }
          />
        </div>
      </div>
    </div>
  );
}
