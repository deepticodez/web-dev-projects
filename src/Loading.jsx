import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading(){
    return (
        <div className="text-gray-700 flex items-center justify-center min-h-screen"><ImSpinner9 className="animate-spin text-[400px] text-gray-600"/></div>

    );

}

export default Loading;