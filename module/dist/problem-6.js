"use strict";
{
    const updateProfile = (profile, newData) => {
        return Object.assign(Object.assign({}, profile), newData);
    };
    const myProfile = {
        name: "Mr. Barik",
        age: 25,
        email: "barik@gmail.com"
    };
    const updatedProfile = updateProfile(myProfile, { age: 28 });
    console.log(updatedProfile);
    //
}
