import React, { useState } from 'react';

import '../../Scss/_QuickClickMaterial.css';

export default function QuickClickMaterial() {

    function handleClick(e) {
        alert('Hello');
    }

    return (
    <div className="QuickClickMaterial">
                    <div className="QuickClickMaterial-Box">
                        <div className="QuickClickMaterial-Box-SideBar">The UK's largest online teaching resource
                            <div className="QuickClickMaterial-Box-SideBar-Text">Choose from over 30 minutes of online courses with new additions published every week
                            </div>
                        </div>
                        <div className="QuickClickMaterial-Box-TopFiler">
                          <div className="KSButtons">
                          <button onClick={handleClick} className="KS1Button">Key-Stage 1</button>
                          <button className="KS2Button">Key-Stage 2</button>
                          <button className="KS3Button">Key-Stage 3</button>
                          <button className="KS4Button">Key-Stage 4</button>
                          <button className="KS5Button">Key-Stage 5</button>
                          </div>
                        </div>
                    </div>
                </div>
    )}