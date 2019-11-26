import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getImagini from './galleria-imagini';
import './details.css'


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
        if (this.state.movie === undefined) {
            return <Redirect to='/not-found' />
        } else
            return (
                <div className='Details'>
                        <h1>{this.state.movie.name}</h1>
                        <div className='content'>
                            <div className='text'>
                                {this.state.movie.information}
                            </div>
                        <img className='image'
                            src={this.state.movie.pic}
                            alt={this.state.movie.name}>
                        </img>
                        </div>
                        <Link to='/'>Back to home page</Link>
                </div>
            )
    }
}




