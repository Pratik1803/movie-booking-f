import React from "react";
import Styles from "../../styles/comp_styles/header.module.scss";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";

function Header() {
  return (
    <header className={Styles.header}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <h1>MovieB</h1>
        <Link href={"/bookings"} passHref>
          <Button>Bookings</Button>
        </Link>
      </Stack>
    </header>
  );
}

export default Header;
