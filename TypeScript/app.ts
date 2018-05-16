/// <reference path="./node_modules/@types/knockout/index.d.ts" />

interface UserInterace{
    name: KnockoutObservable<string>;
    email: string;
    age: number;

    register(): any;
}

class User implements UserInterace{
    name: KnockoutObservable<string>;
    email: string;
    age: number;


    constructor(name?: string, email?: string, age?: number){
        this.name  = ko.observable(name) || "";
        this.email = email || "";
        this.age = age || 0;
    }

    register(){
        console.log(` ${this.name} is registered `)
    }
}

class Member extends User{
    id: number;

    constructor(id?: number, name?: string, email?: string, age?: number){  
        super(name, email, age);
        this.id = id || 0;
    };

    private newMethod() {
        return this;
    }

    register(){
        super.register()
    }
}

//let korisnik = new Member(2, "Sasa", "email", 42);
let korisnik = new Member();
korisnik.name("Sasa");
korisnik.register();