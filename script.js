
function
mimi(){
//     alert('Name of your school, course of study')
//     document.getElementById("Write a paragraph about you here").innerHTML = 'paragraph'
//    document.getElementById('giveitanId').style.background= 'choose color'
//    document.getElementById("gititanId").style.color = 'choose color'
//    console.log('your location')
   

    //  console.log('I live in lagos')
    // //  alert('my name is mim')
    // prompt('yes yes')
    // document.getElementById('mimi').style.color = 'red'
    // // document.getElementById('mimi').style.background = 'black'
    document.getElementById('mimi').innerHTML = new Date()

    // let x = 12
    // var y = 10
    // const  z = 13
    // // document.write(x + y)
    // var y = 16

    // x = 14
    // document.write(y)

    // x = 14
    // document.write(x)

    // var
    // const
    // let 
    // document.getElementById('pot').style.color = 'pink'


    // primitive and non-primitive datatypes
    // primitive datatypes include: Number, string, undefined, symbol,NULL
    // non-primitive datatypes are: objects and arrays

    // string: '4 yes, 5'
    // number: 5
    // undefined: let x;
    // NULL
    // symbol:$@$

    // array:[4, 'yes', 5]
    // object:{1: '', 2: 'ope', ope: ''}


    // operators
    // +,-,*,/,%   4%2 == 0
    // =,==,===, !=, !==

    // = assignment operators
    // ==, <,> comparison operators
    // === strict comparison  operaators

    // +,- ,* arithmetic operators -   'let x = 5+ 5
    // :, ? conditional operators true or false, yes or no
    // &&, ||, logical operators

    // let 6 = 7;
    // let 6 ==7;

    // 5 == 5,
    // 5 =='5'
    // 5 === '5'

    // if(5==5 || 5 == 6){
        // return 5
    // } else return 6

    // 5==5 ? 5 : 6

    // &&:and
    // ||: or

    // if(5 < 6 || 5 == 6){
        // return 5
    // }
    // if(5 <= 6){ return 5}
    // if(5>=6){return 5}
    // if(5 !=6){return 'wrong value}
    // if(5 !== 6){return "wrong value"}

    //  5 >= 5 ? 6 : 8

    // if(5 >= 5){return 6} else return 8

    // 
}
// let z = 10
function multiple(x, y){
    var z =10
    var p = z + 10
    //  x = 5;
    // y = 6;
//    console.log(x*y)
//     return x*y

return p

// let z = x + y
}
// console.log(multiple())
//  var celsuis =20;
var celsuis;
celsuis = 56;
 var ye= (celsuis * 9/5) + 32 
 
//  var celsuis =20;

function toFahrenheit(celsuis){
    // return (celsuis * 9/5) + 32
    // celsuis = 20
    // var ye= (celsuis * 9/5) + 32
    // celsuis = 100;
//  var ye= (celsuis * 9/5) + 32 
var man ="Men are created by God at " + ye
     document.getElementById("mimi").innerHTML = man
     
    // console.log(ye)
}
// console.log(ye)
//  console.log(toFahrenheit(20))
//  document.getElementById("mimi").innerHTML =toFahrenheit(20)
// multiple(5,4)
// console.log(z)

// 'my name is mimi'
// ['my', 'name', 'is', 'mimi']
// {1:'my', 2:'is', 3:'mimi'}

// push - used to add things to the end of an array
// pop - used to remove things to the end of an array
// shift - used to remove things from the beggining of an array
// unshift - used to remove things from the beginning of an array

// 'rice', 'beans', 'fish', 'chicken', 'vegetable'
var market_list1 = 'rice'
var market_list2 = 'beans'
var market_list3 = 'fish'
var market_list4 = 'chicken'
var market_list5 = 'vegetable'

// var market_list = ['rice', 'beans', 'fish', 'chicken', 'vegetable'];
//  market_list.shift()
// market_list.unshift('cat')
// market_list.splice(2,0, 'man', 'girl')
// var newMarket = market_list.slice(-3, -1)
var market_list = "rice, beans, fish, chicken, vegetable"
var newMarket = market_list.substring(1, 17)
console.log(newMarket)
//  market_list[6] = 'Indomie'
// market_list[0]
   
            // {key. value}
var mimi = {'mango': 'rice', 6: 'beans', 3:'fish', 4:'chicken', 5:'vegetable'}
mimi.mango = 'farm'
// console.log(mimi.mango)
// console.log(mimi)

// console.log(mimi[6])



var empty_array = {}
empty_array.first = 5
empty_array[4] = 'map'
empty_array.pin = 'yes'

// console.log(empty_array)

var fill_array = new Object()
fill_array.first = 'pin'
fill_array.second = 'cap'
fill_array.third = 'shoe'

// console.log(fill_array)

// console.log(newMarket)
// console.log(market_list)

let bridges = 'ABCDEFGHIJ';
let bridges_length = bridges.length;
// console.log(bridges_length)

let bridgesLowerCase = bridges.toLowerCase();
console.log(bridgesLowerCase)
console.log(bridges)

let y = '5'
// converting strings to numbers
console.log(Number(y))
console.log(parseInt(y))
console.log(parseFloat(y))

var convertNumberToString = 25;
var NumberString = 25

let convertedNumber = convertNumberToString.toString()
// '25'

// console.log(convertedNumber === convertNumberToString)

// console.log(convertedNumber == convertNumberToString)
// console.log(convertNumberToString.toString() === convertNumberToString)

// let b = 9;
// if(b > 8){
//     console.log('no non o') 
// } else (console.log('yes'))

const date = new Date().getMinutes()    
// 51
const now = 53;
if(date < now){
    console.log('less than now')
} else alert('greater than now')