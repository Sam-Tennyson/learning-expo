import { View, Text, Pressable } from "react-native";
import React from "react";
import { GestureResponderEvent } from "react-native";

interface IActionButton {
  buttonLabel: string;
  onPress?: (event: GestureResponderEvent) => void | null | undefined;
  isLoading?: boolean;
  disabled?: boolean;
  customClass?: string;
  isSubmit?: boolean;
  icon?: any;
  isActionButton?: boolean;
  isDeleteButton?: boolean;
}

const ActionButton = (props: IActionButton) => {
  const {
    buttonLabel,
    onPress,
    isLoading,
    disabled,
    customClass,
    isSubmit,
    icon,
    isActionButton = true,
    isDeleteButton = false,
  } = props;

  const getButtonClass = () => {
    if (isDeleteButton) {
      return "bg-[#dc3545]";
    }
    if (isActionButton) {
      return "bg-brand-color";
    }
    return "bg-gray-700";
  };
  return (
    <>
      <Pressable
        disabled={disabled || isLoading}
        onPress={onPress}
        className="max-w-fit"
      >
        {isLoading ? (
          "Loading.."
        ) : (
          <Text
            className={`mx-auto rounded-lg text-white p-4 ${getButtonClass()}`}
          >
            {buttonLabel}
          </Text>
        )}
        {icon ? icon : null}
      </Pressable>
    </>
  );
};

export default ActionButton;
