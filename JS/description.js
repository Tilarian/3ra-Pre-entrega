let comments = document.querySelector("#comments");

let divcard1 = document.querySelector("#divcard1");
let divcard2 = document.querySelector("#divcard2");
let divcard3 = document.querySelector("#divcard3");



 fetch("/JSON/description.json")
     .then((response) => response.json())
     .then(function (data) {


        divcard1.innerHTML += `<img src="${data[0].url}">`;
        divcard1.innerHTML += "<h5>"+ data[0].name +"</h5>";
        divcard1.innerHTML += "<p>"+ data[0].comentario +"</p>";
        
        divcard2.innerHTML += `<img src="${data[1].url}">`;
        divcard2.innerHTML += "<h5>"+ data[1].name +"</h5>";
        divcard2.innerHTML += "<p>"+ data[1].comentario +"</p>"; 
        
        divcard3.innerHTML += `<img src="${data[2].url}">`;
        divcard3.innerHTML += "<h5>"+ data[2].name +"</h5>";
        divcard3.innerHTML += "<p>"+ data[2].comentario +"</p>"; 
         
     })

     .catch(function (error) {
         console.log(error);
     });
