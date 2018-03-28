import React, { Component } from 'react'
import './App.css';
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinksCategoria from './LinksCategoria'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />

        <div className="container">
          <h3> Anuncios </h3>
            <div className="row">
              <AnuncioHome />
              <AnuncioHome />
              <AnuncioHome />
            </div>
          </div>
        <h3> Categorias </h3>
        <LinksCategoria />
        <Footer />
      </div>
    )
  }
}

export default App
