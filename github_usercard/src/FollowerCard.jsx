import React, { Component } from "react";

export default class FollowerCard extends Component {
  render() {
    return (
      <section className="follower-card">
        <img src={this.props.user.avatar_url} alt={this.props.user.name} />
        <div className="card-info">
          <p className="username">{this.props.user.login}</p>
          <p>
            Profile:
            <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
          </p>
        </div>
      </section>
    );
  }
}
