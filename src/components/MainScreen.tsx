import { Grid } from "@mui/material";
import React from "react";
import ItemScreen from "./ItemScreen";
import SideBar from "./SideBar";

type Props = {};

const MainScreen = (props: Props) => {
  return (
    <Grid container>
      <SideBar />
      <ItemScreen />
    </Grid>
  );
};

export default MainScreen;
