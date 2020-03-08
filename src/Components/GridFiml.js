import React, { Component } from "react";
import { Header, Message, Icon } from "semantic-ui-react";

import { connect } from "react-redux";
import FirebaseFiml from "./FireBaseFiml/FirebaseFiml";
import { css } from "@emotion/core";
// First way to import
// Another way to import. This is recommended to reduce bundle size
import GridLoader from "react-spinners/GridLoader";
import Mp3 from "./MP3/Mp3";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #17a2b8;
`;
class GridFiml extends Component {
  render() {
    if (this.props.auth) {
      return (
        <div className="container  mt-2">
          <div>
            <Message
              success
              header="Wellcome "
              content="Phiên bản đang thử nghiệm nên các bạn thông cảm nhé !"
              className="mb-2"
            />

            <h5>
              <Icon loading name="spinner" />
            TOP 10 PHIM LẺ
            </h5>
          </div>
          <div className="container align-center mt-2">
            <FirebaseFiml />
          </div>

          <h5>
            <Icon loading name="spinner" />
            TOP PHIM LỂ ĐẶC SẮC
          </h5>
          <div className="container align-center ">
            <FirebaseFiml />
          </div>
          
        
        </div>
      );
    } else {
      return (
        <div className="sweet-loading mt-4">
          <GridLoader
            css={override}
            size={50}
            //size={"150px"} this also works
            color={"#36D7B7"}
          />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};
export default connect(mapStateToProps)(GridFiml);
