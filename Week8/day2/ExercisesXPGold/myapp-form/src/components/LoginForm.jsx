import { useState } from 'react'

const LoginForm = () => {
   const [data, setData] = useState({firstName:'', lastName:'', phone:'', email:''})
   function handleFormSubmit(event) {
    event.preventDefault()
    console.log(data)
   }

   function handleChange(event, name){
    setData({...data, [name]: event.target.value})
   }

  return (
    <>
    <h1>Welcome</h1>
    <h4>Please provide your infromation below.</h4>
    <form onSubmit = {handleFormSubmit}>
        <label>
            <input type="text" placeholder ="First Name" value={data.firstName} onChange={(event) => handleChange(event, 'firstName')} />
        </label>
        <label>
            <input type="text" placeholder ="Last Name" value={data.lastName} onChange={(event) => handleChange(event, 'lastName')} />
        </label>
        <label>
            <input type="tel" placeholder ="Phone Number" value={data.phone} onChange={(event) => handleChange(event, 'phone')} />
        </label>
        <label>
            <input type="email" placeholder ="Email" value={data.email} onChange={(event) => handleChange(event, 'email')} />
        </label>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default LoginForm