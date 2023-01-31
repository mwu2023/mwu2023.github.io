import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
height: 100px;
background: white;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: gray;
display: flex;
font: 18px Arial, Helvetica, sans-serif;
font-weight: 525;
align-items: center;

text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: wait;
&.active {
	color: black;
  font-weight: bold;
}
`;

export const NavMenu = styled.div`
display: flex;
margin-left: 500px;
align-items: center;
`;
