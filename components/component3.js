import React, { Component } from 'react';
import { AppRegistry, View, TextInput,StyleSheet, Button} from 'react-native';
import Component4 from './component4'
import { ScrollView } from 'react-native-gesture-handler';

const users = []

export default class Component3 extends React.Component {

	static navigationOptions = {
		title: 'NoiseMaker App',		
	};

	state= {
		value: '',
		switchValue: false,
		users: users
	}

	onChangeText = (e) => {
		this.setState({
			value: e
		})
	}

	componentDidMount = () => {
		this.fetchUsers()
	}

	fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					users: response
				})
			})
	}

	onSwitchChangeText = () => {
		this.setState(prevState => ({
			...prevState,
			switchValue: !prevState.switchValue
		}));
	}

	onSubmit = () => {
		this.setState(prevState => ({
			...prevState,
			users: [...prevState.users, { name: this.state.value,id: prevState.users.length+ 1 }],
			value: ''
		}));
	}

	onDelete = (id) => {		
		const users = this.state.users.filter(
			user => user.id !== id
		)
		this.setState(prevState => ({
			...prevState,
			users,
		}));
	}

	render() {
		return (
			<View>
				<TextInput
						placeholder="Enter Name"
						value={this.state.value}
						onChangeText={(value)=>this.onChangeText(value)}
						onSubmitEditing={this.onSubmit}
						style={styles.input}
				/>
					<Component4 users={this.state.users} delete={this.onDelete} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
		input: {
			borderBottomWidth: 1,
			borderStyle: 'solid',
			fontSize: 25,
			paddingTop: 17,
			padding: 5
		},
	list: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		marginBottom: 4,
		fontSize: 5
	},
})

AppRegistry.registerComponent('Component', () => Component3);