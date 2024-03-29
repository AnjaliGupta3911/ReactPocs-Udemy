export default function Bill({ bill, setBill }) {
  return (
    <div>
      <p>How much was the bill</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
    </div>
  );
}
