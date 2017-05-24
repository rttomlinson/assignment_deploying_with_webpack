import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const Greeting = ({name}) => {
    return (
        <p className="greet">Hello, {name}</p>    
    );
};

ReactDOM.render(<Greeting name="Reign" />, document.getElementById('root'));

