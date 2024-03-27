import { useState } from "react";

import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";

function App() {
  const [itemList, setItemList] = useState([]);

  function updateList(newObj) {
    setItemList((prevItemList) => [...prevItemList, newObj]);
  }

  function clearList() {
    setItemList([]);
  }

  function removeItem(id) {
    setItemList((prevItemList) => {
      return prevItemList.filter((iObj) => iObj.id !== id);
    });
  }

  function handleCheckBox(id) {
    setItemList((prevItemList) => {
      return prevItemList.map((iObj) => {
        if (iObj.id === id) iObj.packed = !iObj.packed;
        return iObj;
      });
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form updateList={updateList} />
      <PackingList
        clearList={clearList}
        itemList={itemList}
        removeItem={removeItem}
        handleCheckBox={handleCheckBox}
      />
      <Stats itemList={itemList} />
    </div>
  );
}

export default App;
