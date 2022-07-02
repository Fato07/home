import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import 
 configuration from "./editable-stuff/configurations.json";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/home/Portfolio";
import 'semantic-ui-css/semantic.min.css'

const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      {/* <Skills/> */}
      <Project />
      <Portfolio />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {configuration.showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    <Footer />
  </BrowserRouter>
);

export default App;
