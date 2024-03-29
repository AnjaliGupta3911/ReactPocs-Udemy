import Friend from "./Friend";

export default function FriendList({
  friends,
  setFriends,
  selectedFriend,
  setSelectedFriend,
}) {
  function handleClose() {
    setSelectedFriend(undefined);
  }

  function handleSelect(id) {
    setSelectedFriend(id);
  }

  return (
    <>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <Friend friend={friend}></Friend>
            {selectedFriend === friend.id ? (
              <button onClick={() => handleClose()} className="button">
                Close
              </button>
            ) : (
              <button
                onClick={() => handleSelect(friend.id)}
                className="button"
              >
                Select
              </button>
            )}
          </li>
        );
      })}
    </>
  );
}
