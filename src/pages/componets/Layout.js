import Navbar from "./Navbar";
import { useState } from "react";
export default  function Layout({children}){
    const [open,setOpen] = useState(true)




    return(
        <div className="min-h-screen  w-screen  flex ">
                <Navbar setOpen={setOpen} open={open} />
                <main className={open?"min-h-[100%] ml-[15%]  w-[90%] flex flex-col justify-center  items-center duration-700 ease-in-out":"ease-in-out duration-700 min-h-[100%]  w-[97.5%] flex flex-col justify-center items-center"}>
                    {children}
                </main>
        </div>
    )
}