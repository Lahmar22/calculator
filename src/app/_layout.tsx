import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Calculator",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen 
        name="index"
        options={{
          title: "Calculator"
        }}
      />
    </Stack>
  );
}