let comments = document.querySelector("#comments")


 fetch("/JSON/description.json")
     .then((response) => response.json())
     .then(function (data) {


        console.log(data[0].description);
         comments.innerHTML = "<h2>"+ data[0].description +"</h2>";
         comments.innerHTML += "<h2>"+ data[0].id +"</h2>";
         comments.innerHTML += "<img src='" + data[0].url + " '>";
        
         comments.innerHTML += "<h2>"+ data[0].description +"</h2>";
         comments.innerHTML += "<h2>"+ data[0].id +"</h2>";
         comments.innerHTML += "<img src='" + data[0].url + " '>";

         comments.innerHTML += "<h2>"+ data[0].description +"</h2>";
         comments.innerHTML += "<h2>"+ data[0].id +"</h2>";
         comments.innerHTML += "<img src='" + data[0].url + " '>";
         
     })

     .catch(function (error) {
         console.log(error);
     });


    // fetch("https://private.omdbapi.com/?apikey=bef9c583&t=titanic")
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log(data);
    //     comments.innerHTML = "<h2>"+ data.Title +"</h2>";
    //     comments.innerHTML += "<img src='" + data.Poster + " '>";
        
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });