import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  border: 2px solid #444444;
  box-shadow: 4px 4px 0px #444444;
  display: flex;
  justify-contents: center;
  align-items: center;
  padding: 3rem;
  border-radius: 10px;
  & h1 {
    font-size: 4rem;
  }
  & a {
    color: #fefefe;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      text-shadow: 0.5px 0.5px 0px #444444, 1px 1px 0px #444444,
        1.5px 1.5px 0px #444444, 2px 2px 0px #444444, 2.5px 2.5px 0px #444444,
        3px 3px 0px #444444, 3.5px 3.5px 0px #444444, 4px 4px 0px #444444;
    }
  }
`;

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderStyle>
    <Link to='/'>
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
  </HeaderStyle>
);

export default Header;
