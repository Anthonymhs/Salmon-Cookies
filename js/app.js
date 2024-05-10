// 'use strict';

// const seattle = {
//   locationName: 'Seattle',
//   minCostumerPerHour: 23,
//   maxCostumerPerHour: 65,
//   averageCostumerPerHour:6.3,
//   cookiesEachHour:[],
//   estimate: function(){
//     this.cookiesEachHour = estimateSales(this);
//   }
// }

// const tokio = {
//     locationName: 'Tokio',
//     minCostumerPerHour: 3,
//     maxCostumerPerHour: 24,
//     averageCostumerPerHour:1.2,
//     cookiesEachHour:[],
//     estimate: function(){
//       this.cookiesEachHour = estimateSales(this);
//     }
//   }

//   const dubai = {
//     locationName: 'Dubai',
//     minCostumerPerHour: 11,
//     maxCostumerPerHour: 38,
//     averageCostumerPerHour: 3.7,
//     cookiesEachHour:[],
//     estimate: function(){
//       this.cookiesEachHour = estimateSales(this);
//     }
//   }

//   const paris = {
//     locationName: 'París',
//     minCostumerPerHour: 20,
//     maxCostumerPerHour: 38,
//     averageCostumerPerHour:2.3,
//     cookiesEachHour:[],
//     estimate: function(){
//       this.cookiesEachHour = estimateSales(this);
//     }
//   }

//   const lima = {
//     locationName: 'Lima',
//     minCostumerPerHour: 2,
//     maxCostumerPerHour: 16,
//     averageCostumerPerHour:4.6,
//     cookiesEachHour:[],
//     estimate: function(){
//       this.cookiesEachHour = estimateSales(this);
//     }
//   }
function CookieLocation(locationName, minCustomersPerHour, maxCustomersPerHour, averageCustomersPerHour) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCustomersPerHour = averageCustomersPerHour;
}
CookieLocation.prototype.estimate = function () {
  this.cookiesEachHour = estimateSales(this);
};

CookieLocation.prototype.renderFilas = function () {
  const tr = document.createElement('tr');
  const tdLocation = document.createElement('td');
  tdLocation.textContent = this.locationName;
  tr.appendChild(tdLocation);

  for (let i = 0; i < horas.length; i++) {
    const td = document.createElement('td');
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }
  return tr;
};

const seattle = new CookieLocation('Seattle', 23, 65, 6.3);
const tokio = new CookieLocation('Tokio', 3, 24, 1.2);
const dubai = new CookieLocation('Dubai', 11, 38, 3.7);
const paris = new CookieLocation('París', 20, 38, 2.3);
const lima = new CookieLocation('Lima', 2, 16, 4.6);

const horas = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Locations Total'];
const stores = [seattle, tokio, dubai, paris, lima];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function estimateSales(store) {
  const sales = [];
  for (let i = 0; i < horas.length; i++) {
    const numConsumidores = random(store.minCustomersPerHour, store.maxCustomersPerHour);
    const hourSales = Math.ceil(numConsumidores * store.averageCustomersPerHour);
    sales.push(hourSales);
  }
  return sales;
}

const table = document.querySelector('section#tabla table');
const thead = table.querySelector("thead");
const tbody = table.querySelector("tbody");
const tfoot = table.querySelector("tfoot");

const inputLocationName=document.getElementById("locationName");
const inputMinCustPerHour=document.getElementById("minCustPerHour");
const inputMaxCustPerHour=document.getElementById("maxCustPerHour");
const inputAverageCustomerPerHour=document.getElementById("averageCustPerHour");

const buttonAdd=document.getElementById("agregarDatos");

buttonAdd.addEventListener('click', function (event) {
  event.preventDefault();

  if (!inputLocationName.value || !inputMinCustPerHour.value || !inputMaxCustPerHour.value || !inputAverageCustomerPerHour.value)
    return;

  const newLocation = new CookieLocation(
    inputLocationName.value,
    parseInt(inputMinCustPerHour.value),
    parseInt(inputMaxCustPerHour.value),
    parseFloat(inputAverageCustomerPerHour.value)
  );

  newLocation.estimate();
  stores.push(newLocation);

  const trow = newLocation.renderFilas();
  tbody.appendChild(trow);

  const currentTr = tfoot.querySelector("tr");
  if (currentTr) {
    tfoot.removeChild(currentTr);
  }
  renderCrearFilaPie();
});

function crearFilaEncabezado() {
  const tr = document.createElement("tr");
  const thLocation = document.createElement("th");
  thLocation.textContent = "Locations";
  tr.appendChild(thLocation);
  for (let i = 0; i < horas.length; i++) {
    const th = document.createElement("th");
    th.textContent = horas[i];
    tr.appendChild(th);
  }
  return tr;
}

function crearFilaPie() {
  const tr = document.createElement("tr");
  const tdTotal = document.createElement("td");
  tdTotal.textContent = "Total";
  tr.appendChild(tdTotal);
  for (let i = 0; i < horas.length; i++) {
    let totalHora = 0;
    for (let i = 0; i < stores.length; i++) {
      totalHora += stores[i].cookiesEachHour[i];
    }
    const tdHora = document.createElement("td");
    tdHora.textContent = totalHora;
    tr.appendChild(tdHora);
  }
  return tr;
}

function renderCrearFilaPie() {
  const tr = crearFilaPie();
  tfoot.appendChild(tr);
}

function mostrarTiendas() {
  for (let i = 0; i < stores.length; i++) {
    stores[i].estimate();
    const trow = stores[i].renderFilas();
    tbody.appendChild(trow);
  }
}

thead.appendChild(crearFilaEncabezado());
mostrarTiendas();
renderCrearFilaPie();



//   const location = document.createElement('section');
//  location.classList.add('location');
//  base.appendChild(location);

//  const h2 = document.createElement('h2');
//  h2.textContent = store.locationName;
//  location.appendChild(h2);

//  const list=document.createElement('ul');
// location.appendChild(list);

//  for(let i=0; i<horas.length;i++){
//      const listItem=document.createElement('li');
//      listItem.textContent= horas[i] + ':' + store.cookiesEachHour[i] + ' cookies';
//     list.appendChild(listItem);
// }
//}
