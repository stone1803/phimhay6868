import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import * as serviceWorker from './serviceWorker';
import{Provider,useSelector} from "react-redux";
import{createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"
import rootRecuder from "./Redux/Recuder/rootRecuder"
import firebase from "./FireBase/config";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import {
  getFirebase,
  ReactReduxFirebaseProvider,
  isLoaded
} from "react-redux-firebase";

const middleWare = [thunk.withExtraArgument({ getFirestore, getFirebase })];
const store = createStore(
  rootRecuder,
  compose(applyMiddleware(...middleWare), reduxFirestore(firebase))
);
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebaseReducer.auth);
  if (!isLoaded(auth))
    return (
      <div className="container text-center">
        <h4>Hãy cảm ơn những lúc bạn gặp khó khăn, bởi nếu không có khó khăn, bạn sẽ không có cơ hội để hiểu mình và trải nghiệm cuộc sống</h4>
      </div>
    );
  return children;
}
const rrfConfig = {
  userProfile: "user",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  //enableClaims: true // Get custom claims along with the profile
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
      <App />
      </AuthIsLoaded>
    
  </ReactReduxFirebaseProvider>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
