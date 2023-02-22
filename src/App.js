import './App.css';
import { useState, useEffect, useRef } from "react";;
function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  
  return (
    <div className="App">
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
    </div>
  );
}

export default App;
