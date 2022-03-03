import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  Button,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../public/assets/logos/Logo.jpeg';

import Image from 'next/image';

const Navbar_Main = () => {
  return (
    <div className='border-bottom'>
      <div className='container'>
        <Navbar color='white' expand='md' light className='px-5'>
          <NavbarBrand href='/'>
            <Image src={Logo} alt='company-logo' width='80px' height='80px' />
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className='me-auto mx-auto' navbar>
              <UncontrolledDropdown inNavbar nav className='list-unstyled'>
                <DropdownToggle caret nav>
                  About Us
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Director's Message</DropdownItem>
                  <DropdownItem>About Us</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown inNavbar nav className='list-unstyled'>
                <DropdownToggle caret nav>
                  Courses
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Coding</DropdownItem>
                  <DropdownItem>JEE Mains</DropdownItem>
                  <DropdownItem>Boards</DropdownItem>
                  <DropdownItem>JEE / NEET</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown inNavbar nav className='list-unstyled'>
                <DropdownToggle caret nav>
                  Student Tools
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Periodic Table</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown inNavbar nav className='list-unstyled'>
                <DropdownToggle caret nav>
                  Modules
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem className='list-unstyled'>
                <NavLink href='/channels'>Our Channels</NavLink>
              </NavItem>
            </Nav>

            <Button
              style={{ backgroundColor: '#2c2c96' }}
              className='p-2 px-3 mx-2'
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
            <Button style={{ backgroundColor: '#2c2c96' }} className='p-2 px-3'>
              Login
            </Button>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navbar_Main;
