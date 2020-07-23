RegExp
^$
^([a-z])$

var a = "Hi"
a.match("^([a-z])$")
null

var a = "z"
a.match("^([a-z])$")
(2) ["z", "z", index: 0, input: "z", groups: undefined]


var a = "Hi"
a.match("^([a-zA-Z]{2})$")
var a = "Hi"
a.match("^([a-zA-Z]{2})$")
(2) ["Hi", "Hi", index: 0, input: "Hi", groups: undefined]
var a = "Higewg"
a.match("^([a-zA-Z]{2,10})$")
(2) ["Higewg", "Higewg", index: 0, input: "Higewg", groups: undefined]



var a = "Higewg"
a.match("^([a-zA-Z]+)$")

var phone = 98980908
phone.match("^([0-9]{10})$")
VM737:2 Uncaught TypeError: phone.match is not a function
    at <anonymous>:2:7
(anonymous) @ VM737:2
phone.toString()
"98980908"
phone+""
"98980908"
var phone = 98980908
undefined
phone.toString().match("^([0-9]{10})$")
null
var phone = 9898090899
undefined
phone.toString().match("^([0-9]{10})$")
(2) ["9898090899", "9898090899", index: 0, input: "9898090899", groups: undefined]

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "aa.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@acom"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@acom", "a", "a", "om", index: 0, input: "a@acom", groups: undefined]
var email = "a@acom."
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@acom"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@acom", "a", "a", "om", index: 0, input: "a@acom", groups: undefined]
var email = "aa"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")

