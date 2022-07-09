const ages = [30,33,87,65,92,100,16]

const predicate = (age:number) =>{
    return age > 90
}
const oldAges = [100]

type CourseType = {
    title: string
    price: number
}
const courses = [
    {title: 'HTML', price: 150},
    {title: 'Java', price: 350},
    {title: 'PHP', price: 250}
]

const cheapPredicate = (course:CourseType)=>{
    return course.price > 200
}

const cheapCourse = [
    {title: 'Java', price: 350},
    {title: 'PHP', price: 250}
]
