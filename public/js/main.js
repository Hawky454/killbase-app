document.addEventListener("DOMContentLoaded", function (event) {
fetch(`/assassins`)
      .then(response => response.json())
      .then(data => {
        let assData = data.results;

        for(let i = 0; i < addData.length; i++) {

          let assassins = assData[i];
          let assCard = document.createElement('section');
          
        }
      });
    });
