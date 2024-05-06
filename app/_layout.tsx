import "@/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { NativeWindStyleSheet } from "nativewind";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const queryClient = new QueryClient();
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(auth)"
            options={{ headerShown: true, headerTitle: "Authentication" }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: true, headerTitle: "Exercise Home" }}
          />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
        {/* <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              title: "Drawer",
            }}
          />
          <Drawer.Screen
            // name="index" // This is the name of the page and must match the url from root
            name="(tabs)"
            options={{
              drawerLabel: "My Tabs",
              title: "Project",
            }}
          />
          <Drawer.Screen
            name="modal" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Modal",
              title: "overview",
            }}
          />
        </Drawer>
      </GestureHandlerRootView> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
