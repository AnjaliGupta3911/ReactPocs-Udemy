import { useState } from "react";

let idx = 0;

export default function Form({ updateList }) {
  const [qty, setQty] = useState(1);
  const [text, setText] = useState("");

  function handleFormSubmission(e) {
    e.preventDefault();
    ++idx;
    let newObj = {
      id: idx,
      item: text,
      qty: qty,
      packed: false,
    };
    updateList(newObj);
    setText("");
    setQty(1);
  }

  return (
    <div className="add-form">
      <span>What do you need for your 😍 trip? </span>
      <form
        onSubmit={(e) => {
          handleFormSubmission(e);
        }}
      >
        <select
          className="select"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Items.."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Add" className="button" />
      </form>
    </div>
  );
}
