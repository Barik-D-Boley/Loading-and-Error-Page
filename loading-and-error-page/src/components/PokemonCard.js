import React from 'react'

function PokemonCard({data, img}) {
    const { name } = data;

    function shortName() {
        if (name.split('-')[0] === 'mr') {
            return `${name.split('-')[0]} ${name.split('-')[1]}`
        } else {
            return name.split('-')[0];
        }
    }
    return (
        <div className='cardContainer'>
            <img className='image' src={img} alt={name} />
            <p className='name'>
                {shortName({name})}
            </p>
        </div>
    )
}

export default PokemonCard
