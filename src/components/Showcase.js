import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "url('/main-art.png') no-repeat",
    backgroundPosition: "right",
    backgroundSize: "50%",
  },
  jumboText: {
    fontWeight: "bold",
    color: "#000",
  },
});

const Showcase = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container>
        <Grid item md={8}>
          <Typography variant="h2" className={classes.jumboText}>
            Short links, Big results
          </Typography>
          <Typography paragraph className={classes.jumboText}>
            url shortner , powerful, easy and essential tool to grow and
            prottect your brand
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Showcase;
