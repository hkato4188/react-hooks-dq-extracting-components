import React, { useState } from "react";

function Contact({ name }) {
  const [isActive, setIsActive] = useState(false);

  const contactStyle = isActive ? "active" : "";

  function handleClick() {
    setIsActive(() => !isActive);
  }

  return (
    <li className={`contact ${contactStyle}`} onClick={handleClick}>
      <div className="icon">{name[0].toUpperCase()}</div>
      {name}
    </li>
  );
}

export default Contact;
