import { useState } from 'react';
import Logo from '../assets/Logo_hatternelkul.png';
import {Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

//Gazda adatai
function NewPatient() {
  const {setRefreshGazdak} = useContext(RendeloContext);
  const [formData, setFormData] = useState({
    nev: "",
    telefonszam: "",
    email: "",
    iranyitoszam: "",
    helysegnev: "",
    teruletnev: "",
    terulettipus: "",
    hazszam: "",
    adoszam: ""
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.id] : e.target.value}));
  }

  const saveData = async (form) => {
    const response = await fetch('http://localhost:8000/ujgazdaadat', {
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
      let id = data.id;
      console.log(id)
      localStorage.setItem('id', id);
      setRefreshGazdak(prev => !prev);
      navigate('/ujpaciens2', {
        state: {
          gazdaId: id
        }
      });
    }
  }

  return (
    <div className="bg-[#E5CFF7] h-screen flex justify-center items-center">
<div className="w-full flex flex-col justify-center items-center max-w-lg m-auto bg-white rounded p-5 border-2 border-[#713ABE]">   
      <header>
        <img className="object-contain h-40 w-96 mx-auto mb-5" src={Logo} alt="logo" />
      </header>   
      <form>
        <div>
            <h1 className="text-4xl text-center text-[#713ABE] font-bold ">Gazda adatai</h1>
        </div>
        <div>
            <label className="block mb-2 text-[#713ABE]" for="username">Teljes név</label>
            <input id='nev' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="nev"/>
        </div>
        <div>
            <label className="block mb-2 text-[#713ABE]">Telefonszám</label>
            <input id='telefonszam' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="telefonszam"/>
        </div>
        
        <div>
          <label className="block mb-2 text-[#713ABE]" for="email">Email</label>
          <input id='email' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="email" name="email"/>
        </div>


        <div className="flex items-stretch space-x-6"> 
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Irányítószám</label>
            <input id='iranyitoszam' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="iranyitoszam"/>
            </div>
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Helységnév</label>
            <input id='helysegnev' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="helysegnev"/>
            </div>
        </div>

        <div className="flex items-stretch space-x-6">
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Közterület neve</label>
            <input id='teruletnev' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="teruletnev"/>
            </div>
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Közterület típusa</label>
            <input id='terulettipus' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="terulettipus"/>
            </div>
        </div>


        <div>
          <label className="block mb-2 text-[#713ABE]" for="password">Házszám</label>
          <input id='hazszam' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="hazszam"/>
        </div>
        <div>
          <label className="block mb-2 text-[#713ABE]" for="password">Adószám</label>
          <input id='adoszam' onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="adoszam"/>
        </div>
       
        <div>          
        <button type='submit' onClick={onSubmit} className="w-32 bg-[#713ABE] hover:bg-[#5B0888] text-white font-bold py-2 px-4 mb-6 rounded text-center float-right" >Folytatás</button>
        </div>       
      </form>  
       
    </div>
</div>
  )
}

export default NewPatient