import { useState } from "react";
import List from "./List";

function sortList(sortedList, sortSelection) {
  if (sortSelection === "input") {
    sortedList.sort((a, b) => a.id - b.id);
  } else if (sortSelection === "descr") {
    sortedList.sort((a, b) => a.item.localeCompare(b.item));
  } else {
    sortedList.sort((a, b) => {
      if (a.packed && !b.packed) return -1;
      else if (!a.packed && b.packed) return 1;
      else return 0;
    });
  }
}

export default function PackingList({
  itemList,
  clearList,
  removeItem,
  handleCheckBox,
}) {
  const [sortSelection, setSortSelection] = useState("input");

  let sortedList = itemList.slice();
  sortList(sortedList, sortSelection);
  return (
    <div className="list">
      <li>
        {sortedList.map((itemObj) => (
          <List
            itemObj={itemObj}
            key={itemObj.id}
            handleCheckBox={handleCheckBox}
            removeItem={removeItem}
          />
        ))}
      </li>

      <select
        className="sort"
        onChange={(e) => {
          setSortSelection(e.target.value);
        }}
        id="sort"
        value={sortSelection}
      >
        <option>Select the sort</option>
        <option value="input">Sort By Input Order</option>
        <option value="descr">Sort By Description</option>
        <option value="packed">Sort By Packed Status</option>
      </select>
      <button onClick={clearList}>Clear List</button>
    </div>
  );
}
