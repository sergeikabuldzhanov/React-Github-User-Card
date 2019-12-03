import React, { Component } from "react";

export default class GithubCard extends Component {
  render() {
    return (
      <section className="github-card">
        <img src={this.props.user.avatar_url} alt = {this.props.user.name}/>
        <div class="card-info">
          <h3 class="name">{this.props.user.name}</h3>
          <p class="username">{this.props.user.login}</p>
          <p>Location: {this.props.user.location}</p>
          <p>
            Profile:
            <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
          </p>
          <p>Followers: {this.props.user.followers}</p>
          <p>Following: {this.props.user.following}</p>
          <p>Bio: {this.props.user.bio}</p>
        </div>
      </section>
    );
  }
}
