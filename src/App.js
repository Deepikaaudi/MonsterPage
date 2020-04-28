import React, { Component } from 'react';
import './App.css';
import {cardList as CardList} from './component/cardList/cardList.componenet.jsx';
import { SearchBox } from './component/searchBox/searchBox.component';

class App extends Component {
 constructor() {
super();
this.state = { monsters : [],
  searchInput : '' };
 };
 
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(res=>{ console.log(res);
     return res.json();}).then(json =>{ 
      // console.log(json); 
      return this.setState({monsters: json});});
 }


 onChangeSearch=(e)=>{
  this.setState({ searchInput : e.target.value}, ()=>{console.log(this.state.searchInput)});
 };
 
 render() {
   
   const { monsters, searchInput} = this.state;
   const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchInput.toLowerCase()));
   console.log(`filtered Monsters : `, filteredMonsters);
  return (
    <div className = 'App'>
    <h1 >Monsters List</h1>
      <SearchBox  placeholder = 'search Monsters' onChangeInput={this.onChangeSearch} />
  {/* <input type='search' placeholder='Input Value' onChange={(e)=> this.onChangeSearch(e)}/> */ }
       <CardList monstersList ={filteredMonsters} /> 
  {/*     {this.state.monsters.map(mons=> <h1  key= {mons.id} >{mons.name}</h1>)}</CardList>
       <img src={logo} className="App-logo" alt="logo" /> -->
        <p>
          Edit <code>App.js</code> and save to reload.    {this.state.string}
        </p>
      <button onClick ={ () =>{this.setState({string : 'Pagal Insan'})}} >
    button
        </button> */}
   
    </div>
  );}
}

export default App;
