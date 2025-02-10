import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/background.jpg"
        layout="fill"
        objectFit="cover"
        width={0}
        height={0}
        alt={"Cover"}
      />
      <div className="absolute top-0 left-0 w-full h-screen">
        <div className="container mx-auto mt-10 px-6 py-4 bg-white rounded-md h-[calc(100vh-80px)] max-w-7xl shadow-lg">
          <div className="flex justify-between items-center">
            <button className="text-[#8D9A91] text-sm font-bold">
              CONTACT
            </button>
            <div>
              <button className="text-[#8D9A91] text-sm font-bold">EN</button>
              <button className="bg-[#8D9A91] text-white text-xs rounded-full px-7 py-2 ml-4 font-bold shadow-lg">
                RESUME
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="flex-1">
              <div className="flex flex-col items-center width-auto">
                <h1 className="text-5xl font-bold mt-10 text-[#8D9A91]">
                  João Pacheco
                </h1>
                <div className="border-b border-[#8D9A91] w-full mt-4"></div>
                <p className="text-[#8D9A91] text-sm mt-2">A Sr. Frontend.</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-lg bg-[#8D9A91] p-4 mt-10">
                <div className="flex  items-center w-full">
                  <span className="rounded-full bg-[#E86464] w-2 h-2 ml-2"></span>
                  <span className="rounded-full bg-[#E8DF64] w-2 h-2 ml-2"></span>
                  <span className="rounded-full bg-[#ADE864] w-2 h-2 ml-2"></span>
                </div>
                <p>
                  With over 80 national and international projects in my
                  portfolio, I am a Senior Frontend Engineer passionate about
                  innovation and code quality. Throughout my career, I have
                  collaborated with giants like Uber, Santander, Sony, Motorola,
                  and Grupo Boticário, always delivering scalable and
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
