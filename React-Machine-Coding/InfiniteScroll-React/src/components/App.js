import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Select from "./Select";

import { searchService } from "../services/serach.service";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    console.log("event:", event.target.value);
    setValue(event?.target?.value);
  };

  return (
    <Select
      id="Select"
      value={value}
      handleChange={handleChange}
      fetchOptions={searchService}
    />
  );
}

export default App;
