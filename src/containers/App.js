import React, { Component } from 'react';
import {connect} from 'react-redux'

import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBar from '../components/SearchBar';
import Selectzone from '../components/Selectzone';
import {setSearchFeild,requestRobots} from '../actions';

const mapStateToProps=state=>{
    return{
        searchField:state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}

const mapDispatchToProps=(dispatch)=>{
   return{
       onSearching:(event)=>dispatch(setSearchFeild(event.target.value)),
       onRequestsRobots:()=>dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount(){
        this.props.onRequestsRobots();
    }

    render() {

        const {searchField,onSearching,robots,isPending }=this.props;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
            return isPending?(
                <div className='tc'>
                    <h1>My Robots</h1>
                    <SearchBar onSearching={onSearching} />
                    <h1>Loading ...</h1>
                </div>
                )
            :(
            <div className='tc'>
            <h1>My Robots</h1>
            <SearchBar onSearching={onSearching} />
            <Selectzone>
            <CardList robots={filterRobots} />
            </Selectzone>
            </div>
            )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
