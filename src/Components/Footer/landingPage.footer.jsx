import React from "react";
import {BsInstagram , BsFacebook, BsTwitter} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";


const LandingPageFooter = ()=>{
    return <> 
        <div className="bg-blue-700 relative p-4 h-32">
                <div className="flex gap-2 items-center w-40">
                    <div className="w-full h-full">
                        <img className="w-full h-full" src="" alt="logo" />
                    </div>
                    <div>
                        <h1 className="text-white text-4xl ">CODE</h1>
                        <h1 className="text-white text-4xl ">GEEK</h1>
                    </div>
                </div>
                <div className="flex gap-2 text-2xl top-4 text-white right-4 absolute">
                        <BsInstagram />
                        <BsFacebook />
                        <BsTwitter />
                        <FcGoogle />
                </div>
        </div>
    </>
}

export default LandingPageFooter ;