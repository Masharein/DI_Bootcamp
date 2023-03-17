import { useState} from 'react'

const Login = () => {

   const [data, setData] = useState({ username: '', password: '' })

    function handleFronSubmit(event) {
        event.preventDefault()
        console.log(data)
        alert(JSON.stringify(data))
    }
    
    function handleInputChange(event, name) {
        setData({...data, [name]: event.target.value})
    }

    return (
    <>
    <h1>Login Form</h1>
        <form onSubmit={handleFronSubmit}>
        <label>Username:
                <input type="text" value={data.username} onChange={(event) => handleInputChange(event, 'username')}/>
        </label>
        <label>Password:
                <input type="password" value={data.password} onChange={(event) => handleInputChange(event, 'password')}/>
        </label>
        <button type="submit">Login</button>
        </form>
    </>    
    )
}

export default Login