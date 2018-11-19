import React from 'react';
import Button from '@material-ui/core/Button';
//import { Button } from 'reactstrap';
import { Logo } from './helpers';
import Login from './login';
import SignUp from './signup';

class Tabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user : {},
			view : 0
		};
	}

	changeView = (view) => this.setState({ view });

	render() {
		const { view } = this.state;
		return (
			<div>
				<Logo />
				<div id="control">
					{view === 0 ? (
						<div id="tabs">
							<Button id="tab" href="#" className="active">
								Login
							</Button>
							<Button id="tab" href="#" onClick={() => this.changeView(1)}>
								Register
							</Button>
						</div>
					) : (
						view === 1 && (
							<div id="tabs">
								<Button id="tab" href="#" onClick={() => this.changeView(0)}>
									Login
								</Button>
								<Button id="tab" href="#" className="active">
									Register
								</Button>
							</div>
						)
					)}
				</div>
				<div id="content">{view === 1 ? <SignUp /> : <Login />}</div>
			</div>
		);
	}
}

export default Tabs;
