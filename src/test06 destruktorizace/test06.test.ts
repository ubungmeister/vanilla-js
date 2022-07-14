type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    adress:{
        street:{
            title: string
        }
    }
}

let man:ManType

beforeEach(()=>{
    man = {
        name: 'April',
        age: 22,
        lessons: [{title: '1'},{title: '2'}],
        adress:{
            street:{
                title: 'Malinovskeho namesti'
            }
        }

    }
})

test('l',()=>{

    // const age = man.age
    // const name = man.name, the same:
   const  {age,name} = man

    const a = man.age
    const n = man.name

    expect(a).toBe(22)
    expect(n).toBe('April')

    expect(age).toBe(22)
    expect(name).toBe('April')

})

test('massiv distruktorizace',()=>{
    const l1 = man.lessons[0]
    const l2 = man.lessons[1]

    const[ls1,ls2] = man.lessons

    expect(l1.title).toBe('1')
    expect(ls1.title).toBe('1')

})