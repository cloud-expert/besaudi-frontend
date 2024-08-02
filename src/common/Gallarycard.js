import {
  faCodeBranch,
  faDownload,
  faExpandArrowsAlt,
  faShare,
  faShareAlt,
  faTrash,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeGallery } from "../services/gallery.service";
import { useState } from "react";

export default function Gallarycard({ file, imageid, setGalleryChanged }) {
  const [showDialog, setShowDialog] = useState(false);

  const downloadFile = (file) => {
    fetch(file).then((response) => {
      console.log(response);
      response.blob().then((blob) => {
        console.log("blob: ", blob);
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        console.log(fileURL);
        alink.href = fileURL;
        alink.download = "image.png";
        alink.click();
      });
    });
  };
  const removeFile = (id) => {
    removeGallery(id).then(() => setGalleryChanged(Math.random()));
  };
  return (
    <div className="relative overflow-hidden bg-gray-900 rounded-2xl">
      <img
        src={file}
        alt="gallary file"
        // eslint-disable-next-line no-undef
        className={`w-full object-fit rounded-2xl`}
      />
      <div className="flex items-center justify-between w-full px-5 lg:text-xl md:text-lg sm:text-md text-sm text-white bg-gray-900 lg:h-16 md:h-12  sm:h-10 h-8">
        <FontAwesomeIcon
          icon={faDownload}
          className="hover:cursor-pointer"
          onClick={() => downloadFile(file)}
        />
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faExpandArrowsAlt}
            className="hover:cursor-pointer"
            onClick={() => setShowDialog(true)}
          />
          <FontAwesomeIcon icon={faShareAlt} className="hover:cursor-pointer" />
          <FontAwesomeIcon
            icon={faTrash}
            className="hover:cursor-pointer"
            onClick={() => removeFile(imageid)}
          />
        </div>
      </div>

      <div
        id="modal"
        className={`${
          showDialog ? "flex" : "hidden"
        } fixed top-0 left-0 z-[100] w-screen h-screen bg-black/70 justify-center items-center  transition-transform duration-1000`}
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      >
        <button
          className="fixed z-[100] top-6 right-8 text-white text-5xl font-bold"
          onClick={() => setShowDialog(false)}
        >
          &times;
        </button>

        <img
          src={file}
          alt="asdf"
          id="modal-img"
          className="max-w-[1024px] max-h-[800px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
