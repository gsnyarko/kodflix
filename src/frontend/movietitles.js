import React from 'react';
import { Link } from 'react-router-dom';



export default function Movietitles(props) {
    return (
        <Link to={`/${props.id}`} className='item'>
            <img src={props.pic} alt={`${props.name} pic`} />
            <div className='overlay'>
                <h1>{props.name}</h1>
            </div>
        </Link>
    )
}
