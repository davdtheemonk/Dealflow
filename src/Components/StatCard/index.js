import React from "react";
export default function StatCard(props) {
  return (
    <div className="card flex flex-row bg-white p-[10px] w-[300px]   rounded-lg ">
      <div className="max-w-[100px] ">{props.category.icon}</div>
      <div className="flex w-[100%] justify-center items-center flex-col">
        <p className=" text-2xl text-center font-bold">
          {props.category.number}
        </p>
        <p className="text-sm text-center">{props.category.title}</p>
      </div>
    </div>
  );
}
