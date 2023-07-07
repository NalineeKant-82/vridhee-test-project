// import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Information from "./Information";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Route, Routes } from "react-router-dom";
const Page = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: 1, height: 1 }}>
        <Routes>
          <Route path="/personalinfo" element={<Information />} />
        </Routes>
      </Box>
    </LocalizationProvider>
  );
};
export default Page;
