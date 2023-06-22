import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function StatusPicker({ setFilter, filter }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Freelance status
        </InputLabel>
        <NativeSelect
          defaultValue={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value={true}>Verified</option>
          <option value={false}>Not Verified</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
