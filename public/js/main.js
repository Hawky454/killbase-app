document.addEventListener("DOMContentLoaded", function (event) {
fetch(`http://localhost:8000/assassins`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
    });
