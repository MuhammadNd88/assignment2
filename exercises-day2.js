"use strict";

// Create an index.html page and add an external link to this .js file.
document.write("Successfully Linked Problem Set 2");

// Open up index.html in the browser. If you see "Successfully Linked Problem Set 2" on your page, you may continue.

//1. Create an array `numbers` that contains the first 10 decimals of Pi
//(e.g., 1415926535).
//console.log the array
// Arrays;
var decimalsPi = ["1", "4", "1", "5", "9", "2", "6", "5", "3", "9"];
console.log(decimalsPi);
//2. Use bracket notation to change the `4` in the array to a `4.2`.
//console.log the updated array
decimalsPi[4] = "6";
console.log(decimalsPi[4]);
//3. Add the number 3 to the end of the array.
decimalsPi.push(3);
//console.log the updated array
decimalsPi[9] = "3";
console.log(decimalsPi[9]);
//4. Create a function named `sumOfArray` that loops through an array, and returns the sum of all the numbers that are less than or equal to 5
function sumOfArray(sum) {
  var result = 0;
  for (var i = 0; i <= sum.length; i++) {
    if (sum[i] <= 5) {
      result = result + sum[i];
    }
  }
  return result;
}

// 21
console.log("Sum of array is: " + sumOfArray([1, 4, 1, 5, 5, 5]));

/* You can use these to test your function:

sumOfArray([1, 4, 1, 5, 5, 5]); // 21
sumOfArray([3, 1, 2, 5, 9.9, 5, 11, 2, 7, 3, 0, 9, 3, 4, 8, 5]); // 33
sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 15

*/

//5. Create a variable `rect` that represents a rectangle. This should be an Object with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50
//console.log the rectangle object
var rectangle = {
  x: 30,
  y: 50,
  width: 100,
  height: 50
};
var rect;
console.log(rectangle);

//6. console.log the x- and y- coordinates of the rectangle (its location). Your output should have the format `"X, Y"`.

console.log(rectangle.x);
console.log(rectangle.y);

//7. Set the rectangle's height to be the square root of its width. Use Math.sqrt()
//Use *dot notation* to access the properties!
console.log((rectangle.height = Math.sqrt(rectangle.width)));

//8. console.log the rectangle's area (width * height). Use *dot notation* to access the properties!

rectangle.height = 50;
console.log(rectangle.width * rectangle.height);
//9. Create a variable `circle` that represents a circle. This should be an object
//with properties
//  `cx` (center-x-coordinate) of 34,
//  `cy` of 43, and
//  `radius` equal to the LAST value in the (sorted) `numbers` array.
//console.log the circle

var number = (decimalsPi = [9]);
console.log(number);

// console.log(radius);
var circle = {
  cx: 34,
  cy: 43,
  radius: decimalsPi[decimalsPi.length - 1]
};

//10. Create an array `shapes` that represents a list of shapes. The array should contain the rectangle and the circle objects defined above.
//console.log the variable. Be sure to inspect it in the developer console!
var shapes = [circle, rect];
console.log(shapes);

//11. Add a new object to the `shapes` array representing a right triangle.
//The triangle should have a `base` of 33 and a `height` of 44.
//console.log the updated shapes array
var triangle = {
  base: 33,
  height: 44
};
console.log(triangle);
shapes.push(triangle);
console.log(shapes);

//12. Calculate the hypotenuse of the triangle and assign the value to a 'hypotenuse' property inside the triangle object
//console.log the `shapes` array again.
triangle.hypotenuse = Math.sqrt(
  Math.pow(triangle.base, 2) + Math.pow(triangle.height, 2)
);
// hypotenuse = the square root of (a^2 + b^2)
// use the Math.sqrt() function and the .pow()
// shapes[2].hypotenuse = hypotenuse;
console.log(shapes);
