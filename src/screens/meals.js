import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataMeals } from "../store/actions";
import Card from "../components/card";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function Meals(props) {
  const { filter } = props.route.params;
  const { meals } = useSelector((state) => ({
    meals: state.meals,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchDataMeals(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`
      )
    );
  }, [dispatch]);

  return (
    <View>
      <ScrollView vertical showsVerticalScrollIndicator={true}>
        {meals?.map((el, idMeal) => {
          {
            return (
              <TouchableOpacity
                style={styles.card}
                key={idMeal}
                onPress={() =>
                  props.navigation.navigate("Recipe", { idMeal: el.idMeal })
                }
              >
                <Card item={el}></Card>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 7,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 15,
  },
});
