export default function Advantagecard({ icon, active, title, content }) {
  return (
    <div
      className={`h-[360px]   text-left  rounded-2xl text-white 
    ${
      !active && "bg-gradient-to-tr from-[#2A01FF] via-[#BFA6FF] to-[#22007E]"
    } p-0.5`}
    >
      <div
        className={`${
          active
            ? "bg-gradient-to-br from-[#2A01FF]  to-[#BFA6FF]"
            : "bg-[#16082E]"
        } lg:px-20 md:px-10 px-5 py-6 rounded-2xl w-full h-full`}
      >
        <h2
          className={`mb-3 text-3xl font-bold ${
            active && "text-white"
            // : "bg-gradient-to-tr from-[#2A01FF] via-[#BFA6FF] to-[#22007E] text-transparent bg-clip-text"
          }`}
        >
          {icon}&nbsp;&nbsp;{title}
        </h2>
        <p className="text-lg text-left">{content}</p>
      </div>
    </div>
  );
}
