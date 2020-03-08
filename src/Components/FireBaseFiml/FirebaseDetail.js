import React, { Component } from "react";
import { Segment, Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Helmet} from "react-helmet";
import FirebaseFiml from "./FirebaseFiml";
import { FacebookProvider, Comments } from 'react-facebook';

import CommentFiml from "../coment/comment"
class FirebaseDetail extends Component {
  render() {
    let { fim } = this.props;
    if (fim) {
        return (
          <div>
          <Helmet>
          <meta charSet="utf-8" />
          <title>{fim.tenPhim}</title>
          <meta name="description" content={fim.des} />

          <link rel="canonical" href={`https://phimhay6868.web.app/`}/>
      </Helmet>
            <Segment piled className="mt-4 container">
            <h1 className="text-center">{fim.tenPhim}</h1>
      
     
        <video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
          autoPlay="true"
        poster='https://firebasestorage.googleapis.com/v0/b/todolistreact-23b8e.appspot.com/o/%C4%91oanu.jpg?alt=media&token=f29cbb5d-ad47-4582-b873-0a3571a57191"'
        data-setup="{}"
        className="container"
      >
        <source src={fim.link} type="video/mp4" />
    
      </video>
    </Segment>
    <Segment className="container">
          <h1>ĐỪNG QUÊN BÌNH LOẠN DƯỚI </h1>
    </Segment>
    <Segment className="container">
    <h5>PHIM CÙNG THỂ LOẠI</h5>
      <FirebaseFiml/>
    </Segment>

    </div>

        )
    }else{
        return <div>LOADING</div>
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const fiml = state.firestoreReducer.data.fiml;
  const fim = fiml ? fiml[id] : null;
  return {
    fim: fim
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "fiml"
    }
  ])
)(FirebaseDetail);
