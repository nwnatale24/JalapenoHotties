import React from 'react';


function Search({placeholder, data}) {
    return (
            <div className="Search">
                <div className="inputs">
                    <input type="text"  placeholder={placeholder}/>
                </div>
                <div className="result"></div>
            </div>
        );
}

export default Search;