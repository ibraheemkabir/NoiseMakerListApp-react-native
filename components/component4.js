import React, { Component } from 'react';
import { AppRegistry, Text,Image, View, ScrollView,TouchableHighlight,StyleSheet } from 'react-native';


export default class component4 extends Component {


	state = {
		users: this.props.users,
		id: ''
	}

	_onPressButton = (id) => {
		this.props.delete(id)
	}

	render() {
		return (
				<ScrollView style={{ height:470 }}>
					{
						this.props.users.length === 0 
						?
							<View style= { styles.loading }>
								<Text>
									Loading...
								</Text>
							</View>
						:
						this.props.users.map(data=>
							<View style={styles.stack} key={data.id}>
								<View style={styles.list}>
									<Text >
										{data.name}
									</Text>
									<TouchableHighlight onPress={() => this._onPressButton(data.id)}>
										<View>
											<Image source={{ uri: "https://img.icons8.com/flat_round/64/000000/delete-sign.png", width: 25, height: 25, padding: 10 }} />
										</View>
									</TouchableHighlight>
								</View>
							</View>
						)
					}
				</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
		list: {
			justifyContent: 'space-between',
			flex: 1,
			flexDirection: 'row',
			padding: 10,
			paddingBottom: 10,
			marginBottom: 1,
			fontSize: 15,
			fontWeight: "900",
			borderWidth: 0,
			borderBottomWidth: 1,
			borderColor: "#D6DEE4",
			width: 20,
		},
		stack: {
			flexDirection: 'row', 
			borderRightWidth: 0
		},
		loading: {
			alignItems: "center",
			fontSize: 55,
		},
})

AppRegistry.registerComponent('Component4', () => Component4);