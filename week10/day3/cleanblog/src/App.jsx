import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HelmetProvider } from 'react-helmet-async';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import SamplePost from "./Pages/SamplePost";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="samplePost" element={<SamplePost />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
