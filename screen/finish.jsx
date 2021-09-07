import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { username } from "../store/users/action";
import { checkValidate, fetchData, update } from "../store/boards/action";

export default function Finish({ navigation }) {
  const { user } = useSelector((state) => state.user);
  const { board, answer, status } = useSelector((state) => state.board);

  const image = { uri: "https://c.tenor.com/tRogrn6WyvEAAAAi/party-beer.gif" };
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

  if (!loaded) {
    return null;
  }

  const start = (page) => {
    navigation.navigate(page)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.textOnto}>Horray!</Text>
          <Text style={styles.text}>congratulation {user} for winning this game!!</Text>
          <View style={{alignItems: "center"}}>
            <TouchableOpacity onPress={() => start("Home")} style={styles.start} title="Start Game">
              <Text style={styles.startText}>Start New Game</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#f7f0e9",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textOnto: {
    color: "grey",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "thampolin",
    textAlign: "center",
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontFamily: "odeng",
    marginBottom: 100,
    textAlign: "center",
    marginLeft: 40,
    marginRight: 40,
  },
  start: {
    borderWidth: 1,
    borderColor: "#B9B1B1",
    backgroundColor: "#B7B8A4EF",
    fontSize: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 200,
    borderRadius: 10,
  },
  startText: {
    fontFamily: "caslon",
    textAlign: "center",
    fontSize: 20,
  },
});
