document.addEventListener("DOMContentLoaded", function (event) {
fetch('/assassins/')
      .then(response => response.json())
      .then(data => {
        let assData = data;
        console.log(assData[0]);
        for(let i = 0; i < assData.length; i++) {

          let displayCard = document.getElementById('displayCard');
          let assassins = assData[i];
          let assassCard = document.createElement('section');
          let row1 = document.createElement('section');
          row1.setAttribute('class', 'row1');
//testing this out.
          let row2 = document.createElement('section');
          row2.setAttribute('class', 'row2');

          let row3 = document.createElement('section');
          row3.setAttribute('class', 'row3');

          let row4 = document.createElement('section');
          row4.setAttribute('class', 'row4');

          let assassinName = document.createElement('h2');
          let assassinAge = document.createElement('span');
          let assassinId = document.createElement('span');
          let assassinKills = document.createElement('span');
          let assassinWeapon = document.createElement('span');
          let assassinPrice = document.createElement('span');
          let assassinImage = document.createElement('img');
          let assassinEmail = document.createElement('a');
          let assassinRating = document.createElement('span');
          let editButton = document.createElement('button');
          let deleteButton = document.createElement('button');
          let codeName = document.createElement('span');


          assassinRating.innerHTML = `Rating: ${assassins.rating} `;
          assassinKills.innerHTML = `Kills: ${assassins.kills} `;
          assassinName.innerText = `Name: ${assassins.fullnames} `;
          assassinAge.innerText = `Age: ${assassins.age} `;
          assassinId.innerHTML = `ID: ${assassins.id} `;
          assassinWeapon.innerHTML = `Weapon: ${assassins.weapon} `;
          assassinImage.setAttribute('src', '/images/assassin.jpg');
          assassinPrice.innerHTML = `Price: ${assassins.price} `;
          editButton.setAttribute('class', 'edit-btn');
          editButton.innerHTML = 'Edit';
          editButton.style.color = 'black';
          deleteButton.setAttribute('id', 'delete-btn');
          deleteButton.innerHTML = 'Delete';
          deleteButton.style.color = 'black';
          assassCard.setAttribute('class', 'assassCard');
          assassinEmail.setAttribute('href', '#');
          assassinEmail.innerHtml = 'assassin@email.com';

// testing this out
          row1.append(assassinImage);
          row2.append(assassinName);
          row2.append(assassinRating);
          row2.append(assassinPrice);
          row2.append(assassinWeapon);
          row2.append(assassinEmail);

          displayCard.appendChild(row1);
          displayCard.appendChild(row2);

          // assassCard.append(assassinImage);
          // assassCard.append(assassinName);
          // assassCard.append(assassinRating);
          // assassCard.append(assassinAge);
          // assassCard.append(assassinKills);
          // assassCard.append(assassinId);
          // assassCard.append(assassinWeapon);
          // assassCard.append(assassinPrice);
          // assassCard.append(editButton);
          // assassCard.append(deleteButton);
          // displayCard.append(assassCard);
        }
      });
    });
