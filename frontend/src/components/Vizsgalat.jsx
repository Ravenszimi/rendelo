import React from 'react'

function Vizsgalat({vizsgalat:{id, datum, allat_nev, orvos_nev, bevitel_oka, vizsgalat_megjegyzes, idotartam, kezeles_nev, osszeg, kov_vizsgalat }}) {
  return (
    
    <tr key={id} class="bg-white border-b border-#5B0888 ">
      <td>{datum.split('T')[0]}</td>
      <td>{allat_nev}</td>
      <td>{orvos_nev}</td>
      <td>{bevitel_oka}</td>
      <td className='max-w-sm'>{vizsgalat_megjegyzes}</td>
      <td>{idotartam}</td>
      <td>{kezeles_nev}</td>
      <td>{kov_vizsgalat?.split('T')[0]}</td>
      <td>{osszeg}</td>
</tr>

  )
}

export default Vizsgalat