import Logo from "../assets/Logo_hatternelkul.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import OrvosContext from "../context/OrvosContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    jelszo: "",
  });

  const {setToken} = useContext(OrvosContext);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();

  const login = async (form) => {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    return data;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await login(formData);
    if (data.message.includes("Hiányzó") || data.message.includes("nem")) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      localStorage.setItem("usertoken", data.token);
      setToken(data.token);
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen bg-[#E5CFF7]">
      <div className="w-full max-w-lg m-auto bg-white rounded p-5 border-2 border-[#713ABE]">
        <header>
          <img
            className="object-contain h-40 w-96 mx-auto mb-5"
            src={Logo}
            alt="logo"
          />
        </header>
        <form>
          <div flex mb-2>
            <label className="block mb-2 text-[#713ABE]" for="username">
              Email:
            </label>
            <input
              onChange={handleChange}
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#713ABE] outline-none focus:bg-gray-300"
              type="text"
              id="email"
            />
          </div>
          <div>
            <label className="block mb-2 text-[#713ABE]" for="password">
              Jelszó
            </label>
            <input
              onChange={handleChange}
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#713ABE] outline-none focus:bg-gray-300"
              type="password"
              id="jelszo"
            />
          </div>

          <div>
            <button
              onClick={onSubmit}
              type="submit"
              className="w-full bg-[#713ABE] hover:bg-[#5B0888] text-white font-bold py-2 px-4 mb-6 rounded"
            >
              Bejelentkezés
            </button>
          </div>
        </form>
        <footer>
          <Link
            to={"/register"}
            className="text-[#713ABE] hover:text-[#5B0888] text-sm float-right"
          >
            Regisztráció
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Login;
