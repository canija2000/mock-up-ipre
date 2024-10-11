import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <ChakraProvider>
      <Welcome />
    </ChakraProvider>
  );
}

export default App;
