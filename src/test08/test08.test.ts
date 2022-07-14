type Usertype = {
    [key:string]:{id:number,name:string}
}
let users: Usertype

beforeEach(()=>{
    users={
        '101':{id:101,name:'Viki'},
        '102':{id:102,name:'Max'},
        '110':{id:110,name:'Tom'},
        '56':{id:56,name:'Alf'},
    }
})

test('update name of the user',()=>{
    users['56'].name = 'Alfred'

    expect(users['56'].name).toBe('Alfred')
    expect(users['56']).toEqual({id:56, name:'Alfred'})


})

test('delite name of the user',()=>{
    delete users['101']

    expect(users['101']).toBeUndefined()

})