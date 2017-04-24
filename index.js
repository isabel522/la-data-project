function getLADataFromAPI(){
  
    var imageArray = [
      'https://www.brimg.net/images/gallery/jobs-employment/2015/states-with-highest-unemployment-rate/1-intro.jpg',
      'http://thenortheasttoday.com/wp-content/uploads/2016/09/Unemployment.jpg',
      'https://www.motherjones.com/files/unemployment_0.jpg'
    ]
    var endpoint = 'https://controllerdata.lacity.org/resource/7w5n-ybsg.json'

    fetch(endpoint)
    .then(function(data){
        return data.json()
    }) // turn data into JSOn
    .then(function(json){
        console.log(json)
        var finalHTML = ''
        json.forEach(function(item){
            var randomNumber = Math.floor(Math.random() * imageArray.length)
            var imageLink = imageArray[randomNumber]
            console.log(imageLink)
          
            var cardItem = `
                    <div class="col s6 m4">
                      <div class="card">
                        <div class="card-image">
                          <img class="same-size-image" src=${imageLink} />
                          <span class="card-title">${item.fiscal_year}</span>
                        </div>
                        <div class="card-content">
                          <p>
                            During this year there was a total of ${item.estimated_population}
                            people that lived in Los Angeles. The unemployment rate was ${item.unemployment_rate} % of the population.  
                            The median age of these people is of ${item.median_age} years old. 
                          </p>
                        </div>
                        <div class="card-action">
                          <a href="#">This is a link</a>
                        </div>
                      </div>
                    </div>
                  </div>            
            `
            finalHTML += cardItem
        })
        
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML
    }) // do something with data
    .catch(function(error){
        console.log(error)
    }) // catch any errors
}