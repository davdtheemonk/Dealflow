import React from "react";
import {
  BsPersonFillCheck,
  BsFillPeopleFill,
  BsPersonFillX,
} from "react-icons/bs";
import StatCard from "../StatCard";
export default function HeroSection(props) {
  const verifiedFreelancers = props.data.filter(function (freelancer) {
    return freelancer.freelancer_isverified === true;
  });
  const unverifiedFreelancers = props.data.filter(function (freelancer) {
    return freelancer.freelancer_isverified === false;
  });
  const categories = [
    {
      title: "Freelancers on Dealflow",
      icon: <BsFillPeopleFill className="w-[55px] h-[55px] text-secondary" />,
      number: props.data.length,
    },
    {
      title: "Verified Freelancers on Dealflow",
      icon: <BsPersonFillCheck className="w-[55px] h-[55px] text-secondary" />,
      number: verifiedFreelancers.length,
    },
    {
      title: "Unverified Freelancers on Dealflow",
      icon: <BsPersonFillX className="w-[55px] h-[55px] text-secondary" />,
      number: unverifiedFreelancers.length,
    },
  ];
  return (
    <div className="layout">
      <div className="flex flex-row mt-40 md:mt-20 shadow-sm md:px-15 p-5 w-max ">
        <p className="text-3xl font-[500] text-dark">Overview</p>
      </div>
      <div className=" grid grid-cols-1 justify-start   items-start w-max sm:grid-cols-2 lg:grid-cols-4 w-[100%]  gap-6  md:p-5 p-10">
        {categories.map((category, index) => (
          <StatCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
