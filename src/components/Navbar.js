import React from "react";

const Navbar = () => (
	<nav className="navbar navbar-default">
		<div className="container-fluid">
			<ul className="nav navbar-nav">
				<div className="row">
				<div className="col-md-4">
					<li><a href="#">Clicky Game</a></li>
				</div>
				<div className="col-md-4">
					<li>Click an image to begin</li>
				</div>
				<div className="col-md-4">
					<li>Score: | Top Score: </li>
				</div>
				
				</div>
			</ul>
		</div>
	</nav>
	);

export default Navbar;