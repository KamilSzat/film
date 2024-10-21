import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <p>© 2024 Cinema City Lublin</p>
        </FooterWrapper>
    );
};

export default Footer;
