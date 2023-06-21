import React from "react";
import { EvilIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";

const DATA = [
  {
    id: 1,
    title: "One title",
  },
  {
    id: 2,
    title: "Two title",
  },
  {
    id: 3,
    title: "three title",
  },
  {
    id: 4,
    title: "Fourth title",
  },
  {
    id: 5,
    title: "Five title",
  },
  {
    id: 6,
    title: "Six title",
  },
  {
    id: 7,
    title: "Seven title",
  },
  {
    id: 8,
    title: "Eight title",
  },
  {
    id: 9,
    title: "Nine title",
  },
];

export default function HomeScreen({ navigation }) {
  const gotoProfile = () => {
    navigation.navigate("Profile Screen");
  };

  const gotoSingleTweet = () => {
    navigation.navigate("Tweet Screen");
  };
 
  const gotoNewTweet = () => {
    navigation.navigate("New Tweet");
  }

  const renderItem = ({ item }) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={gotoProfile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.flexRow} onPress={() => gotoProfile()}>
          <Text numberOfLines={1} style={styles.tweetName}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            @DeivixRock
          </Text>
          <Text>&middot;</Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            9m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tweetContentContainer}
          onPress={() => gotoSingleTweet()}
        >
          <Text style={styles.tweetContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </Text>
        </TouchableOpacity>
        <View style={styles.tweetEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons
              name="comment"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>456</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name="retweet"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>32</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name="heart"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>456</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <Ionicons
              name="md-stats-chart"
              size={16}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>1000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name={Platform.OS == "ios" ? "share-apple" : "share-google"}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.tweetSeparator}></View>
        )}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => gotoNewTweet()}
      >
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  styleButton: {
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: "row",
  },
  tweetContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tweetSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: "bold",
    color: "#222222",
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: "gray",
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    lineHeight: 18,
  },
  textGray: {
    color: "gray",
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d9bf1",
    position: "absolute",
    bottom: 20,
    right: 12,
  },
  ml4: {
    marginLeft: 16,
  },
});
