import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <>
      <div className="flex h-40 space-x-96 w-full bg-white pt-10">
  <div className="relative left-96 w-11/12 flex items-center">
    <img src="PKT_header.png" className="h-20" alt="Logo" />
    <button className="bg-red-500 text-white ml-auto rounded-md w-36">➕Create Blog</button>
  </div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        
        <div className="w-2/12">
          <button className="font-Poppins h-20 w-28 rounded-2xl"><img src="profile_image.png"/></button>
        </div>
      </div>
      <div className="bg-white">
        <ul className="flex font-Poppins text-md font-medium mx-20">
        <Link href="/Components/Main"><li className="mx-15 px-5 py-5">Home</li></Link>
          <li className="px-5 py-5">Travel</li>
          <li className="px-5 py-5">Technology</li>
          <li className="px-5 py-5">Health</li>
          <li className="px-5 py-5">News</li>
          <li className="px-5 py-5">Entertainment</li>
          <li className="px-5 py-5">Sports</li>
          <li className="px-5 py-5">Spirituality</li>
          <li className="px-5 py-5">Business</li>
          <li className="px-5 py-5">Environment</li>
          <li className="px-5 py-5 font-extrabold">...</li>
          <li className="px-5 py-5"></li>

        </ul>
        <hr className="h-1 bg-black"/>
        </div>
        
      </>      
    </div>
  )
};
