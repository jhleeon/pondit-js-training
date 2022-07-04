const employees=[  
    {"id":1,"name":"Shyam", "email":"shyamjaiswal@gmail.com","salary":20000},  
    {"id":2,"name":"Bob", "email":"bob32@gmail.com", "salary":25000},  
    {"id":4,"name":"Jai", "email":"jai87@gmail.com","salary":15000},
    {"id":7,"name":"Json", "email":"json87@gmail.com","salary":15000} 
];

//console log
console.log(`length of employees =`+ employees.length);


//while loop
let i=0;
while(i<employees.length){
    console.log(employees[i].id);
    i++;
}

//for loop
for(i=0;i<employees.length;i++){
    console.log(employees[i].name);
}

//for of
for(country of employees){
    console.log(country.email);
}

// foreach
employees.forEach(element => {
    console.log(element.salary);
});
//--------------------------------------------//


// insert a string before id using map
const inserCode = employees.map(elements => {
    return "Pondit-"+elements.id;
  });
console.log(inserCode);


//filter even id employess
const evenIdDetails = employees.filter(function(elements){
    return elements.id%2 == 0;
});
console.log(evenIdDetails);


//Find total employees salary given by company using reduce
const totalSalary = employees.reduce(function(salary, currentObj){
  return  salary = salary+currentObj.salary;
},0);
console.log(totalSalary);