import { useState } from "react";
import { VscPersonAdd } from "react-icons/vsc";
import s from "./style.module.css";

export default function CreateUser({ newUser }) {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [yearsPrograming, setYearsPrograming] = useState(0);
	const [senior, setSenior] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		newUser({ name, age, yearsPrograming, senior });
		setName("");
		setAge("");
		setYearsPrograming(0);
	};
	return (
		<form className={s.form_user} onSubmit={handleSubmit}>
			<div>
				<label htmlFor="">Usuario: </label>
				<input
					className={s.form_text_input}
					type="text"
					placeholder="Ingrese el nombre del usuario"
					onChange={(e) => setName(e.target.value)}
					value={name}
					required
				/>
			</div>
			<div>
				<label htmlFor="">Edad: </label>
				<input
					className={s.form_text_input}
					type="number"
					placeholder="Edad del usuario"
					onChange={(e) => setAge(parseInt(e.target.value))}
					value={age}
					min={14}
					max={99}
					required
				/>
			</div>
			<div>
				<label htmlFor="">Años programando: </label>
				<input
					className={s.form_text_input}
					type="number"
					placeholder="Años programando"
					onChange={(e) => setYearsPrograming(e.target.value)}
					value={yearsPrograming}
					min={0}
					max={99}
					required
				/>
			</div>
			<div onChange={(e) => setSenior(JSON.parse(e.target.value))}>
				<p>¿Es un programador Senior?</p>
				<input type="radio" name="senior" value={true} />
				<label>Si </label>
				<input type="radio" name="senior" value={false} defaultChecked />
				<label>No </label>
			</div>
			<div className={s.container_button_create}>
				<button className={s.button_create}>
					<VscPersonAdd /> 
					Crear usuario nuevo
				</button>
			</div>
		</form>
	);
}
