import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./cornerbox.css";

export default function Home() {
  return (
    <div>
      <header className="font-serif md:p-10 md:flex p-6">
        <div className="grow text-4xl md:pb-0 pb-2 justify-center">
          Jhonathon Weiland
        </div>
        <div className="flex space-x-4">
          <a className="flex flex-col justify-center">About</a>
          <a className="flex flex-col justify-center">Contact</a>
          <a className="flex flex-col justify-center">
            <FaLinkedin />
          </a>
          <a className="flex flex-col justify-center">
            <FaYoutube />
          </a>
        </div>
      </header>
      <main className="p-10">
        <div className="xl:flex gap-10">
          <div className="xl:flex-none flex justify-center ">
            <Image
              className="lg:pb-0 pb-4"
              src="/images/headshot.png"
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="m-2 px-6 py-4 cornerbox">
              <div className="font-serif md:text-3xl text-xl md:leading-loose text-justify leading-loose">
                I&apos;m a <i>School Health and Wellness Education: K-12</i>{" "}
                major at Slippery Rock University of Pennsylvania and a{" "}
                <strong>certified personal trainer</strong> based out of New
                Castle, PA. I&apos;ll be graduating in Spring 2025 as a{" "}
                <i>Bachelor of Education</i>.
              </div>
            </div>
          </div>
        </div>

        <div className="p-10">
          <div className="p-10 flex justify-center">
            <div className="font-serif text-4xl">Bio</div>
          </div>
          <div className="flex justify-center">
            <div className=" font-serif text-justify w-1/2 text-xl">
              I was born and raised in Southeast Texas, but spent the majority
              of my childhood moving around many of the southern states. In
              school, I participated in an athletics program and powerlifting
              competitions which introduced me to my passion for health and
              wellness. At 19, I joined the U.S. Air Force as a Supply troop and
              was stationed overseas for 6 years. I had the pleasure of living
              and working in the U.K., South Korea, and Japan. I was able to
              gain invaluable workplace experience, plentiful volunteer
              opportunities, the training and skillset to become a strong
              leader, and an innumerable amount of unique cultural experiences
              that living internationally can offer. Today, I spend my time as a
              certified personal trainer working with clients of all age groups,
              and as a full-time university student working towards a Bachelors
              in Education that specializes in school health and wellness for
              all grades, as well as a minor in the Japanese language and
              history.
            </div>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}
