import { StatusBar } from "expo-status-bar";
import AppNav from "./src/navigation/AppNav";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
      <AuthProvider>
        <AppNav />
      </AuthProvider>
  );
}

