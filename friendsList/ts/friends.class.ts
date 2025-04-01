export class Friends {
    name: string;
    age: number;
    email: string;
    bff: boolean;


 
    constructor(

        name: string = "",
        age:  number = 0,
        email: string = "",
        bff: boolean = false
    ){
        this.name = name,
        this.age = age,
        this.email = email,
        this.bff = bff

    }
    details(): string {
        return '${this.name}|$${this.age}|${this.email}|${this.bff}';
    }



}