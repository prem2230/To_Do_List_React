import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      {" "}
      The List Has {length} {length === 1 ? "Item" : "items"}
    </footer>
  );
};

export default Footer;
