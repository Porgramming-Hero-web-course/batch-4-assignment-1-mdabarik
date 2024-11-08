"use strict";
{
    // function generic
    const getProperty = (object, key) => {
        return object[key];
    };
    const person1 = {
        name: "Mr. Barik",
        age: 30
    };
    const value1 = getProperty(person1, "age");
    console.log(value1);
    //
}
