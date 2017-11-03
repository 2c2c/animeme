import React, { Component } from "react";
import logo from "./logo.svg";
import UsernameInput from "./UsernameInput";
import AnimeContainer from "./AnimeContainer";
import papika from "./papika.jpg";
import { Image, Header, Container } from "semantic-ui-react";

class App extends Component {
  state = {
    usernameInput: "",
    invalidUser: false,
    username: "",
    userId: null,
    ratings: []
  };

  handleChange = e => {
    this.setState({
      usernameInput: e.target.value
    });
  };

  handleSubmit = () => {
    const { usernameInput } = this.state;
    fetch(`/recommendations?username=${usernameInput}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          usernameInput: "",
          invalidUser: false,
          ...data
        });
      })
      .catch(err => {
        this.setState({
          usernameInput: "",
          invalidUser: true,
          username: "",
          userId: null,
          ratings: []
        });
      });
  };

  render() {
    const {
      usernameInput,
      invalidUser,
      username,
      userId,
      ratings
    } = this.state;

    return (
      <div>
        <Image style={{ marginTop: "10px" }} centered src={papika} />
        <UsernameInput
          username={usernameInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {username !== "" ? (
          <Container>
            <Header>Recommendations for the user {username}:</Header>
            <AnimeContainer
              username={username}
              userId={userId}
              ratings={ratings}
            />
          </Container>
        ) : null}
      </div>
    );
  }
}

export default App;
