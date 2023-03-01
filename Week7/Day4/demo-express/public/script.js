const getData = () => {
  fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(data => {
    showProducts(data);
  })
  .catch(err => {
    console.log(err);
  })
}
getData();

const showProducts = (arr) => {
  const html = arr.map(item => {
    return `<div><h2>${item.name}</h2><h4>${item.price}</h4></div>`
  })
  document.getElementById('root').innerHTML = html.join('')
}

const searchWithParams = () => {
  const prod_id = document.getElementById('prod_id').value;
  fetch(`http://localhost:5000/api/products/${prod_id}`)
  .then(res => res.json())
  .then(data => {
     console.log(data);
     const arr = []
     arr.push(data)
     showProducts(arr)
  })
  .catch(err => {
    console.log(err);
  })
}

const searchWithQuery = () => {
  const prod_name = document.getElementById('prod_name').value;
  fetch(`http://localhost:5000/api/search?q=${prod_name}`)
  .then(res => res.json())
  .then(data => {
     showProducts(data)
  })
  .catch(err => {
    console.log(err);
  })
}
