import { useState,useEffect,createContext } from "react";

const OrvosContext=createContext();

export const OrvosProvider=({children})=>{


    const[refresh,setRefresh]=useState(false);
    const [token, setToken] = useState(null);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const logout=() =>{
        localStorage.removeItem('usertoken');
        setToken(null);
        update();
    }

    useEffect(() => {
        setToken(localStorage.getItem('usertoken'));
    }, [token]);
    
    const[orvosKereses, setOrvosKereses]=useState("");
    const [orvos, setOrvos] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
   
    const kereses=(orvosNev)=>{
        if(orvosNev!=""){
            fetch(`http://localhost:8000/orvosok/${orvosNev}`)
            .then(res=>res.json())
            .then(orvos=>setOrvosKereses(orvos))
            .catch(err=>console.log(err));

        } 
    };

      return <OrvosContext.Provider value={{orvosKereses,kereses, orvos, setLoggedIn, loggedIn, refresh,update,logout, setToken, token}}>{children}</OrvosContext.Provider>
    }

    export default OrvosContext;