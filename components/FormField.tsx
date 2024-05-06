import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

interface IFormField {
  title: string,
  value: string,
  placeholder?: string,
  handleChangeText:any,
  otherStyles?: string,
  props?: any
}

const FormField = (prop: IFormField) => {
  const {title, value, placeholder, handleChangeText, otherStyles, ...props} = prop
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={` gap-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <FontAwesome name="eye" size={25} />
            ) : (
              <FontAwesome name="eye-slash" size={25} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
