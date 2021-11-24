import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/components/navigation/AppNavigator";
import ActivityIndicator from "./app/components/common/ActivityIndicator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
  // return <ActivityIndicator visible={true} />;
}
