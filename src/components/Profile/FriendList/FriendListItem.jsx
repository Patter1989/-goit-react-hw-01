const FriendListItem = (image, name, isOnline) => {
  return (
				<div>
					<img
						src={image}
						alt='Avatar'
						width='48'
					/>
					<p>{name}</p>
					<p>{isOnline}</p>
				</div>
	);
};

export default FriendListItem;