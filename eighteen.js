map
> help to iterate over the data
> output array of map is always of same length as input
filter
> help to filter out the 
filter return only those value for which output is true

var a = [2,4,6,8]
a.map((data) => {console.log(data*2)})


var a = [41,61,81,31,91,21,46,57,24,67,61,65,13,57,54]
a.filter((data) => { return data>40})
[41, 61, 81, 91, 46, 57, 67, 61, 65, 57, 54]

a.map((data) => { return data>40})
[true, true, true, false, true, false, true, true, false, true, true, true, false, true, true]

var a =[0,1,2,3,4]
a.map((data) => { return data*2})
[0, 2, 4, 6, 8]
a.filter((data) => { return data*2})
[1, 2, 3, 4]
