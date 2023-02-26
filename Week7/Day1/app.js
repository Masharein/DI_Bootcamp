// console.log('my first node.js')
// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(res => res.json())
// .then(data => {console.log(data)})
// .catch(err => {
//     console.log(err)
// })

// for (var i=0; i < 10; i++) {
//     console.log(i)
// }

// const name = 'Mike Tylor';

const greeting= (name) => {
    console.log(`Hello ${name}, welcome to NodeJS`)
}

const hello = (name) => {
    console.log(`Hello, ${name}, good to see you here`)
}
// greeting(name)

module.exports = {
    greeting,
    hello
}