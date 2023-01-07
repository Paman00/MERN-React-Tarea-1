import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
import { users as data } from "./data/users";
import { useState, useEffect } from "react";
import s from "./style.module.css"

function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		setUsers(data);
	}, []);
	// const [currentUser, setCurrentUser] = useState({});

	const newUser = ({ name, age, yearsPrograming, senior }) => {
		setUsers([
			...users,
			{
				id: users.length,
				name,
				age,
				yearsPrograming,
				senior,
			},
		]);
	};
	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	return (
		<div className={s.main_container}>
			<Menu newUser={newUser} />
			<List users={users} deleteUser={deleteUser} />
		</div>
	);
}

export default App;
