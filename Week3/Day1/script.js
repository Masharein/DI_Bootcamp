// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?

// 2. The ul DOM node?

// 3. The second li (with Pete)?
const title = document.body.firstElementChild
console.log(title)

const uls = document.body.children[1]
console.log(uls)

const pete = uls.children[1]
console.log(pete)

pete.textContent = 'Masha'
