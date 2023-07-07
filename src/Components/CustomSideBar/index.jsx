import { Box, Paper, Typography } from "@mui/material";
import { sideBarData } from "../../sideBarCommonData";
import vridheeLogo from "../../assets/vridheeLogo.png";
import { useNavigate, useLocation } from "react-router-dom";
const CustomSideBar = () => {
  const location = useLocation();
  console.log(location, "location");
  const navigate = useNavigate();
  const getNavigateLink = (item) => {
    navigate(item.link);
  };

  return (
    <Box sx={{ width: "100%", height: "100%", display: ["none", "flex"] }}>
      <Paper sx={{ width: "300px", height: "100%", background: "#044b91" }}>
        <Box sx={{ p: 3 }}>
          <img style={{ height: "50px", color: "white" }} src={vridheeLogo} />
        </Box>
        {sideBarData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              p: 3,
              background: location?.pathname?.includes(item.link)
                ? "white"
                : "",
            }}
          >
            <Box
              sx={{
                color: location?.pathname?.includes(item.link)
                  ? "#00498e"
                  : "white",
                pr: 1,
              }}
            >
              {item.img}
            </Box>
            <Typography
              sx={{
                cursor: "pointer",
                color: location?.pathname?.includes(item.link)
                  ? "#00498e"
                  : "white",
              }}
              onClick={() => getNavigateLink(item)}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};
export default CustomSideBar;
