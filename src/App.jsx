import Header from "./components/Header";
import User from "./components/User";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputDurationValid =
    userInput.duration >= 1 &&
    userInput.initialInvestment >= 1 &&
    userInput.annualInvestment >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      const updatedValue = newValue === "" ? newValue : +newValue;
      return {
        ...prevInput,
        [inputIdentifier]: updatedValue,
      };
    });
  }
  return (
    <>
      <Header />
      <User onChange={handleChange} userInput={userInput} />
      {inputDurationValid ? (
        <Result userResults={userInput} />
      ) : (
        <p className="center">Please fill in all fields</p>
      )}
    </>
  );
}

export default App;
