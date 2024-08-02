import {
  faCheck,
  faDownload,
  faEdit,
  faFemale,
  faGreaterThan,
  faLessThan,
  faMale,
  faSearch,
  faShare,
  faShareAlt,
  faUpload,
  faUserEdit,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import axios from "axios";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Template from "./Template";
import { saveGallery } from "../services/gallery.service";
import { getCurrentUser } from "../services/auth.service";

export default function Generateimage({ type }) {
  const [gender, setGender] = useState(0);
  const [currentTemplate, setCurrentTemplate] = useState(0);

  const inputRef = useRef(null);
  const [sourceimage, setSourceImage] = useState(null);
  const [resultimage, setResultImage] = useState(null);
  const [resultState, setResultState] = useState(0);
  const besaudi_templates = [
    `/img/be_template${gender}0.png`,
    `/img/be_template${gender}1.png`,
    `/img/be_template${gender}2.png`,
    `/img/be_template${gender}3.png`,
    `/img/be_template${gender}4.png`,
    `/img/be_template${gender}5.png`,
    `/img/be_template${gender}6.png`,
    `/img/be_template${gender}7.png`,
  ];
  const livesaudi_templates = [
    "/img/be_template10.png",
    "/img/be_template11.png",
    "/img/be_template12.png",
    "/img/be_template13.png",
    "/img/be_template14.png",
  ];

  let source_base64 = 0,
    target_base64 = 0;

  const convertBlobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
      };
      reader.readAsDataURL(blob);
    });

  async function setTargetBase64() {
    try {
      const response = await fetch(
        `/img/be_template${type === 0 ? gender : type}${currentTemplate}.png`
      );
      const blob = await response.blob();

      target_base64 = await convertBlobToBase64(blob);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }
  function handleUpload(event) {
    setSourceImage(event.target.files[0]);
  }

  async function generate() {
    await setTargetBase64();
    const reader = new FileReader();
    setResultState(1);
    reader.onloadend = () => {
      source_base64 = reader.result.replace("data:", "").replace(/^.+,/, "");
      fetch(
        `https://api.runpod.ai/v2/${process.env.REACT_APP_RUNPOD_ENDPOINT}/runsync`,
        {
          method: "POST",
          headers: {
            // "content-type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_RUNPOD_API_KEY}`,
          },
          body: JSON.stringify({
            input: {
              source_image: source_base64,
              target_image: target_base64,
              source_indexes: "-1",
              target_indexes: "-1",
              background_enhance: true,
              face_restore: true,
              face_upsample: true,
              upscale: 1,
              codeformer_fidelity: 0.5,
              output_format: "JPEG",
            },
          }),
        }
      )
        .then((res) => res.json())
        .then((response) => {
          if (response.status === "COMPLETED") {
            setResultImage("data:image/png;base64," + response.output.image);
            setResultState(2);
            if (getCurrentUser() && getCurrentUser().user)
              saveGallery("data:image/png;base64," + response.output.image);
          }
        });
    };
    console.log(sourceimage);
    reader.readAsDataURL(sourceimage);
  }
  function base64ToBlob(base64String, contentType = "") {
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteArrays);
    return new Blob([byteArray], { type: contentType });
  }
  const downloadFile = (file) => {
    const contentType = "image/png";
    console.log(file);
    // Convert Base64 to Blob
    const blob = base64ToBlob(file.slice(22), contentType);
    console.log(blob);
    const fileURL = window.URL.createObjectURL(blob);
    console.log(fileURL);
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "image.png";
    alink.click();
  };
  return (
    <div className="mt-14 ">
      <div className="relative lg:flex md:gap-10">
        <div className="relative flex align-middle lg:w-1/2 rounded-2xl upload-image max-lg:aspect-video max-h-[600px]">
          <input
            type="file"
            ref={inputRef}
            className="hidden"
            onChange={handleUpload}
            alt="carimg"
            accept="image/*"
          />

          {sourceimage && (
            <div className="absolute top-10 right-5">
              <FontAwesomeIcon
                icon={faUserEdit}
                className="text-white size-10 right-4 hover:cursor-pointer"
                onClick={() => inputRef.current.click()}
              />
            </div>
          )}
          {sourceimage ? (
            <img
              src={URL.createObjectURL(sourceimage)}
              alt="sdf"
              className="object-contain w-full h-full rounded-2xl"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-1/2 h-full gap-5 mx-auto my-auto text-white">
              <FontAwesomeIcon
                icon={faUpload}
                className="inline-block mx-auto size-10"
              />
              <p className="text-xl">
                <b>Click to upload</b> or drag and drop
              </p>
              <p className="text-lg">Max. File Size: 30MB</p>
              <button
                className="button"
                onClick={() => inputRef.current.click()}
              >
                <FontAwesomeIcon icon={faSearch} />
                &nbsp;&nbsp;&nbsp;Browse File
              </button>
            </div>
          )}
        </div>

        <div className="relative overflow-hidden border-2 lg:w-1/2 rounded-2xl max-lg:mt-10">
          {resultimage && (
            <div className="absolute top-10 right-5">
              <FontAwesomeIcon
                icon={faShareAlt}
                className="block text-white size-10 right-4 hover:cursor-pointer"
                onClick={() => alert("share please")}
              />
              <FontAwesomeIcon
                icon={faDownload}
                className="block mt-4 text-white size-10 right-4 hover:cursor-pointer"
                onClick={() => downloadFile(resultimage)}
              />
            </div>
          )}

          <img
            src={
              resultimage
                ? resultimage
                : `/img/be_template${
                    type === 0 ? gender : type
                  }${currentTemplate}.png`
            }
            alt="Be saudi template"
            className={`w-full h-full ${!resultimage && "opacity-35"}`}
          />

          <div className="text-white absolute w-full left-0 top-[45%] text-center text-4xl">
            {resultState === 0 ? (
              "No Image Generated"
            ) : resultState === 1 ? (
              <span>
                {" "}
                <svg
                  className="inline-block w-10 h-10 mr-3 -ml-1 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating ...
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="lg:absolute flex lg:w-[600px] h-24 bg-gray-900 lg:left-[calc(50%-300px)] -bottom-12 rounded-xl">
          <div className="flex justify-center w-1/2 px-4 py-6 text-white">
            <div
              className={`flex rounded-l-lg w-1/2  items-center justify-center  border-gray-300 border-[1px] hover:cursor-pointer ${
                gender === 0 ? "bg-gray-400" : "bg-gray-600"
              }`}
              onClick={() => setGender(0)}
            >
              <p>
                <FontAwesomeIcon icon={faMale} />
                &nbsp;&nbsp; Male&nbsp;&nbsp;
                {!gender && <FontAwesomeIcon icon={faCheck} />}
              </p>
            </div>
            <div
              className={`flex rounded-r-lg w-1/2  items-center justify-center border-gray-300 border-[1px] hover:cursor-pointer ${
                gender ? "bg-gray-400" : "bg-gray-600"
              }`}
              onClick={() => setGender(2)}
            >
              <p>
                <FontAwesomeIcon icon={faFemale} />
                &nbsp;&nbsp; Female&nbsp;&nbsp;
                {!!gender && <FontAwesomeIcon icon={faCheck} />}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-1/2 px-4 ">
            <button
              className="w-full my-auto align-middle button"
              onClick={generate}
            >
              <img
                src="/img/gen_icon.png"
                alt="adf"
                className="inline mr-2 size-6"
              />
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mx-40">
        <Template
          data={type ? livesaudi_templates : besaudi_templates}
          setCurrentTemplate={setCurrentTemplate}
          currentTemplate={currentTemplate}
        />
        {/*         
        <div className="flex items-center justify-center bg-gray-700 rounded-md size-8 hover:cursor-pointer">
          <FontAwesomeIcon icon={faLessThan} />
        </div>

        <img
          src={`/img/be_template${type}0.png`}
          alt="Be saudi template"
          className="rounded-md h-1/3 max-lg:hidden"
        />

        <img
          src={`/img/be_template${type}2.png`}
          alt="Be saudi template"
          className="rounded-md h-1/2 max-lg:hidden"
        />

        <img
          src={`/img/be_template${type}1.png`}
          alt="Be saudi template"
          className="rounded-md h-2/3 gradient-border"
        />

        <img
          src={`/img/be_template${type}3.png`}
          alt="Be saudi template"
          className="rounded-md h-1/2 max-lg:hidden"
        />

        <img
          src={`/img/be_template${type}4.png`}
          alt="Be saudi template"
          className="rounded-md h-1/3 max-lg:hidden"
        />

        <div className="flex items-center justify-center bg-gray-700 rounded-md size-8 hover:cursor-pointer">
          <FontAwesomeIcon icon={faGreaterThan} />
        </div> */}
      </div>

      <p className="font-bold text-center text-white">
        By uploading the images, you agree with our{" "}
        <span className="gradient-text">Privacy Policy</span>&nbsp; and{" "}
        <span className="gradient-text">Terms of Use</span>
      </p>
    </div>
  );
}
