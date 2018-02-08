import React from 'react';
//import Chrips from './Chirps';

const Lists = (props) => {
    let listItem = props.chirp.map((chirp) => {
        return (
            <li id="list">{ chirp.value }</li>
        );
    });

    return (
        <ul>{ listItem }</ul>
    )
};

export default Lists;