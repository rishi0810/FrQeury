import React from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-b from-zinc-100 via-transparent to-zinc-200">
      <div className="relative w-full max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-10 py-24">
        <div className="bg-transparent backdrop-blur-md p-12 space-y-10 text-center mx-auto max-w-4xl">
          <h1 className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-extrabold font-worksans">
            FrQuery
          </h1>

          <h2 className="text-zinc-600 text-xl sm:text-2xl md:text-3xl font-poppins font-semibold">
            Simplify authentication for your backend projects.
          </h2>

          <p className="text-lg text-zinc-700 font-medium max-w-3xl mx-auto">
            <Link
              to={"/"}
              className="font-bold text-zinc-900 hover:text-zinc-600 hover:underline"
            >
              FrQuery
            </Link>{" "}
            is an open-source authentication form for user registration,
            authorization, and token validation.
          </p>

          <div>
            <Link
              to={"/login"}
              className="inline-flex items-center gap-x-3 bg-gradient-to-r from-zinc-600 to-zinc-800 text-white font-bold text-sm rounded-full py-3 px-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Test Out
              <ChevronRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
