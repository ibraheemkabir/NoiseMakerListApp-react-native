import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,TouchableHighlight,TouchableOpacity } from 'react-native';

export default class component2 extends Component {

	onPress = () => {
		console.log('hello')
	}

	onPress2 = () => {
		console.log('hello2')
	}

	render() {
		return (
			<View>
				<View style={{backgroundColor:'#ffffff'}}>
					<Text style={{color: 'red'}}>This is the second first  Component</Text>
				</View>
				<View style={style.container}>
					<TouchableHighlight style={style.v1} underlayColor='white' onPress={this.onPress}>
					<View>
						<Text style={{ textAlign: 'center' }}>View 1</Text>
					</View>
					</TouchableHighlight>
					<View style={style.v2}>
						<Text style={{ textAlign: 'center' }}>View 2</Text>
					</View>
					<TouchableOpacity style={style.v3} onPress={this.onPress2}>
						<View>
							<Text style={{ textAlign: 'center' }}>View 3</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	myView: {
		backgroundColor: 'blue'
	},
	myText: {
		color: 'grey'
	},
	container: {
		flexDirection: 'row',
		height: 100,
		textAlign: 'center',
	},
	v1: {
		padding: 10,
		flex: 1,
		backgroundColor: 'red',
	},
		v2: {
		padding: 10,
		flex: 1,
		backgroundColor: 'green',
	},
		v3: {
		padding: 10,
		flex: 1,
		backgroundColor: 'grey',
	}
})

AppRegistry.registerComponent('Component', () => Component2);