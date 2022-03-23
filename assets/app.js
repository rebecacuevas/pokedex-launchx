// BÚSQUEDA POR NOMBRE
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();

    const myPokemon = document.querySelector('.pokemon-name');

    const myPokeId = document.querySelector('.pokemon-id');

    const myPokeWeight = document.querySelector('.pokemon-weight');

    const myPokeHeight = document.querySelector('.pokemon-height');

    const myPokeType = document.querySelector('.pokemon-type');
    
    // api
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    
    // promesa
    // llamar a la api y guardar su respuesta en la función res
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            pokeImage('assets/sad-pikachu.png');
        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);

        myPokemon.textContent = data.name;
        myPokeId.textContent = data.id;
        myPokeWeight.textContent = data.weight;
        myPokeHeight.textContent = data.height;
        myPokeType.textContent = data.types[0].type.name;
    })
}



// BÚSQUEDA POR NÚMERO
const fetchNumber = () => {
    const pokeName = document.getElementById("pokeNumber");
    let pokeInput = pokeName.value;

    const myPokemon = document.querySelector('.pokemon-name');

    const myPokeId = document.querySelector('.pokemon-id');

    const myPokeWeight = document.querySelector('.pokemon-weight');

    const myPokeHeight = document.querySelector('.pokemon-height');

    const myPokeType = document.querySelector('.pokemon-type');
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage('assets/sad-pikachu.png');
        }
        else{
            return res.json();
        }
    }).then((data) => {
        let pokeNumber = data.id;
        console.log(pokeNumber);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);

        myPokemon.textContent = data.name;
        myPokeId.textContent = data.id;
        myPokeWeight.textContent = data.weight;
        myPokeHeight.textContent = data.height;
        myPokeType.textContent = data.types[0].type.name;

    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}


/*
// BÚSQUEDA POR TIPO
const fetchType = () => {
    const url = `https://pokeapi.co/api/v2/type/3`;

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        let pokeType = data.pokemon[100].pokemon.name;
        console.log(pokeType);
    })
}
*/