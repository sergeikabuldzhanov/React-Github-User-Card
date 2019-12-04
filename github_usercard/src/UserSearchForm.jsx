import React, { Component } from "react";

export default class UserSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  handleChange = e => {
    const newValue = e.target.value;
    this.setState(oldState => ({
      searchValue: newValue
    }));
  };


  render() {
    return (
      <form onSubmit = {this.props.passSearchValue(this.state.searchValue)}>
        <label>
          <span>Search for user:</span>
          <input
            value={this.state.searchValue}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <button type = "submit">🔍</button>
      </form>
    );
  }
}
