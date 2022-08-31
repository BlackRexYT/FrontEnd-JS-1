/* F I R S T   E X A M P L E */


/* console.log('Hello World'[10])
console.log('aaa'.length) */


/* S E C O N D   E X A M P L E */


/*let str = 'rek'
console.log(str[str.length -1])*/


/* T H I R D   E X A M P L E */


// console.log('123')


/* F O U R T H   E X A M P L E */


// let name = 'Fahad'
// let isRaining = true
// let temperature = 20
// let planet = 'Earth'

// temperature = temperature + 2

// console.log(temperature)


/* F I F T H   E X A M P L E */


// let celsius = 10
// let fahrenheit = celsius * 1.8 + 32

// console.log(fahrenheit)


/* S I X T H   E X A M P L E */


// let bool = !false

// console.log(bool)


/* S E V E N T H   E X A M P L E */


// let subscribed = false
// let loggedIn = !false

// if (subscribed === true){
//     console.log('show the video')
// }
// else if(loggedIn === true){
//     console.log('pay money u brokie')
// }
// else{
//     console.log("fuck off")
// }


/* E I G T H   E X A M P L E */


// let cash = 50
// let price = 40
// let change = cash - price

// if (cash > price){
//     console.log('u pay extra, here '+ change +' change')
// }
// else if (cash === price){
//     console.log('exact change fuck off')
// }
// else{
//     console.log('More money hoe '+ change)
// }


/* E I G H T H   E X A M P L E */


// let cash = 50
// let price = 40
// let isStoreOpen = false

// if (NaN){
//     console.log('truthy boy')
// }
// else{
//     console.log('falsey boy')
// }



// let val = 'fahad'

// if (val){
//     console.log(!!val)
// }
// else{
//     console.log(!!val)
// }


/* N I N T H   E X A M P L E */


// let hot = true

// hot ? console.log('hot') : console.log('cold')


// let cash = 50
// let price = 40
// let isStoreOpen = true

// let str = isStoreOpen && cash>price ? 'giv' : 'no'

// console.log(str)


/* 1 0 T H   E X A M P L E */


// let counter = 1

// while (counter<=100){
//     console.log(counter)
//     counter+=1
// }


// for(let i = 0; i <= 100 ; i++){
//     console.log(i)
// }


/* 1 1 T H   E X A M P L E */


// let str = 'frontend simplified'

// for (i=0;i<=str.length;i++){
//     console.log(str[i])
// }


/* 1 2 T H   E X A M P L E */


// function welcomePersonToFES(name){
//     console.log(`Welcome to FES, `+ name)
// }

// welcomePersonToFES('david')
// welcomePersonToFES('zen')
// welcomePersonToFES('metri')


/* 1 3 T H   E X A M P L E */


// function sumOfTwoNumbers(i,j){
//     return i + j
// }

// console.log(sumOfTwoNumbers(5,10))




// function celsiusToFahrenheit(celsius){
//     fahrenheit=celsius * 1.8 + 32
//     return fahrenheit
// }

// console.log(celsiusToFahrenheit(0))
// console.log(celsiusToFahrenheit(10))
// console.log(celsiusToFahrenheit(30))


/* 1 4 T H   E X A M P L E */


// const celsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }

// console.log(celsiusToFahrenheit(10))


/* 1 5 T H   E X A M P L E */


// let arr = [10,20,30,40]
// console.log(arr[arr.length - 1])

// arr.push(200)

// let newArr = arr.filter(element => {
//     console.log(element)
//     if (element < 50){
//         return true
//     }
// })

// let newArr = arr.filter(element => {
//     return element < 50
// })

// let newArr = arr.filter(element => element < 50)

// console.log(newArr)


/* 1 6 T H   E X A M P L E */


// let arr = ['A+','A','FAIL']

// let newArr = arr.filter(element => {
//     if (element != 'FAIL'){
//         return true
//     }
// })

// console.log(newArr)


/* 1 7 T H   E X A M P L E */


// let arr = ['A+','A','FAIL']
// let newArr = []

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] != 'FAIL'){
//         newArr.push(arr[i])
//         console.log(arr[i])
//     }
// }
// console.log(newArr)


/* 1 8 T H   E X A M P L E */


// let arr = [1,2,3,4]

// // let newArr = arr.map((element) => {
// //     return 'lol'
// // })

// let newArr = arr.map(element => 'lol')

// console.log(newArr)


/* 1 9 T H   E X A M P L E */


// let dollars = [1,5,10,3]

// let cents = dollars.map(element => element * 100)

// console.log(cents)


/* 2 0 T H   E X A M P L E */


// let dollars = [1,5,10,3]

// let cents = []

// for (let i = 0; i<dollars.length;i++){
//     cents.push(dollars[i] * 100)
// }

// console.log(cents)


/* 2 1 S T   E X A M P L E */


let users = [
    {
        userName: 'Fahad',
        email:'fahadadsani@gmail.com',
        subStatus:'VIP',
        discordID:'Reks#6969',
        lessonsCompleted:[0, 1],  
        password: 'test123', 
    },
    {
        userName: 'Saleh',
        email:'salehalfadhel@gmail.com',
        subStatus:'VIP',
        discordID:'XS#idc',
        lessonsCompleted:[0, 1, 2, 3],   
        password: 'test123',
    },
]


function login(email,password){
    for(let i = 0; i <users.length; i++){
        if (users[i].email === email){
            if (users[i].password === password){
                console.log('password right login')
            }
            else{
                console.log('pass wrong retry')
            }
            return;
        }
    }
    console.log('email wrong')
}

login('fahadadsani@gmail.com','test123')



function register(user){
    users.push(user)
}
register({
    username:'fahad',
    email:'fahadadsani@gmail.com',
    password:'test123',
    subStatus:'vip',
    discordID:'reks#123',
    lessonsCompleted:[1,2,3]
})
