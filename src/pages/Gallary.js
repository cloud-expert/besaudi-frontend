import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallarycard from "../common/Gallarycard";
import { getCurrentUser } from "../services/auth.service";
import { useEffect, useState } from "react";
import { getGallery } from "../services/gallery.service";
export default function Gallary() {
  const [gallery, setGallery] = useState([]);
  const [galleryChanged, setGalleryChanged] = useState(0);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (!getCurrentUser()) return;
    async function fetchGallery() {
      const gal = await getGallery(getCurrentUser().user.id);
      setGallery(gal);
    }
    fetchGallery();
  }, [galleryChanged]);
  return (
    <div className="bg-[#16082E]  px-16 relative  overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] top-[-91px] left-[-232px] 
      rounded-[50%] bg-gradient-to-br from-purple-600 opacity-30 blur-3xl"
      ></div>
      <div
        className="absolute w-[600px] h-[600px] top-[663px] -right-72
      rounded-[50%] bg-gradient-to-br from-purple-900 opacity-30 blur-3xl overflow-hidden"
      ></div>
      <div
        className="absolute w-[600px] h-[600px] top-[45px] -right-96
      rounded-[50%] bg-gradient-to-br from-purple-900 opacity-30 blur-3xl"
      ></div>
      <div
        className="w-[600px] h-[600px] bottom-0 -right-80 absolute
      rounded-[50%] bg-gradient-to-br from-purple-900 opacity-30 blur-3xl"
      ></div>

      <Navbar isLogged={!!getCurrentUser()} />
      <div className="flex flex-col px-5">
        <p className="text-white">Today</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-10 sm:gap-5 gap-2  mt-5">
          {(showAll ? gallery : gallery.slice(0, 4)).map((item, index) => (
            <div key={index}>
              <Gallarycard
                file={`${process.env.REACT_APP_API_ROOT}/result/${item.image}`}
                imageid={item._id}
                setGalleryChanged={setGalleryChanged}
              />
            </div>
          ))}
        </div>
        <button
          className="w-1/4 mx-auto mt-10 button"
          onClick={() => setShowAll(true)}
        >
          Load more
        </button>
      </div>
      <Footer />
    </div>
  );
}
