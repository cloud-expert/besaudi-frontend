export default function Usagecard({ index, title, content }) {
  return (
    <div
      className=" px-10 py-6  text-center  rounded-2xl text-white 
    bg-gradient-to-br from-[#2A01FF]  to-[#BFA6FF]"
    >
      <h1 className="mb-5 font-semibold text-7xl">{index}</h1>
      <h2 className="mb-3 text-3xl font-bold">{title}</h2>
      <p className="text-lg text-justify">{content}</p>
    </div>
  );
}
