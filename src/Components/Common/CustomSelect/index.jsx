/* eslint-disable react/prop-types */
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const CustomSelect = ({
  placeholder,
  selectData,
  setAllInformation,
  AllInformation,
  name,
}) => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    setAllInformation({ ...AllInformation, [e.target.name]: e.target.value });
  };
  return (
    <FormControl fullWidth>
      <Select
        value={selectValue}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        name={name}
        sx={{ height: "45px" }}
      >
        <MenuItem value="">
          <em className="fontStyle">{placeholder}</em>
        </MenuItem>
        {selectData.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CustomSelect;
