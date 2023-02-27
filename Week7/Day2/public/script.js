const getData = () => {
    fetch('http://localhost:5000/api/product')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showProducts(data)
    })
    .catch(err => {
        console.log(err)
    })
}

getData()

const showProducts = (arr) => {
    const html = arr.map(item => {
        return `<div>${item.name} ${item.price}</div>`
    })
    document.getElementById('root').innerHTML = html.join('')
}