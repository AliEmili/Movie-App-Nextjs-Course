import React from 'react';
import MovieCreateForm from "../../../components/movieCreateForm";
import { getMovieById, updateMovie } from '../../../actions';
import Router from "next/router";

class EditMovie extends React.Component{


    static async getInitialProps({query}){
        const movie = await getMovieById(query.id);
        return {
            movie
        }
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie)=> {
            // router.push('/');
            Router.push(`/movies/${movie.id}`);
        })
    }

    render(){
        const {movie} = this.props;
        return(
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm
                    initialData={movie}
                    submitButton="Update"
                    handleFormSubmit={this.handleUpdateMovie}
                />
            </div>
        )
    }
}

export default EditMovie;