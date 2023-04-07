import { SearchCircleIcon, SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

function Search({ search, setSearch }) {
  return (
    <div
      className="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl"
      x-data="app()"
      x-init="generatePassword()"
    >
      <form className="relative mt-1">
        <input
          type="text"
          id="password"
          required
          className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
          <SearchIcon />
        </button>
      </form>
      <div className="absolute top-0 left-0 w-full h-2 flex">
        <div className="h-2 bg-blue-500 flex-1" />
        <div className="h-2 bg-red-500 flex-1" />
        <div className="h-2 bg-yellow-500 flex-1" />
        <div className="h-2 bg-blue-500 flex-1" />
        <div className="h-2 bg-green-500 flex-1" />
        <div className="h-2 bg-red-500 flex-1" />
      </div>
    </div>
  );
}

export default Search;
