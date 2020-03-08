import React, { Component } from 'react'
import { Card, Icon, Image, Button ,Rating} from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default class Fiml extends Component {
  render() {
    let { movie}= this.props

    return (
      <Card>
      <Image src={movie.hinhAnh} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{movie.tenPhim}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        <Icon
        name="deaf"
       
      />     <Rating icon='heart' defaultRating={1} maxRating={3} />   </Card.Description>
      </Card.Content>
      <Card.Content extra>
      {/* <Link target="_blank"to={`/detail/${movie.maPhim}`}> */}
      <Link to={`/detail/${movie.maPhim}`} target="_blank">

   <Button
             onClick={() => {
              this.props.click(movie)
            }}
        > <Icon
        name="play"
       
      />XEM PHIM</Button>
   </Link>
      
      </Card.Content>
    </Card>
    )
  }
}

