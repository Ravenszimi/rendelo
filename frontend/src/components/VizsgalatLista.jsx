import React, { useContext, useState } from 'react'
import RendeloContext from '../context/RendeloContext'
import Vizsgalat from './Vizsgalat';

function VizsgalatLista() {
  const {vizsgalatok} = useContext(RendeloContext);
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState(`${date.getFullYear()}-0${date.getMonth()}-0${date.getDay()}`);
  const [szurt, setSzurt] = useState([]);
  const [end, setEnd] = useState(null);
  
  const getVizsgalatokByDate = async (startDate, endDate) => {
    const response = await fetch(`http://localhost:8000/vizsgalatok/kezdeti/${startDate}/vege/${endDate}`);
    const data = await response.json();
    setSzurt(data);
  }

  return (

<div className="min-h-screen">
    <div className="text-5xl my-6 text-center text-[#5B0888] font-bold"><h1>Vizsgálatok</h1></div>



    <div date-rangepicker class="flex justify-center p-5">
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="start" defaultValue={start} onChange={(e) => {setStart(e.target.value)}} type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kezdeti dátum"/>
  </div>
  <span class="mx-4 text-gray-500 flex justify-center items-center">és</span>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="end" onChange={async(e) => {await getVizsgalatokByDate(start, e.target.value)}} type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vég dátum"/>
</div>
</div>
    <div className=''>
    <table class=" border-collapse border-2 border-[#5B0888] min-w-3/4 mt-16 mx-auto">
  <thead>
    <tr class="bg-[#9D76C1] text-white">
      <th class="py-2 px-4 text-left">Dátum</th>
      <th class="py-2 px-4 text-left">Állat neve</th>
      <th class="py-2 px-4 text-left">Orvos neve</th>
      <th class="py-2 px-4 text-left">Bevitel oka</th>
      <th class="py-2 px-4 text-left">Megjegyzés</th>
      <th class="py-2 px-4 text-left">Időtartam</th>
      <th class="py-2 px-4 text-left">Kezelés neve</th>
      <th class="py-2 px-4 text-left">Következő vizsgálat</th>
      <th class="py-2 px-4 text-left">Ár</th>

      
    </tr>
  </thead>
  <tbody className="bg-white">
     { szurt && szurt.length ? szurt.map(vizsgalat => <Vizsgalat key ={vizsgalat.id} vizsgalat={vizsgalat} />) : vizsgalatok && vizsgalatok.length > 0 ? vizsgalatok.map(vizsgalat => <Vizsgalat key ={vizsgalat.id} vizsgalat={vizsgalat} />) : <>Betöltés</>}
  
</tbody>

</table>
    </div>
    </div>


  )
}

export default VizsgalatLista