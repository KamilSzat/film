import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const movies = [
    { id: 1, title: 'Uśmiechnij się 2', description: 'Horror film description...' },
    { id: 2, title: 'Wybraniec', description: 'Drama film description...' },
];

const MovieDetailsWrapper = styled.div`
  padding: 2rem;
`;

const MovieDetails = () => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));

    return (
        <MovieDetailsWrapper>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
        </MovieDetailsWrapper>
    );
};

export default MovieDetails;
