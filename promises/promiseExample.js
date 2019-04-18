const prices = {
  mazapan: 5,
  carneSeca: 700,
  quesoChih: 200
}

function requestThing (thing) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        { name: thing, date: Date.now(), price: prices[thing] }
      )
    }, 2000)
  })
}
// Async: puede que se resuelva primero uno u otro -> se ejecutan al mismo tiempo.
// requestThing('carneSeca').then((data) => {
//   console.log(data)
// })
// requestThing('quesoChih').then((data) => {
//   console.log(data)
// })

// Sync -> con una secuencia especifica
// requestThing('carneSeca')
//   .then((carneSeca) => {
//     console.log(carneSeca)
//     return requestThing('quesoChih')
//   })
//   .then((quesoChih) => {
//     console.log(quesoChih)
//     return requestThing('mazapan')
//   })
//   .then((mazapan) => {
//     console.log(mazapan)
//   })

// async with PromiseAll()
Promise.all([
  requestThing('carneSeca'),
  requestThing('quesoChih'),
  requestThing('mazapan')
]).then((responses) => { //responses es un array que contiene el resultado de las 3 promesas
  console.log(responses)
})