{
    //  

    type Person = {
        name: string;
        age: number;
    }

    // function generic
    const getProperty = <T, K extends keyof T> (object: T, key: K) : T[K] => {
        return object[key];
    }

    const person1 : Person = {
        name: "Mr. Barik",
        age: 30
    }

    const value1 = getProperty(person1, "age");
    console.log(value1);




    //
}