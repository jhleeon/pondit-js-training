const company =[
    {name:"Alpha cat", category:"Food service",start:2006, end:2011},
    {name:"Ekhanei", category:"Ecommerce",start:2004, end:2012},
    {name:"RingID", category:"Social Business",start:2012, end:2017},
    {name:"Evaly", category:"Ecommerce",start:2016, end:2021},
];

//console log
console.log(`length of company = `+ company.length);

console.log("~~Company Name~~");
//while loop
let i=0;
while(i<company.length){
    console.log(company[i].name);
    i++;
}

console.log("~~Categories~~");
//for loop
for(i=0;i<company.length;i++){
    console.log(company[i].category);
}

console.log("~~Start Date~~");
//for of
for(country of company){
    console.log(country.start);
}

console.log("~~End Date~~");
// foreach
company.forEach(element => {
    console.log(element.end);
});


//----------------------//

//filter satrt to end between 2002 to 2014 companies list
const filterCompnay = company.filter(company=>{
    return (company.start> 2001 && company.end<2015)
});
console.log(filterCompnay);

// companyname with Time using map
const companyDuration = company.map(company =>{
    return `${company.name} [${company.start} - ${company.end}]`;

});
console.log(companyDuration);


//reduce max sustain year of a company
const maxsustain = company.reduce( function(max, currentElement){
    if((currentElement.end) > max)
    {
        max = currentElement.end;
    }
    return max;
},0);
console.log(maxsustain);