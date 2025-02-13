"use client";
import Image from "next/image";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/Joao Pacheco dos Santos EN.pdf";
    link.download = "Joao Pacheco dos Santos EN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Image
        src="/background.jpg"
        layout="fill"
        objectFit="cover"
        width={0}
        height={0}
        alt={"Cover"}
        className="absolute top-0 left-0 z-[-1]"
      />
      <div className="absolute top-0 left-0 w-full h-screen">
        <div className="container mx-auto mt-10 px-6 py-4 bg-white rounded-md h-[calc(100vh-80px)] max-w-7xl shadow-lg">
          <div className="flex justify-between items-center">
            <button className="text-[#8D9A91] text-sm font-bold">
              CONTACT
            </button>
            <div>
              <button className="text-[#8D9A91] text-sm font-bold">EN</button>
              <button
                onClick={handleDownload}
                className="bg-[#8D9A91] text-white text-xs rounded-full px-7 py-2 ml-4 font-bold shadow-lg"
              >
                RESUME
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="flex-1">
              <div className="flex flex-col items-left mx-auto pl-[15%]">
                <h1 className="text-6xl text-[#8D9A91] font-neue-bold">
                  João Pacheco.
                </h1>
                <div className="border-b border-[2px] border-[#8D9A91] w-[80%] mt-1"></div>
                <p className="text-[#8D9A91] text-4xl mt-2 font-neue">
                  A Senior Front-end
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-lg bg-[#8D9A91] p-4 mx-auto max-w-[470px]">
                <div className="flex  items-center w-full mt-3">
                  <span className="rounded-full bg-[#E86464] w-3 h-3 ml-2"></span>
                  <span className="rounded-full bg-[#E8DF64] w-3 h-3 ml-2"></span>
                  <span className="rounded-full bg-[#ADE864] w-3 h-3 ml-2"></span>
                </div>
                <p className="text-white text-sm my-12 p-7 pb-16 text-justify text-md leading-[1.7] font-sf">
                  With over <b>80 national</b> and <b>international</b> projects
                  in my portfolio, I am a <b>Senior Frontend Engineer</b>{" "}
                  passionate about innovation and code quality. Throughout my
                  career, I have collaborated with giants like <b>Uber</b>,{" "}
                  <b>Santander</b>, <b>Sony</b>, <b>Motorola</b>, and{" "}
                  <b>Grupo Boticário</b>, always delivering scalable and
                  high-performance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
