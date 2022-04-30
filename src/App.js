import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import Home from './pages/Home'
import CreatPokemon from './pages/Create'
import UpdatePokemon from './pages/Update'
import Layout from "./pages/index";
import Bank from "./pages/Bank";
import {Navbar, Container, Nav} from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
    <Navbar variant="dark" expand="lg">
    <Container>
        <NavLink to="/" className={"navbar navbar-brand"}>Pokemon</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <NavLink to="/crear" className='nav-link'>Crear Pokemon</NavLink>
        </Nav>
        </Navbar.Collapse>
    </Container>

    </Navbar>
      <Routes>
          <Route path="/" element={<Layout/>} />
            <Route index element={<Home/>}/>
            <Route path="/crear" element={<CreatPokemon/>}/>
            <Route path="/actualizar/:id" element={<UpdatePokemon/>}/>
            <Route path="/bank" element={<Bank/>}/>          
          <Route/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;