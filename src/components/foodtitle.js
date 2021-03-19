import React,{Component} from 'react';
import styled from 'styled-components';
export default class foodtitle extends Component{
    render(){
        return (
        <Header>{this.props.title}</Header>
        )
    }

}
const Header = styled.img`
	width: 100%;
	height: 100%;
`;