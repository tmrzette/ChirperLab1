import React, { Fragment } from 'react';
import List from './list';



class App extends React.Component {
    constructor(props) {
       super(props)
       
       
       this.state= {
            chirps: [
                { value: ' John: This is a stupid Lab! ', id: 0},
                { value:  ' Brenda: I hate this Lab! ', id: 1},
                { value: ' Tarsha: Why must we do this lab? ', id: 2},
            ],
            
        };
    }

    handleInputChange = (chirp) => {
        this.setState({
            newChirp: {
                id: Math.floor(Math.random() * 20),
                value: 'newchirp'
            }
        })
    };


    addToList = () => { 
        this.handleInputChange({
            chirps: [...this.state.chirps, chirp],
            newChirp: [...this.state.chirps, this.state.newChirp],
            newChirp()
        }) 

        
    };

    render() {
      return (
        <Fragment>
            <h1>Chirppers Lab</h1>
            <input 
                placeholder="New Chirp"
                value= { this.state.chirp }
                onInput= { (event) => this.handleInputChange(event.target.value) }
            />
            <button onClick= { (event) => this.addToList(event.target.List) }></button>
            <List chirp={this.state.chirps} />
        </Fragment>
      )
    }



};

export default App;



//make button
//make list(object)
//make button function append list items to list
//what varibles are needed?
//create chirps
