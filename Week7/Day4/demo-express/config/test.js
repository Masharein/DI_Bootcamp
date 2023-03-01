const fs = require('fs');

fs.copyFile('.env','.env2', (err)=>{
  if(err) return console.log(err);

  console.log('file copied');
})

// const products = [
//   {id:11,name:'iPhone', price:800},
//   {id:8,name:'iPad', price:650},
//   {id:21,name:'iWatch', price:750}
// ]
//
// fs.writeFile('products.txt', JSON.stringify(products), 'utf-8', (err)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log('file created');
// })

// try{
//   const data = fs.readFileSync('products.txt');
//   console.log(JSON.parse(data.toString()));
// }
// catch(e){
//
// }


// const info = fs.readFile('.env1', 'utf-8', (err,data)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log(data);
// })
//
//
// console.log('The file has ben read');
