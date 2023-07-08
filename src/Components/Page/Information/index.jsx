import { Box, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import "./index.css";
import CustomSelect from "../../Common/CustomSelect";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import CustomTextField from "../../Common/CustomTextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";

const languageArr = ["Hindi", "English", "Kannada", "Tamil"];
const locationArr = ["Bangalore", "Hyderabad", "Mumbai", "Pune"];

const Information = () => {
  const [AllInformation, setAllInformation] = useState({
    language: "",
    location: "",
    email: "",
    name: "",
    nickname: "",
    birthday: null,
  });

  useEffect(() => {
    console.log(AllInformation);
  }, [AllInformation]);

const getDate=(date)=>{
  setAllInformation({...AllInformation,birthday:date})
}

  return (
    <Box
      sx={{
        width: [1, 0.6],
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
        boxSizing: "border-box",
      }}
    >
      <OutlinedInput
        sx={{ background: "#f6faff", height: "45px",minWidth:'373px' }}
        startAdornment={
          <Box sx={{ display: "flex" }}>
            <InputAdornment
              position="start"
              sx={{ "& .css-1pnmrwp-MuiTypography-root": { color: "#2584d3" } }}
            >
              Splash
            </InputAdornment>
            <InputAdornment position="start">
              / Personal Information
            </InputAdornment>
          </Box>
        }
        disabled
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p className="helloStyle" >Hello Kishore</p>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "13px",
              fontWeight: 1000,
              minWidth:'max-content'
            }}
          >
            STEP 01/09
          </Typography>
          <Typography sx={{ fontSize: "13px",minWidth:'max-content' }}>
            Complete to win 10vcoins
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography className="fontStyle" sx={{minWidth:'max-content'}}>
          Which language you prefer to learn?
        </Typography>
        <CustomSelect
          placeholder="Please select your language"
          selectData={languageArr}
          setAllInformation={setAllInformation}
          AllInformation={AllInformation}
          name="language"
          sx={{minWidth:'max-content'}}
        />
      </Box>
      <Box>
        <Typography className="fontStyle" sx={{minWidth:'max-content'}}>where are you from?</Typography>
        <CustomSelect
          placeholder="select your location"
          selectData={locationArr}
          setAllInformation={setAllInformation}
          AllInformation={AllInformation}
          name="location"
          
        />
      </Box>
      <OutlinedInput
        sx={{ background: "#00408e", height: "40px",minWidth:'225px' }}
        startAdornment={
          <Box sx={{ display: "contents" }}>
            <MyLocationIcon sx={{ color: "white" }} />
            <InputAdornment
              position="start"
              sx={{
                "& .css-1pnmrwp-MuiTypography-root": {
                  color: "white",
                  fontSize: "14px",
                },
              }}
            >
              Auto Detect your location
            </InputAdornment>
          </Box>
        }
        disabled
      />

      <CustomTextField
        heading="Login Id / Email id"
        placeholder="enter your Login / email id"
        setAllInformation={setAllInformation}
        AllInformation={AllInformation}
        name="email"
      />

      <CustomTextField
        heading="By what name your friends knows you"
        placeholder="enter your name"
        setAllInformation={setAllInformation}
        AllInformation={AllInformation}
        name="name"
      />

      <CustomTextField
        heading=" How you want unknow people Vridhee to know you"
        placeholder="enter your nickname if you have any"
        setAllInformation={setAllInformation}
        AllInformation={AllInformation}
        name="nickname"
      />
      <Box>
        <Typography className="fontStyle" sx={{minWidth:'max-content'}} >
          when can we wish you happy birthday
        </Typography>
        <DatePicker
          onChange={getDate}
          sx={{
            "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
              height: "45px",
            },
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Box>
    </Box>
  );
};
export default Information;
