import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ visible ,onAddLoad,onCancel}) {
    const [enteredLoad, setEnteredLoad] = useState('')

    const addLoadHandler = () => {
        onAddLoad(enteredLoad);
        setEnteredLoad('')

    }
    // const loadInputHandler = (enteredText) => {
    //     setEnteredLoad(enteredText)
    // }

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/images/yukum_hazir.jpg")}
        />
        <TextInput style={styles.textInput} placeholder="Yeni Yük Ekle" onChangeText={(text) => setEnteredLoad(text)} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="İptal Et" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Yük Ekle" color="blue" onPress={addLoadHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray',
    padding:15


  },
  logoImage: {
    width: 150,
    height: 100,
    borderRadius:20,
    margin:20

  },
  textInput:{
    borderWidth:1,
    width:'100%',
    padding:10,
    borderRadius:10,
    backgroundColor:'orange',
    borderColor:'orange',
   


  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:15


  },
  button:{
    width:100,
    marginHorizontal:8,


  }

});
