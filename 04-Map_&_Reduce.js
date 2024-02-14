                    // Map // 

// const map = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]));
//     }
//     return output;
//    }
//    const multiplyBy2 = input => input*2
//    const result = map([1, 2, 3], multiplyBy2);


                   // Reduce //


// const reduce = (array, howToCombine, buildingUp) => {
//     for (let i = 0; i < array.length; i++){
//     buildingUp = howToCombine(buildingUp, array[i])
//     }
//     return buildingUp
//    }
//    const add = (a, b) => a + b
//    const summed = reduce([1,2,3], add, 0)

                  
                 // Build In Array Method //


// const array = [1,2,3]
// array.push(10) // Where’s this push method come from?


// const add = (a, b) => a + b
// const summed = reduce([1,2,3], add, 0) // summed is 6


                      // Filter //


// const array = [1,2,3,4,5,6]
// const greaterThan2 = num => num > 2
// const add = (a, b) => a + b
// const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add,0)
