import {CityType} from "../test02/test02_02";
import {addMoneyToBudget} from "./test03";
import {repairHouse} from "./test03";
let city: CityType;

beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [{
            buildetAt: 2012, repairedAt: false,
            address: {number: 100, street: {title: 'Holandska'}}
        },
            {
                buildetAt: 2008, repairedAt: false,
                address: {number: 100, street: {title: 'Gruzinska'}}
            },
            {
                buildetAt: 2020, repairedAt: false,
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


// 01. tests should be passed
test("Budget should be for changed fot HOSPITAL", () => {

    addMoneyToBudget(city.governmentBuildings[0], 1000);

    expect(city.governmentBuildings[0].budget).toBe(2000);
})

// 02
test.skip("House shoulhd be repared", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repairedAt).toBeTruthy();
});












