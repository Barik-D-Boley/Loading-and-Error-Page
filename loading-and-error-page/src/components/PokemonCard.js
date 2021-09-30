import React from 'react'

function PokemonCard({data, img}) {
    const { name } = data;

    return (
        <div className='cardContainer'>
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default PokemonCard
