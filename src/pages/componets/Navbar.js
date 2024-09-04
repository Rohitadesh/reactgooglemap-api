import { FaHome, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useContext, useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineFile } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { MdOutlinePayment } from "react-icons/md";
import { ActiveLinkContext } from '../../pages/componets/context/context';
const Navbar = ({ setOpen, open }) => {
    // const [activeLink,setActiveLink]=useState('/')
    const router =useRouter()
    const {activeLink,updateActiveLink}=useContext(ActiveLinkContext)
    const route = [
        {
            path: '/',
            name: 'Home',
            icon: <FaHome />,
        },
        {
            path: '/File',
            name: 'Blog',
            icon: <AiOutlineFile />,
        },
        {
            path: '/Employee',
            name: 'Employee',
            icon: <IoPersonSharp />,
        },
        {
            path:'/Payment',
            name:"Payment",
            icon:<MdOutlinePayment />
        }
    ];
    const route2=[
        {
            path:'/Setting',
            name:"Setting",
            icon:<IoSettings />
        },
        {
            path:'/Profile',
            name:"Profile",
            icon:<CgProfile />
        },
       
        {
            path:'',
            name:"Logout",
            icon:<CiLogout />
        },
       

]

function handleNavigation(path){
   updateActiveLink(path)
    router.push(path)
   
}

return (
        <div
            className={`h-[100%] fixed  duration-700 ease-in-out border  ${
                open ? 'w-[15%] ' : 'w-[3%]  '
            }`}
        >
            <div className="h-[3rem] w-full  flex justify-end items-center gap-2">
                <h1 className="text-black text-md text-center">Adeshkumar.S.N</h1>
                <h1
                    className="text-black text-2xl text-center cursor-pointer p-1"
                    onClick={() => setOpen(!open)}
                >
                  {open?<MdKeyboardDoubleArrowLeft />:<MdKeyboardDoubleArrowRight />}
                </h1>
            </div>
                <div
                   
                    className={`w-full flex gap-1 flex-col justify-center items-center  duration-700 ease-in-out ${open ?"w-full" :"w-full"}`}
                >
                <div   className="min-h-[18.9rem] w-full">
                    {route.map((e, i) => (
                        <div key={i}  className="w-full flex justify-center items-center">
                            <div  className={` cursor-pointer ${activeLink== e.path ? "rounded-md bg-green-500 mr-[12]": " hover:w-[90%]  hover:rounded-md g hover:bg-green-300  "} flex  gap-2 h-[2rem] w-[90%] justify-start items-center`}
                            onClick={()=>handleNavigation(e.path)}>
                                <h1 className="text-xl p-1">{e.icon}</h1>
                                <h1 
                                    className={`transition-opacity duration-700 text-md ease-in-out ${open?"overflow-auto ":"overflow-hidden"}`}
                                   
                                >
                                    {e.name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-start items-center flex-col h-[14rem] gap-1">
                {route2.map((e1, index) => (
                        <div  key={index} className="w-full flex justify-center items-center">
                            <div  className={` cursor-pointer ${activeLink== e1.path ? "rounded-md bg-green-500 mr-[12]": " hover:w-[90%]  hover:rounded-md g hover:bg-green-300  "} flex  gap-2 h-[2rem] w-[90%] justify-start items-center`}
                            onClick={()=>handleNavigation(e1.path)}>
                                <h1 className="text-xl p-1">{e1.icon}</h1>
                                <Link 
                                    className={`transition-opacity duration-700 text-md ease-in-out ${open?"overflow-auto ":"overflow-hidden"}`}
                                    href={e1.path}
                                >
                                    {e1.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
        </div>
    );
};

export default Navbar;
