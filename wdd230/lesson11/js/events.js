const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function townEvent(town) {
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    /* console.table(jsonObject); */  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    /* console.log(towns[town].events.length); */
    if(town==1 || town==4 || town==5){
        let eventList = document.createElement('div');
        let ul = document.createElement('ul');
        let li = [];
        let x = 0;
        eventList.appendChild(ul);
        for(let count = 0; count < towns[town].events.length; ++count){
            li[count] = document.createElement('li');
            li[count].textContent = towns[town].events[x++];
            ul.appendChild(li[count]);
        }
        document.querySelector('div.events').appendChild(eventList);
        }
        return;
    
  });};


  