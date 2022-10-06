import React from 'react';
import './App.css';
import HashMap from './components/HashMap';
import LayOut from './LayOut';

function App() {
    return (
        <div className="App">
            <LayOut children={new HashMap({}).render()}></LayOut>
        </div>
    );
}

export default App;
