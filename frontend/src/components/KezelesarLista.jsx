import React, { useContext } from 'react'
import RendeloContext from '../context/rendeloContext'
import Kezelesar from './Kezelesar';

function KezelesarLista() {
  const {kezelesarak} = useContext(RendeloContext);
  return (
    

<div className="min-h-screen">
    <div className="text-5xl my-6 text-center text-[#5B0888] font-bold"><h1>Kezelések és árak</h1></div>
    

    <table class=" border-collapse border-2 border-[#5B0888] w-1/4 mt-16 mx-auto">
  <thead>
    <tr class="bg-[#9D76C1] text-white">
      <th class="py-2 px-4 text-left">Kezelések</th>
      <th class="py-2 px-4 text-left">Árak</th>
      
    </tr>
  </thead>
  <tbody className="bg-white">
     { kezelesarak && kezelesarak.length > 0 ?   kezelesarak.map(kezelesar => <Kezelesar key ={kezelesar.id} kezelesar={kezelesar} />)  : <>Betöltés</>}
  
</tbody>

</table>
    </div>


  )
}

export default KezelesarLista