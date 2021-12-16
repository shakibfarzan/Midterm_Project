import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Homepage />
      </main>
    </>
  );
}

export default App;
