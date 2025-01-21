import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./cornerbox.css";

// const Headline = () => (

// );

export default function Home() {
  return (
    <div>
      <header className="p-4 md:p-8 md:flex">
        <div className="font-serif text-4xl text-center pb-4 md:text-left md:pb-0 md:grow">
          <div className="flex flex-col justify-center">Jhonathon Weiland</div>
        </div>
        <div className="flex justify-center space-x-12 md:space-x-4">
          <a href="#about" className="flex flex-col justify-center">
            About
          </a>
          <a href="#contact" className="flex flex-col justify-center">
            Contact
          </a>
          <a href="" className="flex flex-col justify-center">
            <FaLinkedin />
          </a>
          <a href="" className="flex flex-col justify-center">
            <FaYoutube />
          </a>
        </div>
      </header>
      <main className="px-8 flex flex-col md:flex-row md:justify-center md:space-x-4 ">
        <Image
          className="mx-auto mb-4 md:hidden lg:block lg:mx-0 lg:mb-0"
          src="/images/headshot.png"
          alt="headshot"
          width={400}
          height={400}
        />
        <Image
          className="hidden md:block lg:hidden"
          src="/images/headshot.png"
          alt="headshot"
          width={300}
          height={300}
        />

        <div className="md:flex md:flex-col md:justify-center md:w-[372px] lg:grow">
          <div className="cornerbox font-serif text-lg text-justify leading-relaxed p-4 md:text-xl md:leading-relaxed lg:text-3xl lg:leading-relaxed">
            I'm a <strong>School Health and Wellness Education: K-12</strong>{" "}
            major at <i>Slippery Rock University of Pennsylvania</i> and a{" "}
            <strong>certified personal trainer</strong> based out of New Castle,
            PA. I'll be graduating in Spring 2025 as a{" "}
            <i>Bachelor of Education</i>.
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
