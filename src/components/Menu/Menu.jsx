import CreateUser from "../CreateUser/CreateUser";
import s from "./style.module.css";

export default function Menu({ newUser }) {
	return (
		<div className={s.menu}>
			<h2>Cree un nuevo usuario</h2>
			<CreateUser newUser={newUser} />
		</div>
	);
}
