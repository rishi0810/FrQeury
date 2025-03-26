import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb.jsx";
import { useNavigate } from "react-router";
const Signup = () => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setformdata((prev_data) => ({
      ...prev_data,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fr-query-backend.vercel.app/user/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formdata.email,
          password: formdata.password,
        }),
      });
      if (response.ok) {
        setTimeout(async () => {
          const signin = await fetch("https://fr-query-backend.vercel.app/user/login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formdata.email,
              password: formdata.password,
            }),
          });
          if (signin.ok) {
            const signindata = await signin.json();
            navigate("/info", { state: signindata });
          }
        }, 500);
      }
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <div className="flex flex-col space-y-3 items-center justify-center min-h-screen bg-gradient-to-r from-zinc-200 via-transparent to-zinc-200 px-4">
      <div className="flex flex-col justify-center items-center space-y-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <span className="self-start pl-5 w-full">
          <Breadcrumb name="Sign Up" />
        </span>
        <div className="border border-zinc-500/30 rounded-xl shadow-xl w-full">
          <div className="p-6 sm:p-8 md:p-10">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-zinc-800">
                Sign Up
              </h1>
            </div>

            <div className="mt-5">
              <form onSubmit={handlesubmit}>
                <div className="grid gap-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 font-semibold pl-2"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="placeholder-zinc-700/60 py-3 px-4 block w-full border-b border-zinc-300 sm:text-sm focus:ring-2 focus:ring-zinc-500"
                        required
                        placeholder="Email"
                        onChange={handlechange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 font-semibold pl-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="placeholder-zinc-700/60 py-3 px-4 block w-full border-b border-zinc-300  sm:text-sm focus:ring-2 focus:ring-zinc-500"
                        placeholder="Password"
                        onChange={handlechange}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-center text-sm font-medium rounded-lg bg-zinc-500 text-white hover:bg-zinc-600 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
