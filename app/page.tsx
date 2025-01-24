"use client";

import "./cornerbox.css";

import MobileHero from "@/components/MobileHero";
import MobileBlurb from "@/components/MobileBlurb";

import { Button } from "@/components/ui/button";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const longBio =
  "I grew up in Southeast Texas but spent much of my childhood moving across the southern states. My passion for health and wellness began with athletics and powerlifting in school. At 19, I joined the U.S. Air Force, spending six years overseas in the U.K., South Korea, and Japan, where I gained leadership skills, cultural experiences, and workplace training. Now, I’m a certified personal trainer working with clients of all ages and a full-time university student pursuing a Bachelor’s in Education focused on school health and wellness, with a minor in Japanese language and history.";

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <div className="flex justify-center drop-shadow mt-3">
    <Link href={href}>
      <Button className="bg-violet-400 hover:bg-violet-500 w-80 flex">
        <div className="grow">{children}</div>
        <FaArrowRight />
      </Button>
    </Link>
  </div>
);

export default function Home() {
  return (
    <>
      <section className="h-full overflow-x-hidden flex flex-col snap-start snap-always">
        <article className="relative">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          >
            <MobileHero />
          </motion.div>
        </article>

        <article className="">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <MobileBlurb />
          </motion.div>
        </article>

        <article>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          >
            <FaArrowDown className="mx-auto text-4xl" />
          </motion.div>
        </article>
      </section>

      <section className="h-full flex flex-col snap-start snap-always">
        <motion.div
          className="bg-violet-400 p-2 shadow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="/images/headshot.png"
            className="h-40 float-left mr-2 mt-2"
          />
          <div className="text-justify leading-relaxed text-gray-50">
            {longBio}
          </div>
        </motion.div>

        <article className="grow flex flex-col justify-evenly mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <LinkButton href="teaching">
              Read about my teaching philosophy
            </LinkButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <LinkButton href="certifications">
              View my degrees and certifications
            </LinkButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <LinkButton href="resume">Read my resume</LinkButton>
          </motion.div>
        </article>
      </section>

      <section className="h-full flex flex-col snap-start snap-always bg-violet-400 text-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-violet-200 w-72 mx-auto p-4 rounded shadow mt-24"
        >
          <div className="text-center text-4xl">Contact Me</div>
          <div className="text-center mt-4">
            414 Norwood Ave
            <br />
            New Castle, PA 16105
            <br />
            409-289-3254
            <br />
            <a href="mailto:jhonathon.weiland@gmail.com" className="underline">
              jhonathon.weiland@gmail.com
            </a>
          </div>
        </motion.div>
        <article></article>
      </section>
    </>
  );
}
