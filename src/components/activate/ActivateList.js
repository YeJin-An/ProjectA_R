import React from "react";

const ActivateList = ({ activate }) => {
  return (
    <>
      {activate.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </>
  );
};

export default ActivateList;
