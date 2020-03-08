import React, { Component } from 'react'
import { Card, Icon, Image, Button ,Rating} from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default class FirebaseItem extends Component {
  render() {
    let { moive}= this.props

    return (
      <Card>
      <Image src={moive.hinhAnh} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{moive.tenPhim}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        <Icon
        name="deaf"
       
      />     <Rating icon='heart' defaultRating={1} maxRating={3} />   </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Link to={`/chi-tiet/${moive.id}`} target="_blank">

   <Button
         
        > <Icon
        name="play"
       
      />XEM </Button>
   </Link>
      
      </Card.Content>
    </Card>
    )
  }
}

