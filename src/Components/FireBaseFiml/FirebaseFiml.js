import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, firebaseConnect } from "react-redux-firebase";
import FirebaseItem from "./FirebaseItem";
import Slider from "react-slick";

export default function FirebaseFiml() {
  useFirestoreConnect("fiml"); // sync tips collection from Firestore into redux
  firebaseConnect("fiml"); // sync tips collection from Firestore into redux

  const Fiml = useSelector(state => state.firestoreReducer.ordered.fiml); // get data no mapState
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="row">
      {/* //col-xl-3 col-lg-6 col-md-6 col-sm-4 mb-4 */}
      <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 mr-4">
        <Slider {...settings}>
          {Fiml &&
            Fiml.map((Fiml, index) => {
              return <FirebaseItem moive={Fiml} key={index}/>;
            })}
        </Slider>
        
      </div>
    </div>
  );
}
