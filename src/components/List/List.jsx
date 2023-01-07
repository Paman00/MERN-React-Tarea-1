import UserCard from "../UserCard/UserCard";
import s from "./style.module.css";

export default function List({ users, deleteUser }) {
	return (
		<div className={s.list}>
			{users.map((user) => (
				<UserCard key={user.id} user={user} deleteUser={deleteUser} />
			))}
		</div>
	);
}
