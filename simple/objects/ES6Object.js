class ES6 {
    constructor(name){
        this.name = name
    }

    toString(){
        return `${this.constructor.name}(${this.name})`
    }
}

class ExtendedES6 extends ES6{
    constructor(name, version){
        super(name);
        this.version = version
    }

    toString(){
        return `${super.toString()} - v${this.version}`
    }
}

module.exports = {ES6, ExtendedES6};