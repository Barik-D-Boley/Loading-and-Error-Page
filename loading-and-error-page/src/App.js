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
        return <div className='background'><div className='loader'></div></div>
    }
    if (isError === true) {
        return <ErrorPage />
    }

    return (
        <>
            <div id='navbar'>
                <div id='navbarCenter'>
                    <div className='navItem' onClick={() => setIsLoading(true)}><p>Loading</p></div>
                    <div className='navItem' onClick={() => document.documentElement.scrollTop = 0}><p>Back to Top</p></div>
                    <div className='navItem' onClick={() => setIsError(true)}><p>Error</p></div>
                </div>
            </div>
            <div className='pokemonCards'>
                {pokemon.map((card, index) => {
                    return <PokemonCard data={card} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} key={card.id}/>
                })}
            </div>
        </>
    )
}

export default App;