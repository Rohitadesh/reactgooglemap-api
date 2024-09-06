import { FcSimCardChip } from "react-icons/fc";
const Payment =() =>{


    return(
        <div className="h-[23rem] w-[52rem] rounded-md shadow-xl grid  shadow-gray-300 border rounded-md grid-cols-5">
            <div className="col-span-2 h-full w-full  pl-8 flex flex-col justify-center items-center">
                <div className="border shadow-xl w-full  h-[12rem] rounded-md">
                        <FcSimCardChip />
                </div>  
            </div>
            <div className="col-span-3 h-full w-full   grid grid-rows-4">
                <div className="h-full w-full row-span-1 gap-1 justify-center items-center flex flex-col ">
                    <h1 className="text-md text-gray-500  text-black font-serif mr-48">
                        Card Number:
                    </h1>
                    <input type="text" placeholder="Card Number" className="outline-none  h-[2rem] w-[18rem] rounded-md border border-gray-200 p-2" />
                </div>
                <div className="h-full w-full row-span-1  justify-center items-center flex flex-col grid grid-cols-2">
                    <div className="col-span-1 h-full w-full gap-1 font-serif flex flex-col justify-center items-center">
                        <h1 className="text-md text-gray-500  text-black pr-12">
                            Exp:MM/YY
                        </h1> 
                        <input type="text" placeholder="MM/YY" className="outline-none h-[2rem] w-[8rem] rounded-md border border-gray-200 p-2" />
                    </div>
                    <div className="col-span-1 gap-1 h-full w-full flex flex-col justify-center items-center">
                        <h1 className="text-xl text-gray-500  font-serif  text-black pr-20 ">
                            cvv
                        </h1>
                        <input type="text" placeholder="CVV" className="outline-none h-[2rem] w-[8rem] p-2 border border-gray-200 rounded-md" />
                    </div>
                </div>
                <div className="h-full w-full row-span-1  justify-center items-center flex flex-col gap-1">
                    <h1 className="text-md text-gray-500 font-serif mr-28">
                       Name of the Card Holder:
                    </h1>
                    <input type="text" placeholder="Name of the Card Holder" className="outline-none h-[2rem] w-[18rem] border border-gray-200 p-2 rounded-md" />
                </div>
                <div className="h-full w-full row-span-1   justify-center items-center flex flex-col gap-1">
                   
                    <input type="button" value={"Submit"} className="font-bold outline-none bg-green-500 shadow-xl text-white text-xl h-[2rem] w-[12rem] rounded-md" />
                </div>
            </div>
        </div>
    )
}


export default Payment