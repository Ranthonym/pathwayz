import React from "react";
import Popup from "reactjs-popup";
import { Form, FormInput, FormGroup } from "shards-react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Popup
          trigger={<button className="button"> Login </button>}
          modal
          closeOnDocumentClick
        >
          <div id="popup">
            <Form>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                />
              </FormGroup>
            </Form>
          </div>
        </Popup>
        <Popup
          trigger={<button className="button"> Signup </button>}
          modal
          closeOnDocumentClick
        >
          <div id="popup">
            <Form>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                />
              </FormGroup>
            </Form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Login;
