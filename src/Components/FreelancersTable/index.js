import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchBar from "../SearchBar";
import StatusPicker from "../StatusPicker";
import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "@mui/material";
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
  const [filter, setFilter] = useState(null);

  const [freelancers, setFreelancers] = useState([]);

  useState(() => {
    setFreelancers(props.freelancers);
  }, []);
  return (
    <div className="layout w-full ">
      <div className="flex flex-col mt-10 justify-start items-start md:justify-between md:items-center md:flex-row  w-full shadow-sm md:px-15 p-5 ">
        <div className="flex flex-row justify-center items-center">
          <p className="text-3xl font-[500] text-dark">Freelancers List</p>

          <Tooltip title="Hover over a column name and select the menu to access sorting and filtering options or filter the list using the freelancer status filter.">
            <InfoIcon fontSize="sm" className="ml-2" />
          </Tooltip>
        </div>
        <div className="flex flex-row justify-center items-center">
          <StatusPicker
            filter={filter}
            setFilter={setFilter}
            data={freelancers}
            originalData={props.freelancers}
            setFreelancers={setFreelancers}
          />
          <SearchBar
            setFreelancers={setFreelancers}
            data={freelancers}
            filter={filter}
            originalData={props.freelancers}
            setSeachTxt={setSeachTxt}
            placeholder={"Search Freelancer"}
            searchTxt={searchTxt}
          />
        </div>
      </div>
      <DataGrid
        rows={freelancers}
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
