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
var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
city.shift()
"London"
city.shift(7)
"Delhi"
city.unshift('Dubai')
6
city
(6) ["Dubai", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
city.slice(1)
(6) ["Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
city.slice(2,5)
(3) ["Mumbai", "Paris", "Amsterdam"]
city
(7) ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
city.splice(3,0,'Pune','Boston')
[]
city
(9) ["London", "Delhi", "Mumbai", "Pune", "Boston", "Paris", "Amsterdam", "Venice", "Innsburg"]
city.splice(2,2)
(2) ["Mumbai", "Pune"]
city
(7) ["London", "Delhi", "Boston", "Paris", "Amsterdam", "Venice", "Innsburg"]
city.splice(4,1,'Edinberg','Nice')
["Amsterdam"]
city
(8) ["London", "Delhi", "Boston", "Paris", "Edinberg", "Nice", "Venice", "Innsburg"]

var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
city.indexOf('London')
0
city.indexOf('Venice')
5
city.indexOf('Dubai')
-1
city.indexOf('Boston')
-1


var a = [1,2,3]
var b = [4,5,6]
a+b 

[1,2,3,4,5,6]
var a = [1,2,3]
var b = [4,5,6]
undefined
a+b
"1,2,34,5,6"
a.concat(b)
(6) [1, 2, 3, 4, 5, 6]
b.concat(a)
(6) [4, 5, 6, 1, 2, 3]
var c = [4,5,6]
undefined
a.concat(b,c)
(9) [1, 2, 3, 4, 5, 6, 4, 5, 6]


var url = "https://github.com/Aakashdeveloper/July_React_Mrng"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "July_React_Mrng"]
url.split('/')[4]
"July_React_Mrng"

var url = "https://github.com/Aakashdeveloper/2/July_React_Mrng"
undefined
["https:", "", "github.com", "Aakashdeveloper", "2", "July_React_Mrng"]
url.split('/')[4]
"2"
url.split('/')[5]
"July_React_Mrng"

var url = "https://github.com/Aakashdeveloper/5/2/July_React_Mrng"
var first = url.split('/')
["https:", "", "github.com", "Aakashdeveloper", "2", "July_React_Mrng"]
first[first.length-1]
"July_React_Mrng"

var data = "I am doing javascript"
data.split(' ')
(4) ["I", "am", "doing", "javascript"]

var text = "javascript"
textx.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]


var textx = "javascript"
undefined
textx.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var a = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
undefined
a.toString()
"j,a,v,a,s,c,r,i,p,t"
var a = "j,a,v,a,s,c,r,i,p,t"
undefined
a.replace(',','')
"ja,v,a,s,c,r,i,p,t"
a.replace(/,/g,'')
"javascript"

var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
city.sort()
(7) ["Amsterdam", "Delhi", "Innsburg", "London", "Mumbai", "Paris", "Venice"]
city.reverse()
(7) ["Venice", "Paris", "Mumbai", "London", "Innsburg", "Delhi", "Amsterdam"]
city.sort().reverse()
(7) ["Venice", "Paris", "Mumbai", "London", "Innsburg", "Delhi", "Amsterdam"]


var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
city.reverse()
(7) ["Innsburg", "Venice", "Amsterdam", "Paris", "Mumbai", "Delhi", "London"]
city.reverse().sort()
(7) ["Amsterdam", "Delhi", "Innsburg", "London", "Mumbai", "Paris", "Venice"]
city.sort().reverse()
(7) ["Venice", "Paris", "Mumbai", "London", "Innsburg", "Delhi", "Amsterdam"]

var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
city.includes('Delhi')
true
city.includes('Dubai')
false
var myarr = Array.of(5)
undefined
myarr
[5]
var myarr = Array.of(5,7,8,9)
undefined
myarr
(4) [5, 7, 8, 9]
 ['Delhi',"Mumbai",[4,5,[6,'a','b'],true,"pune"],"Helsinki"]
var city =
undefined
city[2]
(5) [4, 5, Array(3), true, "pune"]
city[2][4]
"pune"
city[2][2]
(3) [6, "a", "b"]
city[2][2][0]
6

var city =  ['Delhi',"Mumbai",[4,5,[6,'a','b'],true,"pune"],"Helsinki"]
undefined
city.flat()
(8) ["Delhi", "Mumbai", 4, 5, Array(3), true, "pune", "Helsinki"]
city.flat(2)
(10) ["Delhi", "Mumbai", 4, 5, 6, "a", "b", true, "pune", "Helsinki"]


var a = [10,20,30,40]
a.fill(100,3)
(4) [10, 20, 30, 100]
var a = [10,20,30,40]
a.fill(100,2)
(4) [10, 20, 100, 100]
var a = [10,20,30,40]
a.fill(100,1)
(4) [10, 100, 100, 100]
var a = [10,20,30,40]
a.fill(100,1,2)
(4) [10, 100, 30, 40]
var a = [10,20,30,40]
a.fill(100,1,3)
(4) [10, 100, 100, 40]

var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
city.copyWithin(2,4,6)
(7) ["London", "Delhi", "Amsterdam", "Venice", "Amsterdam", "Venice", "Innsburg"]
city.copyWithin(2,4,7)
(7) ["London", "Delhi", "Amsterdam", "Venice", "Innsburg", "Venice", "Innsburg"]
city.copyWithin(2,3,5)
(7) ["London", "Delhi", "Venice", "Innsburg", "Innsburg", "Venice", "Innsburg"]
var city = ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
undefined
undefined
city
(7) ["London", "Delhi", "Mumbai", "Paris", "Amsterdam", "Venice", "Innsburg"]
city.copyWithin(2,4,5)
(7) ["London", "Delhi", "Amsterdam", "Paris", "Amsterdam", "Venice", "Innsburg"]
city.copyWithin(0,3)
(7) ["Paris", "Amsterdam", "Venice", "Innsburg", "Amsterdam", "Venice", "Innsburg"]