import { View, Text, StyleSheet, Linking } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                About Calculator
            </Text>

            <Text style={styles.description}>
                Calculator is a simple and fast mobile application
                that allows you to perform basic mathematical operations
                such as addition, subtraction, multiplication, and division.
            </Text>

            <View style={styles.info}>
                <Text style={styles.label}>
                    App Name:
                    <Text style={styles.value}> Calculator</Text>
                </Text>

                <Text style={styles.label}>
                    Version:
                    <Text style={styles.value}> 1.0.0</Text>
                </Text>

                <Text style={styles.label}>
                    Platform:
                    <Text style={styles.value}> React Native + Expo</Text>
                </Text>
            </View>

            <Text
                style={styles.footer}

            >
                © 2026 Calculator App{"\n"}
                Developed by <Text style={styles.link} onPress={() => Linking.openURL("https://www.zakariaelahmar.com/")} >z.lahmar</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },

    description: {
        fontSize: 16,
        textAlign: "justify",
        lineHeight: 24,
        color: "#555",
        marginBottom: 30,
    },

    info: {
        width: "100%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        elevation: 3,
    },

    label: {
        fontSize: 16,
        marginBottom: 12,
        fontWeight: "bold",
    },

    value: {
        fontWeight: "normal",
        color: "#555",
    },

    footer: {
        marginTop: 30,
        color: "#777",
        textAlign: "center",
        fontSize: 14,
    },
    link: {
        color: "blue",
        
    },
});