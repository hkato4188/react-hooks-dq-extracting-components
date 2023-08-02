import React from "react";

function MessageLi({ name, type, content }) {
  console.log(name, type, content);
  return (
    <li className={`message ${type}`}>
      <div className="icon">{name[0].toUpperCase()}</div>
      <span className="content">{content}</span>
    </li>
  );
}

export default MessageLi;
