import React, { Component } from 'react'
import { Card, Icon, Image, Button ,Rating} from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default class Mp3Item extends Component {
  render() {
    let { Mp3 }= this.props
console.log(this.props)
    return (
      <Card>
      <Image src={Mp3.hinhAnh} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{Mp3.tenMp3}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        <Icon
        name="deaf"
       
      />     <Rating icon='heart' defaultRating={1} maxRating={3} />   </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Link to={`/chi-tiet-mp3/${Mp3.id}`}>

   <Button
            //  onClick={() => {
            //   this.props.click(moive)
            // }}
        > <Icon
        name="play"
       
      />XEM </Button>
   </Link>
      
      </Card.Content>
    </Card>
    )
  }
}

