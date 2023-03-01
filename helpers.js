const tech = 'node.js'
const array = ['node.js', 'react.js', 'typescript']

//  Verifica se existe e retorna true ou false (todas as condições):

const includesString = tech.includes('.')
const includesArray = array.includes('react.js')

// console.log({ includesString })
// console.log({ includesArray })

//verificar se começa com determinada letra:
const starsWith = tech.startsWith('n')

// console.log({ starsWith })

//verificar se termina com determinada letra:
const endWith = tech.endsWith('s')

console.log({ endWith })
