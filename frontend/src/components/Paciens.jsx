import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";
import RendeloContext from "../context/RendeloContext";
import { useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';

function Paciens({ paciens }) {
  const {setRefreshPaciensek} = useContext(RendeloContext);
  const [editing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nev: paciens.nev,
    faj: paciens.faj,
    kg: paciens.kg,
    nem: paciens.nem,
    kor: paciens.kor,
    utolsovizsgalat: paciens.utolsovizsgalat,
    megjegyzes: paciens.megjegyzes, 
  });

  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.id] : e.target.value}));
  }

  const navigate = useNavigate();

  const newAssignment = () => {
    localStorage.setItem('alt_id', paciens.id);
    navigate('/ujpaciens3');
  }

  const deletePaciens = async () => {
    const response = await fetch(`http://localhost:8000/paciensek/torles/${paciens.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    });
    const data = await response.json();
    if(data.message.includes('Sikeres')){
      toast.success(data.message);
      setRefreshPaciensek(prev => !prev);
    } else {
      toast.error(data.message);
    }
  }

  const saveData = async (form) => {
    const response = await fetch(`http://localhost:8000/paciensek/modosit/${paciens.id}`, {
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
    console.log(formData);
    const data = await saveData(formData);
    if(data.message.includes("Sikeres")){
      toast.success(data.message);
      setRefreshPaciensek(prev => !prev);
    } else {
      toast.error(data.message);
    }
  }

  return (
    <>
      {editing ? (
        <div className="card w-96 min-h-96 bg-base-100 shadow-xl">
          <div className="flex justify-end p-3">
          <IoMdClose size={30} onClick={() => {setIsEditing(prev => !prev)}} cursor="pointer"/>
          </div>
          <form>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold mx-auto text-[#5B0888]">
                Név:{" "}
                <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="nev"
                  type="text"
                  defaultValue={paciens.nev}
                />
              </h2>
              <p className="text-lg font-bold text-[#5B0888]">
                Gazda név:{" "}
                <span className="font-normal">{paciens.gazdanev}</span>
              </p>
              <p className="text-lg font-bold text-[#5B0888]">
                Faj:{" "}
                <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  id="faj"
                  type="text"
                  defaultValue={paciens.faj}
                />
              </p>
              <p className="text-lg font-bold text-[#5B0888]">
                Súly:{" "}
                <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  type="number"
                  id="kg"
                  defaultValue={paciens.kg}
                />
              </p>
              <p className="text-lg font-bold text-[#5B0888]">
                Nem:{" "}
                <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  type="text"
                  id="nem"
                  defaultValue={paciens.nem}
                />
              </p>
              <p className="text-lg font-bold text-[#5B0888]">
                Kor:{" "}
                <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  type="number"
                  id="kor"
                  defaultValue={paciens.kor}
                />
              </p>
              <p className="text-lg font-bold text-[#5B0888]">
                Utolsó vizsgálat:{" "}
                <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  type="date"
                  id="utolsovizsgalat"
                  defaultValue={paciens.utolsovizsgalat.split("T")[0]}
                />
              </p>
              <p className="text-lg font-bold text-[#5B0888]">
                Megjegyzés:{" "}
                <input
                  onChange={handleChange}
                  className="w-full border-2 border-purple-600 p-1"
                  type="text"
                  id="megjegyzes"
                  defaultValue={paciens.megjegyzes}
                />
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
                  onClick={deletePaciens}
                  type="button"
                  className="text-white bg-[#713ABE] hover:bg-[#5B0888] mt-4 mx-6  font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black "
                >
                  Törlés
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="card w-96 min-h-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-between">
            <h2 className="card-title text-2xl font-bold mx-auto text-[#5B0888]">
              {paciens.nev}
            </h2>
            <div className="cursor-pointer text-[#5B0888]" title="Új vizsgálat">
            <MdAssignmentAdd id="ujvizsgalat" size={30} onClick={newAssignment}/>
            <Tooltip anchorSelect="#ujvizsgalat">
              Vizsgálat hozzárendelése
            </Tooltip>
            </div>
            </div>
            <p className="text-lg font-bold text-[#5B0888]">
              Gazda név: <span className="font-normal">{paciens.gazdanev}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Faj: <span className="font-normal">{paciens.faj}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Súly: <span className="font-normal">{paciens.kg}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Nem: <span className="font-normal">{paciens.nem}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Kor: <span className="font-normal">{paciens.kor}</span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Utolsó vizsgálat:{" "}
              <span className="font-normal">
                {paciens.utolsovizsgalat.split("T")[0]}
              </span>
            </p>
            <p className="text-lg font-bold text-[#5B0888]">
              Megjegyzés:{" "}
              <span className="font-normal">{paciens.megjegyzes}</span>
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
              <button
                onClick={() => {
                  setIsEditing((prev) => !prev);
                }}
                type="button"
                className="text-white bg-[#713ABE] hover:bg-[#5B0888] mt-4 mx-6 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-black "
              >
                Módosítás
              </button>
              <button
                onClick={deletePaciens}
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

export default Paciens;
