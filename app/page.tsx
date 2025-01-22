"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import "./cornerbox.css";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// const longBio =
//   "I was born and raised in Southeast Texas,  but spent the majority of my childhood moving around many of the southern states. In school, I participated in an athletics program and powerlifting competitions which introduced me to my passion for health and wellness. At 19, I joined the U.S. Air Force as a Supply troop and was stationed overseas for 6 years. I had the pleasure of living and working in the U.K., South Korea, and Japan. I was able to gain invaluable workplace experience,  plentiful volunteer opportunities, the training and skillset to become a strong leader, and an innumerable amount of unique cultural experiences that living internationally can offer. Today, I spend my time as a  certified personal trainer working with clients of all age groups, and as a full-time university student working towards a Bachelors in Education that specializes in school health and wellness for all grades, as well as a minor in the Japanese language and history.";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <section className="shadow-md mb-8">
        <div>
          <div className="absolute w-full text-center mt-24 z-10 text-3xl text-gray-50">
            Fitness Educator Portfolio
          </div>
          <div className="relative after:content-normal after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-violet-400 after:bg-opacity-90">
            <img className="w-full" src="/images/running.png" />
          </div>
        </div>
      </section>

      <section className="">
        <div className="p-4 font-sans text-justify text-xl leading-loose lg:text-2xl lg:leading-loose xl:text-3xl xl:leading-loose">
          I&apos;m a <i>School Health and Wellness Education: K-12</i> major at{" "}
          <strong>Slippery Rock University of Pennsylvania</strong> and a{" "}
          <i>certified personal trainer</i> based out of New Castle, PA.
          I&apos;ll be graduating in Spring 2025 as a{" "}
          <strong>Bachelor of Education</strong>.
        </div>
      </section>

      <section className="grow flex flex-col justify-center">
        <div className="flex justify-center">
          <Button>Read More</Button>
        </div>
      </section>
    </div>
  );
}
