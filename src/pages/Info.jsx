import { ChevronRight } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
const Info = () => {
  const location = useLocation();
  const data = location.state || {};
  const navigate = useNavigate();
  const handlelogout = async (e) => {
    try {
      const response = await fetch("https://fr-query-backend.vercel.app/user/logout", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        setTimeout(() => {
          toast.success("Logged out successfully!", { duration: 1000 });
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }, 500);
      }
    } catch (err) {
      toast.error("Failed to logout...");
      console.error("Error + ", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-b from-zinc-100 via-transparent to-zinc-200 px-4">
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto p-6 sm:p-8 md:p-10">
        <div className="bg-white border-2 border-zinc-300/40 backdrop-blur-md shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 space-y-6">
          <h1 className="text-zinc-900 text-2xl sm:text-2xl md:text-3xl font-extrabold">
            User Detail
          </h1>
          <p className="text-md">
            User has been successfully logged in. <br />A JWT has been generated
            which can be sent for all subsequent responses in your project.
          </p>

          <div className="flex flex-wrap items-center">
            <p>Check the auth TOKEN by pressing</p>
            <span className="flex ms-2 text-zinc-700 items-center">
              Ctrl+Shift+I <ChevronRight className="size-4 mt-1 mx-1" />{" "}
              Application Tab
            </span>
          </div>

          <textarea
            readOnly
            className="w-full h-40 sm:h-56 md:h-64 p-4 text-md bg-zinc-50 border border-zinc-300 rounded-lg resize-none"
            value={JSON.stringify(data, null, 2)}
          />

          <button
            className="w-full sm:w-auto p-3 font-bold flex gap-1 justify-center items-center rounded-lg bg-zinc-300 hover:bg-zinc-400 cursor-pointer active:scale-105 transition-all duration-150"
            onClick={handlelogout}
          >
            <LogOut className="size-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
