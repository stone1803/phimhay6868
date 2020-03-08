import { combineReducers } from "redux";
import listMoiveRecuder from "../Store/ListFiml";
import { firestoreReducer } from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase"

const rootRecuder = combineReducers ({
    listMoiveRecuder:listMoiveRecuder,
    firestoreReducer: firestoreReducer,
    firebaseReducer:firebaseReducer

})
export default rootRecuder;