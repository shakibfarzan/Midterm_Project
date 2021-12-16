import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Homepage />
      </main>
      <Footer />
    </>
  );
}

export default App;
