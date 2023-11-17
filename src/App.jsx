import React from "react";
import Navbar from "./components/Navbar";


const App = () => {
  return (

    
    <React.Fragment>
      <Navbar/>
      <div
        className={
          "w-screen h-screen bg-slate-800 flex justify-center items-center"
        }
      >
        <h1 className={"text-5xl text-slate-200 font-serif"}>
          {" "}
          Clean Earth Coming Soon!
        </h1>
      </div>
    </React.Fragment>
  );
};

export default App;
