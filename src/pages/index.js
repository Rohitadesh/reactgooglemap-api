// import Image from "next/image";
import { Inter } from "next/font/google";
import HomeDashboard from "./componets/Home";
// import nature from '../../public/nature.mp4'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <HomeDashboard />
  );
}
