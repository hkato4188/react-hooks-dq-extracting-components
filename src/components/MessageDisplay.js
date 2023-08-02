import React from "react";
import MessageForm from "./MessageForm";
import MessageLi from "./MessageLi";
import { messages } from "../data";

//End goal: render several <Message/> components in display
//step1: grab the message data
console.log("Messages:", messages);

//step2: iterate through message data to each message object
//step3: create Message component with each object
//step4: save all messages into a variable
//step5: render messages variable in display

const messageComponents = messages.map((message) => (
  <MessageLi
    key={message.id}
    name={message.name}
    content={message.content}
    type={message.type}
  />
));

function MessageDisplay() {
  return (
    <>
      <h2>Messages</h2>
      <section className="messages">
        <ul>{messageComponents}</ul>
      </section>
      <MessageForm />
    </>
  );
}

export default MessageDisplay;
