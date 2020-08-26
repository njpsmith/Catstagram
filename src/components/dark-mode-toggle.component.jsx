import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'evergreen-ui';
import { toggleDarkMode } from '../actions';

export class DarkModeToggle extends React.Component {
  onToggleDarkModeSwitch = (e) => {
    this.props.dispatch(toggleDarkMode(e));
    this.storeDarkModePreferenceInLocalStorage(e);
  };

  storeDarkModePreferenceInLocalStorage = (darkModePreference) => {
    // Change boolean to string again and save in localStorage
    localStorage.setItem(
      'darkModePreference',
      JSON.stringify(darkModePreference)
    );
  };

  render() {
    return (
      <div className="dark-mode-toggle">
        Dark mode?
        <Switch
          id="dark-mode-toggle-switch"
          checked={this.props.darkModePreference}
          // checked={true}
          onChange={(e) => this.onToggleDarkModeSwitch(e.target.checked)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  darkModePreference: state.darkModeReducer.darkMode,
});

export default connect(mapStateToProps)(DarkModeToggle);
