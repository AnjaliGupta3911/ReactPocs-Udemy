export default function Stats({ itemList }) {
  let packedCount = 0;
  itemList.forEach((iObj) => {
    if (iObj.packed === true) packedCount++;
  });

  return (
    <h3 className="stats">
      🧳 You have {itemList.length} items on your list, and you have already
      packed {packedCount} (
      {itemList.length == 0 ? 0 : (packedCount * 100) / itemList.length}%)
    </h3>
  );
}
