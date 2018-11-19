import './styles.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import base from '../base';

import { RenderCheckBox } from './helpers';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			email    : '',
			password : ''
		};

		this.getUser = this.getUser.bind(this);
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

	getUser(e) {
		if (e.target.name === 'password') {
			this.setState({
				password : e.target.value
			});
		}
		if (e.target.name === 'email') {
			this.setState({
				email : e.target.value
			});
		}
	}
	render() {
		return (
			<div className="bm-padding">
				<div className="bm-center bm-center-content login-register-padding">
					<form id="form-login">
						<FormControl fullWidth>
							<InputLabel>Email</InputLabel>
							<Input type="email" name="email" onChange={this.getUser} />
						</FormControl>
						<FormControl fullWidth>
							<InputLabel>Password</InputLabel>
							<Input type="password" name="password" onChange={this.getUser} />
						</FormControl>
						<div className="row">
							<Grid item xs={12}>
								<button variant="extendedFab" className="btn-info">
									Login
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

export default Login;
