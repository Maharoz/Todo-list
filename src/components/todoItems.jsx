import React from "react";
import SingleTodoItem from "./singleTodoItem";

const TodoItems = ({ items, handleComplete, handleRemove }) => {
  const item =
    items.length === 0 ? (
        <li className=" noData list-group-item">No Data Available</li>
    ) : (
      items.map((item, index) => (
        <SingleTodoItem
          key={index}
          item={item}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
        />
      ))
    );
  return (
    <div>
      <ul className="list-group">{item}</ul>
    </div>
  );
};

export default TodoItems;
