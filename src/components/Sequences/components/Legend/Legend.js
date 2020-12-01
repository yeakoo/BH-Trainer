import React from "react";

import "./Legend.css";

export const Legend = ({ legend_info }) => {
  const path = `${process.env.PUBLIC_URL}/assets/icons/legends/${legend_info.bio_name}.png`;
  return (
    <div className="legend">
      <div>{legend_info.bio_name}</div>
      <img
        className="legend_image"
        src={path}
        alt={legend_info.legend_name_key}
      />
    </div>
  );
};

export default Legend;
