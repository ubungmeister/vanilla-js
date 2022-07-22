function increaseAge(u: UserType){
    u.age++
}
type UserType = {
    name: string
    age: number
    address:{title:string}
}
test('first test', ()=>{

    let user: UserType = {
        name: 'Max',
        age: 18,
        address:{title:'Hawaii'}
    }
    increaseAge(user)

    expect(user.age).toBe(19)
})
test('second test', ()=>{

    let users =[
        {name: 'Max',
        age: 18},
        {name: 'Tom',
            age: 24}
    ]
    let admins = users
    admins.push({name: 'Harry', age:20})

    expect(users[2]).toEqual({name: 'Harry', age:20})
})
test('array test', ()=>{

    let user = 100
    let admin = user
    admin++

    expect(admin).toBe(101)
    expect(user).toBe(100)
})

test('reference test', ()=>{

    let user: UserType= {
        name:'Jim',
        age:33,
        address: {title: 'London'}
    }
    let add = user.address

    let user2: UserType= {
        name:'Jim',
        age:33,
        address: add
    }

    user2.address.title = 'Paris'
    // nevytvari se kopie ale pouze odkaz na address, cili pokud neco menim tak to projevi vsude
    expect(user.address.title).toBe('Paris')
})


