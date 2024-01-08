import React from 'react'
import Image from 'next/image';
const Author = () => {
    const author = [
        {
            id:1,
            url:"image1.png",
            username:"Nishant Pandey",
            work:"Renowned Entrepeneur and author of '4 Hour Work Week' sharing insights on life and work optimization"
        },
        {
            id:2,
            url:"image3a.png",
            username:"Karan Panda",
            work:"One of most famous marketing guru and author, known for insightful blog on business and personal development.",
        },
        {
            id:1,
            url:"image6a.png",
            username:"Shaivi Puranik",
            work:"Bestselling author and blogger, explores happiness and human behavior, offering practical advice and personal experiences."
        },
        {
            id:1,
            url:"image5a.png",
            username:"Nilesh Pal",
            work:"Nilesh Pal, The Times of India's US-based Foreign Editor, Washington DC scribe, and author."
        },
        {
            id:1,
            url:"image2.png",
            username:"Shivam Yadav",
            work:"Dr. Shivam Yadav, Renowned cardiologist, speaker, and social worker, excelling in heart health and community impact."
        }

    ]
  return (
    <>
    <div className="flex items-center justify-center pt-6">
        <h1 className = "text-3xl font-bold text-white">TOP AUTHORS</h1>
    </div>
    <div className = "ml-4 grid  grid-cols-5 gap-4">
    {
        author.map((item)=>(
            <div key = {item.id} className='bg-white w-[230px] h-64 mt-20 p-8 mb-20'>
                <div className="flex  items-center  justify-center">
                    <img src = {item.url} alt = "My Image" className = "rounded-full" />   
                </div><br />
                <div className="flex items-center justify-center ">
                    <h1 className = "font-bold">{item.username}</h1>
                </div><br />
                <div className="flex items-center text-center justify-center ">
                    <h1>{item.work}</h1>    
                </div>                

            </div>

        ))
    } 
    </div>
    <div className="flex justify-center items-center mt-48 mb-96">
      <img src="ad2.png" alt="" />
      <hr className = "bg-black" />
      <hr className = "bg-black" />
    </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    {/* <div className="">
        <hr className = "h-1 bg-black" />
        <hr className = "h-1  bg-black mb-96" />
    </div> */}
    
    </>
  )
};

export default Author;
