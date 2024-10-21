import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    background-color: #ff5500;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 0 1rem;
`;

const Header = () => {
    return (
        <Navbar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/repertuar">Repertuar</NavLink>
        </Navbar>
    );
};

export default Header;
