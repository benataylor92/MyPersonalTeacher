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
                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    <span>Slide 1</span>
                  </div>
                </div>
                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    <span>Slide 2</span>
                  </div>
                </div>
                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    <span>Slide 3</span>
                  </div>
                </div>
              </Slide>
            </div>
          );
      }