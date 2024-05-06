import ActionButton from "@/components/ActionButton";
import { Link } from "expo-router";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View className={`flex flex-col gap-4 px-4 py-2 `}>
      {/* <Stack> */}

      <Stack.Screen
        options={{
          headerTitle: "Deltails",
        }}
      />
      <Link href={"/home"} className="text-blue-500 underline">
        Go to home
      </Link>
      
      <View className="flex items-start">
        <ActionButton
          buttonLabel={" Update the title"}
          onPress={() => {
            router.setParams({ name: "Updated" });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
