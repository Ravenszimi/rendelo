import React from 'react'

function Kezelesar({kezelesar:{id,nev, ar}}) {
  
  return (
    
    <tr key={id} class="bg-white border-b border-#5B0888">
      <td>{nev}</td>
      <td>{ar}</td>
</tr>

  )
}

export default Kezelesar