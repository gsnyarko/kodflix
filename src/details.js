import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getImagini from './galleria-imagini';


export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        let movieInfo = this.props.match.params.movieInfo;
        let movie = getImagini().find(movie => movie.id === movieInfo
        );
        this.setState({
            movie: movie
        });
    }

    render() {
        if(this.state.movie === undefined) {
            return <Redirect to='/not-found' /> 
        } else 
        return (
            <div>
                <h1>{this.state.movie.name}</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        )
    }
}




