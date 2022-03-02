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
  NavbarText,
  Nav,
  Button,
} from 'reactstrap';

const Navbar_Main = () => {
  return (
    <div>
      <Navbar color='white' expand='md' light className='border-bottom px-5'>
        <NavbarBrand href='/'>
          <img
            src='https://img.kisalaycommerceclasses.com/images/file_1646223846528.jpeg'
            alt='company-logo'
            width='80px'
            height='80px'
          />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className='me-auto' navbar>
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
          <Button>Login</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar_Main;
