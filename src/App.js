import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Error, Home, InConstruction } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<InConstruction />} />
        <Route exact path="/v1" element={<Home />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
