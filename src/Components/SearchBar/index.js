import React from "react";

export default function SearchBar(props) {
  //function for freelancer search on the firstname colum
  const handleSearch = (val) => {
    //Capitalizes the first letter of the search word to improve search performance
    const searchText = val.charAt(0).toUpperCase() + val.slice(1);
    if (props.searchTxt === "") {
      props.setFreelancers(props.originalData);
    } else {
      const searchedFreelancer = props.originalData.filter(function (
        freelancer
      ) {
        return freelancer.freelancer_name.includes(searchText) === true;
      });
      props.setFreelancers(searchedFreelancer);
    }
  };
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
            handleSearch(e.target.value);
          }}
          placeholder={props.placeholder}
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
      </div>
    </div>
  );
}
