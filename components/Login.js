import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from 'react';
import { FaArrowRight } from "react-icons/fa6"


const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    return (
    <>
        <div className="w-full p-6 h-20 flex items-center justify-center">
            <img src="pkt.jpeg" alt="" />
        </div>
        <hr className = "bg-slate-400 h-0.3 mt-4" />
        <div className="flex relative left-52 top-12">
        <div className="">
            <img src="Photo.png" className = "h-full" alt="" />
        </div>
        
        <div className="w-1/3 pl-10 pt-6 pb-6 pr-6">
        <h1 className = "text-3xl font-extrabold flex items-center justify-center mb-8">Login to your account</h1>
        <label htmlFor="" className = "text-xl">Email:</label><br/>
        <input
            id="email"
            name="email"
            type="email"
            value = {email}
            onChange = {(e) => {setEmail(e.target.value)}}
            autoComplete="email"
            placeholder = "Email"
            required
            className="mt-1 p-2 w-full border rounded-md" /> 

        <div className="mt-2  ml-64">
            <Link href="">
                <h1 className = "text-orange-400">Forgot Password</h1>
            </Link>
        </div>
         <div className="mb-8 relative">

        <label htmlFor="password" className="text-xl">
          Password:
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder = "Password"
          required
        />
        <span
          className="absolute top-1/2 pt-8 right-3 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <img src="https://icons.veryicon.com/png/o/photographic/ant-design-official-icon-library/eye-18.png" alt="Hide Password" className="w-7 h-7" />
          ) : (
            <img src="https://icons.veryicon.com/png/o/photographic/ant-design-official-icon-library/eye-close-1.png" alt="Show Password" className="w-7 h-7" />
          )}
        </span>
      </div>
      <div>
                <button
                  type="submit"
                  className="flex w-full h-12  text-xl justify-center rounded-3xl font-bold  bg-indigo-600 p-3  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  
                >
                  Login  <FaArrowRight className = "ml-4 mt-0.5" />
                </button>
              </div>
              <div className="mt-2 flex justify-center items-center">
            <Link href="">
                <h1 className = "text-orange-400">Not Yet Registered?Register Now</h1>
            </Link>
        </div>
         </div>
         </div>
    </>
  )
}

export default Login;
