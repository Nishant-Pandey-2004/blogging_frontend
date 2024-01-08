"use client";
import React, { useEffect } from 'react';

const Advertisement = ({ adClient, adSlot }) => {
    // useEffect(() => {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({});
    // }, []);

    return (
        <div className="lg:w-2/5">
                {/* <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client={adClient}
                    data-ad-slot={adSlot}
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                /> */}
       
            <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2017/09/oven-story-pizza-with-incredible-cheese-bases-introducing-fiery-peri-peri-indtroductory-offer-buy-1-get-1-free-ad-times-of-india-bangalore-17-9-2017.jpg" alt="Ad" />
        </div>

    );
};

export default Advertisement;