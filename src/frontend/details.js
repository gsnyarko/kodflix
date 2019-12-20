import React, { useEffect, useState } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import './details.css';
import Loading from './Loading';


export default function Details(props) {

    const { movieId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('/rest/movies')
            .then(response => response.json())
            .then(details => setDetails(details
                .find(detail => detail.id === movieId)
            ))
    }, [movieId]);

    if (details === undefined) {
        return <Redirect to='/not-found' />
    } else if (details.length === 0) {
        return <div>< Loading/></div>
    } else {
        return (
            <div className='Details'>
                <h1>{details.name}</h1>
                <div className='content'>
                    <div className='text'>
                        {details.information}
                    </div>
                    {<img src={require(`./images/${details.id}.jpg`)} alt={details.id} />}
                </div>
                <Link to='/'>Back to home page</Link>
                <div><Link to='/fetch'>fetch</Link></div>
            </div>
        );
   
    


    }
    
}
