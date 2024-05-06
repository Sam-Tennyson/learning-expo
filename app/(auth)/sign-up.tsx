import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import ActionButton from "@/components/ActionButton";
import { Link } from "expo-router";

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary flex-1 px-4 ">
      <ScrollView>
        <View className="w-full justify-start gap-4">
          <Text className="text-3xl">Create new account</Text>
          <View>
            <FormField
              title={"Email your username"}
              value={form.name}
              placeholder={"Enter email or username"}
              handleChangeText={(text: string) =>
                setForm({ ...form, name: text })
              }
            />
          </View>
          <View>
            <FormField
              title={"Email your email"}
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
              buttonLabel={"Create"}
              onPress={() => {
                alert("Sign up ho gya");
                // router.setParams({ name: "Updated" });
              }}
            />
          </View>
          <Link href={"/(auth)/sign-in"} className="text-blue-400 underline">
            Sign in to your account
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
