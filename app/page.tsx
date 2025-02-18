"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const goToMySkills = () => {
    router.push("/my-skills");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/Joao Pacheco dos Santos EN.pdf";
    link.download = "Joao Pacheco dos Santos EN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsDialogOpen(false);
    }
  };

  const showContact = true;
  const showLanguageOption = false;

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
      <div className="absolute top-0 left-0 w-full md:h-screen max-md:m-2 max-md:w-[calc(100vw-20px)] overflow-hidden">
        <div className="container mx-auto mt-10 px-6 py-4 bg-white rounded-md h-[calc(100vh-80px)] max-w-7xl shadow-lg max-md:mt-5 max-md:px-4 max-md:py-4 max-md:h-fit max-md:pb-10">
          <div
            className={`flex ${
              showContact ? "justify-between" : "justify-end"
            } items-center`}
          >
            {showContact && (
              <button
                onClick={handleDialogOpen}
                className="text-[#8D9A91] text-sm font-bold"
              >
                CONTACT
              </button>
            )}
            <div>
              {showLanguageOption && (
                <button className="text-[#8D9A91] text-sm font-bold">EN</button>
              )}
              <button
                onClick={handleDownload}
                className="bg-[#8D9A91] text-white text-xs rounded-full px-7 py-2 ml-4 font-sf-bold shadow-lg"
              >
                RESUME
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center h-full max-md:flex-col max-md:justify-around">
            <div className="md:flex-1 max-md:w-full">
              <div className="flex flex-col items-left mx-auto pl-[15%] max-md:pl-0 max-md:my-10 ">
                <h1 className="text-6xl text-[#8D9A91] font-neue-bold max-md:text-5xl max-sm:text-4xl w-[85%]">
                  João Pacheco.
                  <div className="border-b border-[2px] border-[#8D9A91] mt-1"></div>
                </h1>
                <p className="text-[#8D9A91] text-4xl mt-2 font-neue max-md:text-xl">
                  A Senior Front-end
                </p>
              </div>
            </div>
            <div className="md:flex-1 max-md:w-full">
              <div className="rounded-lg bg-[#8D9A91] p-4 mx-auto max-w-[470px]">
                <div className="flex  items-center w-full mt-3">
                  <span className="rounded-full bg-[#E86464] w-3 h-3 ml-2"></span>
                  <span className="rounded-full bg-[#E8DF64] w-3 h-3 ml-2"></span>
                  <span className="rounded-full bg-[#ADE864] w-3 h-3 ml-2"></span>
                </div>
                <p className="text-white text-sm my-12 p-7 pb-16 text-justify text-md leading-[1.7] font-sf max-md:my-0 max-md:p-0 max-md:py-7">
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

        <div className="absolute bottom-0 left-10 flex justify-left items-center z-10 w-full -mt-[7%] max-w-6xl mx-auto max-md:mt-0">
          <div
            onClick={goToMySkills}
            className="bg-[#F4F6F5] rounded-t-3xl px-10 py-5 text-[#8D9A91] text-bold font-sf-bold shadow-lg text-xl max-w-[285px] cursor-pointer transition-transform duration-300 hover:scale-105 max-md:hidden"
          >
            <p className="pb-4">Skills</p>
            <h3>What makes my work unique</h3>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleDialogClose}
        >
          <dialog
            open
            className="bg-white rounded-md p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="text-sm">
              <li className="mb-2 flex">
                <Image src="/linkedin.png" width={20} height={20} alt={""} />
                <a
                  href="https://www.linkedin.com/in/joaopachecofrontend/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8D9A91] ml-2"
                >
                  linkedin.com/in/joaopachecofrontend/
                </a>
              </li>
              <li className="mb-2 flex">
                <Image src="/github.png" width={20} height={20} alt={""} />
                <a
                  href="https://github.com/Joao-Pacheco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8D9A91] ml-2"
                >
                  github.com/Joao-Pacheco
                </a>
              </li>
              <li className="mb-2 flex">
                <Image src="/email.png" width={20} height={20} alt={""} />
                <a
                  href="mailto:joaopsantos2912@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8D9A91] ml-2"
                >
                  joaopsantos2912@gmail.com
                </a>
              </li>
              <li className="mb-2 flex">
                <Image src="/instagram.png" width={20} height={20} alt={""} />
                <a
                  href="https://www.instagram.com/juaopa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8D9A91] ml-2"
                >
                  instagram.com/juaopa/
                </a>
              </li>
              <li className="mb-2 flex">
                <Image src="/twitter.png" width={20} height={20} alt={""} />
                <a
                  href="https://x.com/juaopacheco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8D9A91] ml-2"
                >
                  x.com/juaopacheco
                </a>
              </li>
            </ul>
          </dialog>
        </div>
      )}
    </>
  );
}
