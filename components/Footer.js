import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <>
    <hr/>
      <div className="flex mt-40 gap-10">
      <div className="flex mt-10 gap-48">
        <div className="ml-16">
            <h1 className="text-orange-400 text-xl font-bold font-Montserrat">Quick Links</h1><br/>
            <h2 className="font-bold font-Montserrat ">Home</h2><br/>
            <h2 className="font-bold font-Montserrat ">Privacy Policy</h2><br/>
            <h2 className="font-bold font-Montserrat ">About Us</h2><br/>
            <h2 className="font-bold font-Montserrat ">Contact Us</h2><br/>
            <h2 className="font-bold font-Montserrat ">Terms And Conditions</h2><br/>
            <h2 className="font-bold font-Montserrat ">Our Clientele</h2><br/><br/><br/><br/>
            <h1 className="text-orange-400 text-xl font-bold font-Montserrat">Social</h1><br/>
            <div className="flex">
            <FaFacebookF />
                <h2 className="font-Montserrat ml-2">Facebook</h2>
            </div><br/>
            <div className="flex">
            <FaTwitter />
                <h2 className="font-Montserrat ml-2">Twitter</h2>
            </div><br/>
            <div className="flex">
            <TfiYoutube />
                <h2 className="font-Montserrat ml-2">Youtube</h2>
            </div><br/>
          </div>
          <div className >
            <h1 className="font-Montserrat font-bold">TOP CATEGORIES</h1><br/>
            <div className="flex gap-28">
              <div className="font-Montserrat">
              <h2 className="text-sm">Headlines</h2><br/>
              <h2 className="text-sm">Sports News</h2><br/>
              <h2 className="text-sm">Business News</h2><br/>
              <h2 className="text-sm">India News</h2><br/>
              <h2 className="text-sm">World News</h2><br/>
            </div>
            <div className="font-Montserrat">
              <h2 className="text-sm">Bollywood News</h2><br/>
              <h2 className="text-sm">Health & Fitness Tips</h2><br/>
              <h2 className="text-sm">Indian TV Shows</h2><br/>
              <h2 className="text-sm">Celebrity Shows</h2><br/>
            </div>
              
            </div><br/>
            <h1 className="font-bold font-Montserrat">TOP TRENDS</h1><br/>
            <div className="flex gap-6">
            
            <div className="font-Montserrat">
              
              <h2 className="text-sm">Mohan Yadav</h2><br/>
              <h2 className="text-sm">MP CM</h2><br/>
              <h2 className="text-sm">Article 370 Verdict</h2><br/>
              <h2 className="text-sm">J & K Special Status</h2><br/>
              <h2 className="text-sm">Madhya Pradesh CM</h2><br/>
              <h2 className="text-sm">Dhiraj Sahu IT Raid</h2><br/>
              <h2 className="text-sm">Israel Hamas War</h2><br/>
              <h2 className="text-sm">Article 370 Supreme Court</h2><br/>
              <h2 className="text-sm">Judgement</h2><br/>
            </div>
            <div className="font-Montserrat">
              <h2 className="text-sm">Ayodhya Ram Mandir</h2><br/>
              <h2 className="text-sm">Chhatisgarh CM</h2><br/>
              <h2 className="text-sm">Hardeep Singh Nijjar</h2><br/>
              <h2 className="text-sm">Delhi Weather</h2><br/>
              <h2 className="text-sm">Mehbooba Mufta</h2><br/>
              <h2 className="text-sm">Rajasthan CM</h2><br/>
              <h2 className="text-sm">Pinarayi Vijayan</h2><br/>
              <h2 className="text-sm">India Sqaud for South Africa</h2><br/>
              <h2 className="text-sm">Adani Stocks</h2><br/>
            </div>
            </div>
          </div>
         
      </div>
      <div className="mt-10">
            <h1 className="font-Montserrat font-bold">TRENDING TOPICS</h1><br/>
            <div className="font-Montserrat">
              <p className="text-sm">Dunki Advance Ticket Booking</p><br/>
              <p className="text-sm">Hi Nanna Movie Review</p><br/>
              <p className="text-sm">Pneumonia Risk</p><br/>
              <p className="text-sm">Weight Loss</p><br/>
              <p className="text-sm">Mohan Yadav</p><br/>
              <p className="text-sm">Mohan Yadav</p><br/>
              <p className="text-sm">Hair Care</p><br/>
              <p className="text-sm">Ranbir Kapoor</p><br/>
              <p className="text-sm">Beetroot Lip Balm Remedy</p><br/>
              <p className="text-sm">Sunny Deol</p><br/>
              <p className="text-sm">Shah Rukh Khan</p><br/>
            </div>
            
      </div>
      <div className="mt-10 font-Montserrat"><br/><br/>
        <p className="text-sm">Relationship Tips</p><br/>
        <p className="text-sm">Skin Care</p><br/>
        <p className="text-sm">Prajakta</p><br/>        
        <p className="text-sm">Priyanka Chopra</p><br/>
        <p className="text-sm">Twinkle Khanna</p><br/>
        <p className="text-sm">Best Hotels in Jodhpur</p><br/>
        <p className="text-sm">Air Pollution</p><br/>
        <p className="text-sm">Laptops under 30000</p><br/>
        <p className="text-sm">Wi Fi Routers</p><br/>
        <p className="text-sm">Tablets under 50000</p><br/>
      </div>

      </div><br/><br/>

      <div className="bg-green-600  p-10 flex gap-48 w-full">
          <div className="ml-8 text-white">
            <p>Copyrights © 2023-2024 Primary Key Technologies. All rights reserved</p>
          </div>
          <div className="text-white">
            <p>Designed & Developed by Primary Key Technologies Pvt Ltd</p>
          </div>
      </div>
    </>
  )
}

export default Footer;
