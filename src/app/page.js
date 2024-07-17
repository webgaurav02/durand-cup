import Image from "next/image";
import Link from "next/link";

//Assets
import durand_logo from "../../public/durand_logo.png"
import hero_image from "../../public/hero_image.png"

export default function Home() {
  return (
    <div className="min-h-[100svh] bg-black bg-opacity-70">
      <div className="w-screen flex flex-row justify-between px-10 items-center bg-white">
        <Image
          src={durand_logo}
          height={100}
          width="auto"
          alt="Durand Cup 2024 Logo"
        />
        <div><Link href="/book" className="bg-black text-white px-5 py-2 rounded-full">BOOK NOW</Link></div>
      </div>
      <hr className="border-b border-black" />
      <div className="relative text-white">
        <Image
          src={hero_image}
          width="0"
          height="0"
          sizes="100vw"
          className="h-[calc(100svh-105px)] w-auto object-cover absolute right-0 -z-10"
        />
        <div className="lg:px-20 px-10 py-20 ">
          <h1 className="lg:text-9xl text-6xl font-bold">DURAND</h1>
          <h1 className="lg:text-9xl text-6xl font-bold">CUP 2024</h1>
          <h2  className="lg:text-5xl text-3xl font-medium lg:ml-2 ml-1">MEGHALAYA</h2>
        </div>
        <div className="lg:px-20 px-10">
          <Link href="/book" className="bg-white text-black font-bold lg:text-3xl px-10 py-3 rounded-full">BOOK TICKETS ONLINE</Link>
        </div>
      </div>
    </div>
  );
}
