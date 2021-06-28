import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from "./DemoOutput";
import './App.css';
function App() {
  console.log("APP RUNNING");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  // useCallback decides to either create a new function or not on every execution of App function
  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(showParagraph => !showParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(allowToggle => !allowToggle, true);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput showParagraph={showParagraph} />
      <Button btnId="1" onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button btnId="2" onClick={toggleHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
