import React from 'react';
import '../../Scss/_KeyStagePageTest.css'

export default function KeyStagePageTest({ keystageTitle, titleDescription }) {

    return (
        <div className="KeyStageTestBanner">
                    <div className="KeyStageTestBanner-Box">
                        <div className="KeyStageTestBanner-Box-SideBar">
                                <div>{keystageTitle}</div> 
                            <div className="KeyStageTestBanner-Box-SideBar-Text">
                                <div>{titleDescription}</div>
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