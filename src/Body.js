import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Body extends Component {
	render() {
		return (
			<div>
			<div class="py-5">
				<div class="container">
						<div class="row">
						  <div class="col-md-4">
						  		<h1>NYSE</h1>
								<iframe height="500px"  src="https://www.nyse.com/listings_directory/stock" ></iframe>
						  </div>

						  <div class="col-md-4">
						  		<h1>Euronext</h1>
						  		<iframe height="500px"  src="https://www.euronext.com/en"> </iframe>

						  </div>

						  <div class="col-md-4">
						  		<h1>SSE</h1>
						  		<iframe height="500px"  src="http://english.sse.com.cn/"> </iframe>
						  </div>
						</div>
						<div class="row">
						  		<div class="col-md-4">
									<h1>BSE</h1>
									<iframe height="500px"  src="http://www.bseindia.com/"> </iframe>
								</div>

						  		<div class="col-md-4">
									<h1>JPX</h1>
									<iframe height="500px"  src="http://www.jpx.co.jp/english/"> </iframe>
								</div>

						  		<div class="col-md-4">
									<h1>TMX</h1>
									<iframe height="500px"  src="https://www.tmx.com/"> </iframe>
								</div>
							</div>
					</div>
				</div>
			</div>
		);
	}

}

export default Body;
