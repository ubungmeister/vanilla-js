test('choose people after 90 years old',()=>{
    const ages = [30,33,87,65,92,100,16]

//     const predicate = (age:number) =>{
//         return age > 90 } - the same meaning :
//     const predicate = (age:number) => age > 90
//     const oldAges = ages.filter(predicate) - the same meaning :
//     zamesto objavleinia predikata zapisivajem jeho do filtru:

    const oldAges = ages.filter((age:number) => age > 90)


    expect(oldAges.length).toBe(2)
    expect(oldAges[1]).toBe(100)
})

test('choose courses with price > 200',()=>{
    type CourseType = {
        title: string
        price: number
    }
    const courses = [
        {title: 'HTML', price: 150},
        {title: 'Java', price: 350},
        {title: 'PHP', price: 250}
    ]
    // const cheapPredicate = (course:CourseType)=>{
    //     return course.price > 200
    // }
    // const cheapCourse = courses.filter(cheapPredicate) - the same:
    // const cheapCourse = courses.filter((course:CourseType )=> course.price > 200) = :
    const cheapCourse = courses.filter((course)=> course.price > 200)

    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse[0].title).toBe('Java')
    expect(cheapCourse[1].price).toBe(250)

})
test('get only completed tasks',()=>{
    const tasks =[
        {id: 1, title: 'Milk', isDone: true},
        {id: 1, title: 'Bread', isDone: false},
        {id: 1, title: 'Sugar', isDone: true},
        {id: 1, title: 'Eggs', isDone: false}
    ]
    const completedTasks = tasks.filter(task=>task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[1].title).toBe('Sugar')
})
test('get only uncompleted tasks',()=>{
    const tasks =[
        {id: 1, title: 'Milk', isDone: true},
        {id: 1, title: 'Bread', isDone: false},
        {id: 1, title: 'Sugar', isDone: true},
        {id: 1, title: 'Eggs', isDone: false},
        {id: 1, title: 'Water', isDone: false}
    ]
    const unCompletedTasks = tasks.filter(task=> !task.isDone)

    expect(unCompletedTasks.length).toBe(3)
    expect(unCompletedTasks[1].title).toBe('Eggs')
})












