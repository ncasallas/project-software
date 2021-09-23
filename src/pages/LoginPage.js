import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import useAuth from "../auth/useAuth"

const initialUser = { usuario: '', password: '' };

export default function LoginPage() {
    const [user, setUser] = useState(initialUser)
    const history = useHistory()
    const { login } = useAuth();

    const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            console.log(user)
            const { data } = await axios.post('http://localhost:3200/api/login', user)
            console.log('logged', data)
            history.push('/account')
            login(data)
        }
        catch (err) { console.error(err) }
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="usuario">usuario</label>
                    <input id="usuario" type="text" name="usuario" value={user.usuario} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input id="password" type="password" value={user.password} onChange={handleChange} name="password" />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}