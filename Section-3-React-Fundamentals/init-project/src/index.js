import React from "react";
import ReactDOM from 'react-dom/client';

function Getting() {
    return <h2>My First Component</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Getting/>);