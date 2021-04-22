import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { fetchDataRecipe } from "../store/actions";
import Card from "../components/card";

export default function Recipe(props) {
  const { idMeal } = props.route.params;
  const { recipe } = useSelector((state) => ({
    recipe: state.recipe,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchDataRecipe(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      )
    );
  }, [dispatch]);

  const [favorite, setFavorite] = useState(false);
  const favoriteBtn = () => {
    setFavorite(!favorite);
  };

  //function to get ingredient and its measurement
  const filterItems = (query) => {
    return Object.keys(recipe).filter(
      (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  const dataIngredient = () => {
    return filterItems("strIngredient").map((ingr) => {
      if (recipe[ingr]) {
        return <Text>{recipe[ingr]}</Text>;
      }
    });
  };

  return (
    <ImageBackground
      style={{ flex: 0.7 }}
      source={{ uri: recipe.strMealThumb }}
    >
      <View style={styles.imageDetails}>
        <Text style={styles.title}>{recipe.strMeal}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <IconButton
            icon="heart"
            color={favorite ? "red" : "#585a61"}
            size={30}
            onPress={() => favoriteBtn()}
          />
        </View>
        <ScrollView vertical showsVerticalScrollIndicator={true}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <IconButton
              icon="map-marker"
              size={23}
              color="red"
              style={{ marginTop: -15, marginRight: 15 }}
            />
            <Text style={styles.textArea}>{recipe.strArea}</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.subtitle}>ingredient: </Text>
            {dataIngredient()}
          </View>
          <Text style={styles.subtitle}>Instruction: </Text>
          <Text style={{ color: "black", marginBottom: 200 }}>
            {recipe.strInstructions}
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
  title: {
    width: "70%",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  detailsContainer: {
    top: 350,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 1,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: "white",
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    marginTop: -10,
    marginLeft: -20,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#585a61",
    marginTop: 20,
  },
});
