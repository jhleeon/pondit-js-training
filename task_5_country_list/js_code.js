const btn = document.getElementById("btn");
const container = document.getElementById("container");
btn.addEventListener("click",fetchdata);

function fetchdata(){
fetch('country_data.json')
.then(Response => Response.json())
.then(data =>{
  showdata(data);
})
.catch(error=>{
  console.log(error);
})
}

function showdata(data){
const ul = document.createElement("ul");
container.appendChild(ul);
data.forEach(element => {
  const li = document.createElement("li");
  li.innerText =`${element.country}`;
  ul.appendChild(li);
});

}