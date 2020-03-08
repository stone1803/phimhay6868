import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Player, ControlBar ,BigPlayButton} from 'video-react';
import { connect } from 'react-redux';
import { createAction } from '../Redux/Action/action';
import GridFiml from './GridFiml';
const Tabletop = require("tabletop");
const googleSheetURL ="https://docs.google.com/spreadsheets/d/1LB6LXfHEBrZfIX4vlY539Bvy8o1l9uOUJbAbccB9Gi8/pubhtml";
const fetcher = () => {
  return new Promise(res => {
    Tabletop.init({
      key: googleSheetURL,
      callback: function(data, tabletop) {
        return res(data);
      },
      simpleSheet: true
    });
  });
};

 class FimlDetail extends Component {
   constructor(props){
     super(props)
     this.state={
       moivedetail:[]
     }
   }
  componentDidMount(){
    fetcher().then(results =>
      // this.setState({ movies: results, fetched: true })
      this.props.addFiml(results)

    );
    const id = this.props.match.params.id;
    const result = this.props.ListMoive.find( ({ maPhim }) => maPhim === id );
    this.setState({
      moivedetail:result
    })

  }
  render() {
    let{moivedetail}= this.state
    if(moivedetail){
      return (
        <Segment piled className="mt-4 container">
          <h1 className="text-center">{moivedetail.tenPhim}</h1>
    
   
      <video
      id="my-video"
      class="video-js"
      controls
      preload="auto"
        autoPlay="true"
      poster={moivedetail.hinhAnh}
      data-setup="{}"
      className="container"
    >
      <source src={moivedetail.Link} type="video/mp4" />
  
    </video>
    <GridFiml className="mt-4"/>
  
  </Segment>
      )
    }else{
      return <div>AN VAO HOME UPDATE </div>
    }
  }
}
let mapStateToProps = state => ({
  ListMoive: state.listMoiveRecuder.ListMoive,
});
const mapDispatchToProps = dispatch => {
  return {
    addFiml: dataFiml => {
      dispatch(createAction("SHOW",dataFiml));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(FimlDetail)