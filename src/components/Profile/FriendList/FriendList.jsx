import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.name}>
          <FriendListItem
            name={friend.name}
            image={friend.image}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

