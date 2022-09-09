import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Styles from "../../styles/pages_styles/home.module.scss";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

// home page where the booking is made

function index() {
  const router = useRouter();
  const [city, setCity] = useState("mumbai");
  const [date, setDate] = React.useState<Dayjs | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  const seats = [];
  for (let i = 0; i < 25; i++) {
    seats.push(i);
  }

  useEffect(() => {
    router.push(`/home/${city}`);
  }, [city]);

  return (
    <>
      <Header />
      <div className={Styles.home}>
        <div className={Styles.wrapper}>
          <div className={Styles.select_fields}>
            <p>Some random quote related to movies.</p>
            <Stack>
              <p>Select City:</p>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    label="City"
                    onChange={handleChange}
                  >
                    <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"delhi"}>Delhi</MenuItem>
                    <MenuItem value={"indore"}>Indore</MenuItem>
                    <MenuItem value={"pune"}>Pune</MenuItem>
                    <MenuItem value={"chennai"}>Chennai</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
            <Stack>
              <p>Select Date:</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Stack>
          </div>
          <div className={Styles.seat_allocations}>
            <div className={Styles.screen} />
            <div className={Styles.seats}>
              {seats.map((ele, index) => {
                return (
                  <div
                    className={`${Styles.seat} ${
                      index == 7 ? Styles.booked : ""
                    } ${index === 17 && Styles.user_booked}`}
                  >
                    <h3>{index}</h3>
                  </div>
                );
              })}
            </div>
            <div className={Styles.confirm_btn}>
              <Button>Confirm</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
