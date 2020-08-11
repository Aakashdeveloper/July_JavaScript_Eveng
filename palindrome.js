7557
7556

var palindrome = (data) => {
    var rem,temp,final=0;
    temp=data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final ==temp){
        console.log("Number is palindrom")
    }else{
        console.log("Number is not palindrom")
    }
}

palindrome(9876)
VM561:12 Number is not palindrom
undefined
palindrome(98766789)
VM561:10 Number is palindrom