// document.querySelector("#button1").addEventListener("click", getMovie);
//  Load Single Customer
function getMovie() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:58815/api/Movies", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      let output = "";

      const movie = JSON.parse(this.responseText);
      movie.forEach(element => {
        output =
          output +
          `
        
        
              <li>${element.Name}</li>
              <li>${element.Category}</li>

         
  
              `;
      });

      document.getElementById("movie").innerHTML = output;
    }
  };

  xhr.send();
}

// function getMovie() {
//   fetch(`http://localhost:58815/api/Movies`)
//     .then(req => req.json())
//     .then(res => {
//       console.log(res);
//     });
// }
