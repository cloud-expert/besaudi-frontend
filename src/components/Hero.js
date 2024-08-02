import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faMinus } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import MyDropdown from "./MyDropdown";

export default function Hero({ onSectionClick }) {
  const scrollToSection = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [logoIndex, setLogoIndex] = useState(0);
  const logoData = [
    {
      title: "Experience the traditional Saudi costumes with AI power!",
      content:
        "Try cool stuff of traditional Saudi costumes and enjoy the experience of being Saudi. Upload your photo now and give it a try!",
      img_path: "/img/be_sample.png",
    },
    {
      title: "Experience and live Saudi landmarks with AI power!",
      content:
        "Try cool stuff with live Saudi landmarks and enjoy the experience of being in Saudi. Upload your photo now and give it a try!",
      img_path: "/img/live_sample.png",
    },
  ];
  return (
    <div className="h-[791px] mt-20 lg:mt-0">
      <div className="">
        <div className="items-center lg:flex ">
          <div className="text-white lg:mr-[58px] text-center lg:text-left">
            <h1 className="mb-5 text-3xl font-semibold md:text-4xl lg:text-5xl gradient-text">
              {logoData[logoIndex].title}
            </h1>

            <p className="mb-8 text-lg md:text-xl lg:text-2xl ">
              {logoData[logoIndex].content}
            </p>
            <button className="button">
              <FontAwesomeIcon icon={faCamera} className="mr-3" />
              Upload Image Now
            </button>
          </div>
          <img
            src={logoData[logoIndex].img_path}
            alt="besaudi_sample"
            className="mx-auto size-3/5"
          />
        </div>
      </div>
      <p className="text-white">02 / 0{2 - logoIndex}</p>
      <span>
        <FontAwesomeIcon
          icon={faMinus}
          className={`${logoIndex === 0 ? "text-gray-500" : "text-white"}`}
          onClick={() => setLogoIndex(1)}
        />
      </span>
      &nbsp; &nbsp;&nbsp;
      <span>
        <FontAwesomeIcon
          icon={faMinus}
          className={`${logoIndex === 1 ? "text-gray-500" : "text-white"}`}
          onClick={() => setLogoIndex(0)}
        />
      </span>
      <img
        src="/img/scroll_down_btn.png"
        alt="scroll down button"
        className="mx-auto animate-bounce"
        onClick={() => {
          scrollToSection(onSectionClick.section);
        }}
      />
    </div>
  );
}
