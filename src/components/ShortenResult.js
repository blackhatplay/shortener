import React from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";

import {
  Box,
  IconButton,
  InputBase,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  shorenResult: {
    margin: "1rem 0",
    padding: "1rem",
  },
  inline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ogLink: {
    fontSize: "0.9rem",
    width: "50%",
  },
  ogText: {
    fontSize: "0.9rem",
  },
  shortenLink: {
    color: `${theme.palette.primary.main}!important`,
    width: "50%",
  },
  inputGroup: {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& div": {
      display: "flex",
      alignItems: "center",
    },
  },
}));

const ShortenResult = (props) => {
  const classes = useStyle();

  const { ogLink, shortenLink } = props;

  const onClick = async (e, text) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <Paper elevation={0} className={classes.shorenResult}>
      <Box component="div" className={classes.inline}>
        <Typography>Shortened Url:</Typography>
        <div className={classes.inputGroup}>
          <InputBase
            className={classes.shortenLink}
            disabled
            value={shortenLink}
          />
          <div>
            <IconButton
              aria-label="copy"
              onClick={(e) => onClick(e, shortenLink)}
            >
              <FileCopyIcon />
            </IconButton>
            <Link color="inherit" href={shortenLink} target="_blank">
              <ScreenShareIcon />
            </Link>
          </div>
        </div>
      </Box>

      <Box component="div" className={classes.inline}>
        <Typography className={classes.ogText}>Original Url:</Typography>
        <InputBase className={classes.ogLink} disabled value={ogLink} />
      </Box>
    </Paper>
  );
};

export default ShortenResult;
