

function searchNews() {
    var inp = document.querySelector("#inp");
  
    fetch(`https://newsapi.org/v2/everything?q=${inp.value}&from=2024-05-07&sortBy=publishedAt&apiKey=68b123853382404d89372b16ee37958d`)
      .then(function (data) {
        return data.json();
      })
      .then(function (data1) {
        var val = document.getElementById("news");
        for (var i = 0; i < data1.articles.length; i++) {
        val.innerHTML += `
        <div class="card d-flex " style="width: 18rem;">
            <img src= ${data1.articles[i].urlToImage ? data1.articles[i].urlToImage :
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9DN9irguvWfsYs5L3jiXISDvycmclpp1HQ&s'}      class="card-img-top" alt="...">
              <div class="card-body p-0">
                <h5 class="card-title">${data1.articles[i].title ? data1.articles[i].title : ""}</h5>
                <p class="card-text">${data1.articles[i].description}</p>
              </div>
            </div>`
        }
        console.log(data1);
      })
  
  }
  // searchNews()
  