import { Link } from 'expo-router';
import { Image, Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { styled } from "nativewind";
import ActionButton from '@/components/ActionButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMAGES from '@/constants/Images';

const StyledText = styled(Text);

function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Home() {
  const onPress = () => {
    alert("alskjdfa;lskdfj")
  }
  return (
    <SafeAreaView className="bg-primary flex-1 p-4">
      <ScrollView>
        <View className="w-full justify-start items-center gap-4">
          <Link
            href={"/(tabs)/products"}
            className="text-2xl text-white underline uppercase"
          >
            Go to home
          </Link>
          <Image
            className="w-[130px] h-[84px] "
            source={IMAGES.greenCheck}
            resizeMode="contain"
          />

          <Image
            // className="w-[130px] h-[84px]"
            source={IMAGES.animals}
            resizeMode="contain"
          />
          <Link
            href={"/(auth)/sign-up"}
            className="text-2xl text-white underline uppercase"
          >
            Create Account
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
