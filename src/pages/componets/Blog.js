import { LuMessagesSquare } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import Image from "next/image";
import nature from "../../../public/plce.jpg"
const Blog = () =>{



    return (
        <>
            <div className="h-[24rem] w-[18rem] border  rounded-md  shadow-xl grid grid-rows-7">
                <div className="row-span-4 h-full w-full ">
                    <Image src={nature} alt="image"  className="h-full w-full p-1 object-fill" />
                </div>
                <div className="row-span-2 h-full w-full  pt-2 pl-2 ">
                    <h1 className="text-md text-center border font-serif  w-[6rem] rounded-md bg-green-500 text-gray-300">
                        Nature
                    </h1>
                    <h1 className="text-black text-md p-2 font-serif">
                       A comprehensive suite of integrations offers diverse functionalities.
                    </h1>
                </div>
                <div className="row-span-1 h-full w-full flex flex-row justify-center items-center gap-12 text-xl">
                    <LuMessagesSquare /> <FaEye /> <FaRegShareSquare />
                </div>
            </div>
        </>
    )
}

export default Blog