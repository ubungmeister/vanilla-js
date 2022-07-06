// import {mult, splitwords, sum} from "./01";
//
// let a: number;
// let b: number;
// let c: number;
// beforeEach(()=>{
//     a = 100
//     b = 2
//     c = 33
// })
//
// test('sum should be corrected', ()=>{
//
//         //action
//     const result = sum(a,b)
//     const result2 = mult(a,c)
//         //result
//     expect(result2).toBe(4)
// })
//
//
//
// test('multiply should be corrected', ()=>{
//     const a = 1;
//     const b = 2;
//     const c = 3;
//     //action
//     const result = mult(a,b)
//     const result2 = mult(a,c)
//     //result
//     expect(result).toBe(4)
//     expect(result2).toBe(3)
// })
//
// test('splitting into words should be corrected', ()=>{
//     //data
//     const sent= 'Hello my friends!'
//     const sent1= 'I  am here'
//     //action
//     const result1 = splitwords(sent)
//
//     //result
//     expect(result1.length).toBe(3)
//     expect(result1[0]).toBe('hello')
//     expect(result1[1]).toBe('m')
//     expect(result1[2]).toBe('friends')
// })