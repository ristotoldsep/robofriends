import React, {Component} from 'react';
import { connect } from 'react-redux';
//import React, {useState, useEffect} from 'react';
// COMPONENTS
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import '../containers/App.css'

import { requestRobots, setSearchfield } from '../actions';

const mapStateToProps = state => { //What state needs to be listened to and sent down as props
    return {
        // searchField: state.searchRobots.searchField
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => { //What props need to be listened to that are actions that need to get dispatched
    return {
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
        //onRequestRobots: () => requestRobots(dispatch)
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// export default App;
//OLD CODE AGAIN
class App extends Component {
    // constructor() { //DONT NEED THE CONSTRUCTOR ANYMORE CAUSE THERE IS NO MORE STATES
    //     super()
    //     this.state = {
    //         robots: [],
    //         //searchfield: ''
    //     }
    // }

    componentDidMount() {
        //console.log(this.props.store.getState()); //Consoles the app state! (REDUX)
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => { this.setState({ robots: users }) });
        this.props.onRequestRobots(); //ROBOTS ARE GOING TO BE PASSED AS PROPS (REDUX)
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }

    render() {
        //const { robots, searchfield } = this.state;
        //const { robots } = this.state; //DONT NEED WITH REDUX
        const { searchField, onSearchChange, robots, isPending } = this.props;  
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //return !robots.length ?
        return isPending ? //IF PENDING, RETURN LOADING SCREEN, IF API CALL SUCCESSFUL, RETURN ROBOTS
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    {/* <SearchBox searchChange={this.onSearchChange} /> */}
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                        
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import { robots } from '../  robots'; //Because robots.js doesn't return only 1 object, we have to use brackets!

// const App = () => {
// class App extends Component {
//     constructor() {
//         super(); //Just need to add 'this' which calls the constructor of 'Component'
//         this.state = { //App.js now owns state and allows to access it from elsewhere
//             robots: [],
//             searchfield: ''
//         }
//     }
// function App() {
//     //const robots is state now, setRobots is the fx that changes the state 
//     //[state, fx] = array destructuring! new in JS
//     const [robots, setRobots] = useState([]) //[] = INITIAL STATE
//     const [searchfield, setSearchfield] = useState('')
//     const [count, setCount] = useState(0)


//     // componentDidMount() {
//     //     fetch('https://jsonplaceholder.typicode.com/users/') //Fetching users from API
//     //         .then(response => response.json()) ////Getting a response and turning data into JSON
//     //         .then(users => this.setState({ robots: users })); //Then getting users and updating them with setState!
//     // }
// //=========================================================
// //HOOOOOOKS
// //=========================================================
//     useEffect(() => { //this fx gets run now every time App gets run! This is replication of componentDidmount()
//         
//             fetch('https://jsonplaceholder.typicode.com/users/') //Fetching users from API
//             .then(response => response.json()) ////Getting a response and turning data into JSON
//             .then(users => {setRobots(users)}); //Then getting users and updating them with setState!
//             console.log(count);
//     },[count]) //update robots with setRobots only in case of (trick) empty array (Only when the page first renders!!!!) !!! (HOOKS STUFF)

//     const onSearchChange = (event) => {

//         //this.setState({ searchfield: event.target.value })
//         setSearchfield(event.target.value)
//         // const filteredRobots = this.state.robots.filter(robot =>{
//         //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         // })
//         // console.log(filteredRobots);
//     }
//     // RENDERING MAIN PAGE
//     //render() { - no longer needed with hooks
//        // const { robots, searchfield } = this.state; //DONT NEED THIS LINE WITH HOOKS, already have access to robots / searchfield (they have their own state now)
//         const filteredRobots = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//         })
//         //console.log(robots, searchfield);
//         //if(!robots.length)
//         if(robots.length === 0) {
//             return <h1 className="tc">Loading</h1>
//         } else {
//             // console.log(filteredRobots);
//             return (
//                 <div className='tc'>
//                     <h1 className="f2">RoboFriends</h1>
//                     <button onClick={() => setCount(count + 1)}>Add Count</button>
//                     < SearchBox searchChange = {onSearchChange}/>    
//                     <Scroll>
//                         <ErrorBoundry>
//                             < CardList robots={filteredRobots} />
//                         </ErrorBoundry>
//                     </Scroll>    
//                 </div>
//             );
//         }
// }