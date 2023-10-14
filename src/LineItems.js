import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const LineItems = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
      <FaTrashAlt
        role="button"
        onClick={() => handleDelete(item.id)}
        className="btn"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};
export default LineItems;
