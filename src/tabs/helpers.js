import React, { Component } from 'react';
import epitath from 'epitath';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export const Logo = () => (
	<div
		style={{
			display        : 'flex',
			justifyContent : 'center',
			verticalAlign  : 'middle',
			paddingTop     : '72px',
			paddingBottom  : '38px'
		}}>
		<img src="./tabs/images/avataaars.png" alt="logo" />
	</div>
);

class CheckBox extends Component {
	state = {
		rememberMe : false
	};

	handleChange = (rememberMe) => (event) => {
		this.setState({ [rememberMe]: event.target.checked });
	};

	render() {
		return this.props.children(this.state);
	}
}

function CheckBoxControl({ children, ...props }) {
	return <FormControlLabel control={<Checkbox {...props} render={children} />} label="Remember me" />;
}

export const RenderCheckBox = epitath(function*() {
	let { handleChange } = yield <CheckBox />;

	return (
		<CheckBoxControl
			icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
			checkedIcon={<CheckBoxIcon fontSize="small" />}
			onChange={handleChange}
			value="Remember me"
		/>
	);
});
