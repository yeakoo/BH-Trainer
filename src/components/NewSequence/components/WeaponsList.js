import React from "react";

const WeaponsMap = (legend) => {
  return (
    <>
      <option value={legend.weapon_one}>{legend.weapon_one}</option>
      <option value={legend.weapon_two}>{legend.weapon_two}</option>
    </>
  );
};

export const WeaponsList = ({ legend }) => {
  return <>{WeaponsMap(legend)}</>;
};

export default WeaponsList;
