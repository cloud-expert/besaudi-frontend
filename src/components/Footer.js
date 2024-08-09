/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n, t } = useTranslation();
  return (
    <div className="pb-10 mt-10">
      <div className=" md:flex">
        <div className="w-full md:w-1/2">
          <img
            src="/img/footer_logo.png"
            alt="Logo"
            className="w-1/2 mx-auto md:ml-0"
          />
        </div>
        <div className="w-full gap-10 text-white md:flex md:w-1/2">
          <div className="mt-10 text-center md:w-1/3 md:mt-0">
            <h1 className="mb-3 font-medium ">{t("tools")}</h1>

            <a href="#" className="block">
              {t("image_generator")}
            </a>
            <a href="#" className="block">
              {t("image_options")}
            </a>
          </div>

          <div className="mt-10 text-center md:w-1/3 md:mt-0">
            <h1 className="mb-3 font-medium ">{t("features")}</h1>
            <a href="#" className="block">
              {t("scale")}
            </a>
            <a href="#" className="block">
              {t("remove_background")}
            </a>
            <a href="#" className="block">
              {t("enhance")}
            </a>
            <a href="#" className="block">
            {t("cutout")}
            </a>
          </div>

          <div className="mt-10 text-center md:w-1/3 md:mt-0">
            <h1 className="mb-3 font-medium ">  {t("about")}</h1>
            <a href="#" className="block">
            {t("pricing")}
            </a>
            <a href="#" className="block">
            {t("guids")}
            </a>
            <a href="#" className="block">
            {t("faq")}
            </a>
            <a href="#" className="block">
            {t("email")}
            </a>
          </div>
        </div>
      </div>
      <hr className="bg-gray-500 mt-36" />
      <p className="mx-auto mt-4 text-center text-white">
      {t("copyright")} © 2024 Besaudi.ai.   {t("all_rights_reserved")}
      </p>
    </div>
  );
}
