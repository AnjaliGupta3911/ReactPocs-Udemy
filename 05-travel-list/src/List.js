export default function List({ itemObj, removeItem, handleCheckBox }) {
  return (
    <div>
      <input type="checkbox" onChange={() => handleCheckBox(itemObj.id)} />
      <span>
        {itemObj.packed ? (
          <s>
            {itemObj.qty} {itemObj.item}
          </s>
        ) : (
          <>
            {itemObj.qty} {itemObj.item}
          </>
        )}
      </span>
      <button onClick={() => removeItem(itemObj.id)}>❌</button>
    </div>
  );
}
