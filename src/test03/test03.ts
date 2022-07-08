import {StudentType} from "../test02/test02";
import {CityType, GovernmentBuildingType, HouseType} from "../test02/test02_02";

export const sum =(a:number, b:number) => {
    return a+b
}
const res1 = sum(2,3)
const res2 = sum(sum(2,2),2)

export const addSkill =(st:StudentType, skill:string)=>{
        st.technologies.push({
            id: new Date().getTime(),
            title: skill
        })
}

export const makeStudentActive = (st:StudentType, active:boolean)=>{
    st.isActive = active
}

export const doesStudentLiveIn = (st:StudentType, city:string)=>{
    return st.adress.region.town === city
}

// test_03_02
export const addMoneyToBudget=(building:GovernmentBuildingType , budget:number)=> {
    building.budget += budget
}
export const repairHouse =(house: HouseType)=>{
    house.repairedAt = true
}