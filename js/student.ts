class Student {

    static type: string = "";

    constructor(private name: string) {
    }

    public getName(): void {
        console.log(this.name);
    }
}