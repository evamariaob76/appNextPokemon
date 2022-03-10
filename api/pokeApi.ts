import axios from 'axios';

export const  pokeApi =axios.create({
    baseURL:' https://pokeapi.co/api/v2'
})

export const  pokeApi2 =axios.create({
    baseURL:' https://pokeapi.co/api/v2"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'
})
