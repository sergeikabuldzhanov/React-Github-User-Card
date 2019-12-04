import React from "react";
import "./App.css";
import axios from "axios";
import GithubCard from "./GithubCard";
import FollowerCard from "./FollowerCard";
import UserSearchForm from "./UserSearchForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    const userData = axios.get(
      `https://api.github.com/users/anuoluwa`
    );
    const followersData = axios.get(
      `https://api.github.com/users/anuoluwa/followers`
    );
    Promise.all([userData, followersData])
      .then(response => {
        this.setState(st => ({
          ...st,
          user: response[0].data,
          followers: response[1].data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.searchValue !== this.state.searchValue) {
      const userData = axios.get(
        `https://api.github.com/users/${this.state.searchValue}`
      );
      const followersData = axios.get(
        `https://api.github.com/users/${this.state.searchValue}/followers`
      );
      Promise.all([userData, followersData])
        .then(response => {
          this.setState(st => ({
            ...st,
            user: response[0].data,
            followers: response[1].data
          }));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  passSearchValue = value => event => {
    event.preventDefault();
    this.setState(oldState => ({
      ...oldState,
      searchValue: value
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <UserSearchForm passSearchValue={this.passSearchValue} />
          <div className="cards">
            {this.state.user === {} && <h2>Loading...</h2>}
            <GithubCard user={this.state.user} />
            <div className="followers">
              <h2>{this.state.user.name ? (this.state.user.name + "'s Followers") : "Loading Followers"}</h2>
              {this.state.followers.map(follower => (
                <FollowerCard user={follower} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
