import {CityType} from './test02_02'
import {GovernmentBuildingType} from "./test02_02";

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

//01 create CityType
//02 fill in city, test should be passed
test('test should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildetAt).toBe(2012)
    expect(city.houses[0].repairedAt).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('Holandska')

    expect(city.houses[1].buildetAt).toBe(2008)
    expect(city.houses[1].repairedAt).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Gruzinska')

    expect(city.houses[2].buildetAt).toBe(2020)
    expect(city.houses[2].repairedAt).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe('Italska')
})
//01 create GovernmentBuildingType
//02 pass tests
    test("test city should contains hospital and fire station", () => {
        expect(city.governmentBuildings.length).toBe(2);

        expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
        expect(city.governmentBuildings[0].budget).toBe(1000);
        expect(city.governmentBuildings[0].staffCount).toBe(200);
        expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");

        expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
        expect(city.governmentBuildings[1].budget).toBe(500000);
        expect(city.governmentBuildings[1].staffCount).toBe(1000);
        expect(city.governmentBuildings[1].address.street.title).toBe("South Str");

    })
