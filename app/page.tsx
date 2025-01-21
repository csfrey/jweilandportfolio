import Image from "next/image";

import "./cornerbox.css";

export default function Home() {
  return (
    <div>
      <header className="font-serif p-10 text-4xl">Jhonathon Weiland</header>
      <main className="p-10">
        <div className="flex gap-10">
          <Image
            className=""
            src="/images/headshot.png"
            alt="headshot"
            width={500}
            height={500}
          />
          <div className="flex flex-col justify-center">
            <div className="m-2 px-6 py-4 cornerbox">
              <div className="text-3xl leading-loose">
                I'm a <i>School Health and Wellness Education: K-12</i> major at
                Slippery Rock University of Pennsylvania and a{" "}
                <strong>certified personal trainer</strong> based out of New
                Castle, PA. I'll be graduating in Spring 2025 as a{" "}
                <i>Bachelor of Education</i>.
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}
