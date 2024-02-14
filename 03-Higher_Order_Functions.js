                // Repetative Function //

// const copyArrayAndAdd3 = (array) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(array[i] +3);
//     }
//     return output;
//    }
//    const myArray = [1,2,3]
//    const result = copyArrayAndAdd3(myArray);


              // Generalized  Function //


// const copyArrayAndManipulate = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]));
//     }
//     return output;
//    }
//    const multiplyBy2 = (input) => {
//     return input * 2;
//    }
//    const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);


                // Higher Order Function Review //


// const copyArrayAndManipulate = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]));
//     }
//     return output;
//    }
//    const multiplyBy2 =(input) => {
//     return input * 2;
//    }
//    const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);


                    // Arrow And Anonymous Function //


// const copyArrayAndManipulate = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]));
//     }
//     return output;
//    }
//    const result = copyArrayAndManipulate([1, 2, 3], input => input*2);
//    //No multiplyBy2 function independently declared/saved
