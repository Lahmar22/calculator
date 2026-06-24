import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";

export default function HomeScreen() {

  const [display, setDisplay] = useState("");

  const addNumber = (value: string) => {
    setDisplay(prev => prev + value);
  };

  const calculate = () => {
    try {
      const parts = display.split(/[+\-*/]/);
      const operator = display.match(/[+\-*/]/)?.[0];

      const a = Number(parts[0]);
      const b = Number(parts[1]);

      let result = 0;

      switch (operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "/":
          if (b === 0) {
            throw new Error("Impossible de diviser par zero");
          }

          result = a / b;
          break;
        case "*":
          result = a * b;
          break;
        default:
          return;

      }
      setDisplay(String(result));

    } catch(error) {
      setDisplay(String(error));
    }
  };

  const clear = () => {
    setDisplay("");
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="0"
        keyboardType="numeric"
        editable={false}
        value={display || "0"}
      />

      <View style={styles.keyboard}>

        <View style={styles.btnC}>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("1")}><Text>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("2")}><Text>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("3")}><Text>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorKey} onPress={() => addNumber("-")}>
            <Text style={styles.operatorText}>-</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.btnC}>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("4")}><Text>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("5")}><Text>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("6")}><Text>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorKey} onPress={() => addNumber("/")}>
            <Text style={styles.operatorText}>÷</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.btnC}>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("7")}><Text>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("8")}><Text>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("9")}><Text>9</Text></TouchableOpacity>
          
          <TouchableOpacity style={styles.operatorKey} onPress={() => addNumber("+")}>
            <Text style={styles.operatorText}>+</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.btnC}>
          <TouchableOpacity style={styles.operatorKey} onPress={() => addNumber("*")}>
            <Text style={styles.operatorText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => addNumber("0")}><Text>0</Text></TouchableOpacity>

          <TouchableOpacity style={styles.operatorKey} onPress={() => addNumber(".")}>
            <Text style={styles.operatorText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorKeyC}
            onPress={calculate}
          >
            <Text style={styles.btnText}>
              =
            </Text>
          </TouchableOpacity>

        </View>
        
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={clear}
          >
            <Text style={styles.btnText}>
              C
            </Text>
          </TouchableOpacity>

        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 20,
  },

  input: {
    height: 100,
    fontWeight: "bold",
    fontSize: 20,

  },

  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  keyboard: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },

  btnC: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 15,
  },


  key: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },


  actions: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },


  clearBtn: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 15,
    width: 120,
    alignItems: "center",
  },


  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  operatorKey: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  operatorKeyC: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  operatorText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

});