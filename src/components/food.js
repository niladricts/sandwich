import React,{Component} from 'react';
import Foodtitle from './foodtitle'
import Image from './image'
import styled from 'styled-components';

export default class food extends Component{
    render(){
        return(
            <div>
               {this.props.meals.map((item, index) => {
              return (
                <Food
                  key={index} 
                  href={item.strSource}>
                  <Image source={item.strMealThumb} text={item.strMeal} />
                  <Foodtitle title={item.strMeal} />
                  </Food>)
               
          })}
            </div>
        )
    }
}
const Food = styled.a`
	max-width: 300px;
	width: 100%;
	display: inline-block;
	border-radius: 2px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(.5, 0, 0, .5);
`;