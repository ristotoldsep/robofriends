import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import { robots } from './robots'; //Because robots.js doesn't return only 1 object, we have to use brackets!

// const App = () => {
class App extends Component {
    constructor() {
        super(); //Just need to add 'this' which calls the constructor of 'Component'
        this.state = { //App.js now owns state and allows to access it from elsewhere
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ searchfield: event.target.value })
        // const filteredRobots = this.state.robots.filter(robot =>{
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // console.log(filteredRobots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log(filteredRobots);
        return (
            <div className='tc'>
                <h1 className="f2">RoboFriends</h1>
                < SearchBox searchChange = {this.onSearchChange}/>        
                < CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;