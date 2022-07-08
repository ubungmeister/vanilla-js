import {CityType} from "../test02/test02_02";
import {demolishHousesOnTheStreet} from "./test04_02";
import {getBuildingsWithStaffCountGreaterThen} from "./test04_02";
let city: CityType

beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [{
            id: 1, buildetAt: 2012, repairedAt: false,
            address: {number: 100, street: {title: 'Holandska'}}
        },
            {
                id: 2, buildetAt: 2008, repairedAt: false,
                address: {number: 100, street: {title: 'Gruzinska'}}
            },
            {
                id: 3, buildetAt: 2020, repairedAt: false,
                address: {number: 101, street: {title: 'Italska'}}
            }],
        governmentBuildings: [
            {type:'HOSPITAL', budget:1000, staffCount:200,
                address: {number:22, street: {title:'Central Str'}}},
            {type:'FIRE-STATION', budget:500000, staffCount:1000,
                address: {number:22, street: {title:'South Str'}}}],
        citizensNumber: 200000
    }

})

// 01. Complete the HouseType (add an ordinal id from 1 and ascending)
// 02. Create another function in the same file to make the tests pass
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Italska');

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(1);

})

// 03.
test('buildings with correct staff count > 500', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(
        city.governmentBuildings,
        500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})
























