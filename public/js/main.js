document.addEventListener("DOMContentLoaded", function (event) {
fetch('/assassins/')
      .then(response => response.json())
      .then(data => {
        let assData = data;
        console.log(assData[0]);
        for(let i = 0; i < assData.length; i++) {

          let assassinsList = document.getElementById('assassins-list');
          let assassins = assData[i];
          let assassCard = document.createElement('section');
          assassCard.setAttribute('class', 'assassins-card');
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
          let assassinEmail = document.createElement('span');
          let assassinRating = document.createElement('span');
          let editButton = document.createElement('button');
          let deleteButton = document.createElement('button');
          let codeName = document.createElement('span');

          codeName.innerText = ` Codename: ${assassins.codenames} `;
          assassinRating.innerText = ` Rating: ${assassins.rating} `;
          assassinKills.innerText = ` Kills: ${assassins.kills} `;
          assassinName.innerText = assassins.fullnames ;
          assassinAge.innerText = ` Age: ${assassins.age} `;
          assassinId.innerText = ` ID: ${assassins.id} `;
          assassinWeapon.innerText = ` Weapon: ${assassins.weapon} `;
          assassinImage.setAttribute('src', assassins.photo );
          assassinPrice.innerText = ` Price: ${assassins.price} `;
          editButton.setAttribute('id', 'edit-btn');
          editButton.innerText = 'Edit';
          editButton.style.color = 'blue';
          deleteButton.setAttribute('id', 'delete-btn');
          deleteButton.innerText = 'Delete';
          deleteButton.style.color = 'red';
          assassCard.setAttribute('class', 'assassCard');
          assassinEmail.innerText = ` Contact: ${assassins.contact} `;

          if(assassinName.innerText === '') {
            assassinName.innerText = 'Forest Whitaker';
            assassinName.style.color = 'white';
          }



          row1.appendChild(assassinImage);

          row2.appendChild(assassinName);
          row2.appendChild(assassinRating);
          row2.appendChild(assassinPrice);
          row2.appendChild(assassinWeapon);
          row2.appendChild(assassinEmail);

          row3.appendChild(codeName);
          row3.appendChild(assassinKills);
          row3.appendChild(assassinAge);

          row4.appendChild(deleteButton);
          row4.appendChild(editButton);

          assassCard.appendChild(row1);
          assassCard.appendChild(row2);
          assassCard.appendChild(row3);
          assassCard.appendChild(row4);
          assassinsList.appendChild(assassCard);
        }
      });
    });
