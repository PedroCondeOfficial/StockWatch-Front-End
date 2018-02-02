import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Navbar extends Component {
	render(){
		return (
			<div>
				<nav class="navbar navbar-expand-md bg-dark navbar-dark">
			      <div class="container">
			        <div class="collapse navbar-collapse text-center justify-content-center" id="navbar3SupportedContent">
			          <h1 class="display-1">StockWatch</h1>
			        </div>
			      </div>
			    </nav>
			</div>
		);
	}
}

export default Navbar;
