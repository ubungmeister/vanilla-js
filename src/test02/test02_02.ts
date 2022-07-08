export type StreetType = {
    title:string
}
export type AdressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    id?: number
    buildetAt: number
    repairedAt: boolean
    address: AdressType
}
export type GovernmentBuildingType ={
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount:number
    address:AdressType
}

export type CityType = {
    title:string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

