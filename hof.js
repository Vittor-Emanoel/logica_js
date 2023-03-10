const array = [
  { name: 'Iphone', price: 5000, quantity: 2 },
  { name: 'MacBook', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 10001, quantity: 5 },
]

// .find = buscar - retorna sempre o primeiro elemento que a condição foi satisfeita

const find = array.find((product) => product.name === 'Magic Mouse')

// console.log({ find })

// .findIndex = buscar pela posição - retorna sempre o primeiro elemento que a condição foi satisfeita
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse')

// console.log({ findIndex })

// .some = Algum - ele verifica se algum elemento satisfaz a condição.

// .every = Todos - ele verifica se todos elementos satisfaz a condição.

const some = array.some((product) => {
  return product.price < 1000
})

// console.log({ some })

const every = array.every((product) => {
  return product.price > 1000
})

// console.log({ every })

// .map (mapear) - pega o array original e cria outro baseado nesse

const map = array.map((product) => {
  return {
    ...product,
    subtotal: product.quantity * product.price,
  }
})

// console.log({ map })

//.filter cria um novo array - toda vez que a condição for true
const filter = array.filter((product) => {
  return product.quantity > 1
})

// console.log({ filter })

// . reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity)
}, 0)

console.log({ reduce })
