/* eslint-disable react/prop-types */
import { Box, OutlinedInput, Typography } from "@mui/material";

const CustomTextField = ({
  heading,
  placeholder,
  setAllInformation,
  AllInformation,
  name,
}) => {
  const storeTextFieldData = (e) => {
    setAllInformation({ ...AllInformation, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Typography className="fontStyle"> {heading}</Typography>
      <OutlinedInput
        fullWidth
        placeholder={placeholder}
        onChange={storeTextFieldData}
        name={name}
        sx={{ height: "45px" }}
      />
    </Box>
  );
};
export default CustomTextField;
