import React from 'react';
import List from './list'

const addChirp = () => {
    return (
        <div>
        <button onClick="{}">SUBMIT</button>
        <li>{  }</li>
        </div>
    )
}
/*
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

        const items = () => {
            return <li>{ this.state.chirps }</li>
            
        };
     
        const addList = () => {
            let newChirps = items();
            let newList = newChirps.keys(this.state.chirps).map(function())
     
            return (
            <ul className="chirpslist">
            {newList}
            </ul>)
             
        };

        const makeButton = () => {
            
        }


     

    }




};
*/
    
export default addChirp;