                 // Function Composition //


// const multiplyBy2 = x => x*2
// const add3 = x => x+3
// const divideBy5 = x => x/5
// const initialResult = multiplyBy2(11)
// const nextStep = add3(initialResult)
// const finalStep = divideBy5(nextStep)
// console.log("finalStep", finalStep)


                            // 2 //


// const multiplyBy2 = x => x*2
// const add3 = x => x+3
// const divideBy5 = x => x/5
// const result = divideBy5(add3(multiplyBy2(11)))


                        // Function Composition With Reduce //


// const multiplyBy2 = x => x*2
// const add3 = x => x+3
// const divideBy5 = x => x/5
// const reduce = (array, howToCombine, buildingUp) => {
//  for (let i = 0; i < array.length; i++){
//  buildingUp = howToCombine(buildingUp, array[i])
//  }
//  return buildingUp
// }
// const runFunctionOnInput = (input,fn) => {
//  return fn(input)
// }
// const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11)


                        // Function Composition With Review //


// const multiplyBy2 = x => x*2
// const add3 = x => x+3
// const divideBy5 = x => x/5
// const subtract4 = x => x-4
// const reduce = (array, howToCombine, buildingUp) => {
//  for (let i = 0; i < array.length; i++){
//  buildingUp = howToCombine(buildingUp, array[i])
//  }
//  return buildingUp
// }
// const runFunctionOnInput = (input,fn) => { return fn(input) }
// const output = reduce([
//  multiplyBy2,
//  add3,
//  divideBy5,
//  subtract4
//  ],
//  runFunctionOnInput, 11
// )
