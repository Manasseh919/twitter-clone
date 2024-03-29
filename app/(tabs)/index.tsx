import { StyleSheet, Image, View, FlatList } from "react-native";

import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
// const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      {/* <Tweet tweet={tweets[0]} /> */}

      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});
