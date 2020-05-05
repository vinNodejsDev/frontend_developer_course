const axios = require('axios');

axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');
        response.data.forEach(movie => {
            console.log(`${movie['title']}, ${movie['release_date']}`);
        });
    });
