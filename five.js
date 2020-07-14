var city = "AMsterDam"
undefined
city.toUpperCase()
"AMSTERDAM"
city.toLowerCase()
"amsterdam"
//////
city.length
9
city[0]
"A"
city[5]
"r"

var name = "  Alvin   "
undefined
name.length
10
name.trim()
"Alvin"
var name = "  Alvin .   "
undefined
name.trim()
"Alvin ."

var name = "John"
var name2 = "john"
undefined
name == name2
false

name == name2
false
name.toLowerCase() == name2.toLowerCase()
true
name[0]
"J"
name.charAt(0)
"J"
name.charAt(2)
"h"

var city="London"
undefined
city.slice(1)
"ondon"
city.slice(2)
"ndon"
city.slice(3)
"don"
city.slice(2,4)
"nd"
city.slice(2,5)
"ndo"
city
"London"
var city="London Newyork" 
undefined
city.slice(3,7)
"don "
city.slice(3,8)
"don N"

var city = "aMsterDam"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"MsterDam"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"



var a = "I am learning JavaScript"
a.replace('JavaScript','JS')
"I am learning JS"

var a = "JavaScript, I am learning JavaScript"
a.replace('JavaScript','JS')
"JS, I am learning JavaScript"
a.replace(/JavaScript/g,'JS')
"JS, I am learning JS"


var name = "  Alvin .   "
undefined
name.replace(/ /g,'')
"Alvin."


var city = "Amsterdam"
undefined
city.indexOf('m')
1
city.indexOf('z')
-1
city.indexOf('A')
0
city.indexOf('a')
7
var a = "Hi How are you"
undefined
a.indexOf("hi")
-1
a.indexOf("Hi")
0
a.indexOf("are")
7
a.indexOf("a")
7
a.indexOf("hello")
-1

slice(start,end?)
substring(start,end?)
substr(start,length?)



var city = "innsburg"
undefined
city.slice(1)
"nnsburg"
city.slice(1,4)
"nns"
city.substring(1)
"nnsburg"
city.substring(1,4)
"nns"

city.substr(1)
"nnsburg"
city.substr(1,4)
"nnsb"

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(-1)
"m"
city.slice(-2)
"am"
city.slice(2,-1)
"sterda"
city.slice(2,-2)
"sterd"
city.slice(-2,2)
""
city.slice(-2,-3)
""
city.slice(-2,-1)
"a"
city.slice(-4,-1)
"rda"
city.slice(-1,-4)
""
city.slice(1,-4)
"mste"
city.slice(-4,2)
""
city.slice(-1,2)
""

////////v
var city = "Amsterdam"
undefined
city.substring(-1)
"Amsterdam"
city.substring(2,-1)
"Am"
city.substring(3,-1)
"Ams"
city.substring(3,-5)
"Ams"
city.substring(-3,-1)
""
city.substring(-3,-4)
""
city.substring(-1,2)
"Am"

city.substr(-1)
"m"
city.substr(2,-1)
""
city.substr(-2,-1)
""
city.substr(-2,-4)
""
city.substr(-1,2)
"m"