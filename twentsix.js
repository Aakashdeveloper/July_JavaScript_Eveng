class geo{
    constructor(lat,long){
        this.lat = 43.44,
        this.long= 43.22
    }
}

class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country 
    }
}



var english = new language1('English','USA')