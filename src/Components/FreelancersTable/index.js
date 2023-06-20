import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchBar from "../SearchBar";
import StatusPicker from "../StatusPicker";
//import axios from 'axios';

const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "phone_number", headerName: "Phone Number", width: 130 },
  {
    field: "status",
    headerName: "is_verified",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function FreelancersTable(props) {
  const [searchTxt, setSeachTxt] = useState("");
  console.log(props.freelancers);
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
