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

export default function Advantage() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="px-16 pb-20 mt-12 -mx-16">
      <h1 className="mb-20 text-5xl font-bold text-center text-transparent bg-gradient-to-b from-gray-800 via-white to-gray-800 bg-clip-text">
        Saudi Uniform Generator Online, Simple, Fast, and Fun
      </h1>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div onClick={() => setActiveIndex(0)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faMobile} />}
            active={activeIndex === 0}
            title={"Easy-to-use"}
            content={
              "All you need to do is upload an excellent face portrait and select the desired template. AI will generate Saudi Uniform smoothly without requiring manual editing."
            }
          />
        </div>
        <div onClick={() => setActiveIndex(1)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faShieldAlt} />}
            active={activeIndex === 1}
            title={"Privacy Protection"}
            content={
              "We promise that all your uploaded images and other data will be protected well. No one will see these things except yourself. We make sure the Saudi uniform procedure is highly private."
            }
          />
        </div>
        <div onClick={() => setActiveIndex(2)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faClock} />}
            active={activeIndex === 2}
            title={"One-sec Saudi Uniform"}
            content={
              "This online AI Saudi Uniform app can generate Saudi-uniform of anyone online. No installation, no ads, and no watermarks! Create your Saudi-uniform magic in fantastic style and without too much effort!"
            }
          />
        </div>
        <div onClick={() => setActiveIndex(3)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faTshirt} />}
            active={activeIndex === 3}
            title={"Saudi-Uniform Options"}
            content={
              "Choose from diverse options tailored to your preference. Pick from a wide range of stylized options. You can be anyone you want to be."
            }
          />
        </div>
        <div onClick={() => setActiveIndex(4)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faRssSquare} />}
            active={activeIndex === 4}
            title={"Seamless Results"}
            content={
              "Advanced AI algorithms power it. Saudi-uniform ensures seamless and realistic Saudi uniform. Anyone will naturally be put on Saudi uniform without introducing artifacts."
            }
          />
        </div>
        <div onClick={() => setActiveIndex(5)}>
          <Advantagecard
            icon={<FontAwesomeIcon icon={faSmile} />}
            active={activeIndex === 5}
            title={"For Funny Memes and Gifs"}
            content={
              "We promise that all your uploaded images and other data will be protected well. No one will see these things except yourself. We make sure the Saudi uniform procedure is highly private."
            }
          />
        </div>
      </div>
    </div>
  );
}
