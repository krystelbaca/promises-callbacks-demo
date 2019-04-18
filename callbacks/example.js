/**
 * First example
 */

// vamos a ver como se comporta el codigo asincrono.
// function printManyStrings () {
//   printString('Martin Gallegos')
//   printString('Bryan Montes')
//   printString('Carlos Wilson')
// }
// printManyStrings()
/**
 * Expected Output:
 * Martin Gallegos
 * Bryan Montes
 * Carlos Wilson
 */



// str = hello, callback = printManyStrings
function printString(str, callback){
  setTimeout(() => {
      console.log(str)
      callback() // Aqui se ejecuta printManyStrings
    }, 2000)
}
// 

// con callbacks 

function printManyStrings() {
  printString('Martin', () => {
    printString('Bryan', () => {
      printString('Isaac', () => {})
    })
  })
}

// printString('Hello!', printManyStrings) 
// printManyStrings()


/**
 * The problem with callbacks is it creates something called “Callback Hell.” 
 * Basically, you start nesting functions within functions within functions,
 * and it starts to get really hard to read the code.
 */



// USING PROMISES -> failing
// function printString (str) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(str)
//       resolve()
//     }, 2000)
//   })
// }

// printString('Krystel')

// // promises chain
// function printManyString () {
//   printString('Martin')
//   .then(() => {
//     return printString('Bryan')
//   })
//   .then(() => {
//     return printString('Goshi')
//   })
// }

// printManyString()


