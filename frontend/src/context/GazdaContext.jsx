import { useState,useEffect,createContext } from "react";

const GazdaContext=createContext();

export const GazdaProvider=({children})=>{
    const[gazdaKereses, setGazdaKereses]=useState("");
   
    const kereses=(gazdaNev)=>{
        if(gazdaNev!=""){
            fetch(`http://localhost:8000/gazdak/${gazdaNev}`)
            .then(res=>res.json())
            .then(gazda=>setGazdaKereses(gazda))
            .catch(err=>console.log(err));

        } 
    };
      
      return <GazdaContext.Provider value={{gazdaKereses,kereses}}>{children}</GazdaContext.Provider>
    }

    export default GazdaContext;