import React from "react";
import {Route} from "react-router-dom";

//component
import LandingLayout from "../Layout/landing.page";


const LandingPageHOC = ({component:Component,...rest})=>{
    return <> 
    <Route {...rest} component={()=>{
        return (
            <LandingLayout >
                <Component />
            </LandingLayout>
        );
    }}/>
    </>
}

export default LandingPageHOC; 