import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet,  Text,  View } from "react-native";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [loads, setLoads] = useState([])

  const startModal = () => {
    setModalIsVisible(true);
  };
  const endModal = () => {
    setModalIsVisible(false);
  };
  const addLoad = (loadTitle) => {
   setLoads((currentLoad)=> [
    ...currentLoad,
    {text:loadTitle,id:Math.random().toString()}
   ])
    endModal()
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add Load" color="red" onPress={startModal} />
        <CourseInput visible={modalIsVisible} onAddLoad={addLoad} onCancel={endModal}/>
        <View>
          <FlatList data={loads} renderItem={({item})=> (
            <View style={styles.loadItem}>
              <Text style={styles.loadText}>{item.text}</Text>
            </View>
          )}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  loadItem:{
    backgroundColor:'gray',
    margin:8,
    borderRadius:5

  },
  loadText:{
    padding:8,
    color:'white',


  }
});
