import React, { useState } from "react";

function App() {
  const [value1, setValue1] = useState("default");
  const [value2, setValue2] = useState("default");

  const handleChatSearch = (e: any) => {
    let randomString = `${(Math.random() + 1).toString(36).substring(7)}`;
    let randomNumber = `${Math.floor(Math.random() * 10)}`;
    let value = `Found ${randomNumber} results for ${randomString}`;
    setValue1(value);
  };

  const handleChatSearch2 = (e: any) => {
    let randomString = `${(Math.random() + 1).toString(36).substring(7)}`;
    let randomNumber = `${Math.floor(Math.random() * 10)}`;
    let value2 = `Found ${randomNumber} results for ${randomString}`;
    setValue2(value2);
  };

  return (
    <>
      <button onClick={handleChatSearch}>
        Click to search when aria-atomic=true
      </button>
      <div role="status" aria-atomic="true">
        {value1}
      </div>

      <button onClick={handleChatSearch2}>
        Click to search when aria-atomic=false
      </button>
      <div role="status">{value2}</div>
    </>
  );
}

export default App;
