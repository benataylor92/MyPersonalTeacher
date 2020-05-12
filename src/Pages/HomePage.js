import React from 'react';
import '../Scss/_HomePage.css';
import { Slide } from 'react-slideshow-image';
import Picture1 from '../Images/Picture1.PNG';
import Picture2 from '../Images/Picture2.PNG';
import Picture3 from '../Images/Picture3.PNG'

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
                    <div ><span>Hello1</span>
                  {/* <div style={{'backgroundImage': `url(${slideImages[0]})`}}> */}
                  </div>
                </div>
                <div className="each-slide2">
                    <div>
                  {/* <div style={{'backgroundImage': `url(${slideImages[1]})`}}> */}
                  </div><span>Hello2</span>
                </div>
                <div className="each-slide3">
                    <div>
                  {/* <div style={{'backgroundImage': `url(${slideImages[2]})`}}> */}
                  </div><span>Hello3</span>
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
                <div className="QuickClickMaterial">
                    <div className="QuickClickMaterial-Box">
                        <div className="QuickClickMaterial-Box-SideBar">The UK's largest online teaching resource
                            <div className="QuickClickMaterial-Box-SideBar-Text">Choose from over 30 minutes of online courses with new additions published every week
                            </div>
                        </div>
                        <div className="QuickClickMaterial-Box-TopFiler">
                          <div className="KSButtons">
                          <button className="KS1Button">Key-Stage 1</button>
                          <button className="KS2Button">Key-Stage 3</button>
                          <button className="KS3Button">Key-Stage 4</button>
                          <button className="KS4Button">Key-Stage 2</button>
                          <button className="KS5Button">Key-Stage 5</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          );
      }