import React, { Component } from 'react'
import {
    Container,
    Image,
    Segment,
    Grid,
    Header,
    Button,
    Icon,
    Label
  } from "semantic-ui-react";
export default class PlayList extends Component {
    render() {
        let {data}= this.props
        return (
            <Button color="red" onClick={this.props.click(data)}>
                {data.key}
            </Button>
       
          
        )
    }
}
