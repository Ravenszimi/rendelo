import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import RendeloContext from "../context/RendeloContext";

function Orvos({ orvos }) {
  const {setRefreshOrvosok} = useContext(RendeloContext);
  const [editing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nev: orvos.nev,
    telefonszam: orvos.telefonszam,
    email: orvos.email,
    iranyitoszam: orvos.iranyitoszam,
    helysegnev: orvos.helysegnev,
    teruletnev: orvos.teruletnev,
    terulettipus: orvos.terulettipus,
    hazszam: orvos.hazszam,
    adoszam: orvos.adoszam,
    azonositoszam: orvos.azonositoszam,
    felhasznalonev: orvos.felhasznalonev,
  
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const deleteOrvos = async () => {
    const response = await fetch(`http://localhost:8000/orvosok/torles/${orvos.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    });
    const data = await response.json();
    if(data.message.includes('Sikeres')){
      toast.success(data.message);
      setRefreshOrvosok(prev => !prev);
    } else {
      toast.error(data.message);
    }
  }

  const saveData = async (form) => {
    const response = await fetch(
      `http://localhost:8000/orvosok/modosit/${orvos.id}`,
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
    const data = await saveData(formData);
    if (data.message.includes("Sikeres")) {
      toast.success(data.message);
      setRefreshOrvosok(prev => !prev);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <>
      {editing ? (
        <>
        <div className="card w-96 min-h-96 bg-base-100 shadow-xl">
          <form>
          <div className="flex justify-end p-3">
            <IoMdClose size={30} onClick={() => {setIsEditing(prev => !prev)}} cursor="pointer"/>
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold mx-auto text-[#5B0888]">
              Név:<input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="nev"
                  type="text"
                  defaultValue={orvos.nev}/>
            </h2>
            <p className="text-lg font-bold text-[#5B0888]">
              Telefonszám:{" "}
              <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="telefonszam"
                  type="text"
                  defaultValue={orvos.telefonszam}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              E-mail cím:<input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="email"
                  type="text"
                  defaultValue={orvos.email}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Irányítószám:{" "}
              <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="iranyitoszam"
                  type="text"
                  defaultValue={orvos.iranyitoszam}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Helységnév:{" "}
              <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="helysegnev"
                  type="text"
                  defaultValue={orvos.helysegnev}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Közterület név:{" "}
              <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="teruletnev"
                  type="text"
                  defaultValue={orvos.teruletnev}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Közterület típus:{" "}
              <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="terulettipus"
                  type="text"
                  defaultValue={orvos.terulettipus}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Házszám: <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="hazszam"
                  type="text"
                  defaultValue={orvos.hazszam}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Adószám: <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="adoszam"
                  type="text"
                  defaultValue={orvos.adoszam}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Azonosítószám:{" "}
              <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="azonositoszam"
                  type="text"
                  defaultValue={orvos.azonositoszam}/>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Felhasznalonev:{" "}
              <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="felhasznalonev"
                  type="text"
                  defaultValue={orvos.felhasznalonev}/>
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
              <button
              onClick={(e) => {
                onSubmit(e);
                setIsEditing(prev => !prev);
              }}
                type="button"
                className="text-white bg-[#713ABE] hover:bg-[#5B0888] mt-4 mx-6 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black "
              >
                Módosítás
              </button>
              <button
                onClick={deleteOrvos}
                type="button"
                className="text-white bg-[#713ABE] hover:bg-[#5B0888] mt-4 mx-6  font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black "
              >
                Törlés
              </button>
            </div>
          </div>
          </form>
        </div>
        </>
      ) : (
        <div className="card w-96 min-h-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold mx-auto text-[#5B0888]">
              {orvos.nev}
            </h2>
            <p className="text-lg font-bold text-[#5B0888]">
              Telefonszám:{" "}
              <span className="font-normal">{orvos.telefonszam}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              E-mail cím: <span className="font-normal">{orvos.email}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Irányítószám:{" "}
              <span className="font-normal">{orvos.iranyitoszam}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Helységnév:{" "}
              <span className="font-normal">{orvos.helysegnev}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Közterület név:{" "}
              <span className="font-normal">{orvos.teruletnev}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Közterület típus:{" "}
              <span className="font-normal">{orvos.terulettipus}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Házszám: <span className="font-normal">{orvos.hazszam}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Adószám: <span className="font-normal">{orvos.adoszam}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Azonosítószám:{" "}
              <span className="font-normal">{orvos.azonositoszam}</span>
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
              <button
                onClick={() => {setIsEditing(prev => !prev)}}
                type="button"
                className="text-white bg-[#713ABE] hover:bg-[#5B0888] mt-4 mx-6 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black "
              >
                Módosítás
              </button>
              <button
                onClick={deleteOrvos}
                type="button"
                className="text-white bg-[#713ABE] hover:bg-[#5B0888] mt-4 mx-6  font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black "
              >
                Törlés
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Orvos;
