class movieList extends React.Component{

    shorten = (text, maxLength)=> {
        if(text && text.length > maxLength){
            return text.substr(0,maxLength) + '...';    
        }
        return text
    }
    renderMovies(movies){
        
        return movies.map((movie)=>
            (
                <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">{movie.name}</a>
                        </h4>
                        <p className="card-text">{this.shorten(movie.description, 100)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.rating}</small>
                    </div>
                    </div>
                </div>
            )
        )
    }
    render(){
        const {movies} = this.props;
        
        return(
            <>
                {this.renderMovies(movies)}
            </>
        )
    }
}

export default movieList;