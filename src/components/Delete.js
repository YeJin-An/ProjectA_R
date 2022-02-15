import React from "react";

const TextItem = ({ text, id, handleClick }) => {
  return (
    <>
      <p>{text}</p>
      <button onClick={() => handleClick(id)}>삭제</button>
    </>
  );
};

export default TextItem;
