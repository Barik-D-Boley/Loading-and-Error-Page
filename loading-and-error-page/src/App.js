import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import ErrorPage from './components/ErrorPage';

let url='https://pokeapi.co/api/v2/pokemon/?limit=898'

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = async () => {
        const response = await fetch(url);
        const pokemon = await response.json();
        setPokemon(pokemon.results);
    }

    useEffect(() => {
        getPokemon()
            .then(setIsLoading(false))
            .catch((error) => {
                console.log(error);
                setIsError(true);
            })
    },[])

    if (isLoading === true) {
        return <div className='loader'></div>
    }
    if (isError === true) {
        return <ErrorPage />
    }

    return (
        <>
            <button onClick={() => setIsLoading(true)}>Loading</button>
            <button onClick={() => setIsError(true)}>Error</button>
            {pokemon.map((card, index) => {
                return <PokemonCard data={card} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} key={card.id}/>
            })}
        </>
    )
}

export default App;