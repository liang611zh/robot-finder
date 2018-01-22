import React, { Component } from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBar from '../components/SearchBar';
import Selectzone from '../components/Selectzone';


class App extends Component {
    constructor(){
        super();
        this.state= {
            robots:[],
            searchfiled:'',
        };
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch('https://api.mlab.com/api/1/databases/my-robots/collections/user?apiKey=xfW3ay9Ni7BvyLG182hhaWxl5omrGhPB')
        .then(response=>{
            return response.json();
        })
        .then(user=>{
            this.setState({robots:user})
        })
    }

    onSearching = (event) => {
        this.setState({searchfiled:event.target.value});
    }

    render() {
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })
            if(this.state.robots.length === 0){
                return(
                <div className='tc'>
                    <h1>My Robots</h1>
                    <SearchBar onSearching={this.onSearching} />
                    <h1>Loading ...</h1>
                </div>);
            }else{
            return(
            <div className='tc'>
            <h1>My Robots</h1>
            <SearchBar onSearching={this.onSearching} />
            <Selectzone>
            <CardList robots={filterRobots} />
            </Selectzone>
            </div>
        );}
    }
}
export default App;
