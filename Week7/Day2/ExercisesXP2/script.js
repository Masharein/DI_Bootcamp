const getData = () => {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showData(data)
    })
    .catch(err => {
        console.log(err)
    })
}

getData()

const showData = (data) => {
    const div = document.createElement('div')
    div.innerText = JSON.stringify(data)
    document.body.appendChild(div)
}