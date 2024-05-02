import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import RendeloContext from "../context/RendeloContext";
import { MdOutlinePets } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';

function Gazda({ gazda }) {
  const {setRefreshGazdak} = useContext(RendeloContext);
  const [editing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nev: gazda.nev,
    telefonszam: gazda.telefonszam,
    email: gazda.email,
    iranyitoszam: gazda.iranyitoszam,
    helysegnev: gazda.helysegnev,
    teruletnev: gazda.teruletnev,
    terulettipus: gazda.terulettipus,
    hazszam: gazda.hazszam,
    adoszam: gazda.adoszam,
  });

  const navigate = useNavigate();

  const newPet = () => {
    localStorage.setItem('id', gazda.id);
    navigate('/ujpaciens2');
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const deleteGazda = async () => {
    const response = await fetch(`http://localhost:8000/gazdak/torles/${gazda.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    });
    const data = await response.json();
    if(data.message.includes('Sikeres')){
      toast.success(data.message);
      setRefreshGazdak(prev => !prev);
    } else {
      toast.error(data.message);
    }
  }

  const saveData = async (form) => {
    const response = await fetch(
      `http://localhost:8000/gazdak/modosit/${gazda.id}`,
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
      setRefreshGazdak(prev => !prev);
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
                <IoMdClose
                  size={30}
                  onClick={() => {
                    setIsEditing((prev) => !prev);
                  }}
                  cursor="pointer"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold mx-auto text-[#5B0888]">
                  Név:
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="nev"
                    type="text"
                    defaultValue={gazda.nev}
                  />
                </h2>
                <p className="text-lg font-bold text-[#5B0888]">
                  Telefonszám:{" "}
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="telefonszam"
                    type="text"
                    defaultValue={gazda.telefonszam}
                  />
                </p>
                <p className="text-lg font-bold text-[#5B0888]">
                  E-mail cím:
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="email"
                    type="text"
                    defaultValue={gazda.email}
                  />
                </p>
                <p className="text-lg font-bold text-[#5B0888]">
                  Irányítószám:{" "}
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="iranyitoszam"
                    type="text"
                    defaultValue={gazda.iranyitoszam}
                  />
                </p>
                <p className="text-lg font-bold text-[#5B0888]">
                  Helységnév:{" "}
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="helysegnev"
                    type="text"
                    defaultValue={gazda.helysegnev}
                  />
                </p>
                <p className="text-lg font-bold text-[#5B0888]">
                  Közterület név:{" "}
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="teruletnev"
                    type="text"
                    defaultValue={gazda.teruletnev}
                  />
                </p>
                <p className="text-lg font-bold text-[#5B0888]">
                  Közterület típus:{" "}
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="terulettipus"
                    type="text"
                    defaultValue={gazda.terulettipus}
                  />
                </p>
                <p className="text-lg font-bold text-[#5B0888]">
                  Házszám:{" "}
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="hazszam"
                    type="text"
                    defaultValue={gazda.hazszam}
                  />
                </p>
                <p className="text-lg font-bold text-[#5B0888]">
                  Adószám:{" "}
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-purple-600 p-1"
                    id="adoszam"
                    type="text"
                    defaultValue={gazda.adoszam}
                  />
                </p>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                  <button
                    onClick={(e) => {
                      onSubmit(e);
                      setIsEditing((prev) => !prev);
                    }}
                    type="button"
                    className="text-white bg-[#713ABE] hover:bg-[#5B0888] mt-4 mx-6 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black "
                  >
                    Módosítás
                  </button>
                  <button
                    onClick={deleteGazda}
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
            <div className="flex flex-between justify-center">
            <h2 className="card-title text-2xl font-bold mx-auto text-[#5B0888]">
              {gazda.nev}
            </h2>
              <div className="cursor-pointer text-[#5B0888]">
                  <MdOutlinePets id="newpet" size={30} onClick={newPet}/>
                  <Tooltip anchorSelect="#newpet">Kisállat hozzáadása</Tooltip>
              </div>
            </div>
            <p className="text-lg font-bold text-[#5B0888]">
              Telefonszám:{" "}
              <span className="font-normal">{gazda.telefonszam}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              E-mail cím: <span className="font-normal">{gazda.email}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Irányítószám:{" "}
              <span className="font-normal">{gazda.iranyitoszam}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Helységnév:{" "}
              <span className="font-normal">{gazda.helysegnev}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Közterület név:{" "}
              <span className="font-normal">{gazda.teruletnev}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Közterület típus:{" "}
              <span className="font-normal">{gazda.terulettipus}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Házszám: <span className="font-normal">{gazda.hazszam}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Adószám: <span className="font-normal">{gazda.adoszam}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Állat név:{" "}
              <span className="font-normal">
                {gazda.allatok.map((allat) => (
                  <p>{allat.nev}</p>
                ))}
              </span>
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
                onClick={deleteGazda}
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

export default Gazda;
