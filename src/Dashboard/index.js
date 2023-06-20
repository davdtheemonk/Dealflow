import React, { useState } from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import FreelancersTable from "../Components/FreelancersTable";
import Loader from "../Components/Loader";
import { useGetFreelancersQuery } from "../features/apiSlice";

export default function Dashboard() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFreelancersQuery();
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <HeroSection />
          <FreelancersTable />
        </div>
      )}
    </div>
  );
}
