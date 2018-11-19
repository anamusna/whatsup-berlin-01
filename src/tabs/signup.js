import './styles.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { RenderCheckBox } from './helpers';
import epitath from 'epitath';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

class Signup extends React.Component {
	render() {
		return (
			<div className="bm-padding">
				<div className="bm-center bm-center-content login-register-padding">
					<form id="form-login">
						<FormControl fullWidth>
							<InputLabel htmlFor="component-simple">Email</InputLabel>
							<Input id="component-simple" type="email" name="email" />
						</FormControl>
						<FormControl fullWidth>
							<InputLabel htmlFor="component-simple">Password</InputLabel>
							<Input id="component-simple" type="password" name="password" />
						</FormControl>
						<div className="row">
							<Grid item xs={12}>
								<button variant="extendedFab" className="btn-success">
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
