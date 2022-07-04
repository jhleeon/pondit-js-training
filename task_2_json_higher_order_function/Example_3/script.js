const users = [
  {
    firstName: "Jahedul",
    lastName: "Hasan",
    age: 25,
    contact: {
      id: { phone: 1001, mail: "jahid@gmail.com" },
    },
  },

  {
    firstName: "Asif",
    lastName: "Hossain",
    age: 26,
    contact: {
      id: { phone: 1002, mail: "asif@gmail.com" },
    },
  },
  {
    firstName: "Akter",
    lastName: "Zaman",
    age: 24,
    contact: {
      id: { phone: 1003, mail: "akter@gmail.com" },
    },
  },
  {
    firstName: "Adnan",
    lastName: "Hossain",
    age: 25,
    contact: {
      id:{ phone: 1001, mail: "adnan@gmail.com" },
    },
  },
];

//console log
console.log(`length of users = `+ users.length);

console.log("~~users first name~~");
//while loop
let i=0;
while(i<users.length){
    console.log(users[i].firstName);
    i++;
}

console.log("~~User last name~~");
//for loop
for(i=0;i<users.length;i++){
    console.log(users[i].lastName);
}

console.log("~~user age~~");
//for of
for(country of users){
    console.log(country.age);
}

console.log("~~conatct~~");

// foreach
users.forEach(element => {
  console.log(element.contact.id.mail);
});

//using map for fullname print
const fullname = users.map(user => {
  return user.firstName+" "+user.lastName;
});
console.log(fullname);


//using map & filter to see user under 25
 const output = users.filter(element => element.age < 25)
 .map(element => { return element.firstName});
 console.log(output);


 //Reduce
 const countValue = users.reduce(function(acc, cur){

  if(acc[cur.age]){
      ++acc[cur.age];
  }
  else{
    acc[cur.age] =1;
  }
return acc;
 },{});

 console.log(countValue);