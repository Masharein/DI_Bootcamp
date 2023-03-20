import { useState } from "react"

const Form = () => {
    const [data, setData] = useState({ title:'', author:'', genre:'', year:'' })
    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(data)
    }

    function handleInputChange (event, name) {
        setData({...data, [name]: event.target.value})
    }
  return (
    <>
    <h1>New Book</h1>
    <p></p>
    <form onSubmit={ handleFormSubmit }>
    <label> Title:
    <input type="text" value={data.title} onChange={(event) => handleInputChange (event, 'title')}></input>
    </label>
    <label> Author:
    <input type="text" value={data.author} onChange={(event) => handleInputChange (event, 'author')}></input>
    </label>
    <label> Genre:
    <input type="text" value={data.genre} onChange={(event) => handleInputChange (event, 'genre')}></input>
    </label>
    <label> Year published:
    <input type="text" value={data.year} onChange={(event) => handleInputChange (event, 'year')}></input>
    </label>
    <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Form