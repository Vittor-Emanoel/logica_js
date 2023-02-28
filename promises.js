const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error')
  }, 1000)
})
//then
apiCall
  .then((resposta) => {
    console.log(resposta)
  })
  .catch((error) => console.log(error))

console.log('depois da promise')
// async function run() {
//   try {
//     const resposta = await apiCall
//     console.log(resposta)
//   } catch (error) {
//     console.log(error)
//   }
// }

// run()
