import React from "react";
import '../Scss/_SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div class="SearchBar">
                <div class="search-container">
                <form action="/LoginPage" >
      	            <input type="text" placeholder="Search Across Thousands of videos" name="search" />
      		        <button type="submit">
      			        <FontAwesomeIcon icon={faSearch} />
                      </button>
                </form>
            </div>
            </div>
        )
    }
}