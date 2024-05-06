import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";
import img1 from "@/assets/images/adaptive-icon.png";
import img2 from "@/assets/images/favicon.png";
import img3 from "@/assets/images/icon.png";
import img4 from "@/assets/images/splash.png";

export default function EmojiList(props: { onSelect?: (event:any) => void; onCloseModal?: () => void }) {
  const { onSelect = () => {}, onCloseModal = () => {} } = props;
  const [emoji] = useState([img1, img2, img3, img4]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
