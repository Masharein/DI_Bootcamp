fetch('ttps://jsonplaceholder.typicode.com/todos')
.then(response => {
    console.log(response)
    return response.json()
})
.then(json => rconsole.log(json))
.catch(error => console.error(error))