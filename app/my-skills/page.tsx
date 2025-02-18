"use client";
import Image from "next/image";

export default function MySkills() {
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
        <div className="container mx-auto mt-10 bg-white rounded-md h-[calc(100vh-80px)] max-w-7xl shadow-lg max-md:mt-5 max-md:px-4 max-md:py-4 max-md:h-fit max-md:pb-10">
          <div className="flex w-full bg-[#F4F6F5] py-3 px-2 rounded-t-md">
            <div className="flex items-center">
              <span
                onClick={() => window.history.back()}
                className="rounded-full bg-[#E86464] w-3 h-3 ml-2 cursor-pointer"
              ></span>
              <span className="rounded-full bg-[#E8DF64] w-3 h-3 ml-2"></span>
              <span className="rounded-full bg-[#ADE864] w-3 h-3 ml-2"></span>
            </div>
            <h1 className="text-md font-sf-bold text-[#8D9A91] ml-2">
              Skills - What makes my work unique
            </h1>
          </div>
          <div className="flex justify-between items-center max-md:flex-col max-md:justify-around w-full mt-24 px-24">
            <div className="flex-1 flex  self-start">
              <Image
                className="rounded-md w-full max-w-[400px]"
                src="/profile.jpeg"
                width={400}
                height={300}
                alt="João Pacheco"
              />
            </div>
            <div className="flex-1 text-[#6E7E74] text-sm font-sf max-md:text-xs max-md:mt-5 max-md:px-4 max-md:py-4 max-md:h-fit max-md:pb-10">
              <ul>
                <li className="mb-10">
                  <h3 className="font-sf-bold text-[16px] mb-4">
                    • Expertise in Cutting-Edge Technologies
                  </h3>
                  <p className="leading-relaxed">
                    I specialize in React, Flutter, Vue.js, and JavaScript,
                    applying TDD (Test-Driven Development), Clean Architecture
                    (SOLID), and CI/CD best practices to ensure reliability,
                    maintainability, and efficiency in every project.
                  </p>
                </li>
                <li className="mb-10">
                  <h3 className="font-sf-bold text-[16px] my-4 ">
                    • Proven Track Record of Impactful Contributions
                  </h3>
                  <p className="leading-relaxed">
                    At F1rst Digital Services, I play a key role in Santander's
                    fintech, Empréstimo Sim, driving technical decisions and
                    optimizing architectures for scalability. Previously, I
                    delivered high-quality payment solutions for Uber at Pagtel
                    and led the development of Shopstar, a Peruvian e-commerce
                    platform at CoreBiz.
                  </p>
                </li>
                <li className="mb-10">
                  <h3 className="font-sf-bold text-[16px] my-4 ">
                    • Collaboration & Continuous Improvement
                  </h3>
                  <p className="leading-relaxed">
                    I don’t just write code—I analyze, refine, and enhance
                    digital experiences. Whether through in-person training for
                    international teams or leading discussions on product
                    decisions, I ensure that my work not only meets but exceeds
                    expectations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full text-black text-6xl font-neue-light text-center  leading-[1.2]">
            Innovative solutions, clean code, and a passion for
            performance—that's what makes my work unique.
          </div>
        </div>
      </div>
    </>
  );
}
