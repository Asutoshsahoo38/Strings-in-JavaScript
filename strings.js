/*
let boy1 = "Ashu"
let boy2 = "Ravi"
let sentence = `boy1 is a friend of boy2`
let sentence1 = `${boy1} is a friend of ${boy2}`
console.log(sentence)
console.log(sentence1)
*/
// Template literals =  using backticks to define a string
// we can directly insert variables in the template literals . This is called String interplatation .
// Escape sequence
/*
let fruits = 'Apple\'s a good fruit'
let f = 'Apple\'s \na good fruit'
let r = 'Apple\'s \ra good fruit'
let u = 'Apple\'s \ta good fruit'
console.log(fruits)
console.log(f)
console.log(r)
console.log(u)
*/
// string function
/*
let a = "Ashu"
let b = 'Riya'
console.log(a.length)
console.log(a.toLowerCase())
console.log(a.toUpperCase())
console.log(a.replace("Ash","Riy"))
console.log(a.concat(" is friend of ",b))
console.log(a.trim())
*/
// use of include
/*
let sentence = "Hi my name is  Asutosh sahoo and  I am a GIET student"
let s = 'GIET'
console.log(sentence.includes(s))
console.log(`The word "${s}" ${sentence.includes(s)? 'is' : 'is not'} in the sentence`)
*/
// Extract numbers from the string
/*
let a  = "please give rs 100"
let amount = Number.parseInt(a.slice('please give rs '.length))
console.log(amount)
*/