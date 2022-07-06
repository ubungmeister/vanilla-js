export type StreetType = {
    title:string
}
export type AdressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildetAt: number
    repairedAt: false
    address: AdressType
}

export type CityType = {
    title:string
    houses: Array<HouseType>
    governBuilding: Array<string>
    citizensNumber: number
}