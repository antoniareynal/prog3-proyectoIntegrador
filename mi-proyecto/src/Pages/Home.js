import React, {Component} from 'react';

class Home extends Componente{
    constructor() {
    super();
    this.State = {
        moviesPopular: [],
        upComingMovies: []
    }
    }


    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.State(
            {moviesPopular: data.data}
        ))

        .then(()=>{
            fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1caaa22005845643c0863fd9677bc21c &language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.State(
                {upComingMovies: data.data}
            ))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));

    }
    render(){
        return(
            <React.Fragment>
                <h1>Hola</h1>
            </React.Fragment>
        )
    }
}

export default Home;