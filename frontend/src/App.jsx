import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';
import Menu from './components/Menu';
import NewPatient from './components/NewPatient';
import NewPatient2 from './components/NewPatient2';
import NewPatient3 from './components/NewPatient3';
import Orvos from './components/Orvos';
import Gazda from './components/Gazda';
import Paciens from './components/Paciens';
import Kezelesar from './components/Kezelesar';
import Vizsgalat from './components/Vizsgalat';
import RendeloContext, { RendeloProvider } from './context/RendeloContext';
import OrvosLista from './components/OrvosLista';
import PaciensLista from './components/PaciensLista';
import GazdaLista from './components/GazdaLista';
import KezelesarLista from './components/KezelesarLista';
import VizsgalatLista from './components/VizsgalatLista';
import OrvosContext, {OrvosProvider} from './context/OrvosContext';
import PaciensContext, {PaciensProvider} from './context/PaciensContext';
import GazdaContext, {GazdaProvider} from './context/GazdaContext';
import toast, { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
      <Router>
       <RendeloProvider>
        <OrvosProvider>
        <PaciensProvider>
        <GazdaProvider>
        <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/ujpaciens' element={<NewPatient />} />
          <Route path='/ujpaciens2' element={<NewPatient2 />} />
          <Route path='/ujpaciens3' element={<NewPatient3 />} />
          <Route path='/orvosok' element={<OrvosLista />} />
          <Route path='/gazdak' element={<GazdaLista />} />
          <Route path='/paciensek' element={<PaciensLista />} />
          <Route path='/vizsgalatok' element={<VizsgalatLista />} />
          <Route path='/kezelesarak' element={<KezelesarLista />} />
          <Route path='*' element={<Navigate to={'/'} />}/>
        </Routes>
        </GazdaProvider>
        </PaciensProvider>
        </OrvosProvider>
        </RendeloProvider>
        <Toaster />
      </Router>
    </>
  )
}

export default App

//Színek a legsötétebbel kezdve
//#5B0888
//#713ABE
//#9D76C1
//#E5CFF7
//Beige: #FFF7F1



//Felvételnél az össezg megadása a felírt kezelés alapján, a felírt kezelés pedig lista alapján
//Állat neve egymás mellett
//linkek
//Bejelentkezés beállítása a gombra 
//bejelentkezés, regisztráció
//új adatok felvétele
//Módosítás
//bejelentkezés gomb, ne lehessen kattintani
//main oldal átalakítása, hogy eltűnjön a fehér csík
//menu gomb működése, ha össze van nyomva az oldal
//vizsgálatnál keresés beállítása
//árak jelzése
//vizsgálatba nem veszi fel az adatot