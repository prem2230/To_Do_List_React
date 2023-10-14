import React from "react";
import { ItemList } from "./ItemList";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p> The List Is Empty</p>
      )}
    </>
  );
};

export default Content;
