import Logo from '../assets/Logo_hatternelkul.png';
import {Link} from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="flex h-screen bg-[#E5CFF7]">
<div className="w-full max-w-lg m-auto bg-white rounded p-5 border-2 border-[#713ABE]">   
      <header>
        <img className="object-contain h-40 w-96 mx-auto mb-5" src={Logo} alt="logo" />
      </header>   
      <form>
          <div flex mb-2>
            <label className="block mb-2 text-[#713ABE]" for="email">Adja meg a regisztrált e-mail címét!</label>
            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="text" name="username"/>
          </div>
          <div>
            <label className="block mb-2 text-[#713ABE]" for="password">Új jelszó</label>
            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="password" name="uj_jelszo"/>
            <label className="block mb-2 text-[#713ABE]" for="password">Új jelszó mégegyszer</label>
            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#713ABE] outline-none focus:bg-gray-300" type="password" name="uj_jelszo2"/>
          </div>

        <div>          
          <input className="w-full bg-[#713ABE] hover:bg-[#5B0888] text-white font-bold py-2 px-4 mb-6 rounded" type="submit"/>
        </div>       
      </form>  
      <footer>
        <Link to={'/login'} className="text-[#713ABE] hover:text-[#5B0888] text-sm float-left" >Vissza a bejelentkezéshez</Link>
        
      </footer>   
    </div>
</div>
  )
}

export default ForgotPassword