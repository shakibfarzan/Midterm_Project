import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import AboutPage from "./components/aboutPage";
import BlogPage from "./components/blogPage";
import ContactPage from "./components/contactPage";
import NotFoundPage from "./components/notfoundPage";
import ScrollToTop from "./components/common/scrollToTop";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Switch>
          <Route path="/homepage" component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect from="/" exact to={Homepage} />
          <Redirect to="/" />
        </Switch>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}

export default App;
