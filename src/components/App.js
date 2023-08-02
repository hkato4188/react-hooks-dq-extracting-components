import React from "react";

import NavBar from "./NavBar";
import MessageDisplay from "./MessageDisplay";

// console.log("Messages:", messages);
// console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <NavBar />

      <main>
        <MessageDisplay />
      </main>
    </div>
  );
}

export default App;
