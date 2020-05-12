import React from 'react';
import '../Scss/_HeaderBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class HeaderBanner extends React.Component {
    render() {
        return (
            <div className="Header-links">
                <Link to="/KS1" className="KS1-Button">Key Stage 1</Link>
                <FontAwesomeIcon className="chevron-up" icon={faChevronUp} />
                <Link to="/KS2" className="KS2-Button">Key Stage 2</Link>
                <FontAwesomeIcon className="chevron-up" icon={faChevronUp} />
                <Link to="/KS3" className="KS3-Button">Key Stage 3</Link>
                <FontAwesomeIcon className="chevron-up" icon={faChevronUp} />
                <Link to="/KS4" className="KS4-Button">Key Stage 4</Link>
                <FontAwesomeIcon className="chevron-up" icon={faChevronUp} />
                <Link to="/KS5" className="KS5-Button">Key Stage 5</Link>
                <FontAwesomeIcon className="chevron-up" icon={faChevronUp} />
            </div>
        )
    }
}