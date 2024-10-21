import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const movies = [
    { id: 1, title: 'Uśmiechnij się 2', time: ['16:00', '18:30', '21:00'] },
    { id: 2, title: 'Wybraniec', time: ['15:45', '18:20', '21:00'] },
];

const MovieListWrapper = styled.div`
    padding: 2rem;
`;

const MovieItem = styled.div`
    margin-bottom: 1rem;
`;

const MovieList = () => {
    return (
        <MovieListWrapper>
            {movies.map(movie => (
                <MovieItem key={movie.id}>
                    <h3>{movie.title}</h3>
                    <div>
                        {movie.time.map(time => (
                            <span key={time}>
                <Link to={`/film/${movie.id}`}>{time}</Link> &nbsp;
              </span>
                        ))}
                    </div>
                </MovieItem>
            ))}
        </MovieListWrapper>
    );
};

export default MovieList;
