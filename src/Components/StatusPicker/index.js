import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function StatusPicker() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Freelance status
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={true}>Verified</option>
          <option value={false}>Not Verified</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
