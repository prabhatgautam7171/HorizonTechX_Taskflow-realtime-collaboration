import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import api from "../services/api";

import { setCredentials } from "../redux/slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      dispatch(setCredentials(data));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SECTION */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-slate-950">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Build Better Team Collaboration
          </h1>

          <p className="text-slate-400 text-lg">
            Create projects, assign tasks, collaborate,
            and stay productive together.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex items-center justify-center p-6">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl"
        >
          <h1 className="text-4xl font-bold mb-2">
            Create Account
          </h1>

          <p className="text-slate-400 mb-8">
            Start collaborating today
          </p>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-slate-800 border border-slate-700 p-4 rounded-lg outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-800 border border-slate-700 p-4 rounded-lg outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-slate-800 border border-slate-700 p-4 rounded-lg outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-4 rounded-lg font-semibold">
              Register
            </button>
          </div>

          <p className="text-slate-400 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
