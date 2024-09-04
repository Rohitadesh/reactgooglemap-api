import { useState } from "react";
import { CiFilter } from "react-icons/ci";
const EmployeeList = () =>{
    const [openFilter,setOpenFilter]=useState(false)


    return(
        <>
            <div className="h-[31rem] grid grid-rows-12 border border-gray-300 rounded-md shadow-xl w-[45rem] ">
                <div className="h-full w-full row-span-2 grid grid-rows-3">
                        <div className="row-span-2 h-full  w-full flex flex-row items-center justify-between">
                            <button onClick={()=>setOpenFilter(true)} className="p-1 text-md w-[7rem] border flex gap-7 justify-center items-center border-black rounded-md ml-2">
                                Filter
                                <CiFilter className="text-2xl"  />
                            </button>
                            <input type="text" placeholder="Search Here..." className="w-[15rem] rounded-md border p-1 border-black outline-none mr-2"   />
                        </div>  
                        <div className="row-span-1  h-full border  w-full"></div>        
                </div>
                <div className="h-full border border-pink-600 w-full row-span-9"></div>
                <div className="h-full border border-pink-600 w-full row-span-1"></div>
            </div>
        </>
    )
}

export default EmployeeList;