
  # Blog Writing
  ## Question:
  #### 1. The significance of union and intersection types in Typescript.

  
  ## Answer:
  The union and intersection type are important and useful features of typescript.
  The union and intersections concepts helps in typescript that allow us to constraints certain type with type safety. Union allow a variable to be a specified or prederminded types with "|" symbol. On the other hand intersection combines multiple types into one denoted type with "&" symbol. 



### Union Type
It is a special kinds of type guard that can only use pre-determined type. The pipe operator (|) are used for union type. Can be used for variable, functions parameter etc.

#### Example
```javascript
function printValue(value: number | string) : void {
    console.log(value);
} 
// we can pass only number or string otherwise it will through error.
printValue(20);
```

```javascript
let  studentID : string | number; // studentID must be string or number
studentID = "17STA051";
studentID = 122334;
```

```javascript
type Circle = {
    name: "circle";
    radius: number;
}
type Rectangle = {
    name: "rectangle";
    width: number;
    height: number;
}
function computeArea(shape: Circle | Rectangle): number => {
    if (shape.name == "circle") return shape.radius*shape.radius*3.1416;
    return shape.width*shape.height;
}
computeArea({name: "circle", radius: 5.8});
computeArea({name: "rectangle", height: 5, widht: 8});

// we can pass only Circle or Rectangle to computeArea function

```



### Intersection Type
Intersection type helps us combining multiple types into one type. It combines two or more types to create new type that contains all properties of the existing types. It uses "&" operator for intersection types.

#### Example
```javascript
type User = {
    name: string;
    age: number;
    email: string;
    country: string;
}
type Admin = {
    role: string;
}
let adminUser: User & Admin = { // & intersection operator
    name: "Mr. Barik",
    age: 26,
    email: "mdabarik19@gmail.com",
    country: "Uganda"
}
// adminUser object must contains all properties of User and Admin types.
```

```javascript
interface FrontEndDev {
    skills: string[],
    designation1: 'FrontendDeveloper'
}
interface BackEndDev {
    skills: string[],
    designation2: 'BackendDeveloper'
}
interface FullStackDev = FrontEndDev & BackEndDev; // intersection type
// to become FullStackDev, he/she must be frontend and backend developer as well.
```


#### Thanks