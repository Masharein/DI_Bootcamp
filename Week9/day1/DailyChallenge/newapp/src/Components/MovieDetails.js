import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = ({ selectedMovie }) => {
    if(!selectedMovie) {
        return (
            <div className="details-container" style={{width: '70%'}}>
                <h2>Movie</h2>
                <div className="properties">
                    <p>Select Movie</p>
                </div>
            </div>
            
        )       
    }
    else{
        return (
        
            <div className="details-container">
                <h2>Movie</h2>
                <div className="properties">
                    <p>Title: {selectedMovie.title}</p>
                    <p>Release Date: {selectedMovie.releaseDate}</p>
                    <p>Rating: {selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails);