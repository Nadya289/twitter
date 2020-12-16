import React from 'react';
import '../search-panel/search-panel.css';


const SearchPanel =() => {
    return(
        <input
            className="form-control serch-input"
            type = "text"
            placeholder="Поиск по записям"
        />
    )
}

export default SearchPanel;