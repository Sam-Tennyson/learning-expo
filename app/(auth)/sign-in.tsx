import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import ActionButton from "@/components/ActionButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <ScrollView>
        <View className="w-full justify-center gap-4">
          <Text className="text-3xl">Log in to auction</Text>
          <View>
            <FormField
              title={"Email or username"}
              value={form.email}
              placeholder={"Enter email or username"}
              handleChangeText={(text: string) =>
                setForm({ ...form, email: text })
              }
            />
          </View>
          <View>
            <FormField
              title={"Password"}
              value={form.password}
              placeholder={"Enter email or username"}
              handleChangeText={(text: string) =>
                setForm({ ...form, password: text })
              }
            />
          </View>
          <View className="flex items-start">
            <ActionButton
              buttonLabel={"Login"}
              onPress={() => {
                alert("Logina api hit");
                // router.setParams({ name: "Updated" });
              }}
            />
          </View>
          <Link href={"/(auth)/sign-up"} className="text-blue-400 underline">
            Create account
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
