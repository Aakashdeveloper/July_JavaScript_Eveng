var myObj = require('./first');

console.log(myObj.users)
console.log(myObj.dbquery.insert('student',{name:'John',city:'Delhi'}))