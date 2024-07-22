import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import Section from "./components/Section/Section.jsx";
import userData from "./backend-data/userData.json";
import friends from "./backend-data/friends.json";
import transactions from "./backend-data/transactions.json"


const App = () => {
	return (
		<>
			<section>
				<Profile
					name={userData.username}
					tag={userData.tag}
					location={userData.location}
					image={userData.avatar}
					stats={userData.stats}
				/>
			</section>
			<section>
				<FriendList friends={friends} />
			</section>
			<section>
				<TransactionHistory items={transactions} />
			</section>
		</>
	);
};

export default App;



