const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if(i==1 || i==4 || i==5){
        let card = document.createElement('section');
        let cluster = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1= document.createElement('p');
        let p2= document.createElement('p');
        let p3= document.createElement('p');
        let image = document.createElement('img');
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p2.textContent = 'Population: ' + towns[i].currentPopulation;
        p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', "./images/" + towns[i].photo);
        image.setAttribute('class', "townImage");
        image.setAttribute('alt', towns[i].name);
        card.setAttribute('class', 'cards');
        cluster.appendChild(h2);
        cluster.appendChild(h3);
        cluster.appendChild(p1);
        cluster.appendChild(p2);
        cluster.appendChild(p3);
        card.appendChild(cluster);
        card.appendChild(image);
        document.querySelector('div.towns').appendChild(card);
        }
  }});
