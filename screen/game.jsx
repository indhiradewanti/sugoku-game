import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoard, solved, update, validate } from "../store/boards/action";
import loading from "../assets/loading.gif";

export default function Game({ navigation, route }) {
  const dispatch = useDispatch();
  const { board, answer, status, isLoading } = useSelector((state) => state.board);
  const level = route.params.difficulty;
  const username = route.params.user;
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

  useEffect(() => {
    dispatch(fetchBoard(level));
  }, []);

  const handleInput = (number, indexRow, indexColumn) => {
    let newBoard = JSON.parse(JSON.stringify(answer));
    newBoard[(indexRow, indexColumn)] = +number;
    dispatch(update(newBoard));
  };

  const solve = () => {
    dispatch(solved(board));
    Alert.alert("Solved", `yeay it's solved`);
  };

  const valid = (page, username) => {
    if (status === "solved") {
      navigation.navigate(page, username);
    } else {
      dispatch(validate(answer));
      Alert.alert("Validate", `The board is ${status}`);
    }
  };

  if (!loaded) {
    return null;
  }

  console.log(isLoading);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.txt}> hello, {username}</Text>
        <Text style={styles.hello}> Level : {level} </Text>
      </View>
      {isLoading && (
        <View style={{ marginTop: 100 }}>
          <Image style={styles.logo} source={loading} />
        </View>
      )}
      <ScrollView>
        <View style={{ marginTop: 60 }}>
          {board.map((row, indexRow) => {
            return (
              <View style={{ flexDirection: "row" }} key={indexRow}>
                {row.map((column, indexColumn) => {
                  return (
                    <View key={indexColumn}>
                      {column ? (
                        <TextInput style={styles.grid} type={"number"} maxLength={1} value={String(column)} editable={column === 0} />
                      ) : (
                        <TextInput style={styles.grid} type={"number"} keyboardType={"number-pad"} maxLength={1} onChangeText={(number) => handleInput(number, indexRow, indexColumn)} />
                      )}
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={() => valid("Finish", {username})}>
            <Text style={styles.buttonText}>VALIDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={solve}>
            <Text style={styles.buttonText}>SOLVED</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontFamily: "shorelines",
    fontSize: 30,
    marginTop: 50,
    paddingTop: 10,
  },
  hello: {
    fontFamily: "hello",
    fontSize: 20,
  },
  grid: {
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderColor: "gray",
    borderStyle: "solid",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#FFFBF7",
    color: "#5C5752",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#C2BDAD",
    padding: 10,
    fontFamily: "magazine",
    marginTop: 20,
    width: 200,
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    fontFamily: "caslon",
    fontSize: 18,
  },
  logo: {
    height: 100,
    width: 100,
  },
});
