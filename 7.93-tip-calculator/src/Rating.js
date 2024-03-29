export default function Rating({ children, rating, setRating }) {
  return (
    <div>
      {children}
      <select
        className="select"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>It was amazing (20%)</option>
      </select>
    </div>
  );
}
