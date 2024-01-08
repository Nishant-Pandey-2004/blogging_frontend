import React from "react";

function Thumbnail(props) {  
    return (
        <div className="relative pb-6 mx-4 mt-16">
            <img
                className="w-120 h-90 rounded-lg shadow-md"
                alt="Thumbnail Image"
                src={props.thumbnail}
            />
        </div>
    );
}

export default Thumbnail;