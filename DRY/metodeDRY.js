class Worker{
    constructor(hoursWorked, rate) {
        this.hoursWorked = hoursWorked;
        this.rate = rate;
        this.Tax = 0.5;
    }

    basicSalary() {
        return this.hoursWorked * this.rate;
    }

    overviewSalary() {
        return this.basicSalary() + this.Tax;
    }
}

const human = new Worker(8, 100);

console.log('Payment  :', human.basicSalary());
console.log('Payment :', human.overviewSalary());