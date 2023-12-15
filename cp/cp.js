const sea = document.querySelector("#search");
const name = document.querySelector("#name");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const type = document.querySelector("#type");
const img = document.querySelector("#img");
const home = document.querySelector("#home");

sea.addEventListener("change", function() {
    console.log(event.target.value);
    fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data.name);
        console.log(data.height);
        console.log(data.weight);
        console.log(data.types[0].type.name);
        console.log(data.sprites.front_default);

        name.innerHTML = data.name;
        height.innerHTML = data.height;
        weight.innerHTML = data.weight;
        type.innerHTML = data.types[0].type.name;
        img.src = `${data.sprites.other["official-artwork"].front_default}`

    })
})
