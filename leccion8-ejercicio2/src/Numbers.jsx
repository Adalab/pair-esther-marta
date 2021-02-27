import React, { useState } from "react";
import "./main.css";

function Numbers() {
  const [age, setAge] = useState(27);
  const handleAge = () => {
    setAge(age + 1);
  };
}

export default Numbers;
