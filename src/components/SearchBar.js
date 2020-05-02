import React from "react";
import '../Scss/_SearchBar.css';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input type="text" className="SearchBar-Input" placeholder="Search Across Thousands of Videos" />
            </div>
        )
    }
}