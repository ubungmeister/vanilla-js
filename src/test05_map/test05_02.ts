import {CityType, HouseType} from "../test02/test02_02";
import {GovernmentBuildingType } from "../test02/test02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings:Array<GovernmentBuildingType>)=> {
   return  buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses:Array<HouseType>)=>{
    return houses.map(h=>h.address.street.title)
}

export const createGreetingMessage = (streets: Array<HouseType>) =>{
    return streets.map(h => `Hello guys from ${h.address.street.title}`)

}