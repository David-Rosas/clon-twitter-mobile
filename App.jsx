import React from "react";
import { View, Text } from "react-native";
import { AuthProvider } from "./context/AuthProvider";
import  Root from "./Root";

export default function App() {
  return (
    <AuthProvider>
      <Root/>
    </AuthProvider>
  );
}
