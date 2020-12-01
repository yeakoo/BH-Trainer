import React from "react";
import legends from "../../../data/legends.json";

const LegendsMap = legends.map((legend) => {
  return (
    <option key={legend.legend_id} value={legend.legend_name_key}>
      {legend.bio_name}
    </option>
  );
});

export const LegendsList = () => {
  return <>{LegendsMap}</>;
};

export default LegendsList;
