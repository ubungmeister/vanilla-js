import {ManType} from "./test05";
import {createWelcomeMessages} from "./test05";
let  people: Array<ManType> = []

beforeEach(()=> {
    people  = [
        {name: 'Stefan Vogel', age: 19},
        {name: 'Mark Antonio', age: 34},
        {name: 'Andrej Brzobohaty', age: 22},
    ]
})
test('welcome every client!',()=>{

    //const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome!`)
    const messages = createWelcomeMessages(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Stefan. Welcome!')
})
