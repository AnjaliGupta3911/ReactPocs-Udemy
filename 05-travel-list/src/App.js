import Logo from "./Logo";
import Stats from "./Stats";
//import PackingList from "./PackingList";
import { useState } from "react";

let idx = 0;

function App() {
  const [itemList, setItemList] = useState([]);

  function List({ itemObj }) {
    function handleCheckBox() {
      setItemList((prevItemList) => {
        return prevItemList.map((iObj) => {
          if (iObj.id == itemObj.id) iObj.packed = !iObj.packed;
          return iObj;
        });
      });
    }

    function removeItem() {
      setItemList((prevItemList) => {
        return prevItemList.filter((iObj) => iObj.id !== itemObj.id);
      });
    }

    return (
      <div>
        <input type="checkbox" onChange={handleCheckBox} />
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
        <button onClick={removeItem}>❌</button>
      </div>
    );
  }

  function PackingList() {
    function clearList() {
      setItemList([]);
    }

    function sortList(e) {
      const sortSelected = e.target.value;
      console.log(sortSelected);

      let arr = itemList.slice();
      if (sortSelected === "input") {
        arr.sort((a, b) => a.id - b.id);
      } else if (sortSelected === "descr") {
        arr.sort((a, b) => a.item.localeCompare(b.item));
      } else {
        arr.sort((a, b) => {
          if (a.packed && !b.packed) return -1;
          else if (!a.packed && b.packed) return 1;
          else return 0;
        });
      }
      setItemList(arr);
    }

    return (
      <div className="list">
        <li>
          {itemList.map((itemObj) => (
            <List itemObj={itemObj} key={itemObj.id} />
          ))}
        </li>

        <select className="sort" onChange={sortList} id="sort">
          <option>Select the sort</option>
          <option value="input">Sort By Input Order</option>
          <option value="descr">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    );
  }

  function Form() {
    function handleFormSubmission(e) {
      e.preventDefault();
      const selectValue = e.target.querySelector(".select").value;
      const inputValue = e.target.querySelector(".input").value;
      ++idx;
      let newObj = {
        id: idx,
        item: inputValue,
        qty: selectValue,
        packed: false,
      };
      setItemList((prevItemList) => [...prevItemList, newObj]);
    }

    return (
      <div className="add-form">
        <span>What do you need for your 😍 trip? </span>
        <form
          onSubmit={(e) => {
            handleFormSubmission(e);
          }}
        >
          <select className="select">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option key={num}>{num}</option>
            ))}
          </select>
          <input type="text" placeholder="Items.." className="input" />
          <input type="submit" value="Add" className="button" />
        </form>
      </div>
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats itemList={itemList} />
    </div>
  );
}

export default App;
