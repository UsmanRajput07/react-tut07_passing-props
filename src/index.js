import React from 'react';
import ReactDOM from 'react-dom/client';
import ComA from "./components/CompA"

const root = ReactDOM.createRoot(document.getElementById('root'));
let data = "aniket";
root.render(<ComA user={data}/>);

