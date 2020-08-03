>literal 
> constructor

var moviename ="avengers"
var movierating = 4.5
var movieLang = "eng"
////////////////////////////////////////
var movies ={
    name:'Avengers',
    rating:4.5,
    lang:'eng'
}
undefined
typeof(movies)
"object"
movies.name
"Avengers"
movies.rating
4.5
movies.genre="Action"
"Action"
movies
{name: "Avengers", rating: 4.5, lang: "eng", genre: "Action"}
movies.rating=4.6
4.6
movies
{name: "Avengers", rating: 4.6, lang: "eng", genre: "Action"}
delete movies.lang
true
movies
{name: "Avengers", rating: 4.6, genre: "Action"}

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'eng'
    },
    {
        name:'Death Race',
        rating:3.5,
        lang:'eng'
    },
    {
        name:'Avengers',
        rating:4.5,
        lang:'eng'
    }
]
var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'eng'
    },
    {
        name:'Death Race',
        rating:3.5,
        lang:'eng'
    },
    {
        name:'Avengers',
        rating:4.5,
        lang:'eng'
    }
]
undefined
movies[1].name
"Death Race"

JSON> JavaScript Object Notation

movies['name']
"Avengers"


//////////////////////////////////////
var sayhi={
    firstname:'John',
    lastname:'Brain',
    greet:function(){
        return `Say Hi to everyone`
    }
}
sayhi.greet()
"Say Hi to everyone"
sayhi.firstname
"John"

var calc={
    sum:(a,b) =>{return a+b},
    sub:(a,b)=>{return a-b}
}
calc.sum(1,2)
3
calc.sub(1,2)
-1


var dbquery = {
    find:(table) => {return `select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city VALUES(${data.name},${data.city})`}
}

dbquery.find('Emloyee')
"select * from Emloyee"
dbquery.insert('student',{name:'John',city:'Delhi'})
"insert into student name,city VALUES(John,Delhi)"