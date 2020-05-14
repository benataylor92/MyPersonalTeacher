import React from 'react';
import '../../Scss/_KeyStagePageTest.css'
import PropTypes from "prop-types";

export default function KeyStagePageTest({ words }) {

    return (
        <div className="KeyStageTestBanner">
                    <div className="KeyStageTestBanner-Box">
                        <div className="KeyStageTestBanner-Box-SideBar">
                                <div>{words}</div> 
                            <div className="KeyStageTestBanner-Box-SideBar-Text">
                            </div>
                        </div>
                        <div className="KeyStageTestBanner-RightBox">
                        </div>
                    </div>
                </div>
    )
}

// KeyStagePageTest.propType = {
//     words: PropTypes.string
// };