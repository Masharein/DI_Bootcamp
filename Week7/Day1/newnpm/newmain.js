const axios = require('axios');
const users = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        return res.data
    }
    catch {
        console.error(error)
    }
}

module.exports = {
    users
}