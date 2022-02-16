import React, { useState, useEffect } from "react";
import axios from "axios";
import ActivateList from "./Activate";

const Activate = () => {
  const [activate, setactivate] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/notice/api/notices").then((response) => {
      setactivate(response.data);
    });
  }, []);

  return (
    <>
      <ActivateList users={activate} />
    </>
  );
};

export default Activate;
