export type LocalCityType ={
    town: string
    postcode:number
}
export type RegionType = {
    streetAdress: string
    region: LocalCityType
}
export type TechnoType ={
    id:number
    title: string
}
export type StudentType={
    id:number
    name:string
    age:number
    isActive:boolean
    adress:RegionType
    technologies:Array<TechnoType>
}


export const student:StudentType ={
     id: 2,
     name:'Max',
     age: 18,
     isActive: true,
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
console.log(student.technologies[0].title)

