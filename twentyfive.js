function human(name){
    this.name=name;
    this.city="NewYork"
}

function robot(name){
    this.name=name;
    this.legs = 2;
    this.color="red"
}

var john = new human('John')
undefined
john
human {name: "John", city: "NewYork"}
var pepper = new robot('pepper')
undefined
pepper
robot {name: "pepper", legs: 2, color: "red"}

human.prototype = new robot()
var john = new human('John')
undefined
john
human {name: "John", city: "NewYork"}
john.color
"red"
john.legs
2

robot.prototype = new human()