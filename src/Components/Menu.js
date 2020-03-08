import React, { Component } from 'react'
import { Menu ,Responsive,Sidebar,Segment,Icon,Image,Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuFiml extends Component {
 constructor(props){
   super(props)
   this.state={
   }
 }
  render() {
    const { activeItem } = this.state

    return (
<div>
<Responsive  minWidth={768} className="mt-2">
<Menu className="container bg-info">
           <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
          as={Link} to="/"

        >
          Home
        </Menu.Item>

    

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
      </Menu>
          </Responsive>
          <Responsive  maxWidth={768} className="mt-4">
          <Header as='h5' icon textAlign='center' className="mt-2">
      <Icon name='users' circular />
      <Header.Content>     <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
          as={Link} to="/"

        >
          Home
        </Menu.Item></Header.Content>  <Header.Content>     <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
          as={Link} to="/"

        >
          About
        </Menu.Item></Header.Content>
    </Header>
          </Responsive>
</div>

    )
  }
}