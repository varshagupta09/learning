const user ={
    name : "Varsha",
    email: "vrsa@gmail.com",
    password:"njkdncjkd6678"
};

console.log(user.name);
console.log(user.email);
console.log(user['password']);

console.log(Object.keys(user));
console.log(Object.values(user));

user.password = 'bhjbjhds';

console.log(user.password);

user.address = 'Lucknow';

console.log(user);


const smartPhone = {
    brand : 'Samsung',
    model : 's24 ultra',
    price: 136000,
    color:['black' , 'blue' , 'silver']
};

smartPhone.color[2] = 'white';

console.log(smartPhone);
smartPhone.color.push('red');
console.log(smartPhone);


const phoneList =[
    { brand : 'Samsung', model : 's24 ultra', price: 136000,color:['black' , 'blue' , 'silver']},
    { brand : 'OnePluse', model : 'Nord c3', price: 24000,color:['grey' , 'black' ]},
    { brand : 'Vivo', model : 'v7', price: 34000,color:['red' , 'yellow' ]},
    { brand : 'Xiaomi', model : 'note 12', price: 56000,color:['black' , 'blue' , 'silver']},
]

console.log(phoneList[0].price);

console.log(phoneList[2].color[1]);