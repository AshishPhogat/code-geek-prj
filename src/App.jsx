import React from "react";


//component
import LandingPageHOC from "./HOC/landingPage.hoc";
import Temp from "./Components/temp";


const App = ()=> {
  return (
    <>
      <h1>Hello this is the front page!</h1>
      <LandingPageHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
