import { fetchProducts } from "@/api/home";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native";
import { View, Text, ActivityIndicator } from "react-native";

export default function Products() {
  const { isLoading, isError, data: dataProducts, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Error: {error?.message}</Text>;
  }
  // console.log(dataProducts, "dataProducts");
  return (
    <View className="px-4 flex-1 gap-4">
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={false}
        ListHeaderComponent={() => {
          return (
            <View className="flex flex-row justify-between items-center w-full text-3xl my-4">
              <Link href={"/"} className="dark:text-white text-2xl underline uppercase">
                Go to home
              </Link>
              <Text className="dark:text-white text-center text-2xl ">
                Products
              </Text>
            </View>
          );
        }}
        numColumns={2}
        contentContainerStyle={{ gap: 8 }}
        columnWrapperStyle={{ gap: 5 }}
        data={dataProducts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              className="border border-gray-300 shadow rounded-lg flex-1"
              // onPress={() => handleBlogClick(item)}
            >
              <View>
                <Image
                  resizeMode="cover"
                  source={{ uri: item?.image }}
                  alt={"banner-image"}
                  className="aspect-video rounded-t-lg"
                />
                <View className="p-4">
                  <Text className="dark:text-white">{item?.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

