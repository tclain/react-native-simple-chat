import React from 'react'
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'

import Chat from '../../src/';
import data from './faker';


const Card = ({ children }) => <View style={styles.card}>{children}</View>
const Header = props => <View style={{position:"absolute", top : 0, left:0,right:0, height:60, backgroundColor:"#feaeae"}}><Text>Header</Text></View>
const Footer = props => <View style={{position:"absolute", bottom : 0, left:0,right:0, height:60, backgroundColor:"#aeaeae"}}><Text>Footer</Text></View>

const MessageBuilder = (message) => {
    <Text>{message.id}, {message.message}, {message.image}</Text>
}

const App = () => (
  <Card>
    <Header></Header>
    <Chat messages={data()} senderId="sender"></Chat>
    <Footer></Footer>
  </Card>
)
const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  }
})


AppRegistry.registerComponent('ChatExample', () => App)
AppRegistry.runApplication('ChatExample', { rootTag: document.getElementById('app') })
