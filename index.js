window.onload = async() => {
    console.log('Se escribe cuando se inicia el programa');
    // let req = new XMLHttpRequest();
    // req.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=20', false);
    // req.send(null);
    // if (req.status == 200) {
    //     responseJSON = JSON.parse(req.response)
    //     console.log(responseJSON.results)
    //     const template = 
    //     responseJSON.results.map(result => 
    //         `<div class="card col-md-4" style="width: 18rem">` +
    //             `<div class="card-body">` +
    //                 `<h5 class="card-title">${result.name}</h5>` +
    //                 `<p class="card-text">` +
    //                     `${result.name}` +
    //                 `</p>` +
    //                 `<a href="${result.url}" class="card-link">Link de la imagen</a>` +
    //             `</div>` +
    //         `</div>`)
        
    //     var body = document.getElementById('card-container');
    //     console.log(body);
    //     console.log(template);
    //     template.forEach(element => {
    //         body.innerHTML += element
    //     });
    // }

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=20`);
    let data = await response.json();
    const template = 
        data.results.map(result => 
            `<div class="card col-md-4" style="width: 18rem">` +
                `<div class="card-body">` +
                    `<h5 class="card-title">${result.name}</h5>` +
                    `<p class="card-text">` +
                        `${result.name}` +
                    `</p>` +
                    `<a href="${result.url}" class="card-link">Link de la imagen</a>` +
                `</div>` +
            `</div>`);
    var body = document.getElementById('card-container');
    template.forEach(element => {
        body.innerHTML += element
    });
};