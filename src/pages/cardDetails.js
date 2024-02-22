import Image from "next/image"
import plce from "../../public/plce.jpg"
const CardDetails = () =>{


    return(
        <>
              <div class="isolate w-[25%]  h-80 rounded-xl bg-white/60 shadow-lg  ">
                <div className="h-36  w-36 relative bottom-12 left-16 rounded-full bg-white/60  p-2 overflow-hidden">
                    <Image src={plce} alt="plce"  className="h-full w-full object-cover"  />
                </div>

              </div>       
        </>
    )
}

export default CardDetails