import Link from "next/link";
import Image from "next/image";
import { CgAdd } from "react-icons/cg";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
export default function Navbar() {
  return (
    <div>
      <>
      <div className="flex h-40  w-full bg-white pt-10">
        <div className="relative left-96 w-11/12">
        <img src="https://primarykeytech.in/content/uploads/profile_images/pkt.png" class="h-20"/>
        </div>
        <div className="w-2/12 mt-4">
        <Link href = "/Components/Create"><button className="font-Poppins h-14 w-44 bg-red-600 rounded-2xl font-bold text-white flex item-center justify-center pt-4">
            <CgAdd className = "mt-1 mr-4" />LOGIN NOW 
          </button>
          </Link>
        </div>
        <div className="profile mt-4">
          <img src="profile.svg" alt="" />
        </div>
      </div>
      <div className="bg-white">
        <ul className="flex font-Poppins text-md font-medium mx-20">
        <Link href="/Components/Main"><li className="mx-15 px-5 py-5">Home</li></Link>
          <li className="px-4  py-5">Travel</li>
          <li className="px-4  py-5">Technology</li>
          <li className="px-4  py-5">Health</li>
          <li className="px-4  py-5">News</li>
          <li className="px-4  py-5">Entertainment</li>
          <li className="px-4  py-5">Sports</li>
          <li className="px-4  py-5">Spirituality</li>
          <li className="px-4  py-5">Business</li>
          <li className="px-4  py-5">Environment</li>
          <li className="px-4  py-5 font-extrabold">...</li>
          <li className="px-4  py-5"></li>
          <li className = "flex h-12 w-40  p-3 border-2 border-black rounded-2xl pr-2 mt-2">
            <input className = "border-none outline-none w-24 h-5 pb-4 " type="text"/>
            <HiMagnifyingGlassCircle className = "w-6 h-6"/>
          </li>

        </ul>
        <hr className="h-1 bg-black"/>
        </div>
        <h3 className="mx-20 mt-6">HOME / Blogs Home</h3>
        
      </>      
    </div>
  )
};
