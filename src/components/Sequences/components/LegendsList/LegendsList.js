import React from "react";

import Legend from "../Legend";

import legends from "./legends.json";

import "./LegendsList.css";

const list = legends.map((legend) => (
  <Legend key={legend.legend_id} legend_info={legend} />
));

export const LegendsList = () => {
  return <div className="legends_list">{list}</div>;
};

export default LegendsList;
