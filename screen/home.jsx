import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from "react-native";
import { useFonts } from "expo-font";
import sugoks from "../assets/sugoks.gif";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useDispatch, useSelector } from "react-redux";
import { username } from "../store/users/action";

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    ontohood: require("../assets/fonts/Ontohood.otf"),
    autography: require("../assets/fonts/AuthenticSignature.ttf"),
    hello: require("../assets/fonts/Vogue.ttf"),
    romantic: require("../assets/fonts/Romantic.otf"),
    odeng: require("../assets/fonts/Odeng.ttf"),
    denganline: require("../assets/fonts/Denganline.ttf"),
    tarendra: require("../assets/fonts/TarendraNaushadSignature.ttf"),
    thampolin: require("../assets/fonts/Thampholine.otf"),
    shorelines: require("../assets/fonts/ShorelinesScriptBold.otf"),
    magazine: require("../assets/fonts/Magazine.ttf"),
    caslon: require("../assets/fonts/CaslonCP.otf"),
    sunflower: require("../assets/fonts/Sunflower.otf"),
  });
  const { user } = useSelector((state) => state.user);
  const [difficulty, setDifficulty] = useState("");
  const start = (page, info) => {
    if (!user && difficulty) {
      Alert.alert("Username Required", "Please input your username first");
    } else if (!user && !difficulty) {
      Alert.alert("Username & Level Required", "Please input your username and choose your level first");
    } else if (!difficulty) {
      Alert.alert("Level Required", "Please choose your level first");
    } else {
      navigation.navigate(page, info);
    }
  };
console.log(user);
  const dispatch = useDispatch()
  const setUser = (name) => {
    dispatch(username(name))
  }
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.txt}>Welcome to</Text>
        <Image style={styles.logo} source={sugoks} />
        <View style={styles.box}>
          <Text style={styles.hello}>username</Text>
          <TextInput style={styles.input} placeholder="input your name here" onChangeText={(value) => setUser(value)} />
          <Text style={styles.hello}>Level</Text>
          <View style={styles.level}>
            <SegmentedControl values={["easy", "medium", "hard"]} onValueChange={(values) => setDifficulty(values)} style={{ height: 50, fontSize: 50 }} />
          </View>
        </View>
        <TouchableOpacity onPress={() => start("Game", {difficulty, user})} style={styles.start} title="Start Game">
          <Text style={styles.startText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7f0e9",
  },
  txt: {
    fontFamily: "ontohood",
    fontSize: 50,
    marginTop: 120,
  },
  hello: {
    fontFamily: "magazine",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    marginVertical: 3,
    textAlign: "center",
    fontFamily: "caslon",
    fontSize: 20,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  level: {
    width: 300,
    marginTop: 10,
    backgroundColor: "#C9CAB0A1",
  },
  logo: {
    width: 255,
    resizeMode: "contain",
    marginBottom: 60,
  },
  dropdown: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    marginVertical: 3,
    fontSize: 20,
  },
  picker: {
    fontFamily: "odeng",
  },
  start: {
    borderWidth: 1,
    borderColor: "#B9B1B1",
    backgroundColor: "#B7B8A4EF",
    fontSize: 40,
    height: 40,
    alignContent: "center",
    justifyContent: "center",
    width: 200,
    borderRadius: 10,
    marginTop: 40,
  },
  startText: {
    fontFamily: "caslon",
    textAlign: "center",
    fontSize: 30,
  },
  box: {
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 30,
    borderRadius: 10,
    borderColor: "#7A7A6A",
  },
});
