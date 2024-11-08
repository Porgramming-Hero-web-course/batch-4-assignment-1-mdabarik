"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            return 2024 - this.year;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
    //
}
