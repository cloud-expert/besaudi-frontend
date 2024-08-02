import Usagecard from "../common/Usagecard";

export default function Usage({ sectionref }) {
  return (
    <div className="px-16 py-20 mt-12 -mx-16 lg:usage">
      <h1
        className="mb-20 text-5xl font-bold text-center text-transparent bg-gradient-to-b from-gray-800 via-white to-gray-800 bg-clip-text"
        ref={sectionref}
      >
        How to Generate Saudi Uniform
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
        <Usagecard
          index={1}
          title={"Upload an Image"}
          content={
            "Simply click 'Upload an Image' and select a photo you want to use as the source image. Ensure only one face in the photo is of good quality."
          }
        />

        <Usagecard
          index={2}
          title={"Choose your option"}
          content={
            "Once your original image is ready, choose the desired gender, age and model. That means you will generate saudi uniform of your uploaded image with the selected option."
          }
        />

        <Usagecard
          index={3}
          title={"Generate Saudi Uniform"}
          content={
            "Click the Generate button to show AI its magic. Saudi Uniform will finish generating in a few seconds. Our AI does the job automatically while guaranteeing the best output."
          }
        />

        <Usagecard
          index={4}
          title={"Preview and Download"}
          content={
            "Bingo! Your Saudi uniform is generated to who you like! Preview the final result on the same page. Click Download to save the watermark-free picture to your device. Share it for fun!"
          }
        />
      </div>
    </div>
  );
}
