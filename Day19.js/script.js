
// object and classes prototype//

let obj = {
    a: 89,
    b: 23
}

console.log(obj)

let animals = {
    jumps: true
};

let rabbits = {
    eat: true
};

rabbits.__proto__ = animals;

// learn class object create & super key for name or super for two classes 
// also learn overridding and inheritance//

class animals {
    constructor(name) {
        this.name = name
        console.log("object is create")
    }
    eats() {
        console.log("khood rha hu")
    }
    jumps() {
        console.log('khaa rha hu');

    }
}

class lion extends animals {
    constructor(name) {
        super(name)
        console.log('original lion the');
    }
    eats() {
        super.eats()
        console.log("khood rha hota hu kabhi kabhi")
    }
}

let a = new animals("prince");
console.log("a")

let b = new lion("mantu");
console.log('b');


class user{
  constructor(name){
   this.name = name
  }

  get name(){
   return this._name;
  }

  set name(value){
    if(value.length < 4){
        console.log('name too short');
        return;
        
    }
    this._name = value;
  }
}

let a = new user("raj");
console.log("a");

user = new user(" ");
