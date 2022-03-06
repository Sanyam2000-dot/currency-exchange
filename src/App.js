import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComp from "./screens/LoginComp";
import SignUpComp from "./screens/SignUpComp";
import { ChakraProvider } from "@chakra-ui/react";
import LandingpageComp from "./screens/LandingpageComp";
import HomepageComp from "./screens/HomepageComp";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingpageComp />} />
          <Route exact path="/home" element={<HomepageComp />} />
          <Route exact path="/login" element={<LoginComp />} />{" "}
          <Route exact path="/signup" element={<SignUpComp />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </ChakraProvider>
  );
}

export default App;
