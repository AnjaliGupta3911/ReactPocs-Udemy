import { useState } from "react";

import Bill from "./Bill";
import Payment from "./Payment";
import Rating from "./Rating";

function App() {
  const [bill, setBill] = useState("");
  const [selfRating, setSelfRating] = useState(0);
  const [friendRating, setFriendfRating] = useState(0);

  function onReset() {
    setBill("");
    setSelfRating(0);
    setFriendfRating(0);
  }
  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Rating rating={selfRating} setRating={setSelfRating}>
        <p>How did you like the service</p>
      </Rating>
      <Rating rating={friendRating} setRating={setFriendfRating}>
        <p>How did your friend like the service</p>
      </Rating>
      <Payment
        bill={bill}
        selfRating={selfRating}
        friendRating={friendRating}
      />
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
