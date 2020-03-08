import React, { Component } from "react";
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
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PlayList from "./PlayList"
class Mp3Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: [],
      data: [],
      play:null
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.Mp3,
      play:nextProps.Mp3.link[1]
    });
  }
   
   
  handleOne = () => {
    let{data}= this.state
    console.log(this.state)

  };
  play = (data)=>{
    console.log(data)
    
  }
  handleTwo = () => {
    this.setState({
      link: this.props.mp3.Link2
    });
  };
  render() {
    if (this.props.Mp3) {
      return (
        <div className="row container mt-4 m-auto">
          <div className="col-sm-4 mt-2">
            <Image src={this.props.Mp3.hinhAnh} size="medium" bordered />
            <AudioPlayer
              style={{
                width: "300px",
                marginTop: "4px"
              }}
              autoPlay
              src=""
              onPlay={e => console.log("onPlay")}
            />
          </div>
          <div className="col-sm-8 mt-2 ">
            <Segment>
              <h5>{this.props.Mp3.tenMp3}</h5>
              <h5>Giọng đọc : {this.props.Mp3.tacGia}</h5>
              <p>Tác giả : {this.props.Mp3.tacGia}</p>

              <Button as="div" labelPosition="right">
                <Button color="red">
                  <Icon name="heart" />
                  Lượt nghe
                </Button>
                <Label as="a" basic color="red" pointing="left">
                  2,048
                </Label>
              </Button>
              {this.handleOne()}

             

            </Segment>
          </div>
        </div>
      );
    } else {
      return <div>LOADING</div>;
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const Mp3 = state.firestoreReducer.data.mp3;

  const mp = Mp3 ? Mp3[id] : null;
  return {
    Mp3: mp
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "mp3"
    }
  ])
)(Mp3Detail);
