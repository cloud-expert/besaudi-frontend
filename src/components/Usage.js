import Usagecard from "../common/Usagecard";
import { useTranslation } from "react-i18next";
export default function Usage({ sectionref }) {
  const { i18n, t } = useTranslation();
  return (
    <div className="px-16 py-20 mt-12 -mx-16 lg:usage">
      <h1
        className="mb-20 text-5xl font-bold text-center text-transparent bg-gradient-to-b from-gray-800 via-white to-gray-800 bg-clip-text"
        ref={sectionref}
      >
        {t("usage_title")}
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
        <Usagecard
          index={1}
          title={t("usage_1_title")}
          content={
            t("usage_1_content")
          }
        />

        <Usagecard
          index={2}
          title={t("usage_2_title")}
          content={
            t("usage_2_content")
          }
        />

        <Usagecard
          index={3}
          title={t("usage_3_title")}
          content={
            t("usage_3_content")
          }
        />

        <Usagecard
          index={4}
          title={t("usage_4_title")}
          content={
            t("usage_4_content")
          }
        />
      </div>
    </div>
  );
}
