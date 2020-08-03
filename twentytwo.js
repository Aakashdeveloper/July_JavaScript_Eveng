var firstname="Michal"
var lastname = "zoe"

var sayhi={
    firstname:'John',
    lastname:'Brain',
    greet:function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayhi.greet())

