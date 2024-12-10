import "@/global.css"
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    drawerLabelStyle: {
                        fontSize: 14,
                        fontWeight: "bold",
                        marginLeft: -10,
                    },
                    drawerActiveTintColor: "steelblue",
                    swipeEdgeWidth: 100,
                }}
                initialRouteName="homepage"
            >
                <Drawer.Screen
                    name="homepage"
                    options={{
                        drawerLabel: "Homepage",
                        headerStyle: {
                            borderWidth: 1,
                            borderColor: "#f0f0f0",
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        },
                        headerTitleAlign: "center",
                        headerTitleContainerStyle: {
                            height: "auto",
                        },
                        drawerIcon: ({ focused, color, size }) =>
                            focused ? (
                                <Ionicons name="home" size={size} />
                            ) : (
                                <Ionicons name="home-outline" size={size} />
                            ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
