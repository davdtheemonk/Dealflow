import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useGetFreelancersQuery } from "../../features/apiSlice";
export default function StatusPicker({
  filter,
  data,
  setFreelancers,
  originalData,
}) {
  // Store the original data in a separate variable
  const originalFreelancers = data;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Freelancer status
        </InputLabel>
        <NativeSelect
          defaultValue={true}
          onChange={async (e) => {
            if (e.target.value === "true") {
              // Filter out unverified freelancers
              const verifiedFreelancers = originalFreelancers.filter(function (
                freelancer
              ) {
                return freelancer.freelancer_isverified === true;
              });
              setFreelancers(verifiedFreelancers);
            } else if (e.target.value === "false") {
              // Filter out verified freelancers
              const unverifiedFreelancers = originalFreelancers.filter(
                function (freelancer) {
                  return freelancer.freelancer_isverified === false;
                }
              );
              setFreelancers(unverifiedFreelancers);
            } else if (e.target.value === "Remove filter") {
              // Reset the freelancers to the original data

              setFreelancers(originalData);
            }
          }}
        >
          <option value={true}>Verified</option>
          <option value={false}>Not Verified</option>
          <option value={null}>Remove filter</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
