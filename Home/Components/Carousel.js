import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Carousel = () => {
  const slides = [
    {url:"https://static.tnn.in/thumb/msid-106137779,thumbsize-103956,width-1280,height-720,resizemode-75/106137779.jpg",text:"MAN CITY BEATS URAWA 3-0 TO REACH CLUB WORLD CUP FINAL AND NOW GOES FOR 5th TITLE IN 2023",date:"22 Dec,2023",description:"The champion of Europe has never lost to the champion of Asia at a Club World Cup and it never looked likely on a balmy evening in the Red Sea port city Jeddah."},
    {url:"https://static.toiimg.com/thumb/msid-106213877,width-1280,height-720,resizemode-4/106213877.jpg",text:"INDIA HAS AN AI SOLUTION TO TACKLE INCREASING FLOODS , DROUGHTS",date:"23 Dec,2023",description:"The goverment is trying to improve weather forecasting in the country as torrential rainfall,floods and droughts increase, According to the news agency reuters, to handle such situations is testing artificial intelligence(AI) to build climate models"},
    {url:"https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2023/12/121623_YE_big-if_feat.jpg?fit=1030%2C580&ssl=1",text:"HERE ARE SOME BIG IF-TRUE SCIENTIFIC CLAIMS THAT MADE HEADLINES IN 2023",date:"23 Dec,2023",description:"From ancient cannibalism to stars made of matter, 2023 delivered several scientific claims that could shake up their fields - if they shape up to be true."},
    {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/640px-Konarka_Temple.jpg",text:"ODISHA WELCOMES THE TOURIST SEASON WITH FLAGSHIP EVENTS",date:"22 Dec,2023",description:"In addition to 13th International Sand Art Festival and the 34th edition of the Konark Festival inaugurated this wee,the annual camping flagship event of Odisha Tourism,Eco Retreat is ongoing"},
    {url:"https://staticg.sportskeeda.com/editor/2023/06/40c61-16876731181506-1920.jpg?w=840",text:"LOKI SEASON 2 RETURNS WITH MISCHIEF AND MAYHEM,ECHO SERIES FOLLOWS SUIT IN MARVEL'S SPECTACULAR LINE UP!",date:"22 Dec,2023",description:"Loki have eagerly awaited the return of God of Mischief ever since Marvel Studios confirmed a second season of the hit anti hero series"},
    // Add more image URLs as needed
  ];

  const[currentIndex,setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex); 
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <>
    <h1 className='flex item-center justify-center mt-4 text-3xl font-bold'>LATEST BLOGS</h1>
    <div className = "max-w-[1300px] h-[700px] w-full m-auto py-16 px-4 relative group">
      <div style = {{backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${slides[currentIndex].url})`}} className=" w-full h-full rounded-2xl bg-center bg-cover duration-500 ">
      <div className="absolute inset-0  mt-80 ml-24 w-9/12">
          <h2 className = "text-white text-xl">{slides[currentIndex].date}</h2><br />
          <h1 className = "text-3xl font-bold text-white">{slides[currentIndex].text}</h1><br />
          <h2 className = "text-white" >{slides[currentIndex].description}</h2>
        </div>
      </div>
      <div className = "hidden group-hover:block  absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick = {prevSlide}   size = {30} />
        
      </div>
      <div className = "hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick = {nextSlide}  size = {30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {
            slides.map((slide,slideIndex)=>{
              <div key = {slideIndex} onClick = {() => {goToSlide(slideIndex)}} className="text-2xl cursor-pointer">
                <RxDotFilled/>
              </div>
            })
        }
      </div>
    </div>
    <div className="flex justify-center items-center mb-24">
      <img src="ad1.png" alt="" />
    </div>
    </>
  );
};

export default Carousel;
