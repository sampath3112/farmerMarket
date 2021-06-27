import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const AboutUs = () => {
    return (
        <Navbar style = {{ backgroundColor: '#194D33' }}  variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>

              <LinkContainer to='/aboutus'>
                <Nav.Link>
                  <i className = 'fas fa-info-circle'></i>About us
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/faq'>
                <Nav.Link>
                <i className='fas fa-question-circle'></i>FAQ
                </Nav.Link>
              </LinkContainer>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
}

export default AboutUs
