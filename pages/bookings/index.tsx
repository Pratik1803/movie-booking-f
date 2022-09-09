import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Header from "../../components/header/header";
import Styles from "../../styles/pages_styles/booking.module.scss";

// Summary of bookings

function index() {
  return (
    <>
      <Header />
      <section className={Styles.bookings}>
        <div className={Styles.user_details_wrapper}>
          <h1>Your Bookings:</h1>
          <br />
          <div className={Styles.user_details}>
            <p>Name:</p>
            <h3>Pratik Vaidya</h3>
            <br />
            <p>Email:</p>
            <h3>prtk@gmail.com</h3>
            <br />
            <p>Contact:</p>
            <h3>9807654321</h3>
          </div>
        </div>
        <div className={Styles.bookings_wrapper}>
          <div className={Styles.booking}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <h3>[City Name]</h3>
              <p>
                <strong>[Date]</strong>
              </p>
            </Stack>
            <p>
              <strong>Seat Nos.:</strong> 1, 2, 3, 4, 5, 6, 7 ,8{" "}
            </p>
            <br />
            <div className={Styles.cancel_btn}>
              <Button>Cancel</Button>
            </div>
          </div>
          <div className={Styles.booking}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <h3>[City Name]</h3>
              <p>
                <strong>[Date]</strong>
              </p>
            </Stack>
            <p>
              <strong>Seat Nos.:</strong> 1, 2, 3, 4, 5, 6, 7 ,8{" "}
            </p>
            <br />
            <div className={Styles.cancel_btn}>
              <Button>Cancel</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
