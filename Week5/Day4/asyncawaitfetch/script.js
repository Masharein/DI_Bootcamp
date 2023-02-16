function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err) => console.log(err))
}

getUsers()

//NEW
async function getUsers () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(response.status !== 200) {
            throw new Error ("bad result")
        }
        const users = await response.json(); //json() method brings back a promise
        displayUsers(users);
    } catch (err) {
        console.erorr("ERROR");
    }
}

getUsers()