import React from 'react';
import Bagel from './bagel';

export default function FavoritesContainer(props){
    const bagels = props.favorites.map(bagel => {
        return <Bagel key={bagel.id} bagel={bagel} action={props.action}/>
    })

    return (
        <section className='favorites'>
            <h1>Favorite Bagels</h1>
            {bagels}
        </section>
    )
}