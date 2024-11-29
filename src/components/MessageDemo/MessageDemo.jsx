import React from "react";
import "./MessageDemo.css";

const MessageDemo = () => {
  return (
    <div className="message-demo-container">
      <h3>Message Demo</h3>
      <div className="demo-preview">
        <p>
          <strong>Template Name:</strong> Sample Template
        </p>
        <p>
          <strong>Message:</strong> Hello, this is a demo message template.
        </p>
      </div>
    </div>
  );
};

export default MessageDemo;
