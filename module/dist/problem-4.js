"use strict";
{
    const calculateShapeArea = (shape) => {
        let area = 0;
        if (shape.name === "circle") {
            area = Math.PI * shape.radius * shape.radius;
        }
        else if (shape.name == "rectangle") {
            area = shape.height * shape.width;
        }
        return parseFloat(area.toFixed(2));
    };
    const shape1 = {
        name: "circle",
        radius: 5
    };
    const shape2 = {
        name: "rectangle",
        width: 4,
        height: 6
    };
    const circleArea = calculateShapeArea(shape1);
    const rectangleArea = calculateShapeArea(shape2);
    console.log(circleArea, rectangleArea);
    // 
}
