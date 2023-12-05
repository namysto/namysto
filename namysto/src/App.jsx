import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [menuRequest, setMenuRequest] = useState("");
  return (
    <>
      <Header setMenuRequest={setMenuRequest} />
      <Main menuRequest={menuRequest} />
      <Footer />
    </>
  );
}

export default App;
