let countries = [
  {
    "name": "Afghanistan",
    "capital": "Kabul",
    "region": "AS",
    "currency": {
      "name": "Afghan afghani",
      "symbol": "؋",
    },
    "language": {
      "name": "Pashto",
    },
  },

  {
    "name": "Germany",
    "capital": "Berlin",
    "region": "EU",
    "currency": {
      "name": "Euro",
      "symbol": "€",
    },
    "language": {
      "name": "German",
    },
  },

  {
    "name": "Argentina",
    "capital": "Buenos Aires",
    "region": "SA",
    "currency": {
      "name": "Argentine peso",
      "symbol": "$",
    },
    "language": {
      "name": "Spanish",
    },
  },

  {
    "name": "Brazil",
    "capital": "Brasília",
    "region": "SA",
    "currency": {
      "name": "Brazilian real",
      "symbol": "R$",
    },
    "language": {
      "name": "Portuguese",
    },
  },
];

//countries array length
console.log(countries.length);


// countries name using while
let i=0;
while(i<countries.length){
    console.log(countries[i].name);
    i++;
}

//countries capital using for loop
for(i=0;i<countries.length;i++){
    console.log(countries[i].capital);
}

//country region using for off
for(country of countries){
    console.log(country.region);
}

//currency name using foreach
countries.forEach(element => {
    console.log(element.currency.name);
});

//currency symbol using for in
for(countryIndex in countries){
    console.log(countries[countryIndex].currency.symbol);
}
//--------------------------------------------//


//creating a language array using for of from countries
let lan=[];
i = 0;
for(country of countries){
    lan[i] = country.language.name;
    i++;
}
console.log(lan); 

//creating a currency symbol array using forEach from countries
// const currencySymbol = [];
// countries.forEach(icon => {
//     currencySymbol.push(icon.currency.symbol);
// });
// console.log(currencySymbol);

//creating a language array using map from countries
const countryLanguage = countries.map(item => {
    return item.language.name;
  });
console.log(countryLanguage);


//filter countries name which is grater than 7 words
const wordLengthCheck = countries.map(item => item.name).filter(item => item.length > 7);
console.log(wordLengthCheck);


//use reduc to count items
 const countRegion = countries.reduce(function(store, current){

  if(store[current.region]){
        ++store[current.region];
  }
  else{
    store[current.region] = 1;
  }
return store;
 },{});
 console.log(countRegion);