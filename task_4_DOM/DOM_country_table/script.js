let btnGet = document.querySelector("button");
let myTable = document.querySelector("#table");

let countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Zimbabwe", code: "ZW" },
];

let headers = ["Country Name", "Country Code"];

btnGet.addEventListener("click", function () {
  let table = document.createElement("table");
  table.setAttribute("style", "border:1px solid;");
  let headerRow = document.createElement("tr");

  //Table Header
  headers.forEach((headerText) => {
    let header = document.createElement("th");
    header.setAttribute("style", "border:1px solid;");
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);


  //Countries Data
  countries.forEach((item) => {
    let row = document.createElement("tr");
    Object.values(item).forEach((text) => {
      let cell = document.createElement("td");
      cell.setAttribute("style", "border:1px solid;");
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  myTable.appendChild(table);
});