import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import BeerCard from "./BeerCard";

const Body: FC = () => {
  return (
    <Grid
      container
      spacing={4}
      justify="space-evenly"
      alignItems="center"
      style={{ width: "100%", margin: 0 }}
    >
      <Grid item>
        <BeerCard />
      </Grid>
      <Grid item>
        <BeerCard />
      </Grid>
      <Grid item>
        <BeerCard />
      </Grid>
      <Grid item>
        <BeerCard />
      </Grid>
      <Grid item>
        <BeerCard />
      </Grid>
    </Grid>
  );
};

export default Body;
