import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'evergreen-ui';
import { toggleDarkMode } from '../actions'


class DarkModeToggle extends React.Component {
	onToggleDarkModeSwitch = (e) => {
		this.props.dispatch(toggleDarkMode(e));
	}

	render() {
		return (
			<div className="dark-mode-toggle">
				Dark mode?
				<Switch  
					onChange={(e) => this.onToggleDarkModeSwitch(e.target.checked) }
				/>
			</div>
		);
	}
}

export default connect()(DarkModeToggle);
