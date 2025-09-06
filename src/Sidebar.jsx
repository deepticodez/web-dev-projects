import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(){
    return(
        <div className="w-32 h-screen bg-gray-500 p-2 flex flex-col space-y-2">
        <Link to="/" className="text-indigo-200">Home Page</Link>
        <Link to="/products/1">Product Detail</Link>
      </div>

    );


}

export default Sidebar;