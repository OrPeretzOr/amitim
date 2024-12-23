import React, { useState } from "react";
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from "@mui/material";

function DestinationPage() {
    const destinations = ["צריפין", "בית"]
    const [destination, setDestination] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setDestination(event.target.value);
    };
  
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
    <InputLabel id="demo-select-small-label">יעד</InputLabel>
    <Select
      labelId="demo-select-small-label"
      id="demo-select-small"
      value={destination}
      label="Destinstion"
      onChange={handleChange}
    >
    {
        destinations.map((dest) => (
            <MenuItem value={dest}>{dest}</MenuItem>
        ))
    }

      
    </Select>
  </FormControl>
  );
}

export default DestinationPage;
