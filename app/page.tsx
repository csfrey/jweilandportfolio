"use client";

import MobileHero from "@/components/MobileHero";
import MobileBlurb from "@/components/MobileBlurb";
// import { FaArrowDown } from "react-icons/fa";

import "./cornerbox.css";

const longBio =
  "I was born and raised in Southeast Texas,  but spent the majority of my childhood moving around many of the southern states. In school, I participated in an athletics program and powerlifting competitions which introduced me to my passion for health and wellness. At 19, I joined the U.S. Air Force as a Supply troop and was stationed overseas for 6 years. I had the pleasure of living and working in the U.K., South Korea, and Japan. I was able to gain invaluable workplace experience,  plentiful volunteer opportunities, the training and skillset to become a strong leader, and an innumerable amount of unique cultural experiences that living internationally can offer. Today, I spend my time as a  certified personal trainer working with clients of all age groups, and as a full-time university student working towards a Bachelors in Education that specializes in school health and wellness for all grades, as well as a minor in the Japanese language and history.";

export default function Home() {
  return (
    <>
      <section className="h-full flex flex-col snap-center snap-always">
        <article className="relative">
          <MobileHero />
        </article>

        <article className="">
          <MobileBlurb />
        </article>

        {/* <article className="grow flex flex-col justify-center">
          <div className="flex justify-center">
            <FaArrowDown className="text-5xl" />
          </div>
        </article> */}
      </section>

      <section className="h-full flex flex-col snap-center snap-always">
        <article>
          <img src="/images/headshot.png" className="h-64 mx-auto mt-4" />
        </article>

        <article className="text-xs text-justify p-4">{longBio}</article>
      </section>
    </>
  );
}
