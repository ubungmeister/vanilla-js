import {StudentType} from "../test02/test02";
import {addSkill} from "./test03";
import {makeStudentActive} from "./test03";
import {doesStudentLiveIn} from "./test03";

let student: StudentType

beforeEach(()=>{
    student = { id: 2,
        name:'Max',
        age: 18,
        isActive: false,
        adress: {
            region:{
                town: 'Praha',
                postcode: 10100
            },
            streetAdress: 'Havelska2',
        },
        technologies: [
            {id:1, title:'HTML'},
            {id:2, title:'HTML'},
            {id:3, title:'HTML'}
        ]
    }
})

test ('new tech skills should be added to student', ()=>{

    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()

})

test ('student should be active', ()=>{

    expect(student.isActive).toBe(false)

    makeStudentActive(student, true)

    expect(student.isActive).toBe(true)
})

test ('student live in Praha', ()=>{

    let res1 = doesStudentLiveIn(student,'Praha')
    let res2 = doesStudentLiveIn(student,'Brno')

    expect(res1).toBe(true)
    expect(res2).toBe(false)
})