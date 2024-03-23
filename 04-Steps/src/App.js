import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Button(props) {
  return (
    <button
      className="button"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      {props.lable}
    </button>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setOpen] = useState(true);

  function goToPrevious() {
    setStep((currentStep) => {
      if (currentStep == 0) return 0;
      return currentStep - 1;
    });
  }

  function goToNext() {
    setStep((currentStep) => {
      if (currentStep == 2) return 2;
      return currentStep + 1;
    });
  }

  function closeWindow() {
    setOpen(!isOpen);
  }

  return (
    <div>
      <button className="close" onClick={closeWindow}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 && "active"}>1</div>
            <div className={step >= 1 && "active"}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>

          <div className="message">
            <p>
              Step {step + 1}: {messages[step]}
            </p>
          </div>

          <div className="buttons">
            <button
              className="button"
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={goToPrevious}
            >
              Previous
            </button>
            <button
              className="button"
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={goToNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
