"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import "./cornerbox.css";
import { useRef } from "react";

const ShortBio = () => (
  <div className="font-sans text-justify text-xl leading-loose lg:text-2xl lg:leading-loose xl:text-3xl xl:leading-loose">
    I'm a <i>School Health and Wellness Education: K-12</i> major at{" "}
    <strong>Slippery Rock University of Pennsylvania</strong> and a{" "}
    <i>certified personal trainer</i> based out of New Castle, PA. I'll be
    graduating in Spring 2025 as a <strong>Bachelor of Education</strong>.
  </div>
);

const longBio =
  "I was born and raised in Southeast Texas,  but spent the majority of my childhood moving around many of the southern states. In school, I participated in an athletics program and powerlifting competitions which introduced me to my passion for health and wellness. At 19, I joined the U.S. Air Force as a Supply troop and was stationed overseas for 6 years. I had the pleasure of living and working in the U.K., South Korea, and Japan. I was able to gain invaluable workplace experience,  plentiful volunteer opportunities, the training and skillset to become a strong leader, and an innumerable amount of unique cultural experiences that living internationally can offer. Today, I spend my time as a  certified personal trainer working with clients of all age groups, and as a full-time university student working towards a Bachelors in Education that specializes in school health and wellness for all grades, as well as a minor in the Japanese language and history.";

export default function Home() {
  const certsRef = useRef<HTMLElement | null>(null);

  return (
    <div className="snap-mandatory snap-y overflow-y-scroll h-screen">
      <div className="h-screen md:h-[95%] flex flex-col snap-always snap-center">
        {/* Mobile header */}
        <header className="bg-slate-100 shadow md:hidden">
          <div className="p-4 mx-auto w-[360px]">
            <div className="font-serif text-6xl">
              <div className="mb-4 flex space-x-2">
                <div className="grow flex flex-col justify-center">
                  <div className="border border-black"></div>
                </div>
                <div className="text-right">Jhonathon</div>
              </div>
              <div className="flex space-x-2">
                <div>Weiland</div>
                <div className="grow flex flex-col justify-center">
                  <div className="border border-black"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-6 text-2xl p-4">
            <FaLinkedin />
            <FaYoutube />
          </div>
        </header>

        {/* Web header */}
        <header className="bg-slate-100 shadow hidden md:block">
          <div className="p-10 flex justify-between">
            <div className="font-serif text-4xl">Jhonathon Weiland</div>
            <div className="flex flex-col justify-center">
              <div className="flex space-x-6 text-2xl">
                <FaLinkedin />
                <FaYoutube />
              </div>
            </div>
          </div>
        </header>

        {/* mobile intro */}
        <section className="grow flex flex-col justify-center md:hidden md:grow-0">
          <div className="cornerbox w-[450px] mx-auto p-4">
            <ShortBio />
          </div>
        </section>
        <section className="flex justify-center text-4xl my-8 md:hidden">
          <FaArrowDown
            onClick={() =>
              certsRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          />
        </section>

        {/* web intro */}
        <section className="hidden md:grow md:block">
          <div className="flex justify-center space-x-4 mt-24 lg:mt-8">
            <Image
              className="block lg:hidden"
              src="/images/headshot.png"
              alt="portait"
              width={300}
              height={300}
            />
            <Image
              className="hidden lg:block"
              src="/images/headshot.png"
              alt="portait"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-center">
              <div className="cornerbox w-[450px] mx-auto p-4 xl:w-[600px]">
                <ShortBio />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        ref={certsRef}
        className="h-screen bg-gray-100 shadow p-4 snap-always snap-center"
      >
        <div className="text-center text-4xl font-serif">About Me</div>
      </section>
      <footer></footer>
    </div>
  );
}
