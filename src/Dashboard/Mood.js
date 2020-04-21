import React from "react";
import { FormTextarea, Button } from "shards-react";

export default class Mood  extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: null };
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      const { value } = this.state;
      return (
        <div>
          <p className="mb-2">
            {(value && `🗣 ${value}`) || "🤔 Waiting for you to say something..."}
          </p>
          <FormTextarea action="/https://apis.paralleldots.com/v5/emotion" method="post" onChange={this.handleChange} />
          <Button theme="info">Submit</Button>
        </div>
      );
    }
  }