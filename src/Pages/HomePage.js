import React from 'react';
import '../Scss/_HomePage.css';
import { Slide } from 'react-slideshow-image';
import Picture1 from '../Images/Picture1.PNG';
import Picture2 from '../Images/Picture2.PNG';
import Picture3 from '../Images/Picture3.PNG'
import QuickClickMaterial from '../components/HomePageComponents/QuickClickMaterial';

export default function HomePage() {
    const slideImages = [
        Picture1,
        Picture2,
        Picture3
      ];

      const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
          console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }
       
          return (
            <div className="slide-container">
              <Slide {...properties}>
                <div className="each-slide1">
                    <div ><span>Maths</span>
                  {/* <div style={{'backgroundImage': `url(${slideImages[0]})`}}> */}
                  </div>
                </div>
                <div className="each-slide2">
                    <div>
                  {/* <div style={{'backgroundImage': `url(${slideImages[1]})`}}> */}
                  </div><span>English</span>
                </div>
                <div className="each-slide3">
                    <div>
                  {/* <div style={{'backgroundImage': `url(${slideImages[2]})`}}> */}
                  </div><span>Science</span>
                </div>
              </Slide>
              <div className="How-MPT-HomePageBanner">
                    <div className="How-MPT-HomePageBanner-Container">
                        <div className="SubscriptionText">
                            <b>Subscribe to watch 1000's of</b>
                                <div className="SubscriptionText-SubText">
                                    <b>online Maths, English and Science</b>
                                </div>
                        </div>
                        <div className="ExpertTeachers">
                            <b>Expert Teachers</b>
                                <div className="ExpertTeachers-SubText">
                                    <b>From the best schools across the country</b>
                                </div>
                        </div>
                        <div className="Availability">
                            <b>Available to stream and download</b>
                                <div className="Availability-SubText">
                                    <b>on the web, app and offline</b>
                                </div>
                        </div>
                    </div>         
                </div>
                <QuickClickMaterial />
            </div>
          );
      }