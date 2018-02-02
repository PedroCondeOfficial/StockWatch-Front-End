import React, { Component } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
		<div>
			<Navbar />
			<Body />
			<Footer />
		</div>
    );
  }
}

export default App;
