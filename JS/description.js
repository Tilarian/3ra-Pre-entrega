let comments = document.querySelector("#comments");

let divcard1 = document.querySelector("#divcard1");
let divcard2 = document.querySelector("#divcard2");
let divcard3 = document.querySelector("#divcard3");



 fetch("/JSON/description.json")
     .then((response) => response.json())
     .then(function (data) {


        
        divcard1.innerHTML += "<h5>"+ data[0].name +"</h5>";
        divcard1.innerHTML += "<p>"+ data[0].comentario +"</p>";    

        divcard2.innerHTML += "<h5>"+ data[1].name +"</h5>";
        divcard2.innerHTML += "<p>"+ data[1].comentario +"</p>"; 
        
        divcard3.innerHTML += "<h5>"+ data[2].name +"</h5>";
        divcard3.innerHTML += "<p>"+ data[2].comentario +"</p>"; 
         
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