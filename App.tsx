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
  Text, InputAccessoryView, Button,
} from "react-native";
import { useAnimatedKeyboard, useDerivedValue } from "react-native-reanimated";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const App = () => {

  const Tabs = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name={"homeTab"} component={HomeStack} options={{
          headerShown: false,
          animation: "fade",
          animationTypeForReplace: "push",
        }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
    </Stack.Navigator>
  );
}

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Push nav" onPress={() => navigation.push("demo")}/>
    </View>
  );
}

const DemoScreen = () => {
  const [text, setText] = useState("");
  const keyboard = useAnimatedKeyboard();
  const navigation = useNavigation();

  // just here for the console.log statememt
  useDerivedValue(() => {
    console.log(`Keyboard Height: ${keyboard.height.value} Keyboard State: ${keyboard.state.value}`);
    return keyboard.height.value;
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", maxWidth: 1000,  }}>
      <Text>1. Focus the input and look at the log output</Text>
      <InputAccessoryView>
        <TextInput placeholder="Focus me" value={text} onChangeText={setText} style={{ width: 300, borderStyle: "solid", borderColor: "black", borderWidth: 1 }} />
      </InputAccessoryView>
    </View>
  )
}

export default App;
