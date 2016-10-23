class HelloWorld {
    constructor(private name:string){

    }

    SayHi(htmlDOM : HTMLElement){
        htmlDOM.innerHTML = "Hi " + this.name;
    }
}