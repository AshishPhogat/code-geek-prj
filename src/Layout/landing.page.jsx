import React from "react";
import {AiOutlineArrowUp} from "react-icons/ai";

//component
import Courses from "../Components/Courses";
import LandingPageFooter from "../Components/Footer/landingPage.footer";


const LandingLayout = (props)=>{
    return <> 
       <div className="relative">
            {props.children}
            <Courses />
            <LandingPageFooter />
            <div className="bg-yellow-400  fixed right-4 bottom-4 w-12 h-12 ">
                <a href="#top"><AiOutlineArrowUp className="text-4xl mx-auto my-1"/></a>
            </div>
       </div>

    </>
}

export default LandingLayout;