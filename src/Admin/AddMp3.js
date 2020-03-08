import React, { Component } from 'react'
import { Button, Form, Message } from "semantic-ui-react";
import { connect } from 'react-redux';
import { actionTip, actionMp3 } from '../Redux/Action/fimlAction';

class AddMp3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tenPhim: "",
          hinhAnh:"",

          des: "",
          content: "",
          link:[
            {a:""}
          ]
        };
      }
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };
      handleChange1 = event => {
        let {id,value}= event.target
        console.log(value)
        this.setState({
          link:[
           value
          ]
        });
      };
      handleSubmit = event => {
        event.preventDefault();
        this.props.actionTip(this.state);
       
      };
    render() {
        return (
            <Form success className="container mt-4" onSubmit={this.handleSubmit} >
            <Form.Input label="tenPhim " placeholder="" onChange={this.handleChange} id="tenPhim"/>
            <Form.Input label="hinhAnh" placeholder="" onChange={this.handleChange} id="hinhAnh"/>
            <Form.Input label="Des" placeholder="" onChange={this.handleChange} id="des"/>
            <Form.Input label="Connent" placeholder="" onChange={this.handleChange} id="content"/>

            <Form.Input label="Link" placeholder="Password" onChange={this.handleChange1} id="link" />
    
            <Button type="Submit">Submit</Button>
            <Message
              success
              header="Wellcome PhucMap"
              content="Firebase number one"
            />
          </Form>
        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
      auth: state.firebaseReducer.auth
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      actionTip: data => dispatch(actionMp3(data))
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(AddMp3);
  