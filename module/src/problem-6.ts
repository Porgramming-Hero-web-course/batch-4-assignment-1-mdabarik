{
    //

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (profile : Profile, newData: Partial<Profile>) : Profile => {
        return {...profile, ...newData};
    }

    const myProfile : Profile = {
        name: "Mr. Barik",
        age: 25,
        email: "barik@gmail.com"
    }

    const updatedProfile : Profile = updateProfile(myProfile, {age: 28});

    console.log(updatedProfile);

    //
}