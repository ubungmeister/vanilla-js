import {CityType} from "../test02/test02_02";
import {getStreetsTitlesOfGovernmentBuildings} from "./test05_02";
import {getStreetsTitlesOfHouses} from "./test05_02";
import {createGreetingMessage} from "./test05_02";
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
// 01
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");

})
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("Holandska");
    expect(streetsNames[1]).toBe("Gruzinska");
    expect(streetsNames[2]).toBe("Italska");
})

test('create greeting messages for streets',()=>{
    let messages = createGreetingMessage(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from Holandska')
    expect(messages[2]).toBe('Hello guys from Italska')
})




