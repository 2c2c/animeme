import React from "react";
import { Grid, Button, Checkbox, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class Site extends React.Component {
  render() {
    const {username, handleChange, handleSubmit} = this.props;
    return (
      <Grid style={{ marginTop: "10px", marginBottom: "50px" }}>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <input
                  placeholder="MAL Username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
