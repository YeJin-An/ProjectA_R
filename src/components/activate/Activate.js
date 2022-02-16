import React, {useEffect } from "react";

const Activate = () => {
    useEffect(()=> {
      axios.get("http://127.0.0.1:8000/notice/api/notices")
      .then(response => {
        console.log(response);
      })
    }, [])
  });



  return (
    <>
      <p>hello</p>
    </>
  );
};

export default Activate;
