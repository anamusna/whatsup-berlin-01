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
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	componentWillMount() {
		this.Ref = base.syncState('loginEmail', {
			context : this,
			state   : 'email'
		});
		this.Ref = base.syncState('loginPassword', {
			context : this,
			state   : 'password'
		});
	}

	render() {
		return (
			<div className="bm-padding ">
				<div className="bm-center-content row">
					<form id="form-login" className="col">
						<br />
						<h2 className="text-center" style={{ fontWeight: '700' }}>
							Please sign in
						</h2>
						<FormControl fullWidth className="row">
							<InputLabel>Email</InputLabel>
							<Input
								type="email"
								name="email"
								id="email"
								placeholder="email@example.com"
								onChange={this.handleChange}
							/>
						</FormControl>
						<FormControl fullWidth className="row">
							<InputLabel>Password</InputLabel>
							<Input
								id="password"
								type="password"
								name="password"
								placeholder="enter password"
								onChange={this.handleChange}
							/>
						</FormControl>

						<div className="row ">
							<Grid item xs={6}>
								<RenderCheckBox />
							</Grid>

							<Grid item xs={6} style={{ textAlign: 'right' }}>
								<a id="reset-password" href="/">
									<b>Forgotten password?</b>
								</a>
							</Grid>
						</div>
						<div className="row">
							<Grid item xs={12}>
								<button variant="extendedFab" className="btn-info">
									Login
								</button>
							</Grid>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
