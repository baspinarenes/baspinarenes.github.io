import { Link } from "gatsby";
import React from "react";

const Navlink = ({ path, title }) => {
  return (
    <Link className="nav-link" to={path} activeClassName="nav-link--active">
      {title}
    </Link>
  );
};

export default Navlink;
