import { Button } from "@mui/material";

export default function Profile(){

    return(
        <>
            <div className="h-[28rem] rounded-md shadow-xl w-[43rem]
            grid grid-rows-5">
            <div className="h-full w-full  flex flex-rows justify-center items-center">
                 <div className="h-full w-[50%] flex flex-col justify-center items-center">
                    {/* <image  /> */}
                 </div>
                 <div className="h-full w-[50%] flex  relative flex-col gap-2 justify-center items-center">
                   <h1 className="text-black text-left absolute left-16 bottom-16">Name</h1>
                    <input type="text" className="border border-gray-500 outline-none p-2 rounded-md" />
                 </div>
                
            </div>
            <div className="h-full w-full  flex flex-rows justify-center items-center">
                <div className="h-full w-[50%] flex flex-col justify-center items-center">
                    <h1 className="text-black text-left ">DOB</h1>
                    <input type="date"   className="border border-gray-500 outline-none w-[14rem] p-2 rounded-md" />

                </div>
                <div className="h-full w-[50%] flex flex-col justify-center items-center">
                <h1 className="text-black text-left ">Address</h1>
                    <input type="text"  className="border border-gray-500 p-2 outline-none rounded-md" />
                </div>
            </div>
            <div className="h-full w-full flex flex-rows justify-center items-center">
                <div className="h-full w-[50%] flex flex-col justify-center items-center">
                <h1 className="text-black text-left  ">PinCode</h1>
                    <input type="text" className="border p-2 border-gray-500 outline-none rounded-md" />
                </div>
                <div className="h-full w-[50%] flex flex-col justify-center items-center">
                <h1 className="text-black text-left ">userName</h1>
                    <input type="text" className="border border-gray-500 p-2 outline-none rounded-md"  />
                </div>
            </div>
            <div className="h-full w-full flex flex-rows justify-center items-center">
            
            <div className="h-full w-[50%] flex flex-col justify-center items-center ">
                <h1 className="text-black  ">Password</h1>
                    <input type="text" className="border border-gray-500 p-2 outline-none rounded-md" />
                </div>
                <div className="h-full w-[50%] flex flex-col justify-center items-center">
                <h1 className="text-black text-left ">Phone Number</h1>
                    <input type="text"className="border border-gray-500  outline-none  p-2 rounded-md"  />
                </div>
            </div>
            <div className="h-full w-full  flex flex-rows justify-center items-center">
                <div className="h-full w-[50%] flex flex-col justify-center items-center">
                    <button className="border border-gray-100 p-2 w-[23rem] bg-green-500 rounded-md">
                        Submit
                    </button>
                </div>
            </div>
        </div>    
        </>
    )
}