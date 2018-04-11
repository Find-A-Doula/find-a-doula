import React from 'react';
import './ButtonSignUp.css';

const ButtonSignUp = props => (
	<div>
		<form id="SignUp-form">
			<div id="SignUp-button-wrapper">
				<input type="submit" value="Find a Doula" id="SignUp-button" onClick={props.handleButtonSignUp} />
			</div>
		</form>
	</div>
);

export default ButtonSignUp;
