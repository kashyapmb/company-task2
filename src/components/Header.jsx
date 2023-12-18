import React from "react"
import "../App.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CiSearch } from "react-icons/ci"

function Header() {
	return (
		<>
			<div className="upper-body">
				{/* Header */}
				<div className="Header">
					<img src="/images/logo.png" alt="Logo" />
					<div className="navi-button">
						<h6>About</h6>
						<h6>Contact</h6>
						<h6 className="book-demo">Book a Demo</h6>
					</div>
				</div>
				{/* Dialog-Box */}
				<div className="dialog-box">
					<p className="heading">This page doesn't seem to exist.</p>
					<h3>
						It looks like the link pointing here was faulty. Maybe try
						searching?
					</h3>
					<div className="search">
						<input type="search" placeholder="Search..." />
						<CiSearch />
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
