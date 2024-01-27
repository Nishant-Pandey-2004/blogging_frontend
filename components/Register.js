import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePassword = (e) => {
        e.preventDefault()
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };

      const handleToggleConfirmPassword = (e) => {
        e.preventDefault()
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
      };
  return <>
  <div className="grid grid-cols-2 m-0 p-0">
      <Image className='m-10' src={'/registerImg.png'} width={600} height={600} />
      <div className='m-10 mt-20'>
          <div className='text-center text-2xl font-semibold mb-8'>Create Account</div>
          <form>
              <div className='grid grid-cols-2'>
                  <label htmlFor='name'>Name</label>
                  <label htmlFor='email'>Email</label>
              </div>
              <div className='grid grid-cols-2 mb-10'>
                  <input className='w-80 border border-solid border-black p-2' type='text' id='name' placeholder='Full Name' />
                  <input className='w-80 border border-solid border-black p-2' type='email' id='email' placeholder='Email address' />
              </div>
              <div className='mb-10'>
                  <div>
                      <label htmlFor='password'>Password</label>
                  </div>
                  <div className='flex'>
                  <input className='w-[43.5vw] border border-solid border-black p-2' type={showPassword ? 'text' : 'password'} id='password' placeholder='Password' />
                  <button onClick={handleTogglePassword}><Image src={'/Password.png'} width={20} height={20}/></button>
                  </div>
              </div>
              <div className='mb-10'>
                  <div>
                      <label htmlFor='cpassword'>Confirm Password</label>
                  </div>
                  <div className='flex'>
                  <input className='w-[43.5vw] border border-solid border-black p-2' type={showConfirmPassword ? 'text' : 'password'} id='cpassword' placeholder='Password' />
                  <button onClick={handleToggleConfirmPassword}><Image src={'/Password.png'} width={20} height={20}/></button>
                  </div>
              </div>
              <div className='mb-10'>
                  <button className='bg-[#61B358] text-white w-[43.5vw] rounded-full p-2'>Register Now →</button>
              </div>
              <div className='text-center'>
                  Already have an Account? <Link className='text-orange-500' href={'/login'}>Login Now</Link>
              </div>
          </form>
      </div>
  </div>
</>
}

export default Register