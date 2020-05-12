import React from "react";
import '../Scss/_SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div class="SearchBar">
                <div class="search-container">
      	            <input type="text" placeholder="Search Across Thousands of videos" name="search" />
      		        <button type="submit">
      			        <FontAwesomeIcon icon={faSearch} />
                      </button>
                <Link to="/loginPage" className="Login-Button">Login</Link> 
                <Link to="/signup" className="Sign-up">Sign Up</Link>
            </div>
            </div>
        )
    }
}