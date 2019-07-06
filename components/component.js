import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class component extends Component {

	static navigationOptions = {
		title: 'Welcome',
		headerTitleStyle: {
			color: 'blue'
		}
		
	};

	state = {
		message: 'Kabir',
		showName: true
	}

	render(){
		let name = this.state.showName ? this.state.message : 'Empty name'
		return(
			<View>
				<Text>This is a {this.props.message} Component {name}</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('Component',()=> Component);