import Logo from '../assets/Logo_hatternelkul.png';
import {Link, useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import RendeloContext from '../context/RendeloContext';

function Register() {
  const {setRefreshOrvosok} = useContext(RendeloContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nev: "",
    telefonszam: "",
    email: "",
    iranyitoszam: "",
    helysegnev: "",
    teruletnev: "",
    terulettipus: "",
    hazszam: "",
    adoszam: "",
    azonositoszam: "",
    felhasznalonev: "",
    jelszo: "",
    jelszo2: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveData = async (form) => {
    const response = await fetch(
      `http://localhost:8000/ujorvosadat`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    const data = await response.json();
    return data;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if(formData.jelszo !== formData.jelszo2){
      toast.error("Eltérő jelszavak!");
      return;
    }
    delete formData.jelszo2;
    const data = await saveData(formData);
    setRefreshOrvosok(prev => !prev);
    if (data.message.includes("Új")) {
      toast.success(data.message);
      navigate("/");
    
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="flex bg-cover bg-[#E5CFF7]">
<div className="w-full max-w-lg m-auto bg-white rounded p-5 border-2 border-[#713ABE]">   
      <header>
        <img className="object-contain h-40 w-96 mx-auto mb-5" src={Logo} alt="logo" />
      </header>   
      <form>
        
        <div>
            <label className="block mb-2 text-[#713ABE]" for="username">Teljes név</label>
            <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="nev"/>
        </div>
        <div>
            <label className="block mb-2 text-[#713ABE]">Telefonszám</label>
            <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="telefonszam"/>
        </div>
        
        <div>
          <label className="block mb-2 text-[#713ABE]" for="email">Email</label>
          <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="email" name="email"/>
        </div>


        <div className="flex items-stretch space-x-6"> 
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Irányítószám</label>
            <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="iranyitoszam"/>
            </div>
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Helységnév</label>
            <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="helysegnev"/>
            </div>
        </div>

        <div className="flex items-stretch space-x-6">
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Közterület neve</label>
            <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="teruletnev"/>
            </div>
            <div className="py-6">
            <label className="block mb-2 text-[#713ABE]" for="password">Közterület típusa</label>
            <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="terulettipus"/>
            </div>
        </div>


        <div>
          <label className="block mb-2 text-[#713ABE]" for="password">Házszám</label>
          <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="hazszam"/>
        </div>
        <div>
          <label className="block mb-2 text-[#713ABE]" for="password">Adószám</label>
          <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="adoszam"/>
        </div>
        <div>
          <label className="block mb-2 text-[#713ABE]" for="password">Azonosítószám</label>
          <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="azonositoszam"/>
        </div>
        <div>
          <label className="block mb-2 text-[#713ABE]" for="password">Adjon meg egy felhasználónevet!</label>
          <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="felhasznalonev"/>
        </div>
        <div>
          <label className="block mb-2 text-[#713ABE]" for="password">Adjon meg egy jelszót!</label>
          <label className="block mb-2 text-[#713ABE]  text-sm" for="password">A jelszónak minimum 8 karakterből kell állnia, tartalmaznia kell minimum egy számot és egy nagy betűt! </label>
          <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="password" name="jelszo"/>
        </div>
        <div>
          <label className="block mb-2 text-[#713ABE]" for="password">Gépelje be a jelszót mégegyszer!</label>
          <input onChange={handleChange} className="w-full p-2 mb-6 text-[#713ABE] border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="password" name="jelszo2"/>
        </div>
        <div>          
          <button onClick={onSubmit} className='w-full bg-[#713ABE] hover:bg-[#5B0888] text-white font-bold py-2 px-4 mb-6 rounded'>Regisztráció</button>
        </div>       
      </form>  
      <footer>
        
        <Link to={'/login'} className="text-[#713ABE] hover:text-[#5B0888] text-sm float-left">Vissza a bejelentkezéshez</Link>
      </footer>   
    </div>
</div>
  )
}

export default Register
