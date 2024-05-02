import { useState,useEffect,createContext } from "react";

const PaciensContext=createContext();

export const PaciensProvider=({children})=>{
    const[paciensKereses, setPaciensKereses]=useState("");
   
    const kereses=(paciensNev)=>{
        if(paciensNev!=""){
            fetch(`http://localhost:8000/paciensek/${paciensNev}`)
            .then(res=>res.json())
            .then(paciens=>setPaciensKereses(paciens))
            .catch(err=>console.log(err));

        } 
    };
      
      return <PaciensContext.Provider value={{paciensKereses,kereses}}>{children}</PaciensContext.Provider>
    }

    export default PaciensContext;