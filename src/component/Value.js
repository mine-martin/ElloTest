import React from "react";
import { useMatch } from "react-router-dom";

//component to display each token value from the token page
const Value = (props) => {
  const {
    params: { value },
  } = useMatch(`/token/:value`);

  return (
    <>
      <div className="linkHome">
        <a href="/" className="Links1">
          Home
        </a>
      </div>
      <div className=" box">
        <h2>Token</h2>
        <p>Token Value: {value}</p>
      </div>
    </>
  );
};

export default Value;
