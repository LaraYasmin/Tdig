import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Collapse id="navbar">
          <Nav className="mr-auto">
            <Nav.Link href="#welcome-section">Welcome</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#profile-link" target="_blank">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section id="welcome-section" className="d-flex justify-content-center align-items-center">
        <h1>Welcome to my portfolio!</h1>
      </section>

      <section id="projects" className="p-5">
        <div className="project-tile">
          <a href="#">Project 1</a>
        </div>
        <div className="project-tile">
          <a href="#">Project 2</a>
        </div>
      </section>

      <a href="https://github.com/yourusername" id="profile-link" target="_blank" rel="noopener noreferrer" className="d-block text-center my-4">My GitHub Profile</a>
    </div>
  );
}

export default App;
