import { useState } from 'react'
const URL_API = 'https://jsonplaceholder.typicode.com/users/'

const Form = () => {
    const [data, setData] = useState({user:'', email:''})
    console.log(data)
    function onSubmitHandle(event) {
        event.preventDefault()
        fetch(URL_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        setData({ user: '', email: '' })
    }
    

    function onHandlechange(event, name) {
        setData({...data, [name]: event.target.value })
    }

  return (
    <form onSubmit={onSubmitHandle}>
        <label>
            <input type="text" placeholder ="name" value={data.user} onChange={(event) => onHandlechange(event, 'user')} />
        </label> 
        <label>
            <input type="email" placeholder ="email" value={data.email} onChange={(event) => onHandlechange(event, 'email')} />
        </label> <br />
        <button type="submit">Add user</button>
    </form>
  )
}

export default Form