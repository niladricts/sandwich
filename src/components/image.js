import React,{Component} from 'react';
import styled from 'styled-components';
export default class image extends Component{
    render(){
        return (
        <Image src={this.props.source} alt={this.props.text}/>
        )
    }

}

const Image = styled.img`
	width: 100%;
	height: 100%;
`;