
//import axios from 'axios';
import React from 'react';
import './App.css';
import Food from './components/food'
import styled from 'styled-components';

import Button from 'react-bootstrap/Button'
//mport { render } from '@testing-library/react';
//import { ReactComponent } from '*.svg';

//import Sidebar from './Sidebar';
// The structure of the code taken from https://medium.com/@prezshaikh/build-a-food-listing-app-with-reactjs-d1471d9ef866
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {sandwich:""};
    this.addOrder = this.addOrder.bind(this);
  }
  addOrder(event){
    alert("Order Placed"+event.target.value);
  }
  componentDidMount(){
    fetch("https://the-cocktail-db.p.rapidapi.com/filter.php", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "465d77fbfemsh5918ffcc1c63466p12478cjsna243dfd4626b",
    "x-rapidapi-key": "apikey"}}
    ).then(response => response.json()).then(response => {this.setState({sandwich:response})})
    .catch(error => {console.log(error);});
   
}

  render (){
    var items = this.state.sandwich;
    return(
      <Appex className='App'>
       { items.length > 0 && <Food data={items}/>}
       <Button onClick={this.addOrder()}>Order</Button>
      </Appex>
    );
  }

  }

const Appex = styled.div`
background: #fff;
padding: 2em;
`

export default App;
