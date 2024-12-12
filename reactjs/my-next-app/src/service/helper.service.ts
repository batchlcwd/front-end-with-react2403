
const a:number=5;

interface User{
  email:string
  password:string
}

const user={
    email:"abc@gmail.com",
    password:"1234"
}

function callApi(u:User):User
{
console.log(u.email);

return u;

}


class Person{
    private name:string;
    private age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    printPerson(){
        console.log(`${this.name} is ${this.age}`);
    }

}

const person=new Person("sas",20);

person.printPerson();
