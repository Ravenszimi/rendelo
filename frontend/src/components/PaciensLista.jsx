import React, { useContext, useState } from 'react'
import RendeloContext from '../context/RendeloContext'
import PaciensContext from '../context/PaciensContext';
import Paciens from './Paciens';

function PaciensLista() {
    const {paciensek} = useContext(RendeloContext);
    const {paciensKereses, kereses} = useContext(PaciensContext);
    const [paciensNev, setPaciensNev] = useState("");
    const [isEmpty, setEmpty] = useState(true);

  return (
    <div className='min-h-screen'>
       <div className="text-5xl my-6 text-center text-[#5B0888] font-bold"><h1>Páciensek adatai</h1></div>
       <p className='text-center text-lg font-bold text-[#5B0888]'>Páciensek száma: {paciensek.length} darab</p>  
<label
class="my-8 mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
for="search-bar">
<input onChange={(e) => {
    if(e.target.value !== ""){
        setEmpty(false);
        kereses(e.target.value);
    }else {
        setEmpty(true);
    }
}} 
id="search-bar" placeholder="Keresés..."
    class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white text-[#5B0888]"/>
</label>
<div className='flex flex-wrap items-center justify-center gap-10'>
    {
       isEmpty ? paciensek && paciensek.length > 0 ?  paciensek.map((paciens, index) => (<Paciens paciens={paciens}/>)) : <>Betöltés</> :
       paciensKereses.message ? <div className='text-center text-2xl font-bold text-[#5B0888]'>{paciensKereses.message}</div>: paciensKereses ? <Paciens paciens={paciensKereses}/> :<>Betöltés</>
    }
</div>
    </div>
  )
}

export default PaciensLista