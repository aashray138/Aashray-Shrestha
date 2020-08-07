import React from "react";
import Aashray from '../img/aashray.jpg';
import '../styles/about.scss';
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
					
						<h4>Communication</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
					
						<h4>Problem Solving</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
					
						<h4>Teamwork</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						
						<h4>MutliTasking</h4>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
					
						<p className={"mytext pt-3 " + this.props.fadeIn}>
						Aashray Shrestha <br />
						 He is from Nepal pursuing a Bachelors degree in Computer Science degree at Western Michigan University.
						 Aashray attends Western Michigan University as a Diether H. Haenicke Scholar and a part of the Lee Honors College. 
						
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 "
						}>
							<div className = "imgAas"> 
						<img src= {Aashray} alt="Aashray Shrestha Image" width="40%"/>
						</div>
						</div>
					</div>
				</div>

		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
