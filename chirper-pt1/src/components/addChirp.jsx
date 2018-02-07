import React from 'react';
//import { Chirps } from './Chirps';

class addChirp extends React.Component() {
    constructor(props) {
       super(props)
       
        this.state= {
            chirps: [
                {
                    name: 'John',
                    chirp: 'This is a stupid Lab!'
                },
                {
                    name: 'Brenda',
                    chirp: 'I hate this Lab!'
                },
                {
                    name: 'Tarsha',
                    chirp: 'Why must we do this lab?'
                }
            ]
        };

        this.props = this.state;

        const list = () => {
            return <li>{ this.state.chirps }</li>
            
        };
     
        const addList = () => {
            const newChirps = this.state.chirps;
            const listItems = newChirps.map((newChirps) => <list key={ newChirps.toString() } value= { newChirps }/> );
     
            return (
            <ul className="chirpslist">
            {listItems}
            </ul>)
             
        };

        const makeButton = () => {
            
        }


     

    }




};
    
    
export default addChirp;