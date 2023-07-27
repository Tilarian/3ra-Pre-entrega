let description = []
fetch("../JSON/description.json")
.then(response => response.json())
.then(data => {
    productos = data;
})