import React from "react";

export default function SearchBar(props) {
  return (
    <div className="max-w-sm  ml-2 w-[250px] py-3 flex flex-row justify-center items-center">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={props.searchTxt}
          onChange={(e) => {
            props.setSeachTxt(e.target.value);
          }}
          placeholder={props.placeholder}
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
      </div>
      <button
        className="bg-secondary ml-3 hover:cursor-pointer hover:shadow-xl text-light"
        style={{
          width: "40%",
          height: "40px",
          borderRadius: "5px",
          border: "0px",
          right: "0px",
          marginTop: "3px",
          position: "relative",
          boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
                      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`,
        }}
        onClick={() => {
          props.handleSearch(props.searchTxt);
        }}
        variant="contained"
      >
        Search
      </button>
    </div>
  );
}
