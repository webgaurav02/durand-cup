import Image from "next/image";
import Link from "next/link";

//Assets
import durand_logo from "../../../public/durand_logo.png"

export default function Home() {
  return (
    <div className="min-h-[100svh] bg-white bg-opacity-70 pb-10">
      <div className="w-screen flex flex-row justify-start px-10 items-center bg-white">
        <Image
          src={durand_logo}
          height={100}
          width="auto"
          alt="Durand Cup 2024 Logo"
        />
      </div>
      <hr className="border-b border-black" />
      <div className="relative text-black px-10 py-10">
        <h1 className="font-bold text-2xl">DURAND CUP FIXTURES</h1>
        <div className="lg:px-20 px-0">
            <h2 className="font-semibold mt-10">MEGHALAYA</h2>
            <div className="flex flex-col">
                <div className="flex lg:flex-row flex-col justify-between mt-16">
                    <div className="flex flex-row lg:items-center lg:gap-40 gap-5">
                        <div className="flex flex-col">
                            <p>AUG</p>
                            <p className="font-semibold text-3xl">02</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="opacity-65">Fri, 4:00 PM</p>
                            <p className="font-bold">Shillong Lajong FC vs. Tribhuvan Army FC</p>
                            <p className="opacity-65">Jawaharlal Nehru Stadium (Polo Ground)</p>
                        </div>
                    </div>
                    <div>
                        <Link href="https://onlybees.in/durand-cup/tickets/aug-02"><div className="bg-[#ED3A43] py-2 px-10 text-center mt-4 lg:mt-0 text-white">Tickets</div></Link>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between mt-16">
                    <div className="flex flex-row lg:items-center lg:gap-40 gap-5">
                        <div className="flex flex-col">
                            <p>AUG</p>
                            <p className="font-semibold text-3xl">05</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="opacity-65">Mon, 7:00 PM</p>
                            <p className="font-bold">FC Goa vs. Hyderabad FC</p>
                            <p className="opacity-65">Jawaharlal Nehru Stadium (Polo Ground)</p>
                        </div>
                    </div>
                    <div>
                        <Link href="https://onlybees.in/durand-cup/tickets/aug-05"><div className="bg-[#ED3A43] py-2 px-10 text-center mt-4 lg:mt-0 text-white">Tickets</div></Link>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between mt-16">
                    <div className="flex flex-row lg:items-center lg:gap-40 gap-5">
                        <div className="flex flex-col">
                            <p>AUG</p>
                            <p className="font-semibold text-3xl">08</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="opacity-65">Thurs, 4:00 PM</p>
                            <p className="font-bold">FC Goa vs. Tribhuvan Army FC</p>
                            <p className="opacity-65">Jawaharlal Nehru Stadium (Polo Ground)</p>
                        </div>
                    </div>
                    <div>
                        <Link href="https://onlybees.in/durand-cup/tickets/aug-08"><div className="bg-[#ED3A43] py-2 px-10 text-center mt-4 lg:mt-0 text-white">Tickets</div></Link>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between mt-16">
                    <div className="flex flex-row lg:items-center lg:gap-40 gap-5">
                        <div className="flex flex-col">
                            <p>AUG</p>
                            <p className="font-semibold text-3xl">10</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="opacity-65">Sat, 4:00 PM</p>
                            <p className="font-bold">Shillong Lajong FC vs. Hyderabad FC</p>
                            <p className="opacity-65">Jawaharlal Nehru Stadium (Polo Ground)</p>
                        </div>
                    </div>
                    <div>
                        <Link href="https://onlybees.in/durand-cup/tickets/aug-10"><div className="bg-[#ED3A43] py-2 px-10 text-center mt-4 lg:mt-0 text-white">Tickets</div></Link>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between mt-16">
                    <div className="flex flex-row lg:items-center lg:gap-40 gap-5">
                        <div className="flex flex-col">
                            <p>AUG</p>
                            <p className="font-semibold text-3xl">13</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="opacity-65">Tue, 4:00 PM</p>
                            <p className="font-bold">Hyderabad FC vs. Tribhuvan Army FC</p>
                            <p className="opacity-65">Jawaharlal Nehru Stadium (Polo Ground)</p>
                        </div>
                    </div>
                    <div>
                        <Link href="https://onlybees.in/durand-cup/tickets/aug-13"><div className="bg-[#ED3A43] py-2 px-10 text-center mt-4 lg:mt-0 text-white">Tickets</div></Link>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between mt-16">
                    <div className="flex flex-row lg:items-center lg:gap-40 gap-5">
                        <div className="flex flex-col">
                            <p>AUG</p>
                            <p className="font-semibold text-3xl">17</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="opacity-65">Sat, 7:00 PM</p>
                            <p className="font-bold">FC Goa vs. Shillong Lajong FC</p>
                            <p className="opacity-65">Jawaharlal Nehru Stadium (Polo Ground)</p>
                        </div>
                    </div>
                    <div>
                        <Link href="https://onlybees.in/durand-cup/tickets/aug-17"><div className="bg-[#ED3A43] py-2 px-10 text-center mt-4 lg:mt-0 text-white">Tickets</div></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
