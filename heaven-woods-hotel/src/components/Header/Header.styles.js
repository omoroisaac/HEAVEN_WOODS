// components/Header/Header.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  h2 {
    color: ${props => props.theme.colors.primary};
    margin: 0;
    font-size: 1.5rem;
  }
  
  span {
    color: ${props => props.theme.colors.secondary};
    font-size: 0.8rem;
    display: block;
  }
  
  .logo-icon {
    font-size: 2rem;
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background: white;
    flex-direction: column;
    justify-content: center;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.isActive ? props.theme.colors.secondary : props.theme.colors.text};
  font-weight: ${props => props.isActive ? '600' : '400'};
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.colors.secondary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const CTAButton = styled(Link)`
  background: ${props => props.theme.colors.secondary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const MobileMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;