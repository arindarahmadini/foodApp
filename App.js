import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/home";
import Meals from "./src/screens/meals";
import Recipe from "./src/screens/recipe";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Meals"
            component={Meals}
            options={{
              title: null,
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#e84118",
              },
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Recipe"
            component={Recipe}
            options={{
              title: null,
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#e84118",
              },
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
