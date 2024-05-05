import Logo from '../assets/Logo_hatternelkul.png';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import RendeloContext from '../context/RendeloContext';
import Select from 'react-select';

//Gazda adatai
function NewPatient3() {
  const {orvosok, kezelesarak} = useContext(RendeloContext);
  const [formData, setFormData] = useState({
    alt_id:  localStorage.getItem('alt_id'),
    ovs_id: "",
    beviteloka: "",
    megjegyzes: "",
    kovvizsgalat: "",
    idotartam: ""
  });

  const kezelesArak = kezelesarak.map(kezelesar => {
    return {value: kezelesar.id, label: kezelesar.nev, ar: kezelesar.ar};
  });
  const [selectedOptions, setSelectedOptions] = useState(null);
  const handleSelectChange = (selectedOptionsArray) => {
    setSelectedOptions(selectedOptionsArray);
    const osszegMezo = document.querySelector('#osszeg');
    let osszeg = 0;
    selectedOptionsArray.forEach((option) =>  {
      osszeg += option.ar;
    });
    osszegMezo.value = osszeg + " Ft";
  }

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.id] : e.target.value}));
  }

  const saveData = async (form) => {
    const response = await fetch('http://localhost:8000/ujvizsgalat', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    const data = await response.json();
    return data;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    formData.kezelesek = selectedOptions;
    const data = await saveData(formData);
    if(data.message){
        toast.success(data.message);
        localStorage.removeItem('id');
        localStorage.removeItem('alt_id');
        navigate('/');
    }
  }
  return (
    <div className="min-h-screen flex bg-cover bg-[#E5CFF7]">
<div className="w-full max-w-lg m-auto bg-white rounded p-5 border-2 border-[#713ABE]">   
      <header>
        <img className="object-contain h-40 w-96 mx-auto mb-5" src={Logo} alt="logo" />
      </header>   
      <form>
        <div>
            <h1 className="text-4xl text-center text-[#713ABE] font-bold ">Vizsgálat adatai</h1>
        </div>
        <div>
            <label className="block mb-2 text-[#713ABE]" for="username">Bevitel oka</label>
            <input id='beviteloka' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="beviteloka"/>
        </div>
        <div>
            <label for="orvos" class="block mb-2 text-[#713ABE]">Orvos</label>
            <select id='ovs_id' onChange={handleChange} name="nem" class="border border-[#9D76C1] bg-[#E5CFF7]  p-2 w-full rounded-lg #9D76C1 focus:border-[#9D76C1]" required>
               {
                orvosok?.map((orvos) => (<option value={orvos.id}>{orvos.nev}</option>))
               }
            </select>
        </div>
        
        <div class="mb-4">
            <label for="message" class="block mb-2 text-[#713ABE] font-medium ">Megjegyzés</label>
            <textarea id='megjegyzes' onChange={handleChange} name="megjegyzes"
                class="border border-[#713ABE] text-[#713ABE] p-2 w-full rounded-lg focus:outline-none focus:border-#713ABE" rows="5"></textarea>
        </div>

        <div className="flex items-stretch space-x-6">
        <div>
            <label className="block mb-2 text-[#713ABE]">Következő vizsgálat</label>
            <input id='kovvizsgalat' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="kovvizsgalat"/>
        </div>
        <div>
            <label className="block mb-2 text-[#713ABE]">Időtartam</label>
            <input id='idotartam' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="idotartam"/>
        </div>
        </div>

        <div class="mb-4">
            <label for="message" class="block mb-2 text-[#713ABE] font-medium ">Felírt kezelések</label>
            <Select
              id='select'
              placeholder={"Válasszon kezelést"}
               closeMenuOnSelect={false}
               isClearable
               isSearchable
               isMulti
               options={kezelesArak}
               onChange={handleSelectChange}
            />
        </div>

        <div>
            <label className="block mb-2 text-[#713ABE]">Fizetendő összeg</label>
            <input className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" id="osszeg" disabled/>
        </div>
        <div>          
          <button onClick={onSubmit} type='submit' className="w-32 bg-[#713ABE] hover:bg-[#5B0888] text-white font-bold py-2 px-4 mb-6 rounded text-center float-right" >Mentés</button>
        </div>       
      </form>  
       
    </div>
</div>
  )
}

export default NewPatient3