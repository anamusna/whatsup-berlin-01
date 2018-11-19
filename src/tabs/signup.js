import './styles.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { RenderCheckBox } from './helpers';
import { FormErrors } from './FormErrors';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import base from '../base';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email         : '',
			password      : '',
			formErrors    : { email: '', password: '', repeat_password: '' },
			emailValid    : false,
			passwordValid : false,
			formValid     : false
		};
	}

	componentWillMount() {
		this.Ref = base.syncState('email', {
			context : this,
			state   : 'email'
		});
		this.Ref = base.syncState('password', {
			context : this,
			state   : 'password'
		});
	}

	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value }, () => {
			this.validateField(name, value);
		});
	};

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
		let repeat_passwordValid = this.state.repeat_passwordValid;

		switch (fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' is invalid!';
				console.log(this.state.email, emailValid);
				break;
			case 'password':
				passwordValid = value.length > 6;
				fieldValidationErrors.password = passwordValid ? '' : ' is too short!';
				console.log(value, this.state.password, repeat_passwordValid);
				break;
			case 'repeat_password':
				repeat_passwordValid = value === this.state.password;
				fieldValidationErrors.repeat_password = repeat_passwordValid ? '' : ' dont match';
				console.log(value, this.state.repeat_password, repeat_passwordValid);
				break;
			default:
				break;
		}
		this.setState(
			{
				formErrors    : fieldValidationErrors,
				emailValid    : emailValid,
				passwordValid : passwordValid
			},
			this.validateForm
		);
	}

	errorClass(error) {
		return error.length === 0 ? '' : 'has-error';
	}
	render() {
		return (
			<div className="bm-padding">
				<div className="bm-center bm-center-content login-register-padding">
					<FormErrors formErrors={this.state.formErrors} />
					<form id="form-login">
						<FormControl fullWidth className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
							<InputLabel htmlFor="component-simple">Email</InputLabel>
							<Input
								id="component-simple"
								type="email"
								name="email"
								value={this.state.email}
								onChange={this.handleUserInput}
								required
							/>
						</FormControl>
						<FormControl
							fullWidth
							id="pass"
							className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
							<InputLabel htmlFor="component-simple">Password</InputLabel>
							<Input
								id="component-simple"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleUserInput}
								required
							/>
						</FormControl>
						<FormControl
							fullWidth
							id="pass"
							className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
							<InputLabel htmlFor="component-simple">Repeat Password</InputLabel>
							<Input
								id="component-simple"
								type="password"
								name="repeat_password"
								value={this.state.repeat_password}
								onChange={this.handleUserInput}
								required
							/>
						</FormControl>
						<div className="row">
							<Grid item xs={12}>
								<button variant="extendedFab" className="btn-success" disabled={!this.state.formValid}>
									Register
								</button>
							</Grid>
						</div>
						<div className="row form-footer">
							<Grid item xs={6}>
								<RenderCheckBox />
							</Grid>

							<Grid item xs={6} style={{ textAlign: 'right' }}>
								<a id="reset-password" href="/">
									<b>Forgotten password?</b>
								</a>
							</Grid>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Signup;
