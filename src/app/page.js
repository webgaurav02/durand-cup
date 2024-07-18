import Image from "next/image";
import Link from "next/link";

//Assets
import durand_logo from "../../public/durand_logo.png"
import hero_image from "../../public/hero_image.png"
import govt from "../../public/Seal_of_Meghalaya.svg"
import logo from "../../public/durand_hero_logo.png"

export default function Home() {
  return (
    <>
      <div className="min-h-[100svh] bg-black bg-opacity-70">
        <div className="w-screen flex flex-row justify-between px-5 lg:px-10 items-center bg-white">
          <div className="flex flex-row gap-2">
            <Image
              src={durand_logo}
              height={100}
              width="auto"
              alt="Durand Cup 2024 Logo"
            />
            <Image
              src={govt}
              height={80}
              width={80}
              alt="Government of Meghalaya"
              className="py-5"
            />
          </div>
          <div><Link href="/book" className="bg-black text-white px-3 py-2 rounded-full">BOOK NOW</Link></div>
        </div>
        <hr className="border-b border-black" />
        <div className="relative text-white">
          {/* <Image
            src={hero_image}
            width="0"
            height="0"
            sizes="100vw"
            className="h-[calc(100svh-105px)] w-auto object-cover absolute right-0 -z-10"
          /> */}
          <video className="w-full lg:h-[90vh] h-[100svh] object-cover" autoPlay muted loop playsInline>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support videos.
          </video>
          <div className="lg:px-20 px-10 py-20 pt-10 absolute inset-0 flex lg:flex-row-reverse lg:items-center flex-col items-start justify-center z-10 bg-black bg-opacity-65 w-full h-full">
            <Image
              src={logo}
              height={400}
              width='auto'
              alt="Durand Cup logo"
              className="lg:mx-0 mx-auto"
            />
            <div className="">
              <h1 className="lg:text-9xl text-6xl font-bold">DURAND</h1>
              <h1 className="lg:text-9xl text-6xl font-bold">CUP 2024</h1>
              <h2 className="lg:text-5xl text-3xl font-medium lg:ml-2 ml-1">MEGHALAYA</h2>
              <div className="mt-10">
                <Link href="/book" className="bg-white text-black font-bold lg:text-3xl px-10 py-3 rounded-full">BOOK TICKETS ONLINE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-10 py-20">
        <h2 className="text-5xl mb-10 font-semibold">WELCOME TO DURAND CUP 2024</h2>
        <p className="text-justify">Welcome to the Durand Cup, also known as the IndianOil Durand Cup Powered by Coal India Limited, the oldest existing club football tournament in Asia and the fifth oldest in the world. Established in 1888 in Shimla and now hosted by the Durand Football Tournament Society (DFTS) and the All India Football Federation (AIFF), this prestigious competition brings together top national and international clubs, providing a platform for emerging talent and seasoned stars alike. Each year, fans witness thrilling matches filled with unforgettable moments, celebrating the rich history and unyielding spirit of football. Stay connected with live updates, exclusive content, and community initiatives as we honor the legacy and excitement of the beautiful game. Join us in this journey of camaraderie and sportsmanship, and be part of the Durand Cup&apos;s storied tradition.</p>
        <p className="mt-5">Learn more about <a className="underline" href="https://durandcup.in/">Durand Cup</a></p>
      </div>

    </>
  );
}
