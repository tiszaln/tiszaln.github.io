const request = './data/inventory.json';

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const rental = jsonObject['rentals'];
    for (let i = 0; i < rental.length; i++ ) {
        let option = document.createElement('option');
        option.textContent = rental[i].type;
        /* p.textContent = 'Person Limit: ' + rental[i].maxPersons + '\r\n\r\nReservation:\r\n        Half-day (3-hours): ' + rental[i].reservations[0].halfDay + '\r\n        Full-day: ' + rental[i].reservations[0].fullDay + '\r\n\r\nWalk-In:\r\n        Half-day (3-hours): ' + rental[i].walkIn[0].halfDay + '\r\n        Full-day: ' + rental[i].walkIn[0].fullDay; */
        option.setAttribute('value', rental[i].type);
        document.querySelector('#rentalType').appendChild(option);
  }});