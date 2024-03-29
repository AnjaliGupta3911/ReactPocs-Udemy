export default function Payment({ bill, selfRating, friendRating }) {
  if (!bill) return <></>;

  let tip = (bill * (selfRating + friendRating)) / 200;
  let totalAmt = Number(bill) + Number(tip);
  return (
    <div>
      <p>
        You pay Rs.{totalAmt} (Rs.{bill} + Rs.{tip} tip)
      </p>
    </div>
  );
}
