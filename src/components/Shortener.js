import {
  Button,
  Container,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import ShortenResult from "./ShortenResult";
import server from "../api/server";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    padding: "2rem 0",
  },
  input: {
    background: "#fff",
    borderRadius: "10px",
    padding: "0.2rem 1rem",
    flex: 1,
  },
  form: {
    display: "flex",
    gap: "1rem",
  },
}));

const Shortener = () => {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [result, setResult] = useState({});

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    server
      .post("/shorten", { url: input })
      .then((res) => {
        setResult({ nanoid: res.data.nanoid, ogUrl: res.data.ogUrl });
        setInput("");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Paper elevation={0} square className={classes.root}>
      <Container maxWidth="md">
        <form action="" className={classes.form}>
          <InputBase
            name="url"
            placeholder="Shoten your link"
            className={classes.input}
            onChange={onChange}
            value={input}
          />
          <Button variant="contained" color="primary" onClick={onClick}>
            Shorten
          </Button>
        </form>
        {Object.keys(result).length > 0 ? (
          <ShortenResult
            ogLink={result.ogUrl}
            shortenLink={`${process.env.REACT_APP_BASE_URL}/${result.nanoid}`}
          />
        ) : null}
      </Container>
    </Paper>
  );
};

export default Shortener;
