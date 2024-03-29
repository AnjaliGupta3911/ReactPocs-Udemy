import { useState } from "react";
import InviteFriend from "./InviteFriend";
import FriendList from "./FriendList";
import SplitWindow from "./SplitWindow";

function App() {
  const [friends, setFriends] = useState([]);
  const [displayAddFriend, setADisplayAddFriend] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(undefined);

  function getFriend(id) {
    return friends.filter((friend) => friend.id == id)[0];
  }

  function updateOwedAmt(id, amt) {
    setFriends(
      friends.slice().map((friend) => {
        if (friend.id === id) {
          friend.amtToBePaidToThem = friend.amtToBePaidToThem + amt;
          return friend;
        } else return friend;
      })
    );
  }

  return (
    <div className="app">
      <ul className="sidebar">
        <FriendList
          friends={friends}
          setFriends={setFriends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
        {displayAddFriend == true ? (
          <button
            onClick={() => setADisplayAddFriend((prevValue) => !prevValue)}
            className="button"
          >
            Add Friend
          </button>
        ) : (
          <>
            <InviteFriend friends={friends} setFriends={setFriends} />
            <button
              onClick={() => setADisplayAddFriend((prevValue) => !prevValue)}
              className="button"
            >
              Close
            </button>
          </>
        )}
      </ul>
      {selectedFriend >= 0 ? (
        <SplitWindow
          friend={getFriend(selectedFriend)}
          updateOwedAmt={updateOwedAmt}
        />
      ) : null}
    </div>
  );
}

export default App;
