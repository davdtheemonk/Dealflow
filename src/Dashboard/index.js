import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import FreelancersTable from "../Components/FreelancersTable";
import Loader from "../Components/Loader";
import { useGetFreelancersQuery } from "../features/apiSlice";
import Error from "../Components/Error";

export default function Dashboard() {
  const { data: freelancers, isLoading, isSuccess } = useGetFreelancersQuery();

  const Screen = () => {
    if (isLoading) {
      return <Loader />;
    } else if (isSuccess) {
      return (
        <div>
          <Header />
          <HeroSection data={freelancers} />
          <FreelancersTable freelancers={freelancers} />
        </div>
      );
    }
    //handle error if it occurrs when fetching data from remote resource - API
    else {
      return <Error />;
    }
  };
  return <Screen />;
}
