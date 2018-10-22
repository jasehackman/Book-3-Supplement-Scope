// // C is for Cookie
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 0; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// Conjunction Function
// let conjoinedWord = ""
// const conjunction = function (firstWord, secondWord) {
//     conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)

// Mod Squad

// let HTMLRepresentation = `<h1>The Mod Squad</h1>`
// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

    

//     ModSquad.members.forEach(member => {
//         HTMLRepresentation += `<div>${member}</div>`
//     })
//     console.log(HTMLRepresentation);
// }


// document.querySelector(".show-info").innerHTML = HTMLRepresentation

// Simon Says
// There are two separate scoping issues in this code.
//  Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// let k = 0
// let counter = 0
// for (k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
    

//     if (invalidLocation) {
//         console.log("This location is invalid")
//         counter++
//     }
//   }
// }

// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */
// console.log(`There were ${counter} invalid locations`)


const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)

  let suffix = ""
  let name = " "
  function namer () {
       suffix = " the Llama"
       name = possibleNames[randomizer]
      
  }
  namer();
  return name + suffix
}

nameMaker = llamaNamer()
console.log(nameMaker)