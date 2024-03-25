export default function Stats({ itemList }) {
  let packedCount = 0;
  itemList.forEach((iObj) => {
    if (iObj.packed === true) packedCount++;
  });

  return (
    <footer className="stats">
      🧳 You have {itemList.length} items on your list, and you have already
      packed {packedCount} (
      {itemList.length == 0 ? 0 : (packedCount * 100) / itemList.length}%)
    </footer>
  );
}
