import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./MenuItem.css";

export const MenuItem = ({
  name = "placeholer",
  icon,
  noLabel = false,
  route,
  onClickProp,
}) => {
  if (route) {
    return (
      <Link to={route} className="menu-item">
        <FontAwesomeIcon size={"lg"} icon={icon} fixedWidth />
        {!noLabel && <label>{name}</label>}
      </Link>
    );
  } else {
    return (
      <div className="menu-item">
        <FontAwesomeIcon
          onClick={onClickProp}
          size={"lg"}
          icon={icon}
          fixedWidth
        />
        {!noLabel && <label>{name}</label>}
      </div>
    );
  }
};

export default MenuItem;
