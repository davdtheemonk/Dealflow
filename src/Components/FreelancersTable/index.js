import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchBar from "../SearchBar";
import StatusPicker from "../StatusPicker";
//import axios from 'axios';

const columns = [
  { field: "id", headerName: "id", width: 130 },
  { field: "freelancer_name", headerName: "First name", width: 130 },
  { field: "freelancer_phone", headerName: "Phone Number", width: 130 },
  {
    field: "freelancer_isverified",
    headerName: "is_verified",
    width: 90,
  },
];

export default function FreelancersTable(props) {
  const [searchTxt, setSeachTxt] = useState("");
  const handleSearch = (val) => {
    /*  const url = `https://foti.pythonanywhere.com/foti/students/?search=${val}`;
        axios.get(url, config).then((res) => {
          setStudents(res.data);
        });*/
  };
  return (
    <div className="layout w-full ">
      <div className="flex flex-col mt-10 justify-start items-start md:justify-between md:items-center md:flex-row  w-full shadow-sm md:px-15 p-5 ">
        <p className="text-3xl font-[500] text-dark">Freelancers List</p>
        <div className="flex flex-row justify-center items-center">
          <StatusPicker />
          <SearchBar
            handleSearch={handleSearch}
            setSeachTxt={setSeachTxt}
            placeholder={"Search Freelancer"}
            searchTxt={searchTxt}
          />
        </div>
      </div>
      <DataGrid
        rows={props.freelancers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
