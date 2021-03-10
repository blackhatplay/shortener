import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import bulb from "../assets/bulb.png";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  jumboText: {
    fontWeight: "bold",
    color: "#000",
    "& span": {
      color: theme.palette.primary.main,
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container className={classes.root}>
        <Grid item md={6}>
          <img src={bulb} alt="bulb " />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h2" className={classes.jumboText}>
            Corte - <span>Cut</span>
          </Typography>
          <Typography paragraph className={classes.jumboText}>
            Corte means cut in spanish, this is how we Corte came up
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
