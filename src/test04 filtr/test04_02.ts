import {CityType} from "../test02/test02_02";
import {GovernmentBuildingType } from "../test02/test02_02";

export const demolishHousesOnTheStreet =(city:CityType, street:string)=>{
    city.houses = city.houses.filter(h =>h.address.street.title !== 'Italska')
}

export const getBuildingsWithStaffCountGreaterThen = (buildings:Array<GovernmentBuildingType>,staffCount:number )=>{
   //returnem tak kak my potom zapisyvajem v peremenuji buildings
    return buildings.filter(s => s.staffCount > staffCount)
}