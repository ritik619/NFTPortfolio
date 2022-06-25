import { Grid } from "@mui/material";
import React from "react";
import ItemScreen from "./ItemScreen";
import SideBar from "./SideBar";

type Props = {};

const MainScreen = (props: Props) => {
  return (
    <Grid container>
      <Grid item lg={3} textAlign="center">
        <SideBar />
      </Grid>
      <Grid item lg={9} textAlign="center">
        <ItemScreen />
      </Grid>
    </Grid>
  );
};

export default MainScreen;
