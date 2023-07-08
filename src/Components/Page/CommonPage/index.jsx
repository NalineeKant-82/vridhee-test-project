/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const CommonPage = () => {
  const location = useLocation();
  return (
    <Typography
      sx={{ textTransform: "uppercase" }}
    >{`welcome to ${location.pathname.replace("/", "")} Page`}</Typography>
  );
};
export default CommonPage;
