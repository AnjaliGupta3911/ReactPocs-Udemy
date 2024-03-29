import { useState } from "react";
let id = 0;
export default function InviteFriend({ friends, setFriends }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://");
  function addFriend(e) {
    e.preventDefault();
    let newFriend = {
      id: id,
      name: name,
      url: url,
      amtToBePaidToThem: 0,
    };
    setFriends([...friends, newFriend]);
    setName("");
    setUrl("https://");
    id++;
  }

  return (
    <>
      <form onSubmit={(e) => addFriend(e)} className="form-add-friend">
        Friend Name{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Image URL{" "}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="button">Add</button>
      </form>
    </>
  );
}
