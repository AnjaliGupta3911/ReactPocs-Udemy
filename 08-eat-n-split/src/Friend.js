export default function Friend({ friend }) {
  return (
    <>
      <h3>{friend.name}</h3>
      {friend.amtToBePaidToThem === 0 && (
        <p style={{ color: "black" }}>You and {friend.name} are even</p>
      )}
      {friend.amtToBePaidToThem < 0 && (
        <p style={{ color: "green" }}>
          {friend.name} owes you Rs. {Math.abs(friend.amtToBePaidToThem)}
        </p>
      )}
      {friend.amtToBePaidToThem > 0 && (
        <p style={{ color: "red" }}>
          You owe {friend.name} Rs. {Math.abs(friend.amtToBePaidToThem)}
        </p>
      )}
    </>
  );
}
