import { useState } from 'react'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const FormAxios = () => {
    const [data, setData] = useState({userId: '', title: '', body: ''})
    function onHandleSubmit(event) {
        event.preventDefault()
        axios.post(API_URL, {data})
        .then(res => console.log(res.data))
    }

    function onHandleChange(event, name) {
        setData({...data, [name]: event.target.value}) 
    }
  return (
    <>
    <form onSubmit={onHandleSubmit}>
        <label>
            <input type="text" value={data.userId} onChange={(event) => onHandleChange(event, 'userId')} />
        </label>
        <label>
            <input type="text" value={data.title} onChange={(event) => onHandleChange(event, 'title')} />
        </label>
        <label>
            <input type="text" value={data.body} onChange={(event) => onHandleChange(event, 'body')} />
        </label>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default FormAxios