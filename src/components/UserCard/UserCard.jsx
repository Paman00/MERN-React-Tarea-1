import { useState } from "react";
import { VscChevronDown, VscChevronUp, VscTrash } from "react-icons/vsc";
import s from "./style.module.css";

export default function UserCard({ user, deleteUser }) {
	const [button, setButton] = useState(false);

	return (
		<div className={s.user_card}>
			<div className={s.first_user_container}>
				<figure className={s.user_img_container}>
					<img
						className={s.user_img}
						src={`https://robohash.org/${user.name}?set=set4`}
						alt="user profile"
					/>
				</figure>
				<div>
					<h2 className={s.user_name}>{user.name}</h2>
				</div>
			</div>
			<div className={s.second_user_container}>
				{button ? (
					<>
						<div className={s.info_user}>
							<p>
								La edad del usuario es: <span>{user.age}</span> años
							</p>
							<p>
								Años programando: {user.yearsPrograming}
								{user.yearsPrograming !== 1 ? " años" : " año"}
							</p>
							<p>
								{user.senior
									? "El usuario es Senior"
									: "El usuario no es Senior"}
							</p>
						</div>
						<button
							className={s.button_delete}
							onClick={() => deleteUser(user.id)}
						>
							<VscTrash /> Eliminar usuario 
						</button>
					</>
				) : (
					<></>
				)}
			</div>
			<div>
				<button
					className={s.button_see_info}
					onClick={() => {
						setButton(button ? false : true);
					}}
				>
					{button ? (
						<>
							{" "}
							Ocultar información del usuario{" "}
							<VscChevronUp style={{fontWeight: 600,}} /> 
						</>
					) : (
						<>
							{" "}
							Más información del usuario{" "}
							<VscChevronDown /> 
						</>
					)}
				</button>
			</div>
		</div>
	);
}
