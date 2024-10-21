import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import movie1 from '../images/movie1.jpg';
import movie2 from '../images/movie2.jpg';
import movie3 from '../images/movie3.jpg';

const movies = [movie1, movie2, movie3];

const StyledSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const MovieSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <StyledSlider {...settings}>
            {movies.map((movie, index) => (
                <div key={index}>
                    <img src={movie} alt={`Movie ${index + 1}`} />
                </div>
            ))}
        </StyledSlider>
    );
};

export default MovieSlider;
