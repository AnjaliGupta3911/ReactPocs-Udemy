import { useState } from "react";

export default function SplitWindow({ friend, updateOwedAmt }) {
  const [billAmt, setBillAmt] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [userPaidBill, setUserPaidBill] = useState("true");
  let friendExpense = billAmt - userExpense;
  function handleFormSubmission(e) {
    e.preventDefault();

    if (userPaidBill == "true") {
      updateOwedAmt(friend.id, friendExpense * -1);
    } else {
      updateOwedAmt(friend.id, userExpense);
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => handleFormSubmission(e)}
        className="form-split-bill"
      >
        <h2>Split a bill with {friend.name}</h2>
        Bill value
        <input
          type="text"
          value={billAmt}
          onChange={(e) => setBillAmt(Number(e.target.value))}
        />
        Your expense
        <input
          type="text"
          value={userExpense}
          onChange={(e) => setUserExpense(Number(e.target.value))}
        />
        {friend.name}'s expense
        <input type="text" value={friendExpense} readOnly={true} />
        Who's paying the bill?
        <select
          value={userPaidBill}
          onChange={(e) => setUserPaidBill(e.target.value)}
        >
          <option value={"true"}> You</option>
          <option value={"false"}> {friend.name}</option>
        </select>
        <button className="button">Split Bill</button>
      </form>
    </div>
  );
}
