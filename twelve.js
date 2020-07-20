array can be collection of homegenious datatype
as well as hetrogenious

var a = ['a','b','c']
var b = [1,2,3]
var c = [true,true,false]

var d = [1,4,"ff","bfdbf",true,true,45,46,'dgv']

var city = ["London","Delhi","Mumbai","Paris","Amsterdam"];
undefined
typeof(city)
"object"
city.length
5
city[0]
"London"
city[4]
"Amsterdam"

var city = ["London","Delhi","Mumbai","Paris","Amsterdam"];
undefined
city.push('Venice')
6
city
(6) ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice"]
city.push('Innsburg')
7
city
(7) ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]



var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
city.pop()
"Innsburg"
city
(6) ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice"]

city.pop(2)
"Venice"
["London", "Delhi", "Mumbai", "Paris", "Amsterdam"]