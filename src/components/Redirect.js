import React, { useEffect, useState } from "react";
import server from "../api/server";

const Redirect = ({ match }) => {
  const { id } = match.params;

  const [url, setUrl] = useState(null);

  useEffect(() => {
    server
      .get(`/shorten/${id}`)
      .then((res) => {
        setUrl(res.data.ogUrl)((window.location = res.data.ogUrl));
      })
      .catch((err) => console.log(err.response));
  }, [id]);

  return <div>redirecting {url}</div>;
};

export default Redirect;
