let arr = [1,2,3,4,5];

let mul = e => console.log(e**e);

function mulLong(num) {
    console.log(num**num);
}

arr.map(mul);
arr.map(mulLong);


// Arrow Function Variations
let noArgs = () => 3;
let placeholderArg = _ => 3;
let args = (x, y) => 3;
let statement = x => { try { 3; } catch(e) {} };
let multiLine = x => {
  return x;  // no implicit return
};
let withObject = x => ({x: 3});


// Exercise
