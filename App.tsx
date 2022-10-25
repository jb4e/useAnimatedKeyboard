/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from "react";
import {
  TextInput,
  View,
  Text, InputAccessoryView,
} from "react-native";
import { useAnimatedKeyboard, useDerivedValue } from "react-native-reanimated";


const App = () => {

  const [text, setText] = useState("");
  const keyboard = useAnimatedKeyboard();

  // just here for the console.log statememt
  useDerivedValue(() => {
    console.log(`Keyboard Height: ${keyboard.height.value} Keyboard State: ${keyboard.state.value}`);
    return keyboard.height.value;
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>1. Focus the input and look at the log output</Text>
      <InputAccessoryView>
        <TextInput placeholder="Focus me" value={text} onChangeText={setText} style={{ width: 300, borderStyle: "solid", borderColor: "black", borderWidth: 1 }} />
      </InputAccessoryView>
    </View>
  );
};

export default App;
