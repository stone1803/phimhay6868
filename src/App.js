import React, { Component } from "react";
import MenuFiml from "./Components/Menu";
import GridFiml from "./Components/GridFiml";
import Footer from "./Components/Footer";
import FimlDetail from "./Components/FimlDetail"
import { BrowserRouter , Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "./Redux/Action/action";
import Login from "./Admin/Login";
import AddFiml from "./Admin/AddFiml";
import FirebaseFiml from "./Components/FireBaseFiml/FirebaseFiml";
import FirebaseDetail from "./Components/FireBaseFiml/FirebaseDetail";
import AddMp3 from "./Admin/AddMp3";
import Mp3Detail from './Components/MP3/Mp3Detail'
import VideoTest from "./video"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      fetched: false
    };
  }
  componentDidMount() {

  }
  render() {

    return (
      <BrowserRouter>
      <MenuFiml/>
      {/* here's a div */}
      <div>
      <Switch>

        {/* here's a Route */}
        <Route path="/list" component={GridFiml} />
        <Route exact path="/" component={GridFiml} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/add" component={AddFiml} />
        <Route exact path="/list-fiml" component={FirebaseFiml} />
        <Route path="/chi-tiet/:id" component={FirebaseDetail} />
        <Route path="/chi-tiet-mp3/:id" component={Mp3Detail} />
        <Route exact path="/addmp3" component={AddMp3} />
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addFiml: dataFiml => {
      dispatch(createAction("SHOW",dataFiml));
    }
  };
};
export default connect (null,mapDispatchToProps)(App)