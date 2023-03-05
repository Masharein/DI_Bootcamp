const getAllItems = () => {
  fetch('/api/shopping')
  .then(res => res.json())
  .then(data=> {
    showItems(data);
  })
  .catch(err => {
    console.log(err);
  })
}

getAllItems()

const showItems = (arr) => {
  const html = arr.map(itemlist => {
    return `<div>${itemlist.item} ${itemlist.quantity}</div>`
  })
  document.getElementById('root').innerHTML = html.join('')
}


const addItem = (e) => {
  e.preventDefault();
  const item = e.target.item.value;
  const quantity = e.target.quantity.value;

  fetch('/api/shopping', {
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({item,quantity})
  })
  .then(res => res.json())
  .then(data=> {
    // console.log(data);
    showItems(data);
  })
  .catch(err => {
    console.log(err);
  })
}
