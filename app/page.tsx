import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/joepalala.webp"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, My name is Joe Palala
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a fullstack web developer based in Makati!
        </p>
        <p>
         Stay tuned for more updates!
          .
        </p>
        <p>
         &copy; 2024
        </p>
       
      </div>
    </section>
  );
}
