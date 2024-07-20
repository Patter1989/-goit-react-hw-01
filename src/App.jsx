import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/Profile/FriendList/FriendList.jsx";
import userData from "./backend-data/userData.json";
import friends from "./backend-data/friends.json";

const App = () => {
	return (
		<>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
			/>
			<FriendList friends={friends} />
		</>
	);
};

export default App;



