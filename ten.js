Date()
"Mon Jul 20 2020 19:15:48 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a.getDate()
20
a.getDay()
1
a.getFullYear()
2020
a.getTimezoneOffset()
-330


switch(new Date().getDay()){
    case 1:
        console.log("Its monday")
        break;
    case 2:
        console.log("Its monday")
        break;
    case 3:
        console.log("Its monday")
        break;
    default:
        console.log("Wrong input")
}
