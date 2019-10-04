import React from "react";

const SingleTodoItem = ({ item, handleComplete, handleRemove }) => {
  return (
    <li className="list-group-item" style={item.isComplete?{color: 'Green' }:{color: 'Black' }} >
      <span onClick={() => handleComplete(item)} style={{ marginRight: 10 }}>
        <i
          className={
            item.isComplete
              ? "fa fa-check-circle-o fa-lg done"
              : "fa fa-circle-thin fa-lg"
          }
        ></i>
      </span>
      {item.title}
      <span
        className="hover-cursor text-danger pull-right"
        onClick={() => handleRemove(item)}
      >
        <i className="fa fa-trash-o fa-lg"></i>
      </span>
    </li>
  );
};

export default SingleTodoItem;
