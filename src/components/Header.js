// imports
import React from 'react';
// import '../index.css'

const Header = (props) => {
    return ( 
        <div className="header">
            <header>
                <h1>{ props.name }</h1>
            </header>
        </div>



     );
}
 
export default Header;