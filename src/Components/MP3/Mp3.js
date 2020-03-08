import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, firebaseConnect } from "react-redux-firebase";
import Slider from "react-slick";
import Mp3Item from "../MP3/Mp3Item"
export default function Mp3() {
  useFirestoreConnect("mp3"); // sync tips collection from Firestore into redux
  firebaseConnect("mp3"); // sync tips collection from Firestore into redux

  const Mp3 = useSelector(state => state.firestoreReducer.ordered.mp3); // get data no mapState
console.log(Mp3)
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
          {Mp3 &&
            Mp3.map((Mp3, index) => {
              return <Mp3Item Mp3={Mp3} key={index}/>;
            })}
        </Slider>
        
      </div>
    </div>
  );
}
