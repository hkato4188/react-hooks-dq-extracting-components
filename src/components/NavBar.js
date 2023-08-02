import React from "react";
import Contact from "./Contact";
import { contacts } from "../data";

function NavBar() {
  const displayedContacts = contacts.map((contact) => {
    return <Contact key={contact.id} name={contact.name} />;
  });

  return <nav>{displayedContacts}</nav>;
}

export default NavBar;
