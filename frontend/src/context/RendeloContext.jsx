import { useState,useEffect,createContext } from "react";

const RendeloContext=createContext();

export const RendeloProvider=({children})=>{
    const[orvosok,setOrvosok]=useState([]);
    const[paciensek,setPaciensek]=useState([]);
    const[gazdak,setGazdak]=useState([]);
    const[kezelesarak,setKezelesarak]=useState([]);
    const[vizsgalatok,setVizsgalatok]=useState([]);
    
    const [refreshGazdak,setRefreshGazdak]=useState(false);
    const [refreshOrvosok,setRefreshOrvosok]=useState(false);
    const [refreshPaciensek,setRefreshPaciensek]=useState(false);

    useEffect(()=>{
        fetch(`http://localhost:8000/orvosok`)
        .then(res=>res.json())
        .then(orvosok=>{setOrvosok(orvosok)})
        .catch(err=>console.log(err));
      },[refreshOrvosok]);

      useEffect(()=>{
        fetch(`http://localhost:8000/paciensek`)
        .then(res=>res.json())
        .then(paciensek=>{setPaciensek(paciensek)})
        .catch(err=>console.log(err));
      },[refreshPaciensek]);

      useEffect(()=>{
        fetch(`http://localhost:8000/gazdak`)
        .then(res=>res.json())
        .then(gazdak=>{setGazdak(gazdak);console.log(gazdak)})
        .catch(err=>console.log(err));
      },[refreshGazdak]);

      useEffect(()=>{
        fetch(`http://localhost:8000/kezelesarak`)
        .then(res=>res.json())
        .then(kezelesarak=>{setKezelesarak(kezelesarak)})
        .catch(err=>console.log(err));
      },[]);

      useEffect(()=>{
        fetch(`http://localhost:8000/vizsgalatok`)
        .then(res=>res.json())
        .then(vizsgalatok=>{setVizsgalatok(vizsgalatok)})
        .catch(err=>console.log(err));
      },[]);





      
      return <RendeloContext.Provider value={{orvosok, paciensek, gazdak, kezelesarak, vizsgalatok, setRefreshGazdak, setRefreshOrvosok, setRefreshPaciensek}}>{children}</RendeloContext.Provider>
    }

    export default RendeloContext;