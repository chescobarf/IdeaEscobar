import React from "react";

function Container({ children, extraStyle }) {
  return (
    <div className={`container my-0 mx-auto ${extraStyle}`}>{children}</div>
  );
}

export default Container;
