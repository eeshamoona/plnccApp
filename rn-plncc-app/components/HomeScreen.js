import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircleButton from 'react-native-circle-button';
import {Calendar} from 'react-native-calendars';
const HomeScreen = props => {
  return (
    <View style={style.bigContainer}>
      <View style={style.calendarContainer}>
        <Calendar
          style={style.calendarSpecs}
        />
      </View>
      <View style={{ flex: 1 }}>
        <CircleButton size={45} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  bigContainer: {
    padding: 60,
  },
  calendarContainer: {
    height: '80%',
    borderColor: 'black'
  },
  calendarSpecs: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  listItem: {
    padding: 10,
    marginVertical: 2,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },
  button: {
    padding: 5,
    height: '20%',
    width: '20%',  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height
    borderColor: 'black',
    backgroundColor:'#ccc',
  },
});

export default HomeScreen;
