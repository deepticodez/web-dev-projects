import React from "react";
import NotFoundImage from "./not-found.jpg";

function NotFound(){
    return <div className="w-screen h-screen">
        <img className="w-full h-full" src={NotFoundImage}/>
    </div>
}

export default NotFound; 