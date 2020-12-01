import React from "react";

import {
  faTimes,
  faArrowDown,
  faArrowUp,
  faArrowLeft,
  faArrowRight,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { deleteSequenceById } from "../../../../api";

import "./SequencesArray.css";

const DodgeIcon = ({ dodge }) => {
  switch (dodge) {
    case "spot":
      return <FontAwesomeIcon icon={faDotCircle} />;
    case "up":
      return <FontAwesomeIcon icon={faArrowUp} />;
    case "down":
      return <FontAwesomeIcon icon={faArrowDown} />;
    case "left":
      return <FontAwesomeIcon icon={faArrowLeft} />;
    case "right":
      return <FontAwesomeIcon icon={faArrowRight} />;
    case "up-left":
      return <FontAwesomeIcon icon={faArrowLeft} rotation="45" />;
    case "up-right":
      return <FontAwesomeIcon icon={faArrowRight} />;
    case "down-left":
      return <FontAwesomeIcon icon={faArrowLeft} />;
    case "down-right":
      return <FontAwesomeIcon icon={faArrowRight} />;
    default:
      return "";
  }
};

export const SequencesArray = ({ sequences }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Legend</th>
            <th>Weapon</th>
            <th>Sequence</th>
            <th>Recovery</th>
            <th>Jumps Before</th>
            <th>Dodge</th>
            <th>Direction</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {sequences.map((sequence) => (
            <tr key={sequence._id}>
              <td>{sequence.legend}</td>
              <td>{sequence.weapon}</td>
              <td>{sequence.sequence}</td>
              <td>{sequence.options_before.recovery.toString()}</td>
              <td>{sequence.options_before.jumps}</td>
              <td>
                <DodgeIcon dodge={sequence.reaction.dodge} />
              </td>
              <td>{sequence.reaction.direction}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="delete_icon"
                  style={{ float: "right", marginLeft: "5px", color: "red" }}
                  onClick={() => deleteSequenceById(sequence._id)}
                />
                <button onClick={() => alert(sequence.notes)}>Notes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SequencesArray;
