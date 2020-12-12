// import React, {Component} from 'react';
import React, {Component} from 'react';
// COMPONENTS
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import '../containers/App.css'
// import { robots } from '../  robots'; //Because robots.js doesn't return only 1 object, we have to use brackets!

//const App = () => {
class App extends Component {
    constructor() {
        super(); //Just need to add 'this' which calls the constructor of 'Component'
        this.state = { //App.js now owns state and allows to access it from elsewhere
            robots: [],
            searchfield: ''
        }
    }
// function App() {
//     //const robots is state now, setRobots is the fx that changes the state 
//     //[state, fx] = array destructuring! new in JS
//     const [robots, setRobots] = useState([]) //[] = INITIAL STATE
//     const [searchfield, setSearchfield] = useState('')
//     const [count, setCount] = useState(0)


    componentDidMount() {
        console.log(this.store.getState());
        fetch('https://jsonplaceholder.typicode.com/users/') //Fetching users from API
            .then(response => response.json()) ////Getting a response and turning data into JSON
            .then(users => this.setState({ robots: users })); //Then getting users and updating them with setState!
    }
//=========================================================
//HOOOOOOKS
//=========================================================
    // useEffect(() => { //this fx gets run now every time App gets run! This is replication of componentDidmount()
    //         fetch('https://jsonplaceholder.typicode.com/users/') //Fetching users from API
    //         .then(response => response.json()) ////Getting a response and turning data into JSON
    //         .then(users => {setRobots(users)}); //Then getting users and updating them with setState!
    //         console.log(count);
    // },[count]) //update robots with setRobots only in case of (trick) empty array (Only when the page first renders!!!!) !!! (HOOKS STUFF)

    //const onSearchChange = (event) => {
     onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value })
       // setSearchfield(event.target.value)
        // const filteredRobots = this.state.robots.filter(robot =>{
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // console.log(filteredRobots);
    }
    // RENDERING MAIN PAGE
    render() { //- no longer needed with hooks
       const { robots, searchfield } = this.state; //DONT NEED THIS LINE WITH HOOKS, already have access to robots / searchfield (they have their own state now)
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //console.log(robots, searchfield);
        //if(!robots.length)
        if(robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
            // console.log(filteredRobots);
            return (
                <div className='tc'>
                    <h1 className="f2">RoboFriends</h1>
                    <button onClick={() => setCount(count + 1)}>Add Count</button>
                    < SearchBox searchChange = {onSearchChange}/>    
                    <Scroll>
                        <ErrorBoundry>
                            < CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>    
                </div>
            );
        }
}
}
export default App;