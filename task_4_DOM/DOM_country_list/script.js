
let countries = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}
]

function fetchcountries(){

    let unorderList = document.createElement("UL");
    unorderList.setAttribute("id","ullist")

    for(country of countries){
       let listText = window.document.createTextNode(country.name);
       let list = document.createElement("LI");
       list.appendChild(listText);
       unorderList.appendChild(list);
    }
    document.getElementById("country_list_div").appendChild(unorderList);
}

function removelist(){
    let countryListDiv = document.getElementById("country_list_div");
    let contentNode = document.getElementById("ullist");
    countryListDiv.removeChild(contentNode);
}

let loadbtn = document.getElementById("country_list_btn");
loadbtn.addEventListener("click",fetchcountries);


let clearlist = document.getElementById("clean_country_list_btn");
clearlist.addEventListener("click",removelist);

