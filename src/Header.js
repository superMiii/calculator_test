import React from "react";

function Header({ number, title }) {
  return (
    <>
      <div className="display-content">
        <p id="displayTitle">{title}</p> <hr />
        <p id="displayNumber">{number}</p>
      </div>
    </>
  );
}

export default Header;
