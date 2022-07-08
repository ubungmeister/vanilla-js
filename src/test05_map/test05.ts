export type ManType ={
    name: string
    age:number
}

const people: Array<ManType> = [
    {name: 'Stefan Vogel', age: 19},
    {name: 'Mark Antonio', age: 34},
    {name: 'Andrej Brzobohaty', age: 22},
]

// const transformator = (man:ManType) =>({
//     stack: ['css','html','PHP','Js'],
//     firstName: man.name.split(' ')[0],
//     secondName: man.name.split(' ')[1],
// })
// const result = people.map(transformator)- the same :
const result1 = people.map(man =>({
    stack: ['css','html','PHP','Js'],
    firstName: man.name.split(' ')[0],
    secondName: man.name.split(' ')[1],
}))

const result2 = people.map( man => `Hello ${man.name.split(' ')[0]} . Welcome!`)

export const createWelcomeMessages = (people:Array<ManType> ) =>{
    return  people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome!`)
}