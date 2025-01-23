"use client";

import "./cornerbox.css";

import MobileHero from "@/components/MobileHero";
import MobileBlurb from "@/components/MobileBlurb";

import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const longBio =
  "I grew up in Southeast Texas but spent much of my childhood moving across the southern states. My passion for health and wellness began with athletics and powerlifting in school. At 19, I joined the U.S. Air Force, spending six years overseas in the U.K., South Korea, and Japan, where I gained leadership skills, cultural experiences, and workplace training. Now, I’m a certified personal trainer working with clients of all ages and a full-time university student pursuing a Bachelor’s in Education focused on school health and wellness, with a minor in Japanese language and history.";

export default function Home() {
  return (
    <>
      <section className="h-full flex flex-col snap-start snap-always">
        <article className="relative">
          <MobileHero />
        </article>

        <article className="">
          <MobileBlurb />
        </article>
      </section>

      <section className="h-full flex flex-col snap-start snap-always">
        <article className="bg-violet-300 p-2">
          <img
            src="/images/headshot.png"
            className="h-40 float-left mr-2 mt-2"
          />
          <div className="text-xs leading-relaxed text-gray-50">{longBio}</div>
        </article>

        <article>
          <div className="flex justify-center mt-8">
            <Button className="bg-violet-300 hover:bg-violet-400">
              Read about my teaching philosophy
              <FaArrowRight />
            </Button>
          </div>
        </article>
      </section>

      {/* <section className="h-full flex flex-col snap-start snap-always"></section> */}

      <section className="h-full flex flex-col snap-start snap-always">
        <article className="text-center text-4xl mt-24">Contact Me</article>
        <article className="text-center mt-4">
          414 Norwood Ave
          <br />
          New Castle, PA 16105
          <br />
          409-289-3254
          <br />
          jhonathon.weiland@gmail.com
        </article>
      </section>
    </>
  );
}
