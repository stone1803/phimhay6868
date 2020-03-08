import { Button, Form, Message } from "semantic-ui-react";
import React, { Component } from "react";
import { actionsignIn } from "../Redux/Action/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
      }
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };
      handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
      };
  render() {
    console.log(this.props.auth);
    let { error,auth } = this.props;
    if(auth.uid){

    return    <Redirect to="/"/>
    }else{
    return (
      <Form success className="container mt-4" onSubmit={this.handleSubmit} >
        <Form.Input label="Email" placeholder="ledanghongphuc@gmail.com" onChange={this.handleChange} id="email"/>

        <Form.Input label="Password" placeholder="Password" onChange={this.handleChange} id="password" />

        <Button type="Submit">Submit</Button>
        <Message
          success
          header="Wellcome PhucMap"
          content="Firebase number one"
        />
      </Form>
    );
}
  }
}
const mapDispatchToProps = dispatch => {
    return {
      signIn: cer => dispatch(actionsignIn(cer))
    };
  };
  const mapStateToProps = state => {
    return {
      auth: state.firebaseReducer.auth
  
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(Login)