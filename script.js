// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "*", "&", "@", '$']
// holds potential characters
let characterArray =[]
//holds final set of characters
let finalPassword =[]
//function to generate password
function generatePassword() {
  var password = ""
  var upper = false
  var lower = false
  var length = prompt("Enter password with length of at least 8 characters and no more than 128 characters")
  var alpha = confirm("Would you like to use letters?")
  if (alpha) {
    upper = confirm("Would you like to use uppercase letters?")
  }
  if (upper) {
    lower = confirm("Would you like to use lowercase letters?")
  }
  else{
    lower = true
  }
  var numeric = confirm("Would you like to use numbers?")
  var specialCharacter = confirm("Would you like to use special characters?")


  if (upper=== true){
    characterArray = characterArray.concat(upperLetters)
  }
  if (lower=== true){
    characterArray = characterArray.concat(lowerLetters)
  }
  if (numeric=== true){
    characterArray = characterArray.concat(numbers)
  }
  if (specialCharacter=== true){
    characterArray = characterArray.concat(special)
  }
  console.log(characterArray)
  // for loop runs once for length answer
  for(let i = 0; i < length; i++){
    let indexAddress = Math.floor(Math.random()*characterArray.length) // goal of this line to return a whole number index
    let trueValue = characterArray[indexAddress] //convert indexAddress number value to true character value in characterArray
    
    //into finalPassword array push random trueValue
    finalPassword.push(trueValue)

    console.log(finalPassword)
  }
    return finalPassword.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
