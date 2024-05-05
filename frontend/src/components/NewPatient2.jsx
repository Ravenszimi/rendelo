import Logo from '../assets/Logo_hatternelkul.png';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import RendeloContext from '../context/RendeloContext';

//Gazda adatai
function NewPatient2() {
  const {setRefreshPaciensek} = useContext(RendeloContext);
  const [formData, setFormData] = useState({
    gda_id: localStorage.getItem('id'),
    nev: "",
    faj: "",
    kg: "",
    nem: "",
    kor: "",
    utolsovizsgalat: "",
    megjegyzes: "" 
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.id] : e.target.value}));
  }

  const saveData = async (form) => {
    const response = await fetch('http://localhost:8000/ujpaciensadat', {
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
    const data = await saveData(formData);
    if(data.message){
      toast.success(data.message);
      localStorage.setItem('alt_id',data.allatId);
      setRefreshPaciensek(prev => !prev);
      navigate('/ujpaciens3', {
        state: {
          allatId: data.allatId
        }
      });
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
            <h1 className="text-4xl text-center text-[#713ABE] font-bold ">Állat adatai</h1>
        </div>
        
        <div className="flex items-stretch space-x-6"> 
        <div>
            <label className="block mb-2 text-[#713ABE]" for="username">Név</label>
            <input id='nev' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="nev"/>
        </div>
        <div>
            <label className="block mb-2 text-[#713ABE]" for="username">Faj</label>
            <input id='faj' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="faj"/>
        </div>
        </div>

        <div className="flex items-stretch space-x-6"> 
        <div>
            <label className="block mb-2 text-[#713ABE]">Kg</label>
            <input id='kg' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="kg"/>
        </div>
        
        <div>
        <label for="nem" class="block mb-2 text-[#713ABE]">Nem</label>
            <select id='nem' onChange={handleChange} name="nem"
                class="border border-[#9D76C1] bg-[#E5CFF7]  p-2 w-full rounded-lg #9D76C1 focus:border-[#9D76C1]" required>
                
                <option value="hím">Hím</option>
                <option value="nőstény">Nőstény</option>
                <option value="más">Ismeretlen</option>
            </select>
        </div>
        </div>


        <div className="flex items-stretch space-x-6"> 
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Kor</label>
            <input id='kor' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="kor"/>
            </div>

            <div class="mb-2">
            <label class="block mb-2 text-[#713ABE]" for="utolsovizsgalat">
                Utolsó vizsgálat
            </label>
            <input
                id='utolsovizsgalat' onChange={handleChange}
                class="shadow appearance-none border-2 border-[#713ABE] rounded w-full py-2 px-3 text-[#713ABE] leading-tight focus:outline-none focus:shadow-outline"
                type="date" placeholder="Select a date"/>
        </div>
        </div>
        <div class="mb-4">
            <label for="message" class="block mb-2 text-[#713ABE] font-medium ">Megjegyzés</label>
            <textarea id='megjegyzes' onChange={handleChange} name="megjegyzes"
                class="border border-[#713ABE] text-[#713ABE] p-2 w-full rounded-lg focus:outline-none focus:border-#713ABE" rows="5"></textarea>
        </div>
        <div>          
        <button onClick={onSubmit} type='submit' className="w-32 bg-[#713ABE] hover:bg-[#5B0888] text-white font-bold py-2 px-4 mb-6 rounded text-center float-right" >Folytatás</button>
        </div>       
      </form>  
       
    </div>
</div>
  )
}

export default NewPatient2