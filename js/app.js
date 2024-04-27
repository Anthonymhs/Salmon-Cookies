'use strict';

const seattle = {
  locationName: 'Seattle',
  minCostumerPerHour: 23,
  maxCostumerPerHour: 65,
  averageCostumerPerHour:6.3,
  cookiesEachHour:[],
  estimate: function(){
    this.cookiesEachHour = estimateSales(this);
  }
}

const tokio = {
    locationName: 'Tokio',
    minCostumerPerHour: 3,
    maxCostumerPerHour: 24,
    averageCostumerPerHour:1.2,
    cookiesEachHour:[],
    estimate: function(){
      this.cookiesEachHour = estimateSales(this);
    }
  }

  const dubai = {
    locationName: 'Dubai',
    minCostumerPerHour: 11,
    maxCostumerPerHour: 38,
    averageCostumerPerHour: 3.7,
    cookiesEachHour:[],
    estimate: function(){
      this.cookiesEachHour = estimateSales(this);
    }
  }

  const paris = {
    locationName: 'París',
    minCostumerPerHour: 20,
    maxCostumerPerHour: 38,
    averageCostumerPerHour:2.3,
    cookiesEachHour:[],
    estimate: function(){
      this.cookiesEachHour = estimateSales(this);
    }
  }

  const lima = {
    locationName: 'Lima',
    minCostumerPerHour: 2,
    maxCostumerPerHour: 16,
    averageCostumerPerHour:4.6,
    cookiesEachHour:[],
    estimate: function(){
      this.cookiesEachHour = estimateSales(this);
    }
  }

const horas=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
const stores=[seattle,tokio,dubai,paris,lima];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


  function estimateSales(store) {
    const sales = [];
    for (let i = 0; i < horas.length; i++) {
      const numConsumidores = random(store.minCostumerPerHour, store.maxCostumerPerHour);
      const hourSales = Math.ceil(numConsumidores * store.averageCostumerPerHour);
      sales.push(hourSales);
    }
    return sales;
    }



function render(store){
    let total=0;
    const base=document.getElementById('base');

    const location = document.createElement('section');
    location.classList.add('location');
    base.appendChild(location);

    const h2 = document.createElement('h2');
    h2.textContent = store.locationName;
    location.appendChild(h2);

    const list=document.createElement('ul');
    location.appendChild(list);

    for(let i=0; i<horas.length;i++){
        const listItem=document.createElement('li');
        listItem.textContent= horas[i] + ':' + store.cookiesEachHour[i] + ' cookies';
        list.appendChild(listItem);
    }
}

function ejecutar(){
    for(let i=0;i<stores.length;i++){
        stores[i].estimate();
        render(stores[i]);
    }
}

ejecutar();

