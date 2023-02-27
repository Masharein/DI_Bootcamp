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

// getData()

const showProducts = (arr) => {
    const html = arr.map(item => {
        return `<div>${item.name} ${item.price}</div>`
    })
    document.getElementById('root').innerHTML = html.join('')
}

const searchWithParametrs = () => {
    const prod_id = document.getElementById('prod_id').value
    fetch(`http://localhost:5000/api/product/${prod_id}`)
    .then(res => res.json())
    .then(data => {
        const arr = []
        arr.push(data)
        showProducts(arr)
        console.log(data)
    })
    .catch(err => {console.log(err)
    })
}
const searchWithQuery = () => {
    const prodname = document.getElementById('prod_name').value
    fetch(`http://localhost:5000/api/search?q=${prodname}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showProducts(data)
       
    })
    .catch(err => {console.log(err)
    })
}