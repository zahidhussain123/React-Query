import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "lightblue",
    width: "100%",
    height: "50px",
    alignItems: "center",
    textDecoration: "none",
    textStyle: "none",
  };
  return (
    <div>
      <div style={styles}>
        <Link to="/" className="mx-2">
          React Query
        </Link>
        <Link to="/homepage" className="mx-2">
          Homepage
        </Link>
        <Link to="/homequery" className="p-2">
          Homepage Query
        </Link>
      </div>
    </div>
  );
};

export default Header;
