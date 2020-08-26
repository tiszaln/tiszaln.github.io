const request = './data/inventory.json';

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const rental = jsonObject['rentals'];
    for (let i = 0; i < rental.length; i++ ) {
        let card = document.createElement('section');
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let image = document.createElement('img');
        h3.textContent = rental[i].type;
        p.textContent = 'Person Limit: ' + rental[i].maxPersons + '\r\n\r\nReservation:\r\n        Half-day (3-hours): ' + rental[i].reservations[0].halfDay + '\r\n        Full-day: ' + rental[i].reservations[0].fullDay + '\r\n\r\nWalk-In:\r\n        Half-day (3-hours): ' + rental[i].walkIn[0].halfDay + '\r\n        Full-day: ' + rental[i].walkIn[0].fullDay;
        image.setAttribute('src', rental[i].img);
        image.setAttribute('alt', rental[i].type);
        p.setAttribute('class', 'pBreak')
        card.appendChild(div);
        div.appendChild(h3);
        div.appendChild(p);
        card.appendChild(image);
        document.querySelector('div.rentals').appendChild(card);
  }});