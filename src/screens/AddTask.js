import React, { Component } from 'react'
import {Modal, 
    View, 
    Platform,
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    TextInput } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'

import commonStyles from '../commonStyles'

const initialState = { desc : '', date : new Date() , showDatePicker : false}

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker value = {this.state.date} 
            onChange={(_,date) => this.setState({ date, showDatePicker: false })} 
            mode = 'date' />
            if (Platform.OS === 'android'){
                datePicker = (
                    <View></View>
                )
            }

            return datePicker
    }


    render(){
        return(
            <Modal transparent={true}  
                visible={this.props.isVisible} 
                onRequestClose = {this.props.onCancel}
                animationType = 'slide' >
                <TouchableWithoutFeedback onPress = {this.props.onCancel} >
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style = { styles.header }>Nova Tarefa</Text>
                    <TextInput style = {styles.input}
                        placeholder="Informe a Descrição..." 
                        onChangeText = { desc => this.setState({ desc })}
                        value={this.state.desc}></TextInput>
                        {this.getDatePicker()}
                    <View style = {styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress = {this.props.onCancel} >
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'    
    }, 
    
    container: {
      
       backgroundColor: '#fff', 
    }, 
    
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.color.today,
        color: commonStyles.color.secondary,
        textAlign: 'center',
        padding: 15, 
        fontSize: 18
    },
    
    buttons:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }, 
    
    button:{
        margin: 20, 
        marginRight: 30,
        color: commonStyles.color.today
    }, 

    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40, 
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1, 
        borderColor: '#E3E3E3',
        borderRadius: 6
    }
})






