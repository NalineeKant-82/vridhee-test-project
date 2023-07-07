import { Box } from "@mui/material";
import CustomSideBar from "../CustomSideBar";
import Page from "../Page";
import { BrowserRouter } from "react-router-dom";
const LandingPage = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", overflowY: "auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-around", height: "inherit", boxSizing: "border-box" }}>
        <BrowserRouter>
          <CustomSideBar />
          <Page />
        </BrowserRouter>
      </Box>
    </Box>
  );
};
export default LandingPage;
