import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/Form.css';

const Form = () => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const history = useHistory();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if(!email || !pass) return alert('Preencha todos os dados!');
		history.push("/home")
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<div className="form-group">
				<input id="email" name="email "type="email" className="form-control" placeholder="E-mail"value={email} onChange={({ target: { value }}) => setEmail(value)}/>
			</div>
			
			<div className="form-group">
				<input id="password" name="password "type="password" className="form-control" placeholder="Senha" value={pass} onChange={({ target: { value }}) => setPass(value)} />
			</div>
			<button type="submit">Entrar</button>
		</form>
	);
}

export default Form;