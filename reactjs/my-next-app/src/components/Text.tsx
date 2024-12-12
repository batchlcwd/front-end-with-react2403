"use client";
import React, { useState } from "react";

const Text = () => {
  const [textValue, setTextValue] = useState();
  return (
    <div
      onClick={() => {
        alert("this is click button");
      }}
      className="p-4 bg-gray-700 rounded"
    >
      <h1>Heading</h1>
      <p>This is text</p>
    </div>
  );
};

export default Text;
