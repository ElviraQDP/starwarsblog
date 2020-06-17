import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/character">
				<span className="mb-0 h3">Characters</span>
			</Link>
			&nbsp; &nbsp; &nbsp;
			<Link to="/planet">
				<span className="mb-0 h3">Planets</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary" type="">
						Favorites
					</button>
				</Link>
			</div>
		</nav>
	);
};
