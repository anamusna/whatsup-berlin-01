import './styles.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import epitath from 'epitath';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import base from '../base';

import { RenderCheckBox, Email, Password } from './helpers';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			inputPsw   : '',
			inputEmail : ''
		};

		this.getUser = this.getUser.bind(this);
	}

	componentWillMount() {
		this.whatsupRef = base.syncState('inputEmail', {
			context : this,
			state   : 'inputEmail'
		});
	}

	getUser(e) {
		if (e.target.name === 'password') {
			this.setState({
				inputPsw : e.target.value
			});
		}
		if (e.target.name === 'email') {
			this.setState({
				inputEmail : e.target.value
			});
		}
	}
	render() {
		return (
			<div className="bm-padding">
				<div className="bm-center bm-center-content login-register-padding">
					<form id="form-login">
						<FormControl fullWidth>
							<InputLabel htmlFor="component-simple">Email</InputLabel>
							<Input id="component-simple" type="email" name="email" onChange={this.getUser} />
						</FormControl>
						<FormControl fullWidth>
							<InputLabel htmlFor="component-simple">Password</InputLabel>
							<Input id="component-simple" type="password" name="password" onChange={this.getUser} />
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
