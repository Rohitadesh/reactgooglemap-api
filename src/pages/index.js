// import Image from "next/image";
import { Inter } from "next/font/google";
// import nature from '../../public/nature.mp4'
import natural from "../../public/photo.jpg"
import CardDetails from "./cardDetails";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen w-screen border border-black  bg-cover bg-center bg-no-repeat flex flex-col flex-wrap justify-center items-center">
    {/* <video >
      <source src={nature} type="video/webm" />
    bg-[url(../../public/photo.jpg)]
    </video> */}
    <div className="p-7 border border-black justify-center flex items-center flex-wrap gap-14 w-[80%] ">
    {
      [1,23,4,4,5,5].map((e)=>{

        return <CardDetails />
      })
    }
    </div>

    </main>
  );
}
