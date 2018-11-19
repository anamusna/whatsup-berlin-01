import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Tabs from './tabs';

class App extends React.Component {
	render() {
		return (
			<div className="form-label-group">
				<Tabs />
			</div>
		);
	}
}

export default App;
