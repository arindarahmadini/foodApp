import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { IconButton, Colors } from "react-native-paper";
import Card from "../components/card";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategories } from "../store/actions";

export default function Home(props) {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchAllCategories(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      )
    );
  }, [dispatch]);

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <View style={styles.rowTitle}>
          <Text style={styles.title}>Good Food.</Text>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(232,65,24,0.4)", "transparent"]}
        style={styles.gradient}
      >
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#ea8685"
            style={styles.searchText}
          />
          <IconButton icon="magnify" color={Colors.red500} size={20} />
        </View>
      </LinearGradient>
      <View style={styles.rowCategories}>
        <View style={{ width: "50%" }}>
          <Text style={styles.categories}>Categories</Text>
          <View style={styles.underlineText}></View>
        </View>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <View style={styles.rowBtn}>
            <Text style={styles.moreBtn}>More</Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {categories?.map((el, idx) => {
          {
            return (
              <TouchableOpacity
                key={idx}
                style={styles.card}
                onPress={() =>
                  props.navigation.navigate("Meals", {
                    filter: el.strCategory,
                  })
                }
              >
                <Card item={el} isCategory></Card>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    backgroundColor: "#e84118",
    height: "35%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
  },
  rowTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    width: "100%",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 50,
  },
  gradient: {
    left: 0,
    right: 0,
    height: 90,
    marginTop: -45,
  },
  searchBar: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    fontWeight: "bold",
    fontSize: 15,
    width: 260,
  },
  rowCategories: {
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    marginTop: "10%",
  },
  rowAmerican: {
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  categories: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#585a61",
  },
  underlineText: {
    height: 3,
    backgroundColor: "#e84118",
    width: 90,
    marginTop: 3,
  },
  rowBtn: {
    backgroundColor: "#e84118",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
  },
  moreBtn: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#fff",
  },
  card: {
    height: 160,
    width: 190,
    elevation: 7,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
});
